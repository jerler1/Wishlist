import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import JobModal from "../../components/JobModal/JobModal";
import seeds from "../../seed/seeds";

const Home = () => {
  const [localData, setLocalData] = useState([
    {
      company: "",
      job: "",
      thumbnail: "",
    },
  ]);
  const [tempLocalData, setTempLocalData] = useState([
    {
      company: "",
      job: "",
      thumbnail: "",
    },
  ]);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const localRetrieval = JSON.parse(localStorage.getItem("wishlist"));

    localRetrieval.length !== 0
      ? setLocalData(localRetrieval)
      : setLocalData(seeds);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(localData));
  }, [localData]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.job);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const settingModal = (event) => {
    setModalActive(!modalActive);
  };

  return (
    <div>
      <div className="columns">
        <div className="column is-one-quarter mx-4 mt-6 is-flex-direction-column">
          <h1 className="mainTitle has-text-centered has-text-black is-size-3 has-text-weight-bold">
            WISHLIST
          </h1>
          <h3 className="jobs has-text-centered is-size-5 has-text-dark">
            {localData.length} JOBS
          </h3>
          <button
            onClick={settingModal}
            className="button is-medium is-fullwidth my-3 shadow"
          >
            <i className="fas fa-plus"></i>
          </button>
          <section>
            {localData.map((object, index) => (
              <Card key={index} object={object} />
            ))}
          </section>
        </div>
        <JobModal
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          modalActive={modalActive}
          settingModal={settingModal}
        />
      </div>
    </div>
  );
};

export default Home;
