import React from "react";

import VerticalTimeline from "../VerticalTimeline";

const Empathize = ({ projectSections, verticalFlow, title, colour }: any) => {
  const projectObject = projectSections.find(
    (section: any) => section.section_title === title
  );

  if (!projectObject) return null;
  return (
    <section>
      <div className="pt-10 pb-10 headerBody">
        <h4 className="!font-light mt-0 mb-4">{title}</h4>
        {projectObject.paragraphs?.map((text: string, idx: number) => (
          <p key={idx}>{text}</p>
        ))}
      <VerticalTimeline steps={verticalFlow} bgColor={colour} />
      </div>
    </section>
  );
};

export default Empathize;
