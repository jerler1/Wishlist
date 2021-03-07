import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="box has-background-info-dark">
      <article className="media">
        <div className="media-left">
          <figure className="image is-32x32">
            <img className="logo" src={props.object.thumbnail} alt="logo" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h4 className="has-text-white">{props.object.company}</h4>
            <h5 className="has-text-white">{props.object.jobTitle}</h5>
          </div>
        </div>
        <div className="media-right">
          <button className="button deleteButton">
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </article>
    </div>
  );
};

export default Card;
