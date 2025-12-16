import React from "react";

export interface ProjectCardProps {
  image: string;
  title: string;
  description?: string;
  tech_stack?: string;
  type: string;
  year: string;
  case_study?: boolean;
}

const ProjectCard2: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tech_stack,
  type,
  year,
  case_study,
}) => {
  return (
    <div className="relative bg-white shadow-md rounded-2xl overflow-hidden w-full md:max-w-[40rem] md:w-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg group">
      <img
        src={image}
        alt={title}
        className="w-full max-h-100 object-cover"
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-7">
        <h1 className="m-0 text-white text-center" style={{ fontSize: "1.8rem" }}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard2;