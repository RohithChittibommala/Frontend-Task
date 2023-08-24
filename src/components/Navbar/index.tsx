import React from "react";
import styles from "./navbar.module.css";

import HambugrerIcon from "../../assets/hamburger.svg";
import LogoImg from "../../assets/tasklogo.jpg";
import CloseIcon from "../../assets/close-icon.svg";
import navLinks from "../../data/navLinks";

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

interface ILogoNavgationContainerProps {
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  forNavbar: boolean;
}

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

function LogoNavigationContainer({
  setIsMenuVisible,
  forNavbar,
}: ILogoNavgationContainerProps) {
  return (
    <>
      <div
        className={`${styles["logo-navigation-container"]} ${
          !forNavbar ? "sidebar" : ""
        }`}
      >
        {forNavbar && (
          <button
            className={styles["mobile-menu-btn"]}
            onClick={() => setIsMenuVisible((prev) => !prev)}
          >
            <img src={HambugrerIcon} alt="hamburger icon" />
          </button>
        )}
        <div className={styles["logo-container"]}>
          <img src={LogoImg} alt="website-logo" className={styles["logo"]} />
          <h4>Annette Black</h4>
        </div>
        {!forNavbar && (
          <button
            className={styles["close-icon"]}
            onClick={() => setIsMenuVisible((prev) => !prev)}
          >
            <img src={CloseIcon} alt="close icon" />
          </button>
        )}
      </div>
    </>
  );
}
