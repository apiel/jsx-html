import { NODE_TYPE } from './constants.ts';
import { NodePropsType } from './types.ts';

const ELEMENT_PROP = {
    INNER_HTML: 'innerHTML',
};

function htmlEncode(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/\//g, '&#x2F;');
}

function getValidProps(props: NodePropsType) {
    return Object.keys(props).filter((key) => {
        if (key === ELEMENT_PROP.INNER_HTML) {
            return false;
        }
        const val = props[key];
        return (
            typeof val === 'string' || typeof val === 'number' || val === true
        );
    });
}

function propsToHTML(props: NodePropsType): string {
    const keys = getValidProps(props);
    if (!keys.length) {
        return '';
    }

    const pairs = keys.map((key) => {
        const val = props[key];

        if (val === true || val === '') {
            return htmlEncode(key);
        }
        return `${htmlEncode(key)}="${htmlEncode(val.toString())}"`;
    });

    return ` ${pairs.join(' ')}`;
}

export function html() {
    const htmlRenderer = (node: any) => {
        if (node.type === NODE_TYPE.COMPONENT) {
            return [].concat(node.renderComponent(htmlRenderer)).join('');
        }

        if (node.type === NODE_TYPE.ELEMENT) {
            const renderedProps = propsToHTML(node.props);

            const renderedChildren =
                typeof node.props[ELEMENT_PROP.INNER_HTML] === 'string'
                    ? node.props[ELEMENT_PROP.INNER_HTML]
                    : node.renderChildren(htmlRenderer).join('');

            return renderedChildren
                ? `<${node.name}${renderedProps}>${renderedChildren}</${node.name}>`
                : `<${node.name}${renderedProps} />`;
        }

        if (node.type === NODE_TYPE.TEXT) {
            return htmlEncode(node.text);
        }

        throw new TypeError(`Unhandleable node: ${node.type}`);
    };

    return htmlRenderer;
}
