import React, { useContext } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="homePhoto">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="d-flex flex-column align-items-center">
          <h5 className="pb-5">
            <em>
              We all have issues, seeing how they affect you is the first step
              to getting them under control.
            </em>
          </h5>
          <img src={mindsetLogo} />
          <div id="homeCardBody">
            <p>MindSet - /ˈmaɪn(d)ˌset/ - noun</p>
            <p>: a mental attitude or inclination</p>
            <p>: a fixed state of mind</p>
            <a className="btn btn-primary" href="./login" role="button">
              Get started now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
