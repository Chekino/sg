import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";

const Virement = () => {
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
    <div className="mb-3">
      {loading ? (
        <div className="container">
          <div className="d-flex flex-column align-items-center loader ">
            <h6 className="my-3 text-center">Virement & bénéficiaires</h6>
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
          </div>
          <h6 className="my-3  container">Faire un virement</h6>
          <div className="text-center">VIREMENTS INTERNATIONAUX</div>
          <div className="trait "></div>
          <div className="container">
            <div className="color-text mt-3">Depuis quel compte ?</div>
            <Card
              className="mt-3 d-flex justify-content-center "
              style={{
                backgroundColor: "#f1f5f9",
                height: "70px",
                borderLeft: "5px solid #28a745",
              }}
            >
              <Card.Body>
                <div className="row">
                  <div className="col-7">Compte</div>
                  <div className="col-5 text" style={{ fontWeight: "bold" }}>
                    870 000 EUR
                  </div>
                </div>
                <div className="col-12">FR72 3000 3015 8100 0501 3958 856</div>
              </Card.Body>
            </Card>
          </div>
          <div className="container">
            <div className="color-text mt-3">Vers quel bénéficiaire ?</div>
            <Card
              className="mt-3"
              style={{
                backgroundColor: "#f1f5f9",
              }}
            >
              <Card.Body>
                <Link to="/Ajouter-beneficiaire" className="link-style">
                  <Button
                    className="petit-color mb-4"
                    style={{ width: "100%" }}
                    variant="danger"
                  >
                    <span style={{ marginRight: "10px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill=""
                        className="w-6 h-6"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Ajouter un bénéficiaire
                  </Button>
                </Link>
                <div className="row ">
                  <div className="col-12">
                    <h3 style={{ fontSize: "12px" }}>
                      BENEFICIAIRES DISPONIBLE{" "}
                    </h3>
                  </div>

                  <div className="col">
                    Aucun bénéficiaire disponible , veuillez en ajouté...
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

export default Virement;
