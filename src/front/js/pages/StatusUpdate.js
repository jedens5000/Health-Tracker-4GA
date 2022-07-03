import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Questionnaire } from "../component/Questionnaire";
// import mainPageBackground from "../../img/bgImgLotusBlue.png";
import mainPageBackground from "../../img/bamboo10.jpg";

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
    <div
      className="h-100"
      style={{
        backgroundImage: `url(${mainPageBackground})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div
        id="questionnaire"
        // className="container-fluid position-relative top-0 start-50 translate-middle-x text-bg-status"
        className="container-fluid position-relative text-bg-status"
      >
        <h4 className="status-h5">
          <em>Please rate how your issues are affecting you today.</em>
          <br />
        </h4>
        <p className="status-h5">
          Select a 😊 happy face if your issues are not bothering you,
          <br /> or select a ☹️ sad face if they are having a negative impact on
          you today.
        </p>
        <Questionnaire />
      </div>
    </div>
  );
};
