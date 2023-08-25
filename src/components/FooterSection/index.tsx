import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["logo-container"]}>
        <p>Powered by</p>
        <div className={styles["logo"]}>TIME</div>
      </div>
      <ul className={styles["footer-links"]}>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </footer>
  );
}

export default Footer;
