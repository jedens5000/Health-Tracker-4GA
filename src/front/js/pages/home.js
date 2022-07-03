import React, { useContext } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo-clear.png";
// import mainPageBackground from "../../img/bgImgLotusBlue.png";
import mainBamboo from "../../img/bamboo-home.jpg";
// import bambooBg from "../../img/bamboo1.jpg";
import styles from "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      // className="home-body"
      id="homeBg"
    >
      <img id="homePhoto" src={mainBamboo} alt="bamboo" />
      <div
      // style={{
      //   backgroundImage: `url(${mainPageBackground})`,
      // }}
      >
        <div className="position-absolute top-50 start-50 translate-middle text-bg-home">
          <h5 className="p-5 text-center">
            <em>
              We all have issues, seeing how they affect you is the first step
              to getting them under control. Mindset is here to help you find
              your balance.
            </em>
          </h5>
          <div className="d-flex flex-column align-items-center">
            <img src={mindsetLogo} />
            <div className="d-flex flex-column justify-content-center text-center">
              <p>MindSet - /ˈmaɪn(d)ˌset/ - noun</p>
              <p>: a mental attitude or inclination</p>
              <p>: a fixed state of mind</p>
            </div>
            <a className="btn btn-primary mb-5" href="./login" role="button">
              Get started now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
