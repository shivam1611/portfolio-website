import Navbar from "../../Components/Navbar/Navbar.jsx";
import style from "./HomePage.module.css";
import HeroImage from '../../assets/heroImage.png'

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={style.hero_component}>
        <div className={style.left_side}>
          <p className={style.upper_text_style}>Hello I'm shivam</p>
          <p className={style.bottom_text_style}>&lt;Frontend Developer/&gt;</p>
          <p className={style.detail_text}>
            Passionate and detail-oriented Frontend Developer, Proficient in
            React.js along with HTML, CSS, and JavaScript, with a strong
            foundation in responsive design and user experience principles.
          </p>
          <button className={style.download_btn}>Download CV</button>
        </div>
        <div className={style.right_section}>
        <div className={style.img_section}>
          <img src={HeroImage} alt="Shivam" className={style.hero_image} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
