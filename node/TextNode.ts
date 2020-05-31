import { NODE_TYPE } from '../constants.ts';
import { htmlEncode } from './utils/htmlEncode.ts';

export class TextNode {
    type = NODE_TYPE.TEXT;

    constructor(public text: string) {}

    async render(): Promise<string | any[]> {
        return htmlEncode(this.text);
    }
}
