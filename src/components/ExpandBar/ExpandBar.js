import React from "react";
import MaxExpand from "../../img/pilots/max.png";
import "./ExpandBar.css";

const ExpandBar = () => {
  return (
    <div className="container_expand_bar">
      <img src={MaxExpand} alt="" />
      <div className="content_pilots_info">
      <div className="pilot_info">
        <span className="pilot_info_option">Team</span>

        <span className="pilot_info_result">RedBull Racing</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">Country</span>

        <span className="pilot_info_result">Netherlands</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">Podiuns</span>

        <span className="pilot_info_result">75</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">Points</span>

        <span className="pilot_info_result">1948.5</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">Grand Pix Entered</span>

        <span className="pilot_info_result">160</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">World Championships</span>

        <span className="pilot_info_result">2</span>
      </div>
      </div>
    </div>
  );
};

export default ExpandBar;
