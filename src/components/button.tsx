"use client";

import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { useRef } from "react";
import { AriaButtonProps, mergeProps, useButton } from "react-aria";
import styles from "./button.module.scss";

type ButtonButtonProps = AriaButtonProps<"button"> & React.HTMLAttributes<HTMLButtonElement> & {};

type AnchorButtonProps = Omit<AriaButtonProps<"a"> & React.HTMLAttributes<HTMLAnchorElement>, "href">;

export type ButtonProps = (ButtonButtonProps | AnchorButtonProps) & {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  primary?: boolean;
  ghost?: boolean;
  bold?: boolean;
};

export default function Button<T extends string>(props: ButtonProps & { href?: Route<T> }) {
  const className = clsx(props.className, styles.button, {
    [styles.primary]: props.primary,
    [styles.ghost]: props.ghost,
    [styles.bold]: props.bold,
  });

  const isAnchor = "href" in props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const { buttonProps } = useButton(props, isAnchor ? anchorRef : buttonRef);
  const { children, iconLeft, iconRight, href } = props;

  if (isAnchor) {
    return (
      <Link
        {...buttonProps}
        // @ts-ignore
        ref={anchorRef}
        className={className}
        href={href!}
      >
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
