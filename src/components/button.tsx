"use client";

import clsx from "clsx";
import { useRef } from "react";
import { AriaButtonProps, mergeProps, useButton } from "react-aria";
import styles from "./button.module.scss";

export type ButtonProps = AriaButtonProps<"button"> &
  React.HTMLAttributes<HTMLButtonElement> & {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    ghost?: boolean;
  };

export default function Button(props: ButtonProps) {
  const className = clsx(props.className, styles.button, {
    [styles.ghost]: props.ghost,
  });

  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children, iconLeft, iconRight } = props;

  return (
    <button {...buttonProps} ref={ref} className={className}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
