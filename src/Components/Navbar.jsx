import React from "react";

const Navbar = ({ readMode, setReadMode }) => {
  const toggleButton = () => {
    setReadMode(!readMode);

    localStorage.setItem("toggle", JSON.stringify(!readMode));
  };
  return (
    <header>
      <nav
        className={
          readMode
            ? "navbar navbar-dark bg-success"
            : "navbar navbar-light text-light bg-primary"
        }
      >
        <div className="container-fluid">
          <span className="navbar-brand text-light">Thoughts Collector</span>
          <div className="toggle-mode d-flex align-items-center justify-content-center">
            <i
              className="fas fa-sun"
              style={{ fontSize: "28px", paddingRight: "8px" }}
            ></i>
            <label className="theme-switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                onClick={toggleButton}
                checked={readMode}
                readOnly={true}
              />
              <div className="slider round"></div>
            </label>
            <i
              className="fas fa-moon"
              style={{ fontSize: "25px", paddingLeft: "10px" }}
            ></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
