import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { NavDropdown, Nav, Tab, Tabs } from "react-bootstrap";
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
            {/* <Link to="/medications" className="nav-link">
              <p>Medications</p>
            </Link> */}
            <NavDropdown title="Chart History" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Select Chart Type:
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Area Chart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bar Chart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Line Chart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pie Chart</NavDropdown.Item>
            </NavDropdown>
            {/* <Link to="#" className="nav-link">
              <p>Resources</p>
            </Link> */}
            <Link to="/SMSForm" className="nav-link">
              <p>Reminders</p>
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
