import Navbar from "../../Components/Navbar/Navbar.jsx";
import style from "./HomePage.module.css";
import HeroImage from "../../assets/heroImage.png";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={style.hero_component}>
        <div className={style.left_side}>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.upper_text_style}
          >
            Hello I'm shivam
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.bottom_text_style}
          >
            &lt;Frontend Developer/&gt;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "1",
              delay: "1.5",
            }}
            className={style.detail_text}
          >
            Passionate and detail-oriented Frontend Developer, Proficient in
            React.js along with HTML, CSS, and JavaScript, with a strong
            foundation in responsive design and user experience principles.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: "-7vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{ delay: 2.5, stiffness: 40, duration: 0.7 }}
            className={style.download_btn}
          >
            Download CV
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, stiffness: 40, duration: 1 }}
          className={style.right_section}
        >
          <div className={style.img_section}>
            <img src={HeroImage} alt="Shivam" className={style.hero_image} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
