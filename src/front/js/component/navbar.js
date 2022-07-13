import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import styles from "../../styles/navbar.css";
import mindsetLogo from "../../img/mindset-logo-greenB6D7B3.png";
// import navbarBackground from "../../img/navbarBackground.png";

export const NavMenu = () => {
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

            <NavDropdown title="Chart History" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <Link to="/charts" className="nav-link">
                  Select Chart Type:
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Area Chart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bar Chart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Line Chart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pie Chart</NavDropdown.Item>
            </NavDropdown>
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
    //////////////////////////////////////////////REACT-BOOTSTRAP///////////////////////////////////
    // <Navbar bg="transparent" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img src={mindsetLogo} margin="0 5px" height="180px" width="auto" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/main">Home</Nav.Link>
    //         <Nav.Link href="/statusupdate">Daily Status</Nav.Link>
    //         <Nav.Link href="/charts">Chart History</Nav.Link>

    //         <NavDropdown title="Chart History" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="/charts">
    //             Select Chart Type:
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.1">Area Chart</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">Bar Chart</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Line Chart</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.4">Pie Chart</NavDropdown.Item>
    //         </NavDropdown>

    //         <Nav.Link href="#" onClick={() => actions.logOut()}>
    //           Sign Out
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};
