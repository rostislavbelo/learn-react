import React from "react";
import styles from "./textcontent.css";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src='https://habrastorage.org/r/w60/webt/5f/dd/3f/5fdd3f0eec392098725544.png' className={styles.avatar} />
          <a href="#user-url" className={styles.username}>
            Константин Кодов
          </a>
        </div>
        <span className={styles.createdAt}>4 часа назад</span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Реплицированные с зарубежных источников
        </a>
      </h2>
    </div>
  );
}
