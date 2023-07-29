/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Examples_1 = __webpack_require__(/*! ./shared/Examples */ \"./src/shared/Examples.tsx\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar commentContext_1 = __webpack_require__(/*! ./shared/context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"@redux-devtools/extension\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar CardsListNew_1 = __webpack_require__(/*! ./shared/CardsListNew */ \"./src/shared/CardsListNew/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar _404_1 = __webpack_require__(/*! ./shared/404 */ \"./src/shared/404/index.ts\");\r\nvar ModalAdd_1 = __webpack_require__(/*! ./shared/ModalAdd */ \"./src/shared/ModalAdd/index.ts\");\r\nvar store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    var _a = (0, react_1.useState)(\"\"), valueControled = _a[0], setValueControled = _a[1];\r\n    var CommentProvider = commentContext_1.commentContext.Provider;\r\n    store.dispatch((0, reducer_1.saveToken)());\r\n    // Для роутинга на клиенте, убирает конфликт с сервером.\r\n    var _b = (0, react_1.useState)(false), mounted = _b[0], setMounted = _b[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setMounted(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(CommentProvider, { value: {\r\n                valueControled: valueControled,\r\n                onChange: setValueControled\r\n            } },\r\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                    react_1.default.createElement(Layout_1.Layout, null,\r\n                        react_1.default.createElement(Header_1.Header, null),\r\n                        react_1.default.createElement(Content_1.Content, null,\r\n                            react_1.default.createElement(react_router_dom_1.Routes, null,\r\n                                react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(CardsList_1.CardsList, null) }),\r\n                                react_1.default.createElement(react_router_dom_1.Route, { path: \"/list/\", element: react_1.default.createElement(CardsListNew_1.CardsListNew, null) }),\r\n                                react_1.default.createElement(react_router_dom_1.Route, { path: \"/list/modal/\", element: [react_1.default.createElement(CardsListNew_1.CardsListNew, null), react_1.default.createElement(ModalAdd_1.ModalAdd, null)] }),\r\n                                react_1.default.createElement(react_router_dom_1.Route, { path: \"/examples/\", element: react_1.default.createElement(Examples_1.ExamplesComponent, null) }),\r\n                                react_1.default.createElement(react_router_dom_1.Route, { path: \"*\", element: react_1.default.createElement(_404_1.Block404, null) }),\r\n                                react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth\", element: react_1.default.createElement(react_router_dom_1.Navigate, { replace: true, to: \"/\" }) })))))))))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCloseModal.ts":
/*!************************************!*\
  !*** ./src/hooks/useCloseModal.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCloseModal = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useCloseModal(cb, ref) {\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                cb();\r\n            }\r\n        }\r\n        function handleKeydownEsc(event) {\r\n            if (event.key === 'Escape') {\r\n                cb();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        document.addEventListener('keydown', handleKeydownEsc);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n            document.addEventListener('keydown', handleKeydownEsc);\r\n        };\r\n    }, []);\r\n}\r\nexports.useCloseModal = useCloseModal;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCloseModal.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction usePostsData() {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        axios_1.default.get(\"https://oauth.reddit.com/best.json?sr_detail=true\", {\r\n            headers: { Authorization: \"bearer \".concat(token) },\r\n        })\r\n            .then(function (resp) {\r\n            var postsData = resp.data;\r\n            setData(postsData.data.children);\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token) {\r\n            return;\r\n        }\r\n        ;\r\n        dispatch((0, actions_1.meRequestAsync)());\r\n    }, [token]);\r\n    return { data: data, loading: loading };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\r\\n  --black         : #333333;\\r\\n  --orange        : #CC6633;\\r\\n  --green         : #A4CC33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white         : hsl(0, 0%, var(--whiteLightness));\\r\\n  --grayF4        : hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --greyF3        : hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --greyEC        : hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n  --greyD9        : hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --greyC4        : hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grey99        : hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n  --grey66        : hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding         : 0;\\r\\n  margin          : 0;\\r\\n  background-color: var(--grayF4);\\r\\n  font-size       : 14px;\\r\\n  line-height     : 16px;\\r\\n  font-family     : 'Roboto', serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color                  : var(--black);\\r\\n  box-sizing             : border-box;\\r\\n  -webkit-font-smoothing : antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin    : 0;\\r\\n  padding   : 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding   : 0;\\r\\n  border    : 0;\\r\\n  background: transparent;\\r\\n  cursor    : pointer;\\r\\n}\\r\\n\\r\\n.btnNavActive {\\r\\n  text-decoration: underline;\\r\\n  font-weight: 700;\\r\\n  background-color: #e5ebd7;\\r\\n  pointer-events: none;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__ = '\".concat(token, \"'\\n  </script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n</body>\\n\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar App_tsx_1 = __webpack_require__(/*! ../App.tsx */ \"./src/App.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar PORT = process.env.PORT || 3000;\r\nvar app = (0, express_1.default)();\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\n// app.get(\"/auth\", (req, res) => {\r\n//   res.send(indexTemplate(ReactDOM.renderToString(App())));\r\n// });\r\napp.get(\"/auth\", function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\r\n        auth: { username: 'undefined', password: 'sRz4JpMQUkALoeDLoEIReKdSc2jzZw' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), data['access_token']));\r\n    })\r\n        .catch(console.log());\r\n});\r\napp.get(\"*\", function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)())));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"server started on port http://localhost:\".concat(PORT));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/404/404.tsx":
/*!********************************!*\
  !*** ./src/shared/404/404.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Block404 = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Block404() {\r\n    return (react_1.default.createElement(\"h1\", { style: { fontSize: '30px', lineHeight: '34px', color: 'red', maxWidth: \"500px\", margin: \"100px auto\", textAlign: 'center' } },\r\n        \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 404.\",\r\n        react_1.default.createElement(\"br\", null),\r\n        \"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430.\"));\r\n}\r\nexports.Block404 = Block404;\r\n\n\n//# sourceURL=webpack:///./src/shared/404/404.tsx?");

/***/ }),

