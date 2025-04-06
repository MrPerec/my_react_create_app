/*  module 2.3 */
import React from 'react';
import { hot } from 'react-hot-loader';
/** 2.5 */
//для css
// import * as styles from './header.css';
//для less
import * as styles from './header.less';

function HeaderComponent() {
  console.log(styles, styles.example);

  return (
    <header>
      <h1>Reddit for our own</h1>
      <h2>Added second header</h2>
      <h3>Header from 2.3 module2</h3>
      {/* <h4 className={styles.example}>Header from 2.5 module</h4> */}
      <h4 className={styles.some}>Header from 2.5 module</h4>
    </header>
  );
}

export const Header = hot(module)(HeaderComponent);
