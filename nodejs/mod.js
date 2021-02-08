"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.React = exports.Fragment = exports.jsx = void 0;
const jsx_1 = require("./jsx");
Object.defineProperty(exports, "jsx", { enumerable: true, get: function () { return jsx_1.jsx; } });
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return jsx_1.Fragment; } });
var ElementNode_1 = require("./node/ElementNode");
Object.defineProperty(exports, "ElementNode", { enumerable: true, get: function () { return ElementNode_1.ElementNode; } });
var ComponentNode_1 = require("./node/ComponentNode");
Object.defineProperty(exports, "ComponentNode", { enumerable: true, get: function () { return ComponentNode_1.ComponentNode; } });
exports.React = {
    Fragment: jsx_1.Fragment,
    createElement(element, props, ...children) {
        return jsx_1.jsx(element, Object.assign(Object.assign({}, props), { children }), ...children);
    }
};
exports.default = exports.React;
//# sourceMappingURL=mod.js.map