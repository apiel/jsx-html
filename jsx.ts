import { NODE_TYPE } from './constants';
import {
    ChildNodeType,
    NodePropsType,
    ComponentFunctionType,
    NullableChildType,
    ChildType,
} from './types';

import { html } from './html';
import { TextNode } from './node/TextNode';
import { ElementNode } from './node/ElementNode';
import { ComponentNode } from './node/ComponentNode';

export let renderer = html();

export function normalizeChildren(
    children: NullableChildType[],
): ChildNodeType[] {
    const result = [];

    children.forEach((child) => {
        if (child && typeof child !== 'boolean') {
            if (typeof child === 'string' || typeof child === 'number') {
                result.push(new TextNode(`${child}`));
            } else if (Array.isArray(child)) {
                normalizeChildren(child).forEach(result.push);
            } else if (
                child.type === NODE_TYPE.ELEMENT ||
                child.type === NODE_TYPE.TEXT ||
                child.type === NODE_TYPE.COMPONENT
            ) {
                result.push(child);
            } else {
                throw new TypeError(`Unrecognized node type: ${typeof child}`);
            }
        }
    });

    return result;
}

export const jsx = <P extends NodePropsType = NodePropsType>(
    element: string | ComponentFunctionType,
    props: P | null,
    ...children: NullableChildType[]
) => {
    const nodeProps = props || {};
    children = normalizeChildren(children);

    if (typeof element === 'string') {
        return new ElementNode(element, nodeProps, children as any);
    }

    if (typeof element === 'function') {
        return new ComponentNode(element, nodeProps, children as any);
    }

    throw new TypeError(`Expected jsx element to be a string or a function`);
};

export const Fragment = (
    props: NodePropsType,
    children: ChildType,
): NullableChildType => {
    return children;
};
