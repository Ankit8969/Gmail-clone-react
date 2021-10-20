import React, { useContext } from "react";
import "../index.css";
import SearchPage from "./searchPage";
import { HandleDelete } from "./App";

const MainNavbar = () => {
  const helper = useContext(HandleDelete);
  const { searchItem, setSearchItem } = helper;
  return (
    <section className="navbar">
      <div className="logo-container">
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt=""
          />
        </div>
      </div>
      <div className="search-bar">
        <div
          className="search-button ui icon"
          data-tooltip="Search"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-search" />
        </div>
        <div className="text-input">
          <input
            type="text"
            placeholder="Search mail"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        {searchItem.length > 0 ? <SearchPage /> : ""}
        <div
          className="search-setting ui icon"
          data-tooltip="Show search options"
          data-position="bottom left"
          data-inverted=""
        >
          <i class="fas fa-sliders-h" />
        </div>
      </div>

      <div className="user-profiles">
        <div
          className="ui icon"
          data-tooltip="Help"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="far fa-question-circle" />
        </div>
        <div
          className="ui icon"
          data-tooltip="Setting"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-cog"></i>
        </div>
        <div
          className="ui icon"
          data-tooltip="Help"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fal fa-border-none"></i>
        </div>
        <div
          className="ui icon user-image"
          data-tooltip="User"
          data-position="bottom left"
          data-inverted=""
        >
          <img
            src="https://lh3.googleusercontent.com/-sRMrl6qNKfg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmvyL2bfMIPYQU2eUrSMPQ0hJ18_g/photo.jpg?sz=46"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
