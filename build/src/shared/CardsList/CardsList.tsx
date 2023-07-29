import React, { useContext, useState } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card";
import { postsContext } from "../context/postsContext";
import { generateRandomString } from "../utils/generateRandomString";
import { ModalMain } from "../ModalMain";

interface ICardListProps {
  author?: string;
  title?: string;
  imgPath?: string;
  dataUrl?: string;
  data?: any;
}

export function CardsList() {
  const dataResponce = useContext(postsContext);

  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
    <h2 className={styles.title}>Карточка-заглушка поста</h2>
    <Card/>
    <h2 className={styles.title}>Пример модалки через Portal<br/>c закрытием через Ref по клику вне модалки</h2>
      <button className={styles.btnModal} onClick={()=>{setModalOpen(true)}}>Открыть</button>
      {
        isModalOpen && (
          <ModalMain onClose={()=>{setModalOpen(false)}}/>
        )
      }  
    <h2 className={styles.title}>Список-репликация текущих популярных постов с Reddit.com</h2>
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
    </>  
  );
}
