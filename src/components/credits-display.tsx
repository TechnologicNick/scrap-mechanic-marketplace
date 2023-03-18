import { WonkCreditsIcon } from "@/icons";
import { ReactNode } from "react";
import { XOR } from "ts-xor";
import styles from "./credits-display.module.scss";

export type CreditsDisplayProps = XOR<
  {
    credits: number;
  },
  {
    children: ReactNode;
  }
>;

export default function CreditsDisplay({ credits, children }: CreditsDisplayProps) {
  return (
    <span className={styles.display}>
      <WonkCreditsIcon color="var(--primary)" size={20} />
      {credits && <span>{credits}</span>}
      {children && <span>{children}</span>}
    </span>
  );
}
