// вызываем пакет path что бы получить относительные пути в абсолютый
const path = require('path');
// обявляем плагин
const HTMLWebpackPlugin = require('html-webpack-plugin');
//что бы не создавался файл .LICENSE.txt
const TerserPlugin = require('terser-webpack-plugin');

/** переменная для режима продакшен */
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

function setupDevtool() {
  // eval для deva рекомендованный вариант из доки https://webpack.js.org/configuration/devtool/
  if (IS_DEV) return 'eval';
  // false для прода
  return false;
}

// console.log(setupDevtool());

module.exports = {
  /** для того что бы вебпак мог работать с jsx файлами и другими */
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  // добавим режимы, если переменная продакшена пустая то сборка будет в deve
  mode: NODE_ENV ? NODE_ENV : 'development',
  // задаём путь откуда начинать работу, откуда брать данные
  entry: path.resolve(__dirname, 'src/index.jsx'),
  // укажем куда складывать скомпилированные файлы
  output: {
    path: path.resolve(__dirname, 'dist'),
    // задаем имя конечного файла
    filename: 'index.js',
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
    ],
  },
  // описываем плагины
  plugins: [
    // для плагина HTMLWebpackPlugin указываем файл шаблон
    new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
  ],
  // настроим сервер
  devServer: {
    // порт
    port: 3000,
    // автооткрытие страницы при запуске сервере
    open: true,
    // перезагрузка сервера при сохранении только в dev режиме
    hot: IS_DEV,
  },
  /* добавим поле devtool для формирования sourcemap - что бы в консоли показывало ошибку 
  в том файле где она возникает а не из итогового dist/index.js где всё в кучу написано
  в gulp такое тоже настраивал
  */
  devtool: setupDevtool(),
  //что бы не создавался файл .LICENSE.txt
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
