import React from "react";

import "./ClassificationCard.css";

import Sergio_Perez from "../../img/pilots/Sergio_perez.png";
import Max_Verstappen from "../../img/pilots/Max_verstappen.png";
import Charles_Leclerc from "../../img/pilots/Charles_leclerc.png";
import flag_mini_mexico from "../../img/flags/mini_mexico.png";
import flag_mini_netherlands from "../../img/flags/mini_netherlands.png";
import flag_mini_indonesia from "../../img/flags/mini_indonesia.png";
const ClassificationCard = () => {
  return (
    <div className="container_card_classification">
      <div className="pilot_classification_left">
        
        <div className="rectangle_card_blue2"></div>
        <div className="rectangle_card_blue1"></div>
      
        <img className="img_perez" src={Sergio_Perez} alt="" />
        <div className="tarja_pilot_blue"></div>
        <div className="content_country_classification">
          <div className="pilot_name">
            <span>Sergio</span>
            <img src={flag_mini_mexico} alt="" />
          </div>
          <p>PEREZ</p>
        </div>
      </div>
      <div className="pilot_classification_center">
      <div className="rectangle_card_blue1"></div>
        <img className="img_verstappen" src={Max_Verstappen} alt="" />
        <div className="tarja_pilot_blue_center"></div>
        <div className="content_country_classification_center">
          <div className="pilot_name">
            <span>Max</span>
            <img src={flag_mini_netherlands} alt="" />
          </div>
          <p>VERSTAPPEN</p>
        </div>
      </div>
      <div className="pilot_classification_left">
      <div className="rectangle_card_red1"></div>
        <div className="rectangle_card_red2"></div>
        <div className="rectangle_card_red3"></div>
        <img className="img_perez" src={Charles_Leclerc} alt="" />
        <div className="tarja_pilot_red"></div>
        <div className="content_country_classification">
          <div className="pilot_name">
            <span>Charles</span>
            <img src={flag_mini_indonesia} alt="" />
          </div>
          <p>LECLERC</p>
        </div>
      </div>
    </div>
  );
};

export default ClassificationCard;
