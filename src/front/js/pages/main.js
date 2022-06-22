import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
import mainPageBackground from "../../img/mainPageBackground.png";
import "../../styles/home.css";
import "../../styles/main.css";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import { ChartLine } from "../component/ChartLine";
import { ChartBar } from "../component/ChartBar";

export const Main = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getIssues();
    actions.getQuote();
    actions.getAnswers();
  }, []);
  console.log(store.issues);
  console.log(store.name);
  console.log(store.data);

  return (
    <div>
      <Navbar />
      <div
        className="main-body ps-3"
        style={{ backgroundImage: `url(${mainPageBackground})` }}
      >
        <h2>Welcome {store.name}!</h2>
        <h3>Here's what you're currently tracking:</h3>
        <p>Issue 1: {store.issues.issue1}</p>
        {store.issues.issue2 ? <p>Issue 2: {store.issues.issue2}</p> : ""}
        {store.issues.issue3 ? <p>Issue 3: {store.issues.issue3}</p> : ""}

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
    </div>
  );
};

export default Main;
