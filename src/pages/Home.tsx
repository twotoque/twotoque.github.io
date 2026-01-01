import "../App.css";
import "../index.css";
import "../components/train.tsx";
import { motion, AnimatePresence } from "framer-motion";
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
import PhotoArcSection from "../components/HomeSectionPhotos"
import LogoTitle from "../components/Role";
import ProjectCard2 from "@/components/ProjectCard rev2";
import ProjectArcImageSection from "../components/HomeSectionPhotos";
import CustomButton from "@/components/Button";
import StatsSection from "@/components/HomeSectionSports";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SENTENCES = [
  "building digital tools that help people understand market data",
  "building digital tools that help people understand civic systems",
  "designing print materials that engage 30,000+ households",
  "building digital tools that help people navigate public services",
  "building digital tools that help people make informed decisions",
  "designing print materials that balance form and function",
  "building digital tools that translate machine learning into insights",
  "designing visual systems that communicate ideas with clarity",
];


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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % SENTENCES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-4xl md:text-5xl font-semibold text-gray-900 max-w-3xl text-center leading-tight"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={SENTENCES[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="block"
        >
          {SENTENCES[index]}
        </motion.span>
      </AnimatePresence>
    </motion.h1>
    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5,  delay: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
    with a focus on product design, data visualization, and urban systems.
    </motion.p>
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5,  delay: 0.6 }} className="socialMedia text-lg text-gray-800 max-w-2xl text-center">
      <a href="https://www.linkedin.com/in/dereksong/">
          <FontAwesomeIcon icon={faLinkedin} className="button" />
        </a>
        <a href="https://github.com/twotoque/">
          <FontAwesomeIcon icon={faGithub} className="button" />
        </a>
        <a href="mailto:dereksong28@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="button" />
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
        Hi! I'm a 3rd year Wilfrid Laurier University computer science student with a minor in user experience design. I'm interested in software development, UI/UX design, marketing, urban planning, public policy, and data analysis.       </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       I currently work at <b>Toronto City Council (Ward 23 – Scarborough North)</b> as a Graphics Communications Assistant, contributing to event engagement and digital design using the Adobe suite, as well as data visualization work using Python. I also support founders at Wilfrid Laurier University’s Start-Up Lab through software development and Figma prototyping.
       </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       In my free time, I enjoy dancing, going to the gym, running, and playing volleyball. I also enjoy listening to musicals <span className="text-sm">(favourites are <i>In the Heights</i>, <i>The Great Gatsby</i>, <i>Come From Away</i>, and <i>Hamilton</i>)</span>, hip-hop, pop, and R&B <span className="text-sm">(favourites are Bruno Mars, SZA, and KATSEYE)</span>.
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
            Designed and tested high-fidelity Figma prototypes for the BU354 Human Resources Management dashboard; conducted statistical analyses (t-tests and chi-square tests); and built the platform’s backend using Prisma, BetterAuth, and Next.js to support secure authentication, robust data modeling, and scalable API development.
          </li>

          <li>
            Developed and deployed the Winternship Job Portal, creating a Rank-Match algorithm and implementing CI/CD pipelines with a Next.js frontend and SQL/Supabase backend, supporting more than 110 total positions, 48% more unique jobs, 65% more employers, and onboarding 80+ students.
          </li>

          <li>
            Built a real-time ingredient recognition system for a local Kitchener grocery store using TensorFlow, Keras, and Teachable Machine to classify food items and generate complementary product recommendations from a 20K+ transaction dataset.
          </li>

          <li>
            Designed and prototyped 8+ user flows for Elara, a PowerBI timesheet and payment management app, emphasizing usability, accessibility, and a seamless end-to-end experience.
          </li>

          <li>
            Collaborated with startup founders and professors to research user needs and design intuitive user flows, wireframes, and prototypes across Figma, React, and TypeScript.
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
        title="Community Planner and Graphic Designer"
        subtitle="TTCriders"
        dateJob="May 2022 - September 2023"

         dropdownContent={
          <div>
            <ul className="pl-5">
              <li>
                Analyzed UX data from rider interviews and focus groups to research and design TTCriders’ Wheel-Trans “Family of Services” and Line 3 Scarborough closure report using Adobe InDesign.
              </li>

              <li>
                 Built interactive tools to calculate time lost from the Line 3 Scarborough shutdown using user-submitted data, and visualized bus delay impacts with React, Next.js, Google Sheets API, HTML, CSS, and JavaScript.
              </li>


              <li>
                Spoke with media organizations including CBC, CP24, Global News, and the Scarborough Mirror to communicate research findings and advocacy outcomes.
              </li>

              <li>
                Used CallHub and NationBuilder to conduct community outreach, manage campaigns, and maintain the organization’s website.
              </li>

              <li>
                Produced short-form videos and graphics using Adobe After Effects, Premiere Pro, and Illustrator, with several pieces surpassing 6,000+ views, 200+ engagements, and contributing to a 15% increase in web traffic.
              </li>

              <li>
                Led workshops for newcomers on navigating public transit systems and engaging in transit advocacy.
              </li>

              <li>
                Co-planned and coordinated a Youth Leadership Conference attended by approximately 20 aspiring changemakers.
              </li>
          </ul>

          </div>
        }

      />
      <LogoTitle
        logoSrc="./logos/aco_logo.jpeg"
        title="Video Editor"
        subtitle="Architectural Conservancy Ontario"
        dateJob="September 2021 - November 2021"
         dropdownContent={
          <div>
            <ul className="pl-5">
                <li>
                  Storyboarded and produced 13 videos for the Architectural Conservancy Ontario’s 2021 Heritage Awards using Adobe After Effects, Premiere Pro, Photoshop, and Google Earth Studio.
                </li>

                <li>
                  Followed Architectural Conservancy Ontario brand guidelines and colour schemes to ensure visual consistency across all deliverables.
                </li>

                <li>
                  Collaborated with staff to create visually effective videos using maps, imagery, and keyframe animation.
                </li>
                
            </ul>
            </div>
         }
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


      <hr className="my-4"></hr>
      <LogoTitle
        logoSrc="./logos/code.svg"
        title="Programming, Tools, and Frameworks"
        subtitle=""
        
        dropdownContent={
          <div>
            <ul className="pl-5">
              <li>Python (Pandas, Plotly, Dash, Flask, TensorFlow, Keras)</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React (Next.js, Vite, BetterAuth, Prisma)</li>
              <li>C</li>
              <li>SQL (PostgreSQL / Supabase)</li>
              <li>HTML / CSS</li>
              <li>ARM Assembly</li>
              <li>JSON</li>
              <li>R</li>
              <li>Visual Basic / VBA</li>
            </ul>
          </div>
          }
      />
      <LogoTitle
        logoSrc="./logos/design.svg"
        title="Design Tools"
        subtitle=""
        
        dropdownContent={
          <div>
            <ul className="pl-5">
              <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Lightroom / Photography</li>
                <li>After Effects</li>
                <li>Premiere Pro</li>
                <li>Acrobat Pro</li>
                <li>InDesign</li>
                <li>Procreate</li>
                <li>Canva</li>
                <li>DaVinci Resolve / Fusion</li>
            </ul>
          </div>
          }
      />


      <LogoTitle
        logoSrc="./logos/other.svg"
        title="Other Tools"
        subtitle=""
        
        dropdownContent={
          <div>
            <ul className="pl-5"> 
              <li>Cloudflare DNS</li>
              <li>Docker</li>
              <li>Vercel</li>
              <li>Railway</li>
              <li>Firebase</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>QGIS</li>
              <li>WordPress</li>
            </ul>
          </div>
          }
      />
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       <CustomButton
       href="/resume"
        label="View Resume"
        />
        </motion.p>
      <motion.h5 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       Last updated: December 17, 2025
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
  title="Product & Data"
  backgroundSvg="/projects/Gradient 1.png"
  projects={[
    "BU354 Assignment Platform",
    "FlightPath Downsview",
    "Toronto Census Visualizer",
    "Wheel-Trans TTCriders Accessibility Report",
    "Smart Bike Resistance Project",
    "Scarborough North Event Map",
    "PlateMate",
    "Scarborough North Bike Share Research",
  ]}
  allProjects={projects}
