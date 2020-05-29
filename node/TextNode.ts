import { NODE_TYPE } from '../constants';
import { renderer } from '../jsx';

export class TextNode {
    type = NODE_TYPE.TEXT;

    constructor(public text: string) {}

    render() {
        return renderer(this);
    }
}
