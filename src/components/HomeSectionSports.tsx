import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: string;
}

function StatCard({ label, value, unit, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 break-inside-avoid">
      <div className="flex items-start justify-between ">
        <h4 className="p-0 !m-0 text-gray-700 font-semibold text-lg">{label}</h4>
      </div>
      <div className="!flex items-baseline gap-1">
       
        <h1 className="p-0 !m-0 text-4xl font-bold text-gray-900">{value}</h1>
        {unit && <h2 className="p-0 !m-0 text-xl text-gray-600">{unit}</h2>}
      </div>
    </div>
  );
}

interface Stat {
  label: string;
  value: string | number;
  unit?: string;
  icon?: string;
}

interface StatsArcSectionProps {
  number: string;
  title: string;
  backgroundSvg?: string;
  tools?: string[];
  stats: Stat[];
}

export default function StatsArcSection({
  number,
  title,
  backgroundSvg,
  tools,
  stats
}: StatsArcSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });


  return (
    <section className="relative w-full">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] -z-10" />
      
      <div className="flex flex-col md:flex-row items-start justify-start textBody gap-8">
        
        {/* LEFT COLUMN */}
        <div
          className="md:w-[30%] mb-10 sm:mb-0 flex flex-col items-center md:items-start sticky top-24 md:top-36 self-center md:self-start"
        >
          <h1 className="italic text-gray-700 text-2xl md:text-3xl font-medium mb-4 text-center md:text-left">
            {number} / <br />
            <span className="not-italic font-bold text-gray-900">{title}</span>
          </h1>

          {tools && tools.length > 0 && (
            <div className="w-full flex flex-col">
              <p className="p-0 font-semibold text-gray-800 mb-2 text-center md:text-left">
                Tools
              </p>

              <ul className="pl-2 mt-0 mb-0 overflow-y-auto space-y-2 list-disc list-inside scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {tools.map((tool, idx) => (
                  <li key={idx} className="text-gray-700 text-lg">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-full columns-1 md:columns-2 2xl:columns-3 space-y-8">
          {stats.length > 0 ? (
            stats.map((stat, idx) => (
              <div
                key={idx}
                className="w-full sm:w-auto"

              >
                <StatCard {...stat} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg italic col-span-full text-center">
              No stats available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}