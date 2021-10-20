import React, { useState, useEffect, useContext } from "react";
import "../sidebar.css";
import { HandleDelete } from "./App";

const SideNavbar = ({ setcurrentActive }) => {
  const [show, setShow] = useState(false);
  const [innerText, setInnerText] = useState("More");
  const [classt, setClasst] = useState("fas fa-chevron-down");
  const helper = useContext(HandleDelete);
  const { showPopUp, setShowPopup } = helper;
  useEffect(() => {
    show ? setInnerText("Less") : setInnerText("More");
    show ? setClasst("fas fa-chevron-up") : setClasst("fas fa-chevron-down");
  }, [show]);

  return (
    <div className="side-navbar">
      <div className="compose-btn" onClick={() => setShowPopup(!showPopUp)}>
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt="compose"
        />
        <span>Compose</span>
      </div>

      <div className="btn-group">
        <ul className="side-bar-btn-group1">
          <li>
            <div onClick={() => setcurrentActive("primary")}>
              <i class="far fa-window-maximize"></i>
              <span>Inbox</span>
            </div>
          </li>
          <li>
            <div onClick={() => setcurrentActive("starred")}>
              <i class="fas fa-star" style={{ paddingLeft: 0 }}></i>
              <span>Starred</span>
            </div>
          </li>
          <li>
            <div onClick={() => setcurrentActive("snooze")}>
              <i class="fas fa-clock"></i>
              <span>Snoozed</span>
            </div>
          </li>
          <li>
            <div onClick={() => setcurrentActive("sent")}>
              <i class="fas fa-play"></i>
              <span>Sent</span>
            </div>
          </li>
          <li>
            <div onClick={() => setShow(!show)}>
              <i class={classt}></i>
              <span>{innerText}</span>
            </div>
          </li>
          {show ? (
            <React.Fragment>
              <li>
                <div onClick={() => setcurrentActive("draft")}>
                  <i class="fas fa-copy"></i>
                  <span>Draft</span>
                </div>
              </li>
              <li>
                <div onClick={() => setcurrentActive("spam")}>
                  <i class="fas fa-question-circle"></i>
                  <span>Spam</span>
                </div>
              </li>
              <li>
                <div onClick={() => setcurrentActive("delete")}>
                  <i class="fas fa-trash"></i>
                  <span>Trash</span>
                </div>
              </li>
            </React.Fragment>
          ) : (
            ""
          )}
        </ul>

        <ul className="side-bar-btn-group1 another">
          <li>
            <div>
              <i class="fas fa-video"></i>
              <span>New Meeting</span>
            </div>
          </li>
          <li>
            <div>
              <i class="fas fa-keyboard"></i>
              <span>Join a Meeting</span>
            </div>
          </li>
          <li style={{ padding: "0px" }}>
            <div className="hangout">
              <div></div>
              <img
                src="https://lh3.googleusercontent.com/-sRMrl6qNKfg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmvyL2bfMIPYQU2eUrSMPQ0hJ18_g/photo.jpg?sz=46"
                alt=""
              />
              <span>Ankit Kumar</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