/***/ "./src/shared/404/index.ts":
/*!*********************************!*\
  !*** ./src/shared/404/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./404 */ \"./src/shared/404/404.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/404/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\r\nfunction Card(_a) {\r\n    var dataAuthor = _a.dataAuthor, dataTitle = _a.dataTitle, imgPath = _a.imgPath, dataUrl = _a.dataUrl;\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { dataAuthor: dataAuthor, dataTitle: dataTitle, dataUrl: dataUrl }),\r\n        react_1.default.createElement(Preview_1.Preview, { imgPath: imgPath }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsButton/CommentsButton.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsButton/CommentsButton.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/CommentsButton/commentsbutton.css\"));\r\nfunction CommentsButton() {\r\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\r\n        react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n        react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsNumber }, \"13\")));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsButton/commentsbutton.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsButton/commentsbutton.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--jg5NB\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--2iwO8\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentsButton/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentsButton/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentsButton_1 = __webpack_require__(/*! ../CommentsButton */ \"./src/shared/CardsList/Card/CommentsButton/index.ts\");\r\nvar SaveButton_1 = __webpack_require__(/*! ../SaveButton */ \"./src/shared/CardsList/Card/SaveButton/index.ts\");\r\nvar ShareButton_1 = __webpack_require__(/*! ../ShareButton */ \"./src/shared/CardsList/Card/ShareButton/index.ts\");\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\r\nfunction Controls() {\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.karmaCounter },\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.up },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.karmaValue }, \"234\"),\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.down },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))),\r\n        react_1.default.createElement(CommentsButton_1.CommentsButton, null),\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\r\n            react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n            react_1.default.createElement(SaveButton_1.SaveButton, null))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--1pbuI\",\n\t\"actions\": \"controls__actions--1iXY3\",\n\t\"karmaCounter\": \"controls__karmaCounter--29ihx\",\n\t\"karmaValue\": \"controls__karmaValue--iJzv0\",\n\t\"down\": \"controls__down--15a4f\",\n\t\"up\": \"controls__up--2KfyE\",\n\t\"commentsButton\": \"controls__commentsButton--2EBXh\",\n\t\"commentsNumber\": \"controls__commentsNumber--y3vDY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar Popup_1 = __webpack_require__(/*! ../Popup */ \"./src/shared/CardsList/Card/Popup/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nfunction Menu() {\r\n    var elementButton = (react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n        react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" }))));\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: elementButton, onClose: function () { console.log('close'); }, onOpen: function () { console.log('open'); } },\r\n            react_1.default.createElement(Popup_1.Popup, null))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--22Yos\",\n\t\"menuButton\": \"menu__menuButton--2RzAb\",\n\t\"dropdown\": \"menu__dropdown--2v5tI\",\n\t\"closeButton\": \"menu__closeButton--1Vmbj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Popup/Popup.tsx":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/Popup/Popup.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Popup = exports.assoc = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar popup_css_1 = __importDefault(__webpack_require__(/*! ./popup.css */ \"./src/shared/CardsList/Card/Popup/popup.css\"));\r\nvar GenerateList_1 = __webpack_require__(/*! ../../../utils/GenerateList */ \"./src/shared/utils/GenerateList.tsx\");\r\nfunction assoc(key, text) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = text, _a)));\r\n    }; // необязательный хвост\r\n}\r\nexports.assoc = assoc;\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nvar generateId = function (obj) { return assoc('id', generateRandomString())(obj); };\r\nvar LIST = [\r\n    { As: 'li', text: 'Комментарии', className: \"\".concat(popup_css_1.default.popupItem), dataMobile: 'hidden', icon: 'IconComment', size: '15' },\r\n    { As: 'li', text: 'Поделиться', className: \"\".concat(popup_css_1.default.popupItem), dataMobile: 'hidden', icon: 'IconShare', size: '14' },\r\n    { As: 'li', text: 'Скрыть', className: \"\".concat(popup_css_1.default.popupItem), dataMobile: 'visible', icon: 'IconHidden', size: '14' },\r\n    { As: 'li', text: 'Сохранить', className: \"\".concat(popup_css_1.default.popupItem), dataMobile: 'hidden', icon: 'IconSave', size: '14' },\r\n    { As: 'li', text: 'Пожаловаться', className: \"\".concat(popup_css_1.default.popupItem), dataMobile: 'visible', icon: 'IconComplain', size: '16' },\r\n    { As: 'li', text: 'Закрыть', className: \"\".concat(popup_css_1.default.popupItem), dataMobile: 'visible' },\r\n].map(generateId);\r\nfunction Popup() {\r\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\r\n    var handleItemClick = function (id) {\r\n        setList(list.filter(function (item) { return item.id !== id; }));\r\n    };\r\n    return (react_1.default.createElement(\"ul\", { className: popup_css_1.default.popupList },\r\n        react_1.default.createElement(GenerateList_1.GenerateList, { list: list.map(function (item) { return (__assign(__assign({}, item), { onClick: function () { return handleItemClick(item.id); } })); }) })));\r\n}\r\nexports.Popup = Popup;\r\n// export function Popup() {\r\n//   return (\r\n//     <ul className={styles.popupList}>\r\n//       <li className={styles.popupItem} onClick={()=>{console.log('click')}}>\r\n//         <button>\r\n//           <svg\r\n//             width=\"15\"\r\n//             height=\"15\"\r\n//             viewBox=\"0 0 15 15\"\r\n//             fill=\"none\"\r\n//             xmlns=\"http://www.w3.org/2000/svg\"\r\n//           >\r\n//             <path\r\n//               d=\"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\"\r\n//               fill=\"#999999\"\r\n//             />\r\n//           </svg>\r\n//           <span>Комментарии</span>\r\n//         </button>\r\n//       </li>\r\n//       <li className={styles.popupItem}>\r\n//         <button>\r\n//           <svg\r\n//             width=\"12\"\r\n//             height=\"14\"\r\n//             viewBox=\"0 0 12 14\"\r\n//             fill=\"none\"\r\n//             xmlns=\"http://www.w3.org/2000/svg\"\r\n//           >\r\n//             <path\r\n//               d=\"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\"\r\n//               fill=\"#999999\"\r\n//             />\r\n//           </svg>\r\n//           <span>Поделиться</span>\r\n//         </button>\r\n//       </li>\r\n//       <li className={styles.popupItem} id={'mobile-visible'}>\r\n//         <button>\r\n//           <svg\r\n//             width=\"14\"\r\n//             height=\"14\"\r\n//             viewBox=\"0 0 14 14\"\r\n//             fill=\"none\"\r\n//             xmlns=\"http://www.w3.org/2000/svg\"\r\n//           >\r\n//             <path\r\n//               d=\"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\"\r\n//               fill=\"#999999\"\r\n//             />\r\n//           </svg>\r\n//           <span>Скрыть</span>\r\n//         </button>\r\n//       </li>\r\n//       <li className={styles.popupItem}>\r\n//         <button>\r\n//           <svg\r\n//             width=\"14\"\r\n//             height=\"14\"\r\n//             viewBox=\"0 0 14 14\"\r\n//             fill=\"none\"\r\n//             xmlns=\"http://www.w3.org/2000/svg\"\r\n//           >\r\n//             <path\r\n//               d=\"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\"\r\n//               fill=\"#979797\"\r\n//             />\r\n//           </svg>\r\n//           <span>Сохранить</span>\r\n//         </button>\r\n//       </li>\r\n//       <li className={styles.popupItem} id={'mobile-visible'}>\r\n//         <button>\r\n//           <svg\r\n//             width=\"16\"\r\n//             height=\"14\"\r\n//             viewBox=\"0 0 16 14\"\r\n//             fill=\"none\"\r\n//             xmlns=\"http://www.w3.org/2000/svg\"\r\n//           >\r\n//             <path\r\n//               d=\"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.84211H7.27273V5.89474H8.72727V8.84211Z\"\r\n//               fill=\"#999999\"\r\n//             />\r\n//           </svg>\r\n//           <span>Пожаловаться</span>\r\n//         </button>\r\n//       </li>\r\n//       <li className={styles.popupItem} id={'mobile-visible'}>\r\n//         <button><span>Закрыть</span></button>\r\n//       </li>\r\n//     </ul>\r\n//   );\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Popup/Popup.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Popup/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/Card/Popup/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Popup */ \"./src/shared/CardsList/Card/Popup/Popup.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Popup/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Popup/popup.css":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/Popup/popup.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"popupList\": \"popup__popupList--2I0mR\",\n\t\"popupItem\": \"popup__popupItem--2t4Yt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Popup/popup.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var imgPath = _a.imgPath;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview }, imgPath && imgPath.includes('http') ? (react_1.default.createElement(\"img\", { src: imgPath, alt: \"preview\", className: preview_css_1.default.previewImg })) :\r\n        (react_1.default.createElement(\"img\", { src: \"https://cdn.dribbble.com/users/59947/screenshots/17108611/media/921dde07080f3340eb85517a75e55159.jpg\", alt: \"preview\", className: preview_css_1.default.previewImg }))));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--1Nukb\",\n\t\"previewImg\": \"preview__previewImg--3kTAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/SaveButton.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/SaveButton.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ \"./src/shared/CardsList/Card/SaveButton/savebutton.css\"));\r\nfunction SaveButton() {\r\n    return (react_1.default.createElement(\"button\", { className: savebutton_css_1.default.saveButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))));\r\n}\r\nexports.SaveButton = SaveButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/SaveButton/SaveButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/SaveButton/savebutton.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/SaveButton/savebutton.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ShareButton/ShareButton.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/ShareButton/ShareButton.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/CardsList/Card/ShareButton/sharebutton.css\"));\r\nfunction ShareButton() {\r\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.shareButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))));\r\n}\r\nexports.ShareButton = ShareButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ShareButton/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/ShareButton/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/ShareButton/ShareButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ShareButton/sharebutton.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/ShareButton/sharebutton.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\r\nfunction TextContent(_a) {\r\n    var dataAuthor = _a.dataAuthor, dataTitle = _a.dataTitle, dataUrl = _a.dataUrl;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_css_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { src: 'https://habrastorage.org/r/w60/webt/5f/dd/3f/5fdd3f0eec392098725544.png', className: textcontent_css_1.default.avatar }),\r\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: textcontent_css_1.default.username }, dataAuthor || 'Константин Кодов')),\r\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt }, \"\".concat(Math.round(Math.random() * 10), \" \\u0447\\u0430\\u0441. \\u043D\\u0430\\u0437\\u0430\\u0434\"))),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_css_1.default.title },\r\n            react_1.default.createElement(\"a\", { href: dataUrl ? \"https://www.reddit.com\".concat(dataUrl) : \"#postUrl\", className: textcontent_css_1.default.postLink }, dataTitle || 'Реплицированные с зарубежных источников'))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textcontent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--2RuXa\",\n\t\"metaData\": \"textcontent__metaData--1L7oU\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--C6Pau\",\n\t\"createdAt\": \"textcontent__createdAt--1vECY\",\n\t\"userBox\": \"textcontent__userBox--27G8p\",\n\t\"avatarBox\": \"textcontent__avatarBox--2okhS\",\n\t\"avatarImage\": \"textcontent__avatarImage--oiGfT\",\n\t\"username\": \"textcontent__username--1Pcvf\",\n\t\"userLink\": \"textcontent__userLink--2KE4t\",\n\t\"avatar\": \"textcontent__avatar--26Ggp\",\n\t\"title\": \"textcontent__title--1gTmn\",\n\t\"postLink\": \"textcontent__postLink--11qrP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar postsContext_1 = __webpack_require__(/*! ../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar generateRandomString_1 = __webpack_require__(/*! ../utils/generateRandomString */ \"./src/shared/utils/generateRandomString.ts\");\r\nvar ModalMain_1 = __webpack_require__(/*! ../ModalMain */ \"./src/shared/ModalMain/index.ts\");\r\nfunction CardsList() {\r\n    var dataResponce = (0, react_1.useContext)(postsContext_1.postsContext);\r\n    var _a = (0, react_1.useState)(false), isModalOpen = _a[0], setModalOpen = _a[1];\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"h2\", { className: cardslist_css_1.default.title }, \"\\u041A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0430-\\u0437\\u0430\\u0433\\u043B\\u0443\\u0448\\u043A\\u0430 \\u043F\\u043E\\u0441\\u0442\\u0430\"),\r\n        react_1.default.createElement(Card_1.Card, null),\r\n        react_1.default.createElement(\"h2\", { className: cardslist_css_1.default.title },\r\n            \"\\u041F\\u0440\\u0438\\u043C\\u0435\\u0440 \\u043C\\u043E\\u0434\\u0430\\u043B\\u043A\\u0438 \\u0447\\u0435\\u0440\\u0435\\u0437 Portal\",\r\n            react_1.default.createElement(\"br\", null),\r\n            \"c \\u0437\\u0430\\u043A\\u0440\\u044B\\u0442\\u0438\\u0435\\u043C \\u0447\\u0435\\u0440\\u0435\\u0437 Ref \\u043F\\u043E \\u043A\\u043B\\u0438\\u043A\\u0443 \\u0432\\u043D\\u0435 \\u043C\\u043E\\u0434\\u0430\\u043B\\u043A\\u0438\"),\r\n        react_1.default.createElement(\"button\", { className: cardslist_css_1.default.btnModal, onClick: function () { setModalOpen(true); } }, \"\\u041E\\u0442\\u043A\\u0440\\u044B\\u0442\\u044C\"),\r\n        isModalOpen && (react_1.default.createElement(ModalMain_1.ModalMain, { onClose: function () { setModalOpen(false); } })),\r\n        react_1.default.createElement(\"h2\", { className: cardslist_css_1.default.title }, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A-\\u0440\\u0435\\u043F\\u043B\\u0438\\u043A\\u0430\\u0446\\u0438\\u044F \\u0442\\u0435\\u043A\\u0443\\u0449\\u0438\\u0445 \\u043F\\u043E\\u043F\\u0443\\u043B\\u044F\\u0440\\u043D\\u044B\\u0445 \\u043F\\u043E\\u0441\\u0442\\u043E\\u0432 \\u0441 Reddit.com\"),\r\n        react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList }, dataResponce.length ? (dataResponce.map(function (item, index) { return (react_1.default.createElement(\"li\", { key: (0, generateRandomString_1.generateRandomString)() },\r\n            react_1.default.createElement(Card_1.Card, { dataAuthor: item.data.author, dataTitle: item.data.title, imgPath: item.data.thumbnail, dataUrl: item.data.permalink }))); })) : (react_1.default.createElement(\"li\", null,\r\n            react_1.default.createElement(\"span\", { style: { display: \"block\", width: \"max-content\", margin: \"10px auto\", fontSize: \"20px\", color: \"red\" } }, \"\\u0418\\u0434\\u0451\\u0442 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \\u043F\\u043E\\u0441\\u0442\\u043E\\u0432...\"))))));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\",\n\t\"title\": \"cardslist__title--3YoHe\",\n\t\"btnModal\": \"cardslist__btnModal--DBewl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsListNew/CardsListNew.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CardsListNew/CardsListNew.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsListNew = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslistnew_css_1 = __importDefault(__webpack_require__(/*! ./cardslistnew.css */ \"./src/shared/CardsListNew/cardslistnew.css\"));\r\nvar generateRandomString_1 = __webpack_require__(/*! ../utils/generateRandomString */ \"./src/shared/utils/generateRandomString.ts\");\r\nvar Card_1 = __webpack_require__(/*! ../CardsList/Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction CardsListNew() {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];\r\n    var _c = (0, react_1.useState)(''), errorLoading = _c[0], setErrorLoading = _c[1];\r\n    var bottomOfList = (0, react_1.useRef)(null);\r\n    var _d = (0, react_1.useState)(''), nextAfter = _d[0], setNextAfter = _d[1];\r\n    var _e = (0, react_1.useState)(0), count = _e[0], setCount = _e[1];\r\n    (0, react_1.useEffect)(function () {\r\n        // тут через асинк запрос, для примера\r\n        function load() {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var _a, after, children_1, error_1;\r\n                return __generator(this, function (_b) {\r\n                    switch (_b.label) {\r\n                        case 0:\r\n                            setErrorLoading('');\r\n                            _b.label = 1;\r\n                        case 1:\r\n                            _b.trys.push([1, 3, , 4]);\r\n                            return [4 /*yield*/, axios_1.default.get(\"https://oauth.reddit.com/rising.json\", {\r\n                                    headers: { Authorization: \"bearer \".concat(token) },\r\n                                    params: {\r\n                                        //количество постов в списке(по дефолту их 25)\r\n                                        limit: 10,\r\n                                        // чтобы была подгрузка нового, а не дубль старой порции постов\r\n                                        after: nextAfter\r\n                                    },\r\n                                })];\r\n                        case 2:\r\n                            _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;\r\n                            setCount(count + 1);\r\n                            console.log(count);\r\n                            setNextAfter(after);\r\n                            //ВАЖНО! Передача колбека внутри сеттера. С обращением к предыдущему состоянию, чтобы не затирать его, а добавлять к нему.\r\n                            setData(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });\r\n                            return [3 /*break*/, 4];\r\n                        case 3:\r\n                            error_1 = _b.sent();\r\n                            console.error(error_1);\r\n                            setErrorLoading(String(error_1));\r\n                            return [3 /*break*/, 4];\r\n                        case 4:\r\n                            setLoading(false);\r\n                            return [2 /*return*/];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n        //Обсёрвер наблюдает за скроллом.\r\n        var observer = new IntersectionObserver(function (enteries) {\r\n            if (enteries[0].isIntersecting && count < 2) {\r\n                load();\r\n            }\r\n        }, { rootMargin: '10px' });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, nextAfter, token, count]);\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"h2\", { className: cardslistnew_css_1.default.title }, \"\\u041F\\u0440\\u0438\\u043C\\u0435\\u0440 \\u043C\\u043E\\u0434\\u0430\\u043B\\u043A\\u0438 \\u0447\\u0435\\u0440\\u0435\\u0437 React-router\"),\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/list/modal/\", className: cardslistnew_css_1.default.btnModal }, \"\\u041E\\u0442\\u043A\\u0440\\u044B\\u0442\\u044C\"),\r\n        react_1.default.createElement(\"h2\", { className: cardslistnew_css_1.default.title }, \"\\u0421\\u043F\\u0438\\u0441\\u043E\\u043A-\\u0440\\u0435\\u043F\\u043B\\u0438\\u043A\\u0430\\u0446\\u0438\\u044F \\u043F\\u043E\\u0441\\u0442\\u043E\\u0432 \\u0441 Reddit.com \\u043A\\u0430\\u043A \\\"\\u0431\\u0435\\u0441\\u043A\\u043E\\u043D\\u0435\\u0447\\u043D\\u044B\\u0439 \\u0441\\u043F\\u0438\\u0441\\u043E\\u043A\\\" \\u0441 \\u043F\\u043E\\u0434\\u0433\\u0440\\u0443\\u0437\\u043A\\u043E\\u0439\"),\r\n        react_1.default.createElement(\"ul\", { className: cardslistnew_css_1.default.cardsList },\r\n            data.map(function (item) { return (react_1.default.createElement(\"li\", { key: (0, generateRandomString_1.generateRandomString)() },\r\n                react_1.default.createElement(Card_1.Card, { dataAuthor: item.data.author, dataTitle: item.data.title, imgPath: item.data.thumbnail, dataUrl: item.data.permalink }))); }),\r\n            react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n            count === 2 && (react_1.default.createElement(\"button\", { style: { display: \"block\", width: \"max-content\", margin: \"10px auto\", padding: \"5px 10px\", fontSize: \"20px\", color: \"red\", border: \"2px solid blue\", borderRadius: \"5px\" }, onClick: function () { setCount(0); } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0451\")),\r\n            (count < 2 || loading) && (react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(\"span\", { style: { display: \"block\", width: \"max-content\", margin: \"10px auto\", fontSize: \"20px\", color: \"red\" } }, \"\\u0418\\u0434\\u0451\\u0442 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \\u043F\\u043E\\u0441\\u0442\\u043E\\u0432...\"))),\r\n            errorLoading && !loading && (react_1.default.createElement(\"li\", null,\r\n                react_1.default.createElement(\"span\", { role: 'alert', style: { display: \"block\", width: \"max-content\", margin: \"10px auto\", fontSize: \"20px\", color: \"red\" } }, errorLoading))))));\r\n}\r\nexports.CardsListNew = CardsListNew;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsListNew/CardsListNew.tsx?");

/***/ }),

