import React from "react";
import Competitor from "../Competitor";

const SectionWithCompetitor = ({ projectSections, competitors, title }: any) => {
  const projectObject = projectSections.find(
    (section: any) => section.section_title === title
  );

  if (!projectObject) return null;

  const competitorObject = competitors
    .map((c: any) => ({
      title: c.title,
      image: c.image, 
      bgColour: c.bg_colour,
      textColour: c.text_colour,
      strengths:
        typeof c.strengths === "string"
          ? JSON.parse(c.strengths)
          : Array.isArray(c.strengths)
          ? c.strengths
          : [],
      weaknesses:
        typeof c.weaknesses === "string"
          ? JSON.parse(c.weaknesses)
          : Array.isArray(c.weaknesses)
          ? c.weaknesses
          : [],
    }));

  return (
    <section>
      <div className="pt-10 pb-10 headerBody">
        <h4 className="!font-light mt-0 mb-4">{title}</h4>
        {projectObject.paragraphs?.map((text: string, idx: number) => (
          <p key={idx}>{text}</p>
        ))}
        <Competitor competitorObject={competitorObject} />
      </div>
    </section>
  );
};

export default SectionWithCompetitor;
