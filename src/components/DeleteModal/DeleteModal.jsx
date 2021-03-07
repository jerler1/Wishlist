import React from "react";
import "./DeleteModal.css";

const DeleteModal = (props) => {
  return (
    <>
      <div className={props.deleteModalActive ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content has-background-white p-6" id="deleteModal">
          <div className="container">
            <p className="has-text-centered is-size-2 has-text-weight-bold">
              Delete Job
            </p>
            <p className="my-2">Are you sure you want to delete this job?</p>
            <footer className="modal-card-foot">
              <button className="button">Delete</button>
              <button onClick={props.settingDeleteModal}className="button">Cancel</button>
            </footer>
          </div>
        </div>
      </div>
      <button
        name="job"
        onClick={props.settingDeleteModal}
        className="modal-close is-large"
        aria-label="close"
      ></button>
    </>
  );
};

export default DeleteModal;
