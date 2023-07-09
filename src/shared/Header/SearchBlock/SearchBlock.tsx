import React, { useEffect, useState } from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";



interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock() {

  return (
    <div className={styles.search}>
      <UserBlock />
    </div>
  );
}
