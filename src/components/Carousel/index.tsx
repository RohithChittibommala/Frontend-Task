import React from "react";
import styles from "./carousel.module.css";
import { IBanner } from "../../types/bannerTypes";
import Banner from "../Banner";

interface ICarouselProps {
  banners: IBanner[];
}

function Carousel(props: ICarouselProps) {
  const [activeBannerIndex, setActiveBannerIndex] = React.useState(0);
  const containerRef = React.useRef(null);

  const goToBanner = (index: number) => {
    if (containerRef.current) {
      const bannerWidth = containerRef.current.children[0].clientWidth; // Assuming all banners have the same width
      containerRef.current.scrollTo({
        left: bannerWidth * index,
      });
    }
    setActiveBannerIndex(index);
  };

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["banner-container"]} ref={containerRef}>
        {props.banners.map((banner, ind) => (
          <Banner data-ind={ind} key={banner.id} {...banner} />
        ))}
      </div>
      <div className={styles["banner-ellipses"]}>
        {props.banners.map((child, index) => (
          <span
            key={index}
            className={`${styles["banner-ellipsis"]} ${
              activeBannerIndex === index ? styles["active"] : ""
            }`}
            onClick={() => goToBanner(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
