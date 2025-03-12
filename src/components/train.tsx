import React, { useState, useEffect, useRef } from "react";
import GOTrain from "../assets/GOTrain.svg";

import CNTower from "../assets/CNTower.svg";
import GrainGrass from "../assets/GrainGrass.svg";


const GOTrainComponent = () => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setPosition(scrollPosition *3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <img src={CNTower} alt="CN Tower" width="800rem" 
        style={{
            position: "absolute", 
            top: `15vw`,
            right: 0,
            zIndex: 1}} />
    <div
      style={{
        position: "relative",
        right: `${position-50}vw`,
        top: `5vw`,
        transition: "right 0.1s",
        zIndex: 3
      }}
    >
        <img src={GOTrain} alt="GO Train" width="2500rem"/>
    </div>
    <img src={GrainGrass} alt="Grain Grass" 
        style={{
            position: "relative",
            top: `5vw`,
            left: "-20vw",
            width: "105vw",
            right: 0,
            zIndex: 2}} />
    </div>
  );
};

export default GOTrainComponent;