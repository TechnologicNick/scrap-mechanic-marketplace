import type { ReactNode } from "react";
import CreditsDisplay from "./credits-display";
import styles from "./price-display.module.scss";

interface PriceDisplayProps {
  price: number | ReactNode;
  originalPrice?: number;
}

export default function PriceDisplay({ price, originalPrice }: PriceDisplayProps) {
  if (typeof price === "number" && originalPrice) {
    const discount = Math.ceil(((price - originalPrice) / originalPrice) * 100);

    return (
      <div className={styles.discountDisplay}>
        <div className={styles.left}>
          <span className={styles.new}>
            <CreditsDisplay size={24}>{price} Wonk Credits</CreditsDisplay>
          </span>
          <span className={styles.old} title="Original price">
            {originalPrice} Wonk Credits
          </span>
        </div>
        <span className={styles.discount}>{discount}%</span>
      </div>
    );
  }

  return (
    <div className={styles.normalDisplay}>
      <span className={styles.price}>
        <CreditsDisplay size={24}>{price}</CreditsDisplay>
      </span>
    </div>
  );
}
