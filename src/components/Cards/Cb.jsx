import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./cb.css";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../../footer/Footer";

const Cb = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    number: "4585",
    expiry: "10/28",
    name: "Sabrine Fournier",
  });

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
            <h6 className="my-3 text-center">Mon Espace Carte Bancaire</h6>
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
            <h6>Mes Cartes Bancaires</h6>
            <div className="trait mb-2"></div>
            <div className="text-center">
              <Cards
                number={state.number}
                expiry={state.expiry}
                name={state.name}
              />
              <h6>CB VISA INFINITE</h6>
              <div>débit immédiat cpte n° **** 8856</div>
            </div>
          </div>

          <div className="trait my-2"></div>
          <div className="container">
            <div className="color-text">Gérer mes plafonds</div>
            <div>
              <span className="petit-color">plafond de paiement mensuel </span>
              (jusqu'au 31/10 2028) <br />{" "}
              <span className="petit-color">25000,00 €</span>
            </div>
            <div>
              <div className="vert">Utilisé : 0,00 €</div>
              <ProgressBar variant="success" now={99.8} />
              <div className="petit-color">Restant : 25000,00 €</div>
            </div>
            <div className="trait my-2"></div>
            <div className="petit-color">
              Capacité de retrait(France et étranger)
            </div>
            <span>sur 7 jours glissants</span> <br />
            <span className="petit-color">7000,00 €</span>
            <div>
              Dont: <br />
              -5000,00 € par jour aux distributeurs Société Générale en France{" "}
              <br />
              -2000,00 € par jour aux distributeurs Société Générale a
              l'etranger
            </div>
            <div className="trait my-2"></div>
            <h6 className="text-center">Mes options</h6>
            <div>Option e-Carte Bleue</div>
            <div>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="point-red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Non souscrit
            </div>
            <div className="trait my-2"></div>
            <h6 className="text-center">Mes préférences</h6>
            <div>Paiement sans contact</div>
            <div>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="green"
                  className="point-green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Actif
            </div>
            <div className="trait my-2"></div>
            <div className="petit-color ">Modifier mon code secret</div>
            <div className="mb-2">
              Vous avez oublié le code secret de votre carte bancaire ? Modifier
              le à l'abri des regards indiscrets.
              <a
                href="https://espacepro.sgmaroc.com/client/app/forgotPassword?cb=00022&cp=MA"
                target="_blank"
              >
                Modifier mot de passe
              </a>
            </div>
            <div className="petit-color">
              Que faire en cas de perte/vol de ma carte ?
            </div>
            <div>
              Vous avez perdu votre carte , ou elle a été volée ?
              <a
                href="https://www.sgmaroc.com/perte-vol-moyens-de-paiement/"
                target="_blank"
              >
                Cliquez ici
              </a>
            </div>
            <div className="trait my-2"></div>
            <div className="petit-color">Contactez-Nous</div>
            <div>
              Besoin de plus d'informations concernant une préocupation ?{" "}
              <a href="https://www.sgmaroc.com/nous-contacter/" target="_blank">
                Contactez-Nous
              </a>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Cb;
