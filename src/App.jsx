import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProjectPage from "./pages/ProjectPage";
import Home from "./pages/Home";      
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="w-full !overflow-x-hidden">
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transitbloom" element={<ProjectPage projectNum={22} />} />
        <Route path="/yulearn" element={<ProjectPage projectNum={27} />} />
      </Routes>
    </div>
  );
}

export default App;
