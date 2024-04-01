import  style  from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className={style.navbar}>
        <div>
        <Link className={style.logo} to = '/' >Shivam Sharma</Link>
        </div>
      <ul className={style.navlist}>
        <li >
          <Link className={style.navigation} to="/projects">Projects</Link>
        </li>
        <li >
          <Link className={style.navigation} to="/about">About</Link>
        </li>
        <li>
          <Link className={style.navigation} to="/skills">Skills</Link>
        </li>
        <li>
          <Link className={style.navigation} to="/contact">Contact</Link>
        </li>
      </ul>
      <div className={style.social_media_section}>
        <a
          href="https://github.com/shivam1611"
          rel="noopener noreferrer"
          target="_blank"
          className={style.link}
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shivamsharma1611/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/Codeshey"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/shivamsharma_1611/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
    </>
  );
}

export default Navbar;
