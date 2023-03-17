"use client";

import styles from "./carrousel.module.scss";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

interface CarrouselPaginationProps {
  pageNumbers: number[];
  carrouselRef: React.RefObject<HTMLDivElement>;
}

const CarrouselPagination = ({ pageNumbers, carrouselRef }: CarrouselPaginationProps) => {
  const [pageIndex, setPageIndex] = useState(0);

  const handlePageNumberClick = useCallback(
    (index: number) => {
      carrouselRef.current?.scrollTo({
        left: index * carrouselRef.current.clientWidth,
        behavior: "smooth",
      });
    },
    [carrouselRef]
  );

  useEffect(() => {
    const { current } = carrouselRef;
    if (!current) return;

    const handleScroll = () => {
      const { scrollLeft, clientWidth } = current;
      const index = Math.round(scrollLeft / clientWidth);
      setPageIndex(index);
    };

    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [carrouselRef]);

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((pageNumber, index) => (
        <button
          key={pageNumber}
          className={styles.pageButton}
          onClick={() => handlePageNumberClick(index)}
          role="tab"
          aria-selected={index === pageIndex}
          title={`Go to page ${pageNumber}`}
        />
      ))}
    </div>
  );
};

const closestMultiple = (num: number, multiple: number) => {
  return Math.round(num / multiple) * multiple;
};

export interface CarrouselProps {
  children: ReactNode[];
}

export default function Carrousel({ children: children }: CarrouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const { current } = ref;
    if (!current) return;

    const { scrollWidth, clientWidth } = current;
    const scrollLeft = current.scrollLeft;
    const maxScroll = scrollWidth - clientWidth;

    if (direction === "left") {
      if (scrollLeft === 0) {
        current.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        current.scrollTo({ left: closestMultiple(scrollLeft - clientWidth, clientWidth), behavior: "smooth" });
      }
    } else {
      if (scrollLeft === maxScroll) {
        current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        current.scrollTo({ left: closestMultiple(scrollLeft + clientWidth, clientWidth), behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <button onClick={() => handleScroll("left")}>
            <TbChevronLeft size={40} />
          </button>
          <button onClick={() => handleScroll("right")}>
            <TbChevronRight size={40} />
          </button>
        </div>
        <div ref={ref} className={styles.carrousel} style={{ "--page-count": children.length } as any}>
          {children.map((child) => (
            <div>{child}</div>
          ))}
        </div>
      </div>
      <CarrouselPagination pageNumbers={children.map((_, index) => index + 1)} carrouselRef={ref} />
    </div>
  );
}