/***/ "./src/shared/CardsListNew/cardslistnew.css":
/*!**************************************************!*\
  !*** ./src/shared/CardsListNew/cardslistnew.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslistnew__cardsList--NY_Xb\",\n\t\"title\": \"cardslistnew__title--2VXYI\",\n\t\"btnModal\": \"cardslistnew__btnModal--Ya9X_\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsListNew/cardslistnew.css?");

/***/ }),

/***/ "./src/shared/CardsListNew/index.ts":
/*!******************************************!*\
  !*** ./src/shared/CardsListNew/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsListNew */ \"./src/shared/CardsListNew/CardsListNew.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsListNew/index.ts?");

/***/ }),

/***/ "./src/shared/CommentElement/CommentElement.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CommentElement/CommentElement.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentElement = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentelement_css_1 = __importDefault(__webpack_require__(/*! ./commentelement.css */ \"./src/shared/CommentElement/commentelement.css\"));\r\nfunction CommentElement(_a) {\r\n    // Логика вынесена в умный компонент-контейнер - CommentElementContainer\r\n    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit, comment = _a.comment;\r\n    // const store = useStore<RootState>();\r\n    // const value = store.getState().commentText;\r\n    // заменяет две строчки выше\r\n    // const value = useSelector<RootState, string>(state => state.commentText)\r\n    // const dispatch = useDispatch();\r\n    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {\r\n    //   dispatch(updateComment(event.target.value));\r\n    // }\r\n    // //- для комментария\r\n    // const [comment, setComment] = useState(\"\");\r\n    // function handleSubmit(event: FormEvent) {\r\n    //   event.preventDefault();\r\n    //   setComment(value);\r\n    // }\r\n    return (react_1.default.createElement(\"div\", { className: commentelement_css_1.default.container },\r\n        react_1.default.createElement(\"h3\", null, \"\\u0423\\u043F\\u0440\\u0430\\u0432\\u043B\\u044F\\u0435\\u043C\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435 \\u0432\\u0432\\u043E\\u0434\\u0430 \\u0441 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0435\\u043C \\u0432\\u0432\\u0435\\u0434\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E store Redux\"),\r\n        react_1.default.createElement(\"form\", { className: commentelement_css_1.default.form, onSubmit: onSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: commentelement_css_1.default.input, value: value, onChange: onChange }),\r\n            react_1.default.createElement(\"button\", { className: commentelement_css_1.default.btn, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: commentelement_css_1.default.comment }, comment)));\r\n}\r\nexports.CommentElement = CommentElement;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentElement/CommentElement.tsx?");

