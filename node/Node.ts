import { NODE_TYPE } from '../constants.ts';
import { NullableChildType } from '../types.ts';
import { normalizeChildren } from './utils/normalizeChildren.ts';

export abstract class Node {
    abstract type: NODE_TYPE;

    constructor(public children: NullableChildType[]) {}

    abstract render(): string | any[];

    renderChildren() {
        const result: string[] = [];
        const children = normalizeChildren(this.children);
        children.forEach((child) => {
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
