import { Inter } from "next/font/google";
import "./global.scss";
import Header from "@/components/header";
import styles from "./layout.module.scss";
import Nav from "@/components/nav";

export const metadata = {
  title: {
    default: "Scrap Mechanic Marketplace",
    template: "%s | Scrap Mechanic Marketplace",
  },
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
          {children}
        </div>
      </body>
    </html>
  );
}
