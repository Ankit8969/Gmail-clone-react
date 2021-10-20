import React, { useState, useEffect, createContext, useReducer } from "react";
import MainNavbar from "./mainnavbar";
import Navbar from "./navbar";
import "../index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleMail from "./SingleMail";
import primary from "../data/primary";
import promotion from "../data/promotion";
import social from "../data/social";
import PopUp from "./popup";
import "../popup.css";

export const HandleDelete = createContext();

const App = () => {
  const [currentActive, setcurrentActive] = useState("primary");
  const [tempPrimary] = useState(primary);
  const [tempPromotion] = useState(promotion);
  const [tempSocial] = useState(social);
  const [currentList, setCurrentList] = useState(tempPrimary);
  const [DeletedList, setDeletedList] = useState([]);
  const [snoozedlist, setSnoozedList] = useState([]);
  const [starredList, setStarredList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [showPopUp, setShowPopup] = useState(false);
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("Send What Ever you Want!");
  const [sentList, setSentList] = useState([primary[0]]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (currentActive === "primary") setCurrentList(tempPrimary);
    else if (currentActive === "social") setCurrentList(tempSocial);
    else if (currentActive === "promotions") setCurrentList(tempPromotion);
    else if (currentActive === "delete") setCurrentList(DeletedList);
    else if (currentActive === "snooze") setCurrentList(snoozedlist);
    else if (currentActive === "starred") setCurrentList(starredList);
    else if (currentActive === "sent") setCurrentList(sentList);
    else if (currentActive === "draft") setCurrentList([social[0]]);
    else if (currentActive === "spam") setCurrentList([promotion[0]]);
  }, [
    DeletedList,
    currentActive,
    sentList,
    snoozedlist,
    starredList,
    tempPrimary,
    tempPromotion,
    tempSocial,
  ]);

  // This function run when we will delete any mail
  const HandleList = (Titem) => {
    const NewList = currentList.filter(
      (item) => item.id !== parseInt(Titem.id)
    );
    setCurrentList(NewList);
    const list = DeletedList;
    list.push(Titem);
    setDeletedList(list);
  };

  const HandleSnoozeList = (item) => {
    const list = snoozedlist;
    list.push(item);
    setSnoozedList(list);
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <HandleDelete.Provider
          value={{
            HandleList,
            currentActive,
            currentList,
            setcurrentActive,
            HandleSnoozeList,
            starredList,
            setStarredList,
            searchItem,
            setSearchItem,
          }}
        >
          <MainNavbar currentList={currentList} currentActive={currentActive} />
        </HandleDelete.Provider>
      </React.Fragment>

      <Switch>
        <Route path="/" exact>
          <HandleDelete.Provider
            value={{
              HandleList,
              currentActive,
              currentList,
              setcurrentActive,
              HandleSnoozeList,
              starredList,
              setStarredList,
              setSearchItem,
              showPopUp,
              setShowPopup,
              mail,
              setMail,
              subject,
              setSubject,
              content,
              setContent,
              sentList,
              setSentList,
            }}
          >
            <Navbar />
            {showPopUp ? <PopUp /> : ""}
          </HandleDelete.Provider>
        </Route>
        <Route path="/:type/:id">
          <HandleDelete.Provider value={{ showPopUp, setShowPopup }}>
            <SingleMail
              currentList={currentList}
              setcurrentActive={setcurrentActive}
            />
          </HandleDelete.Provider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
