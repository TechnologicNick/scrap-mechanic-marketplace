import Button from "./button";
import { TbUserCircle } from "react-icons/tb";
import styles from "./account-dropdown.module.scss";

export default function AccountDropdown() {
  return (
    <div>
      <Button
        iconLeft={<TbUserCircle size={32} color="#7a7a7a" />}
        className={styles.button}
        ghost
      >
        Account
      </Button>
    </div>
  );
}
