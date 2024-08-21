import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import Projects from "./pages/ProjectsPage/ProjectPage";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Skill from "./pages/Skills/Skill";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
