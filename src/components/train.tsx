import React, { useState, useEffect } from "react";
import GOTrain from "../assets/GOTrain.svg";


const GOTrainComponent = () => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setPosition(scrollPosition *10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        right: `${position -500}px`,
        transition: "right 0.1s",
      }}
    >
        <img src={GOTrain} alt="GO Train" width="2000rem"/>
    </div>
  );
};

export default GOTrainComponent;