import React from "react";
import styles from "./navblock.css";
import { NavLink } from "react-router-dom";



export function NavBlock() {


  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <NavLink to="/"  className={({ isActive, isPending }) => isPending ? "btnNavPending" : isActive ? "btnNavActive" : "" }>Главная</NavLink>
            </li> 
            <li className={styles.item}>
                <NavLink to="/list/" className={({ isActive, isPending }) => isPending ? "btnNavPending" : isActive ? "btnNavActive" : "" } >Бесконечный список</NavLink>
            </li>     
            <li className={styles.item}>    
                <NavLink to="/examples/" className={({ isActive, isPending }) => isPending ? "btnNavPending" : isActive ? "btnNavActive" : "" }>Черновые примеры</NavLink>
            </li>            
        </ul>      
    </nav>
  );
}
