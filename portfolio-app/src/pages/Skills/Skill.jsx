import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SkillCard from "../../Components/SkillCard/SkillCard";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";

function Skill() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      >
        <div className="container_title">
          <motion.h1
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: ".3", stiffness: "100", delay: ".3" }}
          >
            These are my skills
          </motion.h1>
          <motion.p
          initial={{width:"0"}}
          animate={{width:"100%"}}
          transition={{delay:".4", duration:"1", stiffness:"40"}}
           className="underline"></motion.p>
        </div>
        <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay:".5", duration:".3", stiffness:"100" }} className={styles.skill_container}>
          <SkillCard skill_name={"HTML"} level={5} key={"HTML"} />
          <SkillCard skill_name={"CSS "} level={5} key={"CSS"} />
          <SkillCard skill_name={"JavaScript"} level={5} key={"JavaScript"} />
          <SkillCard skill_name={"React.js"} level={3} key={"React.js"} />
          <SkillCard
            skill_name={"Tailwind CSS"}
            level={4}
            key={"Tailwind CSS"}
          />
          {/* <SkillCard skill_name={} */}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skill;
