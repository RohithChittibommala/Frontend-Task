import { BsArrowRight } from "react-icons/bs";
import { ICourse } from "../../types/CourseType";
import styles from "./coursesSection.module.css";

interface ICourseProps extends ICourse {}

function Course(props: ICourseProps) {
  return (
    <div className={styles["course-card"]}>
      <div className={styles["img-container"]}>
        <img src={props.imgUrl} alt="course banner image" />
      </div>
      <div className={styles["details"]}>
        <div className={styles["content"]}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <button>
          Join Now <BsArrowRight className={styles["icon"]} />
        </button>
      </div>
    </div>
  );
}

export default Course;
