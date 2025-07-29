/*  module 2.3 */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Names } from './Names/Names';
import { StarWarsNameClass } from './StateExamples/StarWarsNameClass/StarWarsNameClass';
import { StarWarsNameFunction } from './StateExamples/StarWarsNameFunction/StarWarsNameFunction';

import * as styles from './header.css';

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
      <StarWarsNameClass />
      <StarWarsNameFunction />
    </>
  );
}

export const Header = hot(module)(HeaderComponent);
