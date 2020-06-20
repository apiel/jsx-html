import { ElementNode } from "./node/ElementNode";
import { ComponentNode } from "./node/ComponentNode";
export const jsx = (element, props, ...children) => {
  const nodeProps = props || {};

  if (typeof element === 'string') {
    return new ElementNode(element, nodeProps, children);
  }

  if (typeof element === 'function') {
    return new ComponentNode(element, nodeProps, children);
  }

  throw new TypeError(`Expected jsx element to be a string or a function`);
};
export const Fragment = (props, children) => {
  return children;
};