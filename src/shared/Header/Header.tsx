import React from 'react';
import styles from './header.css';

export function Header() {
  return (
    <ul className={styles.header__list}>
      <li>Элемент хедера</li>
      <li>Элемент хедера</li>
      <li>Элемент хедера</li>
    </ul>
  );
}
