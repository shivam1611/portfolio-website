import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import teamtrackrIMG from "../../assets/teamtrackrIMG.png";
import marketingIMG from "../../assets/marketingIMG.png";
import travelHookIMG from "../../assets/travelhookIMG.png";
import safecamIMG from "../../assets/safecamIMG.png";
import quizIMG from "../../assets/quizIMG.png";
import weatherAppImg from '../../assets/weaht.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import orderly from "../../assets/orderly.png"

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://youtu.be/GLJCR6IoIjQ?si=TDubWvPu9k_6OHkN"}
              githubLink={"https://github.com/shivam1611/orderly-billing-app"}
              projectName={"Orderly Billing App"}
              projectDetails={
                "Orderly Billing is a modern and efficient billing software built with React, designed to streamline cafe and restaurant operations. "
              }
              demoImage={orderly}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://thereactquizz.netlify.app/"}
              githubLink={"https://github.com/shivam1611/react-quiz"}
              projectName={"React Quiz App"}
              projectDetails={
                "React Quiz App: Answer React questions, get results. Fun way to test React knowledge. Simple, interactive, and informative!"
              }
              demoImage={quizIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://reatweathersite.netlify.app/"}
              githubLink={
                "https://github.com/shivam1611/react-whether-app/tree/main"
              }
              projectName={"React Weather App"}
              projectDetails={
                "This is React Weather App for you to see how the day is going. Interactive Web Application based on API Data fetching."
              }
              demoImage={weatherAppImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
              ]}
            />

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
              githubLink={
                "https://github.com/shivam1611/safe-cams-static-website"
              }
              projectName={"SafeCam Webpage"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
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
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
