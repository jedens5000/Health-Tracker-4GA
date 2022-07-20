import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import mindsetLogo from "../../img/mindset-logo-greenB6D7B3.png";

export const NavMenu = () => {
  const { store, actions } = useContext(Context);
  const [expanded, setExpanded] = useState(true);

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent">
      <Container style={{ marginLeft: "0", fontFamily: "Raleway, sans-serif" }}>
        <Navbar.Brand href="/main">
          <img src={mindsetLogo} margin="0 5px" height="180px" width="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav justify className="me-auto">
            <div className="navbar-nav ml-auto fs-4 justify-content-between">
              <a className="nav-link" aria-current="page" href="/main">
                Home
              </a>
              <Link
                to="/statusupdate"
                onClick={() => setExpanded(false)}
                className="nav-link"
              >
                <p>Daily Status</p>
              </Link>
              <Link
                to="/charts"
                onClick={() => setExpanded(false)}
                className="nav-link"
              >
                <p>Chart History</p>
              </Link>
              <Link
                to="/Reminders"
                onClick={() => setExpanded(false)}
                className="nav-link"
              >
                <p>Reminders</p>
              </Link>
              <a className="nav-link" href="#" onClick={() => actions.logOut()}>
                Sign Out
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
