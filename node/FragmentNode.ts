import { NODE_TYPE } from '../constants.ts';
import { ChildNodeType } from '../types.ts';
import { Node } from './Node.ts';

export class FragmentNode extends Node {
    type = NODE_TYPE.FRAGMENT;

    constructor(children: ChildNodeType[]) {
        super(children);
    }

    render() {
        return this.renderChildren();
    }
}
