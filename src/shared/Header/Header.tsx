import React from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock";
//import { tokenContext } from "../context/tokenContext";

interface IHeaderProps {
  token: string;
}

export function Header({token}:IHeaderProps) {
  // const {Consumer} = tokenContext;

  return (
    <div className={styles.header}>
      {/* <Consumer>
        {(token:string) => <SearchBlock token={token} />}
      </Consumer> */}

      <SearchBlock token={token} />
    </div>
  );
}
