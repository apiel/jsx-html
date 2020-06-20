"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "jsx", {
  enumerable: true,
  get: function get() {
    return _jsx.jsx;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function get() {
    return _jsx.Fragment;
  }
});
Object.defineProperty(exports, "ComponentFunctionType", {
  enumerable: true,
  get: function get() {
    return _types.ComponentFunctionType;
  }
});
Object.defineProperty(exports, "NodePropsType", {
  enumerable: true,
  get: function get() {
    return _types.NodePropsType;
  }
});
Object.defineProperty(exports, "NullableChildType", {
  enumerable: true,
  get: function get() {
    return _types.NullableChildType;
  }
});
Object.defineProperty(exports, "ElementNode", {
  enumerable: true,
  get: function get() {
    return _ElementNode.ElementNode;
  }
});
Object.defineProperty(exports, "ComponentNode", {
  enumerable: true,
  get: function get() {
    return _ComponentNode.ComponentNode;
  }
});
exports.React = void 0;

var _jsx = require("./jsx");

var _types = require("./types");

var _ElementNode = require("./node/ElementNode");

var _ComponentNode = require("./node/ComponentNode");

// @ts-ignore
// @ts-ignore
// @ts-ignore
var React = {
  Fragment: _jsx.Fragment,
  createElement: function createElement(element, props) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    return _jsx.jsx.apply(void 0, [element, props].concat(children));
  }
};
exports.React = React;