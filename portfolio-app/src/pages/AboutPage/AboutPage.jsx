import ActionBox from "../../Components/ActionBox/ActionBox";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <MainContainer>
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
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <ActionBox
                isleft={true}
                timeline={"2017 - 2018"}
                timeline_title={"High School "}
                details={
                  "Completed my High School Degree from State Board with 78% from SVM School, Kotdwara, 246149."
                }
              />
              <ActionBox
                isleft={false}
                timeline={"2019 - 2020"}
                timeline_title={"Senior Secondary (10+2)"}
                details={
                  "Completed my Degree from State Board with 78% from SVM School, Kotdwara, 246149."
                }
              />
              <ActionBox
                isleft={true}
                timeline={"2020 - 2022"}
                timeline_title={"Diploma in Computer Science "}
                details={"Pursued the diploma in cse branch"}
                img={
                  "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                }
              />
              <ActionBox
                isleft={false}
                timeline={"2022 - 2025"}
                timeline_title={"University Of Mysore"}
                details={
                  "my name is shivam sharma and i a he is the biggest chutiya college in the world"
                }
                img={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                }
              />
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <ActionBox
                isleft={true}
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
                isleft={false}
                timeline={"2020 - 2022"}
                timeline_title={"Diploma in Computer Science "}
                details={"Pursued the diploma in cse branch"}
              />

              <ActionBox
                isleft={true}
                timeline={"2019 - 2020"}
                timeline_title={"Intermediate School (10+2)"}
                details={
                  "Completed my schooling (10+2) from State Board in PCM branch with 80 percentage"
                }
              />
              <ActionBox
                isleft={false}
                timeline={"2017 - 2018"}
                timeline_title={"High School "}
                details={
                  "Completed my schooling (10+2) from State Board in PCM branch with 80 percentage"
                }
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
