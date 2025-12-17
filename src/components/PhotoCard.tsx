import React from "react";
import "../App.css";

export interface ProjectCardProps {
  image: string;
  title: string;
  description?: string;
  tech_stack?: string;
  type: string;
  year: string;
  case_study?: boolean;
}

const PhotoCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="group bg-white shadow-md rounded-2xl overflow-hidden flex flex-col w-full md:max-w-[40rem] md:w-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-all duration-300 group-hover:grayscale"
        />
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center p-6">
          <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            {description && (
              <p className="text-white text-sm md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default PhotoCard;