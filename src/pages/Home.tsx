import "../App.css";
import "../index.css";
import "../components/train.tsx";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GOtrain from "../components/train";
import GrainGrass from "../assets/GrainGrass.svg";
import CNTower from "../assets/CNTower.svg";
import ProjectCard from "../components/ProjectCard";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { supabase } from '@/lib/supabaseClient';
import ProjectArcSection from "../components/HomeSection";
import DataGradient from "../assets/Gradient1.svg";
import PhotoArcSection from "../components/HomeSectionPhotos"
import LogoTitle from "../components/Role";
import ProjectCard2 from "@/components/ProjectCard rev2";
import ProjectArcImageSection from "../components/HomeSectionPhotos";
/*
const projects = [
  {
    image: "/projects/census/thumbnail.gif",
    title: "Toronto Census Visualizer",
    description:
      "A visualization of Census 2021 data relative to all of Toronto's neighbourhoods.",
    tech_stack: "Built with Python, Plotly, Pandas, and Dash",
    type: "Data Visualization",
    year: "2024",
    link: "https://torontocensusvisualizer.com/",
  },
  {
    image: "/projects/decay/thumbnail.gif",
    title: "Atomic Search & Decay Calculator",
    description: "Searches periodic table for elements and calculates alpha, beta positive, beta negative, and electron capture decays.",
    tech_stack: "Built with JavaScript, JSON, HTML, and CSS.",
    type: "Chrome Extension",
    year: "2022 – 2024",
    link: "https://chromewebstore.google.com/detail/atomic-search-decay-calcu/emcigdjdlalmbmoaadjfdmlghckpplng?hl=en&authuser=1",
  },
  {
    image: "/projects/transitbloom/thumbnail.gif",
    title: "TransitBloom",
    description: "Gamifies and awards sustainable transit choices. Third place at UXL Blueprint Designation, 2024.",
    tech_stack: "Built with Figma and Adobe Illustrator.",
    type: "UX Design",
    year: "2024",
    link: "/transitbloom",
    case_study: "1",
  },
  {
    image: "/projects/cityoftorontoevent/thumbnail.gif",
    title: "Scarborough North Event Map",
    description: "(In development) A map which shows community, city, councillor, and library events, alongside live road closures.",
    tech_stack: "Built using React, TypeScript, Python, Firebase, Flask. Some data sourced from Toronto Open Data API.",
    type: "Development",
    year: "2025-present",
    link: "",
  },
  {
    image: "/projects/bikeshare/thumbnail.png",
    title: "Scarborough North Bike Share Research",
    description: "Researched, interviewed 15+ residents, and surveyed 55+ users on their thoughts on biking and the location of Bike Share Toronto stations in Ward 23 Scarborough North.",
    tech_stack: "Data visualized with Python, Pandas, and Plotly.",
    type: "UX Research",
    year: "2024",
    link: "https://github.com/twotoque/BikeShare-ScarboroughNorth",
  },
  {
    image: "/projects/cityoftoronto/thumbnail.gif",
    title: "Posters & Flyers for the City of Toronto",
    description: "Designed event and policy graphics (flyers, banners, posters, photos); several printed and distributed to 30,000+ households.",
    tech_stack: "Designed with Adobe Illustrator, InDesign, Photoshop, Lightroom.",
    type: "Print & Brand Design",
    year: "2024 - present",
    link: "",
  },
  {
    image: "/projects/ttcriders/thumbnail.gif",
    title: "Design and Research for TTCriders",
    description: "Designed various graphics/videos, built webtools, and researched for TTCriders' Line 3 Scarborough and Wheel-Trans campaigns.",
    tech_stack: "Designed with Adobe Illustrator, Photoshop, After Effects, Premiere Pro. Built tools using React, Next.js, JavaScript, and the Google Sheets API.",
    type: "Design + UX Research",
    year: "2021 - 2023",
    link: "https://drive.google.com/file/d/1hArEtFNQ2tEwH5DwUuRf0j-CnXnU3hw3/view",
  },
  {
    image: "/projects/yulearn/thumbnail.gif",
    title: "YUlearn",
    description: "An e-learning concept that explains computer science concepts to undergraduate students. Third place at York University Lassonde BEST Hackathon 2025.",
    tech_stack: "Built with React, TypeScript, PostgreSQL, Next.js. Data for business pitch built with Python and Plotly. Designed in Figma.",
    type: "Development",
    year: "2025",
    link: "https://docs.google.com/presentation/d/1mmPml3bYViGwdKy1LfTQjTGFgAUR1sMp8lleC3NClz8/edit?usp=sharing",
  },
  {
    image: "/projects/globefm/thumbnail.gif",
    title: "Globe.FM",
    description: "An app that allows you to discover international artists and new songs. Best UI at UX Laurier Designathon 2025",
    tech_stack: "Designed with Figma, Adobe After Effects, and Illustrator.",
    type: "UI Design",
    year: "2025",
    link: "https://www.figma.com/proto/0pv2HFYgsvfYI7VYpPCXfr/UXL-Designathon-2025--Globe.FM?node-id=113-2801&p=f&t=MIgxPBNgKOrRkyCr-1&scaling=scale-down&content-scaling=fixed&page-id=61%3A627&starting-point-node-id=113%3A2801&show-proto-sidebar=1",
  },
  {
    image: "/projects/aco/thumbnail.gif",
    title: "Architectural Conservancy Ontario Heritage Awards",
    description: "Storyboarded and edited 13 videos following ACO's brand guidelines for their heritage awards.",
    tech_stack: "Edited using DaVinci Resolve, Fusion, and Google Earth Studio",
    type: "Video Editing",
    year: "2021",
    link: "https://youtube.com/playlist?list=PLWjFwRWgg9K-bN6gWWZER7jYr5rZH1CJ7&si=I2boJVE6v1WiXwj5",
  },
  {
    image: "/projects/lsps/thumbnail.png",
    title: "Laurier STEM Publishing Society Website",
    description: "Configured domain, DNS records, and backend infrastructure for a self-hosted WordPress site; optimized performance to handle 41,500+ requests and 2,250+ monthly visitors",
    tech_stack: "Built with self-hosted WordPress, Cloudflare",
    type: "Website Hosting, WordPress",
    year: "2024",
    link: "",
  },
];
await supabase.from("projects").insert(projects);
*/

