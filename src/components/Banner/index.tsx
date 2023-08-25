import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from "./banner.module.css";
import { IBanner } from "../../types/BannerType";
import Button from "../base/Button";

interface IBannerProps extends IBanner {
  isActive?: boolean;
}

function Banner(props: IBannerProps) {
  return (
    <div className={`${styles["banner"]}`}>
      <div className={styles["content"]}>
        <h2 dangerouslySetInnerHTML={{ __html: props.title }} />
        <p>{props.description}</p>
        <Button
          title={props.buttonText}
          styles={{
            alignSelf: "flex-start",
            backgroundColor: "#f78010",
            fontWeight: "bold",
          }}
          icon={<HiOutlineArrowNarrowRight />}
        />
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
