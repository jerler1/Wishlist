import React from "react";
import "./Home.css";
import seeds from "../../seed/seeds";

const Home = () => {
  return (
    <div>
      <div className="columns">
        <div className="column is-one-quarter mx-4 mt-6 is-flex-direction-column">
          <h1 className="mainTitle has-text-centered has-text-black is-size-3 has-text-weight-bold">
            WISHLIST
          </h1>
          <h3 className="jobs has-text-centered is-size-5 has-text-dark">3 JOBS</h3>
          <button className="button is-medium is-fullwidth my-3 shadow">
            <i class="fas fa-plus"></i>
          </button>
          <section className="">
            {seeds.map((object, index) => (
              <div className="box has-background-info-dark">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-32x32">
                      <img className="logo" src={object.thumbnail} alt="logo" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <h4 className="has-text-white">{object.company}</h4>
                      <h5 className="has-text-white">{object.jobTitle}</h5>
                    </div>
                  </div>
                  <div className="media-right">
                    <button className="button deleteButton">
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
