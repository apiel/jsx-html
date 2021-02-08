"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeChildren = void 0;
const TextNode_1 = require("../TextNode");
const constants_1 = require("../../constants");
function normalizeChildren(children) {
    const result = [];
    for (const child of children) {
        if (child && typeof child !== 'boolean') {
            if (typeof child === 'string' || typeof child === 'number') {
                result.push(new TextNode_1.TextNode(`${child}`));
            }
            else if (Array.isArray(child)) {
                normalizeChildren(child).forEach(normalized => result.push(normalized));
            }
            else if (child.type === constants_1.NODE_TYPE.ELEMENT || child.type === constants_1.NODE_TYPE.TEXT || child.type === constants_1.NODE_TYPE.COMPONENT) {
                result.push(child);
            }
            else {
                throw new TypeError(`Unrecognized node type: ${typeof child}`);
            }
        }
    }
    return result;
}
exports.normalizeChildren = normalizeChildren;
