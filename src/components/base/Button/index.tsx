import React from "react";
import styles from "./button.module.css";

type Props = {
  styles: React.CSSProperties;
  title: string;
  icon?: React.ReactElement;
};

const Button = (props: Props) => {
  return (
    <button style={{ ...props.styles }} className={styles["btn"]}>
      {props.title}{" "}
      {props.icon
        ? React.cloneElement(props.icon, {
            className: styles["icon"],
          })
        : ""}
    </button>
  );
};

export default Button;
