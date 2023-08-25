import Course from "./Course";
import { ICourse } from "../../types/CourseType";
import styles from "./coursesSection.module.css";

interface ICoursesSectionProps {
  courses: ICourse[];
}

function CoursesSection(props: ICoursesSectionProps) {
  return (
    <section className={styles["courses-section"]}>
      <h2>Checkout my courses </h2>
      <div className={styles["courses-container"]}>
        {props.courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;
