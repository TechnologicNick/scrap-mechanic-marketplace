import Link from "next/link";
import Button from "./button";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Button ghost href={"/marketplace"}>
            Marketplace
          </Button>
        </li>
      </ul>
      <ul>
        <li>
          <Button ghost href={"/marketplace#chapter-2"}>
            Chapter 2
          </Button>
        </li>
      </ul>
      <ul>
        <li>
          <Button ghost href={"/marketplace#just-for-you"}>
            Just for you
          </Button>
        </li>
      </ul>
    </nav>
  );
}
