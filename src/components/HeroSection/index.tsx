import styles from "./heroSection.module.css";
import banners from "../../data/banner";
import Carousel from "../Carousel";
import stats from "../../data/stats";

function HeroSection() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["banner-section"]}>
        <Carousel banners={banners} />
      </div>
      <div className={styles["stats-section"]}>
        {stats.map((stat) => (
          <div className={styles["stat"]}>
            <img src={stat.imgUrl} alt="hat" />
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
      <div className={styles["banner-section"]}>
        <Carousel banners={banners} />
      </div>
      <div className={styles["stats-section"]}>
        {stats.map((stat) => (
          <div className={styles["stat"]}>
            <img src={stat.imgUrl} alt="hat" />
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
      <div className={styles["banner-section"]}>
        <Carousel banners={banners} />
      </div>
      <div className={styles["stats-section"]}>
        {stats.map((stat) => (
          <div className={styles["stat"]}>
            <img src={stat.imgUrl} alt="hat" />
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
      <div className={styles["banner-section"]}>
        <Carousel banners={banners} />
      </div>
      <div className={styles["stats-section"]}>
        {stats.map((stat) => (
          <div className={styles["stat"]}>
            <img src={stat.imgUrl} alt="hat" />
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
