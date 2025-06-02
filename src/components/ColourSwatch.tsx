import React from "react";

interface ColourSwatchProps {
  title: string;
  hexColour: string;
  bgColour: string;
}

const ColourSwatch: React.FC<ColourSwatchProps> = ({ title, hexColour, bgColour }) => {
  const textColor = hexColour.toLowerCase() === "#ade28a" ? "#264936" : "white";

  return (
    <div
      className={`w-48 h-24 rounded-lg shadow-md flex flex-col justify-center items-center font-bold text-lg ${bgColour}`}
      style={{ color: textColor }}
    >
      <p className="m-0"><b>{title}</b></p>
      <p className="m-0">{hexColour}</p>
    </div>
  );
};

export default ColourSwatch;
