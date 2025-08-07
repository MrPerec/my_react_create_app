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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = \"\";\n            var needLayer = typeof item[5] !== \"undefined\";\n            if (item[4]) {\n                content += \"@supports (\".concat(item[4], \") {\");\n            }\n            if (item[2]) {\n                content += \"@media \".concat(item[2], \" {\");\n            }\n            if (needLayer) {\n                content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n            }\n            content += cssWithMappingToString(item);\n            if (needLayer) {\n                content += \"}\";\n            }\n            if (item[2]) {\n                content += \"}\";\n            }\n            if (item[4]) {\n                content += \"}\";\n            }\n            return content;\n        }).join(\"\");\n    }; // import a list of modules into the list\n    list.i = function i(modules, media, dedupe, supports, layer) {\n        if (typeof modules === \"string\") {\n            modules = [[null, modules, undefined]];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var k = 0; k < this.length; k++) {\n                var id = this[k][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _k = 0; _k < modules.length; _k++) {\n            var item = [].concat(modules[_k]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                continue;\n            }\n            if (typeof layer !== \"undefined\") {\n                if (typeof item[5] === \"undefined\") {\n                    item[5] = layer;\n                }\n                else {\n                    item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n                    item[5] = layer;\n                }\n            }\n            if (media) {\n                if (!item[2]) {\n                    item[2] = media;\n                }\n                else {\n                    item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n                    item[2] = media;\n                }\n            }\n            if (supports) {\n                if (!item[4]) {\n                    item[4] = \"\".concat(supports);\n                }\n                else {\n                    item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n                    item[4] = supports;\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\n\n\n//# sourceURL=webpack://reddit_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (i) {\n    return i[1];\n};\n\n\n//# sourceURL=webpack://reddit_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\n__webpack_require__(/*! ./normalize.css */ \"./src/normalize.css\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\nfunction AppComponent() {\n    return (react_1.default.createElement(Layout_1.Layout, null,\n        react_1.default.createElement(Header_1.Header, null),\n        react_1.default.createElement(Content_1.Content, null,\n            react_1.default.createElement(CardsList_1.CardsList, null))));\n}\nexports.App = (0, react_hot_loader_1.hot)(module)(AppComponent);\n\n\n//# sourceURL=webpack://reddit_app/./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --black: #333333;\\r\\n  --orange: #cc6633;\\r\\n  --green: #a4cc33;\\r\\n  --white: #ffffff;\\r\\n  --greyF4: #f4f4f4;\\r\\n  --greyF3: #f3f3f3;\\r\\n  --greyD9: #d9d9d9;\\r\\n  --greyC4: #c4c4c4;\\r\\n  --grey99: #999999;\\r\\n  --grey66: #666666;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: inherit;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  min-width: 320px;\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: 'Roboto', serif;\\r\\n  font-weight: 400;\\r\\n  background-color: var(--greyF4);\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  color: var(--black);\\r\\n  --webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://reddit_app/./src/main.global.css?");

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/normalize.css?");

