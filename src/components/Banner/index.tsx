import { BsArrowRight } from "react-icons/bs";
import styles from "./banner.module.css";
import { IBanner } from "../../types/BannerType";

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
