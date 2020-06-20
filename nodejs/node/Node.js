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
const normalizeChildren_1 = require("./utils/normalizeChildren");
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