import React, { useEffect, useState } from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";
import { useUserData } from "../../../hooks/useUserData";


export function SearchBlock() {
const [data] = useUserData()

  return (
    <div className={styles.search}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
