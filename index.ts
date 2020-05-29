import { jsx, Fragment } from './jsx';

export { jsx, Fragment };

export const React = {
    Fragment,
    createElement(factory: any, props: any, ...children: any[]) {
        return jsx(factory, props, ...children);
    },
};
