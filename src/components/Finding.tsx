import React from "react"

interface SubItem {
    text: React.ReactNode; 
  }
  
interface Item {
    text: string;
    subitems?: (string | React.ReactNode)[];
}
  
interface findingsObject {
    title: string;
    bgColour: string;
    textColour: string;
    items: Item[];
}
  
interface FindingsProps {
    findingsObject: findingsObject[];
}

  const Findings: React.FC<FindingsProps> = ({ findingsObject }) => {
    return (
      <div className="findings flex flex-wrap gap-6 justify-between">
        {findingsObject.map((finding, index) => (
          <div
            key={index}
            className={`${finding.bgColour} ${finding.textColour} shadow-sm rounded-xl p-7 sm:w-full lg:w-[44%] text-lg`}
          >
            <h3 className="m-0"><b>{finding.title}</b></h3>
            <ul className="list-none p-0 m-0">
              {finding.items.map((item, idx) => (
                <li key={idx}>
                  <p  className ="!m-0" >{item.text}</p>
                  <ul>
                    {item.subitems?.map((sub, subIndex) => (
                      <li key={subIndex}> <p className ="!m-0" >{sub}</p></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
export default Findings;
  
