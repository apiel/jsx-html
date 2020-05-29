import { NODE_TYPE } from '../constants.ts';
import { renderer } from '../jsx.ts';
import { ChildNodeType } from '../types.ts';

export abstract class Node {
    abstract type: NODE_TYPE;

    constructor(
        public children?: ChildNodeType[],
    ) {}

    render(): string | any[] {
        return renderer(this);
    }

    renderChildren() {
        const result: string[] = [];
        this.children?.forEach((child) => {
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
