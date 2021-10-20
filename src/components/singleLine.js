import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HandleDelete } from "./App";

const SingleLine = ({ item }) => {
  const helper = useContext(HandleDelete);
  const { state, dispatch, HandleSnoozeList, HandleList } = helper;

  const [show, setShow] = useState(false);
  const [background, setBackground] = useState("white");
  const [starBack, setStarBack] = useState("far fa-star");
  const [starColor, setStarColor] = useState("#767676");

  const AddDelete = (item) => {
    HandleList(item);
  };

  const handleStar = () => {
    starBack === "far fa-star"
      ? setStarBack("fas fa-star")
      : setStarBack("far fa-star");

    starColor === "#767676" ? setStarColor("#113CFC") : setStarColor("#767676");

    // const list = starredList;
    // list.push(item);
    // setStarredList(list);
    dispatch({
      type: "setStarredList",
      payload: { starredList: [...state.starredList, item] },
    });
  };

  const { company, Title, dummy } = item;
  return (
    <div
      style={{ position: "relative", backgroundColor: background }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="mail">
        <div className="title-box">
          <div>
            <i className="far fa-square"></i>
          </div>
          <div onClick={() => handleStar()}>
            <i className={starBack} style={{ color: starColor }}></i>
          </div>
          <p className="company">{company}</p>
        </div>
        <Link
          to={`/${state.currentActive}/${item.id}`}
          style={{ all: "unset" }}
        >
          <div
            className="mail-text"
            onClick={() =>
              dispatch({ type: "setSearchItem", payload: { searchItem: "" } })
            }
          >
            <span className="mail-text-title">{Title}</span>
            <span className="mail-text-dummy">{dummy}</span>
          </div>
        </Link>
      </div>

      {show ? (
        <div className="update-button">
          <div
            className="ui icon"
            data-tooltip="Archive"
            data-position="bottom left"
            data-inverted=""
          >
            <i className="fas fa-file-download"></i>
          </div>
          <div
            onClick={() => AddDelete(item)}
            className="ui icon"
            data-tooltip="Delete"
            data-position="bottom left"
            data-inverted=""
          >
            <i className="fas fa-trash"></i>
          </div>
          <div
            className="ui icon"
            data-tooltip="Mark as Read"
            data-position="bottom left"
            data-inverted=""
          >
            <i
              className="fas fa-envelope-open-text"
              onClick={() =>
                background === "white"
                  ? setBackground("#F1F3F4")
                  : setBackground("white")
              }
            ></i>
          </div>
          <div
            onClick={() => HandleSnoozeList(item)}
            className="ui icon"
            data-tooltip="Snooze"
            data-position="bottom left"
            data-inverted=""
          >
            <i className="far fa-clock"></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleLine;
