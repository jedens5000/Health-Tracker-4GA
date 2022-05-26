import React, { useContext } from "react";
import { Context } from "../store/appContext";
import sunsetImg from "../../img/sunset.jpg";
import mindsetLogo from "../../img/mindset-logo.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="logo-home">
      <img src={mindsetLogo} />
      <p>Welcome</p>
    </div>
  );
};
