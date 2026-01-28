import express from 'express';
import axios from 'axios';

import ReactDOM from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { indexTemplate } from './indexTemplate';
import { App } from '../App';
import { REDIRECT_URI } from '../constants';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${REDIRECT_URI}`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: 'rWrxIbCosGmwfXDqDqFShDAuodQtBw',
        },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      },
    )
    .then(({ data }) => {
      res.send(
        indexTemplate(
          ReactDOM.renderToString(
            <StaticRouter location='/auth'>
              <App />
            </StaticRouter>,
          ),
          data['access_token'],
        ),
      );
    })
    .catch(console.log);
});

app.get('*', (req, res) => {
  res.send(
    indexTemplate(
      ReactDOM.renderToString(
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>,
      ),
    ),
  );
});

app.listen(3000, () => {
  console.log('Server has started on http://localhost:3000');
});
