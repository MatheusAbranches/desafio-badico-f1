import React from "react";
import Carousel from "../../components/ Carousel/Carousel";
import Card from "../../components/Cards/Card";
import "./Timeline.css";

import FlagBahrain from "../../img/flags/bahrain.png";
import FlagSpain from "../../img/flags/spain.png";
import FlagFrance from "../../img/flags/france.png";
import FlagBelgium from "../../img/flags/belgium.png";
import FlagItaly from "../../img/flags/italy.png";

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
        <Card
          roundValue={1}
          startDateRound={10}
          finishDateRound={12}
          src={FlagBahrain}
          monthRound={"APR"}
          placeRound={"Bahrain"}
          descriptionRound={"FORMULA 1 ARAMCO PRE-SEASON TESTING 2022"}
        />
        <Card
          roundValue={1}
          startDateRound={20}
          finishDateRound={22}
          src={FlagBahrain}
          monthRound={"MAY"}
          placeRound={"Spain"}
          descriptionRound={"FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022"}
        />
        <Card
          roundValue={1}
          startDateRound={24}
          finishDateRound={26}
          src={FlagSpain}
          monthRound={"MAY"}
          placeRound={"Spain"}
          descriptionRound={`FORMULA 1 PIRELLI GRAN PREMIO DE 
          ESPAÑA 2022`}
        />
        <Card
          roundValue={1}
          startDateRound={31}
          finishDateRound={2}
          src={FlagFrance}
          monthRound={"JUL"}
          placeRound={"France"}
          descriptionRound={"FORMULA 1 LENOVO GRAND PRIX DE FRANCE 2022"}
        />
        <Card
          roundValue={1}
          startDateRound={28}
          finishDateRound={30}
          src={FlagBelgium}
          monthRound={"AUG"}
          placeRound={"Belgium"}
          descriptionRound={"FORMULA 1 ROLEX BELGIAN GRAND PRIX 2022"}
        />
        <Card
          roundValue={1}
          startDateRound={4}
          finishDateRound={6}
          src={FlagItaly}
          monthRound={"SEP"}
          placeRound={"Italy"}
          descriptionRound={`FORMULA 1 PIRELLI GRAN PREMIO 
            D’ITALIA 2022`}
        />
      </div>
      <Carousel />
    </main>
  );
};

export default Timeline;
