/*  module 2.3 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../shared/Header';

window.addEventListener('load', () => {
  ReactDOM.hydrate(<Header />, document.getElementById('root'));
});
