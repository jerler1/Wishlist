import React from "react";
import "./DeleteModal.css";

const DeleteModal = (props) => {
  return (
    <>
      <div className={props.deleteModalActive ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div
          className="modal-content has-background-white m-6 is-relative"
          id="deleteModal"
        >
          <div className="container">
            <button
              className="delete is-medium exitButton"
              onClick={props.toggleDeleteModal}
            ></button>
            <p className="has-text-centered is-size-2 has-text-weight-bold">
              Delete a job
            </p>
            <hr/>
            <p className="my-2">Are you sure you want to delete this job?</p>

            <button
              onClick={props.deleteCard}
              className="button m-2 has-background-danger-dark has-text-white"
            >
              Delete
            </button>
            <button
              onClick={props.toggleDeleteModal}
              className="button m-2 has-background-link has-text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
