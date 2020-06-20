import { NODE_TYPE } from "../constants";
import { Node } from "./Node";
export class FragmentNode extends Node {
  type = NODE_TYPE.FRAGMENT;

  constructor(children) {
    super(children);
  }

  render() {
    return this.renderChildren();
  }

}