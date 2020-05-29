import { NODE_TYPE } from '../constants';
import { renderer, renderChildren } from '../jsx';
import { ChildNodeType } from '../types';

export class Node {
    type: NODE_TYPE;

    constructor(
        public children?: ChildNodeType[],
    ) {}

    render() {
        return renderer(this);
    }

    renderChildren() {
        return renderChildren(this.children);
    }
}
