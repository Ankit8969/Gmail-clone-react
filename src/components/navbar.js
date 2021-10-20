import React, { useContext } from "react";
import PrintList from "./printList";
import SetNav from "./setNav";
import SideNavbar from "./sideNavbar";
import { HandleDelete } from "./App";

const Nabar = () => {
  const helper = useContext(HandleDelete);
  const { dispatch, state } = helper;
  return (
    <React.Fragment>
      <nav>
        <SetNav dispatch={dispatch} />
      </nav>
      <div className="final-design">
        <SideNavbar dispatch={dispatch} state={state} />
        <div style={{ height: "100vh", overflowY: "scroll" }}>
          <PrintList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nabar;
