import "./App.css";
import "./index.css";
import "./components/train.tsx";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GOtrain from "./components/train.tsx";
import GrainGrass from "./assets/GrainGrass.svg";
import CNTower from "./assets/CNTower.svg";


function App(){
  return <div> 
    <div className="frontGroup">
    <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
      hi i'm <b>Derek Song</b>
     </motion.h3>
      
    <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5,  delay: 0.3 }} className="text-lg text-gray-800 max-w-2xl text-center">
      ui/ux, graphic design, & front-end developer
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
    
      
      
    <div class="textBody"> 
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
       This page is a work-in-progress and will be updated to include my portfolio. In the meantime, welcome :)
      </motion.p>
      <motion.h5 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-lg text-gray-800 max-w-2xl text-center">
       Last updated: March 12, 2025
      </motion.h5>

      
    </div>
  </div>
}

export default App;