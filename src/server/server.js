import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexTemplate } from './indexTemplate';
import { App } from '../App';
import axios from 'axios';
import { REDIRECT_URI } from '../constants';

const app = express();

app.use('/static', express.static('./dist/client'));

/** перенесем этот кусок кода ниже */
/* app.get('/', (request, response) => {
  response.send(indexTemplate(ReactDOM.renderToString(App())));
}); */

app.get('/auth', (request, response) => {
  // отправляем post запрос
  axios
    .post(
      // на этот адрес (как сказано в документации)
      'https://www.reddit.com/api/v1/access_token',
      // в качестве данных отправляем grant_code, и code который возвращается из запроса, и redirect url
      `grant_type=authorization_code&code=${request.query.code}&redirect_uri=${REDIRECT_URI}`,
      {
        // передаем авторизацию (формат смотри в доке axios)
        auth: {
          // username (это код приложения)
          username: process.env.CLIENT_ID,
          // password (это secret из приложения)
          password: 'rWrxIbCosGmwfXDqDqFShDAuodQtBw',
        },
        // хэдеры (см. в доке к reddit https://github.com/reddit-archive/reddit/wiki/OAuth2#token-retrieval-code-flow в пункте об ошибках unsupported_response_type )
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      },
    )
    .then(({ data }) => {
      response.send(indexTemplate(ReactDOM.renderToString(App()), data['access_token']));
    })
    .catch(console.log);
});

/** и вместо "/" пропишем звёздочку.
 * Это значит что все адреса которые не совпадают с адресами которые описаны выше ('/static' и '/auth')
 * будут обрабатываться этим скриптом
 */
app.get('*', (request, response) => {
  response.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log('Server has started on http://localhost:3000');
});
