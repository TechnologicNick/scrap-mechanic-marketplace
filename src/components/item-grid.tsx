import { ItemMetadata } from "@/app/marketplace/items/types";
import clsx from "clsx";
import ItemCard from "./item-card";
import styles from "./item-grid.module.scss";

interface ItemGridProps {
  variant: "grid" | "two-three";
  items: {
    metadata: ItemMetadata;
  }[];
}

export default function ItemGrid({ variant, items }: ItemGridProps) {
  return (
    <div
      className={clsx({
        [styles.itemGrid]: true,
        [styles.grid]: variant === "grid",
        [styles.twoThree]: variant === "two-three",
      })}
    >
      {items.map((item) => (
        <ItemCard key={item.metadata.id} metadata={item.metadata} />
      ))}
    </div>
  );
}
