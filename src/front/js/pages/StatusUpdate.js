import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Questionnaire } from "../component/Questionnaire";

export const StatusUpdate = () => {
  const { store, actions } = useContext(Context);
  const [issues, setIssues] = useState([
    store.issues.issue1,
    store.issues.issue2,
    store.issues.issue3,
  ]);
  console.log(store.issues);

  const [isSelected, setSelected] = useState(false);
  const clickHandler = (e) => {
    setSelected(!isSelected);
  };

  return (
    <div>
      <Navbar />
      <div
        id="questionnaire"
        className="container-fluid position-relative top-0 start-50 translate-middle-x"
      >
        <h5 className="status-h5">
          <em>Please rate how your issues are affecting you today.</em>
          <br />
          Select a happy face if your issues are not bothering you, or select a
          sad face if they are having a negative impact on you today.
        </h5>
        <Questionnaire />

        {/* <button
          className={isSelected ? "emoji-selected" : ""}
          onClick={clickHandler}
        >
          Change color
        </button> */}
      </div>
    </div>
  );
};
