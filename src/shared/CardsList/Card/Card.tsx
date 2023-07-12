import React from "react";
import styles from "./card.css";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";


interface ICardProps {
  dataAuthor?: string;
  dataTitle?: string;
  imgPath?: string;
  dataUrl?: string;
}


export function Card({dataAuthor, dataTitle, imgPath, dataUrl}:ICardProps) {
  return (
    <div className={styles.card}>
      <TextContent dataAuthor={dataAuthor} dataTitle={dataTitle} dataUrl={dataUrl}/>
      <Preview imgPath={imgPath}/>
      <Menu />
      <Controls />
    </div>
  );
}
