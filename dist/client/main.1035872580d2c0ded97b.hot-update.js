webpackHotUpdate("main",{

/***/ "./src/shared/IconComponent/IconComponent.tsx":
/*!****************************************************!*\
  !*** ./src/shared/IconComponent/IconComponent.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconComponent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar iconcomponent_css_1 = __importDefault(__webpack_require__(/*! ./iconcomponent.css */ \"./src/shared/IconComponent/iconcomponent.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nvar icons = { \"IconComment\": icons_1.IconComment, \"IconShare\": icons_1.IconShare, \"IconHidden\": icons_1.IconHidden,\r\n    \"IconSave\": icons_1.IconSave, \"IconComplain\": icons_1.IconComplain, \"IconMenu\": icons_1.IconMenu, \"IconAnon\": icons_1.IconAnon };\r\nfunction IconComponent(_a) {\r\n    var name = _a.name, size = _a.size;\r\n    var classes = (0, classnames_1.default)(iconcomponent_css_1.default[\"iconSize\".concat(size)]);\r\n    var element = icons[name];\r\n    return react_1.default.createElement(\"span\", { className: classes }, element);\r\n}\r\nexports.IconComponent = IconComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/IconComponent/IconComponent.tsx?");

/***/ }),

/***/ "./src/shared/IconComponent/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/IconComponent/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./IconComponent */ \"./src/shared/IconComponent/IconComponent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/IconComponent/index.ts?");

/***/ })

})