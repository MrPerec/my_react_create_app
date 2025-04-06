// вызываем webpack
const webpack = require('webpack');
/** исправления из 2.3 вместо webpackConfig сделали деструктуризацию и взяли каждый
 * конфиг по отдельности*/
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');

/**nodemon - это инструмент, который помогает разрабатывать приложения на основе Node.js,
 * автоматически перезапуская приложение node при обнаружении изменений в файле каталога. */
const nodemon = require('nodemon');
const path = require('path');

/** исправления из 2.3 вносим изминения для клиента*/
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);
// подключаем к HMR серверу webpackDevMiddleware
hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    /**с ними не работает */
    // noInfo: true,
    // watchOptions: {
    //   ignored: /dist/,
    // },
    writeToDisk: true,
    stats: 'errors-only',
  }),
);
// подключаем к HMR серверу webpackHotMiddleware
hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    /**путь такой же как в конце в webpack.client.config.js - entry  */
    path: '/static/__webpack_hmr',
  }),
);
// запускаем hmrServer на порту 3001
hmrServer.listen(3001, () => {
  console.log('HMR server successfuly started');
});
// для сервера ничего не изменяли
const compiler = webpack(webpackServerConfig);

// холодный старт, если происходит какая-то ошибка то выводим сообщение
compiler.run((err) => {
  if (err) console.log('Compilation failed: ', err);

  // если запуск произошол то запускаем watch и там отслеживаем ошибку иначе успех
  compiler.watch({}, (err) => {
    if (err) console.log('Compilation failed: ', err);
    console.log('Compilation was successfully');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [path.resolve(__dirname, '../dist/server'), path.resolve(__dirname, '../dist/client')],
  });
});