/>

<ProjectArcSection
  number="02"
  title="Software"
  backgroundSvg="/projects/Gradient 1.png"
  projects={[
    "Winternship Job Portal",
    "Scrape2TeX",
    "Atomic Search & Decay Calculator"
  ]}
  allProjects={projects}
/>

<ProjectArcSection
  number="03"
  title="UX Design"
  backgroundSvg="/projects/Gradient 1.png"
  projects={[
    "TransitBloom",
    "Globe.FM",
    "Our Greenway Website Redesign",
    "YUlearn"
  ]}
  allProjects={projects}
/>

<ProjectArcImageSection
  number="04"
  title="Print & Digital Design"
  images={[
    { path: "/design/gardenawards.jpg" },
    { path: "/design/housing.jpg" },
    { path: "/design/launchphone.jpg" },
    { path: "/design/newsletter.jpg" },
    { path: "/design/rally.jpg" },
    { path: "/design/graduation.jpg" },
    { path: "/design/jammies.jpg" },
    { path: "/design/ourgreenwaylogo.jpg" },
    { path: "/design/yearbook.png" },
    { path: "/design/drawing.png" },
  ]}
/>


<ProjectArcSection
  number="05"
  title="Video Editing"
  backgroundSvg="/projects/Gradient 1.png"
  projects={[
    "Architectural Conservancy Ontario Heritage Awards",
    "WLU CSA Vice Presidents Video"
  ]}
  allProjects={projects}