interface Project {
  title: string;
  image: string;
  description: string;
  tech_stack: string;
  type: string;
  year: string;
  link: string;
}


function App(){
  const [projects, setProjects] = useState<Project[]>([]);  


  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*");

      if (error) {
        console.error("Error loading projects:", error.message);
      } else {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  return <div> 
    <div className="frontGroup">
    <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
      hi i'm <b>Derek Song</b>
     </motion.h3>
      
    <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5,  delay: 0.3 }} className="text-lg text-gray-800 max-w-2xl text-center">
      ui/ux, graphic design, & full-stack developer
    </motion.h1>
    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5,  delay: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
    also interested in urban planning, data visualization
    </motion.p>
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5,  delay: 0.6 }} className="socialMedia text-lg text-gray-800 max-w-2xl text-center">
      <a href="https://www.linkedin.com/in/dereksong/">
          <FontAwesomeIcon icon={faLinkedin} className="button" />
        </a>
        <a href="https://github.com/twotoque/">
          <FontAwesomeIcon icon={faGithub} className="button" />
        </a>
    </motion.div>
    </div>
    <GOtrain/>
    <div className="torontoContainer">
      <img src={CNTower} alt="CN Tower" className="cnTower" />
      <img src={GrainGrass} alt="Grain Grass" className="grass" />
    </div>
    
      
      
    <div className="textBody !mb-0"> 
      <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
        Experience
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
        I’m currently working at the <b>City of Toronto</b> as an Graphics Commuications Assistant for Ward 23 Scarborough North, handling graphic design, leading a biking UX project, and helping with digital communications & data visualization.
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       I’m also doing a Computer Science degree at <b>Wilfrid Laurier University</b> with a minor of UX Design and North American Studies.
      </motion.p>
      <div className="flex flex-col gap-3">
      <LogoTitle
        logoSrc="./logos/city_of_toronto_logo.jpeg"
        title="Council Administrative Assistant (Communications)"
        subtitle="Toronto City Council, Ward 23 Scarborough North"
        dateJob="April 2024 - present"
        dropdownContent={
          <div>
            <ul className="pl-5">
            <li>
              Designed 130+ event, newsletter, and policy graphics using Adobe Illustrator,
              Photoshop, and InDesign in English, Tamil, and Chinese, with materials reaching
              30,000+ households and increasing community engagement by 20% for City Councillor
              and TTC Chair Jamaal Myers
            </li>
            <li>
              Conducted interviews with 15+ residents, surveyed 55+ individuals, and analyzed
              UX-focused bike usage data using Python, Pandas, Plotly, Dash, and JSON
            </li>
            <li>
              Optimized data retrieval through caching and efficient API usage in an interactive
              map dashboard built with React, TypeScript, Flask, Firebase, and the Toronto Open
              Data API to present events and datasets
            </li>
            <li>
              Captured and edited 1,200+ photos using a DSLR and Adobe Lightroom
            </li>
            <li>
              Assisted in planning, brand development, and marketing major community events,
              including a 1,000+ attendee community barbecue and a holiday market involving
              200+ guests and 15+ sponsors
            </li>
            <li>Worked and researched on policy briefs and constituency issues, including transportation and local road parking 
            </li>
            <li>Recruited 30+ volunteers for our events 
            </li>
            <li>Entered data for more than 1000+ residents using Microsoft Excel and ForeAction
            </li>
          </ul>

          </div>
        }
      />


           <LogoTitle
        logoSrc="./logos/laz_logo.jpeg"
        title="Product Designer and Software Developer, Laurier StartUp Lab"
        subtitle="Lazaridis School of Business & Economics at Wilfrid Laurier University"
        dateJob="September 2025 - December 2025"
        dropdownContent={
          <div>
            <ul className="pl-5">
            <li>
              Developed an interactive park route finder using Dijkstra’s algorithm, Turf.js, and Leaflet for shortest-path navigation. Built with React, TypeScript, and PostgreSQL, with geospatial data processed in QGIS for efficient rendering and maintenance.
            </li>
            <li>
              Automated web-to-LaTeX pipeline with Python (BeautifulSoup), handling references, images, and formatting for structured reports.
            </li>
            <li>
              Led a brand refresh for Our Greenway, redesigning the visual identity, improving accessibility (WCAG 2.1), and conducting a heuristic evaluation using Nielsen’s principles to address UX issues.
            </li>
            <li>
              Captured and edited 1,200+ photos using a DSLR and Adobe Lightroom
            </li>
            <li>
              Created a comprehensive brand guideline system and developed a component development kit for the website, including reusable HTML/CSS UI elements for NationBuilder
            </li>
          </ul>

          </div>
        }
      />

           <LogoTitle
        logoSrc="./logos/ourgreenway_logo.jpeg"
        title="Software Developer and Data Analyst"
        subtitle="Our Greenway Conservancy"
        dateJob="April 2025 - September 2025"
        dropdownContent={
          <div>
            <ul className="pl-5">
            <li>
              Developed an interactive park route finder using Dijkstra’s algorithm, Turf.js, and Leaflet for shortest-path navigation. Built with React, TypeScript, and PostgreSQL, with geospatial data processed in QGIS for efficient rendering and maintenance.
            </li>
            <li>
              Automated web-to-LaTeX pipeline with Python (BeautifulSoup), handling references, images, and formatting for structured reports.
            </li>
            <li>
              Led a brand refresh for Our Greenway, redesigning the visual identity, improving accessibility (WCAG 2.1), and conducting a heuristic evaluation using Nielsen’s principles to address UX issues.
            </li>
            <li>
              Captured and edited 1,200+ photos using a DSLR and Adobe Lightroom
            </li>
            <li>
              Created a comprehensive brand guideline system and developed a component development kit for the website, including reusable HTML/CSS UI elements for NationBuilder
            </li>
          </ul>

          </div>
        }
        
      />

      <LogoTitle
        logoSrc="./logos/ttcriders-logo.png"
        title="Community Planner"
        subtitle="TTCriders"
        dateJob="May 2022 - September 2023"
      />
      <LogoTitle
        logoSrc="./logos/aco_logo.jpeg"
        title="Video Editor"
        subtitle="Architectural Conservancy Ontario"
        dateJob="September 2021 - November 2021"
      />

    </div>

      <hr className="my-4"></hr>

      <LogoTitle
        logoSrc="./logos/wlu_logo.webp"
        title="Bachelor of Science, Computer Science"
        subtitle="Wilfrid Laurier University"
        dateJob="September 2023 - Present"
        
        dropdownContent={
          <div>
            <ul className="pl-5">
            <li>
              Minor: UX Design and North American Studies
            </li>
            <li>
              Relevant topics: Data Structures, Databases, Discrete Mathematics, Agile Design, Linear Algebra, Tree/Graph Theory, Combinatorics, Operating Systems, Digital Electronics, Statistical Hypothesis Testing
            </li>
            <li>
              Faculty of Science Dean's List, 2024
            </li>
            <li>
              Clubs: UX Laurier, Chinese Student Association, Rereational Dance Team,  Intramural Ultimate Frisbee, Volleyball, Softball
            </li>
          </ul>
          </div>
          }
      />
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       This page is a work-in-progress and is being be updated to include my portfolio. In the meantime, welcome :)
      </motion.p>
      <motion.h5 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       Last updated: June 2, 2025
      </motion.h5>

      
      
    </div>
{/*
<div className="flex flex-wrap gap-6 items-start">
        {projects.map((proj, idx) => (
          <a key={idx} href={proj.link} className="!no-underline">
            <ProjectCard {...proj} />
          </a>
        ))}
        
      </div>
*/}
<ProjectArcSection
  number="01"
  title="Data & Product"
  backgroundSvg={DataGradient}
  projects={[
    "Toronto Census Visualizer",
    "Scarborough North Bike Share Research",
    "Design and Research for TTCriders",
    "TransitBloom",
  ]}
  allProjects={projects}
/>
<ProjectArcImageSection
  number="01"
  title="Data"
  backgroundSvg={DataGradient}
  tools={["Python", "Pandas", "Plotly"]}
  projects={[
    "Toronto Census Visualizer",
    "Scarborough North Bike Share Research",
    "Design and Research for TTCriders",
    "YUlearn",
  ]}
  allProjects={projects}
/>

    
  </div>
}

export default App;