/***/ }),

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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar app = (0, express_1.default)();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', function (request, response) {\n    response.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.listen(3000, function () {\n    console.log('Server has started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = Card;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar TextContent_1 = __webpack_require__(/*! ./TextContent/TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\");\nvar Preview_1 = __webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\");\nvar Menu_1 = __webpack_require__(/*! ./Menu/Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\");\nvar Controls_1 = __webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\");\nfunction Card() {\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(TextContent_1.TextContent, null),\n        react_1.default.createElement(Preview_1.Preview, null),\n        react_1.default.createElement(Menu_1.Menu, null),\n        react_1.default.createElement(Controls_1.Controls, null)));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controls = Controls;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\nfunction Controls() {\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.karmaCounter },\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.up },\n                react_1.default.createElement(\"svg\", { width: '19', height: '10', viewBox: '0 0 19 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n                    react_1.default.createElement(\"path\", { d: 'M9.5 0L0 10H19L9.5 0Z', fill: '#C4C4C4' }))),\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.karmaValue }, \"234\"),\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.up },\n                react_1.default.createElement(\"svg\", { width: '19', height: '10', viewBox: '0 0 19 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n                    react_1.default.createElement(\"path\", { d: 'M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z', fill: '#C4C4C4' })))),\n        react_1.default.createElement(\"button\", { className: controls_css_1.default.commentsButton },\n            react_1.default.createElement(\"svg\", { width: '15', height: '15', viewBox: '0 0 15 15', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n                react_1.default.createElement(\"path\", { d: 'M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z', fill: '#C4C4C4' })),\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.commentsNumber }, \"13\")),\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.shareButton },\n                react_1.default.createElement(\"svg\", { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n                    react_1.default.createElement(\"circle\", { cx: '10', cy: '10', r: '10', fill: '#C4C4C4' }),\n                    react_1.default.createElement(\"path\", { d: 'M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z', fill: 'white' }))),\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.saveButton },\n                react_1.default.createElement(\"svg\", { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n                    react_1.default.createElement(\"circle\", { cx: '10', cy: '10', r: '10', fill: '#C4C4C4' }),\n                    react_1.default.createElement(\"path\", { d: 'M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z', fill: 'white' }))))));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"controls\": \"controls__controls--QwWTA\",\n\t\"karmaCounter\": \"controls__karmaCounter--eqNQ5\",\n\t\"karmaValue\": \"controls__karmaValue--X1lkv\",\n\t\"commentsButton\": \"controls__commentsButton--DotKf\",\n\t\"commentsNumber\": \"controls__commentsNumber--iDq09\",\n\t\"actions\": \"controls__actions--RIsv2\",\n\t\"shareButton\": \"controls__shareButton--ZFHlO\",\n\t\"saveButton\": \"controls__saveButton--WqnJE\",\n\t\"up\": \"controls__up--zKF6i\",\n\t\"down\": \"controls__down--U1c6u\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Menu = Menu;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\nfunction Menu() {\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\n        react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\n            react_1.default.createElement(\"svg\", { width: '5', height: '20', viewBox: '0 0 5 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n                react_1.default.createElement(\"circle\", { cx: '2.5', cy: '2.5', r: '2.5', fill: '#D9D9D9' }),\n                react_1.default.createElement(\"circle\", { cx: '2.5', cy: '10', r: '2.5', fill: '#D9D9D9' }),\n                react_1.default.createElement(\"circle\", { cx: '2.5', cy: '17.5', r: '2.5', fill: '#D9D9D9' })))));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"menu\": \"menu__menu--YnZJb\",\n\t\"menuButton\": \"menu__menuButton--MQlXM\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Preview = Preview;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\nfunction Preview() {\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: 'https://cdn.dribbble.com/userupload/44351197/file/2d18d3220ba497acb596e730b16e8cb0.png?format=webp&resize=320x240&vertical=center', alt: 'Psychological diary & AI-powered self-reflection app ai ai design app app design application diary mobile mobile app mobile design outcrowd product design ui uiux ux ux design' })));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"preview\": \"preview__preview--RIuWJ\",\n\t\"previewImg\": \"preview__previewImg--zqJm3\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TextContent = TextContent;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\nfunction TextContent() {\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\n            react_1.default.createElement(\"div\", { className: textcontent_css_1.default.userLink },\n                react_1.default.createElement(\"img\", { className: textcontent_css_1.default.avatar, src: 'https://cdn.dribbble.com/users/2173663/avatars/small/c4c633361e233ae7e0b9882264c95b1a.jpg?1579775888', alt: 'avatar' }),\n                react_1.default.createElement(\"a\", { className: textcontent_css_1.default.username, href: '#user-url' }, \"\\u0414\\u043C\\u0438\\u0442\\u0440\\u0438\\u0439 \\u0413\\u0440\\u0438\\u0448\\u0438\\u043D\")),\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n                \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n        react_1.default.createElement(\"h2\", { className: textcontent_css_1.default.title },\n            react_1.default.createElement(\"a\", { className: textcontent_css_1.default.postLink, href: '#post-url' }, \"\\u0420\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F \\u043D\\u0430\\u043C\\u0435\\u0447\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u044B\\u0445 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0439\"))));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textcontent.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"textContent\": \"textcontent__textContent--Sn_2j\",\n\t\"metaData\": \"textcontent__metaData--oQdZE\",\n\t\"userLink\": \"textcontent__userLink--YWiTH\",\n\t\"avatar\": \"textcontent__avatar--gSD62\",\n\t\"username\": \"textcontent__username--kJdQv\",\n\t\"createdAt\": \"textcontent__createdAt--OIehr\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--zzjjS\",\n\t\"title\": \"textcontent__title--nLTlo\",\n\t\"postLink\": \"textcontent__postLink--F2Ov2\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"card\": \"card__card--dPIIn\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CardsList = CardsList;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\nfunction CardsList() {\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\n        react_1.default.createElement(Card_1.Card, null)));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"cardsList\": \"cardslist__cardsList--dIjIi\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Content = Content;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children);\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"content\": \"content__content--LaQEL\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Header = Header;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SearchBlock = SearchBlock;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nfunction SearchBlock() {\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(\"div\", { className: searchblock_css_1.default.userLink },\n            react_1.default.createElement(\"img\", { className: searchblock_css_1.default.avatar, src: 'https://cdn.dribbble.com/users/2173663/avatars/small/c4c633361e233ae7e0b9882264c95b1a.jpg?1579775888', alt: '\\u041A\\u043E\\u043D\\u0441\\u0442\\u0430\\u043D\\u0442\\u0438\\u043D \\u041A\\u043E\\u0434\\u043E\\u0432' }),\n            react_1.default.createElement(\"a\", { className: searchblock_css_1.default.username, href: '#user-url' }, \"\\u041A\\u043E\\u043D\\u0441\\u0442\\u0430\\u043D\\u0442\\u0438\\u043D\")),\n        react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchInputBlock },\n            react_1.default.createElement(\"svg\", { className: searchblock_css_1.default.searchIcon, viewBox: '0 0 11 11', xmlns: 'http://www.w3.org/2000/svg' },\n                react_1.default.createElement(\"path\", { d: 'M7.86164 6.91824H7.36478L7.18868 6.74843C7.80503 6.03145 8.1761 5.10063 8.1761 4.08805C8.1761 1.83019 6.34591 0 4.08805 0C1.83019 0 0 1.83019 0 4.08805C0 6.34591 1.83019 8.1761 4.08805 8.1761C5.10063 8.1761 6.03145 7.80503 6.74843 7.18868L6.91824 7.36478V7.86164L10.0629 11L11 10.0629L7.86164 6.91824ZM4.08805 6.91824C2.52201 6.91824 1.25786 5.65409 1.25786 4.08805C1.25786 2.52201 2.52201 1.25786 4.08805 1.25786C5.65409 1.25786 6.91824 2.52201 6.91824 4.08805C6.91824 5.65409 5.65409 6.91824 4.08805 6.91824Z' })),\n            react_1.default.createElement(\"input\", { className: searchblock_css_1.default.searchInput, type: 'text', name: 'search', placeholder: '\\u041F\\u043E\\u0438\\u0441\\u043A' })),\n        react_1.default.createElement(\"div\", { className: searchblock_css_1.default.emailIconsBlock },\n            react_1.default.createElement(\"span\", { className: searchblock_css_1.default.emailCounterText }, \"4\"),\n            react_1.default.createElement(\"svg\", { className: searchblock_css_1.default.emailCounterIcon, viewBox: '0 0 13 11', xmlns: 'http://www.w3.org/2000/svg' },\n                react_1.default.createElement(\"path\", { d: 'M11.7235 0.276367H1.51072C0.808598 0.276367 0.240514 0.850834 0.240514 1.55296L0.234131 9.21252C0.234131 9.91465 0.808598 10.4891 1.51072 10.4891H11.7235C12.4256 10.4891 13.0001 9.91465 13.0001 9.21252V1.55296C13.0001 0.850834 12.4256 0.276367 11.7235 0.276367ZM11.7235 2.82955L6.6171 6.02104L1.51072 2.82955V1.55296L6.6171 4.74444L11.7235 1.55296V2.82955Z' })))));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"searchBlock\": \"searchblock__searchBlock--AiDOf\",\n\t\"userLink\": \"searchblock__userLink--I_B6Y\",\n\t\"avatar\": \"searchblock__avatar--seRU2\",\n\t\"username\": \"searchblock__username--igHwV\",\n\t\"searchInputBlock\": \"searchblock__searchInputBlock--ef4RD\",\n\t\"searchIcon\": \"searchblock__searchIcon--qtAF6\",\n\t\"searchInput\": \"searchblock__searchInput--NJaaZ\",\n\t\"emailIconsBlock\": \"searchblock__emailIconsBlock--HTNRP\",\n\t\"emailCounterText\": \"searchblock__emailCounterText--KtmSY\",\n\t\"emailCounterIcon\": \"searchblock__emailCounterIcon--oZX56\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SortBlock = SortBlock;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock },\n        react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortTextBlock },\n            react_1.default.createElement(\"svg\", { className: sortblock_css_1.default.sortRocketIcon, viewBox: '0 0 9 11', xmlns: 'http://www.w3.org/2000/svg' },\n                react_1.default.createElement(\"path\", { d: 'M0 11L2.17125 10.1475C1.7775 9.306 1.49625 8.437 1.32188 7.5515L0 11ZM6.82875 10.1475L9 11L7.67813 7.5515C7.50375 8.437 7.2225 9.306 6.82875 10.1475ZM4.5 0C4.5 0 1.6875 1.1 1.6875 5.5C1.6875 7.205 2.10938 8.6625 2.62687 9.8065C2.8125 10.2025 3.21187 10.45 3.65625 10.45H5.34375C5.78813 10.45 6.1875 10.2025 6.37313 9.8065C6.885 8.6625 7.3125 7.205 7.3125 5.5C7.3125 1.1 4.5 0 4.5 0ZM4.5 5.5C3.88125 5.5 3.375 5.005 3.375 4.4C3.375 3.795 3.88125 3.3 4.5 3.3C5.11875 3.3 5.625 3.795 5.625 4.4C5.625 5.005 5.11875 5.5 4.5 5.5Z' })),\n            react_1.default.createElement(\"span\", { className: sortblock_css_1.default.sortText }, \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435\")),\n        react_1.default.createElement(\"button\", { className: sortblock_css_1.default.sortButton },\n            react_1.default.createElement(\"svg\", { className: sortblock_css_1.default.sortDropdownIcon, viewBox: '0 0 10 6', xmlns: 'http://www.w3.org/2000/svg' },\n                react_1.default.createElement(\"path\", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M5 6L-4.75832e-07 0.534122L0.541379 1.26775e-07L5 4.87405L9.45862 9.06345e-07L10 0.534123L5 6Z' })))));\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"sortBlock\": \"sortblock__sortBlock--Z8cCd\",\n\t\"sortTextBlock\": \"sortblock__sortTextBlock--Srj4K\",\n\t\"sortRocketIcon\": \"sortblock__sortRocketIcon--FJdUI\",\n\t\"sortText\": \"sortblock__sortText--apuvJ\",\n\t\"sortDropdownIcon\": \"sortblock__sortDropdownIcon--fZ1NU\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ThreadTitle = ThreadTitle;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nfunction ThreadTitle() {\n    return react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"\\u0414\\u0438\\u0441\\u043A\\u0443\\u0441\\u0441\\u0438\\u0438\");\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"threadTitle\": \"threadtitle__threadTitle--BSyHO\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"header\": \"header__header--StEJO\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Layout = Layout;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\n}\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"layout\": \"layout__layout--TomHf\"\n});\n\n\n//# sourceURL=webpack://reddit_app/./src/shared/Layout/layout.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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