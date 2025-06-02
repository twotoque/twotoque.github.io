import React from "react"

  
interface competitorObject {
    title: string;
    image: string;
    bgColour: string;
    textColour: string;
    strengths: string[]; 
    weaknesses: string[];
}
  
interface CompeittorProps {
    competitorObject: competitorObject[];
}

  const Competitor: React.FC<CompeittorProps> = ({ competitorObject }) => {
    return (
      <div className="findings flex flex-wrap gap-6 justify-between">
        {competitorObject.map((competitor, index) => (
          <div
            key={index}
            className={`${competitor.bgColour} ${competitor.textColour} flex flex-wrap shadow-sm rounded-xl p-7 sm:w-full xl:w-[42%] 2xl:w-[44%] text-lg`}
          >
            <img src={competitor.image} alt={`${competitor.title} image`} className="w-20 h-20 mb-3" />
            <div className=" pl-5 flex flex-col">
                <h3 className="m-0"><b>{competitor.title}</b></h3>
                <div className="flex flex-column gap-5">
                    <div> 
                        <p  className ="!m-0" >Strengths</p>
                        <ul className="pl-5 m-0">
                            {competitor.strengths.map((item, idx) => (
                                <li key={idx}>
                                    <p  className ="!m-0" >{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div> 
                        <p  className ="!m-0" >Weaknesses</p>
                        <ul className="pl-5 m-0">
                            {competitor.weaknesses.map((item, idx) => (
                                <li key={idx}>
                                    <p  className ="!m-0" >{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div> 
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default Competitor;
  
