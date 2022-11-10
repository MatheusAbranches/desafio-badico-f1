import React from "react";
import Carousel from "../../components/ Carousel/Carousel";
import Card from "../../components/Cards/Card";
import "./Timeline.css";

const Timeline = () => {
  return (
    <main className="main">
      <div className="header">
        <div className="title_header">
          <h1>F1 Cronograma 2022</h1>
          <div className="line"></div>
        </div>
        <span className="title">
          CALENDÁRIO DE CORRIDA DO CAMPEONATO MUNDIAL DE FÓRMULA 1 2022 DA FIA
        </span>
      </div>
      <div className="content_card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Carousel />
    </main>
  );
};

export default Timeline;
