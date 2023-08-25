import React from "react";
import styles from "./navbar.module.css";
import LogoImg from "../../assets/tasklogo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

interface ILogoNavgationContainerProps {
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  forNavbar: boolean;
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
            <RxHamburgerMenu
              className={`${styles["icon"]} ${styles["close-icon"]}`}
            />
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
            <GrClose className={`${styles["icon"]} ${styles["close-icon"]}`} />
          </button>
        )}
      </div>
    </>
  );
}

export default LogoNavigationContainer;
