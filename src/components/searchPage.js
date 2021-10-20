import React, { useContext } from "react";
import SingleLine from "./singleLine";
import { HandleDelete } from "./App";

const SearchPage = () => {
  const helper = useContext(HandleDelete);
  const { currentList, searchItem } = helper;

  if (searchItem.toLowerCase().trim().length === 0) return "";
  const arr = currentList.filter(
    (item) =>
      item.company.toLowerCase().search(searchItem.toLowerCase().trim()) !== -1
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
