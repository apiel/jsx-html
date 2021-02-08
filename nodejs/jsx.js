"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragment = exports.jsx = void 0;
const ElementNode_1 = require("./node/ElementNode");
const ComponentNode_1 = require("./node/ComponentNode");
exports.jsx = (element, props, ...children) => {
    const nodeProps = props || {};
    if (typeof element === 'string') {
        return new ElementNode_1.ElementNode(element, nodeProps, children);
    }
    if (typeof element === 'function') {
        return new ComponentNode_1.ComponentNode(element, nodeProps, children);
    }
    throw new TypeError(`Expected jsx element to be a string or a function`);
};
exports.Fragment = (props, children) => {
    return children;
};
