import "./App.css";
import "./index.css";
import "./components/train.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GOtrain from "./components/train.tsx";
import GrainGrass from "./assets/GrainGrass.svg";
import CNTower from "./assets/CNTower.svg";


function App(){
  return <div> c
    <div class="frontGroup" style ={{zIndex: 3, position: "relative" }}>
      <h3>Hi I'm <b>Derek Song</b></h3>
      <h1>ui/ux, graphic design, & front-end developer</h1>
      <h2>also interested in urban planning, data visualization</h2>
      <div class="socialMedia">
      <a href="https://www.linkedin.com/in/dereksong/">
        <FontAwesomeIcon icon={faLinkedin} className="button" />
      </a>
      <a href="https://github.com/twotoque/">
        <FontAwesomeIcon icon={faGithub} className="button" />
      </a>
      </div>
    </div>
    <GOtrain style ={{zIndex: 2, position: "relative"}}/>

    <div style={{top: `5vw`, position:"relative", right: 0,
            marginBottom: `6vw`}}>
    <img src={CNTower} alt="CN Tower" width="800rem" style={{
            position: "absolute", bottom: 0, right: 0,}} />
    
    
    <img src={GrainGrass} alt="Grain Grass" 
        style={{
            position: "relative",
            right: 0,
            zIndex: 1}} />

    </div>
    
      
      
    <div class="textBody"> 
      <h1>experience</h1>
      <p>I’m currently working at the <b>City of Toronto</b> as an Graphics Commuications Assistant, handling graphic design, leading a biking UX project, and helping with digital communications & data visualization.</p>
      <p>I’m also doing a Computer Science degree at <b>Wilfrid Laurier University</b> with a minor of UX Design and North American Studies. </p>
      <p>This page is a work-in-progress and will be updated to include my portfolio. In the meantime, welcome :)</p>
    </div>
  </div>
}

export default App;