/***/ }),

/***/ "./src/shared/CommentElement/commentelement.css":
/*!******************************************************!*\
  !*** ./src/shared/CommentElement/commentelement.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"commentelement__title--1EtcP\",\n\t\"input\": \"commentelement__input--1aEqw\",\n\t\"btn\": \"commentelement__btn--xuwJ-\",\n\t\"container\": \"commentelement__container--bNeI7\",\n\t\"form\": \"commentelement__form--2hpce\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentElement/commentelement.css?");

/***/ }),

/***/ "./src/shared/CommentElement/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CommentElement/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentElement */ \"./src/shared/CommentElement/CommentElement.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentElement/index.ts?");

/***/ }),

/***/ "./src/shared/CommentElementContainer/CommentElementContainer.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CommentElementContainer/CommentElementContainer.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentElementContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\r\nvar CommentElement_1 = __webpack_require__(/*! ../CommentElement */ \"./src/shared/CommentElement/index.ts\");\r\nfunction CommentElementContainer() {\r\n    // const store = useStore<RootState>();\r\n    // const value = store.getState().commentText;\r\n    // заменяет две строчки выше\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    function handleChange(event) {\r\n        dispatch((0, reducer_1.updateComment)(event.target.value));\r\n    }\r\n    //- для комментария\r\n    var _a = (0, react_1.useState)(\"\"), comment = _a[0], setComment = _a[1];\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        setComment(value);\r\n    }\r\n    return (react_1.default.createElement(CommentElement_1.CommentElement, { value: value, onChange: handleChange, onSubmit: handleSubmit, comment: comment }));\r\n}\r\nexports.CommentElementContainer = CommentElementContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentElementContainer/CommentElementContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentElementContainer/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CommentElementContainer/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentElementContainer */ \"./src/shared/CommentElementContainer/CommentElementContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentElementContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children);\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar useCloseModal_1 = __webpack_require__(/*! ../../hooks/useCloseModal */ \"./src/hooks/useCloseModal.ts\");\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(false), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var ref = (0, react_1.useRef)(null);\r\n    // useEffect(()=>{\r\n    //   function handleClick(event:MouseEvent) {\r\n    //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {\r\n    //       setIsDropdownOpen(false);\r\n    //     }\r\n    //   }\r\n    //   document.addEventListener('click', handleClick)\r\n    //   return () => {\r\n    //     document.removeEventListener('click', handleClick)\r\n    //   }\r\n    // },[]);\r\n    (0, useCloseModal_1.useCloseModal)(function () { return setIsDropdownOpen(false); }, ref);\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container, ref: ref },\r\n        react_1.default.createElement(\"div\", { onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Examples.tsx":
/*!*********************************!*\
  !*** ./src/shared/Examples.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ExamplesComponent = exports.Dropdown = exports.assoc = exports.MyList = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar examples_css_1 = __importDefault(__webpack_require__(/*! ./examples.css */ \"./src/shared/examples.css\"));\r\nvar concatText = function (arg1, arg2) {\r\n    var result = \"\".concat(arg1, \" \").concat(arg2);\r\n    return result;\r\n};\r\nvar MyHometask = {\r\n    howIDoIt: \"I Do It Wel\",\r\n    simeArray: [\"string one\", \"string two\", 42],\r\n    withData: [{ howIDoIt: \"I Do It Wel\", simeArray: [\"string one\", 23] }],\r\n};\r\nvar someArray = [10, 20, 30, 40, 50];\r\nvar result = someArray.reduce(function (initialValue, currentValue) { return initialValue + currentValue; }, 300);\r\n//-------------- Карирование пример\r\nfunction add(left) {\r\n    return function (right) { return left + right; };\r\n}\r\n// то же, но стрелкой\r\nvar add2 = function (left) { return function (right) { return left + right; }; };\r\nvar addOne = add(1);\r\nfunction MyList(_a) {\r\n    var list = _a.list;\r\n    return (React.createElement(\"ul\", null, list.map(function (item) { return (React.createElement(\"li\", { onClick: item.onClick, key: item.id }, item.value)); })));\r\n}\r\nexports.MyList = MyList;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    }; // необязательный хвост\r\n}\r\nexports.assoc = assoc;\r\n// Генерация случайных строк для ключей \r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nvar assignId = assoc('id', generateRandomString());\r\nvar generateId = function (obj) { return assoc('id', generateRandomString())(obj); };\r\nvar LIST = [\r\n    { value: 'some' },\r\n    { value: 'some1' },\r\n    { value: 'some2' }\r\n].map(generateId);\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\r\n    var _d = React.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    React.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    React.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (React.createElement(\"div\", null,\r\n        React.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && (React.createElement(\"div\", null,\r\n            React.createElement(\"div\", { onClick: function () { return setIsDropdownOpen(false); } }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\nfunction ExamplesComponent() {\r\n    var _a = React.useState(LIST), list = _a[0], setList = _a[1];\r\n    var handleItemClick = function (id) {\r\n        setList(list.filter(function (item) { return item.id !== id; }));\r\n    };\r\n    var handleAdd = function () {\r\n        var _a;\r\n        setList(list.concat(generateId({ value: ((_a = document.querySelector('input')) === null || _a === void 0 ? void 0 : _a.value) || generateRandomString() })));\r\n    };\r\n    return (React.createElement(\"div\", null,\r\n        React.createElement(\"h1\", { className: examples_css_1.default.example }, \"Hello React\"),\r\n        React.createElement(\"p\", { className: examples_css_1.default.example }, concatText(\"превед\", \"медвед\")),\r\n        React.createElement(\"p\", { className: examples_css_1.default.example }, result),\r\n        React.createElement(\"p\", { className: examples_css_1.default.example }, add(1)(2)),\r\n        React.createElement(\"p\", { className: examples_css_1.default.example }, addOne(5)),\r\n        React.createElement(\"p\", { className: examples_css_1.default.example }, generateRandomString()),\r\n        React.createElement(\"input\", null),\r\n        React.createElement(\"button\", { onClick: handleAdd }, \"Add element\"),\r\n        React.createElement(MyList, { list: list.map(function (item) { return (__assign(__assign({}, item), { onClick: function () { return handleItemClick(item.id); } })); }) }),\r\n        React.createElement(\"br\", null),\r\n        React.createElement(Dropdown, { onClose: function () { return console.log('close'); }, onOpen: function () { return console.log('open'); }, button: React.createElement(\"button\", null, \"test\") },\r\n            React.createElement(\"ul\", null,\r\n                React.createElement(\"li\", { onClick: console.log }, \"1\")))));\r\n}\r\nexports.ExamplesComponent = ExamplesComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Examples.tsx?");

