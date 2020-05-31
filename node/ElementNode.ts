import { NODE_TYPE } from '../constants.ts';
import { NodePropsType, NullableChildType } from '../types.ts';
import { Node } from './Node.ts';

export class ElementNode extends Node {
    type = NODE_TYPE.ELEMENT;

    constructor(
        public name: string,
        public props: NodePropsType,
        children: NullableChildType[],
    ) {
        super(children);
    }
}
