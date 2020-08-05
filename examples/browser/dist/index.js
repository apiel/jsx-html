(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["demo"] = factory();
	else
		root["demo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/async-jsx-html/nodejs/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/constants.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_TYPE = void 0;
var NODE_TYPE;
(function (NODE_TYPE) {
    NODE_TYPE["ELEMENT"] = "element";
    NODE_TYPE["TEXT"] = "text";
    NODE_TYPE["COMPONENT"] = "component";
    NODE_TYPE["FRAGMENT"] = "fragment";
})(NODE_TYPE = exports.NODE_TYPE || (exports.NODE_TYPE = {}));
;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/jsx.js":
/*!***************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/jsx.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragment = exports.jsx = void 0;
const ElementNode_1 = __webpack_require__(/*! ./node/ElementNode */ "./node_modules/async-jsx-html/nodejs/node/ElementNode.js");
const ComponentNode_1 = __webpack_require__(/*! ./node/ComponentNode */ "./node_modules/async-jsx-html/nodejs/node/ComponentNode.js");
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
//# sourceMappingURL=jsx.js.map

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/mod.js":
/*!***************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/mod.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.React = exports.Fragment = exports.jsx = void 0;
const jsx_1 = __webpack_require__(/*! ./jsx */ "./node_modules/async-jsx-html/nodejs/jsx.js");
Object.defineProperty(exports, "jsx", { enumerable: true, get: function () { return jsx_1.jsx; } });
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return jsx_1.Fragment; } });
var ElementNode_1 = __webpack_require__(/*! ./node/ElementNode */ "./node_modules/async-jsx-html/nodejs/node/ElementNode.js");
Object.defineProperty(exports, "ElementNode", { enumerable: true, get: function () { return ElementNode_1.ElementNode; } });
var ComponentNode_1 = __webpack_require__(/*! ./node/ComponentNode */ "./node_modules/async-jsx-html/nodejs/node/ComponentNode.js");
Object.defineProperty(exports, "ComponentNode", { enumerable: true, get: function () { return ComponentNode_1.ComponentNode; } });
exports.React = {
    Fragment: jsx_1.Fragment,
    createElement(element, props, ...children) {
        return jsx_1.jsx(element, props, ...children);
    }
};
//# sourceMappingURL=mod.js.map

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/node/ComponentNode.js":
/*!******************************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/node/ComponentNode.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentNode = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/async-jsx-html/nodejs/constants.js");
const FragmentNode_1 = __webpack_require__(/*! ./FragmentNode */ "./node_modules/async-jsx-html/nodejs/node/FragmentNode.js");
const Node_1 = __webpack_require__(/*! ./Node */ "./node_modules/async-jsx-html/nodejs/node/Node.js");
const normalizeChildren_1 = __webpack_require__(/*! ./utils/normalizeChildren */ "./node_modules/async-jsx-html/nodejs/node/utils/normalizeChildren.js");
class ComponentNode extends Node_1.Node {
    constructor(component, props, children) {
        super(children);
        this.component = component;
        this.props = props;
        this.type = constants_1.NODE_TYPE.COMPONENT;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return [].concat(yield this.renderComponent()).join('');
        });
    }
    renderComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            const child = yield this.component(this.props, this.children);
            const children = normalizeChildren_1.normalizeChildren(Array.isArray(child) ? child : [child]);
            if (children.length === 1) {
                return children[0].render();
            }
            else if (children.length > 1) {
                return new FragmentNode_1.FragmentNode(children).render();
            }
        });
    }
}
exports.ComponentNode = ComponentNode;
//# sourceMappingURL=ComponentNode.js.map

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/node/ElementNode.js":
/*!****************************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/node/ElementNode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementNode = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/async-jsx-html/nodejs/constants.js");
const Node_1 = __webpack_require__(/*! ./Node */ "./node_modules/async-jsx-html/nodejs/node/Node.js");
const htmlEncode_1 = __webpack_require__(/*! ./utils/htmlEncode */ "./node_modules/async-jsx-html/nodejs/node/utils/htmlEncode.js");
const ELEMENT_PROP = {
    INNER_HTML: 'innerHTML'
};
class ElementNode extends Node_1.Node {
    constructor(name, props, children) {
        super(children);
        this.name = name;
        this.props = props;
        this.type = constants_1.NODE_TYPE.ELEMENT;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const renderedProps = this.propsToHTML();
            const renderedChildren = typeof this.props[ELEMENT_PROP.INNER_HTML] === 'string' ? this.props[ELEMENT_PROP.INNER_HTML] : (yield this.renderChildren()).join('');
            return renderedChildren ? `<${this.name}${renderedProps}>${renderedChildren}</${this.name}>` : `<${this.name}${renderedProps} />`;
        });
    }
    getValidProps() {
        const props = this.props;
        return Object.keys(this.props).filter(key => {
            if (key === ELEMENT_PROP.INNER_HTML) {
                return false;
            }
            const val = props[key];
            return typeof val === 'string' || typeof val === 'number' || val === true;
        });
    }
    propsToHTML() {
        const keys = this.getValidProps();
        if (!keys.length) {
            return '';
        }
        const props = this.props;
        const pairs = keys.map(key => {
            if (!/^[a-zA-Z0-9-:\._]+$/.test(key)) {
                throw new Error(`Invalid attribute name format ${key}`);
            }
            const val = props[key];
            return val === true || val === '' ? key : `${key}="${htmlEncode_1.doubleQuoteEncode(val.toString())}"`;
        });
        return ` ${pairs.join(' ')}`;
    }
}
exports.ElementNode = ElementNode;
//# sourceMappingURL=ElementNode.js.map

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/node/FragmentNode.js":
/*!*****************************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/node/FragmentNode.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FragmentNode = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/async-jsx-html/nodejs/constants.js");
const Node_1 = __webpack_require__(/*! ./Node */ "./node_modules/async-jsx-html/nodejs/node/Node.js");
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

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/node/Node.js":
/*!*********************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/node/Node.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const normalizeChildren_1 = __webpack_require__(/*! ./utils/normalizeChildren */ "./node_modules/async-jsx-html/nodejs/node/utils/normalizeChildren.js");
class Node {
    constructor(children) {
        this.children = children;
    }
    renderChildren() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            const children = normalizeChildren_1.normalizeChildren(this.children);
            for (const child of children) {
                const renderedChild = yield child.render();
                if (renderedChild) {
                    if (Array.isArray(renderedChild)) {
                        renderedChild.forEach(subchild => subchild && result.push(subchild));
                    }
                    else {
                        result.push(renderedChild);
                    }
                }
            }
            return result;
        });
    }
}
exports.Node = Node;
//# sourceMappingURL=Node.js.map

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/node/TextNode.js":
/*!*************************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/node/TextNode.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextNode = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/async-jsx-html/nodejs/constants.js");
const htmlEncode_1 = __webpack_require__(/*! ./utils/htmlEncode */ "./node_modules/async-jsx-html/nodejs/node/utils/htmlEncode.js");
class TextNode {
    constructor(text) {
        this.text = text;
        this.type = constants_1.NODE_TYPE.TEXT;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return htmlEncode_1.htmlEncode(this.text);
        });
    }
}
exports.TextNode = TextNode;
//# sourceMappingURL=TextNode.js.map

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/node/utils/htmlEncode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/node/utils/htmlEncode.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
//# sourceMappingURL=htmlEncode.js.map

