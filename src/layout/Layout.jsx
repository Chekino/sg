import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Cb from "../components/Cards/Cb";
import Virement from "../components/virement/Virement";
import AddBeneficiaire from "../components/beneficiaire/AddBeneficiaire";
import Historique from "../components/historique/Historique";

const Layout = ({ onLogout }) => {
  return (
    <div>
      <Header onLogout={onLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartes" element={<Cb />} />
        <Route path="/virement" element={<Virement />} />
        <Route path="/Ajouter-beneficiaire" element={<AddBeneficiaire />} />
        <Route path="/historique" element={<Historique />} />
      </Routes>
    </div>
  );
};

export default Layout;
