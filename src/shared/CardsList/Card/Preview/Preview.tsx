import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src="https://cdn.dribbble.com/users/59947/screenshots/17108611/media/921dde07080f3340eb85517a75e55159.jpg" alt="preview" className={styles.previewImg} />
    </div>
  );
}
