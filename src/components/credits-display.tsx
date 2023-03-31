import { WonkCreditsIcon } from "@/icons";
import { ComponentProps, ReactNode } from "react";
import { XOR } from "ts-xor";
import styles from "./credits-display.module.scss";

export type CreditsDisplayProps = {
  size?: ComponentProps<typeof WonkCreditsIcon>["size"];
} & XOR<
  {
    credits: number;
  },
  {
    children: ReactNode;
  }
>;

export default function CreditsDisplay({ credits, children, size = "1.5em" }: CreditsDisplayProps) {
  return (
    <span>
      <span className={styles.icon}>
        <WonkCreditsIcon color="var(--primary)" size={size} style={{ minWidth: size }} />
      </span>
      {credits && <span>{credits}</span>}
      {children && <span>{children}</span>}
    </span>
  );
}
