"use strict";
exports.__esModule = true;
exports.SearchBlock = void 0;
var react_1 = require("react");
var searchblock_css_1 = require("./searchblock.css");
var UserBlock_1 = require("./UserBlock");
var useUserData_1 = require("../../../hooks/useUserData");
// interface ISearchBlockProps {
//   token: string;
// }
function SearchBlock() {
    var data = useUserData_1.UseUserData()[0];
    return (react_1["default"].createElement("div", { className: searchblock_css_1["default"].search },
        react_1["default"].createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));
}
exports.SearchBlock = SearchBlock;
