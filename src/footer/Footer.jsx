import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/02_ok.svg";

const Footer = () => {
  return (
    <footer className=" py-3 bg-light text-dark mt-5 ">
      <div className="container">
        <div className="row py-4">
          <div xs={12} md={6} className="d-flex flex-wrap">
            <a className="m-2 link-style">Recrutement</a>
            <a className="m-2 link-style">Contactez-Nous</a>
            <a className="m-2 link-style">Conditions générales d'utilisation</a>
            <a className="m-2 link-style">Tarifications</a>
          </div>
        </div>
        <Row className="pb-4">
          <Col md={6} className="text-left">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ width: "200px" }}
            />{" "}
          </Col>
        </Row>
        <div className="trait text-center">
          <strong> &copy; Société Générale • 2023</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
