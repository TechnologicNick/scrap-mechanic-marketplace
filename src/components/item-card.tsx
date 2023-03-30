import { ItemMetadata } from "@/app/marketplace/items/types";
import Image from "next/image";
import Link from "next/link";
import CreditsDisplay from "./credits-display";
import styles from "./item-card.module.scss";

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
          {metadata.originalPrice && (
            <div className={styles.discountDisplay}>
              <div className={styles.left}>
                <span className={styles.new}>
                  <CreditsDisplay size={24}>{metadata.price} Wonk Credits</CreditsDisplay>
                </span>
                <span className={styles.old} title="Original price">
                  {metadata.originalPrice} Wonk Credits
                </span>
              </div>
              <span className={styles.discount}>
                {Math.ceil(((metadata.price - metadata.originalPrice) / metadata.originalPrice) * 100)}%
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
