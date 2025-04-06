// вызываем пакет path что бы получить относительные пути в абсолютый
const path = require('path');
// что бы не создавался файл .LICENSE.txt
const TerserPlugin = require('terser-webpack-plugin');
// что бы конфига не тащила все зависимости
const nodeExternals = require('webpack-node-externals');

/** переменная для режима продакшен */
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  /** говорим что этот билд исключительно для работы node.js,
   * без window и прочих вещей фронтенда */
  target: 'node',
  // добавим режимы, если переменная продакшена пустая то сборка будет в deve
  mode: NODE_ENV ? NODE_ENV : 'development',
  /* задаём путь откуда начинать работу, 
  откуда брать данные для серверного кода */
  entry: path.resolve(__dirname, '../src/server/server.js'),
  // укажем куда складывать скомпилированные файлы
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    // задаем имя конечного файла
    filename: 'server.js',
  },
  /** для того что бы вебпак мог работать с jsx файлами и другими */
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  // что бы не были лишние модули из папки node_modules
  externals: [nodeExternals()],
  /* лоадеры (loader) позваляют приобразовывать файлы одного типа в файлы другого типа, 
  webpack может работать только с js и json файлами, остальные расширения он не понимает, 
  тут нам и понадобится лоадеры который  сделает правильные модули и зависимости для него */
  module: {
    rules: [
      {
        /* регулярка в которой указываем расширения файлов которые будут обработаны в loader 
        в данном случае указали файлы jsx и tsx (typesrcipt) */
        test: /\.[tj]sx?$/,
        // тут написали каким loader будут обрабатываться файлы описанные выше
        use: ['ts-loader'],
      },
    ],
  },
  // что бы не создавался файл .LICENSE.txt
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
