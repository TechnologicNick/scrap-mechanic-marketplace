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
        <Image
          src={metadata.thumbnail}
          alt={metadata.title}
          width={800}
          height={360}
          quality={100}
          style={{ objectFit: "cover", maxWidth: "100%" }}
        />
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
