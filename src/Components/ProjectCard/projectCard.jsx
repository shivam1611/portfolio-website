
import styles from "./projectCard.module.css";



function projectCard({
  projectName,
  projectDetails,
  demoImage,
  skill_img,
  previewLink,
  githubLink,
}) {
  return (
    <div  className={styles.project_card_component}>
      <div className={styles.card_img_section}>
        <img src={demoImage} alt="project " />
      </div>
      <div className={styles.card_detail_section}>
        <h1 className={styles.project_title}>{projectName}</h1>
        <p className={styles.project_details}>{projectDetails}</p>
        <div className={styles.technology_section}>
          {skill_img?.map((img, index) => (
            <img
              src={img}
              className={styles.skills_img}
              alt="skills"
              key={index}
            />
          ))}
        </div>
        <div className={styles.card_button_section}>
          <a
            href={previewLink}
            className={`${styles.card_button} ${styles.card_primary_button}`}
            target="_blank"
          >
            Live Preview
          </a>
          <a
            href={githubLink}
            target="_blank"
            className={`${styles.card_button} ${styles.card_secondary_button}`}
          >
            Check on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default projectCard;
