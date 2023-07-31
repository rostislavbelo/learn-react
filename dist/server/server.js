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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(3));
//файкт реквеста
exports.ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: exports.ME_REQUEST
}); };
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data,
}); };
exports.meRequestSuccess = meRequestSuccess;
// неуспешный рексест и данные об ошибке
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () { return function (dispatch, getState) {
    dispatch((0, exports.meRequest)());
    axios_1.default.get("https://oauth.reddit.com/api/v1/me.json", {
        headers: { Authorization: "bearer ".concat(getState().token) },
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.meRequestError)(String(error)));
    });
}; };
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useCloseModal = void 0;
var react_1 = __webpack_require__(0);
function useCloseModal(cb, ref) {
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                cb();
            }
        }
        function handleKeydownEsc(event) {
            if (event.key === 'Escape') {
                cb();
            }
        }
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeydownEsc);
        return function () {
            document.removeEventListener('click', handleClick);
            document.addEventListener('keydown', handleKeydownEsc);
        };
    }, []);
}
exports.useCloseModal = useCloseModal;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.commentContext = react_1.default.createContext({
    valueControled: '',
    onChange: function () { }
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(1);
var actions_1 = __webpack_require__(5);
function useUserData() {
    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (!token) {
            return;
        }
        ;
        dispatch((0, actions_1.meRequestAsync)());
    }, [token]);
    return { data: data, loading: loading };
}
exports.useUserData = useUserData;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(60), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsContextProvider = exports.postsContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usePostsData_1 = __webpack_require__(90);
// interface IUserContextData {
//     name?: string;
//     iconImg?: string;
//   }
exports.postsContext = react_1.default.createContext([]);
function PostsContextProvider(_a) {
    var children = _a.children;
    var data = (0, usePostsData_1.usePostsData)()[0];
    return (react_1.default.createElement(exports.postsContext.Provider, { value: data }, children));
}
exports.PostsContextProvider = PostsContextProvider;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = void 0;
var generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
exports.generateRandomString = generateRandomString;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = exports.rootReducer = exports.updateToken = exports.updateComment = void 0;
var actions_1 = __webpack_require__(5);
var reducer_1 = __webpack_require__(95);
var react_1 = __webpack_require__(0);
var initialState = {
    commentText: 'Привет, Redux!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
};
var UPDATE_COMMENT = 'UPDATE_COMMENT';
var updateComment = function (text) { return ({
    type: UPDATE_COMMENT,
    text: text,
}); };
exports.updateComment = updateComment;
var UPDATE_TOKEN = 'UPDATE_TOKEN';
var updateToken = function (token) { return ({
    type: UPDATE_TOKEN,
    token: token,
}); };
exports.updateToken = updateToken;
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'UPDATE_COMMENT':
            return __assign(__assign({}, state), { commentText: action.text });
        case 'UPDATE_TOKEN':
            return __assign(__assign({}, state), { token: action.token });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;
