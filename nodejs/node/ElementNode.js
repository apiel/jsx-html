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
const constants_1 = require("../constants");
const Node_1 = require("./Node");
const htmlEncode_1 = require("./utils/htmlEncode");
const ELEMENT_PROP = {
    INNER_HTML: 'innerHTML'
};
const VOID_ELEMENTS = new Set(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
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
            return renderedChildren || !VOID_ELEMENTS.has(this.name) ? `<${this.name}${renderedProps}>${renderedChildren || ''}</${this.name}>` : `<${this.name}${renderedProps} />`;
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