const clientConfig = require('./cfg/webpack.client.config');
const serverConfig = require('./cfg/webpack.server.config');

/** передаем массив конфигураций
 * webpack по очереди выполняет каждую конфигу и генерит соответвующий бандл
 */
module.exports = [clientConfig, serverConfig];
