import React, { useContext } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import FormSignup from '../pages/FormSignup.js';
// import FormSuccess from './FormSuccess';



export const Main = () => {
  const { store, actions } = useContext(Context);

  return (
    <div><Navbar />
    <div id="homePhoto">
      <p>hello world</p>
    </div>
    </div>
  );
};

export default Main;