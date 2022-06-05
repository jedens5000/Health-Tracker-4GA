import React, { useContext } from "react";
import { Context } from "../store/appContext";
import mindsetLogo from "../../img/mindset-logo.png";
import mainPageBackground from "../../img/mainPageBackground.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import FormSignup from "../pages/FormSignup.js";


export const Main = () => {
  const { store, actions } = useContext(Context);
  console.log(store.issues);
  return (
    <div>
      <Navbar />

      <div className="homeContainer">
      <div style={{backgroundImage: "url(/mainPageBackground.png)", backgroundSize: 'cover', id: 'background', border: '1px solid yellowgreen', borderRadius: 5}}>

        {/* <h2>Welcome {user.name}!</h2> */}
        {/* {store.issues.map((item) => {
          return `<span>${item.name}</span>`;
        })} */}

      </div>
    </div>
  );
};

export default Main;
