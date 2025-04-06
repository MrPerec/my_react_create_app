/*  module 2.3 */
import React from 'react';
import { hot } from 'react-hot-loader';

function HeaderComponent() {
  return (
    <header>
      <h1>Reddit for our own</h1>
      <h2>Added second header</h2>
      <h3>Header from 2.3 module2</h3>
    </header>
  );
}

export const Header = hot(module)(HeaderComponent);
