import React from "react";
import styles from "./banner.module.css";
import { BsArrowRight } from "react-icons/bs";
import { IBanner } from "../../types/bannerTypes";

interface IBannerProps extends IBanner {
  isActive?: boolean;
}

function Banner(props: IBannerProps) {
  return (
    <div className={`${styles["banner"]}`}>
      <div className={styles["content"]}>
        <h2 dangerouslySetInnerHTML={{ __html: props.title }} />
        <p>{props.description}</p>
        <button>
          {props.buttonText} <BsArrowRight className={styles["icon"]} />
        </button>
      </div>
      <div className={styles["image-container"]}>
        <img
          src={props.imageUrl}
          alt="main image"
          className={styles["banner-img"]}
        />
      </div>
    </div>
  );
}

export default Banner;
