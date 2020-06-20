"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FragmentNode = void 0;
const constants_1 = require("../constants");
const Node_1 = require("./Node");
class FragmentNode extends Node_1.Node {
    constructor(children) {
        super(children);
        this.type = constants_1.NODE_TYPE.FRAGMENT;
    }
    render() {
        return this.renderChildren();
    }
}
exports.FragmentNode = FragmentNode;
//# sourceMappingURL=FragmentNode.js.map