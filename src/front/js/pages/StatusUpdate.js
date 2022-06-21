import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Questionnaire } from "../component/Questionnaire";

export const StatusUpdate = () => {
  const { store, actions } = useContext(Context);
  const [isSelected, setSelected] = useState(false);
  const [issues, setIssues] = useState([
    store.issues.issue1,
    store.issues.issue2,
    store.issues.issue3,
  ]);
  console.log(store.issues);

  const clickHandler = (e) => {
    setSelected(!isSelected);
  };

  return (
    <div>
      <Navbar />
      <Questionnaire />
      <Link to="/main">
        <button className="btn btn-primary mt-3" onClick={() => setValue({})}>
          Submit Status
        </button>
      </Link>
    </div>
  );
};
