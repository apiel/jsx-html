"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlEncode = exports.doubleQuoteEncode = void 0;
function doubleQuoteEncode(text) {
    return text.replace(/"/g, '&quot;');
}
exports.doubleQuoteEncode = doubleQuoteEncode;
function htmlEncode(text) {
    return doubleQuoteEncode(text.replace(/&/g, '&amp;').replace(/\//g, '&#x2F;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;'));
}
exports.htmlEncode = htmlEncode;
