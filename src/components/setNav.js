import React from "react";

const SetNav = ({ setcurrentActive }) => {
  return (
    <React.Fragment>
      <div
        className="nav-items primary"
        onClick={() => setcurrentActive("primary")}
      >
        <div className="nav-img">
          <i className="fas fa-portrait"></i>
        </div>
        <span>Primary</span>
      </div>
      <div
        className="nav-items social"
        onClick={() => setcurrentActive("social")}
      >
        <div className="nav-img">
          <i className="fas fa-user-friends"></i>
        </div>
        <span>Social</span>
      </div>
      <div
        className="nav-items promotions"
        onClick={() => setcurrentActive("promotions")}
      >
        <div className="nav-img">
          <i className="fas fa-key"></i>
        </div>
        <span>Promotions</span>
      </div>
    </React.Fragment>
  );
};

export default SetNav;
