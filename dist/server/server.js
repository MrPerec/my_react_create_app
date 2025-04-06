/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.indexTemplate = void 0;\nconst indexTemplate = (content) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>My Reddit</title>\r\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\r\n</head>\r\n\r\n<body>\r\n  <div id=\"root\">${content}</div>\r\n</body>\r\n\r\n</html>\r\n`;\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack://reddit_app/./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n// импортируем React\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\n// ипортируем компонент\nconst Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\");\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\n// для инициализации приложения создаем instance\nconst app = (0, express_1.default)();\n// по url '/static' будут доступны все файлы которые лежат в  './dist/client'\napp.use('/static', express_1.default.static('./dist/client'));\n/* listener для отправки get запросов на сервер при переходе по странице\n- 1й аргумент это route\n- 2й это handler c аргументами request (то что запрашивает клиент) и\nresponse (то что возвращает сервер, его формируем мы)\n*/\napp.get('/', (request, response) => {\n    // response.send('Hello Wolrd!');\n    response.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Header_1.Header)())));\n});\n/** вызываем сервер\n * 1й аргумент это порт\n * 2й колбэк который что-то делает\n */\napp.listen(3000, () => {\n    console.log('Server has started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Header = void 0;\n/*  module 2.3 */\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\nfunction HeaderComponent() {\n    return (react_1.default.createElement(\"header\", null,\n        react_1.default.createElement(\"h1\", null, \"Reddit for our own\"),\n        react_1.default.createElement(\"h2\", null, \"Added second header\"),\n        react_1.default.createElement(\"h3\", null, \"Header from 2.3 module2\")));\n}\nexports.Header = (0, react_hot_loader_1.hot)(module)(HeaderComponent);\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header.jsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-hot-loader");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;