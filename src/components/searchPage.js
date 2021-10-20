import React, { useContext } from "react";
import SingleLine from "./singleLine";
import { HandleDelete } from "./App";

const SearchPage = () => {
  const helper = useContext(HandleDelete);
  const { state } = helper;

  if (state.searchItem.toLowerCase().trim().length === 0) return "";
  const arr = state.currentList.filter(
    (item) =>
      item.company
        .toLowerCase()
        .search(state.searchItem.toLowerCase().trim()) !== -1
  );
  if (arr.length === 0) return "";
  return (
    <div className="search-page">
      {arr.map((item) => (
        <SingleLine key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SearchPage;
