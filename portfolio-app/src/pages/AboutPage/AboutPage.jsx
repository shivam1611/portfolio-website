import ActionBox from "../../Components/ActionBox/ActionBox";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className={"component_container"}
      >
        <div className={style.about_component}>
          <div className="container_title">
            <motion.h1
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: ".3", stiffness: "100", delay: ".3" }}
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ width: "0" }}
              animate={{ width: "100%" }}
              transition={{ delay: ".4", duration: "1", stiffness: "40" }}
              className="underline"
            ></motion.p>
          </div>
          <div className={style.timeline_container}>
            <div className={style.row} id="education-row">
              <div className={style.col}>
                <div className={style.timeline_title}>My Education</div>
                <div className={style.content}>
                  <ActionBox
                    timeline={"2022 - 2025"}
                    timeline_title={"University Of Mysore"}
                    details={
                      "my name is shivam sharma and i a he is the biggest chutiya college in the world"
                    }
                    img={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                    }
                  />
                  <ActionBox
                    timeline={"2020 - 2022"}
                    timeline_title={"Diploma in Computer Science "}
                    details={"Pursued the diploma in cse branch"}
                  />
                 
                  <ActionBox
                    timeline={"2019 - 2020"}
                    timeline_title={"Intermediate School (10+2)"}
                    details={"Completed my schooling (10+2) from State Board in PCM branch with 80 percentage"}
                  />
                  <ActionBox
                    timeline={"2017 - 2018"}
                    timeline_title={"High School "}
                    details={"Completed my schooling (10+2) from State Board in PCM branch with 80 percentage"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
