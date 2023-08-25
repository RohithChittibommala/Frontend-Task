import React from "react";
import styles from "./navbar.module.css";
import navLinks from "../../data/navLinks";
import MobileNavbar from "./MobileNavbar";
import LogoNavigationContainer from "./LogoNavigationContainer";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(true);

  return (
    <nav className={styles["navbar"]}>
      <MobileNavbar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
      />
      <LogoNavigationContainer
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        forNavbar={true}
      />
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