/***/ }),

/***/ "./src/shared/FormTestElement/FormTestElement.tsx":
/*!********************************************************!*\
  !*** ./src/shared/FormTestElement/FormTestElement.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FormTestElement = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar formtestelement_css_1 = __importDefault(__webpack_require__(/*! ./formtestelement.css */ \"./src/shared/FormTestElement/formtestelement.css\"));\r\nfunction FormTestElement() {\r\n    var _a = (0, react_1.useState)(''), comment = _a[0], setComment = _a[1];\r\n    var _b = (0, react_1.useState)(''), value = _b[0], setValue = _b[1];\r\n    var _c = (0, react_1.useState)(false), touched = _c[0], setTouched = _c[1];\r\n    var _d = (0, react_1.useState)(false), validateError = _d[0], setValidateError = _d[1];\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        setTouched(true);\r\n        if (value.length <= 3) {\r\n            setValidateError(true);\r\n        }\r\n        else {\r\n            setComment(value);\r\n        }\r\n    }\r\n    function handleChange(event) {\r\n        setValue(event.target.value);\r\n        if (validateError && value.length >= 3) {\r\n            setValidateError(false);\r\n        }\r\n    }\r\n    function validateValue() {\r\n        if (value.length <= 3) {\r\n            return 'Введите больше 3х символов!';\r\n        }\r\n        return '';\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: formtestelement_css_1.default.container },\r\n        react_1.default.createElement(\"h3\", null, \"\\u0423\\u043F\\u0440\\u0430\\u0432\\u043B\\u044F\\u0435\\u043C\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435 \\u0432\\u0432\\u043E\\u0434\\u0430 \\u0441 \\u0432\\u0430\\u043B\\u0438\\u0434\\u0430\\u0446\\u0438\\u0435\\u0439 \\u0441\\u0440\\u0435\\u0434\\u0441\\u0442\\u0432\\u0430\\u043C\\u0438 React\"),\r\n        react_1.default.createElement(\"form\", { className: formtestelement_css_1.default.form, onSubmit: handleSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: formtestelement_css_1.default.input, value: value, onChange: handleChange, \"aria-invalid\": validateError }),\r\n            touched && validateValue() && (react_1.default.createElement(\"div\", { className: formtestelement_css_1.default.validate }, validateValue())),\r\n            react_1.default.createElement(\"button\", { className: formtestelement_css_1.default.btn, type: \"submit\", disabled: validateError }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: formtestelement_css_1.default.comment }, comment)));\r\n}\r\nexports.FormTestElement = FormTestElement;\r\n\n\n//# sourceURL=webpack:///./src/shared/FormTestElement/FormTestElement.tsx?");

/***/ }),

/***/ "./src/shared/FormTestElement/formtestelement.css":
/*!********************************************************!*\
  !*** ./src/shared/FormTestElement/formtestelement.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"formtestelement__title--151uh\",\n\t\"input\": \"formtestelement__input--gCCxn\",\n\t\"btn\": \"formtestelement__btn--2NXdB\",\n\t\"container\": \"formtestelement__container--1PtCD\",\n\t\"form\": \"formtestelement__form--1xj8f\",\n\t\"validate\": \"formtestelement__validate--jcQhS\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/FormTestElement/formtestelement.css?");

/***/ }),

/***/ "./src/shared/FormTestElement/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/FormTestElement/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./FormTestElement */ \"./src/shared/FormTestElement/FormTestElement.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/FormTestElement/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar NavBlock_1 = __webpack_require__(/*! ./NavBlock */ \"./src/shared/Header/NavBlock/index.ts\");\r\nvar LogoArea_1 = __webpack_require__(/*! ./LogoArea */ \"./src/shared/Header/LogoArea/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"div\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(LogoArea_1.LogoArea, null),\r\n        react_1.default.createElement(NavBlock_1.NavBlock, null),\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/LogoArea/LogoArea.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Header/LogoArea/LogoArea.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LogoArea = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar logoarea_css_1 = __importDefault(__webpack_require__(/*! ./logoarea.css */ \"./src/shared/Header/LogoArea/logoarea.css\"));\r\nvar IconComponent_1 = __webpack_require__(/*! ../../IconComponent */ \"./src/shared/IconComponent/index.ts\");\r\nfunction LogoArea() {\r\n    return (react_1.default.createElement(\"div\", { className: logoarea_css_1.default.container },\r\n        react_1.default.createElement(IconComponent_1.IconComponent, { name: 'IconLogo' }),\r\n        react_1.default.createElement(\"p\", { className: logoarea_css_1.default.text }, \"\\u0422\\u0440\\u0435\\u043D\\u0438\\u0440\\u043E\\u0432\\u043E\\u0447\\u043D\\u044B\\u0439 \\u043F\\u0440\\u043E\\u0435\\u043A\\u0442 \\u043F\\u043E \\u043A\\u0443\\u0440\\u0441\\u0443 React JS\")));\r\n}\r\nexports.LogoArea = LogoArea;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/LogoArea/LogoArea.tsx?");

/***/ }),

/***/ "./src/shared/Header/LogoArea/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Header/LogoArea/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./LogoArea */ \"./src/shared/Header/LogoArea/LogoArea.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/LogoArea/index.ts?");

/***/ }),

/***/ "./src/shared/Header/LogoArea/logoarea.css":
/*!*************************************************!*\
  !*** ./src/shared/Header/LogoArea/logoarea.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"logoarea__container--Mxt5_\",\n\t\"text\": \"logoarea__text--3JNd6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/LogoArea/logoarea.css?");

/***/ }),

