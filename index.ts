import { jsx } from './jsx';

export { jsx };

export const React = {
    createElement(factory: any, props: any, ...children: any[]) {
        return jsx(factory, props, ...children);
    },
};
