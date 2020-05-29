import { NODE_TYPE } from '../constants';
import { ChildNodeType } from '../types';
import { renderChildren } from '../jsx';

export class FragmentNode {
    type = NODE_TYPE.FRAGMENT;

    constructor(public children: ChildNodeType[]) {}

    render() {
        return renderChildren(this.children);
    }
}
