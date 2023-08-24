import React from "react";
import styles from "./coursesSection.module.css";
import courses from "../../data/courses";
import Course from "./Course";

function CoursesSection() {
  return (
    <section className={styles["courses-section"]}>
      <h2>Checkout my courses </h2>
      <div className={styles["courses-container"]}>
        {courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;
