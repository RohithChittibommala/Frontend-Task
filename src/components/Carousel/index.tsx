import React from "react";
import styles from "./carousel.module.css";

interface ICarouselProps {
  elements: React.ReactElement[];
  hideEllipses?: boolean;
}

function Carousel(props: ICarouselProps) {
  const [activeElementIndex, setActiveElementIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const goToElement = (index: number) => {
    if (containerRef.current) {
      const elementWidth = containerRef.current.children[0].clientWidth;
      containerRef.current.scrollTo({
        left: elementWidth * index,
      });
    }
    setActiveElementIndex(index);
  };

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["element-container"]} ref={containerRef}>
        {props.elements.map((Element, index) =>
          React.cloneElement(Element, { key: index })
        )}
      </div>
      <div className={styles["element-ellipses"]}>
        {props.elements.map((_, index) => (
          <span
            key={index}
            className={`${styles["element-ellipsis"]} ${
              activeElementIndex === index ? styles["active"] : ""
            }`}
            onClick={() => goToElement(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