/***/ "./src/shared/Header/NavBlock/NavBlock.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Header/NavBlock/NavBlock.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NavBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar navblock_css_1 = __importDefault(__webpack_require__(/*! ./navblock.css */ \"./src/shared/Header/NavBlock/navblock.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction NavBlock() {\r\n    return (react_1.default.createElement(\"nav\", { className: navblock_css_1.default.nav },\r\n        react_1.default.createElement(\"ul\", { className: navblock_css_1.default.list },\r\n            react_1.default.createElement(\"li\", { className: navblock_css_1.default.item },\r\n                react_1.default.createElement(react_router_dom_1.NavLink, { to: \"/\", className: function (_a) {\r\n                        var isActive = _a.isActive, isPending = _a.isPending;\r\n                        return isPending ? \"btnNavPending\" : isActive ? \"btnNavActive\" : \"\";\r\n                    } }, \"\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F\")),\r\n            react_1.default.createElement(\"li\", { className: navblock_css_1.default.item },\r\n                react_1.default.createElement(react_router_dom_1.NavLink, { to: \"/list/\", className: function (_a) {\r\n                        var isActive = _a.isActive, isPending = _a.isPending;\r\n                        return isPending ? \"btnNavPending\" : isActive ? \"btnNavActive\" : \"\";\r\n                    } }, \"\\u0411\\u0435\\u0441\\u043A\\u043E\\u043D\\u0435\\u0447\\u043D\\u044B\\u0439 \\u0441\\u043F\\u0438\\u0441\\u043E\\u043A\")),\r\n            react_1.default.createElement(\"li\", { className: navblock_css_1.default.item },\r\n                react_1.default.createElement(react_router_dom_1.NavLink, { to: \"/examples/\", className: function (_a) {\r\n                        var isActive = _a.isActive, isPending = _a.isPending;\r\n                        return isPending ? \"btnNavPending\" : isActive ? \"btnNavActive\" : \"\";\r\n                    } }, \"\\u0427\\u0435\\u0440\\u043D\\u043E\\u0432\\u044B\\u0435 \\u043F\\u0440\\u0438\\u043C\\u0435\\u0440\\u044B\")))));\r\n}\r\nexports.NavBlock = NavBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/NavBlock/NavBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/NavBlock/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Header/NavBlock/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NavBlock */ \"./src/shared/Header/NavBlock/NavBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/NavBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/NavBlock/navblock.css":
/*!*************************************************!*\
  !*** ./src/shared/Header/NavBlock/navblock.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"nav\": \"navblock__nav--1FBsv\",\n\t\"list\": \"navblock__list--rowDf\",\n\t\"item\": \"navblock__item--2VnnI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/NavBlock/navblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nfunction SearchBlock() {\r\n    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.search },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar IconComponent_1 = __webpack_require__(/*! ../../../IconComponent */ \"./src/shared/IconComponent/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=\".concat('undefined', \"&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\"), className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"User avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(IconComponent_1.IconComponent, { name: \"IconAnon\" })),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username }, loading ? (react_1.default.createElement(\"span\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : react_1.default.createElement(\"span\", null, username || \"Аноним\"))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"search\": \"searchblock__search--1qP76\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/IconComponent/IconComponent.tsx":
/*!****************************************************!*\
  !*** ./src/shared/IconComponent/IconComponent.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconComponent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar iconcomponent_css_1 = __importDefault(__webpack_require__(/*! ./iconcomponent.css */ \"./src/shared/IconComponent/iconcomponent.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nvar icons = { \"IconComment\": icons_1.IconComment, \"IconShare\": icons_1.IconShare, \"IconHidden\": icons_1.IconHidden,\r\n    \"IconSave\": icons_1.IconSave, \"IconComplain\": icons_1.IconComplain, \"IconMenu\": icons_1.IconMenu, \"IconAnon\": icons_1.IconAnon, \"IconLogo\": icons_1.IconLogo };\r\nfunction IconComponent(_a) {\r\n    var name = _a.name, size = _a.size;\r\n    var classes = (0, classnames_1.default)(iconcomponent_css_1.default[\"iconSize\".concat(size)]);\r\n    var element = icons[name];\r\n    return react_1.default.createElement(\"span\", { className: classes }, element);\r\n}\r\nexports.IconComponent = IconComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/IconComponent/IconComponent.tsx?");

/***/ }),

/***/ "./src/shared/IconComponent/iconcomponent.css":
/*!****************************************************!*\
  !*** ./src/shared/IconComponent/iconcomponent.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"iconSize16\": \"iconcomponent__iconSize16--24h3k\",\n\t\"iconSize15\": \"iconcomponent__iconSize15--2D_gA\",\n\t\"iconSize14\": \"iconcomponent__iconSize14--1uO2c\",\n\t\"iconSize12\": \"iconcomponent__iconSize12--mJDJ0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/IconComponent/iconcomponent.css?");

/***/ }),

/***/ "./src/shared/IconComponent/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/IconComponent/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./IconComponent */ \"./src/shared/IconComponent/IconComponent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/IconComponent/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/ModalAdd/ModalAdd.tsx":
/*!******************************************!*\
  !*** ./src/shared/ModalAdd/ModalAdd.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ModalAdd = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar modaladd_css_1 = __importDefault(__webpack_require__(/*! ./modaladd.css */ \"./src/shared/ModalAdd/modaladd.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar useCloseModal_1 = __webpack_require__(/*! ../../hooks/useCloseModal */ \"./src/hooks/useCloseModal.ts\");\r\nvar commentContext_1 = __webpack_require__(/*! ../context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar CommentElementContainer_1 = __webpack_require__(/*! ../CommentElementContainer */ \"./src/shared/CommentElementContainer/index.ts\");\r\nvar FormTestElement_1 = __webpack_require__(/*! ../FormTestElement */ \"./src/shared/FormTestElement/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction ModalAdd(props) {\r\n    var ref = (0, react_1.useRef)(null);\r\n    var history = (0, react_router_dom_1.useNavigate)();\r\n    (0, useCloseModal_1.useCloseModal)(function () { history('/list/'); }, ref);\r\n    var node = document.querySelector(\"#modal_root\");\r\n    if (!node) {\r\n        return null;\r\n    }\r\n    // для неуправляемого инпута\r\n    var commentDefault = null;\r\n    var refInputUncontroled = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        (_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, []);\r\n    var _a = (0, react_1.useState)(\"\"), comment = _a[0], setComment = _a[1];\r\n    function handleSubmit(event) {\r\n        var _a, _b;\r\n        event.preventDefault();\r\n        console.log((_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.value);\r\n        setComment(\"\".concat((_b = refInputUncontroled.current) === null || _b === void 0 ? void 0 : _b.value));\r\n    }\r\n    //---------------------------------------------------------------------\r\n    var _b = (0, react_1.useContext)(commentContext_1.commentContext), valueControled = _b.valueControled, onChange = _b.onChange;\r\n    function handleChange(event) {\r\n        onChange(event.target.value);\r\n    }\r\n    var _c = (0, react_1.useState)(\"\"), commentControled = _c[0], setCommentControled = _c[1];\r\n    function handleSubmitControlled(event) {\r\n        event.preventDefault();\r\n        setCommentControled(valueControled);\r\n    }\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: modaladd_css_1.default.modalMain, ref: ref },\r\n        react_1.default.createElement(\"h2\", { className: modaladd_css_1.default.title },\r\n            \"\\u041F\\u0440\\u0438\\u043C\\u0435\\u0440 \\u043C\\u043E\\u0434\\u0430\\u043B\\u043A\\u0438 \\u0447\\u0435\\u0440\\u0435\\u0437 React-router\",\r\n            react_1.default.createElement(\"br\", null),\r\n            react_1.default.createElement(\"span\", null, \"\\u041E\\u043A\\u043D\\u043E \\u043E\\u0442\\u043A\\u0440\\u044B\\u0432\\u0430\\u0435\\u0442\\u0441\\u044F/\\u0437\\u0430\\u043A\\u0440\\u044B\\u0432\\u0430\\u0435\\u0442\\u0441\\u044F \\u043F\\u043E \\u0440\\u043E\\u0443\\u0442\\u0443\")),\r\n        react_1.default.createElement(\"div\", { className: modaladd_css_1.default.container },\r\n            react_1.default.createElement(\"h3\", null, \"\\u041D\\u0435\\u0443\\u043F\\u0440\\u0430\\u0432\\u043B\\u044F\\u0435\\u043C\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435 \\u0432\\u0432\\u043E\\u0434\\u0430 \\u0441 focus \\u0447\\u0435\\u0440\\u0435\\u0437 ref\"),\r\n            react_1.default.createElement(\"form\", { className: modaladd_css_1.default.form, onSubmit: handleSubmit },\r\n                react_1.default.createElement(\"textarea\", { className: modaladd_css_1.default.input, ref: refInputUncontroled }),\r\n                react_1.default.createElement(\"button\", { className: modaladd_css_1.default.btn, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"div\", { className: modaladd_css_1.default.comment }, comment)),\r\n        react_1.default.createElement(\"div\", { className: modaladd_css_1.default.container },\r\n            react_1.default.createElement(\"h3\", null, \"\\u0423\\u043F\\u0440\\u0430\\u0432\\u043B\\u044F\\u0435\\u043C\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435 \\u0432\\u0432\\u043E\\u0434\\u0430 \\u0441 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0435\\u043C \\u0432\\u0432\\u0435\\u0434\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E  \\u0441 \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C\\u044E context\"),\r\n            react_1.default.createElement(\"form\", { className: modaladd_css_1.default.form, onSubmit: handleSubmitControlled },\r\n                react_1.default.createElement(\"textarea\", { className: modaladd_css_1.default.input, value: valueControled, onChange: handleChange }),\r\n                react_1.default.createElement(\"button\", { className: modaladd_css_1.default.btn, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"div\", { className: modaladd_css_1.default.comment }, commentControled)),\r\n        react_1.default.createElement(CommentElementContainer_1.CommentElementContainer, null),\r\n        react_1.default.createElement(FormTestElement_1.FormTestElement, null)), node);\r\n}\r\nexports.ModalAdd = ModalAdd;\r\n\n\n//# sourceURL=webpack:///./src/shared/ModalAdd/ModalAdd.tsx?");

