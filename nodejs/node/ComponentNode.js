import { NODE_TYPE } from "../constants";
import { FragmentNode } from "./FragmentNode";
import { Node } from "./Node";
import { normalizeChildren } from "./utils/normalizeChildren";
export class ComponentNode extends Node {
  type = NODE_TYPE.COMPONENT;

  constructor(component, props, children) {
    super(children);
    this.component = component;
    this.props = props;
  }

  async render() {
    return [].concat(await this.renderComponent()).join('');
  }

  async renderComponent() {
    const child = await this.component(this.props, this.children);
    const children = normalizeChildren(Array.isArray(child) ? child : [child]);

    if (children.length === 1) {
      return children[0].render();
    } else if (children.length > 1) {
      return new FragmentNode(children).render();
    }
  }

}