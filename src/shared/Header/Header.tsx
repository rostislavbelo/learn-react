import React, { useContext } from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock";
import { tokenContext } from "../context/tocenContext";


export function Header() {
const token = useContext(tokenContext)

  return (
    <div className={styles.header}>
      <SearchBlock token={token} />
    </div>
  );
}
