import { NODE_TYPE } from '../constants';
import { NodePropsType, ChildNodeType } from '../types';
import { renderer, renderChildren } from '../jsx';

export class ElementNode {
    type: string = NODE_TYPE.ELEMENT;

    constructor(
        public name: string,
        public props: NodePropsType,
        public children: ChildNodeType[],
    ) {}

    render() {
        return renderer(this);
    }

    renderChildren() {
        return renderChildren(this.children);
    }
}
