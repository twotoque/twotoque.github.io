import React from "react";

const ProjectImage = ({ projectSections, title }: any) => {
  const projectObject = projectSections.find(
    (section: any) => section.section_title === title
  );
  if (!projectObject) return null;

  const renderedParagraphs = () => {
    const output: React.ReactNode[] = [];
    let listItems: string[] = [];

    (projectObject.paragraphs ?? []).forEach((text: any, idx: any) => {
      const trimmed = text.trim();
      if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
        listItems.push(trimmed.slice(2));
      } else {
        if (listItems.length) {
          output.push(
            <ul key={`ul-${idx}`}>
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
        }
        output.push(<p key={`p-${idx}`}>{text}</p>);
      }
    });

    if (listItems.length) {
      output.push(
        <p>
        <ul key={`ul-final`}>
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        </p>
      );
    }

    return output;
  };

  return (
    <div className="pt-10 pb-2 headerBody flex justify-center">
      <div>
        <h4 className="!font-light mt-0 mb-4">{projectObject.section_title}</h4>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div>
        {renderedParagraphs()}
          </div>
          {projectObject.images.length > 0 &&
            projectObject.images.map((src: any, idx: any) => (
              <div
                key={idx}
                className="rounded-lg shadow-md flex justify-center items-center lg:p-5 2xl:pl-50 2xl:pr-50"
                style={{
                  background:
                    idx % 2 === 0
                      ? projectObject.bgColour
                      : projectObject.bgColourAlt,
                }}
              >
                <img
                  className="w-auto max-w-full"
                  src={src}
                  alt={`Image ${idx + 1}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;
