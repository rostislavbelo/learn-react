import React, { useContext, useEffect, useState } from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";
import { useUserData } from "../../../hooks/useUserData";
import { userContext } from "../../context/userContext";


export function SearchBlock() {

  const userData = useContext(userContext)

  return (
    <div className={styles.search}>
      <UserBlock avatarSrc={userData.iconImg} username={userData.name} />
    </div>
  );
}
