import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import teamtrackrIMG from "../../assets/teamtrackrIMG.png";
import marketingIMG from "../../assets/marketingIMG.png";
import travelHookIMG from "../../assets/travelhookIMG.png";
import safecamIMG from '../../assets/safecamIMG.png'
import { motion } from "framer-motion";

function Projects() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      >
        <div className={styles.project_page_component}>
          <div className="container_title">
            <motion.h1
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: ".3", stiffness: "100", delay: ".3" }}
            >
              Here are my projects
            </motion.h1>
            <motion.p
              initial={{ width: "0" }}
              animate={{ width: "100%" }}
              transition={{ delay: ".4", duration: "1", stiffness: "40" }}
              className="underline"
            ></motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://teamtrackers.netlify.app/"}
              githubLink={"https://github.com/shivam1611/Team-Trackr-app"}
              projectName={"Team Trackr App"}
              projectDetails={
                "It is an Employee Data Management System in which we can store the data of the employee and acces the data of the employee"
              }
              demoImage={teamtrackrIMG}
              key={"Team Trackr App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://glistening-shortbread-4a11c7.netlify.app/"}
              githubLink={
                "https://github.com/shivam1611/static-marketing-agency-website-"
              }
              projectName={"Marketing Solutions Webpage"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
              demoImage={marketingIMG}
              key={"Marketing Solutions Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://travelhook.netlify.app/"}
              githubLink={"https://github.com/shivam1611/travel-hook"}
              projectName={"Travel Hook Webpage"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
              demoImage={travelHookIMG}
              key={"Travel Hook Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard 
            previewLink={"https://kaleidoscopic-nougat-c405ab.netlify.app/"}
            githubLink={"https://github.com/shivam1611/safe-cams-static-website"}
            projectName={"SafeCaom Webpage"}
            projectDetails={"It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."}
            demoImage={safecamIMG}
            key={"SafeCam Webpage"}
            skill_img={[
              "https://cdn.worldvectorlogo.com/logos/html-1.svg",
              "https://cdn.worldvectorlogo.com/logos/css-3.svg",
              "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
            ]} 
            />

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
