import React from "react";
import { Card, Spinner } from "react-bootstrap";
import "./historique.css";
import Footer from "../../footer/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Historique = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simuler un délai de chargement des données (vous pouvez le remplacer par une véritable récupération de données)
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulation d'un délai de 2 secondes
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="container">
          <div className="d-flex flex-column align-items-center loader ">
            <h6 className="my-3 text-center">Mon historique de transaction</h6>
            <Spinner animation="border" role="status" /> <br />
            <span className="mt-2">Un instant ...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <Link to="/" className="link-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                style={{ width: "30px", height: "50px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                  clipRule="evenodd"
                />
              </svg>
              Retour
            </Link>
            <h6 className="my-3">Historique de transaction</h6>
            <div className="trait"></div>
            <Card
              className="mt-3"
              style={{
                backgroundColor: "white",
                height: "70px",
                borderLeft: "3px solid green",
              }}
            >
              <Card.Body>
                <div className="row">
                  <div className="col-7" style={{ fontSize: "12px" }}>
                    <div>VIREMENT ENTRANT</div> VIR RECU DE FRANCK BAUDRY
                  </div>
                  <div className="col-5">
                    <div className="color" style={{ fontSize: "14px" }}>
                      {" "}
                      +244 000,00 €
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                      18/06/2017
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card
              className="mt-3"
              style={{
                backgroundColor: "white",
                height: "70px",
                borderLeft: "3px solid red",
              }}
            >
              <Card.Body>
                <div className="row">
                  <div className="col-7" style={{ fontSize: "12px" }}>
                    VIREMENT EMIS
                    <div>VIR INST VERS AGENCE MOBILE</div>
                  </div>
                  <div className="col-5">
                    <div className="color-red" style={{ fontSize: "14px" }}>
                      {" "}
                      -40 000,00 €
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                      05/04/2017
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card
              className="mt-3"
              style={{
                backgroundColor: "white",
                height: "70px",
                borderLeft: "3px solid green",
              }}
            >
              <Card.Body>
                <div className="row">
                  <div className="col-7" style={{ fontSize: "12px" }}>
                    VIREMENT ENTRANT <div>VIR RECU DE FRANCK BAUDRY</div>
                  </div>
                  <div className="col-5">
                    <div className="color" style={{ fontSize: "14px" }}>
                      +200 000,00 €
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                      03/02/2017
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card
              className="mt-3"
              style={{
                backgroundColor: "white",
                height: "70px",
                borderLeft: "3px solid green",
              }}
            >
              <Card.Body>
                <div className="row">
                  <div className="col-7" style={{ fontSize: "12px" }}>
                    VIREMENT ENTRANT <div>VIR RECU DE FRANCK BAUDRY</div>
                  </div>
                  <div className="col-5 ">
                    <div className="color" style={{ fontSize: "14px" }}>
                      {" "}
                      +200 000,00 €
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                      10/12/2016
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card
              className="mt-3"
              style={{
                backgroundColor: "white",
                height: "70px",
                borderLeft: "3px solid green",
              }}
            >
              <Card.Body>
                <div className="row">
                  <div className="col-7" style={{ fontSize: "12px" }}>
                    VIREMENT ENTRANT <div>VIR RECU DE FRANCK BAUDRY</div>
                  </div>
                  <div className="col-5">
                    <div className="color" style={{ fontSize: "14px" }}>
                      +150 000,00 €
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                      05/08/2016
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Historique;
