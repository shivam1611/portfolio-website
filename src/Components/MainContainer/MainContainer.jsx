import React from "react";
import { motion } from "framer-motion";

function MainContainer({ children }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: ".3", stiffness: "150" }}
      exit={{opacity:0, scale:.9}}
      className="component_container"
    >
      {children}
    </motion.div>
  );
}

export default MainContainer;
