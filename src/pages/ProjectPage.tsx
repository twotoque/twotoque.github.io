import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import  Header from "../components/Header";
import  CustomButton from "../components/Button";
import Process from "../components/Process";
import VerticalTimeline from "../components/VerticalTimeline";
import Findings from "../components/Finding";
import Competitor from "../components/Competitor";
import ColourSwatch from "../components/ColourSwatch";
import { supabase } from '@/lib/supabaseClient';

const { data, error } = await supabase.from('projects').select('*');
console.log(import.meta.env.VITE_SUPABASE_URL);
if (error) {
  console.error("Error loading projects:", error.message);
} else {
  console.log("Projects data:", data);
}


function ProjectPage() {
  /*
    const steps = ["Empathize", "Define", "Prototype", "Test", "Feasibility", "Desirability"];
    
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
  
    const userPersonas = [
      {
        title: "Micheal",
        bgColour: "bg-white",
        textColour: "text-black",
        items: [
          {text: <p><i>“I want to save time but don’t want to spend money driving!”</i></p> },
          {text: "Student from Mississauga, drives to school to Waterloo frequently. Needs a frequent, easy, and cheap option to get to Waterloo frequently. "},
          {text: "Doesn’t take the bus as ",
            subitems: [
              "Bus schedules are too complex to plan out",
              "Driving is more convenient ",
              "No real incentive to take the bus "
            ],},
        ],
      },
      
      {
        title: "Kristine",
        bgColour: "bg-white",
        textColour: "text-black",
        items: [
          {text: <p><i>“I need to be at the hospital quickly!”</i></p> },
          {text: "A senior from North York, takes the bus to go to the hospital weekly. Needs an accessible and fast way to plan trips to the hospital. "},
          {text: "Frustrated with the bus because: ",
            subitems: [
              "Bus stations do not have elevators or accessible options",
              "Paratransit is hard to plan  ",
              "Each trip may not be accessible "
            ],},
        ],
      }
  ];
        
  const insight = [
    {
      title: "Insight",
      bgColour: "bg-white",
      textColour: "text-black",
      items: [
        {subitems: [<p>Commuters face <b>unpredictable transit delays</b> and lack of accessible routes</p>,
          <p>Existing apps <b>lack clear incentives</b> and personalized recommendations</p>,
          <p>Current apps don’t sufficiently support users with low mobility or sensory needs</p>
        ]},
      ],
    },
];

const needs = [
  {
    title: "Needs",
    bgColour: "bg-white",
    textColour: "text-black",
    items: [
      {subitems: ["Michael needs one app, with real-time, reliable transit information to reduce uncertainty",
        "Michael needs a system that rewards eco-friendly behaviour",
        "Kristine, an individual with low mobility, needs accessible route options"
      ]},
    ],
  },
];
      
const refinedProblem = [
  {
    title: "Refined problem statement",
    bgColour: "bg-[#266670]",
    textColour: "text-white",
    items: [
      {text: "How might we design an app that provides sustainable, efficient, and inclusive travel options while also enhancing the sense of community for daily commuters?",},
    ],
  },
];
   

const swatches = [
  {
    title: "Primary",
    hexColour: "#276670",
    bgColour: "bg-[#276670]",
  },
  {
    title: "Secondary",
    hexColour: "#264936",
    bgColour: "bg-[#264936]",
  },
  {
    title: "Secondary",
    hexColour: "#ADE28A",
    bgColour: "bg-[#ADE28A]",
  },
];

const desirablity = [
  {
    title: "For the transit agency:",
    bgColour: "bg-white",
    textColour: "text-black",
    items: [
      {
        subitems: [
          "Can incentivize users to take other paths (through points) ",
          "Minimal cost much to implement point system ",
          "Increased transit ridership -> more fare revenue",
          "Increased citizen participation for future transit change",
          "Less cars; less emissions; faster buses",
        ],},
    ],
  },
  
  {
    title: "For the transit user:",
    bgColour: "bg-white",
    textColour: "text-black",
    items: [
      {
        subitems: [
          "Saves money on transit fares and other deals",
          "All-in-one travel planner",
          "Each trip may not be accessible ",
          "Easier ways to make plans with friends ",
          "More efficient transit paths",
          "Gamifies green transportation",
          "Increased accessibility options and ease of use"
        ],},
    ],
  }
];
*/
/*
  type FindingItem = {
    text?: string;
    subitems?: string[];
  };

  type Finding = {
    id: number;
    project_id: number;
    section_type: string;
    title: string;
    bg_colour: string;
    text_colour: string;
    items: FindingItem[];
  };

  type Competitor = {
    id: number;
    project_id: number;
    title: string;
    bg_colour: string;
    text_colour: string;
    strengths: string[];
    weaknesses: string[];
    image: string;
  };

  type Swatch = {
    id: number;
    project_id: number;
    title: string;
    hex_colour: string;
    bg_colour: string;
  };

  type ProcessStep = {
    id: number;
    project_id: number;
    step_order: number;
    step_text: string;
  };

  type ContentSection = {
    id: number;
    project_id: number;
    section_key: string;
    section_title: string;
    paragraphs: string[];
  };
  
  
  const [findings, setFindings] = useState<Finding[]>([]);
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [swatches, setSwatches] = useState<Swatch[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [paragraphs, setParagraphs] = useState<ContentSection[]>([]);

*/
  type CaseLink = {
    url: string;
    label: string;
  };
  
  type ProjectDetails = {
    id: number;
    project_id: number;
    client: string;
    role: string;
    tools: string;
    prompt: string;
    solution: string;
    overview: string;
    hero_image: string;
    case_links: CaseLink[];
    colour: string;
    secondary_colour: string;
    projects: {
      title: string;
    };
  };

  type FindingItem = {
    text?: string;
    subitems?: string[];
  };
  
  type Finding = {
    id: number;
    project_id: number;
    section_type: string;
    title: string;
    bg_colour: string;
    text_colour: string;
    items: FindingItem[];
  };

  type ProcessStep = {
    id: number;
    project_id: number;
    step_order: number;
    step_text: string;
  };

  
  type VerticalStep = {
    id: number;
    project_id: number;
    step_order: number;
    step_text: string;
  };

  type ProjectSection = {
    id: number;
    project_id: number;
    section_key: string;
    section_title: string;
    paragraphs: string[];
    images?: { url: string; alt?: string }[];
  };
  

  
  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(null);
  const [findings, setFindings] = useState<Finding[]>([]);
  const [processFlow, setProcessFlow] = useState<string[]>([]);
  const [projectSections, setProjectSections] = useState<ProjectSection[]>([]);
  const [verticalFlow, setVerticalFlow] = useState<string[]>([]);

useEffect(() => {
  async function fetchProjectDetails() {
    const { data, error } = await supabase
      .from("ux_project_interface") 
      .select("*, projects(title)")
      .eq("project_id", 22)
      .single();
      

    if (!error) setProjectDetails(data);
  }

  fetchProjectDetails();
}, []);

  
useEffect(() => {
  async function fetchFindings() {
    const { data, error } = await supabase
      .from("findings")
      .select("*")
      .eq("project_id", 22);

    if (!error && data) setFindings(data);
  }

  fetchFindings();
}, []);

  
useEffect(() => {
  async function fetchProcessFlow() {
    const { data, error } = await supabase
      .from("process_steps")
      .select("*")
      .eq("project_id", 22)
      .order("step_order", { ascending: true });

      if (!error && data) {
        setProcessFlow(data.map((step: ProcessStep) => step.step_text));
      }
  }

  fetchProcessFlow();
}, []);

  
useEffect(() => {
  async function fetchProjectSections() {
    const { data, error } = await supabase
      .from("project_sections")
      .select("*")
      .eq("project_id", 22);

    if (!error && data) setProjectSections(data);
  }

  fetchProjectSections();
}, []);


useEffect(() => {
  async function fetchVerticalFlow() {
    const { data, error } = await supabase
      .from("vertical_timeline")
      .select("*")
      .eq("project_id", 22)
      .order("step_order", { ascending: true });

      if (!error && data) {
        setVerticalFlow(data.map((step: VerticalStep) => step.step_text));
      }
  }

  fetchVerticalFlow();
}, []);

if (!projectDetails) return null;
console.log(projectSections)

  return (
    <> 
    <Header/>
    <section className="min-h-[90vh] h-auto">
    <div style={{ background: projectDetails.colour }}>
      <div className="headerBody flex justify-center">
          <img
            className="w-full h-auto max-w-[100%] max-h-[40rem] object-contain"
            src={projectDetails.hero_image}
            alt="Hero"
          />
      </div>
    </div>

    {projectDetails && (
      <div className="headerBody">
        <h4 className="mb-0">UX Design</h4>
        <h1 className="mt-0 mb-10">{projectDetails.projects.title}</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-5/7 space-y-4">
            <h4 className="!font-light mb-4">OVERVIEW</h4>
            <p>{projectDetails.overview}</p>
            <p>{projectDetails.solution}</p>

            <h4 className="!font-light mt-10 mb-4">CHECK IT OUT</h4>
            <div className="flex gap-3 flex-wrap">
              {projectDetails.case_links?.map((link, idx) => (
                <CustomButton key={idx} href={link.url} label={link.label} />
              ))}
            </div>
          </div>

          <div className="md:w-2/7 space-y-6">
            <h4 className="!font-light mb-4">CLIENT</h4>
            <p><b>{projectDetails.client}</b></p>

            <h4 className="!font-light mb-4">MY ROLE</h4>
            <p className="mb-1"><b>{projectDetails.role}</b></p>
            <p className="mt-0 !text-sm">
              Worked on high-fidelity prototypes, business pitch, branding, and research
            </p>

            <h4 className="!font-light mb-4">TOOLS</h4>
            <p><b>{projectDetails.tools}</b></p>
          </div>
        </div>
      </div>
    )}
  </section>
  
  <section style={{ background: projectDetails.colour }} >
        <div className="pt-10 pb-10 headerBody !text-white">
            <h4 className="!font-light mt-0 mb-4">DESIGN PROMPT</h4>
            <h3 className=" m-0">{projectDetails.prompt}</h3>
        </div>
    </section>

  
  {processFlow && ( 
    <section >
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">OUR SOLUTION</h4>
            {projectSections
              .find(section => section.section_title === "OUR SOLUTION")
              ?.paragraphs
              .map((text, idx, arr) => (
                <p key={idx} className={idx === arr.length - 1 ? "pb-5" : ""}>
                  {text}
                </p>
            ))}


            <Process steps={processFlow} bgColor="bg-[#266670]"  />       
        </div>
    </section>
  )}
    

    {verticalFlow && ( 
      <section id="empathize">  
          <div className="pt-10 pb-10 headerBody">
              <h4 className="!font-light mt-0 mb-4">EMPATHIZE: RESEARCH</h4>
              
                {projectSections
                  .find(section => section.section_title === "EMPATHIZE: RESEARCH")
                  ?.paragraphs
                  .map((text, idx, arr) => (
                    <p key={idx} className={idx === arr.length - 1 ? "pb-5" : ""}>
                      {text}
                    </p>
                ))}
                <div className="!pl-0">
                <VerticalTimeline steps={verticalFlow} bgColor="bg-[#266670]" />
                </div>
                  
          </div>
      </section>
  )}


  {(() => {
    const projectObject = projectSections.find(projectObject => projectObject.section_title === "EMPATHIZE: WHAT WE FOUND");

    return projectObject ? (
    <section>
      <div className="pt-10 pb-10 headerBody">
        <h4 className="!font-light mt-0 mb-4">EMPATHIZE: WHAT WE FOUND</h4>
        {projectObject.paragraphs?.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
        <Findings
        findingsObject={findings.map(f => ({
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
            subitems: item.subitems ?? []
          }))
        }))}
      />
      </div>
    </section>
    ) : null;
  })()}
    
    {/*  
        


    <section>  
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">EMPATHIZE: WHAT WE FOUND</h4>
                <p>Our conclusions were defined into 2 parts: </p>       
                <Findings findingsObject={findingsData}/>
        </div>v
    </section>

    <section>  
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">EMPATHIZE: COMPETITIVE ANALYSIS</h4>
                <Competitor competitorObject={competitorData}/> 
                <br/>
                <Findings findingsObject={opportunities}/>
        </div>
    </section>

    <section>  
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">EMPATHIZE: USER PERSONAS</h4>
                <Findings findingsObject={userPersonas}/>
        </div>
    </section>

    <section id="define">  
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">DEFINING THE PROBLEMS</h4>
                <Findings findingsObject={insight}/>
                <br/>
                <Findings findingsObject={needs}/>
                <br/>
                <Findings findingsObject={refinedProblem}/>
        </div>
    </section>

    <section id="prototype">  
        <div className="pt-10 pb-2 headerBody">
            <h4 className="!font-light mt-0 mb-4">LOW-FIDELITY PROTOTYPES</h4>
        </div>
        
        <div style={{ background: '#FFFFFF' }} >
                <div className="headerBody flex justify-center">
                    <img className="w-auto max-w-full " src ="/projects/transitbloom/lowfi.png"></img>
                </div>
            </div>

    </section>

    
    <section id="test">  
        <div className="pt-10 pb-2 headerBody">
            <h4 className="!font-light mt-0 mb-4">MEDIUM-FIDELITY PROTOTYPES & USER FEEDBACK</h4>
            <p>The design was frequently adjusted from user feedback. Testers noted that:
              <ul>
                <li>Purple colour scheme didn’t connect with “green” technology </li>
                <li>Was tedious to scroll through various categories</li>
                <li>Boxes with no fill hard to read</li>
              </ul>
            </p>
        </div>
        
        <div style={{ background: '#FFFFFF' }} >
                <div className="headerBody flex justify-center">
                    <img className="w-auto max-w-full " src ="/projects/transitbloom/midfi.png"></img>
                </div>
            </div>

    </section>

    
    <section>  
        <div className="pt-10 pb-2 headerBody">
            <h4 className="!font-light mt-0 mb-4">HIGH-FIDELITY PROTOTYPES</h4>
        </div>
        
        <div style={{ background: '#266670' }} >
                <div className="headerBody flex justify-center">
                    <img className="w-auto max-w-full " src ="/projects/transitbloom/higfi.png"></img>
                </div>
            </div>

    </section>
    
    <section>  
        <div className="pt-10 pb-2 headerBody">
            <h4 className="!font-light mt-0 mb-4">BRANDING</h4>
            <p>We wanted to differentiate ourselves with apps like Citymapper, Transit, and Google Maps while still associating ourselves with more environmentally-related colours like green and yellow. We also wanted to ensure that our colours can be easily readable and accessible for all users.</p>
            
    <div className="flex justify-center gap-8 p-8 bg-[#FAF9F0]">
      {swatches.map((swatch, idx) => (
        <ColourSwatch
          key={idx}
          title={swatch.title}
          hexColour={swatch.hexColour}
          bgColour={swatch.bgColour}
        />
      ))}
    </div>
        </div>
        
        <div style={{ background: '#FFFFFF' }} >
                <div className="headerBody flex justify-center">
                    <img className="w-auto max-w-full " src ="/projects/transitbloom/logos.png"></img>
                </div>
            </div>

    </section>


    <section id="feasibility">  
        <div className="pt-10 pb-2 headerBody">
            <h4 className="!font-light mt-0 mb-4">FEASIBILITY</h4>
            <div className="flex flex-col lg:flex-row justify-between gap-10">
            <p>We believe that this app can easily be both integrated and desired by users and transit agencies. 
              <ul>
                <li>There exists separate systems to purchase tickets through your phone</li>
                <li>Transit data can be sourced with the <b>General Transit Feed Specification</b> standard </li>
                <li>Transit agencies already announce delays or cancellations; this can be integrated with the app</li>
                <li>Other data can be sourced when users use the app, similar to a system found in Transit and CityMapper</li>
              </ul>
              </p>
              <div className="rounded-lg shadow-md flex justify-center items-center bg-[#0279bb] lg:p-5 2xl:pl-50 2xl:pr-50">
                <img className="w-auto max-h-150" src ="/projects/transitbloom/yrt.png"></img>
              </div>
            </div>
            </div>
    </section>

    
    <section id="desirability">  
        <div className="pt-10 pb-10 headerBody">
            <h4 className="!font-light mt-0 mb-4">DESIRABILITY</h4>
                <Findings findingsObject={desirablity}/>
        </div>
    </section>
    */}

    </>
  );
}

export default ProjectPage;