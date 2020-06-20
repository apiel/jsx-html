import { jsx, Fragment } from "./jsx";
import { ComponentFunctionType, NodePropsType, NullableChildType } from "./types";
export { ElementNode } from "./node/ElementNode";
export { ComponentNode } from "./node/ComponentNode";
export { jsx, Fragment, ComponentFunctionType, NullableChildType, NodePropsType };
export const React = {
  Fragment,

  createElement(element, props, ...children) {
    return jsx(element, props, ...children);
  }

};