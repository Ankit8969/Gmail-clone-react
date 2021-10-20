import React, { useContext } from "react";
import PrintList from "./printList";
import SetNav from "./setNav";
import SideNavbar from "./sideNavbar";
import { HandleDelete } from "./App";

const Nabar = () => {
  const helper = useContext(HandleDelete);
  const { setcurrentActive } = helper;
  return (
    <React.Fragment>
      <nav>
        <SetNav setcurrentActive={setcurrentActive} />
      </nav>
      <div className="final-design">
        <SideNavbar setcurrentActive={setcurrentActive} />
        <div style={{ height: "100vh", overflowY: "scroll" }}>
          <PrintList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nabar;
