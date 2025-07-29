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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>My Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"root\\\">\".concat(content, \"</div>\\n</body>\\n\\n</html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack://reddit_app/./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n// импортируем React\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\n// ипортируем компонент\nvar Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\");\n// для инициализации приложения создаем instance\nvar app = (0, express_1.default)();\n// по url '/static' будут доступны все файлы которые лежат в  './dist/client'\napp.use('/static', express_1.default.static('./dist/client'));\n/* listener для отправки get запросов на сервер при переходе по странице\n- 1й аргумент это route\n- 2й это handler c аргументами request (то что запрашивает клиент) и\nresponse (то что возвращает сервер, его формируем мы)\n*/\napp.get('/', function (request, response) {\n    // response.send('Hello Wolrd!');\n    response.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Header_1.Header)())));\n});\n/** вызываем сервер\n * 1й аргумент это порт\n * 2й колбэк который что-то делает\n */\napp.listen(3000, function () {\n    console.log('Server has started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || (function () {\n    var ownKeys = function(o) {\n        ownKeys = Object.getOwnPropertyNames || function (o) {\n            var ar = [];\n            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n            return ar;\n        };\n        return ownKeys(o);\n    };\n    return function (mod) {\n        if (mod && mod.__esModule) return mod;\n        var result = {};\n        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n        __setModuleDefault(result, mod);\n        return result;\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\nvar styles = __importStar(__webpack_require__(/*! ./header.css */ \"./src/shared/header.css\"));\nvar Names_1 = __webpack_require__(/*! ./Names/Names */ \"./src/shared/Names/Names.tsx\");\nfunction HeaderComponent() {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"header\", null,\n            react_1.default.createElement(\"h1\", null, \"Reddit for our own\"),\n            react_1.default.createElement(\"h2\", null, \"Added second header\"),\n            react_1.default.createElement(\"h3\", null, \"Header from 2.3 module2\"),\n            react_1.default.createElement(\"h4\", { className: styles.example }, \"Header.example from 2.5 module\"),\n            react_1.default.createElement(\"h4\", { className: styles.some }, \"Header.some from 2.5 module\")),\n        react_1.default.createElement(Names_1.Names, null)));\n}\nexports.Header = (0, react_hot_loader_1.hot)(module)(HeaderComponent);\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header.jsx?");

/***/ }),

