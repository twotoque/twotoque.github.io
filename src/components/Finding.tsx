import React from "react"

interface SubItem {
    text: React.ReactNode; 
}
  
interface Item {
    text?: string | React.ReactNode;
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

const getColorValue = (colorString: string): string => {
  if (colorString.startsWith('#')) return colorString;
  
  const match = colorString.match(/\[([#\w]+)\]/);
  if (match) return match[1];
  
  const colorMap: { [key: string]: string } = {
    'bg-white': '#FFFFFF',
    'bg-black': '#000000',
    'text-black': '#000000',
    'text-white': '#FFFFFF',
    'bg-gray-100': '#F3F4F6',
    'bg-gray-200': '#E5E7EB',
  };
  
  return colorMap[colorString] || '#FFFFFF'; 
};

const Findings: React.FC<FindingsProps> = ({ findingsObject }) => {
    return (
      <div className="findings flex flex-wrap gap-6 justify-between">
        {findingsObject.map((finding, index) => (
          <div
            key={index}
            className={`shadow-sm rounded-xl p-7 sm:w-full text-lg ${
              findingsObject.length % 2 !== 0 && index === findingsObject.length - 1
                ? "w-full"
                : "xl:w-[42%] 2xl:w-[44%]"
            }`}
            style={{
              backgroundColor: getColorValue(finding.bgColour),
              color: getColorValue(finding.textColour)
            }}
          >
            <h3 className="m-0"><b>{finding.title}</b></h3>
            <ul className="list-none p-0 m-0">
              {finding.items.map((item, idx) => (
                <li key={idx}>
                  <p className="!m-0">{item.text}</p>
                  <ul>
                    {item.subitems?.map((sub, subIndex) => (
                      <li key={subIndex}><p className="!m-0">{sub}</p></li>
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