import React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './header.css';
// import styles from './header.css';

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example}>Reddit for our own</h1>
    </header>
  );
}

export const Header = hot(module)(HeaderComponent);