// по домашке 11 модуля - выносит сохранение токена в redux с помошью мидлвэра Thunk
var saveToken = function () { return function (dispatch) {
    (0, react_1.useEffect)(function () {
        var token = localStorage.getItem('token') || window.__token__;
        if (token && token !== 'undefined') {
            dispatch((0, exports.updateToken)(token));
            localStorage.setItem('token', token);
        }
    }, []);
}; };
exports.saveToken = saveToken;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(17));
var server_1 = __importDefault(__webpack_require__(18));
var indexTemplate_1 = __webpack_require__(19);
var App_tsx_1 = __webpack_require__(20);
var axios_1 = __importDefault(__webpack_require__(3));
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use("/static", express_1.default.static("./dist/client"));
// app.get("/auth", (req, res) => {
//   res.send(indexTemplate(ReactDOM.renderToString(App())));
// });
app.get("/auth", function (req, res) {
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=".concat(req.query.code, "&redirect_uri=https://learn-react-production.up.railway.app"), {
        auth: { username: 'undefined', password: process.env.SECRET },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(function (_a) {
        var data = _a.data;
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), data['access_token']));
    })
        .catch(console.log());
});
app.get("*", function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)())));
});
app.listen(PORT, function () {
    console.log("server started on port http://localhost:".concat(PORT));
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Reddit</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script>\n    window.__token__ = '".concat(token, "'\n  </script>\n</head>\n\n<body>\n  <div id=\"react_root\">").concat(content, "</div>\n  <div id=\"modal_root\"></div>\n</body>\n\n</html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
var root_1 = __webpack_require__(21);
var Examples_1 = __webpack_require__(22);
var Layout_1 = __webpack_require__(24);
var Header_1 = __webpack_require__(27);
var Content_1 = __webpack_require__(54);
var CardsList_1 = __webpack_require__(57);
__webpack_require__(101);
var userContext_1 = __webpack_require__(103);
var postsContext_1 = __webpack_require__(10);
var commentContext_1 = __webpack_require__(7);
var extension_1 = __webpack_require__(104);
var redux_1 = __webpack_require__(105);
var react_redux_1 = __webpack_require__(1);
var reducer_1 = __webpack_require__(14);
var redux_thunk_1 = __importDefault(__webpack_require__(106));
var CardsListNew_1 = __webpack_require__(107);
var react_router_dom_1 = __webpack_require__(2);
var _404_1 = __webpack_require__(110);
var ModalAdd_1 = __webpack_require__(112);
var store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    var _a = (0, react_1.useState)(""), valueControled = _a[0], setValueControled = _a[1];
    var CommentProvider = commentContext_1.commentContext.Provider;
    store.dispatch((0, reducer_1.saveToken)());
    // Для роутинга на клиенте, убирает конфликт с сервером.
    var _b = (0, react_1.useState)(false), mounted = _b[0], setMounted = _b[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(CommentProvider, { value: {
                valueControled: valueControled,
                onChange: setValueControled
            } },
            react_1.default.createElement(userContext_1.UserContextProvider, null,
                react_1.default.createElement(postsContext_1.PostsContextProvider, null,
                    react_1.default.createElement(Layout_1.Layout, null,
                        react_1.default.createElement(Header_1.Header, null),
                        react_1.default.createElement(Content_1.Content, null,
                            react_1.default.createElement(react_router_dom_1.Routes, null,
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(CardsList_1.CardsList, null) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/list/", element: react_1.default.createElement(CardsListNew_1.CardsListNew, null) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/list/modal/", element: [react_1.default.createElement(CardsListNew_1.CardsListNew, null), react_1.default.createElement(ModalAdd_1.ModalAdd, null)] }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/examples/", element: react_1.default.createElement(Examples_1.ExamplesComponent, null) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(_404_1.Block404, null) }),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/auth", element: react_1.default.createElement(react_router_dom_1.Navigate, { replace: true, to: "/" }) })))))))))));
}
exports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplesComponent = exports.Dropdown = exports.assoc = exports.MyList = void 0;
var React = __importStar(__webpack_require__(0));
var examples_css_1 = __importDefault(__webpack_require__(23));
var concatText = function (arg1, arg2) {
    var result = "".concat(arg1, " ").concat(arg2);
    return result;
};
var MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};
var someArray = [10, 20, 30, 40, 50];
var result = someArray.reduce(function (initialValue, currentValue) { return initialValue + currentValue; }, 300);
//-------------- Карирование пример
function add(left) {
    return function (right) { return left + right; };
}
// то же, но стрелкой
var add2 = function (left) { return function (right) { return left + right; }; };
var addOne = add(1);
function MyList(_a) {
    var list = _a.list;
    return (React.createElement("ul", null, list.map(function (item) { return (React.createElement("li", { onClick: item.onClick, key: item.id }, item.value)); })));
}
exports.MyList = MyList;
function assoc(key, value) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));
    }; // необязательный хвост
}
exports.assoc = assoc;
// Генерация случайных строк для ключей 
var generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
var assignId = assoc('id', generateRandomString());
var generateId = function (obj) { return assoc('id', generateRandomString())(obj); };
var LIST = [
    { value: 'some' },
    { value: 'some1' },
    { value: 'some2' }
].map(generateId);
var NOOP = function () { };
function Dropdown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;
    var _d = React.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    React.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    React.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    var handleOpen = function () {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen && (React.createElement("div", null,
            React.createElement("div", { onClick: function () { return setIsDropdownOpen(false); } }, children)))));
}
exports.Dropdown = Dropdown;
function ExamplesComponent() {
    var _a = React.useState(LIST), list = _a[0], setList = _a[1];
    var handleItemClick = function (id) {
        setList(list.filter(function (item) { return item.id !== id; }));
    };
    var handleAdd = function () {
        var _a;
        setList(list.concat(generateId({ value: ((_a = document.querySelector('input')) === null || _a === void 0 ? void 0 : _a.value) || generateRandomString() })));
    };
    return (React.createElement("div", null,
        React.createElement("h1", { className: examples_css_1.default.example }, "Hello React"),
        React.createElement("p", { className: examples_css_1.default.example }, concatText("превед", "медвед")),
        React.createElement("p", { className: examples_css_1.default.example }, result),
        React.createElement("p", { className: examples_css_1.default.example }, add(1)(2)),
        React.createElement("p", { className: examples_css_1.default.example }, addOne(5)),
        React.createElement("p", { className: examples_css_1.default.example }, generateRandomString()),
        React.createElement("input", null),
        React.createElement("button", { onClick: handleAdd }, "Add element"),
        React.createElement(MyList, { list: list.map(function (item) { return (__assign(__assign({}, item), { onClick: function () { return handleItemClick(item.id); } })); }) }),
        React.createElement("br", null),
        React.createElement(Dropdown, { onClose: function () { return console.log('close'); }, onOpen: function () { return console.log('open'); }, button: React.createElement("button", null, "test") },
            React.createElement("ul", null,
                React.createElement("li", { onClick: console.log }, "1")))));
}
exports.ExamplesComponent = ExamplesComponent;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"example": "examples__example--3HeCa"
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(26));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_css_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(29));
var SearchBlock_1 = __webpack_require__(30);
var NavBlock_1 = __webpack_require__(48);
var LogoArea_1 = __webpack_require__(51);
function Header() {
    return (react_1.default.createElement("div", { className: header_css_1.default.header },
        react_1.default.createElement(LogoArea_1.LogoArea, null),
        react_1.default.createElement(NavBlock_1.NavBlock, null),
        react_1.default.createElement(SearchBlock_1.SearchBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var searchblock_css_1 = __importDefault(__webpack_require__(32));
var UserBlock_1 = __webpack_require__(33);
var useUserData_1 = __webpack_require__(8);
function SearchBlock() {
    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.search },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"search": "searchblock__search--1qP76"
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userblock_css_1 = __importDefault(__webpack_require__(35));
var IconComponent_1 = __webpack_require__(4);
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=".concat('undefined', "&response_type=code&state=random_string&redirect_uri=https://learn-react-production.up.railway.app/auth&duration=permanent&scope=read submit identity"), className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc
            ? react_1.default.createElement("img", { src: avatarSrc, alt: "User avatar", className: userblock_css_1.default.avatarImage })
            : react_1.default.createElement(IconComponent_1.IconComponent, { name: "IconAnon" })),
        react_1.default.createElement("div", { className: userblock_css_1.default.username }, loading ? (react_1.default.createElement("span", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : react_1.default.createElement("span", null, username || "Аноним"))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"avatarBox": "userblock__avatarBox--2OTfi",
	"avatarImage": "userblock__avatarImage--2ryXC",
	"username": "userblock__username--3bLc0"
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconComponent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var iconcomponent_css_1 = __importDefault(__webpack_require__(37));
var classnames_1 = __importDefault(__webpack_require__(38));
var icons_1 = __webpack_require__(39);
var icons = { "IconComment": icons_1.IconComment, "IconShare": icons_1.IconShare, "IconHidden": icons_1.IconHidden,
    "IconSave": icons_1.IconSave, "IconComplain": icons_1.IconComplain, "IconMenu": icons_1.IconMenu, "IconAnon": icons_1.IconAnon, "IconLogo": icons_1.IconLogo };
function IconComponent(_a) {
    var name = _a.name, size = _a.size;
    var classes = (0, classnames_1.default)(iconcomponent_css_1.default["iconSize".concat(size)]);
    var element = icons[name];
    return react_1.default.createElement("span", { className: classes }, element);
}
exports.IconComponent = IconComponent;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"iconSize16": "iconcomponent__iconSize16--24h3k",
	"iconSize15": "iconcomponent__iconSize15--2D_gA",
	"iconSize14": "iconcomponent__iconSize14--1uO2c",
	"iconSize12": "iconcomponent__iconSize12--mJDJ0"
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconComment = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.IconComment = (react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconShare = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.IconShare = (react_1.default.createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconHidden = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.IconHidden = (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#999999" })));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconMenu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.IconMenu = (react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
    react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
    react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconComplain = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.IconComplain = (react_1.default.createElement("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.84211H7.27273V5.89474H8.72727V8.84211Z", fill: "#999999" })));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconSave = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.IconSave = (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.IconAnon = (react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconLogo = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.IconLogo = (react_1.default.createElement("svg", { width: "99", height: "22", viewBox: "0 0 99 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.7959 15.6815C13.7959 19.1368 11.0442 21.6426 6.67334 21.6426C4.1389 21.5724 1.73709 20.4944 0 18.6476L1.46179 17.0309C2.82998 18.3336 4.43982 19.5997 6.64441 19.5997C9.0932 19.5997 11.7334 18.2264 11.7334 15.7606C11.7334 13.7126 10.1057 12.3767 6.68525 11.3233C2.78744 10.1321 0.807471 8.51546 0.807471 5.47617C0.807471 2.46836 3.35326 0 6.9805 0C9.68966 0 11.3846 1.15462 13.0344 2.63003L11.5973 4.2254C10.1508 2.94399 8.77242 2.07526 7.0809 2.07526C4.98267 2.07526 2.91166 3.42814 2.91166 5.37577C2.91166 7.14046 3.92589 8.26446 7.50633 9.36037C10.7856 10.3703 13.7959 11.9351 13.7959 15.6806V15.6815ZM31.488 1.99285C31.488 2.94049 32.256 3.70871 33.2034 3.70871C33.6584 3.70893 34.0948 3.52823 34.4165 3.20639C34.7383 2.88456 34.9189 2.44799 34.9187 1.99285C34.9187 1.04521 34.1507 0.276995 33.2034 0.276995C32.256 0.276995 31.488 1.04521 31.488 1.99285ZM48.0876 0.628674H46.0199V21.3037H48.0876V0.628674ZM52.9131 20.6155C52.9131 20.6155 54.186 21.6493 58.4267 21.6493L58.4241 21.6485C62.6104 21.6485 66.0079 18.587 66.0079 14.4042C66.0079 10.2213 62.6129 7.17183 58.4267 7.17183C57.2392 7.14003 56.0603 7.38105 54.9807 7.87634V0.628674H52.9131V20.6155ZM68.4219 14.4223C68.4216 18.607 71.8138 21.9996 75.9988 22.0001C80.184 22.0001 83.577 18.6078 83.5774 14.4229C83.5774 10.2382 80.1849 6.84586 75.9999 6.8457C71.815 6.84555 68.4222 10.2377 68.4219 14.4223ZM96.115 21.3101H98.8139L92.8468 14.2028L98.4115 7.53711H95.7279L91.5016 12.5998L87.2541 7.53711H84.5552L90.1598 14.2121L84.2344 21.3101H86.9172L91.5042 15.8152L96.115 21.3101ZM76.0118 8.89146C73.7799 8.89112 71.7675 10.2354 70.9133 12.2973C70.059 14.3593 70.531 16.7328 72.1092 18.311C73.6874 19.8892 76.061 20.3613 78.1229 19.507C80.1849 18.6527 81.5292 16.6404 81.5288 14.4085C81.5283 11.3617 79.0586 8.89193 76.0118 8.89146ZM58.4264 9.24374C57.1917 9.2611 55.9908 9.65017 54.9804 10.3602V18.8937C56.0513 19.4142 57.2378 19.6515 58.4264 19.583C61.4708 19.583 63.94 17.4556 63.94 14.4134C63.94 11.3712 61.4683 9.24289 58.4239 9.24289L58.4264 9.24374ZM39.1289 0.628906H41.1965V21.3039H39.1289V0.628906ZM26.3769 21.3055L19.1445 14.0731L25.6919 7.52148H28.6155L22.0681 14.0731L29.3005 21.3055H26.3769ZM17.0704 0.628674V21.3037H19.138V0.628674H17.0704ZM32.2422 21.3055H34.3098V7.52148H32.2422V21.3055Z", fill: "currentColor" })));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var navblock_css_1 = __importDefault(__webpack_require__(50));
var react_router_dom_1 = __webpack_require__(2);
function NavBlock() {
    return (react_1.default.createElement("nav", { className: navblock_css_1.default.nav },
        react_1.default.createElement("ul", { className: navblock_css_1.default.list },
            react_1.default.createElement("li", { className: navblock_css_1.default.item },
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: function (_a) {
                        var isActive = _a.isActive, isPending = _a.isPending;
                        return isPending ? "btnNavPending" : isActive ? "btnNavActive" : "";
                    } }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")),
            react_1.default.createElement("li", { className: navblock_css_1.default.item },
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/list/", className: function (_a) {
                        var isActive = _a.isActive, isPending = _a.isPending;
                        return isPending ? "btnNavPending" : isActive ? "btnNavActive" : "";
                    } }, "\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A")),
            react_1.default.createElement("li", { className: navblock_css_1.default.item },
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/examples/", className: function (_a) {
                        var isActive = _a.isActive, isPending = _a.isPending;
                        return isPending ? "btnNavPending" : isActive ? "btnNavActive" : "";
                    } }, "\u0427\u0435\u0440\u043D\u043E\u0432\u044B\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u044B")))));
}
exports.NavBlock = NavBlock;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "navblock__nav--1FBsv",
	"list": "navblock__list--rowDf",
	"item": "navblock__item--2VnnI"
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoArea = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var logoarea_css_1 = __importDefault(__webpack_require__(53));
var IconComponent_1 = __webpack_require__(4);
function LogoArea() {
    return (react_1.default.createElement("div", { className: logoarea_css_1.default.container },
        react_1.default.createElement(IconComponent_1.IconComponent, { name: 'IconLogo' }),
        react_1.default.createElement("p", { className: logoarea_css_1.default.text }, "\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u043F\u043E \u043A\u0443\u0440\u0441\u0443 React JS")));
}
exports.LogoArea = LogoArea;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "logoarea__container--Mxt5_",
	"text": "logoarea__text--3JNd6"
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(56));
function Content(_a) {
    var children = _a.children;
    return react_1.default.createElement("main", { className: content_css_1.default.content }, children);
}
exports.Content = Content;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardslist_css_1 = __importDefault(__webpack_require__(59));
var Card_1 = __webpack_require__(9);
var postsContext_1 = __webpack_require__(10);
var generateRandomString_1 = __webpack_require__(11);
var ModalMain_1 = __webpack_require__(91);
function CardsList() {
    var dataResponce = (0, react_1.useContext)(postsContext_1.postsContext);
    var _a = (0, react_1.useState)(false), isModalOpen = _a[0], setModalOpen = _a[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", { className: cardslist_css_1.default.title }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430-\u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0430 \u043F\u043E\u0441\u0442\u0430"),
        react_1.default.createElement(Card_1.Card, null),
        react_1.default.createElement("h2", { className: cardslist_css_1.default.title },
            "\u041F\u0440\u0438\u043C\u0435\u0440 \u043C\u043E\u0434\u0430\u043B\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 Portal",
            react_1.default.createElement("br", null),
            "c \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435\u043C \u0447\u0435\u0440\u0435\u0437 Ref \u043F\u043E \u043A\u043B\u0438\u043A\u0443 \u0432\u043D\u0435 \u043C\u043E\u0434\u0430\u043B\u043A\u0438"),
        react_1.default.createElement("button", { className: cardslist_css_1.default.btnModal, onClick: function () { setModalOpen(true); } }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C"),
        isModalOpen && (react_1.default.createElement(ModalMain_1.ModalMain, { onClose: function () { setModalOpen(false); } })),
        react_1.default.createElement("h2", { className: cardslist_css_1.default.title }, "\u0421\u043F\u0438\u0441\u043E\u043A-\u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u043F\u043E\u0441\u0442\u043E\u0432 \u0441 Reddit.com"),
        react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList }, dataResponce.length ? (dataResponce.map(function (item, index) { return (react_1.default.createElement("li", { key: (0, generateRandomString_1.generateRandomString)() },
            react_1.default.createElement(Card_1.Card, { dataAuthor: item.data.author, dataTitle: item.data.title, imgPath: item.data.thumbnail, dataUrl: item.data.permalink }))); })) : (react_1.default.createElement("li", null,
            react_1.default.createElement("span", { style: { display: "block", width: "max-content", margin: "10px auto", fontSize: "20px", color: "red" } }, "\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E\u0441\u0442\u043E\u0432..."))))));
}
exports.CardsList = CardsList;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--1DoiZ",
	"title": "cardslist__title--3YoHe",
	"btnModal": "cardslist__btnModal--DBewl"
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(61));
var Controls_1 = __webpack_require__(62);
var Menu_1 = __webpack_require__(74);
var Preview_1 = __webpack_require__(84);
var TextContent_1 = __webpack_require__(87);
function Card(_a) {
    var dataAuthor = _a.dataAuthor, dataTitle = _a.dataTitle, imgPath = _a.imgPath, dataUrl = _a.dataUrl;
    return (react_1.default.createElement("div", { className: card_css_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { dataAuthor: dataAuthor, dataTitle: dataTitle, dataUrl: dataUrl }),
        react_1.default.createElement(Preview_1.Preview, { imgPath: imgPath }),
        react_1.default.createElement(Menu_1.Menu, null),
        react_1.default.createElement(Controls_1.Controls, null)));
}
exports.Card = Card;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--7bN6-",
	"textContent": "card__textContent--3Ki_7"
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var CommentsButton_1 = __webpack_require__(64);
var SaveButton_1 = __webpack_require__(67);
var ShareButton_1 = __webpack_require__(70);
var controls_css_1 = __importDefault(__webpack_require__(73));
function Controls() {
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement("div", { className: controls_css_1.default.karmaCounter },
            react_1.default.createElement("button", { className: controls_css_1.default.up },
                react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
            react_1.default.createElement("span", { className: controls_css_1.default.karmaValue }, "234"),
            react_1.default.createElement("button", { className: controls_css_1.default.down },
                react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })))),
        react_1.default.createElement(CommentsButton_1.CommentsButton, null),
        react_1.default.createElement("div", { className: controls_css_1.default.actions },
            react_1.default.createElement(ShareButton_1.ShareButton, null),
            react_1.default.createElement(SaveButton_1.SaveButton, null))));
}
exports.Controls = Controls;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsbutton_css_1 = __importDefault(__webpack_require__(66));
function CommentsButton() {
    return (react_1.default.createElement("button", { className: commentsbutton_css_1.default.commentsButton },
        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        react_1.default.createElement("span", { className: commentsbutton_css_1.default.commentsNumber }, "13")));
}
exports.CommentsButton = CommentsButton;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--jg5NB",
	"commentsNumber": "commentsbutton__commentsNumber--2iwO8"
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var savebutton_css_1 = __importDefault(__webpack_require__(69));
function SaveButton() {
    return (react_1.default.createElement("button", { className: savebutton_css_1.default.saveButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))));
}
exports.SaveButton = SaveButton;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sharebutton_css_1 = __importDefault(__webpack_require__(72));
function ShareButton() {
    return (react_1.default.createElement("button", { className: sharebutton_css_1.default.shareButton },
        react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))));
}
exports.ShareButton = ShareButton;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1pbuI",
	"actions": "controls__actions--1iXY3",
	"karmaCounter": "controls__karmaCounter--29ihx",
	"karmaValue": "controls__karmaValue--iJzv0",
	"down": "controls__down--15a4f",
	"up": "controls__up--2KfyE",
	"commentsButton": "controls__commentsButton--2EBXh",
	"commentsNumber": "controls__commentsNumber--y3vDY"
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menu_css_1 = __importDefault(__webpack_require__(76));
var Popup_1 = __webpack_require__(77);
var Dropdown_1 = __webpack_require__(81);
function Menu() {
    var elementButton = (react_1.default.createElement("button", { className: menu_css_1.default.menuButton },
        react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
            react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
            react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" }))));
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: elementButton, onClose: function () { console.log('close'); }, onOpen: function () { console.log('open'); } },
            react_1.default.createElement(Popup_1.Popup, null))));
}
exports.Menu = Menu;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--22Yos",
	"menuButton": "menu__menuButton--2RzAb",
	"dropdown": "menu__dropdown--2v5tI",
	"closeButton": "menu__closeButton--1Vmbj"
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(78), exports);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = exports.assoc = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var popup_css_1 = __importDefault(__webpack_require__(79));
var GenerateList_1 = __webpack_require__(80);
function assoc(key, text) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = text, _a)));
    }; // необязательный хвост
}
exports.assoc = assoc;
var generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
var generateId = function (obj) { return assoc('id', generateRandomString())(obj); };
var LIST = [
    { As: 'li', text: 'Комментарии', className: "".concat(popup_css_1.default.popupItem), dataMobile: 'hidden', icon: 'IconComment', size: '15' },
    { As: 'li', text: 'Поделиться', className: "".concat(popup_css_1.default.popupItem), dataMobile: 'hidden', icon: 'IconShare', size: '14' },
    { As: 'li', text: 'Скрыть', className: "".concat(popup_css_1.default.popupItem), dataMobile: 'visible', icon: 'IconHidden', size: '14' },
    { As: 'li', text: 'Сохранить', className: "".concat(popup_css_1.default.popupItem), dataMobile: 'hidden', icon: 'IconSave', size: '14' },
    { As: 'li', text: 'Пожаловаться', className: "".concat(popup_css_1.default.popupItem), dataMobile: 'visible', icon: 'IconComplain', size: '16' },
    { As: 'li', text: 'Закрыть', className: "".concat(popup_css_1.default.popupItem), dataMobile: 'visible' },
].map(generateId);
function Popup() {
    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];
    var handleItemClick = function (id) {
        setList(list.filter(function (item) { return item.id !== id; }));
    };
    return (react_1.default.createElement("ul", { className: popup_css_1.default.popupList },
        react_1.default.createElement(GenerateList_1.GenerateList, { list: list.map(function (item) { return (__assign(__assign({}, item), { onClick: function () { return handleItemClick(item.id); } })); }) })));
}
exports.Popup = Popup;
// export function Popup() {
//   return (
//     <ul className={styles.popupList}>
//       <li className={styles.popupItem} onClick={()=>{console.log('click')}}>
//         <button>
//           <svg
//             width="15"
//             height="15"
//             viewBox="0 0 15 15"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z"
//               fill="#999999"
//             />
//           </svg>
//           <span>Комментарии</span>
//         </button>
//       </li>
//       <li className={styles.popupItem}>
//         <button>
//           <svg
//             width="12"
//             height="14"
//             viewBox="0 0 12 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z"
//               fill="#999999"
//             />
//           </svg>
//           <span>Поделиться</span>
//         </button>
//       </li>
//       <li className={styles.popupItem} id={'mobile-visible'}>
//         <button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 14 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z"
//               fill="#999999"
//             />
//           </svg>
//           <span>Скрыть</span>
//         </button>
//       </li>
//       <li className={styles.popupItem}>
//         <button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 14 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z"
//               fill="#979797"
//             />
//           </svg>
//           <span>Сохранить</span>
//         </button>
//       </li>
//       <li className={styles.popupItem} id={'mobile-visible'}>
//         <button>
//           <svg
//             width="16"
//             height="14"
//             viewBox="0 0 16 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.84211H7.27273V5.89474H8.72727V8.84211Z"
//               fill="#999999"
//             />
//           </svg>
//           <span>Пожаловаться</span>
//         </button>
//       </li>
//       <li className={styles.popupItem} id={'mobile-visible'}>
//         <button><span>Закрыть</span></button>
//       </li>
//     </ul>
//   );
// }


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"popupList": "popup__popupList--2I0mR",
	"popupItem": "popup__popupItem--2t4Yt"
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateList = void 0;
var React = __importStar(__webpack_require__(0));
var IconComponent_1 = __webpack_require__(4);
function GenerateList(_a) {
    var list = _a.list;
    return (React.createElement(React.Fragment, null, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, onClick = _a.onClick, className = _a.className, id = _a.id, href = _a.href, dataMobile = _a.dataMobile, icon = _a.icon, size = _a.size;
        return (React.createElement(As, { className: className, onClick: function () { return onClick(id); }, key: id, href: href, "data-mobile": dataMobile },
            React.createElement("button", { onClick: function () { console.log('click'); } },
                icon && React.createElement(IconComponent_1.IconComponent, { name: icon, size: size }),
                React.createElement("span", null, text))));
    })));
}
exports.GenerateList = GenerateList;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var dropdown_css_1 = __importDefault(__webpack_require__(83));
var useCloseModal_1 = __webpack_require__(6);
var NOOP = function () { };
function Dropdown(_a) {
    var button = _a.button, children = _a.children, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;
    var _d = react_1.default.useState(false), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    var ref = (0, react_1.useRef)(null);
    // useEffect(()=>{
    //   function handleClick(event:MouseEvent) {
    //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {
    //       setIsDropdownOpen(false);
    //     }
    //   }
    //   document.addEventListener('click', handleClick)
    //   return () => {
    //     document.removeEventListener('click', handleClick)
    //   }
    // },[]);
    (0, useCloseModal_1.useCloseModal)(function () { return setIsDropdownOpen(false); }, ref);
    return (react_1.default.createElement("div", { className: dropdown_css_1.default.container, ref: ref },
        react_1.default.createElement("div", { onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } }, button),
        isDropdownOpen && (react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--a5Jzh",
	"listContainer": "dropdown__listContainer--YYYB3",
	"list": "dropdown__list--23slg"
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(85), exports);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(86));
function Preview(_a) {
    var imgPath = _a.imgPath;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview }, imgPath && imgPath.includes('http') ? (react_1.default.createElement("img", { src: imgPath, alt: "preview", className: preview_css_1.default.previewImg })) :
        (react_1.default.createElement("img", { src: "https://cdn.dribbble.com/users/59947/screenshots/17108611/media/921dde07080f3340eb85517a75e55159.jpg", alt: "preview", className: preview_css_1.default.previewImg }))));
}
exports.Preview = Preview;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--1Nukb",
	"previewImg": "preview__previewImg--3kTAV"
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(88), exports);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_css_1 = __importDefault(__webpack_require__(89));
function TextContent(_a) {
    var dataAuthor = _a.dataAuthor, dataTitle = _a.dataTitle, dataUrl = _a.dataUrl;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcontent_css_1.default.metaData },
            react_1.default.createElement("div", { className: textcontent_css_1.default.userLink },
                react_1.default.createElement("img", { src: 'https://habrastorage.org/r/w60/webt/5f/dd/3f/5fdd3f0eec392098725544.png', className: textcontent_css_1.default.avatar }),
                react_1.default.createElement("a", { href: "#user-url", className: textcontent_css_1.default.username }, dataAuthor || 'Константин Кодов')),
            react_1.default.createElement("span", { className: textcontent_css_1.default.createdAt }, "".concat(Math.round(Math.random() * 10), " \u0447\u0430\u0441. \u043D\u0430\u0437\u0430\u0434"))),
        react_1.default.createElement("h2", { className: textcontent_css_1.default.title },
            react_1.default.createElement("a", { href: dataUrl ? "https://www.reddit.com".concat(dataUrl) : "#postUrl", className: textcontent_css_1.default.postLink }, dataTitle || 'Реплицированные с зарубежных источников'))));
}
exports.TextContent = TextContent;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--2RuXa",
	"metaData": "textcontent__metaData--1L7oU",
	"publishedLabel": "textcontent__publishedLabel--C6Pau",
	"createdAt": "textcontent__createdAt--1vECY",
	"userBox": "textcontent__userBox--27G8p",
	"avatarBox": "textcontent__avatarBox--2okhS",
	"avatarImage": "textcontent__avatarImage--oiGfT",
	"username": "textcontent__username--1Pcvf",
	"userLink": "textcontent__userLink--2KE4t",
	"avatar": "textcontent__avatar--26Ggp",
	"title": "textcontent__title--1gTmn",
	"postLink": "textcontent__postLink--11qrP"
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(3));
var react_redux_1 = __webpack_require__(1);
function usePostsData() {
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    (0, react_1.useEffect)(function () {
        axios_1.default.get("https://oauth.reddit.com/best.json?sr_detail=true", {
            headers: { Authorization: "bearer ".concat(token) },
        })
            .then(function (resp) {
            var postsData = resp.data;
            setData(postsData.data.children);
        })
            .catch(console.log);
    }, [token]);
    return [data];
}
exports.usePostsData = usePostsData;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(92), exports);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalMain = void 0;
var react_1 = __importStar(__webpack_require__(0));
var modalmain_css_1 = __importDefault(__webpack_require__(93));
var react_dom_1 = __importDefault(__webpack_require__(12));
var useCloseModal_1 = __webpack_require__(6);
var commentContext_1 = __webpack_require__(7);
var CommentElementContainer_1 = __webpack_require__(13);
var FormTestElement_1 = __webpack_require__(15);
var react_router_dom_1 = __webpack_require__(2);
function ModalMain(props) {
    var ref = (0, react_1.useRef)(null);
    // useEffect(()=>{
    //   function handleClick(event:MouseEvent) {
    //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {
    //       props.onClose?.();
    //     }
    //   }
    //   document.addEventListener('click', handleClick)
    //   return () => {
    //     document.removeEventListener('click', handleClick)
    //   }
    // },[]);
    var history = (0, react_router_dom_1.useNavigate)();
    // Заменяет код выше внешним хуком
    (0, useCloseModal_1.useCloseModal)(function () { var _a; (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props); }, ref);
    var node = document.querySelector("#modal_root");
    if (!node) {
        return null;
    }
    // для неуправляемого инпута
    var commentDefault = null;
    var refInputUncontroled = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    var _a = (0, react_1.useState)(""), comment = _a[0], setComment = _a[1];
    function handleSubmit(event) {
        var _a, _b;
        event.preventDefault();
        console.log((_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.value);
        setComment("".concat((_b = refInputUncontroled.current) === null || _b === void 0 ? void 0 : _b.value));
    }
    //---------------------------------------------------------------------
    // Для управляемого инпута
    // const [valueControled, setValueControled] = useState(""); //- вынесли наверх в App в контекст onChange заменяет setValueControled
    var _b = (0, react_1.useContext)(commentContext_1.commentContext), valueControled = _b.valueControled, onChange = _b.onChange;
    function handleChange(event) {
        onChange(event.target.value);
    }
    var _c = (0, react_1.useState)(""), commentControled = _c[0], setCommentControled = _c[1];
    function handleSubmitControlled(event) {
        event.preventDefault();
        setCommentControled(valueControled);
    }
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: modalmain_css_1.default.modalMain, ref: ref },
        react_1.default.createElement("h2", { className: modalmain_css_1.default.title }, "\u041F\u0440\u0438\u043C\u0435\u0440 \u043C\u043E\u0434\u0430\u043B\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 Portal"),
        react_1.default.createElement("div", { className: modalmain_css_1.default.container },
            react_1.default.createElement("h3", null, "\u041D\u0435\u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0435 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0441 focus \u0447\u0435\u0440\u0435\u0437 ref"),
            react_1.default.createElement("form", { className: modalmain_css_1.default.form, onSubmit: handleSubmit },
                react_1.default.createElement("textarea", { className: modalmain_css_1.default.input, ref: refInputUncontroled }),
                react_1.default.createElement("button", { className: modalmain_css_1.default.btn, type: "submit" }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
            react_1.default.createElement("div", { className: modalmain_css_1.default.comment }, comment)),
        react_1.default.createElement("div", { className: modalmain_css_1.default.container },
            react_1.default.createElement("h3", null, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0435 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E  \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E context"),
            react_1.default.createElement("form", { className: modalmain_css_1.default.form, onSubmit: handleSubmitControlled },
                react_1.default.createElement("textarea", { className: modalmain_css_1.default.input, value: valueControled, onChange: handleChange }),
                react_1.default.createElement("button", { className: modalmain_css_1.default.btn, type: "submit" }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
            react_1.default.createElement("div", { className: modalmain_css_1.default.comment }, commentControled)),
        react_1.default.createElement(CommentElementContainer_1.CommentElementContainer, null),
        react_1.default.createElement(FormTestElement_1.FormTestElement, null)), node);
}
exports.ModalMain = ModalMain;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modalMain": "modalmain__modalMain--1jPTT",
	"title": "modalmain__title--3jxiZ",
	"input": "modalmain__input--1LAYu",
	"btn": "modalmain__btn--3QAmf",
	"container": "modalmain__container--kfldN",
	"form": "modalmain__form--12F_n"
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentElementContainer = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var reducer_1 = __webpack_require__(14);
var CommentElement_1 = __webpack_require__(96);
function CommentElementContainer() {
    // const store = useStore<RootState>();
    // const value = store.getState().commentText;
    // заменяет две строчки выше
    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });
    var dispatch = (0, react_redux_1.useDispatch)();
    function handleChange(event) {
        dispatch((0, reducer_1.updateComment)(event.target.value));
    }
    //- для комментария
    var _a = (0, react_1.useState)(""), comment = _a[0], setComment = _a[1];
    function handleSubmit(event) {
        event.preventDefault();
        setComment(value);
    }
    return (react_1.default.createElement(CommentElement_1.CommentElement, { value: value, onChange: handleChange, onSubmit: handleSubmit, comment: comment }));
}
exports.CommentElementContainer = CommentElementContainer;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(5);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(97), exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentElement = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentelement_css_1 = __importDefault(__webpack_require__(98));
function CommentElement(_a) {
    // Логика вынесена в умный компонент-контейнер - CommentElementContainer
    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit, comment = _a.comment;
    // const store = useStore<RootState>();
    // const value = store.getState().commentText;
    // заменяет две строчки выше
    // const value = useSelector<RootState, string>(state => state.commentText)
    // const dispatch = useDispatch();
    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    //   dispatch(updateComment(event.target.value));
    // }
    // //- для комментария
    // const [comment, setComment] = useState("");
    // function handleSubmit(event: FormEvent) {
    //   event.preventDefault();
    //   setComment(value);
    // }
    return (react_1.default.createElement("div", { className: commentelement_css_1.default.container },
        react_1.default.createElement("h3", null, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0435 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E store Redux"),
        react_1.default.createElement("form", { className: commentelement_css_1.default.form, onSubmit: onSubmit },
            react_1.default.createElement("textarea", { className: commentelement_css_1.default.input, value: value, onChange: onChange }),
            react_1.default.createElement("button", { className: commentelement_css_1.default.btn, type: "submit" }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
        react_1.default.createElement("div", { className: commentelement_css_1.default.comment }, comment)));
}
exports.CommentElement = CommentElement;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "commentelement__title--1EtcP",
	"input": "commentelement__input--1aEqw",
	"btn": "commentelement__btn--xuwJ-",
	"container": "commentelement__container--bNeI7",
	"form": "commentelement__form--2hpce"
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTestElement = void 0;
var react_1 = __importStar(__webpack_require__(0));
var formtestelement_css_1 = __importDefault(__webpack_require__(100));
function FormTestElement() {
    var _a = (0, react_1.useState)(''), comment = _a[0], setComment = _a[1];
    var _b = (0, react_1.useState)(''), value = _b[0], setValue = _b[1];
    var _c = (0, react_1.useState)(false), touched = _c[0], setTouched = _c[1];
    var _d = (0, react_1.useState)(false), validateError = _d[0], setValidateError = _d[1];
    function handleSubmit(event) {
        event.preventDefault();
        setTouched(true);
        if (value.length <= 3) {
            setValidateError(true);
        }
        else {
            setComment(value);
        }
    }
    function handleChange(event) {
        setValue(event.target.value);
        if (validateError && value.length >= 3) {
            setValidateError(false);
        }
    }
    function validateValue() {
        if (value.length <= 3) {
            return 'Введите больше 3х символов!';
        }
        return '';
    }
    return (react_1.default.createElement("div", { className: formtestelement_css_1.default.container },
        react_1.default.createElement("h3", null, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0435 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0441 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0435\u0439 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043C\u0438 React"),
        react_1.default.createElement("form", { className: formtestelement_css_1.default.form, onSubmit: handleSubmit },
            react_1.default.createElement("textarea", { className: formtestelement_css_1.default.input, value: value, onChange: handleChange, "aria-invalid": validateError }),
            touched && validateValue() && (react_1.default.createElement("div", { className: formtestelement_css_1.default.validate }, validateValue())),
            react_1.default.createElement("button", { className: formtestelement_css_1.default.btn, type: "submit", disabled: validateError }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
        react_1.default.createElement("div", { className: formtestelement_css_1.default.comment }, comment)));
}
exports.FormTestElement = FormTestElement;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "formtestelement__title--151uh",
	"input": "formtestelement__input--gCCxn",
	"btn": "formtestelement__btn--2NXdB",
	"container": "formtestelement__container--1PtCD",
	"form": "formtestelement__form--1xj8f",
	"validate": "formtestelement__validate--jcQhS"
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(102);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\r\n  --black         : #333333;\r\n  --orange        : #CC6633;\r\n  --green         : #A4CC33;\r\n  --whiteLightness: 100%;\r\n  --white         : hsl(0, 0%, var(--whiteLightness));\r\n  --grayF4        : hsl(0, 0%, calc(var(--whiteLightness) - 4%));\r\n  --greyF3        : hsl(0, 0%, calc(var(--whiteLightness) - 5%));\r\n  --greyEC        : hsl(0, 0%, calc(var(--whiteLightness) - 7%));\r\n  --greyD9        : hsl(0, 0%, calc(var(--whiteLightness) - 15%));\r\n  --greyC4        : hsl(0, 0%, calc(var(--whiteLightness) - 23%));\r\n  --grey99        : hsl(0, 0%, calc(var(--whiteLightness) - 40%));\r\n  --grey66        : hsl(0, 0%, calc(var(--whiteLightness) - 60%));\r\n}\r\n\r\nbody {\r\n  padding         : 0;\r\n  margin          : 0;\r\n  background-color: var(--grayF4);\r\n  font-size       : 14px;\r\n  line-height     : 16px;\r\n  font-family     : 'Roboto', serif;\r\n}\r\n\r\n* {\r\n  color                  : var(--black);\r\n  box-sizing             : border-box;\r\n  -webkit-font-smoothing : antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n  margin    : 0;\r\n  padding   : 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbutton {\r\n  padding   : 0;\r\n  border    : 0;\r\n  background: transparent;\r\n  cursor    : pointer;\r\n}\r\n\r\n.btnNavActive {\r\n  text-decoration: underline;\r\n  font-weight: 700;\r\n  background-color: #e5ebd7;\r\n  pointer-events: none;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(8);
exports.userContext = react_1.default.createContext({});
function UserContextProvider(_a) {
    var children = _a.children;
    var _b = (0, useUserData_1.useUserData)(), data = _b.data, loading = _b.loading;
    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));
}
exports.UserContextProvider = UserContextProvider;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("@redux-devtools/extension");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(108), exports);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsListNew = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardslistnew_css_1 = __importDefault(__webpack_require__(109));
var generateRandomString_1 = __webpack_require__(11);
var Card_1 = __webpack_require__(9);
var react_redux_1 = __webpack_require__(1);
var axios_1 = __importDefault(__webpack_require__(3));
var react_router_dom_1 = __webpack_require__(2);
function CardsListNew() {
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(''), errorLoading = _c[0], setErrorLoading = _c[1];
    var bottomOfList = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(''), nextAfter = _d[0], setNextAfter = _d[1];
    var _e = (0, react_1.useState)(0), count = _e[0], setCount = _e[1];
    (0, react_1.useEffect)(function () {
        // тут через асинк запрос, для примера
        function load() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, after, children_1, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setErrorLoading('');
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios_1.default.get("https://oauth.reddit.com/rising.json", {
                                    headers: { Authorization: "bearer ".concat(token) },
                                    params: {
                                        //количество постов в списке(по дефолту их 25)
                                        limit: 10,
                                        // чтобы была подгрузка нового, а не дубль старой порции постов
                                        after: nextAfter
                                    },
                                })];
                        case 2:
                            _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;
                            setCount(count + 1);
                            console.log(count);
                            setNextAfter(after);
                            //ВАЖНО! Передача колбека внутри сеттера. С обращением к предыдущему состоянию, чтобы не затирать его, а добавлять к нему.
                            setData(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            console.error(error_1);
                            setErrorLoading(String(error_1));
                            return [3 /*break*/, 4];
                        case 4:
                            setLoading(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        //Обсёрвер наблюдает за скроллом.
        var observer = new IntersectionObserver(function (enteries) {
            if (enteries[0].isIntersecting && count < 2) {
                load();
            }
        }, { rootMargin: '10px' });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, nextAfter, token, count]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", { className: cardslistnew_css_1.default.title }, "\u041F\u0440\u0438\u043C\u0435\u0440 \u043C\u043E\u0434\u0430\u043B\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 React-router"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/list/modal/", className: cardslistnew_css_1.default.btnModal }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C"),
        react_1.default.createElement("h2", { className: cardslistnew_css_1.default.title }, "\u0421\u043F\u0438\u0441\u043E\u043A-\u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u043E\u0441\u0442\u043E\u0432 \u0441 Reddit.com \u043A\u0430\u043A \"\u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A\" \u0441 \u043F\u043E\u0434\u0433\u0440\u0443\u0437\u043A\u043E\u0439"),
        react_1.default.createElement("ul", { className: cardslistnew_css_1.default.cardsList },
            data.map(function (item) { return (react_1.default.createElement("li", { key: (0, generateRandomString_1.generateRandomString)() },
                react_1.default.createElement(Card_1.Card, { dataAuthor: item.data.author, dataTitle: item.data.title, imgPath: item.data.thumbnail, dataUrl: item.data.permalink }))); }),
            react_1.default.createElement("div", { ref: bottomOfList }),
            count === 2 && (react_1.default.createElement("button", { style: { display: "block", width: "max-content", margin: "10px auto", padding: "5px 10px", fontSize: "20px", color: "red", border: "2px solid blue", borderRadius: "5px" }, onClick: function () { setCount(0); } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451")),
            (count < 2 || loading) && (react_1.default.createElement("li", null,
                react_1.default.createElement("span", { style: { display: "block", width: "max-content", margin: "10px auto", fontSize: "20px", color: "red" } }, "\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E\u0441\u0442\u043E\u0432..."))),
            errorLoading && !loading && (react_1.default.createElement("li", null,
                react_1.default.createElement("span", { role: 'alert', style: { display: "block", width: "max-content", margin: "10px auto", fontSize: "20px", color: "red" } }, errorLoading))))));
}
exports.CardsListNew = CardsListNew;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslistnew__cardsList--NY_Xb",
	"title": "cardslistnew__title--2VXYI",
	"btnModal": "cardslistnew__btnModal--Ya9X_"
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(111), exports);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block404 = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function Block404() {
    return (react_1.default.createElement("h1", { style: { fontSize: '30px', lineHeight: '34px', color: 'red', maxWidth: "500px", margin: "100px auto", textAlign: 'center' } },
        "\u041E\u0448\u0438\u0431\u043A\u0430 404.",
        react_1.default.createElement("br", null),
        "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430."));
}
exports.Block404 = Block404;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(113), exports);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalAdd = void 0;
var react_1 = __importStar(__webpack_require__(0));
var modaladd_css_1 = __importDefault(__webpack_require__(114));
var react_dom_1 = __importDefault(__webpack_require__(12));
var useCloseModal_1 = __webpack_require__(6);
var commentContext_1 = __webpack_require__(7);
var CommentElementContainer_1 = __webpack_require__(13);
var FormTestElement_1 = __webpack_require__(15);
var react_router_dom_1 = __webpack_require__(2);
function ModalAdd(props) {
    var ref = (0, react_1.useRef)(null);
    var history = (0, react_router_dom_1.useNavigate)();
    (0, useCloseModal_1.useCloseModal)(function () { history('/list/'); }, ref);
    var node = document.querySelector("#modal_root");
    if (!node) {
        return null;
    }
    // для неуправляемого инпута
    var commentDefault = null;
    var refInputUncontroled = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    var _a = (0, react_1.useState)(""), comment = _a[0], setComment = _a[1];
    function handleSubmit(event) {
        var _a, _b;
        event.preventDefault();
        console.log((_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.value);
        setComment("".concat((_b = refInputUncontroled.current) === null || _b === void 0 ? void 0 : _b.value));
    }
    //---------------------------------------------------------------------
    var _b = (0, react_1.useContext)(commentContext_1.commentContext), valueControled = _b.valueControled, onChange = _b.onChange;
    function handleChange(event) {
        onChange(event.target.value);
    }
    var _c = (0, react_1.useState)(""), commentControled = _c[0], setCommentControled = _c[1];
    function handleSubmitControlled(event) {
        event.preventDefault();
        setCommentControled(valueControled);
    }
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: modaladd_css_1.default.modalMain, ref: ref },
        react_1.default.createElement("h2", { className: modaladd_css_1.default.title },
            "\u041F\u0440\u0438\u043C\u0435\u0440 \u043C\u043E\u0434\u0430\u043B\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 React-router",
            react_1.default.createElement("br", null),
            react_1.default.createElement("span", null, "\u041E\u043A\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F/\u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0440\u043E\u0443\u0442\u0443")),
        react_1.default.createElement("div", { className: modaladd_css_1.default.container },
            react_1.default.createElement("h3", null, "\u041D\u0435\u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0435 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0441 focus \u0447\u0435\u0440\u0435\u0437 ref"),
            react_1.default.createElement("form", { className: modaladd_css_1.default.form, onSubmit: handleSubmit },
                react_1.default.createElement("textarea", { className: modaladd_css_1.default.input, ref: refInputUncontroled }),
                react_1.default.createElement("button", { className: modaladd_css_1.default.btn, type: "submit" }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
            react_1.default.createElement("div", { className: modaladd_css_1.default.comment }, comment)),
        react_1.default.createElement("div", { className: modaladd_css_1.default.container },
            react_1.default.createElement("h3", null, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0435 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E  \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E context"),
            react_1.default.createElement("form", { className: modaladd_css_1.default.form, onSubmit: handleSubmitControlled },
                react_1.default.createElement("textarea", { className: modaladd_css_1.default.input, value: valueControled, onChange: handleChange }),
                react_1.default.createElement("button", { className: modaladd_css_1.default.btn, type: "submit" }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
            react_1.default.createElement("div", { className: modaladd_css_1.default.comment }, commentControled)),
        react_1.default.createElement(CommentElementContainer_1.CommentElementContainer, null),
        react_1.default.createElement(FormTestElement_1.FormTestElement, null)), node);
}
exports.ModalAdd = ModalAdd;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modalMain": "modaladd__modalMain--1V8FU",
	"title": "modaladd__title--2kSr7",
	"input": "modaladd__input--1W-6J",
	"btn": "modaladd__btn--2AIR4",
	"container": "modaladd__container--aNRKD",
	"form": "modaladd__form--2qwM4"
};


/***/ })
/******/ ]);