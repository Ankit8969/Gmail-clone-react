import React, { useContext } from "react";
import "../index.css";
import SingleLine from "./singleLine";
import { HandleDelete } from "./App";

const PrintList = () => {
  const helper = useContext(HandleDelete);
  const { currentList } = helper;
  return (
    <React.Fragment>
      {currentList.map((item) => (
        <SingleLine key={item.id} item={item} />
      ))}
    </React.Fragment>
  );
};

export default PrintList;
