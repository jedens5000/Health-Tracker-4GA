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
      <Container style={{ marginLeft: "0", fontFamily: "Raleway, sans-serif" }}>
        <Navbar.Brand href="/main">
          <img src={mindsetLogo} margin="0 5px" height="180px" width="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <div
              className="collapse navbar-collapse d-flex justify-content-between align-self-stretch"
              id="navbarNavAltMarkup"
            > */}
            <div
              className="navbar-nav ml-auto fs-4 justify-content-between"
              // id="homeNavbar"
            >
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

              {/* <NavDropdown title="Chart History" id="basic-nav-dropdown">
                <NavDropdown.Item href="/charts">
                  <Link to="/charts" className="nav-link">
                    Select Chart Type:
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  // href="/charts"
                  onClick={() => actions.changeChart("chartarea")}
                >
                  Area Chart
                </NavDropdown.Item>
                <NavDropdown.Item
                  // href="/charts"
                  onClick={() => actions.changeChart("chartbar")}
                >
                  Bar Chart
                </NavDropdown.Item>
                <NavDropdown.Item
                  // href="/charts"
                  onClick={() => actions.changeChart("chartline")}
                >
                  Line Chart
                </NavDropdown.Item>
              </NavDropdown> */}
              <Link
                to="/SMSForm"
                onClick={() => setExpanded(false)}
                className="nav-link"
              >
                <p>Reminders</p>
              </Link>
              <a className="nav-link" href="#" onClick={() => actions.logOut()}>
                Sign Out
              </a>
            </div>
            {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
