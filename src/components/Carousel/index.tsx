import React, { useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css";

interface ICarouselProps {
  elements: React.ReactElement[];
  hideEllipses?: boolean;
}

function Carousel(props: ICarouselProps) {
  const [activeElementIndex, setActiveElementIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<number | null>();

  const goToElement = (index: number) => {
    if (containerRef.current) {
      const elementWidth = containerRef.current.children[0].clientWidth;
      console.log(elementWidth);

      containerRef.current.scrollTo({
        left: elementWidth * index,
      });
    }

    setActiveElementIndex(index);
  };

  const startAutoScroll = () => {
    ref.current = setInterval(() => {
      const nextIndex = (activeElementIndex + 1) % props.elements.length;
      goToElement(nextIndex);
    }, 3000);
  };

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }

    startAutoScroll();
  }, [activeElementIndex]);

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
