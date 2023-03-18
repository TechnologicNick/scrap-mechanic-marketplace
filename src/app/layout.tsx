import { Inter } from "next/font/google";
import "./global.scss";
import Header from "@/components/header";
import styles from "./layout.module.scss";
import text from "@/styles/text.module.scss";
import Nav from "@/components/nav";
import Breadcrumbs from "@/components/breadcrumbs";
import CreditsDisplay from "@/components/credits-display";
import clsx from "clsx";

export const metadata = {
  title: "Scrap Mechanic Marketplace",
  description: "Get your favorite Scrap Mechanic mods, blueprints, and more!",
};

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className} style={{ colorScheme: "dark" }}>
      <body>
        <div className={styles.page}>
          <Header />
          <Nav />
          <div className={styles.breadcrumbsAndCoins}>
            <Breadcrumbs
              crumbs={[
                { element: "Scrap Mechanic", href: "/" },
                { element: "Marketplace", href: "/marketplace" },
              ]}
            />
            <button className={clsx(text.mutedHover, styles.balance)}>
              <CreditsDisplay>Add Wonk Credits</CreditsDisplay>
              <span className={styles.plus}>+</span>
            </button>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
