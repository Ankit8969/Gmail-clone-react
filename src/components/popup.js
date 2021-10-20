import React, { useContext, useState, useRef } from "react";
import "../popup.css";
import { HandleDelete } from "./App";

const PopUp = () => {
  const Msgref = useRef();
  const helper = useContext(HandleDelete);
  const { state, dispatch } = helper;
  const [show, setShow] = useState("true");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setShowPopup(!showPopUp);
    // setContent(Msgref.current.innerText);

    dispatch({
      type: "setContent",
      payload: { setContent: Msgref.current.innerText },
    });

    dispatch({
      type: "setShowPopup",
      payload: { showPopUp: !state.showPopUp },
    });
    const obj = {
      id: state.sentList.length,
      company: "Sender",
      Title: state.subject,
      dummy: state.content,
    };
    // const list = sentList;
    // list.push(obj);
    // setSentList(list);
    dispatch({
      type: "setSentList",
      payload: { setSentList: [...state.sentList, obj] },
    });
  };

  return (
    <div className="popup-box">
      <div className="popup-header">
        <span>New Message</span>
        <div className="popup-btn">
          <i
            className="fas fa-times"
            onClick={() =>
              dispatch({
                type: "setShowPopup",
                payload: { setShowPopup: !state.showPopUp },
              })
            }
          ></i>
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
              value={state.mail}
              onChange={(e) =>
                dispatch({
                  type: "setMail",
                  payload: { setMail: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="Subject"
              required
              value={state.subject}
              onChange={(e) =>
                dispatch({
                  type: "setSubject",
                  payload: { setSubject: e.target.value },
                })
              }
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
