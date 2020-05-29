import { NODE_TYPE } from '../constants';
import { ChildNodeType } from '../types';
import { Node } from './Node';

export class FragmentNode extends Node {
    type = NODE_TYPE.FRAGMENT;

    constructor(children: ChildNodeType[]) {
        super(children);
    }

    render() {
        return this.renderChildren();
    }
}
