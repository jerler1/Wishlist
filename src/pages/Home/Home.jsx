import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import seeds from "../../seed/seeds";

const Home = () => {
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const localRetrieval = localStorage.getItem("wishlist");
    localRetrieval
      ? setLocalData(JSON.parse(localRetrieval))
      : setLocalData(seeds);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(localData));
  }, [localData]);

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
          <button className="button is-medium is-fullwidth my-3 shadow">
            <i className="fas fa-plus"></i>
          </button>
          <section className="">
            {localData.map((object, index) => (
              <Card key={index} object={object} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
