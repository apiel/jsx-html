import { NODE_TYPE } from '../constants.ts';
import { NodePropsType, NullableChildType } from '../types.ts';
import { Node } from './Node.ts';
import { htmlEncode } from './utils/htmlEncode.ts';

const ELEMENT_PROP = {
    INNER_HTML: 'innerHTML',
};

export class ElementNode extends Node {
    type = NODE_TYPE.ELEMENT;

    constructor(
        public name: string,
        public props: NodePropsType,
        children: NullableChildType[],
    ) {
        super(children);
    }

    render(): string | any[] {
        const renderedProps = this.propsToHTML();

        const renderedChildren =
            typeof this.props[ELEMENT_PROP.INNER_HTML] === 'string'
                ? this.props[ELEMENT_PROP.INNER_HTML]
                : this.renderChildren().join('');

        return renderedChildren
            ? `<${this.name}${renderedProps}>${renderedChildren}</${this.name}>`
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
            const val = props[key];

            if (val === true || val === '') {
                return htmlEncode(key);
            }
            return `${htmlEncode(key)}="${htmlEncode(val.toString())}"`;
        });

        return ` ${pairs.join(' ')}`;
    }
}
