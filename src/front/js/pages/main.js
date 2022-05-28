import React, { useContext } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import FormSignup from '../pages/FormSignup.js';
import FormSuccess from './FormSuccess';


<Navbar />
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div id="homePhoto">
      
    </div>
  );
};

export default Main;