import { NODE_TYPE } from '../constants';
import { renderer } from '../jsx';
import { ChildNodeType } from '../types';

export class Node {
    type: NODE_TYPE;

    constructor(
        public children?: ChildNodeType[],
    ) {}

    render(): string | any[] {
        return renderer(this);
    }

    renderChildren() {
        const result = [];
        this.children.forEach((child) => {
            const renderedChild = child.render();
            if (renderedChild) {
                if (Array.isArray(renderedChild)) {
                    renderedChild.forEach(
                        (subchild) => subchild && result.push(subchild),
                    );
                } else {
                    result.push(renderedChild);
                }
            }
        });
        return result;
    }
}
