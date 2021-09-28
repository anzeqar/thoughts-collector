import React, { useState } from "react";

const SubmitModalThought = ({ onAdd, readMode }) => {
  const closeModal = React.useRef(null);
  const [thought, setThought] = useState("");
  const submitThought = (e) => {
    let datetime = new Date();
    datetime =
      datetime.toDateString() + " @ " + datetime.toTimeString().slice(0, 8);
    e.preventDefault();
    if (thought.length > 10) {
      onAdd({ thought, datetime });
      setThought("");
      closeModal.current.click();
    } else {
      alert("Enter More than 10 Characters");
    }
  };
  return (
    <>
      <div
        className="d-flex justify-content-end pe-4 pb-4
       fixed-bottom"
      >
        <button
          type="button"
          style={{ borderRadius: "80%" }}
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="fa fa-plus fs-1" aria-hidden="true"></i>
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className={
              readMode
                ? "modal-content bg-dark text-light"
                : "modal-content bg-light text-dark"
            }
          >
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Thoughts Collector
              </h5>
              <button
                ref={closeModal}
                type="button"
                className="btn-close bg-light"
                style={{ borderRadius: "50%" }}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitThought}>
                <div className="mb-3">
                  <textarea
                    type="text"
                    className={
                      !readMode
                        ? "form-control bg-light text-dark"
                        : "form-control bg-dark text-light"
                    }
                    id="thought"
                    placeholder="Write your thoughts here....."
                    minLength="10"
                    maxLength="50000"
                    value={thought}
                    onChange={(e) => setThought(e.target.value)}
                    required={true}
                  ></textarea>
                  <div id="emailHelp" className="form-text">
                    Your thought will be private and nobody can read it trust me
                  </div>
                </div>

                <div className="d-flex">
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitModalThought;
