import type { Route } from "next";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { TbChevronRight } from "react-icons/tb";
import styles from "./breadcrumbs.module.scss";

export interface BreadcrumbsProps<T extends string> {
  crumbs: {
    element: ReactNode;
    href: Route<T>;
  }[];
}

export default function Breadcrumbs<T extends string>({ crumbs: crumbs }: BreadcrumbsProps<T>) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol>
        {crumbs.map((crumb, index) => (
          <Fragment key={index}>
            {index !== 0 && <TbChevronRight className={styles.separator} size={20} />}
            <li>
              <Link href={crumb.href}>{crumb.element}</Link>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
