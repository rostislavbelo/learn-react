import React from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock";


export function Header() {

  return (
    <div className={styles.header}>
      <SearchBlock />
    </div>
  );
}
