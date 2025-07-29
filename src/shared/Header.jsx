import React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './header.css';

import { Names } from './Names/Names';

function HeaderComponent() {
  return (
    <>
      <header>
        <h1>Reddit for our own</h1>
        <h2>Added second header</h2>
        <h3>Header from 2.3 module2</h3>
        <h4 className={styles.example}>Header.example from 2.5 module</h4>
        <h4 className={styles.some}>Header.some from 2.5 module</h4>
      </header>
      <Names />
    </>
  );
}

export const Header = hot(module)(HeaderComponent);
