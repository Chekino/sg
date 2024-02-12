/*import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo-sg.svg";
function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Navbar bg="danger" variant="dark" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home" width="">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleNavbarToggle}
            aria-controls="basic-navbar-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">Mes comptes</Nav.Link>
              <Nav.Link href="">Mes Cartes</Nav.Link>
              <Nav.Link href="">Paramètres</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;*/

import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Offcanvas,
  Image,
} from "react-bootstrap";
import logo from "../assets/bmce_group.png";
import "./header.css";
import profil from "../assets/2606517_5856.jpg";
import { Link } from "react-router-dom";
import deconnect from "../assets/deconnect.png";

const Header = ({ onLogout }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Button
            variant=""
            onClick={handleShowOffcanvas}
            className="d-md-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill=""
              className="w-5 h-5"
              style={{ width: "25px", height: "25px" }}
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
            <div style={{ fontSize: "10px" }}>MENU</div>
          </Button>
          <Navbar.Brand href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>

          <Button
            variant="danger"
            onClick={onLogout}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              padding: 0,
              border: "none",
              overflow: "hidden",
            }}
          >
            <img
              src={deconnect}
              alt=""
              style={{ width: "25px", height: "25px", borderRadius: "50%" }}
            />
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex align-items-center mb-3">
            <Image
              src={profil}
              alt="Photo de profil"
              roundedCircle
              width={40}
              height={40}
              className="mr-2"
            />

            <div>
              <div className="fw-bold">MICHELE JEANNE SOLIS</div>
              <div>Numéro de compte : **** 8856</div>
            </div>
          </div>
          <div className="trait mb-4"></div>
          <ul className="nav flex-column">
            <Link to="/" className="link-style">
              <div>
                <li className="nav-item ">
                  <a className="nav-link" style={{ color: "red" }} href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ width: "25px", height: "25px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    Tableau de bord
                  </a>
                </li>
              </div>
            </Link>
            <Link to="/virement" className="link-style">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "red" }} href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    style={{ width: "25px", height: "25px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  Effectuer un Virement
                </a>
              </li>
            </Link>
            <Link to="/cartes" className="link-style">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "red" }} href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    style={{ width: "25px", height: "25px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                  Mes Cartes
                </a>
              </li>
            </Link>
            <Link to="/historique" className="link-style">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "red" }}
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    style={{ width: "25px", height: "25px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                  Mon Historique
                </a>
              </li>
            </Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
