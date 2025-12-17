import { useState } from "react";
import PlotEmbed from "@/components/PlotEmbed";

type PlotSwitchButtonProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

 function PlotSwitchButton({
  label,
  active = false,
  onClick
}: PlotSwitchButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        overflow-hidden inline-block border rounded-full px-4 py-2 text-lg
        transition hover:scale-105
        ${
          active
            ? "bg-black text-white font-bold border-black"
            : "border-black text-black hover:text-white hover:font-bold hover:bg-black"
        }
      `}
    >
      <p className="m-0">{label}</p>
    </button>
  );
}

type PlotOption = {
  label: string;
  src: string;
};

type PlotWithInsightsProps = {
  title: string;
  height?: number;
  insights?: React.ReactNode;
  plots: PlotOption[];
};


export default function PlotWithInsights({
  title,
  height = 650,
  plots
}: PlotWithInsightsProps) {
  const [activePlot, setActivePlot] = useState(plots[0]);

  return (
    <div className="w-full my-14 flex justify-center">
      {/* MAX WIDTH WRAPPER */}
      <div className="w-full flex flex-col justify-center items-center">
        
            <PlotEmbed
              src={activePlot.src}
              title={title}
              height={height}
            />

        {/* BUTTONS — CENTERED */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {plots.map((plot) => (
            <PlotSwitchButton
              key={plot.label}
              label={plot.label}
              active={plot.src === activePlot.src}
              onClick={() => setActivePlot(plot)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}