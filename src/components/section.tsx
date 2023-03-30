import React from "react";
import styles from "./section.module.scss";

interface SectionProps {
  heading: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ heading, children, className }: SectionProps) {
  return (
    <section className={styles.section}>
      <div>
        <h2>{heading}</h2>
      </div>
      <div className={className}>{children}</div>
    </section>
  );
}

type SectionColumnsProps = {
  children: React.ReactNode;
  as?: keyof React.ReactHTML | React.ReactElement;
} & Required<Pick<React.CSSProperties, "columnCount" | "columnWidth">>;

Section.Columns = function SectionColumns({ children, as = "div", ...style }: SectionColumnsProps) {
  if (typeof as === "string") {
    return React.createElement(as, { className: styles.columns, style }, children);
  }

  return React.cloneElement(
    as,
    {
      ...as.props,
      className: [...as.props.className, styles.columns].filter(Boolean).join(" "),
      style: { ...as.props.style, ...style },
    },
    children
  );
};
