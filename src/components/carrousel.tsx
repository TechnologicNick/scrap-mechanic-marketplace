"use client";

import styles from "./carrousel.module.scss";
import { ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";
import { TbChevronLeft, TbChevronRight, TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import useInterval from "@/hooks/use-interval";

const scroll = (ref: RefObject<HTMLDivElement>, direction: "left" | "right") => {
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

interface CarrouselPaginationProps {
  pageNumbers: number[];
  carrouselRef: React.RefObject<HTMLDivElement>;
}

const CarrouselPagination = ({ pageNumbers, carrouselRef }: CarrouselPaginationProps) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

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

  useInterval(
    () => {
      autoScroll && scroll(carrouselRef, "right");
    },
    4000,
    [pageNumbers.length, carrouselRef, autoScroll]
  );

  return (
    <div className={styles.pagination}>
      <button
        className={styles.autoScroll}
        onClick={() => setAutoScroll(!autoScroll)}
        aria-label={autoScroll ? "Pause automatic slideshow" : "Play automatic slideshow"}
      >
        {autoScroll ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
      </button>
      {pageNumbers.map((pageNumber, index) => (
        <button
          key={pageNumber}
          className={styles.pageButton}
          onClick={() => handlePageNumberClick(index)}
          role="tab"
          aria-selected={index === pageIndex}
          aria-label={`Go to page ${pageNumber}`}
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
  className?: string;
}

export default function Carrousel({ children, className }: CarrouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <button onClick={() => scroll(ref, "left")}>
            <TbChevronLeft size={40} />
          </button>
          <button onClick={() => scroll(ref, "right")}>
            <TbChevronRight size={40} />
          </button>
        </div>
        <div ref={ref} className={styles.carrousel} style={{ "--page-count": children.length } as any}>
          {children.map((child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
      </div>
      <CarrouselPagination pageNumbers={children.map((_, index) => index + 1)} carrouselRef={ref} />
    </div>
  );
}
