import React from "react";
import "./Footer.css";
import logoRed from "../../img/LOGOTIPO_red.png";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer_container">
        <img src={logoRed} alt="Logo tipo" />

        <div className="footer_link">
          <button onClick={() => navigate("/")} className="link">
            Cronograma
          </button>
          <button onClick={() => navigate("/classification")} className="link">
            Classificação
          </button>
        </div>
      </div>
      <p>2003 - 2022 Formula One World Championship Limited</p>
    </footer>
  );
};

export default Footer;
