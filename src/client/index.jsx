/*  module 2.3 */
import React from 'react';
import { Header } from '../shared/Header';
import ReactDOM from 'react-dom';

window.addEventListener('load', () => {
  ReactDOM.hydrate(<Header />, document.getElementById('root'));
});
