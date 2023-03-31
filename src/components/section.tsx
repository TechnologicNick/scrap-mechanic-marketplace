import React from "react";
import styles from "./section.module.scss";
import text from "@/styles/text.module.scss";

interface SectionProps {
  heading: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ heading, description, children, className }: SectionProps) {
  return (
    <section className={styles.section}>
      <div>
        <h2>{heading}</h2>
        {description && <p className={text.muted}>{description}</p>}
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
