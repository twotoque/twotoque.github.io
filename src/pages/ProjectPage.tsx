import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import  Header from "../components/Header";
import  CustomButton from "../components/Button";
import { supabase } from '@/lib/supabaseClient';
import SectionWithFinding from "@/components/nested_components/SectionWithFindings";
import SectionWithCompetitors from "@/components/nested_components/SectionWithCompetitors";
import ProjectImage from "@/components/ProjectImage";
import SectionWithSwatch from "@/components/nested_components/SectionWithSwatches";
import ProjectImageSecondary from "@/components/ProjectImageSecondary";
import Empathize from "@/components/nested_components/Empathize";
import Solution from "@/components/nested_components/Solution";
import ParagraphText from "@/components/ParagraphText";

const projectNum = 22
const { data, error } = await supabase.from('projects').select('*');
console.log(import.meta.env.VITE_SUPABASE_URL);
if (error) {
  console.error("Error loading projects:", error.message);
} else {
  console.log("Projects data:", data);
}


function ProjectPage() {
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
    role_details: string;
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
    bgColour: string;
    bgColourAlt: string;
    imgDesc: string;
    imgDescColour: string;
    imgDescColourAlt: string;
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

  

  
  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(null);
  const [findings, setFindings] = useState<Finding[]>([]);
  const [processFlow, setProcessFlow] = useState<string[]>([]);
  const [projectSections, setProjectSections] = useState<ProjectSection[]>([]);
  const [verticalFlow, setVerticalFlow] = useState<string[]>([]);
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [swatches, setSwatches] = useState<Swatch[]>([]);

useEffect(() => {
  async function fetchProjectDetails() {
    const { data, error } = await supabase
      .from("ux_project_interface") 
      .select("*, projects(title)")
      .eq("project_id", projectNum)
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
      .eq("project_id", projectNum);

    if (!error && data) setFindings(data);
  }

  fetchFindings();
}, []);

useEffect(() => {
  async function fetchCompetitors() {
    const { data, error } = await supabase
      .from("competitors")
      .select("*")
      .eq("project_id", projectNum);

    if (!error && data) setCompetitors(data);
  }

  fetchCompetitors();
}, []);

  
useEffect(() => {
  async function fetchProcessFlow() {
    const { data, error } = await supabase
      .from("process_steps")
      .select("*")
      .eq("project_id", projectNum)
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
      .eq("project_id", projectNum);

    if (!error && data) setProjectSections(data);
  }

  fetchProjectSections();
}, []);


  
useEffect(() => {
  async function fetchSwatch() {
    const { data, error } = await supabase
      .from("swatches")
      .select("*")
      .eq("project_id", projectNum);

    if (!error && data) setSwatches(data);
  }

  fetchSwatch();
}, []);

useEffect(() => {
  async function fetchVerticalFlow() {
    const { data, error } = await supabase
      .from("vertical_timeline")
      .select("*")
      .eq("project_id", projectNum)
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
              {projectDetails.role_details}
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


  <Solution projectSections={projectSections} title="OUR SOLUTION" processFlow={processFlow} colour={projectDetails.colour}/>
  <Empathize projectSections={projectSections} title="EMPATHIZE: RESEARCH" verticalFlow={verticalFlow} colour={projectDetails.colour}/>
  <SectionWithFinding projectSections={projectSections} findings={findings} title="EMPATHIZE: WHAT WE FOUND" filter={["findingsData", "opportunities"]}/>
  <SectionWithFinding projectSections={projectSections} findings={findings} title="EMPATHIZE: USER PERSONAS" filter={["userPersonas"]}/>
  <SectionWithCompetitors projectSections={projectSections} competitors={competitors} title="EMPATHIZE: USER PERSONAS"/>
  <SectionWithFinding projectSections={projectSections} findings={findings} title="DEFINING THE PROBLEMS" filter={["insight", "needs", "refinedProblem"]}/>
  <ParagraphText projectSections={projectSections}  title="OUR SOLUTION" />
  <ProjectImage projectSections={projectSections} title="LOW-FIDELITY PROTOTYPES" />
  <ProjectImage projectSections={projectSections} title="MEDIUM-FIDELITY PROTOTYPES & USER FEEDBACK" />
  <ProjectImage projectSections={projectSections} title="HIGH-FIDELITY PROTOTYPES" />
  <SectionWithSwatch projectSections={projectSections} title="BRANDING" swatchObject = {swatches} />
  <ProjectImageSecondary projectSections={projectSections}  title="FEASIBILITY" />
  <SectionWithFinding projectSections={projectSections} findings={findings} title="DESIRABILITY" filter={["desirablity"]}/>
    </>
  );
}

export default ProjectPage;