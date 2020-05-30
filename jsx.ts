import {
    NodePropsType,
    ComponentFunctionType,
    NullableChildType,
    ChildType,
} from './types.ts';

import { html } from './html.ts';
import { ElementNode } from './node/ElementNode.ts';
import { ComponentNode } from './node/ComponentNode.ts';
import { normalizeChildren } from './utils/normalizeChildren.ts';

export let renderer = html();

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
