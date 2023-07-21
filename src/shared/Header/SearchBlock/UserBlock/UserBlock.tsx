import React from "react";
import styles from "./userblock.css";
import { IconComponent } from "../../../IconComponent";


interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}
export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc 
          ? <img src={avatarSrc} alt="User avatar" className={styles.avatarImage} />
          : <IconComponent name={"IconAnon"} />
        }
      </div>
      <div className={styles.username}>
        {loading ? (
        <span>Загрузка...</span>
        ) : <span>{username || "Аноним"}</span>
      }
      </div>
    </a>
  );
}
