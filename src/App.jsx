import "./App.css";
import "./index.css";
import "./components/train.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GOtrain from "./components/train.tsx";


function App(){
  return <div> 
    <div class="frontGroup">
      <p>Hi I'm <b>Derek Song</b></p>
      <h1>ui/ux, graphic design, & front-end developer</h1>
      <h2>also interested in urban planning, data visualization</h2>
      <div class="socialMedia">
      <a href="https://www.linkedin.com/in/dereksong/">
        <FontAwesomeIcon icon={faLinkedin} className="button" />
      </a>
      <a href="https://www.linkedin.com/in/dereksong/">
        <FontAwesomeIcon icon={faGithub} className="button" />
      </a>
      </div>
      <GOtrain />
    </div>
  </div>
}

export default App;