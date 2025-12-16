import React from 'react';
import styles from './threadtitle.css';

export function ThreadTitle() {
  // Это не заголовок, не верно по семантике, отрефакторить.
  return <h1 className={styles.threadTitle}>Дискуссии</h1>;
}
