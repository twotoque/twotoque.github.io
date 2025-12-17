import React from "react";
import Arrow from "../assets/arrow.svg";

interface StepFlowProps {
  steps: string[];
  bgColor?: string;
}

const Process: React.FC<StepFlowProps> = ({ steps, bgColor ="bg-gray-900" }) => {
  return (
    <div className="w-full  flex flex-wrap justify-center items-center bg-white rounded-xl pt-4 pb-4 shadow-sm w-full pl-0 pr-0">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
            <a
              href={`#${step.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ backgroundColor: bgColor }}
              className={`no-underline text-white rounded-xl mt-2 px-6 py-6 text-sm font-semibold whitespace-nowrap transition-transform duration-200 hover:scale-105 hover:shadow-md`}
              onClick={(e) => {
                e.preventDefault();
                const id = step.toLowerCase().replace(/\s+/g, "-");
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
            <p className="m-2">{step}</p>
          </a>
          {index < steps.length - 1 && (
            <img
              src={Arrow}
              alt="Arrow"
              className="mx-15 max-w-10 max-h-10"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Process;
