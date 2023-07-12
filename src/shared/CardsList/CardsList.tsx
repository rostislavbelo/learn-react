import React, { useContext } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card";
import { postsContext } from "../context/postsContext";
import { generateRandomString } from "../utils/generateRandomString";

interface ICardListProps {
  author?: string;
  title?: string;
  imgPath?: string;
  dataUrl?: string;
  data?: any;
}

export function CardsList() {
  const dataResponce = useContext(postsContext);

  console.log(dataResponce);

  return (
    <ul className={styles.cardsList}>
      {dataResponce.length ? (
        dataResponce.map((item: ICardListProps, index) => (
          <li key={generateRandomString()}>
            <Card dataAuthor={item.data.author} dataTitle={item.data.title} imgPath={item.data.thumbnail} dataUrl={item.data.permalink}/>
          </li>
        ))
      ) : (
        <li>
          <span style={{display:"block", width:"max-content", margin:"10px auto", fontSize:"20px", color:"red"}}>Идёт загрузка постов...</span>
        </li>
      )}
    </ul>
  );
}
