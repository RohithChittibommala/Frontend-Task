import { useState } from "react";
import styles from "./bootcampSection.module.css";
import { IBootcamp } from "../../types/BootcampType";
import Button from "../base/Button";
import { BsArrowRight } from "react-icons/bs";

interface IBootcampSectionProps {
  tabs: IBootcamp[];
}

function BootcampSection(props: IBootcampSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className={styles["bootcamp-section"]}>
      <h2>Bootcamps</h2>
      <div className={styles["tabs-container"]}>
        <div className={styles["tab-buttons"]}>
          {props.tabs.map((tab, index) => (
            <button
              key={index}
              className={`${styles["tab-button"]} ${
                index === activeTab ? styles["active"] : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.type}
            </button>
          ))}
        </div>
        <div className={styles["content-container"]}>
          <div className={styles["content"]} key={props.tabs[activeTab].id}>
            <div className={styles["content-info"]}>
              <h3>{props.tabs[activeTab].name}</h3>
              <p> {props.tabs[activeTab].info}</p>
              <Button
                styles={{ backgroundColor: "#000", color: "#fff" }}
                title="Join Now"
                icon={<BsArrowRight className={styles["icon"]} />}
              />
            </div>
            <div className={styles["content-img"]}>
              <img src={props.tabs[activeTab].imgUrl} alt="trainings poster" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BootcampSection;
