import React from 'react';
import styles from './nomatch.css';
import { useLocation } from 'react-router-dom';

export function NoMatch() {
  let location = useLocation();

  return (
    <div className={styles.container}>
      <h3>404 — страница не найдена</h3>
      <code>{location.pathname}</code>
    </div>
  );
}
