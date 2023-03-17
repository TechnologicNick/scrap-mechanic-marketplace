import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { TbChevronRight } from "react-icons/tb";
import styles from "./breadcrumbs.module.scss";

export interface BreadcrumbsProps {
  crumbs: {
    element: ReactNode;
    href: string;
  }[];
}

export default function Breadcrumbs({ crumbs: crumbs }: BreadcrumbsProps) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {crumbs.map((crumb, index) => (
          <Fragment key={index}>
            {index !== 0 && <TbChevronRight className={styles.separator} size={20} />}
            <li className={styles.item}>
              <Link href={crumb.href}>{crumb.element}</Link>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
