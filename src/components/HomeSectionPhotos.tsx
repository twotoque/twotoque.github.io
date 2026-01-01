import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useMemo, useRef  } from "react";
import ProjectCard2 from "@/components/ProjectImage rev2";
interface ImageItem {
  path: string;
  title?: string;
}

interface ProjectArcSectionProps {
  number: string;
  title: string;
  backgroundSvg?: string;
  tools?: string[];
  images: ImageItem[];
}

export default function ProjectArcImageSection({
  number,
  title,
  backgroundSvg,
  tools,
  images
}: ProjectArcSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });


  return (
<section className="relative w-full  ">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] -z-10" />

      <div className="flex flex-col md:flex-row items-start justify-start textBody gap-8">
        {/* LEFT COLUMN */}
        <motion.div
          className="md:w-[30%] mb-10 sm:mb-0  flex flex-col items-center md:items-start sticky top-24 md:top-36 self-center md:self-start"
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
        </motion.div>

        <div className="w-full columns-1 md:columns-2 2xl:columns-3 space-y-8">
          {images.length > 0 ? (
            images.map((img, idx) => (
              <div
              >
                <ProjectCard2
                  image={img.path}
                  {...(img.title ? { title: img.title } : {})}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg italic col-span-full text-center">
              No images.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
