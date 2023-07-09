import React from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock";
//import { tokenContext } from "../context/tokenContext";

export function Header() {
  // const {Consumer} = tokenContext;

  return (
    <div className={styles.header}>
      {/* <Consumer>
        {(token:string) => <SearchBlock token={token} />}
      </Consumer> */}

      <SearchBlock />
    </div>
  );
}
