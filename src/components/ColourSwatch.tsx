import React from "react";

interface ColourSwatchProps {
  title: string;
  hex_colour: string;
  bg_colour: string;
}

const ColourSwatch: React.FC<ColourSwatchProps> = ({ title, hex_colour, bg_colour }) => {
  console.log(title)
  console.log(hex_colour)
  const textColor = hex_colour.toLowerCase() === "#ade28a" ? "#264936" : "white";

  return (
    <div
      className={`w-48 h-24 rounded-lg shadow-md flex flex-col justify-center items-center font-bold text-lg ${bg_colour}`}
      style={{ color: textColor }}
    >
      <p className="m-0"><b>{title}</b></p>
      <p className="m-0">{hex_colour}</p>
    </div>
  );
};

export default ColourSwatch;
