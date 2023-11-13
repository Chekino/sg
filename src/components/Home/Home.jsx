import React, { useEffect, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./home.css";
import Footer from "../../footer/Footer";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  // Mettre à jour l'heure toutes les secondes
  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  const handleClose = () => setShowModal(false);

  // Utiliser useEffect pour afficher la modal au montage du composant
  useEffect(() => {
    setShowModal(true);
  }, []); // L
  return (
    <div className="mb-5">
      <div className="container">
        <div className="">
          Bienvenue à votre espace:
          <span className="ms-2" style={{ fontWeight: "bold" }}>
            DAVID BAUDRY
          </span>
        </div>
        <div className="text-center date-color">
          Dernière connexion :le {formattedDate} à {formattedTime}
        </div>
        <Card
          className="mt-3"
          style={{
            backgroundColor: "#f1f5f9",
            borderLeft: "5px solid #28a745",
          }}
        >
          <Card.Body>
            Mon solde
            <div className="row">
              <div className="col-12">
                <h3 style={{ fontWeight: "bold" }}> 754 000,00€</h3>
              </div>
              <div>**** 8856</div>
              <div className="col">Votre gestionnaire : SOFIANE REGUAGI </div>
            </div>
          </Card.Body>
        </Card>
        <Card
          className="mt-3"
          style={{
            backgroundColor: "#f1f5f9",
            height: "70px",
            borderLeft: "5px solid #4682B4",
          }}
        >
          <Card.Body>
            CB VISA INFINITE
            <div className="row">
              <div>4585 **** **** ****</div>
            </div>
          </Card.Body>
        </Card>
        <Modal
          show={showModal}
          onHide={handleClose}
          size="lg"
          style={{ marginTop: "20vh" }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              BONJOUR DAVID BAUDRY
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>VOTRE COMPTE EST BLOQUE. FRAIS DE DEBLOCAGE: 15.000€</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
        <div color="danger">
          <marquee behavior="" direction="right" className="mt-3">
            STATUT DU COMPTE: COMPTE BLOQUE / FRAIS DE DEBLOCAGE: 15.000€
          </marquee>
        </div>
      </div>

      <div className="container">
        <h4 className="m-3">OPERATION EXTERNE</h4>
        <Row>
          <Col>
            <Card style={{ backgroundColor: "#fee2e2" }}>
              <Button variant="danger">
                <Link to="/historique" className="link-style">
                  <Card.Body>
                    <Card.Title className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Card.Title>
                    <Card.Text className="text-center">Historique</Card.Text>
                  </Card.Body>
                </Link>
              </Button>
            </Card>
          </Col>
          <Col>
            <Card style={{ backgroundColor: "#ecfccb" }}>
              <Button variant="danger">
                <Link to="/virement" className="link-style">
                  <Card.Body>
                    <Card.Title className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                        />
                      </svg>
                    </Card.Title>
                    <Card.Text className="text-center">Virement</Card.Text>
                  </Card.Body>
                </Link>
              </Button>
            </Card>
          </Col>
          <Col>
            <Card style={{ backgroundColor: "#f5f5f4" }}>
              <Button variant="danger" onClick={() => setShow(true)}>
                <Link to="/cartes" className="link-style">
                  <Card.Body>
                    <Card.Title className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                    </Card.Title>
                    <Card.Text className="text-center">Cartes</Card.Text>
                  </Card.Body>
                </Link>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
