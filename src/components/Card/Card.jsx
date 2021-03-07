import dayjs from "dayjs";
import React from "react";
import "./Card.css";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Card = (props) => {
  return (
    <div
      className={`box ${props.object.color}`}
      onClick={props.handleDeleteButtonVisibility}
    >
      <article className="media cardPosition">
        <div className="media-left">
          <figure className="image is-32x32">
            <img className="logo" src={props.object.thumbnail} alt="logo" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h4 className="has-text-white">{props.object.company}</h4>
            <h5 className="has-text-white">{props.object.job}</h5>
          </div>
        </div>
        <div className="media-right">
          <button
            onClick={props.settingDeleteModal}
            className={`button deleteButton ${
              props.deleteButtonVisible ? "" : "is-hidden"
            }`}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
        <div class="timeDate">
          <p className="has-text-white">{`added: ${dayjs().to(
            props.object.date
          )}`}</p>
        </div>
      </article>
    </div>
  );
};

export default Card;
