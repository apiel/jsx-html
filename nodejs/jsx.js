"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fragment = exports.jsx = void 0;

var _ElementNode = require("./node/ElementNode");

var _ComponentNode = require("./node/ComponentNode");

// @ts-ignore
// @ts-ignore
var jsx = function jsx(element, props) {
  var nodeProps = props || {};

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (typeof element === 'string') {
    return new _ElementNode.ElementNode(element, nodeProps, children);
  }

  if (typeof element === 'function') {
    return new _ComponentNode.ComponentNode(element, nodeProps, children);
  }

  throw new TypeError("Expected jsx element to be a string or a function");
};

exports.jsx = jsx;

var Fragment = function Fragment(props, children) {
  return children;
};

exports.Fragment = Fragment;