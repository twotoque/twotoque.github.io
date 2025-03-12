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
      <p>Hi I'm <b>Derek Song</b></p>
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

    <div style={{top: `5vw`, position:"relative", right: 0}}>
    <img src={CNTower} alt="CN Tower" width="800rem" style={{
            position: "absolute", bottom: 0, right: 0,}} />
    
    
    <img src={GrainGrass} alt="Grain Grass" 
        style={{
            position: "relative",
            right: 0,
            zIndex: 1}} />

    </div>
    
      
      
    <div class="textBody"> 
      <h1>ui/ux, graphic design, & front-end developer</h1>
      <h2>also interested in urban planning, data visualization</h2>
    </div>
  </div>
}

export default App;