/***/ "./src/shared/Names/Names.tsx":
/*!************************************!*\
  !*** ./src/shared/Names/Names.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || (function () {\n    var ownKeys = function(o) {\n        ownKeys = Object.getOwnPropertyNames || function (o) {\n            var ar = [];\n            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n            return ar;\n        };\n        return ownKeys(o);\n    };\n    return function (mod) {\n        if (mod && mod.__esModule) return mod;\n        var result = {};\n        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n        __setModuleDefault(result, mod);\n        return result;\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Names = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar unique_names_generator_1 = __webpack_require__(/*! unique-names-generator */ \"unique-names-generator\");\nvar styles = __importStar(__webpack_require__(/*! ./names.css */ \"./src/shared/Names/names.css\"));\n/** реакт-компонент принимает \"{}, INamesState\"\n * - \"{}\" говорт о том что компонент не принимает никаких пропов\n * - \"INamesState\" говорит что использует Generic, получает интерфейс INamesState*/\nvar Names = /** @class */ (function (_super) {\n    __extends(Names, _super);\n    function Names(props) {\n        var _this = _super.call(this, props) || this;\n        /** state компонента */\n        _this.state = {\n            adjective: _this.generateWord(unique_names_generator_1.adjectives),\n            starWarsWord: _this.generateWord(unique_names_generator_1.starWars),\n        };\n        return _this;\n    }\n    /** метод жизненного цикла компонента\n     * код который описан в этом методе выполняется когда данный компонебнт встраивается в DOM дерево\n     * т.е. когда проиходит рендеринг компонента этот код выполняется в первую очередь.\n     *\n     * Данный код меняет прилагательное на любое другое каждые 2 секунды.\n     * По истичению 6 секуд замена прекращает выполняться.\n     */\n    Names.prototype.componentDidMount = function () {\n        var _this = this;\n        var interval = setInterval(function () {\n            _this.setState({ adjective: _this.generateWord(unique_names_generator_1.adjectives) });\n        }, 2000);\n        setTimeout(function () {\n            clearInterval(interval);\n        }, 6000);\n    };\n    /** приватная функция \"generateWord\" котоаря выполняет функцию \"uniqueNamesGenerator\" из библиотеки \"unique-names-generator\"\n     * с некоторыми настройками, что бы получить случайное прилагательное либо слово из вселенной StarWars\n     */\n    Names.prototype.generateWord = function (dictionary) {\n        var defaultGeneratorConfig = {\n            length: 1,\n            dictionaries: [],\n        };\n        return (0, unique_names_generator_1.uniqueNamesGenerator)(Object.assign({}, defaultGeneratorConfig, { dictionaries: [dictionary] }));\n    };\n    /** метод рендеринга. Выводит наш jsx в html теги на странице */\n    Names.prototype.render = function () {\n        return (react_1.default.createElement(\"h1\", { className: styles.word },\n            react_1.default.createElement(Adjective, { adjective: this.state.adjective }),\n            '\\u00A0',\n            react_1.default.createElement(StarWarsWord, { starWarsWord: this.state.starWarsWord })));\n    };\n    return Names;\n}(react_1.default.Component));\nexports.Names = Names;\n/** 1. компонент который выводит прилагательное и выводит логи о том что прилагательное было встроенов в DOM */\n/* class Adjective extends React.Component<IFirstNameProps> {\n  render() {\n    console.log('======================');\n    console.log('>> Adjective is printing');\n    return <span>{this.props.adjective}</span>;\n  }\n} */\n/** 3. перепишем классовый компоненты на ф-ый */\nfunction Adjective(props) {\n    console.log('======================');\n    console.log('>> Adjective is printing');\n    return react_1.default.createElement(\"span\", null, props.adjective);\n}\n/** компонент выводит имя из вселенной SW и логирует это событие в консоли */\n/** 1. При рендеренге componentDidMount в консоли можно увидеть что этот компоонент выводит надпись \">> SW word is printing\"\n * каждые 2 секунды хотя по сути имя не изменяется, оно одинаковое на протяжении 6 секунд.\n * Что бы этого не происходило заменим  \"Component\" на \"PureComponent\"\n */\n/* class StarWarsWord extends React.Component<ILastNameProps> {\n  render() {\n    console.log('>> SW word is printing');\n    return <span>{this.props.starWarsWord}</span>;\n  }\n} */\n/** 2. после замены на \"PureComponent\" перерендеринг этого компонента прекратился\n * PureComponent в componentDidMount работает иначе, он сравнивает предыдущее значение компонента и текущее\n * и если значение не изменилось то и перерендеринга не происходит\n */\n/* class StarWarsWord extends React.PureComponent<ILastNameProps> {\n  render() {\n    console.log('>> SW word is printing');\n    return <span>{this.props.starWarsWord}</span>;\n  }\n} */\n/** 3. перепишем классовый компоненты на ф-ый */\n/** снова происходит перерендеринг не зависимо от того изменилось значение prop или нет\n * что бы это исправить перепишем ф-ю\n */\n/* function StarWarsWord(props: ILastNameProps) {\n  console.log('>> SW word is printing');\n  return <span>{props.starWarsWord}</span>;\n} */\n/** 4. перепишем ф-ю и обернем её в memo.\n * memo выполняет меморизацию компонента что бы если значение не изменяется то и компоонент не перерисовывается.\n * memo нужно использовать с умом, иногда оно может создать много проблем\n */\nvar StarWarsWord = react_1.default.memo(function (props) {\n    console.log('>> SW word is printing');\n    return react_1.default.createElement(\"span\", null, props.starWarsWord);\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Names/Names.tsx?");

/***/ }),

/***/ "./src/shared/Names/names.css":
/*!************************************!*\
  !*** ./src/shared/Names/names.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   word: () => (/* binding */ word)\n/* harmony export */ });\n// Exports\nvar word = `names__word--FVd7F`;\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Names/names.css?");

/***/ }),

/***/ "./src/shared/header.css":
/*!*******************************!*\
  !*** ./src/shared/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   example: () => (/* binding */ example),\n/* harmony export */   some: () => (/* binding */ some)\n/* harmony export */ });\n// Exports\nvar example = `header__example--Duzw6`;\nvar some = `header__some--xPXjz`;\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/header.css?");

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

/***/ }),

/***/ "unique-names-generator":
/*!*****************************************!*\
  !*** external "unique-names-generator" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("unique-names-generator");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
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