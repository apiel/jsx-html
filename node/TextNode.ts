import { NODE_TYPE } from '../constants.ts';
import { htmlEncode } from './utils/htmlEncode.ts';

export class TextNode {
    type = NODE_TYPE.TEXT;

    constructor(public text: string) {}

    render(): string | any[] {
        return htmlEncode(this.text);
    }
}
