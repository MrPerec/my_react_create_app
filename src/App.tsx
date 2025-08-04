import React from 'react';
import { hot } from 'react-hot-loader';
import './main.global.css';

import { Lifecycling } from './Lifecycling';

function AppComponent() {
  return <Lifecycling someProp={0} />;
}

export const App = hot(module)(AppComponent);
