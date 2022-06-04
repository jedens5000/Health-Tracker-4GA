import React, { useContext } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import FormSignup from "../pages/FormSignup.js";
// import FormSuccess from './FormSuccess';

export const Main = () => {
  const { store, actions } = useContext(Context);
  console.log(store.issues);
  return (
    <div>
      <Navbar />
      {/* <div id="homePhoto"> */}
      <div>
        {/* <h2>Welcome {user.name}!</h2> */}
        {/* {store.issues.map((item) => {
          return `<span>${item.name}</span>`;
        })} */}
      </div>
    </div>
  );
};

export default Main;
