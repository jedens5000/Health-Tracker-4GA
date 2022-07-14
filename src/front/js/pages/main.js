import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
// import mainPageBackground from "../../img/mainPageBackground.png";
// import mainPageBackground from "../../img/bgImgLotusBlue.png";
import mainPageBackground from "../../img/bamboo9.jpg";
import "../../styles/main.css";
import { NavMenu } from "../component/navbar";
import { Link } from "react-router-dom";

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
      <div
        className="main-body ps-1 main-bg-img"
        style={{
          backgroundImage: `url(${mainPageBackground})`,
          // backgroundSize: "cover",
          // backgroundSize: "100vmax",
          // position: "static",
        }}
      >
        <NavMenu />
        <div className="pt-3 m-3 text-bg">
          <div className="ms-3">
            <h2>Welcome, {store.name}!</h2>
            <h3>
              <em>Here's what you're currently tracking:</em>
            </h3>
            <p>Issue 1: {store.issues.issue1}</p>
            {store.issues.issue2 ? <p>Issue 2: {store.issues.issue2}</p> : ""}
            {store.issues.issue3 ? <p>Issue 3: {store.issues.issue3}</p> : ""}
            {/* <Stats /> */}
            <blockquote className="py-2 text-center">
              "{store.quote.text}"<br />
              <p>
                <em> &mdash; {store.quote.author}</em>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
