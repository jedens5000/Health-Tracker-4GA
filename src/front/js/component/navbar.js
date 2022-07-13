import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/navbar.css";
import mindsetLogo from "../../img/mindset-logo-greenB6D7B3.png";

export const NavMenu = () => {
  const { store, actions } = useContext(Context);
  const [expanded, setExpanded] = useState(true);

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent">
      <Container style={{ marginLeft: "0" }}>
        <Navbar.Brand href="#home">
          <img src={mindsetLogo} margin="0 5px" height="180px" width="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div
              className="collapse navbar-collapse d-flex justify-content-start align-self-stretch"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ml-auto fs-4" id="homeNavbar">
                <a className="nav-link" aria-current="page" href="/main">
                  Home
                </a>
                <Link
                  to="/statusupdate"
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                >
                  <p>Progress Tracker</p>
                </Link>
                <Link
                  to="/charts"
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                >
                  <p>Chart History</p>
                </Link>

                <NavDropdown title="Chart History" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">
                    <Link to="/charts" className="nav-link">
                      Select Chart Type:
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Area Chart
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Bar Chart
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Line Chart
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Pie Chart
                  </NavDropdown.Item>
                </NavDropdown>
                <Link
                  to="/SMSForm"
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                >
                  <p>Reminders</p>
                </Link>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => actions.logOut()}
                >
                  Sign Out
                </a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
