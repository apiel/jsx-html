import { NODE_TYPE } from '../constants';
import { Node } from './Node';

export class TextNode extends Node {
    type = NODE_TYPE.TEXT;

    constructor(public text: string) {
        super();
    }
}
