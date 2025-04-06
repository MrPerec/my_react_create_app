import express from 'express';
// импортируем React
import ReactDOM from 'react-dom/server';
// ипортируем компонент
import { Header } from '../shared/Header';
import { indexTemplate } from './indexTemplate';

// для инициализации приложения создаем instance
const app = express();

// по url '/static' будут доступны все файлы которые лежат в  './dist/client'
app.use('/static', express.static('./dist/client'));

/* listener для отправки get запросов на сервер при переходе по странице 
- 1й аргумент это route
- 2й это handler c аргументами request (то что запрашивает клиент) и 
response (то что возвращает сервер, его формируем мы)
*/
app.get('/', (request, response) => {
  // response.send('Hello Wolrd!');
  response.send(indexTemplate(ReactDOM.renderToString(Header())));
});

/** вызываем сервер
 * 1й аргумент это порт
 * 2й колбэк который что-то делает
 */
app.listen(3000, () => {
  console.log('Server has started on http://localhost:3000');
});