/***/ }),

/***/ "./node_modules/async-jsx-html/nodejs/node/utils/normalizeChildren.js":
/*!****************************************************************************!*\
  !*** ./node_modules/async-jsx-html/nodejs/node/utils/normalizeChildren.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeChildren = void 0;
const TextNode_1 = __webpack_require__(/*! ../TextNode */ "./node_modules/async-jsx-html/nodejs/node/TextNode.js");
const constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/async-jsx-html/nodejs/constants.js");
function normalizeChildren(children) {
    const result = [];
    for (const child of children) {
        if (child && typeof child !== 'boolean') {
            if (typeof child === 'string' || typeof child === 'number') {
                result.push(new TextNode_1.TextNode(`${child}`));
            }
            else if (Array.isArray(child)) {
                normalizeChildren(child).forEach(result.push);
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
//# sourceMappingURL=normalizeChildren.js.map

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.Test = void 0;
var async_jsx_html_1 = __webpack_require__(/*! async-jsx-html */ "./node_modules/async-jsx-html/nodejs/mod.js");
function Test() {
    return async_jsx_html_1.jsx("div", null, "Hello World");
}
exports.Test = Test;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9kZW1vLy4vbm9kZV9tb2R1bGVzL2FzeW5jLWpzeC1odG1sL25vZGVqcy9qc3guanMiLCJ3ZWJwYWNrOi8vZGVtby8uL25vZGVfbW9kdWxlcy9hc3luYy1qc3gtaHRtbC9ub2RlanMvbW9kLmpzIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL25vZGUvQ29tcG9uZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly9kZW1vLy4vbm9kZV9tb2R1bGVzL2FzeW5jLWpzeC1odG1sL25vZGVqcy9ub2RlL0VsZW1lbnROb2RlLmpzIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL25vZGUvRnJhZ21lbnROb2RlLmpzIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL25vZGUvTm9kZS5qcyIsIndlYnBhY2s6Ly9kZW1vLy4vbm9kZV9tb2R1bGVzL2FzeW5jLWpzeC1odG1sL25vZGVqcy9ub2RlL1RleHROb2RlLmpzIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL25vZGUvdXRpbHMvaHRtbEVuY29kZS5qcyIsIndlYnBhY2s6Ly9kZW1vLy4vbm9kZV9tb2R1bGVzL2FzeW5jLWpzeC1odG1sL25vZGVqcy9ub2RlL3V0aWxzL25vcm1hbGl6ZUNoaWxkcmVuLmpzIiwid2VicGFjazovL2RlbW8vLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtB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QUM7QUFGRCxvQkFFQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRlbW9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGVtb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5OT0RFX1RZUEUgPSB2b2lkIDA7XG52YXIgTk9ERV9UWVBFO1xuKGZ1bmN0aW9uIChOT0RFX1RZUEUpIHtcbiAgICBOT0RFX1RZUEVbXCJFTEVNRU5UXCJdID0gXCJlbGVtZW50XCI7XG4gICAgTk9ERV9UWVBFW1wiVEVYVFwiXSA9IFwidGV4dFwiO1xuICAgIE5PREVfVFlQRVtcIkNPTVBPTkVOVFwiXSA9IFwiY29tcG9uZW50XCI7XG4gICAgTk9ERV9UWVBFW1wiRlJBR01FTlRcIl0gPSBcImZyYWdtZW50XCI7XG59KShOT0RFX1RZUEUgPSBleHBvcnRzLk5PREVfVFlQRSB8fCAoZXhwb3J0cy5OT0RFX1RZUEUgPSB7fSkpO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5GcmFnbWVudCA9IGV4cG9ydHMuanN4ID0gdm9pZCAwO1xuY29uc3QgRWxlbWVudE5vZGVfMSA9IHJlcXVpcmUoXCIuL25vZGUvRWxlbWVudE5vZGVcIik7XG5jb25zdCBDb21wb25lbnROb2RlXzEgPSByZXF1aXJlKFwiLi9ub2RlL0NvbXBvbmVudE5vZGVcIik7XG5leHBvcnRzLmpzeCA9IChlbGVtZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBub2RlUHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudE5vZGVfMS5FbGVtZW50Tm9kZShlbGVtZW50LCBub2RlUHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29tcG9uZW50Tm9kZV8xLkNvbXBvbmVudE5vZGUoZWxlbWVudCwgbm9kZVByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGpzeCBlbGVtZW50IHRvIGJlIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb25gKTtcbn07XG5leHBvcnRzLkZyYWdtZW50ID0gKHByb3BzLCBjaGlsZHJlbikgPT4ge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc3guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlYWN0ID0gZXhwb3J0cy5GcmFnbWVudCA9IGV4cG9ydHMuanN4ID0gdm9pZCAwO1xuY29uc3QganN4XzEgPSByZXF1aXJlKFwiLi9qc3hcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJqc3hcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGpzeF8xLmpzeDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkZyYWdtZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBqc3hfMS5GcmFnbWVudDsgfSB9KTtcbnZhciBFbGVtZW50Tm9kZV8xID0gcmVxdWlyZShcIi4vbm9kZS9FbGVtZW50Tm9kZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVsZW1lbnROb2RlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBFbGVtZW50Tm9kZV8xLkVsZW1lbnROb2RlOyB9IH0pO1xudmFyIENvbXBvbmVudE5vZGVfMSA9IHJlcXVpcmUoXCIuL25vZGUvQ29tcG9uZW50Tm9kZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvbXBvbmVudE5vZGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENvbXBvbmVudE5vZGVfMS5Db21wb25lbnROb2RlOyB9IH0pO1xuZXhwb3J0cy5SZWFjdCA9IHtcbiAgICBGcmFnbWVudDoganN4XzEuRnJhZ21lbnQsXG4gICAgY3JlYXRlRWxlbWVudChlbGVtZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIGpzeF8xLmpzeChlbGVtZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tcG9uZW50Tm9kZSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IEZyYWdtZW50Tm9kZV8xID0gcmVxdWlyZShcIi4vRnJhZ21lbnROb2RlXCIpO1xuY29uc3QgTm9kZV8xID0gcmVxdWlyZShcIi4vTm9kZVwiKTtcbmNvbnN0IG5vcm1hbGl6ZUNoaWxkcmVuXzEgPSByZXF1aXJlKFwiLi91dGlscy9ub3JtYWxpemVDaGlsZHJlblwiKTtcbmNsYXNzIENvbXBvbmVudE5vZGUgZXh0ZW5kcyBOb2RlXzEuTm9kZSB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICAgICAgc3VwZXIoY2hpbGRyZW4pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnR5cGUgPSBjb25zdGFudHNfMS5OT0RFX1RZUEUuQ09NUE9ORU5UO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW10uY29uY2F0KHlpZWxkIHRoaXMucmVuZGVyQ29tcG9uZW50KCkpLmpvaW4oJycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB5aWVsZCB0aGlzLmNvbXBvbmVudCh0aGlzLnByb3BzLCB0aGlzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW5fMS5ub3JtYWxpemVDaGlsZHJlbihBcnJheS5pc0FycmF5KGNoaWxkKSA/IGNoaWxkIDogW2NoaWxkXSk7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuWzBdLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRnJhZ21lbnROb2RlXzEuRnJhZ21lbnROb2RlKGNoaWxkcmVuKS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Db21wb25lbnROb2RlID0gQ29tcG9uZW50Tm9kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbXBvbmVudE5vZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRWxlbWVudE5vZGUgPSB2b2lkIDA7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBOb2RlXzEgPSByZXF1aXJlKFwiLi9Ob2RlXCIpO1xuY29uc3QgaHRtbEVuY29kZV8xID0gcmVxdWlyZShcIi4vdXRpbHMvaHRtbEVuY29kZVwiKTtcbmNvbnN0IEVMRU1FTlRfUFJPUCA9IHtcbiAgICBJTk5FUl9IVE1MOiAnaW5uZXJIVE1MJ1xufTtcbmNsYXNzIEVsZW1lbnROb2RlIGV4dGVuZHMgTm9kZV8xLk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgICAgICBzdXBlcihjaGlsZHJlbik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy50eXBlID0gY29uc3RhbnRzXzEuTk9ERV9UWVBFLkVMRU1FTlQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkUHJvcHMgPSB0aGlzLnByb3BzVG9IVE1MKCk7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZENoaWxkcmVuID0gdHlwZW9mIHRoaXMucHJvcHNbRUxFTUVOVF9QUk9QLklOTkVSX0hUTUxdID09PSAnc3RyaW5nJyA/IHRoaXMucHJvcHNbRUxFTUVOVF9QUk9QLklOTkVSX0hUTUxdIDogKHlpZWxkIHRoaXMucmVuZGVyQ2hpbGRyZW4oKSkuam9pbignJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiA/IGA8JHt0aGlzLm5hbWV9JHtyZW5kZXJlZFByb3BzfT4ke3JlbmRlcmVkQ2hpbGRyZW59PC8ke3RoaXMubmFtZX0+YCA6IGA8JHt0aGlzLm5hbWV9JHtyZW5kZXJlZFByb3BzfSAvPmA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRWYWxpZFByb3BzKCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IEVMRU1FTlRfUFJPUC5JTk5FUl9IVE1MKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB2YWwgPT09IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm9wc1RvSFRNTCgpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMuZ2V0VmFsaWRQcm9wcygpO1xuICAgICAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwYWlycyA9IGtleXMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIS9eW2EtekEtWjAtOS06XFwuX10rJC8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGF0dHJpYnV0ZSBuYW1lIGZvcm1hdCAke2tleX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHByb3BzW2tleV07XG4gICAgICAgICAgICByZXR1cm4gdmFsID09PSB0cnVlIHx8IHZhbCA9PT0gJycgPyBrZXkgOiBgJHtrZXl9PVwiJHtodG1sRW5jb2RlXzEuZG91YmxlUXVvdGVFbmNvZGUodmFsLnRvU3RyaW5nKCkpfVwiYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBgICR7cGFpcnMuam9pbignICcpfWA7XG4gICAgfVxufVxuZXhwb3J0cy5FbGVtZW50Tm9kZSA9IEVsZW1lbnROb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RWxlbWVudE5vZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZyYWdtZW50Tm9kZSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IE5vZGVfMSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jbGFzcyBGcmFnbWVudE5vZGUgZXh0ZW5kcyBOb2RlXzEuTm9kZSB7XG4gICAgY29uc3RydWN0b3IoY2hpbGRyZW4pIHtcbiAgICAgICAgc3VwZXIoY2hpbGRyZW4pO1xuICAgICAgICB0aGlzLnR5cGUgPSBjb25zdGFudHNfMS5OT0RFX1RZUEUuRlJBR01FTlQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICB9XG59XG5leHBvcnRzLkZyYWdtZW50Tm9kZSA9IEZyYWdtZW50Tm9kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZyYWdtZW50Tm9kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ob2RlID0gdm9pZCAwO1xuY29uc3Qgbm9ybWFsaXplQ2hpbGRyZW5fMSA9IHJlcXVpcmUoXCIuL3V0aWxzL25vcm1hbGl6ZUNoaWxkcmVuXCIpO1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIH1cbiAgICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbl8xLm5vcm1hbGl6ZUNoaWxkcmVuKHRoaXMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkQ2hpbGQgPSB5aWVsZCBjaGlsZC5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVuZGVyZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZW5kZXJlZENoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWRDaGlsZC5mb3JFYWNoKHN1YmNoaWxkID0+IHN1YmNoaWxkICYmIHJlc3VsdC5wdXNoKHN1YmNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChyZW5kZXJlZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTm9kZSA9IE5vZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRleHROb2RlID0gdm9pZCAwO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgaHRtbEVuY29kZV8xID0gcmVxdWlyZShcIi4vdXRpbHMvaHRtbEVuY29kZVwiKTtcbmNsYXNzIFRleHROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudHlwZSA9IGNvbnN0YW50c18xLk5PREVfVFlQRS5URVhUO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbEVuY29kZV8xLmh0bWxFbmNvZGUodGhpcy50ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5UZXh0Tm9kZSA9IFRleHROb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGV4dE5vZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmh0bWxFbmNvZGUgPSBleHBvcnRzLmRvdWJsZVF1b3RlRW5jb2RlID0gdm9pZCAwO1xuZnVuY3Rpb24gZG91YmxlUXVvdGVFbmNvZGUodGV4dCkge1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn1cbmV4cG9ydHMuZG91YmxlUXVvdGVFbmNvZGUgPSBkb3VibGVRdW90ZUVuY29kZTtcbmZ1bmN0aW9uIGh0bWxFbmNvZGUodGV4dCkge1xuICAgIHJldHVybiBkb3VibGVRdW90ZUVuY29kZSh0ZXh0LnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvXFwvL2csICcmI3gyRjsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoLycvZywgJyYjMzk7JykpO1xufVxuZXhwb3J0cy5odG1sRW5jb2RlID0gaHRtbEVuY29kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxFbmNvZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm5vcm1hbGl6ZUNoaWxkcmVuID0gdm9pZCAwO1xuY29uc3QgVGV4dE5vZGVfMSA9IHJlcXVpcmUoXCIuLi9UZXh0Tm9kZVwiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgVGV4dE5vZGVfMS5UZXh0Tm9kZShgJHtjaGlsZH1gKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkKS5mb3JFYWNoKHJlc3VsdC5wdXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09IGNvbnN0YW50c18xLk5PREVfVFlQRS5FTEVNRU5UIHx8IGNoaWxkLnR5cGUgPT09IGNvbnN0YW50c18xLk5PREVfVFlQRS5URVhUIHx8IGNoaWxkLnR5cGUgPT09IGNvbnN0YW50c18xLk5PREVfVFlQRS5DT01QT05FTlQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbnJlY29nbml6ZWQgbm9kZSB0eXBlOiAke3R5cGVvZiBjaGlsZH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5ub3JtYWxpemVDaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplQ2hpbGRyZW4uanMubWFwIiwiaW1wb3J0IHsganN4LCBFbGVtZW50Tm9kZSB9IGZyb20gJ2FzeW5jLWpzeC1odG1sJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRlc3QoKTogRWxlbWVudE5vZGUge1xuICAgIHJldHVybiA8ZGl2PkhlbGxvIFdvcmxkPC9kaXY+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==