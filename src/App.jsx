import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProjectPage from "./pages/ProjectPage";
import Home from "./pages/Home";      

function App() {
  return (
    <div className="w-full !overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transitbloom" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
