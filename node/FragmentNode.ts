import { NODE_TYPE } from '../constants';
import { ChildNodeType } from '../types';
import { renderChildren } from '../jsx';

export class FragmentNode {
    type: string = NODE_TYPE.FRAGMENT;
    children: ChildNodeType[];

    constructor(children: ChildNodeType[]) {
        this.children = children;
    }

    render() {
        return renderChildren(this.children);
    }
}
