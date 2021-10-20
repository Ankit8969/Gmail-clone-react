import React, { useContext } from "react";
import "../index.css";
import SingleLine from "./singleLine";
import { HandleDelete } from "./App";

const PrintList = () => {
  const helper = useContext(HandleDelete);
  const { state } = helper;
  return (
    <React.Fragment>
      {state.currentList.map((item) => (
        <SingleLine key={item.id} item={item} />
      ))}
    </React.Fragment>
  );
};

export default PrintList;
