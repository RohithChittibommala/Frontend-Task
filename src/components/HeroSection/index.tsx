import styles from "./heroSection.module.css";
import banners from "../../data/banner";
import Carousel from "../Carousel";
import stats from "../../data/stats";
import Banner from "../Banner";

function HeroSection() {
  const Banners = banners.map((banner, ind) => (
    <Banner key={banner.id} {...banner} />
  ));

  return (
    <section className={styles["hero-section"]}>
      <div className={styles["banner-section"]}>
        <Carousel elements={Banners} />
      </div>
      <div className={styles["stats-section"]}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles["stat"]}>
            <img src={stat.imgUrl} alt="hat" />
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
