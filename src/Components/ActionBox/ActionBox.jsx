import React from "react";
import styles from "./ActionBox.module.css";

function ActionBox({timeline,timeline_title,details,img, isleft,location}) {
  return (
    <div className={`${styles.action_box} ${isleft ? styles.left_container : styles.right_container}`}>
    
      <div className={styles.right_section}>
        
        <p className={styles.year_section}>{timeline}</p>
        <h2 className={styles.action_box_title}>{timeline_title}</h2>
        {
          location?.length && <p className={styles.location}>{location}</p>
        }
        <p className={styles.action_box_details}>{details}</p>
      </div>
    </div>
  );
}

export default ActionBox;
