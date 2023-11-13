// Auth.jsx
import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button, Spinner } from "react-bootstrap";
import logo from "../../assets/logo-sg.svg";
import { Toaster, toast } from "sonner";

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    // Utilisez setTimeout pour simuler un chargement de 3 secondes
    setTimeout(() => {
      // Vérifiez les identifiants fournis
      if (username === "985436" && password === "697523") {
        // Si les identifiants sont corrects, appelez la fonction onLogin
        onLogin();
      } else {
        // Si les identifiants sont incorrects, affichez un message d'erreur
        toast.warning(
          "Identifiant ou mot de passe incorrect. Veuillez réessayer."
        );
        // Réinitialisez le spinner
        setIsLoading(false);
      }
    }, 3000); // 3000 millisecondes (3 secondes)
  };

  return (
    <div>
      <Toaster position="top-center" />
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column justify-content-center">
              <div className="text-center">
                <img src={logo} style={{ width: "185px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">
                  Connexion à votre Espace Client Particuliers
                </h4>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="IDENTIFIANT"
                id="form1"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="MOT DE PASSE"
                id="form2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                {isLoading ? (
                  <Spinner animation="border" role="status" />
                ) : (
                  <Button
                    className="mb-4 w-100 gradient-custom-2"
                    variant="danger"
                    onClick={handleLogin}
                  >
                    SE CONNECTER
                  </Button>
                )}
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Vous n'avez pas de compte?</p>
                <Button className="text-muted m-4" variant="light">
                  DEVENIR CLIENT
                </Button>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Auth;
