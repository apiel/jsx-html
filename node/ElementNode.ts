import { NODE_TYPE } from '../constants';
import { NodePropsType, ChildNodeType } from '../types';
import { renderer, renderChildren } from '../jsx';
import { Node } from './Node';

export class ElementNode extends Node {
    type = NODE_TYPE.ELEMENT;

    constructor(
        public name: string,
        public props: NodePropsType,
        children: ChildNodeType[],
    ) {
        super(children);
    }
}
