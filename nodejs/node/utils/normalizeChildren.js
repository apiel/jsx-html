import { TextNode } from "../TextNode";
import { NODE_TYPE } from "../../constants";
export function normalizeChildren(children) {
  const result = [];

  for (const child of children) {
    if (child && typeof child !== 'boolean') {
      if (typeof child === 'string' || typeof child === 'number') {
        result.push(new TextNode(`${child}`));
      } else if (Array.isArray(child)) {
        normalizeChildren(child).forEach(result.push);
      } else if (child.type === NODE_TYPE.ELEMENT || child.type === NODE_TYPE.TEXT || child.type === NODE_TYPE.COMPONENT) {
        result.push(child);
      } else {
        throw new TypeError(`Unrecognized node type: ${typeof child}`);
      }
    }
  }

  return result;
}