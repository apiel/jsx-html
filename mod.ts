import { jsx, Fragment } from './jsx.ts';

export { ElementNode } from './node/ElementNode.ts';
export { ComponentNode } from './node/ComponentNode.ts';
export { jsx, Fragment };

export const React = {
    Fragment,
    createElement(factory: any, props: any, ...children: any[]) {
        return jsx(factory, props, ...children);
    },
};
