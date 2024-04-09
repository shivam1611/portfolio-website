import React from "react";
import styles from "./Circle.module.css";
import {motion} from 'framer-motion'


function Circle({left,right,top,bottom}) {
  return (
    <motion.div
    initial={{opacity:0, x:30, scale:.8}}
    animate={{opacity:1,x:0, scale:1}}
    transition={{stiffness:40, duration:7,delay:.1}}
    exit={{opacity:0}}
      
      className={styles.circle} style={{left:`${left}`,right:`${right}`, top:`${top}`,bottom:`${bottom}`}}
    ></motion.div>
  );
}

export default Circle;
