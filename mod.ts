import { jsx, Fragment } from './jsx.ts';
import {
    ComponentFunctionType,
    NodePropsType,
    NullableChildType,
} from './types.ts';

export { ElementNode } from './node/ElementNode.ts';
export { ComponentNode } from './node/ComponentNode.ts';
export {
    jsx,
    Fragment,
    ComponentFunctionType,
    NullableChildType,
    NodePropsType,
};

export const React = {
    Fragment,
    createElement<P extends NodePropsType = NodePropsType>(
        element: string | ComponentFunctionType,
        props: P | null,
        ...children: NullableChildType[]
    ) {
        return jsx(element, props, ...children);
    },
};
