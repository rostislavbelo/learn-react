import React from "react";
import styles from "./textcontent.css";


interface ITextContentBlockProps {
  dataAuthor?: string;
  dataTitle?: string;
  dataUrl?: string;
}

export function TextContent({dataAuthor, dataTitle, dataUrl}:ITextContentBlockProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src='https://habrastorage.org/r/w60/webt/5f/dd/3f/5fdd3f0eec392098725544.png' className={styles.avatar} />
          <a href="#user-url" className={styles.username}>
            {dataAuthor || 'Константин Кодов'}
          </a>
        </div>
        <span className={styles.createdAt}>{`${Math.round(Math.random()*10)} час. назад`}</span>
      </div>
      <h2 className={styles.title}>
        <a href={dataUrl ? `https://www.reddit.com${dataUrl}` : "#postUrl"} className={styles.postLink}>
          {dataTitle || 'Реплицированные с зарубежных источников'}
        </a>
      </h2>
    </div>
  );
}