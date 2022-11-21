import React from "react";
import MaxExpand from "../../img/pilots/max.png";
import "./ExpandBar.css";

const ExpandBar = ({src, team, Country, podiuns, points, GrandPix, worldChampion}) => {
  return (
    <div className="container_expand_bar">
      <img src={src} alt="" />
      <div className="content_pilots_info">
      <div className="pilot_info">
        <span className="pilot_info_option">Team</span>

        <span className="pilot_info_result">{team}</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">Country</span>

        <span className="pilot_info_result">{Country}</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">Podiuns</span>

        <span className="pilot_info_result">{podiuns}</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">Points</span>

        <span className="pilot_info_result">{points}</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">Grand Pix Entered</span>

        <span className="pilot_info_result">{GrandPix}</span>
      </div>
      <div className="pilot_info">
        <span className="pilot_info_option">World Championships</span>

        <span className="pilot_info_result">{worldChampion}</span>
      </div>
      </div>
    </div>
  );
};

export default ExpandBar;
