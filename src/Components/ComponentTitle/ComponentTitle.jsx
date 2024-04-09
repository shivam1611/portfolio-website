import React from 'react'
import {motion} from 'framer-motion'
import styles from './ComponentTitle.module.css'

function ComponentTitle({title}) {
  return (
    <div className={styles.container_title}>
            <motion.h1
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: ".3", stiffness: "100", delay: ".3" }}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ width: "0" }}
              animate={{ width: "100%" }}
              transition={{ delay: ".4", duration: "1", stiffness: "40" }}
              className={styles.underline}
            ></motion.p>
          </div>
  )
}

export default ComponentTitle