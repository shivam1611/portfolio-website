import React from 'react'
import styles from './AlertBox.module.css'
import {motion} from 'framer-motion'

function AlertBox() {
  return (
    <motion.div 
    // initial={{opacity:1,x:0}}
    // animate={{opacity:0,x:40}}
    // transition={{stiffness:30, delay:7,duration:4, type:"spring"}}
   
     className={styles.alert_box}>Email sent!. You will get the response email soon.</motion.div>
  )
}

export default AlertBox