import styles from "./hover-popover.module.scss";

export interface HoverPopoverProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

export default function HoverPopover({ children, trigger }: HoverPopoverProps) {
  return (
    <div className={styles.wrapper}>
      {trigger}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
