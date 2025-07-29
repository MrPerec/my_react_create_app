/*  module 2.3 */
import React from 'react';
// import { Header } from '../shared/Header';
/** временно поменял для 4.1 */
import { Names } from '../shared/Names/Names';
import ReactDOM from 'react-dom';

window.addEventListener('load', () => {
  // ReactDOM.hydrate(<Header />, document.getElementById('root'));
  /** временно поменял для 4.1 */
  ReactDOM.hydrate(<Names />, document.getElementById('root'));
});
