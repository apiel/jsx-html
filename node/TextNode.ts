import { NODE_TYPE } from '../constants.ts';
import { renderer } from '../jsx.ts';

export class TextNode {
    type = NODE_TYPE.TEXT;

    constructor(public text: string) {}

    render(): string | any[] {
        return renderer(this);
    }
}
