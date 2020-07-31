import { NODE_TYPE } from '../constants.ts';
import { NodePropsType, NullableChildType } from '../types.ts';
import { Node } from './Node.ts';
import { doubleQuoteEncode } from './utils/htmlEncode.ts';

const ELEMENT_PROP = {
    INNER_HTML: 'innerHTML',
};

// List taken from http://w3c.github.io/html-reference/syntax.html
const VOID_ELEMENTS = new Set<string>([
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
]);

export class ElementNode extends Node {
    type = NODE_TYPE.ELEMENT;

    constructor(
        public name: string,
        public props: NodePropsType,
        children: NullableChildType[],
    ) {
        super(children);
    }

    async render(): Promise<string | any[]> {
        const renderedProps = this.propsToHTML();

        const renderedChildren =
            typeof this.props[ELEMENT_PROP.INNER_HTML] === 'string'
                ? this.props[ELEMENT_PROP.INNER_HTML]
                : (await this.renderChildren()).join('');

        
        
        return (renderedChildren || !VOID_ELEMENTS.has(this.name))
            ? `<${this.name}${renderedProps}>${renderedChildren || ""}</${this.name}>`
            : `<${this.name}${renderedProps} />`;
    }

    private getValidProps() {
        const props = this.props;
        return Object.keys(this.props).filter((key) => {
            if (key === ELEMENT_PROP.INNER_HTML) {
                return false;
            }
            const val = props[key];
            return (
                typeof val === 'string' ||
                typeof val === 'number' ||
                val === true
            );
        });
    }

    private propsToHTML(): string {
        const keys = this.getValidProps();
        if (!keys.length) {
            return '';
        }

        const props = this.props;
        const pairs = keys.map((key) => {
            if (!/^[a-zA-Z0-9-:\._]+$/.test(key)) {
                throw new Error(`Invalid attribute name format ${key}`);
            }
            const val = props[key];
            // https://html.spec.whatwg.org/multipage/dom.html#attributes
            return val === true || val === ''
                ? key
                : `${key}="${doubleQuoteEncode(val.toString())}"`;
        });

        return ` ${pairs.join(' ')}`;
    }
}
