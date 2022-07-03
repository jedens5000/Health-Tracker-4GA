import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import styles from "../../styles/navbar.css";
import mindsetLogo from "../../img/mindset-logo-greenB6D7B3.png";
import navbarBackground from "../../img/navbarBackground.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg py-0">
      <div className="container-fluid">
        <img className="navlogo" src={mindsetLogo} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-start align-self-stretch"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto fs-4" id="homeNavbar">
            <a className="nav-link" aria-current="page" href="/main">
              Home
            </a>
            <Link to="/statusupdate" className="nav-link">
              <p>Progress Tracker</p>
            </Link>
            <Link to="/charts" className="nav-link">
              <p>Chart History</p>
            </Link>
            <Link to="/medications" className="nav-link">
              <p>Medications</p>
            </Link>
            <Link to="#" className="nav-link">
              <p>Resources</p>
            </Link>
            <a className="nav-link" href="#" onClick={() => actions.logOut()}>
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
