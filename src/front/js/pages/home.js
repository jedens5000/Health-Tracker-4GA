import React, { useContext } from "react";
import { Context } from "../store/appContext";
import sunsetImg from "../../img/sunset.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <img className="bgimg" src={sunsetImg} />
      <p>Welcome</p>
    </div>
  );
};
