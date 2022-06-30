//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/home.css";
import "../styles/login.css";
import "../styles/main.css";
import "../styles/statusupdate.css";
import "../styles/signup.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
