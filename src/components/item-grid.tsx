import { ItemMetadata } from "@/app/marketplace/items/types";
import ItemCard from "./item-card";
import styles from "./item-grid.module.scss";

interface ItemGridProps {
  items: {
    metadata: ItemMetadata;
  }[];
}

export default function ItemGrid({ items }: ItemGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ItemCard key={item.metadata.id} metadata={item.metadata} />
      ))}
    </div>
  );
}
