// вызываем пакет path что бы получить относительные пути в абсолютый
const path = require('path');
// что бы не создавался файл .LICENSE.txt
const TerserPlugin = require('terser-webpack-plugin');
/* добавлено в уроке урок 2.3 
HotModuleReplacementPlugin для горячей замены 
CleanWebpackPlugin для удаления чанков которые генерятся после каждого изминения кода, это js файлы
их становится много и их нужо удалять*/
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** переменная для режима продакшен */
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

function setupDevtool() {
  // eval для deva рекомендованный вариант из доки https://webpack.js.org/configuration/devtool/
  if (IS_DEV) return 'eval';
  // false для прода
  return false;
}

module.exports = {
  // добавим режимы, если переменная продакшена пустая то сборка будет в deve
  mode: NODE_ENV ? NODE_ENV : 'development',
  /** для того что бы вебпак мог работать с jsx файлами и другими */
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    /** урок 2.3 . Пропишем алиас который будет вместо стандартного react-dom возвращать @hot-loader/react-dom */
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  /* исправления из урока 2.3, добавили строку webpack-hot-middleware
  это js код который будет добавлен в index.jsx после него, опция path укзывает путь до нового сервера */
  entry: [path.resolve(__dirname, '../src/client/index.jsx'), 'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'],
  // укажем куда складывать скомпилированные файлы
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    // задаем имя конечного файла
    filename: 'client.js',
    // добавлено из 2.3, путь с доступом к ассетам и чанкам
    publicPath: '/static/',
  },
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
      /** из 2.5 .  */
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                // название селектора
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  /* добавим поле devtool для формирования sourcemap - что бы в консоли показывало ошибку 
  в том файле где она возникает а не из итогового dist/index.js где всё в кучу написано
  в gulp такое тоже настраивал
  */
  devtool: setupDevtool(),
  // из урока 2.3, подлючаем плагин HotModuleReplacementPlugin
  plugins: IS_DEV ? [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()] : [],
  // что бы не создавался файл .LICENSE.txt
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
