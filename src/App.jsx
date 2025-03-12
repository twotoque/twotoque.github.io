import "./App.css";
import "./index.css";
import "./components/train.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GOtrain from "./components/train.tsx";

function App(){
  return <div class="frontGroup">
  <p>Hi I'm <b>Derek Song</b></p>
  <h1>ui/ux, graphic design, & front-end developer</h1>
  <h2>also interested in urban planning, data visualization</h2>
  <div class="socialMedia">
    <FontAwesomeIcon icon={faLinkedin} />
    <FontAwesomeIcon icon={faGithub} />
  </div>
  <GOtrain />
  </div>
}

export default App;