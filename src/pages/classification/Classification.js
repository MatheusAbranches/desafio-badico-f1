import React from "react";
import "./Classification.css";
import { Collapse } from "react-collapse";
import { useState } from "react";

import ClassificationCard from "../../components/ClassificationCard/ClassificationCard";

import Vector from "../../img/Vector.png";
import ClassificationBar from "../../components/ClassificationBar/ClassificationBar";
import ExpandBar from "../../components/ExpandBar/ExpandBar";

import ExpandCharles from "../../img/pilots/charles.png";
import ExpandMax from "../../img/pilots/max.png";
import ExpandSergio from "../../img/pilots/sergio.png";

const Classification = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  return (
    <>
      <div className="container_title">
        <h1 className="title_classification">2022 Driver Standings</h1>
        <img src={Vector} className="vector" />
      </div>
      <main className="main">
        <ClassificationCard />
        <ClassificationBar
          position={1}
          name={"Max"}
          lastName={"VERSTAPPEN"}
          team={"Red Bull Racing"}
          points={366}
          onClick={() => setExpanded1(!expanded1)}
        />
        <Collapse isOpened={expanded1}>
          <ExpandBar
            src={ExpandMax}
            team={"RedBull Racing"}
            Countryc={"Netherlands"}
            podiuns={75}
            points={1948.5}
            GrandPix={160}
            worldChampion={2}
          />
        </Collapse>
        <ClassificationBar
          position={2}
          name={"Sergio"}
          lastName={"PEREZ"}
          team={"Red Bull Racing"}
          points={253}
          onClick={() => setExpanded2(!expanded2)}
        />
        <Collapse isOpened={expanded2}>
          <ExpandBar
            src={ExpandSergio}
            team={"RedBull Racing"}
            Country={"Mexico"}
            podiuns={24}
            points={1161}
            GrandPix={233}
            worldChampion={"N/A"}
          />
        </Collapse>
        <ClassificationBar
          position={3}
          name={"Charles"}
          lastName={"LECLERC"}
          team={"Ferrari"}
          points={252}
          onClick={() => setExpanded3(!expanded3)}
        />
        <Collapse isOpened={expanded3}>
          <ExpandBar
            src={ExpandCharles}
            team={"Ferrari"}
            Country={"Monaco"}
            podiuns={23}
            points={827}
            GrandPix={100}
            worldChampion={"N/A"}
          />
        </Collapse>
      </main>
    </>
  );
};

export default Classification;
