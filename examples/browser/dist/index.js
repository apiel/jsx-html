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
function Test(props) {
    console.log(props);
    return (async_jsx_html_1.jsx("div", null, "Hello World"));
}
exports.Test = Test;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9kZW1vLy4vbm9kZV9tb2R1bGVzL2FzeW5jLWpzeC1odG1sL25vZGVqcy9qc3guanMiLCJ3ZWJwYWNrOi8vZGVtby8uL25vZGVfbW9kdWxlcy9hc3luYy1qc3gtaHRtbC9ub2RlanMvbW9kLmpzIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL25vZGUvQ29tcG9uZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly9kZW1vLy4vbm9kZV9tb2R1bGVzL2FzeW5jLWpzeC1odG1sL25vZGVqcy9ub2RlL0VsZW1lbnROb2RlLmpzIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL25vZGUvRnJhZ21lbnROb2RlLmpzIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL25vZGUvTm9kZS5qcyIsIndlYnBhY2s6Ly9kZW1vLy4vbm9kZV9tb2R1bGVzL2FzeW5jLWpzeC1odG1sL25vZGVqcy9ub2RlL1RleHROb2RlLmpzIiwid2VicGFjazovL2RlbW8vLi9ub2RlX21vZHVsZXMvYXN5bmMtanN4LWh0bWwvbm9kZWpzL25vZGUvdXRpbHMvaHRtbEVuY29kZS5qcyIsIndlYnBhY2s6Ly9kZW1vLy4vbm9kZV9tb2R1bGVzL2FzeW5jLWpzeC1odG1sL25vZGVqcy9ub2RlL3V0aWxzL25vcm1hbGl6ZUNoaWxkcmVuLmpzIiwid2VicGFjazovL2RlbW8vLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtB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Q0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixPQUFPLENBQ0wsZ0RBQXNCLENBQ3ZCO0FBQ0gsQ0FBQztBQUxELG9CQUtDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGVtb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkZW1vXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5PREVfVFlQRSA9IHZvaWQgMDtcbnZhciBOT0RFX1RZUEU7XG4oZnVuY3Rpb24gKE5PREVfVFlQRSkge1xuICAgIE5PREVfVFlQRVtcIkVMRU1FTlRcIl0gPSBcImVsZW1lbnRcIjtcbiAgICBOT0RFX1RZUEVbXCJURVhUXCJdID0gXCJ0ZXh0XCI7XG4gICAgTk9ERV9UWVBFW1wiQ09NUE9ORU5UXCJdID0gXCJjb21wb25lbnRcIjtcbiAgICBOT0RFX1RZUEVbXCJGUkFHTUVOVFwiXSA9IFwiZnJhZ21lbnRcIjtcbn0pKE5PREVfVFlQRSA9IGV4cG9ydHMuTk9ERV9UWVBFIHx8IChleHBvcnRzLk5PREVfVFlQRSA9IHt9KSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZyYWdtZW50ID0gZXhwb3J0cy5qc3ggPSB2b2lkIDA7XG5jb25zdCBFbGVtZW50Tm9kZV8xID0gcmVxdWlyZShcIi4vbm9kZS9FbGVtZW50Tm9kZVwiKTtcbmNvbnN0IENvbXBvbmVudE5vZGVfMSA9IHJlcXVpcmUoXCIuL25vZGUvQ29tcG9uZW50Tm9kZVwiKTtcbmV4cG9ydHMuanN4ID0gKGVsZW1lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IG5vZGVQcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50Tm9kZV8xLkVsZW1lbnROb2RlKGVsZW1lbnQsIG5vZGVQcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnROb2RlXzEuQ29tcG9uZW50Tm9kZShlbGVtZW50LCBub2RlUHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQganN4IGVsZW1lbnQgdG8gYmUgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbmApO1xufTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PiB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzeC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVhY3QgPSBleHBvcnRzLkZyYWdtZW50ID0gZXhwb3J0cy5qc3ggPSB2b2lkIDA7XG5jb25zdCBqc3hfMSA9IHJlcXVpcmUoXCIuL2pzeFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImpzeFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4ganN4XzEuanN4OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRnJhZ21lbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGpzeF8xLkZyYWdtZW50OyB9IH0pO1xudmFyIEVsZW1lbnROb2RlXzEgPSByZXF1aXJlKFwiLi9ub2RlL0VsZW1lbnROb2RlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRWxlbWVudE5vZGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEVsZW1lbnROb2RlXzEuRWxlbWVudE5vZGU7IH0gfSk7XG52YXIgQ29tcG9uZW50Tm9kZV8xID0gcmVxdWlyZShcIi4vbm9kZS9Db21wb25lbnROb2RlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29tcG9uZW50Tm9kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ29tcG9uZW50Tm9kZV8xLkNvbXBvbmVudE5vZGU7IH0gfSk7XG5leHBvcnRzLlJlYWN0ID0ge1xuICAgIEZyYWdtZW50OiBqc3hfMS5GcmFnbWVudCxcbiAgICBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4ganN4XzEuanN4KGVsZW1lbnQsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21wb25lbnROb2RlID0gdm9pZCAwO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgRnJhZ21lbnROb2RlXzEgPSByZXF1aXJlKFwiLi9GcmFnbWVudE5vZGVcIik7XG5jb25zdCBOb2RlXzEgPSByZXF1aXJlKFwiLi9Ob2RlXCIpO1xuY29uc3Qgbm9ybWFsaXplQ2hpbGRyZW5fMSA9IHJlcXVpcmUoXCIuL3V0aWxzL25vcm1hbGl6ZUNoaWxkcmVuXCIpO1xuY2xhc3MgQ29tcG9uZW50Tm9kZSBleHRlbmRzIE5vZGVfMS5Ob2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICAgICAgICBzdXBlcihjaGlsZHJlbik7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMudHlwZSA9IGNvbnN0YW50c18xLk5PREVfVFlQRS5DT01QT05FTlQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXS5jb25jYXQoeWllbGQgdGhpcy5yZW5kZXJDb21wb25lbnQoKSkuam9pbignJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHlpZWxkIHRoaXMuY29tcG9uZW50KHRoaXMucHJvcHMsIHRoaXMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbl8xLm5vcm1hbGl6ZUNoaWxkcmVuKEFycmF5LmlzQXJyYXkoY2hpbGQpID8gY2hpbGQgOiBbY2hpbGRdKTtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5bMF0ucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFnbWVudE5vZGVfMS5GcmFnbWVudE5vZGUoY2hpbGRyZW4pLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkNvbXBvbmVudE5vZGUgPSBDb21wb25lbnROb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tcG9uZW50Tm9kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbGVtZW50Tm9kZSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IE5vZGVfMSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jb25zdCBodG1sRW5jb2RlXzEgPSByZXF1aXJlKFwiLi91dGlscy9odG1sRW5jb2RlXCIpO1xuY29uc3QgRUxFTUVOVF9QUk9QID0ge1xuICAgIElOTkVSX0hUTUw6ICdpbm5lckhUTUwnXG59O1xuY2xhc3MgRWxlbWVudE5vZGUgZXh0ZW5kcyBOb2RlXzEuTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgICAgIHN1cGVyKGNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLnR5cGUgPSBjb25zdGFudHNfMS5OT0RFX1RZUEUuRUxFTUVOVDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRQcm9wcyA9IHRoaXMucHJvcHNUb0hUTUwoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkQ2hpbGRyZW4gPSB0eXBlb2YgdGhpcy5wcm9wc1tFTEVNRU5UX1BST1AuSU5ORVJfSFRNTF0gPT09ICdzdHJpbmcnID8gdGhpcy5wcm9wc1tFTEVNRU5UX1BST1AuSU5ORVJfSFRNTF0gOiAoeWllbGQgdGhpcy5yZW5kZXJDaGlsZHJlbigpKS5qb2luKCcnKTtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuID8gYDwke3RoaXMubmFtZX0ke3JlbmRlcmVkUHJvcHN9PiR7cmVuZGVyZWRDaGlsZHJlbn08LyR7dGhpcy5uYW1lfT5gIDogYDwke3RoaXMubmFtZX0ke3JlbmRlcmVkUHJvcHN9IC8+YDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFZhbGlkUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gRUxFTUVOVF9QUk9QLklOTkVSX0hUTUwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHZhbCA9PT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb3BzVG9IVE1MKCkge1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5nZXRWYWxpZFByb3BzKCk7XG4gICAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHBhaXJzID0ga2V5cy5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghL15bYS16QS1aMC05LTpcXC5fXSskLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYXR0cmlidXRlIG5hbWUgZm9ybWF0ICR7a2V5fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIHJldHVybiB2YWwgPT09IHRydWUgfHwgdmFsID09PSAnJyA/IGtleSA6IGAke2tleX09XCIke2h0bWxFbmNvZGVfMS5kb3VibGVRdW90ZUVuY29kZSh2YWwudG9TdHJpbmcoKSl9XCJgO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGAgJHtwYWlycy5qb2luKCcgJyl9YDtcbiAgICB9XG59XG5leHBvcnRzLkVsZW1lbnROb2RlID0gRWxlbWVudE5vZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FbGVtZW50Tm9kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRnJhZ21lbnROb2RlID0gdm9pZCAwO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgTm9kZV8xID0gcmVxdWlyZShcIi4vTm9kZVwiKTtcbmNsYXNzIEZyYWdtZW50Tm9kZSBleHRlbmRzIE5vZGVfMS5Ob2RlIHtcbiAgICBjb25zdHJ1Y3RvcihjaGlsZHJlbikge1xuICAgICAgICBzdXBlcihjaGlsZHJlbik7XG4gICAgICAgIHRoaXMudHlwZSA9IGNvbnN0YW50c18xLk5PREVfVFlQRS5GUkFHTUVOVDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuRnJhZ21lbnROb2RlID0gRnJhZ21lbnROb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RnJhZ21lbnROb2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5vZGUgPSB2b2lkIDA7XG5jb25zdCBub3JtYWxpemVDaGlsZHJlbl8xID0gcmVxdWlyZShcIi4vdXRpbHMvbm9ybWFsaXplQ2hpbGRyZW5cIik7XG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihjaGlsZHJlbikge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfVxuICAgIHJlbmRlckNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuXzEubm9ybWFsaXplQ2hpbGRyZW4odGhpcy5jaGlsZHJlbik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRDaGlsZCA9IHlpZWxkIGNoaWxkLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlbmRlcmVkQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlZENoaWxkLmZvckVhY2goc3ViY2hpbGQgPT4gc3ViY2hpbGQgJiYgcmVzdWx0LnB1c2goc3ViY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJlbmRlcmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Ob2RlID0gTm9kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGV4dE5vZGUgPSB2b2lkIDA7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBodG1sRW5jb2RlXzEgPSByZXF1aXJlKFwiLi91dGlscy9odG1sRW5jb2RlXCIpO1xuY2xhc3MgVGV4dE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50eXBlID0gY29uc3RhbnRzXzEuTk9ERV9UWVBFLlRFWFQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sRW5jb2RlXzEuaHRtbEVuY29kZSh0aGlzLnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlRleHROb2RlID0gVGV4dE5vZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UZXh0Tm9kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaHRtbEVuY29kZSA9IGV4cG9ydHMuZG91YmxlUXVvdGVFbmNvZGUgPSB2b2lkIDA7XG5mdW5jdGlvbiBkb3VibGVRdW90ZUVuY29kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufVxuZXhwb3J0cy5kb3VibGVRdW90ZUVuY29kZSA9IGRvdWJsZVF1b3RlRW5jb2RlO1xuZnVuY3Rpb24gaHRtbEVuY29kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvdWJsZVF1b3RlRW5jb2RlKHRleHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cXC8vZywgJyYjeDJGOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSk7XG59XG5leHBvcnRzLmh0bWxFbmNvZGUgPSBodG1sRW5jb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbEVuY29kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubm9ybWFsaXplQ2hpbGRyZW4gPSB2b2lkIDA7XG5jb25zdCBUZXh0Tm9kZV8xID0gcmVxdWlyZShcIi4uL1RleHROb2RlXCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBUZXh0Tm9kZV8xLlRleHROb2RlKGAke2NoaWxkfWApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGQpLmZvckVhY2gocmVzdWx0LnB1c2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gY29uc3RhbnRzXzEuTk9ERV9UWVBFLkVMRU1FTlQgfHwgY2hpbGQudHlwZSA9PT0gY29uc3RhbnRzXzEuTk9ERV9UWVBFLlRFWFQgfHwgY2hpbGQudHlwZSA9PT0gY29uc3RhbnRzXzEuTk9ERV9UWVBFLkNPTVBPTkVOVCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVucmVjb2duaXplZCBub2RlIHR5cGU6ICR7dHlwZW9mIGNoaWxkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLm5vcm1hbGl6ZUNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemVDaGlsZHJlbi5qcy5tYXAiLCJpbXBvcnQgeyBqc3gsIEVsZW1lbnROb2RlIH0gZnJvbSAnYXN5bmMtanN4LWh0bWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gVGVzdChwcm9wczogYW55KTogRWxlbWVudE5vZGUge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5IZWxsbyBXb3JsZDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==