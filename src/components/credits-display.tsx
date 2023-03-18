import { WonkCreditsIcon } from "@/icons";
import { XOR } from "ts-xor";
import styles from "./credits-display.module.scss";

export type CreditsDisplayProps = XOR<
  {
    credits: number;
  },
  {
    text: string;
  }
>;

export default function CreditsDisplay({ credits, text }: CreditsDisplayProps) {
  return (
    <span className={styles.display}>
      <WonkCreditsIcon color="var(--primary)" size={20} />
      {credits && <span>{credits}</span>}
      {text && <span>{text}</span>}
    </span>
  );
}
