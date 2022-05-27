import React, { useContext } from "react";
import { Context } from "../store/appContext";
import sunsetImg from "../../img/sunset.jpg";
import mindsetLogo from "../../img/mindset-logo.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="homePhoto">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="d-flex flex-column align-items-center">
          {/* <img id="homePhoto" src={sunsetImg} /> */}
          <img src={mindsetLogo} />
          <p>MindSet - /ˈmaɪn(d)ˌset/ - noun</p>
          <p>: a mental attitude or inclination</p>
          <p>: a fixed state of mind</p>
          <a class="btn btn-primary" href="./login" role="button">
            Get started now
          </a>
        </div>
      </div>
    </div>
  );
};
