import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../sidebar.css";

const SingleMail = ({ state, dispatch }) => {
  const { type, id } = useParams();
  const ind = state.currentList.findIndex((item) => item.id === parseInt(id));
  const [left, setLeft] = useState(ind);
  const [right, setRight] = useState(ind);

  const strLeft = "/" + type + "/" + state.currentList[left].id;
  const strRight = "/" + type + "/" + state.currentList[right].id;

  const handleRoute = () => {
    if (ind === 0) setLeft(ind);
    else setLeft(ind - 1);

    if (ind === state.currentList.length - 1) setRight(ind);
    else setRight(ind + 1);
  };

  return (
    <div className="final-design">
      {/* <SideNavbar setcurrentActive={setcurrentActive} /> */}
      <article className="single-mail">
        <div className="btn-group">
          <Link to="/" style={{ all: "unset" }}>
            <span>
              <i className="fas fa-arrow-left"></i>
            </span>
          </Link>
          <span>
            <i className="fas fa-save"></i>
          </span>
          <span>
            <i className="fas fa-bug"></i>
          </span>
          <span>
            <i className="fas fa-trash"></i>
          </span>
          <span>
            <i className="far fa-envelope-open"></i>
          </span>
          <span>
            <i className="fas fa-clock"></i>
          </span>
          <span>
            <i className="fas fa-check-circle"></i>
          </span>
          <span>
            <i className="fas fa-file-download"></i>
          </span>
          <span>
            <i className="fas fa-tag"></i>
          </span>
          <span>
            <i className="fas fa-ellipsis-v"></i>
          </span>
          {/* to={`/${type}/${currentList[ind - 1].id}`} */}
          <div className="side-button">
            <Link to={strLeft} style={{ all: "unset" }} onClick={handleRoute}>
              <span>
                <i className="fas fa-chevron-left"></i>
              </span>
            </Link>
            <Link to={strRight} style={{ all: "unset" }} onClick={handleRoute}>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </Link>
            <span></span>
          </div>
        </div>
        <section>
          <div className="mail-heading">
            <span className="title">{state.currentList[ind].company}</span>
            <span>
              <div className="content-btn-group">
                <div>inbox</div>
                <div> x</div>
              </div>
            </span>
            <div className="content-btn-group2">
              <span>
                <i className="fas fa-print"></i>
              </span>
              <span>
                <i className="fas fa-external-link-alt"></i>
              </span>
            </div>
          </div>
          <div className="mail-box">
            <div className="mail-user">
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14Ghq--_zhxbly4U4eeKKxwYyNo7VMz7-5XMPpzEDhQ=s40"
                alt="avtar"
              />
            </div>
            <div className="mail-content">
              <div className="user-mail-header">
                <div className="user-mail-header1">
                  <span>
                    <b> {state.currentList[ind].company} </b>
                  </span>
                  <span>
                    {" "}
                    &lt;notifications@{
                      state.currentList[ind].company
                    }.com&gt;{" "}
                  </span>
                </div>
                <div className="user-mail-header2">
                  <span style={{ fontSize: "0.8rem" }}>
                    15 Oct 2021, 23:30 (10 hours ago){" "}
                  </span>
                  <span className="font-icon">
                    <i className="far fa-star" style={{ paddingLeft: "0" }}></i>
                  </span>
                  <span className="font-icon">
                    <i className="fas fa-reply"></i>
                  </span>
                  <span className="font-icon">
                    <i className="fas fa-ellipsis-v"></i>
                  </span>
                </div>
              </div>
              <div className="inner-main-content">
                <p style={{ fontSize: "0.9rem" }}>
                  {state.currentList[ind].dummy}
                </p>
              </div>
            </div>
          </div>
          <div className="btn-group-reply">
            <button>
              <i className="fas fa-reply"></i>Reply
            </button>
            <button>
              <i className="fas fa-arrow-right"></i> Forward
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SingleMail;
