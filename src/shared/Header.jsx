import React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './header.less';

function HeaderComponent() {
  console.log(styles, styles.example);

  return (
    <header>
      <h1>
        <span className={styles.example}>Hello</span>
        <span className={styles.some}>React</span>
      </h1>
    </header>
  );
}

export const Header = hot(module)(HeaderComponent);
