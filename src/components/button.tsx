"use client";

import clsx from "clsx";
import Link from "next/link";
import { useRef } from "react";
import { AriaButtonProps, mergeProps, useButton } from "react-aria";
import styles from "./button.module.scss";

type ButtonButtonProps = AriaButtonProps<"button"> &
  React.HTMLAttributes<HTMLButtonElement> & {};

type AnchorButtonProps = AriaButtonProps<"a"> &
  React.HTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = (ButtonButtonProps | AnchorButtonProps) & {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  ghost?: boolean;
};

export default function Button(props: ButtonProps) {
  const className = clsx(props.className, styles.button, {
    [styles.ghost]: props.ghost,
  });

  const isAnchor = "href" in props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const { buttonProps } = useButton(props, isAnchor ? anchorRef : buttonRef);
  const { children, iconLeft, iconRight, href } = props;

  if (isAnchor) {
    return (
      <Link {...buttonProps} ref={anchorRef} className={className} href={href!}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  } else {
    return (
      <button {...buttonProps} ref={buttonRef} className={className}>
        {iconLeft}
        {children}
        {iconRight}
      </button>
    );
  }
}
