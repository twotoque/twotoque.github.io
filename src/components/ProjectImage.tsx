import React from "react";


const ProjectImage = ({ projectSections, title}: any) => {
  const projectObject = projectSections.find(
    (section: any) => section.section_title === title
  );
  if (!projectObject) return null;


  const renderedParagraphs = () => {
    const output: React.ReactNode[] = [];
    let listItems: string[] = [];

    (projectObject.paragraphs ?? []).forEach((text: any, idx: any) => {
      if (text.startsWith("- ")) {
        listItems.push(text.slice(2));
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
        <ul key={`ul-final`}>
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    return output;
  };

  return (
    <section>
      <div className="pt-10 pb-2 headerBody">
        <h4 className="!font-light mt-0 mb-4">{projectObject.section_title}</h4>
        {renderedParagraphs()}
      </div>

      {projectObject.images.length > 0 && (projectObject.images.map((src: any, idx: any) => (
          <div key={idx} style={{ background: idx % 2 === 0 ? projectObject.bgColour : projectObject.bgColourAlt, }}>
            <div className="headerBody flex justify-center">
              <img
                className="w-auto max-w-full"
                src={src}
                alt={`Image ${idx + 1}`}
              />
            </div>
          </div>
        ))
      )}

    </section>
  );
};

export default ProjectImage;
