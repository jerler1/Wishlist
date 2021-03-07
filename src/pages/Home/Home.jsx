import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import JobModal from "../../components/JobModal/JobModal";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import seeds from "../../seed/seeds";

const Home = () => {
  const [localData, setLocalData] = useState([]);
  const [tempLocalData, setTempLocalData] = useState({
    company: "",
    job: "",
    thumbnail: "",
    date: "",
  });

  const [modalActive, setModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  useEffect(() => {
    let localRetrieval = JSON.parse(localStorage.getItem("wishlist"));
    if (localRetrieval === null) {
      localRetrieval = [];
    }
    localRetrieval.length !== 0
      ? setLocalData(localRetrieval)
      : setLocalData(seeds);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(localData));
  }, [localData]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLocalData((localData) => [...localData, tempLocalData]);
    console.log(localData);
    setModalActive(!modalActive);
  };

  const deleteCard = (event) => {
    console.log(event);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTempLocalData({ ...tempLocalData, [name]: value });
  };

  // Combine these if I have time.
  const settingModal = (event) => {
    setModalActive(!modalActive);
  };
  const settingDeleteModal = (event) => {
    setDeleteModalActive(!deleteModalActive);
  };

  const randomColor = () => {
    const colors = [
      "has-background-primary-dark",
      "has-background-link-dark",
      "has-background-success-dark",
      "has-background-warning-dark",
      "has-background-danger-dark",
    ];
    const randomValue = Math.floor(Math.random() * colors.length);
    return colors[randomValue];
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
              <Card
                color={randomColor()}
                key={index}
                object={object}
                settingDeleteModal={settingDeleteModal}
              />
            ))}
          </section>
        </div>
        <JobModal
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          modalActive={modalActive}
          settingModal={settingModal}
        />
        <DeleteModal
          deleteModalActive={deleteModalActive}
          settingDeleteModal={settingDeleteModal}
          deleteCard={deleteCard}
        />
      </div>
    </div>
  );
};

export default Home;
