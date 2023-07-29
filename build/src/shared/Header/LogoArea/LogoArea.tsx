import React from "react";
import styles from "./logoarea.css";
import { IconComponent } from "../../IconComponent";

export function LogoArea() {
  return (
    <div className={styles.container}>
        <IconComponent name='IconLogo'></IconComponent>
        <p className={styles.text}>Тренировочный проект по курсу React JS</p>    
    </ div>
  );
}
