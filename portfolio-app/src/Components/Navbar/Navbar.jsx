import  style  from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className={style.navbar}>
        <div>
        <NavLink className={style.logo} to = '/' >Shivam Sharma</NavLink>
        </div>
      <ul className={style.navlist}>
        <li >
          <NavLink className={style.navigation} to="/projects">Projects</NavLink>
        </li>
        <li >
          <NavLink className={style.navigation} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={style.navigation} to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink className={style.navigation} to="/contact">Contact</NavLink>
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
