"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doubleQuoteEncode = doubleQuoteEncode;
exports.htmlEncode = htmlEncode;

function doubleQuoteEncode(text) {
  return text.replace(/"/g, '&quot;');
}

function htmlEncode(text) {
  return doubleQuoteEncode(text.replace(/&/g, '&amp;').replace(/\//g, '&#x2F;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;'));
}