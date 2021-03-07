import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import seeds from "../../seed/seeds";

const Home = () => {
  const [localData, setLocalData] = useState([]);
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
      </div>
      <div className={modalActive ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content" id="jobModal">
          <div className="container">
            <form className="has-background-white p-6 ">
              <p className="has-text-centered is-size-2 has-text-weight-bold">
                Add a job
              </p>
              <hr />
              <div className="control has-icons-right my-2">
                <input
                  name="company"
                  className="input"
                  type="text"
                  placeholder="Company Name"
                />
                <span className="icon is-right">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <div className="control has-icons-right my-2">
                <input
                  name="job"
                  className="input"
                  type="text"
                  placeholder="Position"
                />
                <span className="icon is-right">
                  <i className="fas fa-briefcase"></i>
                </span>
              </div>
              <div className="control has-icons-right my-2">
                <input
                  name="image"
                  className="input"
                  type="text"
                  placeholder="Image Link"
                />
                <span className="icon is-right">
                  <i className="fas fa-images"></i>
                </span>
              </div>
              <button
                type="submit"
                id="jobSubmitButton"
                className="button is-fullwidth mt-3"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
        <button
          onClick={settingModal}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
    </div>
  );
};

export default Home;
