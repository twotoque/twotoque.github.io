import React, { useState, useEffect, useRef } from "react";
import GOTrain from "../assets/GOTrain.svg";

import CNTower from "../assets/CNTower.svg";


const GOTrainComponent = () => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    let animationFrameID: number;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      cancelAnimationFrame(animationFrameID);
      animationFrameID = requestAnimationFrame(() => {
        setPosition(scrollPosition * 0.1); 
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <div
      style={{
        position: "relative",
        right: `${position-50}vw`,
        top: `5vw`,
        transition: "right 0.1s",
        zIndex: 3
      }}
    >
        <img className ="goTrain" src={GOTrain} alt="GO Train" width="2500rem"/>
    </div>
    </div>
  );
};

export default GOTrainComponent;