/>

<ProjectArcImageSection
  number="06"
  title="Photos"
  images={[
    { path: "/pictures/IMG_0002.jpg" },
    { path: "/pictures/IMG_0645.jpg" },
    { path: "/pictures/IMG_0001.jpg" },
    { path: "/pictures/IMG_0003.jpg" },
    { path: "/pictures/IMG_0004.jpg" },
    { path: "/pictures/IMG_0347.jpg" },
    { path: "/pictures/IMG_0955.jpg" },
    { path: "/pictures/IMG_2472.jpg" },
    { path: "/pictures/IMG_2674.jpg" },
    { path: "/pictures/IMG_8986.jpg" },
    { path: "/pictures/IMG_8813.jpg" }
  ]}
/>



        <div className="textBody !pt-0 !mb-0">
<motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
  Outside of the Office
</motion.h1>
</div>

<StatsSection
  number="07"
  title="Gym"
  stats={[
    { label: "Total distance ran", value: "173", unit: "km"},
    { label: "5km PR", value: "24:27", unit: ""},
    { label: "10km PR", value: "56:37", unit: ""},
    { label: "10mile PR", value: "1:51:57", unit: ""},
    { label: "Longest non-stop run", value: "16.35", unit: "km"},
    { label: "Bench press", value: "135", unit: "lb"},
    { label: "Sporting Life 10k (May 11 2025)", value: "58:08", unit: ""},
    { label: "Under Armour Toronto 10k (June 15 2024)", value: "1:11:06", unit: ""},
    { label: "Laurier recreational dance showcases", value: "5", unit: "showcases performed"},
  ]}
/>
<ProjectArcSection
  number="08"
  title="Dance"
  backgroundSvg="/projects/Gradient 1.png"
  projects={[
    "Afrofusion",
    "K-Pop",
  ]}
  allProjects={projects}
/>

<ProjectArcImageSection
  number="09"
  title="Cat"
  images={[
    { path: "/cat/cat1.jpg" },
    { path: "/cat/cat2.jpg" },
    { path: "/cat/cat3.jpg" },
  ]}
/>



  </div>
}

export default App;