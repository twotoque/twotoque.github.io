import "../App.css";
import "../index.css";
import "../components/train.tsx";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GOtrain from "../components/train.tsx";
import GrainGrass from "../assets/GrainGrass.svg";
import CNTower from "../assets/CNTower.svg";
import ProjectCard from "../components/ProjectCard.tsx";
import React from "react";


const projects = [
  {
    image: "/projects/census/thumbnail.gif",
    title: "Toronto Census Visualizer",
    description:
      "A visualization of Census 2021 data relative to all of Toronto's neighbourhoods.",
    techStack: "Built with Python, Plotly, Pandas, and Dash",
    type: "Data Visualization",
    year: "2024",
    link: "https://torontocensusvisualizer.com/",
  },
  {
    image: "/projects/decay/thumbnail.gif",
    title: "Atomic Search & Decay Calculator",
    description: "Searches periodic table for elements and calculates alpha, beta positive, beta negative, and electron capture decays.",
    techStack: "Built with JavaScript, JSON, HTML, and CSS.",
    type: "Chrome Extension",
    year: "2022 – 2024",
    link: "https://chromewebstore.google.com/detail/atomic-search-decay-calcu/emcigdjdlalmbmoaadjfdmlghckpplng?hl=en&authuser=1",
  },
  {
    image: "/projects/transitbloom/thumbnail.gif",
    title: "TransitBloom",
    description: "Gamifies and awards sustainable transit choices. Third place at UXL Blueprint Designation, 2024.",
    techStack: "Built with Figma and Adobe Illustrator.",
    type: "UX Design",
    year: "2024",
    link: "/transitbloom",
    caseStudy: "1",
  },
  {
    image: "/projects/cityoftorontoevent/thumbnail.gif",
    title: "Scarborough North Event Map",
    description: "(In development) A map which shows community, city, councillor, and library events, alongside live road closures.",
    techStack: "Built using React, TypeScript, Python, Firebase, Flask. Some data sourced from Toronto Open Data API.",
    type: "Development",
    year: "2025-present",
    link: "",
  },
  {
    image: "/projects/bikeshare/thumbnail.png",
    title: "Scarborough North Bike Share Research",
    description: "Researched, interviewed 15+ residents, and surveyed 55+ users on their thoughts on biking and the location of Bike Share Toronto stations in Ward 23 Scarborough North.",
    techStack: "Data visualized with Python, Pandas, and Plotly.",
    type: "UX Research",
    year: "2024",
    link: "https://github.com/twotoque/BikeShare-ScarboroughNorth",
  },
  {
    image: "/projects/cityoftoronto/thumbnail.gif",
    title: "Posters & Flyers for the City of Toronto",
    description: "Designed event and policy graphics (flyers, banners, posters, photos); several printed and distributed to 30,000+ households.",
    techStack: "Designed with Adobe Illustrator, InDesign, Photoshop, Lightroom.",
    type: "Print & Brand Design",
    year: "2024 - present",
    link: "",
  },
  {
    image: "/projects/ttcriders/thumbnail.gif",
    title: "Design and Research for TTCriders",
    description: "Designed various graphics/videos, built webtools, and researched for TTCriders' Line 3 Scarborough and Wheel-Trans campaigns.",
    techStack: "Designed with Adobe Illustrator, Photoshop, After Effects, Premiere Pro. Built tools using React, Next.js, JavaScript, and the Google Sheets API.",
    type: "Design + UX Research",
    year: "2021 - 2023",
    link: "https://drive.google.com/file/d/1hArEtFNQ2tEwH5DwUuRf0j-CnXnU3hw3/view",
  },
  {
    image: "/projects/yulearn/thumbnail.gif",
    title: "YUlearn",
    description: "An e-learning concept that explains computer science concepts to undergraduate students. Third place at York University Lassonde BEST Hackathon 2025.",
    techStack: "Built with React, TypeScript, PostgreSQL, Next.js. Data for business pitch built with Python and Plotly. Designed in Figma.",
    type: "Development",
    year: "2025",
    link: "https://docs.google.com/presentation/d/1mmPml3bYViGwdKy1LfTQjTGFgAUR1sMp8lleC3NClz8/edit?usp=sharing",
  },
  {
    image: "/projects/globefm/thumbnail.gif",
    title: "Globe.FM",
    description: "An app that allows you to discover international artists and new songs. Best UI at UX Laurier Designathon 2025",
    techStack: "Designed with Figma, Adobe After Effects, and Illustrator.",
    type: "UI Design",
    year: "2025",
    link: "https://www.figma.com/proto/0pv2HFYgsvfYI7VYpPCXfr/UXL-Designathon-2025--Globe.FM?node-id=113-2801&p=f&t=MIgxPBNgKOrRkyCr-1&scaling=scale-down&content-scaling=fixed&page-id=61%3A627&starting-point-node-id=113%3A2801&show-proto-sidebar=1",
  },
  {
    image: "/projects/aco/thumbnail.gif",
    title: "Architectural Conservancy Ontario Heritage Awards",
    description: "Storyboarded and edited 13 videos following ACO's brand guidelines for their heritage awards.",
    techStack: "Edited using DaVinci Resolve, Fusion, and Google Earth Studio",
    type: "Video Editing",
    year: "2021",
    link: "https://youtube.com/playlist?list=PLWjFwRWgg9K-bN6gWWZER7jYr5rZH1CJ7&si=I2boJVE6v1WiXwj5",
  },
  {
    image: "/projects/lsps/thumbnail.png",
    title: "Laurier STEM Publishing Society Website",
    description: "Configured domain, DNS records, and backend infrastructure for a self-hosted WordPress site; optimized performance to handle 41,500+ requests and 2,250+ monthly visitors",
    techStack: "Built with self-hosted WordPress, Cloudflare",
    type: "Website Hosting, WordPress",
    year: "2024",
    link: "",
  },
];

function App(){
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
    
      
      
    <div className="textBody"> 
      <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
        experience
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
        I’m currently working at the <b>City of Toronto</b> as an Graphics Commuications Assistant for Ward 23 Scarborough North, handling graphic design, leading a biking UX project, and helping with digital communications & data visualization.
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       I’m also doing a Computer Science degree at <b>Wilfrid Laurier University</b> with a minor of UX Design and North American Studies.
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       This page is a work-in-progress and is being be updated to include my portfolio. In the meantime, welcome :)
      </motion.p>
      <motion.h5 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       Last updated: June 2, 2025
      </motion.h5>

      
    <div className="flex flex-wrap gap-6  items-start ">
        {projects.map((proj, idx) => (
        <a key={idx} href={proj.link}  className="!no-underline">
          <ProjectCard key={idx} {...proj} />
          </a>
        ))}
    </div>
    </div>
    
  </div>
}

export default App;