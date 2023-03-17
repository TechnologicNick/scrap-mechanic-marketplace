import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import AccountDropdown from "./account-dropdown";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href={"/marketplace"}>
          <Image src={logo} height={48} alt={"Scrap Mechanic logo"} />
        </Link>
      </div>
      <div>
        <AccountDropdown />
      </div>
    </header>
  );
}