/***/ }),

/***/ "./src/shared/ModalAdd/index.ts":
/*!**************************************!*\
  !*** ./src/shared/ModalAdd/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ModalAdd */ \"./src/shared/ModalAdd/ModalAdd.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/ModalAdd/index.ts?");

/***/ }),

/***/ "./src/shared/ModalAdd/modaladd.css":
/*!******************************************!*\
  !*** ./src/shared/ModalAdd/modaladd.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modalMain\": \"modaladd__modalMain--1V8FU\",\n\t\"title\": \"modaladd__title--2kSr7\",\n\t\"input\": \"modaladd__input--1W-6J\",\n\t\"btn\": \"modaladd__btn--2AIR4\",\n\t\"container\": \"modaladd__container--aNRKD\",\n\t\"form\": \"modaladd__form--2qwM4\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ModalAdd/modaladd.css?");

/***/ }),

/***/ "./src/shared/ModalMain/ModalMain.tsx":
/*!********************************************!*\
  !*** ./src/shared/ModalMain/ModalMain.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ModalMain = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar modalmain_css_1 = __importDefault(__webpack_require__(/*! ./modalmain.css */ \"./src/shared/ModalMain/modalmain.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar useCloseModal_1 = __webpack_require__(/*! ../../hooks/useCloseModal */ \"./src/hooks/useCloseModal.ts\");\r\nvar commentContext_1 = __webpack_require__(/*! ../context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar CommentElementContainer_1 = __webpack_require__(/*! ../CommentElementContainer */ \"./src/shared/CommentElementContainer/index.ts\");\r\nvar FormTestElement_1 = __webpack_require__(/*! ../FormTestElement */ \"./src/shared/FormTestElement/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction ModalMain(props) {\r\n    var ref = (0, react_1.useRef)(null);\r\n    // useEffect(()=>{\r\n    //   function handleClick(event:MouseEvent) {\r\n    //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {\r\n    //       props.onClose?.();\r\n    //     }\r\n    //   }\r\n    //   document.addEventListener('click', handleClick)\r\n    //   return () => {\r\n    //     document.removeEventListener('click', handleClick)\r\n    //   }\r\n    // },[]);\r\n    var history = (0, react_router_dom_1.useNavigate)();\r\n    // Заменяет код выше внешним хуком\r\n    (0, useCloseModal_1.useCloseModal)(function () { var _a; (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props); }, ref);\r\n    var node = document.querySelector(\"#modal_root\");\r\n    if (!node) {\r\n        return null;\r\n    }\r\n    // для неуправляемого инпута\r\n    var commentDefault = null;\r\n    var refInputUncontroled = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        (_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, []);\r\n    var _a = (0, react_1.useState)(\"\"), comment = _a[0], setComment = _a[1];\r\n    function handleSubmit(event) {\r\n        var _a, _b;\r\n        event.preventDefault();\r\n        console.log((_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.value);\r\n        setComment(\"\".concat((_b = refInputUncontroled.current) === null || _b === void 0 ? void 0 : _b.value));\r\n    }\r\n    //---------------------------------------------------------------------\r\n    // Для управляемого инпута\r\n    // const [valueControled, setValueControled] = useState(\"\"); //- вынесли наверх в App в контекст onChange заменяет setValueControled\r\n    var _b = (0, react_1.useContext)(commentContext_1.commentContext), valueControled = _b.valueControled, onChange = _b.onChange;\r\n    function handleChange(event) {\r\n        onChange(event.target.value);\r\n    }\r\n    var _c = (0, react_1.useState)(\"\"), commentControled = _c[0], setCommentControled = _c[1];\r\n    function handleSubmitControlled(event) {\r\n        event.preventDefault();\r\n        setCommentControled(valueControled);\r\n    }\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: modalmain_css_1.default.modalMain, ref: ref },\r\n        react_1.default.createElement(\"h2\", { className: modalmain_css_1.default.title }, \"\\u041F\\u0440\\u0438\\u043C\\u0435\\u0440 \\u043C\\u043E\\u0434\\u0430\\u043B\\u043A\\u0438 \\u0447\\u0435\\u0440\\u0435\\u0437 Portal\"),\r\n        react_1.default.createElement(\"div\", { className: modalmain_css_1.default.container },\r\n            react_1.default.createElement(\"h3\", null, \"\\u041D\\u0435\\u0443\\u043F\\u0440\\u0430\\u0432\\u043B\\u044F\\u0435\\u043C\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435 \\u0432\\u0432\\u043E\\u0434\\u0430 \\u0441 focus \\u0447\\u0435\\u0440\\u0435\\u0437 ref\"),\r\n            react_1.default.createElement(\"form\", { className: modalmain_css_1.default.form, onSubmit: handleSubmit },\r\n                react_1.default.createElement(\"textarea\", { className: modalmain_css_1.default.input, ref: refInputUncontroled }),\r\n                react_1.default.createElement(\"button\", { className: modalmain_css_1.default.btn, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"div\", { className: modalmain_css_1.default.comment }, comment)),\r\n        react_1.default.createElement(\"div\", { className: modalmain_css_1.default.container },\r\n            react_1.default.createElement(\"h3\", null, \"\\u0423\\u043F\\u0440\\u0430\\u0432\\u043B\\u044F\\u0435\\u043C\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435 \\u0432\\u0432\\u043E\\u0434\\u0430 \\u0441 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0435\\u043C \\u0432\\u0432\\u0435\\u0434\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E  \\u0441 \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C\\u044E context\"),\r\n            react_1.default.createElement(\"form\", { className: modalmain_css_1.default.form, onSubmit: handleSubmitControlled },\r\n                react_1.default.createElement(\"textarea\", { className: modalmain_css_1.default.input, value: valueControled, onChange: handleChange }),\r\n                react_1.default.createElement(\"button\", { className: modalmain_css_1.default.btn, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"div\", { className: modalmain_css_1.default.comment }, commentControled)),\r\n        react_1.default.createElement(CommentElementContainer_1.CommentElementContainer, null),\r\n        react_1.default.createElement(FormTestElement_1.FormTestElement, null)), node);\r\n}\r\nexports.ModalMain = ModalMain;\r\n\n\n//# sourceURL=webpack:///./src/shared/ModalMain/ModalMain.tsx?");

/***/ }),

/***/ "./src/shared/ModalMain/index.ts":
/*!***************************************!*\
  !*** ./src/shared/ModalMain/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ModalMain */ \"./src/shared/ModalMain/ModalMain.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/ModalMain/index.ts?");

/***/ }),

/***/ "./src/shared/ModalMain/modalmain.css":
/*!********************************************!*\
  !*** ./src/shared/ModalMain/modalmain.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modalMain\": \"modalmain__modalMain--1jPTT\",\n\t\"title\": \"modalmain__title--3jxiZ\",\n\t\"input\": \"modalmain__input--1LAYu\",\n\t\"btn\": \"modalmain__btn--3QAmf\",\n\t\"container\": \"modalmain__container--kfldN\",\n\t\"form\": \"modalmain__form--12F_n\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ModalMain/modalmain.css?");

/***/ }),

