import "./App.css";
import Auth from "./components/auth/Auth";

import Layout from "./layout/Layout";
import React, { useEffect, useState } from "react";

function App() {
  const initialAuthState = localStorage.getItem("isAuthenticated") === "true";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    // Cette fonction pourrait également être passée en tant que prop au composant Auth
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    // Vérifiez si l'utilisateur est déjà authentifié (par exemple, après un rechargement de page)
    const storedAuthState = localStorage.getItem("isAuthenticated") === "true";
    if (storedAuthState) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
      <div>
        {isAuthenticated ? (
          <div style={{ backgroundColor: "#fef2f2" }}>
            <Layout onLogout={handleLogout} />
          </div>
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </div>
    </>
  );
}

export default App;
