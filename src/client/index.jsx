import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Header } from '../shared/Header';

/** Т.к. нам нужно в последующем будем добавлять SSR (server side rendering)
 * то эта часть когда должна срабатывать только в браузере, для добавим слушателя события
 */
window.addEventListener('load', () => {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <Header />
    </StrictMode>,
  );
});
