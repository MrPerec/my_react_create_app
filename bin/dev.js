// вызываем webpack
const webpack = require('webpack');
// его конфига
const webpackConfig = require('../webpack.config');
/**nodemon is a tool that helps develop Node.js based applications
 * by automatically restarting the node application when file
 * changes in the directory are detected. */
const nodemon = require('nodemon');
const path = require('path');
const compiler = webpack(webpackConfig);

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
