import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useMemo } from "react";

interface Project {
  title: string;
  image: string;
  description: string;
  tech_stack: string;
  type: string;
  year: string;
  link: string;
  case_study?: boolean;
  tools?: string[];
}

interface ProjectArcSectionProps {
  number: string;
  title: string;
  projects: string[];
  allProjects: Project[];
  backgroundSvg: string;
  tools?: string[];
}

export default function ProjectArcSection({
  number,
  title,
  projects,
  allProjects,
  backgroundSvg,
  tools,
}: ProjectArcSectionProps) {
  const filtered = useMemo(() => {
    const normalized = projects.map((t) => t.trim().toLowerCase());
    return allProjects
      .filter((p) => normalized.includes(p.title.trim().toLowerCase()))
      .sort(
        (a, b) =>
          normalized.indexOf(a.title.trim().toLowerCase()) -
          normalized.indexOf(b.title.trim().toLowerCase())
      );
  }, [projects, allProjects]);

  const allTools = Array.from(
    new Set([...(tools || []), ...filtered.flatMap((p) => p.tools || [])])
  );

  return (
    <section
      className="relative bg-cover bg-center py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundSvg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] -z-10"></div>

      <div className="flex flex-col md:flex-row items-start justify-start textBody px-6 gap-8">
        {/* Side info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-[30%] flex flex-col items-center md:items-start sticky top-24 md:top-36 self-start"
        >
          <h1 className="italic text-gray-700 text-2xl md:text-3xl font-medium mb-4 text-center md:text-left">
            {number} / <br />
            <span className="not-italic font-bold text-gray-900">{title}</span>
          </h1>

          {allTools.length > 0 && (
            <div className="w-full flex flex-col">
              <p className="p-0 font-semibold text-gray-800 mb-2">Tools</p>
              <ul className="pl-2 mt-0 mb-0 overflow-y-auto space-y-2 list-disc list-inside scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {allTools.map((tool, idx) => (
                  <li key={idx} className="text-gray-700 text-lg">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Projects */}
        <div
          className="
            flex flex-col w-full
            sm:flex-row sm:flex-wrap sm:justify-start sm:gap-6
            md:grid md:grid-cols-2 xl:grid-cols-3 md:w-full
            min-h-full gap-8 overflow-visible
          "
        >
          {filtered.length > 0 ? (
            filtered.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="w-full sm:w-auto"
              >
                <a href={proj.link} className="!no-underline">
                  <ProjectCard {...proj} />
                </a>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-lg italic col-span-full text-center">
              No matching projects.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
