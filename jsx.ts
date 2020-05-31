import {
    NodePropsType,
    ComponentFunctionType,
    NullableChildType,
    ChildType,
} from './types.ts';

import { ElementNode } from './node/ElementNode.ts';
import { ComponentNode } from './node/ComponentNode.ts';

export const jsx = <P extends NodePropsType = NodePropsType>(
    element: string | ComponentFunctionType,
    props: P | null,
    ...children: NullableChildType[]
) => {
    const nodeProps = props || {};

    if (typeof element === 'string') {
        console.log('ElementNode', element);
        return new ElementNode(element, nodeProps, children);
    }

    if (typeof element === 'function') {
        console.log('ComponentNode');
        return new ComponentNode(element, nodeProps, children);
    }

    throw new TypeError(`Expected jsx element to be a string or a function`);
};

export const Fragment = (
    props: NodePropsType,
    children: ChildType,
): NullableChildType => {
    return children;
};
