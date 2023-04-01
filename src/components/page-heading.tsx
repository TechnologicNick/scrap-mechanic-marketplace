import styles from "./page-heading.module.scss";
import text from "@/styles/text.module.scss";
import Breadcrumbs, { BreadcrumbsProps } from "@/components/breadcrumbs";
import CreditsDisplay from "@/components/credits-display";
import clsx from "clsx";
import Button from "@/components/button";

interface PageHeadingProps<T extends string> extends BreadcrumbsProps<T> {}

export default function PageHeading<T extends string>({ crumbs }: PageHeadingProps<T>) {
  return (
    <div className={styles.breadcrumbsAndCoins}>
      <Breadcrumbs
        crumbs={[
          // Default breadcrumbs
          { element: "Scrap Mechanic", href: "/marketplace" },
          { element: "Marketplace", href: "/marketplace" },
          ...crumbs,
        ]}
      />
      <Button ghost className={clsx(text.mutedHover, styles.balance)} href="/marketplace/add-funds">
        <CreditsDisplay>Add Wonk Credits</CreditsDisplay>
        <span className={styles.plus}>+</span>
      </Button>
    </div>
  );
}
