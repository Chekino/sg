import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";

const AddBeneficiaire = () => {
  return (
    <div>
      <div className="container mb-3">
        <Toaster position="top-center" />
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
        <h6 className="my-4">AJOUT NOUVEAU BENEFICIAIRE</h6>
        <div className="text-center petit-color">
          Confirmez les informations du nouveau bénéficiaire.
          <Form>
            <Form.Group className="">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Sofiane" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Prenom</Form.Label>
              <Form.Control type="text" placeholder="Hamrabat" />
            </Form.Group>
            <Form.Group>
              <Form.Label>IBAN</Form.Label>
              <Form.Control type="text" placeholder="MA122 3456 789..." />
            </Form.Group>
            <Form.Group className="pb-4">
              <Form.Label>BIC</Form.Label>
              <Form.Control type="text" placeholder="BCX55" />
            </Form.Group>
            <Button
              variant="danger"
              className="pb-2"
              onClick={() =>
                toast("Impossible d'ajouter le beneficiaire. Contactez-nous !")
              }
            >
              Confirmer
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddBeneficiaire;
