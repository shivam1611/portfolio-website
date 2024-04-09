import { useRef } from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navbar = useRef(null);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Change 50 to the desired scroll position
      navbar.current.classList.add(style.scrolling);
    } else {
      navbar.current.classList.remove(style.scrolling);
    }
  });
  return (
    <>
      <div ref={navbar} className={style.navbar}>
        <div>
          <NavLink className={style.logo} to="/">
            Shivam Sharma
          </NavLink>
        </div>
        <ul className={style.navlist}>
          <li>
            <NavLink className={style.navigation} to="/projects">
              <span className={style.nav_icons}>
                <i className="fa-solid fa-suitcase"></i>
              </span>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navigation} to="/about">
              <span className={style.nav_icons}>
                <i className="fa-solid fa-user"></i>
              </span>
              About
            </NavLink>
          </li>
          <li className={style.home_navigation}>
            <NavLink className={style.navigation} to="/">
              
              <p>
              <span className={style.nav_icons}>
                <i className={`fa-solid fa-home ${style.home_icon}`}></i>
              </span>
                
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navigation} to="/skills">
            <span className={style.nav_icons}>
            <i className="fa-solid fa-code"></i>
              </span>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navigation} to="/contact">
            <span className={style.nav_icons}>
            <i className="fa-solid fa-phone"></i>
              </span>
              Contact
            </NavLink>
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
