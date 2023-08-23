import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/tasklogo.jpg";
import Hambugrer from "../../assets/hamburger.svg";
import CloseIcon from "../../assets/close-icon.svg";
import navLinks from "../../data/navLinks";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(true);

  return (
    <nav className={styles["navbar"]}>
      <div
        className={`${styles["mobile-menu"]} ${
          !isMenuVisible ? styles["active"] : ""
        }`}
      >
        <button
          className={styles["close-icon"]}
          onClick={() => setIsMenuVisible((prev) => !prev)}
        >
          <img src={CloseIcon} alt="close icon" />
        </button>
        <ul className={`${styles["mobile-navlinks-container"]} `}>
          {navLinks.map(({ title }) => (
            <li className={styles["nav-link"]} key={title}>
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["logo-container"]}>
        <button
          className={styles["mobile-menu-btn"]}
          onClick={() => setIsMenuVisible((prev) => !prev)}
        >
          <img src={Hambugrer} alt="hamburger icon" />
        </button>
        <img src={Logo} alt="website-logo" className={styles["logo"]} />
        <h4>Annette Black</h4>
      </div>
      <div className={styles["navbar-right-content-container"]}>
        <ul className={styles["navlinks-container"]}>
          {navLinks.map(({ title }) => (
            <li className={styles["nav-link"]} key={title}>
              {title}
            </li>
          ))}
        </ul>
        <button className={styles["login-button"]}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
