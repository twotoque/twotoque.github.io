import { useEffect, useState } from "react";
import PlotEmbed from "@/components/PlotEmbed";
import CustomButton from "@/components/Button";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

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
  image: string;
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
  const isMobile = useIsMobile();

  return (
    <div className="w-full my-14 flex justify-center">
      <div className="w-full flex flex-col justify-center items-center">

        {/* DESKTOP: interactive Plotly */}
        {!isMobile && (
          <PlotEmbed
            src={activePlot.src}
            title={title}
            height={height}
          />
        )}

        {/* MOBILE: external links only */}
       {isMobile && (
          <div className="w-full flex flex-col items-center gap-4">

            {plots.map((plot) => (
              <div key={plot.label} className="w-full max-w-xl space-y-3">
                <img
                  src={plot.image}
                  alt={`${plot.label} preview`}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-lg"
                />

                <CustomButton
                  href={`https://www.twotoque.com${plot.src}`}
                  label={`Open ${plot.label} →`}
                />
              </div>
            ))}
          </div>
        )}


        {/* DESKTOP BUTTONS (unchanged) */}
        {!isMobile && (
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
        )}
      </div>
    </div>
  );
}
