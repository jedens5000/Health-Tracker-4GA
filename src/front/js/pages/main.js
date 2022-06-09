import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
import mainPageBackground from "../../img/mainPageBackground.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import FormSignup from "../pages/FormSignup.js";
import { Link } from "react-router-dom";
import { Quote } from "../component/Quote";

export const Main = () => {
  const { store, actions } = useContext(Context);
  console.log(store.issues);
  useEffect(() => {
    actions.getIssues();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="homeContainer">
        <div
          style={{
            backgroundImage: "url(/mainPageBackground.png)",
            backgroundSize: "cover",
            id: "background",
            border: "1px solid yellowgreen",
            borderRadius: 5,
          }}
        >
          {/* <h2>Welcome {user.name}!</h2> */}
          <h3>Currently tracking:</h3>
          <p>Issue: {store.issues.issue1}</p>
          <p>Issue: {store.issues.issue2}</p>
          <p>Issue: {store.issues.issue3}</p>
          {/* {store.issues.map((item) => {
            return (
              <ul>
                <li>{item.name}</li>
              </ul>
            );
          })} */}
          <Link to="/statusupdate">
            <button>Status Update</button>
          </Link>
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Main;
