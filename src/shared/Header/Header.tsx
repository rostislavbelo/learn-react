import React from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock";
import { NavBlock } from "./NavBlock";
import { LogoArea } from "./LogoArea";


export function Header() {

  return (
    <div className={styles.header}>
      <LogoArea />
      <NavBlock />
      <SearchBlock />
    </div>
  );
}
