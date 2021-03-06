import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="columns">
        <div className="column is-one-third mx-4 mt-6 is-flex-direction-column">
          <h1 className="mainTitle has-text-centered">WISHLIST</h1>
          <h3 className="jobs has-text-centered">3 JOBS</h3>
          <button className="button is-medium is-fullwidth">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
