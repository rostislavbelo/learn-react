webpackHotUpdate("main",{

/***/ "./src/shared/ModalMain/ModalMain.tsx":
/*!********************************************!*\
  !*** ./src/shared/ModalMain/ModalMain.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ModalMain = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar modalmain_css_1 = __importDefault(__webpack_require__(/*! ./modalmain.css */ \"./src/shared/ModalMain/modalmain.css\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar useCloseModal_1 = __webpack_require__(/*! ../../hooks/useCloseModal */ \"./src/hooks/useCloseModal.ts\");\r\nvar commentContext_1 = __webpack_require__(/*! ../context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar CommentElementContainer_1 = __webpack_require__(/*! ../CommentElementContainer */ \"./src/shared/CommentElementContainer/index.ts\");\r\nvar FormTestElement_1 = __webpack_require__(/*! ../FormTestElement */ \"./src/shared/FormTestElement/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nfunction ModalMain(props) {\r\n    var ref = (0, react_1.useRef)(null);\r\n    // useEffect(()=>{\r\n    //   function handleClick(event:MouseEvent) {\r\n    //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {\r\n    //       props.onClose?.();\r\n    //     }\r\n    //   }\r\n    //   document.addEventListener('click', handleClick)\r\n    //   return () => {\r\n    //     document.removeEventListener('click', handleClick)\r\n    //   }\r\n    // },[]);\r\n    var history = (0, react_router_dom_1.useNavigate)();\r\n    // Заменяет код выше внешним хуком\r\n    (0, useCloseModal_1.useCloseModal)(function () { var _a; [(_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props), history('/')]; }, ref);\r\n    var node = document.querySelector(\"#modal_root\");\r\n    if (!node) {\r\n        return null;\r\n    }\r\n    // для неуправляемого инпута\r\n    var commentDefault = null;\r\n    var refInputUncontroled = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        (_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, []);\r\n    var _a = (0, react_1.useState)(\"\"), comment = _a[0], setComment = _a[1];\r\n    function handleSubmit(event) {\r\n        var _a, _b;\r\n        event.preventDefault();\r\n        console.log((_a = refInputUncontroled.current) === null || _a === void 0 ? void 0 : _a.value);\r\n        setComment(\"\".concat((_b = refInputUncontroled.current) === null || _b === void 0 ? void 0 : _b.value));\r\n    }\r\n    //---------------------------------------------------------------------\r\n    // Для управляемого инпута\r\n    // const [valueControled, setValueControled] = useState(\"\"); //- вынесли наверх в App в контекст onChange заменяет setValueControled\r\n    var _b = (0, react_1.useContext)(commentContext_1.commentContext), valueControled = _b.valueControled, onChange = _b.onChange;\r\n    function handleChange(event) {\r\n        onChange(event.target.value);\r\n    }\r\n    var _c = (0, react_1.useState)(\"\"), commentControled = _c[0], setCommentControled = _c[1];\r\n    function handleSubmitControlled(event) {\r\n        event.preventDefault();\r\n        setCommentControled(valueControled);\r\n    }\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: modalmain_css_1.default.modalMain, ref: ref },\r\n        react_1.default.createElement(\"h2\", { className: modalmain_css_1.default.title }, \"\\u041F\\u0440\\u0438\\u043C\\u0435\\u0440 \\u043C\\u043E\\u0434\\u0430\\u043B\\u043A\\u0438 \\u0447\\u0435\\u0440\\u0435\\u0437 Portal\"),\r\n        react_1.default.createElement(\"div\", { className: modalmain_css_1.default.container },\r\n            react_1.default.createElement(\"h3\", null, \"\\u041D\\u0435\\u0443\\u043F\\u0440\\u0430\\u0432\\u043B\\u044F\\u0435\\u043C\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435 \\u0432\\u0432\\u043E\\u0434\\u0430 \\u0441 focus \\u0447\\u0435\\u0440\\u0435\\u0437 ref\"),\r\n            react_1.default.createElement(\"form\", { className: modalmain_css_1.default.form, onSubmit: handleSubmit },\r\n                react_1.default.createElement(\"textarea\", { className: modalmain_css_1.default.input, ref: refInputUncontroled }),\r\n                react_1.default.createElement(\"button\", { className: modalmain_css_1.default.btn, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"div\", { className: modalmain_css_1.default.comment }, comment)),\r\n        react_1.default.createElement(\"div\", { className: modalmain_css_1.default.container },\r\n            react_1.default.createElement(\"h3\", null, \"\\u0423\\u043F\\u0440\\u0430\\u0432\\u043B\\u044F\\u0435\\u043C\\u043E\\u0435 \\u043F\\u043E\\u043B\\u0435 \\u0432\\u0432\\u043E\\u0434\\u0430 \\u0441 \\u0441\\u043E\\u0445\\u0440\\u0430\\u043D\\u0435\\u043D\\u0438\\u0435\\u043C \\u0432\\u0432\\u0435\\u0434\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E  \\u0441 \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C\\u044E context\"),\r\n            react_1.default.createElement(\"form\", { className: modalmain_css_1.default.form, onSubmit: handleSubmitControlled },\r\n                react_1.default.createElement(\"textarea\", { className: modalmain_css_1.default.input, value: valueControled, onChange: handleChange }),\r\n                react_1.default.createElement(\"button\", { className: modalmain_css_1.default.btn, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"div\", { className: modalmain_css_1.default.comment }, commentControled)),\r\n        react_1.default.createElement(CommentElementContainer_1.CommentElementContainer, null),\r\n        react_1.default.createElement(FormTestElement_1.FormTestElement, null)), node);\r\n}\r\nexports.ModalMain = ModalMain;\r\n\n\n//# sourceURL=webpack:///./src/shared/ModalMain/ModalMain.tsx?");

/***/ }),

/***/ "./src/shared/ModalMain/index.ts":
/*!***************************************!*\
  !*** ./src/shared/ModalMain/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ModalMain */ \"./src/shared/ModalMain/ModalMain.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/ModalMain/index.ts?");

/***/ })

})