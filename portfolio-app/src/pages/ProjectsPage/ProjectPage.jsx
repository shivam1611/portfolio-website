import Navbar from "../../Components/Navbar/Navbar";
import styles from './ProjectPage.module.css'
import ProjectCard from "../../Components/ProjectCard/projectCard";

function Projects() {
  return (
    <div>
      <Navbar />
      <div className="component_container">
        <h1>Here are my projects</h1>
        <div >
          <ProjectCard/> 
          
          
          
        </div>

      </div>
    </div>
  );
}

export default Projects;
