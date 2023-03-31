import type { MDXComponents } from "mdx/types";
import styles from "@/mdx-components.module.scss";
import text from "@/styles/text.module.scss";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
    p: ({ children }) => <p className={text.muted}>{children}</p>,
    ...components,
  };
}