/***/ "./src/shared/context/commentContext.ts":
/*!**********************************************!*\
  !*** ./src/shared/context/commentContext.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.commentContext = react_1.default.createContext({\r\n    valueControled: '',\r\n    onChange: function () { }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/context/commentContext.ts?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\n// interface IUserContextData {\r\n//     name?: string;\r\n//     iconImg?: string;\r\n//   }\r\nexports.postsContext = react_1.default.createContext([]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = (0, usePostsData_1.usePostsData)()[0];\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: data }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var _b = (0, useUserData_1.useUserData)(), data = _b.data, loading = _b.loading;\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/examples.css":
/*!*********************************!*\
  !*** ./src/shared/examples.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"example\": \"examples__example--3HeCa\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/examples.css?");

/***/ }),

/***/ "./src/shared/icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.IconAnon = (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconComment.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/IconComment.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconComment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.IconComment = (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconComment.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconComplain.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/IconComplain.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconComplain = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.IconComplain = (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.84211H7.27273V5.89474H8.72727V8.84211Z\", fill: \"#999999\" })));\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconComplain.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconHidden.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/IconHidden.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconHidden = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.IconHidden = (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconHidden.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconLogo.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconLogo.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconLogo = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.IconLogo = (react_1.default.createElement(\"svg\", { width: \"99\", height: \"22\", viewBox: \"0 0 99 22\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { \"fill-rule\": \"evenodd\", \"clip-rule\": \"evenodd\", d: \"M13.7959 15.6815C13.7959 19.1368 11.0442 21.6426 6.67334 21.6426C4.1389 21.5724 1.73709 20.4944 0 18.6476L1.46179 17.0309C2.82998 18.3336 4.43982 19.5997 6.64441 19.5997C9.0932 19.5997 11.7334 18.2264 11.7334 15.7606C11.7334 13.7126 10.1057 12.3767 6.68525 11.3233C2.78744 10.1321 0.807471 8.51546 0.807471 5.47617C0.807471 2.46836 3.35326 0 6.9805 0C9.68966 0 11.3846 1.15462 13.0344 2.63003L11.5973 4.2254C10.1508 2.94399 8.77242 2.07526 7.0809 2.07526C4.98267 2.07526 2.91166 3.42814 2.91166 5.37577C2.91166 7.14046 3.92589 8.26446 7.50633 9.36037C10.7856 10.3703 13.7959 11.9351 13.7959 15.6806V15.6815ZM31.488 1.99285C31.488 2.94049 32.256 3.70871 33.2034 3.70871C33.6584 3.70893 34.0948 3.52823 34.4165 3.20639C34.7383 2.88456 34.9189 2.44799 34.9187 1.99285C34.9187 1.04521 34.1507 0.276995 33.2034 0.276995C32.256 0.276995 31.488 1.04521 31.488 1.99285ZM48.0876 0.628674H46.0199V21.3037H48.0876V0.628674ZM52.9131 20.6155C52.9131 20.6155 54.186 21.6493 58.4267 21.6493L58.4241 21.6485C62.6104 21.6485 66.0079 18.587 66.0079 14.4042C66.0079 10.2213 62.6129 7.17183 58.4267 7.17183C57.2392 7.14003 56.0603 7.38105 54.9807 7.87634V0.628674H52.9131V20.6155ZM68.4219 14.4223C68.4216 18.607 71.8138 21.9996 75.9988 22.0001C80.184 22.0001 83.577 18.6078 83.5774 14.4229C83.5774 10.2382 80.1849 6.84586 75.9999 6.8457C71.815 6.84555 68.4222 10.2377 68.4219 14.4223ZM96.115 21.3101H98.8139L92.8468 14.2028L98.4115 7.53711H95.7279L91.5016 12.5998L87.2541 7.53711H84.5552L90.1598 14.2121L84.2344 21.3101H86.9172L91.5042 15.8152L96.115 21.3101ZM76.0118 8.89146C73.7799 8.89112 71.7675 10.2354 70.9133 12.2973C70.059 14.3593 70.531 16.7328 72.1092 18.311C73.6874 19.8892 76.061 20.3613 78.1229 19.507C80.1849 18.6527 81.5292 16.6404 81.5288 14.4085C81.5283 11.3617 79.0586 8.89193 76.0118 8.89146ZM58.4264 9.24374C57.1917 9.2611 55.9908 9.65017 54.9804 10.3602V18.8937C56.0513 19.4142 57.2378 19.6515 58.4264 19.583C61.4708 19.583 63.94 17.4556 63.94 14.4134C63.94 11.3712 61.4683 9.24289 58.4239 9.24289L58.4264 9.24374ZM39.1289 0.628906H41.1965V21.3039H39.1289V0.628906ZM26.3769 21.3055L19.1445 14.0731L25.6919 7.52148H28.6155L22.0681 14.0731L29.3005 21.3055H26.3769ZM17.0704 0.628674V21.3037H19.138V0.628674H17.0704ZM32.2422 21.3055H34.3098V7.52148H32.2422V21.3055Z\", fill: \"currentColor\" })));\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconLogo.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconMenu.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconMenu.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconMenu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.IconMenu = (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconMenu.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconSave.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconSave.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconSave = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.IconSave = (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconSave.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconShare.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/IconShare.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconShare = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.IconShare = (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconShare.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./IconComment */ \"./src/shared/icons/IconComment.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconShare */ \"./src/shared/icons/IconShare.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconHidden */ \"./src/shared/icons/IconHidden.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconMenu */ \"./src/shared/icons/IconMenu.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconComplain */ \"./src/shared/icons/IconComplain.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconSave */ \"./src/shared/icons/IconSave.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/icons/IconAnon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconLogo */ \"./src/shared/icons/IconLogo.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/shared/utils/GenerateList.tsx":
/*!*******************************************!*\
  !*** ./src/shared/utils/GenerateList.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenerateList = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar IconComponent_1 = __webpack_require__(/*! ../IconComponent */ \"./src/shared/IconComponent/index.ts\");\r\nfunction GenerateList(_a) {\r\n    var list = _a.list;\r\n    return (React.createElement(React.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, onClick = _a.onClick, className = _a.className, id = _a.id, href = _a.href, dataMobile = _a.dataMobile, icon = _a.icon, size = _a.size;\r\n        return (React.createElement(As, { className: className, onClick: function () { return onClick(id); }, key: id, href: href, \"data-mobile\": dataMobile },\r\n            React.createElement(\"button\", { onClick: function () { console.log('click'); } },\r\n                icon && React.createElement(IconComponent_1.IconComponent, { name: icon, size: size }),\r\n                React.createElement(\"span\", null, text))));\r\n    })));\r\n}\r\nexports.GenerateList = GenerateList;\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/GenerateList.tsx?");

/***/ }),

/***/ "./src/shared/utils/generateRandomString.ts":
/*!**************************************************!*\
  !*** ./src/shared/utils/generateRandomString.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateRandomString = void 0;\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/generateRandomString.ts?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\n//файкт реквеста\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\n// неуспешный рексест и данные об ошибке\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch((0, exports.meRequest)());\r\n    axios_1.default.get(\"https://oauth.reddit.com/api/v1/me.json\", {\r\n        headers: { Authorization: \"bearer \".concat(getState().token) },\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch((0, exports.meRequestError)(String(error)));\r\n    });\r\n}; };\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.rootReducer = exports.updateToken = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar initialState = {\r\n    commentText: 'Привет, Redux!',\r\n    token: '',\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {}\r\n    }\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar UPDATE_TOKEN = 'UPDATE_TOKEN';\r\nvar updateToken = function (token) { return ({\r\n    type: UPDATE_TOKEN,\r\n    token: token,\r\n}); };\r\nexports.updateToken = updateToken;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case 'UPDATE_COMMENT':\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case 'UPDATE_TOKEN':\r\n            return __assign(__assign({}, state), { token: action.token });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n// по домашке 11 модуля - выносит сохранение токена в redux с помошью мидлвэра Thunk\r\nvar saveToken = function () { return function (dispatch) {\r\n    (0, react_1.useEffect)(function () {\r\n        var token = localStorage.getItem('token') || window.__token__;\r\n        if (token && token !== 'undefined') {\r\n            dispatch((0, exports.updateToken)(token));\r\n            localStorage.setItem('token', token);\r\n        }\r\n    }, []);\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "@redux-devtools/extension":
/*!********************************************!*\
  !*** external "@redux-devtools/extension" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@redux-devtools/extension\");\n\n//# sourceURL=webpack:///external_%22@redux-devtools/extension%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });