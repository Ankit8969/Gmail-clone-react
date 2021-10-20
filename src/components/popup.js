import React, { useContext, useState, useRef } from "react";
import "../popup.css";
import { HandleDelete } from "./App";

const PopUp = () => {
  const Msgref = useRef();
  const helper = useContext(HandleDelete);
  const {
    mail,
    setMail,
    subject,
    setSubject,
    content,
    setContent,
    showPopUp,
    setShowPopup,
    sentList,
    setSentList,
  } = helper;
  const [show, setShow] = useState("true");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(!showPopUp);
    setContent(Msgref.current.innerText);

    const obj = {
      id: sentList.length,
      company: "Sender",
      Title: subject,
      dummy: content,
    };
    const list = sentList;
    list.push(obj);
    setSentList(list);
    console.log(list);
  };

  return (
    <div className="popup-box">
      <div className="popup-header">
        <span>New Message</span>
        <div className="popup-btn">
          <i className="fas fa-times" onClick={() => setShowPopup(!showPopUp)}></i>
          <i className="fas fa-expand-alt"></i>
          <i className="fas fa-minus" onClick={() => setShow(!show)}></i>
        </div>
      </div>
      {show ? (
        <div className="popup-content">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              placeholder="Recipients"
              autoFocus
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <div
              className="popup-message"
              contentEditable="true"
              role="textbox"
              ref={Msgref}
            >
              Send What Ever you Want!
            </div>

            <div className="popup-send-btn">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PopUp;
