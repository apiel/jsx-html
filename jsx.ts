import { NODE_TYPE } from './constants';
import {
    ChildNodeType,
    NodePropsType,
    ComponentFunctionType,
    NullableChildType,
    NodeType,
    EmptyProps,
    ChildType,
} from './types';

import { html } from './html';
import { TextNode } from './node/TextNode';
import { ElementNode } from './node/ElementNode';
import { ComponentNode } from './node/ComponentNode';

export let renderer = html();

export function renderChildren(children: ChildNodeType[]) {
    const result = [];
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

export function normalizeChildren(children: NullableChildType[]): ChildNodeType[] {
    const result = [];

    for (const child of children) {
        if (!child) {
            continue;
        } else if (typeof child === 'string' || typeof child === 'number') {
            result.push(new TextNode(`${child}`));
        } else if (typeof child === 'boolean') {
            continue;
        } else if (Array.isArray(child)) {
            for (const subchild of normalizeChildren(child)) {
                result.push(subchild);
            }
        } else if (
            child &&
            (child.type === NODE_TYPE.ELEMENT ||
                child.type === NODE_TYPE.TEXT ||
                child.type === NODE_TYPE.COMPONENT)
        ) {
            result.push(child);
        } else {
            throw new TypeError(`Unrecognized node type: ${typeof child}`);
        }
    }

    return result;
}

export const jsx = <P = NodePropsType>(
    element: string | ComponentFunctionType<P>,
    props: P | null,
    ...children: NullableChildType[]
) => {
    props = props || ({} as P);
    children = normalizeChildren(children);

    if (typeof element === 'string') {
        return new ElementNode(element, props, children as any);
    }

    if (typeof element === 'function') {
        return new ComponentNode(element, props, children as any);
    }

    throw new TypeError(`Expected jsx element to be a string or a function`);
};

export const Fragment: ComponentFunctionType<EmptyProps> = (
    props: NodePropsType,
    children: ChildType,
): NullableChildType => {
    return children;
};
