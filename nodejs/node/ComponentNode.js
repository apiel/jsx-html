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
const constants_1 = require("../constants");
const FragmentNode_1 = require("./FragmentNode");
const Node_1 = require("./Node");
const normalizeChildren_1 = require("./utils/normalizeChildren");
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
