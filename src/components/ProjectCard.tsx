import React from "react";
import "../App.css"

const ProjectCard = ({
    image,
    title,
    description,
    techStack,
    type,
    year,
  }) => {
    return (
      <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col w-full md:max-w-[40rem] md:w-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full max-h-100 object-cover "
        />
        <div className="p-7 flex flex-col justify-between">
            <div className="flex flex-row justify-between text-sm text-gray-500 ">
              <h4  className=" m-0">{type}</h4>
              <h4 className=" m-0">{year}</h4>
            </div>
            <h1 className="m-0  text-black"style={{ fontSize: '3rem' }} >
              {title}
            </h1>
            {description && (
            <p className="pt-3 text-sm text-gray-700">{description}</p>
            )}
            {techStack && (
              <p className="m-0 text-sm text-gray-500">{techStack}</p>
            )}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  