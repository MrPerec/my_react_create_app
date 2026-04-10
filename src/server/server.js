import express from 'express';
import axios from 'axios';
import ReactDOM from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import compression from 'compression';
import helmet from 'helmet';

import { indexTemplate } from './indexTemplate';
import { App } from '../App';

const app = express();

// heroku будет указывать собственный port для nodejs из своего окружения
const port = process.env.port || 3000;
const redirectUri = process.env.REDIRECT_URI || `http://localhost:${port}/auth`;

const IS_DEV = process.env.NODE_ENV === 'development';

if (!IS_DEV) {
  // Подключаем compression
  app.use(compression());
  // Подключаем helmet
  app.use(helmet());
  // app.use(helmet({ contentSecurityPolicy: false }));
}

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${redirectUri}`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.SECRET,
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
          redirectUri,
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
      undefined,
      redirectUri,
    ),
  );
});

app.listen(port, () => {
  console.log(`Server has started on http://localhost:${port}`);
});
