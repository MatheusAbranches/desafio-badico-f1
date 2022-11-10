import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logoWhite from "../../img/LOGOTIPO_white.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav_container">
        <img src={logoWhite} alt="Logo tipo" />

        <div className="nav_link">
          <button onClick={() => navigate("/")} className="link">
            Cronograma
          </button>
          <button onClick={() => navigate("/classification")} className="link">
            Classificação
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
