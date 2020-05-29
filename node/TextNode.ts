import { NODE_TYPE } from '../constants.ts';
import { Node } from './Node.ts';

export class TextNode extends Node {
    type = NODE_TYPE.TEXT;

    constructor(public text: string) {
        super();
    }
}
