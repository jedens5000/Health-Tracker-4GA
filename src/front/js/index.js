//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";
import "../styles/home.css";
import "../styles/signup.css";
// import "../styles/Form.css";
import "../styles/login.css";
// import "../styles/navbar.css";
// import "../styles/main.css";
import "../styles/statusupdate.css";
import "../styles/charts.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
