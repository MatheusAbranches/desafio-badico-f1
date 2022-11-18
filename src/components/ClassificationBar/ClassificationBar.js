import React from "react";
import "./ClassificationBar.css";
import ChevronRight from "../../img/chevron_right.png";

const ClassificationBar = ({position, name, lastName, team, points, ...props}) => {
  
  return (
    <div className="container_bar" {...props}>
      <div className="content_position">
        <p className="position_name">{position}</p>
        <div className="position_rectangle_blue"></div>
        <p className="name_pilot">{name}</p>
        <p className="position_name">{lastName}</p>
        <span className="pilot_team">{team} </span>
      </div>
      <div className="content_points">
        <p className="points">{points} PTS</p>
        <img className="chevron" src={ChevronRight} alt="" />
      </div>
    </div>
  );
};

export default ClassificationBar;
