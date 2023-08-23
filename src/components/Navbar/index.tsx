import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/tasklogo.jpg";
import navLinks from "../../data/navLinks";

function Navbar() {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
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
