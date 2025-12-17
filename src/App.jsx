import { Routes, Route,  } from "react-router-dom";

import ProjectPage from "./pages/ProjectPage";
import Home from "./pages/Home";      
import ScrollTop from "./components/ScrollTop";
import BU354 from "./pages/BU354";
import ResumePage from "./pages/Resume";

function App() {
  return (
    <div className="w-full !overflow-x-hidden">
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bu354" element={<BU354/>} />
        <Route path="/resume" element={<ResumePage/>} />
        <Route path="/transitbloom" element={<ProjectPage projectNum={22} />} />
        <Route path="/yulearn" element={<ProjectPage projectNum={27} />} />
      </Routes>
    </div>
  );
}

export default App;
