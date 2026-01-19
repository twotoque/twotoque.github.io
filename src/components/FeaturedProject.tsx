import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

interface FeaturedProjectSectionProps {
  number: string;
  title: string;
  projects: string[];
  allProjects: Project[];
}

export default function FeaturedProjectSection({
  number,
  title,
  projects,
  allProjects,
}: FeaturedProjectSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const currentProject = filtered[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  if (filtered.length === 0) {
    return (
      <section className="relative w-full">
        <p className="text-gray-500 text-lg italic text-center">
          No featured projects available.
        </p>
      </section>
    );
  }

  return (
    <section className="relative w-full">
      <div className="z-10 flex flex-col md:flex-row items-start justify-start textBody !mb-0 gap-8">

        <div className="w-full flex flex-col items-center gap-6">
          {/* Carousel Container */}
          <div className="relative w-full max-w-[40rem]">
            <a href={currentProject.link} className="!no-underline">
              <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full max-h-100 object-cover"
                />
                <div className="p-7 flex flex-col justify-between">
                  <h1 className="m-0 text-black" style={{ fontSize: "1.8rem" }}>
                    {currentProject.title}
                    <h4 style={{ fontSize: "0.875rem" }} className="pt-1 text-gray-700 m-0">
                      {currentProject.year}
                    </h4>
                  </h1>

                  {currentProject.case_study && (
                    <div className="w-full flex justify-center md:justify-start">
                      <p style={{ fontSize: "0.875rem" }} className="bg-green-100 text-green-800 rounded-full px-4 py-2 text-center w-fit">
                        In-depth case study available
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </a>

            {/* Navigation Buttons */}
            {filtered.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {filtered.length > 1 && (
            <div className="flex justify-center items-center gap-2">
              {filtered.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                    idx === currentIndex
                      ? "w-8 h-3 bg-gray-800"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}