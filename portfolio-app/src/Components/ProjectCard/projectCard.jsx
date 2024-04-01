import React from 'react'
import styles from "./projectCard.module.css"
import teamTrackrIMG from '../../assets/teamtrackrIMG.png'

function projectCard() {
  return (
    <div className={styles.project_card_component} >
        <div className={styles.card_img_section}>
            <img src={teamTrackrIMG} alt="project " />
        </div>
        <div className={styles.card_detail_section}>
            <h1 className={styles.project_title}>
                Team trackr App
            </h1>
            <p className={styles.project_details}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat optio fuga nesciunt consequuntur inventore dolore.
            </p>
            <div className={styles.card_button_section}>
                <button className={`${styles.card_button} ${styles.card_primary_button}`}>Live Preview</button>
                <button className={`${styles.card_button} ${styles.card_secondary_button}`}>Check on GitHub</button>
            </div>
        </div>

    </div>
  )
}

export default projectCard