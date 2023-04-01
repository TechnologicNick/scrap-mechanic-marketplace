import { ItemMetadata } from "@/app/marketplace/items/types";
import Image from "next/image";
import Link from "next/link";
import CreditsDisplay from "./credits-display";
import styles from "./item-card.module.scss";
import PriceDisplay from "./price-display";

interface ItemCardProps {
  metadata: ItemMetadata;
}

export default function ItemCard({ metadata }: ItemCardProps) {
  return (
    <Link href={`/marketplace/items/${metadata.id}`} className={styles.link}>
      <div className={styles.card}>
        <div
          style={{
            aspectRatio: metadata.thumbnail.width / metadata.thumbnail.height,
            position: "relative",
          }}
        >
          <Image src={metadata.thumbnail} alt={metadata.title} fill quality={100} />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{metadata.title}</h3>
          <span className={styles.rarity}>{metadata.rarity}</span>
        </div>
        <div className={styles.price}>
          <PriceDisplay {...metadata} />
        </div>
      </div>
    </Link>
  );
}
