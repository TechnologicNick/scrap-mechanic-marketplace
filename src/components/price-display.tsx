import CreditsDisplay from "./credits-display";
import styles from "./price-display.module.scss";

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
}

export default function PriceDisplay({ price, originalPrice }: PriceDisplayProps) {
  if (originalPrice) {
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

  return <CreditsDisplay size={24}>{price} Wonk Credits</CreditsDisplay>;
}
