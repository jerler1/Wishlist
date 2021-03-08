import React from "react";
import "./JobModal.css";

const JobModal = (props) => {
  return (
    <>
      <div className={props.modalActive ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content" id="jobModal">
          <div className="container">
            <form
              onSubmit={props.handleFormSubmit}
              className="has-background-white p-6 is-relative"
            >
              <p className="has-text-centered is-size-2 has-text-weight-bold">
                Add a job
              </p>
              <hr />
              <button
                className="delete is-medium exitButton"
                onClick={props.toggleModal}
              ></button>
              <div className="control has-icons-right my-2">
                <input
                  name="company"
                  onChange={props.handleInputChange}
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
                  onChange={props.handleInputChange}
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
                  name="thumbnail"
                  onChange={props.handleInputChange}
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
      </div>
    </>
  );
};

export default JobModal;
