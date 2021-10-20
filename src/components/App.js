import React, { useEffect, createContext, useReducer } from "react";
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

const reducer = (state, action) => {
  if (action.type === "setcurrentActive")
    return {
      ...state,
      currentActive: (state.currentActive = action.payload.currentActive),
    };
  else if (action.type === "setCurrentList")
    return {
      ...state,
      currentList: (state.currentList = action.payload.currentList),
    };
  else if (action.type === "setDeletedList")
    return {
      ...state,
      DeletedList: (state.DeletedList = action.payload.DeletedList),
    };
  else if (action.type === "setSnoozedList")
    return {
      ...state,
      snoozedlist: (state.snoozedlist = action.payload.snoozedlist),
    };
  else if (action.type === "setStarredList")
    return {
      ...state,
      starredList: (state.starredList = action.payload.starredList),
    };
  else if (action.type === "setSearchItem")
    return {
      ...state,
      searchItem: (state.searchItem = action.payload.searchItem),
    };
  else if (action.type === "setShowPopup")
    return {
      ...state,
      showPopUp: (state.showPopUp = action.payload.setShowPopup),
    };
  else if (action.type === "setMail")
    return { ...state, mail: (state.mail = action.payload.setMail) };
  else if (action.type === "setSubject")
    return { ...state, subject: (state.subject = action.payload.setSubject) };
  else if (action.type === "setContent")
    return { ...state, content: (state.content = action.payload.setContent) };
  else if (action.type === "setSentList")
    return {
      ...state,
      sentList: (state.sentList = action.payload.setSentList),
    };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentActive: "primary",
    tempPrimary: primary,
    tempPromotion: promotion,
    tempSocial: social,
    currentList: primary,
    DeletedList: [],
    snoozedlist: [],
    starredList: [],
    searchItem: "",
    showPopUp: false,
    mail: "",
    subject: "",
    content: "Send What ever you Want",
    sentList: [primary[0]],
  });

  useEffect(() => {
    if (state.currentActive === "primary")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: state.tempPrimary },
      });
    else if (state.currentActive === "social")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: state.tempSocial },
      });
    else if (state.currentActive === "promotions")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: state.tempPromotion },
      });
    else if (state.currentActive === "delete")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: state.DeletedList },
      });
    else if (state.currentActive === "snooze")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: state.snoozedlist },
      });
    else if (state.currentActive === "starred")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: state.starredList },
      });
    else if (state.currentActive === "sent")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: state.sentList },
      });
    else if (state.currentActive === "draft")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: [social[0]] },
      });
    else if (state.currentActive === "spam")
      dispatch({
        type: "setCurrentList",
        payload: { currentList: [promotion[0]] },
      });
  }, [
    state.DeletedList,
    state.currentActive,
    state.sentList,
    state.snoozedlist,
    state.starredList,
    state.tempPrimary,
    state.tempPromotion,
    state.tempSocial,
  ]);

  // This function run when we will delete any mail
  const HandleList = (Titem) => {
    const NewList = state.currentList.filter(
      (item) => item.id !== parseInt(Titem.id)
    );
    dispatch({ type: "setCurrentList", payload: { currentList: NewList } });
    dispatch({
      type: "setDeletedList",
      payload: { DeletedList: [...state.DeletedList, Titem] },
    });
  };

  const HandleSnoozeList = (item) => {
    dispatch({
      type: "setSnoozedList",
      payload: { snoozedlist: [...state.snoozedlist, item] },
    });
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <HandleDelete.Provider
          value={{
            HandleList,
            dispatch,
            HandleSnoozeList,
            state,
          }}
        >
          <MainNavbar />
        </HandleDelete.Provider>
      </React.Fragment>

      <Switch>
        <Route path="/" exact>
          <HandleDelete.Provider
            value={{
              dispatch,
              state,
              HandleSnoozeList,
              HandleList,
            }}
          >
            <Navbar />
            {state.showPopUp ? <PopUp /> : ""}
          </HandleDelete.Provider>
        </Route>
        <Route path="/:type/:id">
          <HandleDelete.Provider value={{ state, dispatch }}>
            <SingleMail dispatch={dispatch} state={state} />
          </HandleDelete.Provider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
