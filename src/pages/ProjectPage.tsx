import React from "react";
import { Link } from "react-router-dom";
import  Header from "../components/Header";
import  CustomButton from "../components/Button";
import Process from "../components/Process";
import VerticalTimeline from "../components/VerticalTimeline";
import Findings from "../components/Finding";
import Competitor from "../components/Competitor";


function ProjectPage() {
    const steps = ["Empathize", "Define", "Ideate", "Prototype", "Test"];
    
    const verticlaTime = [
        "Identify daily pain points e.g. congestion, delays, accessibility",
        "Assess how commuters make sustainable choices and what motivates/prevents them",
        "Assess how travel costs influence commuter behaviour and the appeal of eco-friendly incentives",
        "Examine importance of catering to the needs of those with limited mobility",
    ];

    const findingsData = [
        {
          title: "Market trends:",
          bgColour: "bg-[#266670]",
          textColour: "text-white",
          items: [
            {
              text: "Increased shift towards sustainable transport",
              subitems: [
                <p> Sustainable Development Goals encourages shift to lower-emission transport </p>,
                <p> The amount of Canadians using green transportation methods are growing" <a className="text-white" href="#">(Statistics Canada, 2023)</a></p>
              ],
            },
          ],
        },
        {
          title: "Consumer trends:",
          bgColour: "bg-[#72ad6c]",
          textColour: "text-white",
          items: [
            {
              text: "Shift for accessibility and convenience",
              subitems: [<p> 27% of Canadians live with a disability {" "} <a className="text-white" href="#">(Canadian Survey on Disability, 2022)</a></p>
              ],
            },
          ],
        },
      ];
      

      const competitorData = [
        {
          title: "Transit App",
          bgColour: "bg-white",
          textColour: "text-black",
          strengths: ["Simple interface", "Real-time data"],
          weaknesses: ["Limited sustainablity tracking"],
          image: "/projects/transitbloom/transit.png",

        },
        {
          title: "Moovit App",
          bgColour: "bg-white",
          textColour: "text-black",
          strengths: ["Detailed transit directions","Real-time updates"],
          weaknesses: ["No carbon tracking or rewards system"],
          image: "/projects/transitbloom/moovit.png",

        },
      ];
      
    const opportunities = [
        {
          title: "Opportunities",
          bgColour: "bg-white",
          textColour: "text-black",
          items: [
            {text: "Integrate sustainability tracking and eco-rewards to fill competitor gaps",},
            {text: "Provide an inclusive experience with accessibility features",},
          ],
        },
    ];
      
  return (
    <> 
    <Header/>
    <section  className="min-h-[90vh] h-auto">
        <div style={{ background: '#266670' }} >
            <div className="headerBody flex justify-center">
                <img className="w-auto max-h-150" src ="/projects/transitbloom/hero.png"></img>
            </div>
        </div>

        <div className ="headerBody">
            <h4 className="mb-0">UX Design</h4>
            <h1 className="mt-0 mb-10">TransitBloom</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-5/7 space-y-4">
                    <h4 className="!font-light mb-4">OVERVIEW</h4>
                    <p>TransitBloom is an all-in-one transit travel app that incentivizes its users with a loyalty system for choosing greener transit options, adjusts travel options based on transit agency recommendations, accessibility options, and carbon output, as well as finds tips to board the right bus.</p>
                    <p>Built with a team of two for UX Laurier’s Blueprint challenge in 2024. Won third place. </p>
                    
                    <h4 className="!font-light mt-10 mb-4">CHECK IT OUT</h4>
                    <div className="flex gap-3">
                        <CustomButton href="" label ="Business Pitch"></CustomButton>
                        <CustomButton href="" label ="Figma Prototype"></CustomButton>
                    </div>
                </div>
                <div className="md:w-2/7 space-y-6">
                    <h4 className="!font-light mb-4">CLIENT</h4>
                    <p><b>UX Laurier Blueprint</b></p>
                    
                    <h4 className="!font-light mb-4">MY ROLE</h4>
                    <p className="mb-1"><b>UX Designer</b></p>
                    <p className="mt-0 !text-sm">Worked on high-fidelity prototypes, business pitch, branding, and research </p>

                    <h4 className="!font-light mb-4">TOOLS</h4>
                    <p><b>Figma, Adobe Illustrator,  Adobe Photoshop, Procreate</b></p>

                </div>
            </div>
        </div>
    </section>

    
        
    <section style={{ background: '#266670' }} >
        <div className="pt-10 pb-10 headerBody !text-white">
            <h4 className="!font-light mt-0 mb-4">DESIGN PROMPT</h4>
            <h3 className=" m-0">How might we design sustainable travel options that increase efficiency while enhancing the quality of life for daily commuters?</h3>
        </div>
    </section>

        
    <section >
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">OUR SOLUTION</h4>
            <p>Our solution was a tool designed to encourage transit riders to choose cleaner transportation options while being easy for transit agencies to implement. It also aimed to enhance the user experience by simplifying transit navigation and providing personalized options based on their needs, such as accessibility and minimal transfers. </p>
            <p className="pb-5">In order to do this, we decided to go through a user-first design process to further refine our solution.</p>
            <Process steps={steps}  bgColor="bg-[#266670]"  />       
        </div>
    </section>

    <section>  
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">EMPATHIZE: RESEARCH</h4>
                <p>Due to the time constraints of the challenge, we mainly focused on secondary research. Our goals were:</p>
                <VerticalTimeline steps={verticlaTime} bgColor="bg-[#266670]" />
                
        </div>
    </section>

    <section>  
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">EMPATHIZE: WHAT WE FOUND</h4>
                <p>Our conclusions were defined into 2 parts: </p>       
                <Findings findingsObject={findingsData}/>
        </div>
    </section>

    <section>  
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">EMPATHIZE: COMPETITIVE ANALYSIS</h4>
                <Competitor competitorObject={competitorData}/> 
                <Findings findingsObject={opportunities}/>
        </div>
    </section>


    </>
  );
}

export default ProjectPage;