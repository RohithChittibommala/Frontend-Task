import { BsArrowRight } from "react-icons/bs";
import { ICourse } from "../../types/CourseType";
import styles from "./coursesSection.module.css";
import Button from "../base/Button";

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
        <Button
          title="Join Now"
          icon={<BsArrowRight />}
          styles={{ width: "100%", justifyContent: "center" }}
        />
      </div>
    </div>
  );
}

export default Course;
