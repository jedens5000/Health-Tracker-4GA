import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
import mainPageBackground from "../../img/mainPageBackground.png";
import "../../styles/home.css";
import "../../styles/main.css";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import { ChartLine } from "../component/ChartLine";

export const Main = () => {
  const { store, actions } = useContext(Context);
  console.log(store.issues);
  useEffect(() => {
    actions.getIssues();
    actions.getQuote();
    actions.getAnswers();
  }, []);
  console.log(store.name);

  return (
    <div>
      <Navbar />
      {/* <div className="homeContainer"> */}
      <div
        className="main-body ps-3"
        style={{ backgroundImage: `url(${mainPageBackground})` }}
      >
        <h2>Welcome {store.name}!</h2>
        <h3>Currently tracking:</h3>
        <p>Issue: {store.issues.issue1}</p>
        {store.issues.issue2 ? <p>Issue: {store.issues.issue2}</p> : ""}
        {store.issues.issue3 ? <p>Issue: {store.issues.issue3}</p> : ""}
        {/* {store.issues.map((item) => {
            return (
              <ul>
                <li>{item.name}</li>
              </ul>
            );
          })} */}
        <blockquote className="pt-2 text-center">
          "{store.quote.text}"<br />
          <p>
            <em> &mdash; {store.quote.author}</em>
          </p>
        </blockquote>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Main;
