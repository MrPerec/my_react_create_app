import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexTemplate } from './indexTemplate';
import { App } from '../App';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (request, response) => {
  response.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get('/auth', (request, response) => {
  // request.query.code;
  response.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log('Server has started on http://localhost:3000');
});
