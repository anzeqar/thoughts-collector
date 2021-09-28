import React from "react";

const Thought = ({ id, thought, dateTime, onDelete, readMode }) => {
  return (
    <>
      <div
        className={
          !readMode
            ? "card mt-4 bg-light text-dark rounded-3"
            : "card mt-4 bg-black text-light rounded-3"
        }
      >
        <div className="card-body d-flex">
          <div>
            <p className="card-title" style={{ textAlign: "justify" }}>
              {thought}
            </p>

            <p
              className={
                !readMode ? "card-text text-info" : "card-text text-warning"
              }
            >
              {dateTime}
            </p>
          </div>
          <div className="ms-auto align-self-center ps-4">
            <button className="btn btn-danger" onClick={() => onDelete(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thought;
