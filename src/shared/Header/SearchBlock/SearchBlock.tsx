import React, { useEffect, useState } from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";
import axios from "axios";

interface IUserData {
  name?: string;
  iconImg?: string;
}

interface ISearchBlockProps {
  token: string;
}

export function SearchBlock({token}:ISearchBlockProps) {
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    axios.get("https://oauth.reddit.com/api/v1/me", {

        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        setData({ name: userData.name, iconImg: userData.icon_img });
        console.log(resp.data);
      })
      .catch(console.log);
  }, [token]);

  return (
    <div className={styles.search}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
