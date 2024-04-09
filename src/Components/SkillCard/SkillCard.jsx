import React from 'react'
import styles from './SkillCard.module.css'
import {motion} from 'framer-motion'

function SkillCard({skill_name, level}) {

    // The function convert the level number into the total number of the star shown 

    const renderStars = () => {
        if( level > 5) return alert("Error!, Stars can't be greater than 5")
        const stars = [];
        for (let i = 0; i < level; i++) {
          stars.push(<i className={`fa-solid fa-star ${styles.star}`}></i>);
        }
        return stars;
      };


  return (
    <div className={styles.skill_card_component}>
        <p className={styles.skill_name}>{skill_name}</p>
        <div className={styles.star_section}>
            {
                renderStars()
            }
        </div>
    </div>
  )
}

export default SkillCard