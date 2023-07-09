import React, { useEffect, useState } from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";
import { UseUserData } from "../../../hooks/useUserData";

interface ISearchBlockProps {
  token: string;
}

export function SearchBlock({token}:ISearchBlockProps) {
const [data] = UseUserData(token)

  return (
    <div className={styles.search}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
