import React from "react";
import "./Card.css";

import FlagBahrain from "../../img/flags/bahrain.png";
import SpeedFlag from "../../img/speed_flag.png";

import ChevronRight from "../../img/chevron_right.png";

import MiniSergioPerez from "../../img/pilots/mini_Sergio_Perez.png";
import MiniMaxVerstappen from "../../img/pilots/mini_Max_Verstappen.png";
import MiniCharlesLeclerc from "../../img/pilots/mini_Charles_Leclerc.png";

const Card = () => {
  return (
    <div className="container_card">
      <div className="card_title">ROUND 1</div>
      <div className="date_comtainer">
        <div className="date_content">
          <h3 className="date_day">20 - 22</h3>
          <img className="country_flag" src={FlagBahrain} alt="" />
        </div>
        <div className="month_content">
          <span className="month_date">MAY</span>
          <img className="speed_flag" src={SpeedFlag} alt="" />
        </div>
      </div>
      <div className="place_description_card">
        <span className="place">Spain</span>
        <img className="chevron" src={ChevronRight} alt="" />
        <p className="description_card">
          FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022
        </p>
      </div>
      <div className="container_pilots_card">
        <div className="content_pilot_card">
          <div className="content_pilot_image">
            <img src={MiniSergioPerez} alt="" />
          </div>
          <div className="content_pilot_country">
            <div className="rectangles">
              <div className="rectangle_red"></div>
              <div className="rectangle_red"></div>
            </div>
            <span>POR</span>
          </div>
        </div>
        <div className="content_pilot_card" id="pilot_center">
          <div className="content_pilot_image">
            <img src={MiniMaxVerstappen} alt="" />
          </div>
          <div className="content_pilot_country">
            <div className="rectangles">
              <div className="rectangle_blue"></div>
            </div>
            <span>VER</span>
          </div>
        </div>
        <div className="content_pilot_card">
          <div className="content_pilot_image">
            <img src={MiniCharlesLeclerc} alt="" />
          </div>
          <div className="content_pilot_country">
            <div className="rectangles">
              <div className="rectangle_red"></div>
              <div className="rectangle_red"></div>
            </div>
            <span>LEC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
