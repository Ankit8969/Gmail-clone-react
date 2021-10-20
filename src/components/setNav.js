import React from "react";

const SetNav = ({ dispatch }) => {
  return (
    <React.Fragment>
      <div
        className="nav-items primary"
        // onClick={() => setcurrentActive("primary")}
        onClick={() =>
          dispatch({
            type: "setcurrentActive",
            payload: { currentActive: "primary" },
          })
        }
      >
        <div className="nav-img">
          <i className="fas fa-portrait"></i>
        </div>
        <span>Primary</span>
      </div>
      <div
        className="nav-items social"
        //onClick={() => setcurrentActive("social")}
        onClick={() =>
          dispatch({
            type: "setcurrentActive",
            payload: { currentActive: "social" },
          })
        }
      >
        <div className="nav-img">
          <i className="fas fa-user-friends"></i>
        </div>
        <span>Social</span>
      </div>
      <div
        className="nav-items promotions"
        //onClick={() => setcurrentActive("promotions")}
        onClick={() =>
          dispatch({
            type: "setcurrentActive",
            payload: { currentActive: "promotions" },
          })
        }
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
