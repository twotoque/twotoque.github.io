import React from "react";
import Findings from "../Finding";

const SectionWithFinding = ({ projectSections, findings, title, filter }: any) => {
  const projectObject = projectSections.find(
    (section: any) => section.section_title === title
  );

  if (!projectObject) return null;

  const findingsObject =filter
  .flatMap((type: string) =>
    findings
      .filter((f: any) => f.section_type === type)
      .map((f: any) => ({
        title: f.title,
        bgColour: f.bg_colour,
        textColour: f.text_colour,
        items: (
          typeof f.items === "string"
            ? JSON.parse(f.items)
            : Array.isArray(f.items)
            ? f.items
            : []
        ).map((item: any) => ({
          text: item.text,
          subitems: item.subitems ?? [],
        })),
      }))
  );

  return (
    <section>
      <div className="pt-10 pb-10 headerBody">
        <h4 className="!font-light mt-0 mb-4">{title}</h4>
        {projectObject.paragraphs?.map((text: string, idx: number) => (
          <p key={idx}>{text}</p>
        ))}
        <Findings findingsObject={findingsObject} />
      </div>
    </section>
  );
};

export default SectionWithFinding;
