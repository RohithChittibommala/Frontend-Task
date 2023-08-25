import React from "react";
import styles from "./navbar.module.css";
import navLinks from "../../data/navLinks";
import LogoNavigationContainer from "./LogoNavigationContainer";

interface IMobileNavbarProps {
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNavbar({ isMenuVisible, setIsMenuVisible }: IMobileNavbarProps) {
  return (
    <div
      className={`${styles["mobile-menu"]} ${
        !isMenuVisible ? styles["active"] : ""
      }`}
    >
      <LogoNavigationContainer
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        forNavbar={false}
      />
      <ul className={`${styles["navlinks-container"]} `}>
        {navLinks.map(({ title }) => (
          <li className={styles["nav-link"]} key={title}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavbar;
