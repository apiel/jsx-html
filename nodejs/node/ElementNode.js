import { NODE_TYPE } from "../constants";
import { Node } from "./Node";
import { doubleQuoteEncode } from "./utils/htmlEncode";
const ELEMENT_PROP = {
  INNER_HTML: 'innerHTML'
};
export class ElementNode extends Node {
  type = NODE_TYPE.ELEMENT;

  constructor(name, props, children) {
    super(children);
    this.name = name;
    this.props = props;
  }

  async render() {
    const renderedProps = this.propsToHTML();
    const renderedChildren = typeof this.props[ELEMENT_PROP.INNER_HTML] === 'string' ? this.props[ELEMENT_PROP.INNER_HTML] : (await this.renderChildren()).join('');
    return renderedChildren ? `<${this.name}${renderedProps}>${renderedChildren}</${this.name}>` : `<${this.name}${renderedProps} />`;
  }

  getValidProps() {
    const props = this.props;
    return Object.keys(this.props).filter(key => {
      if (key === ELEMENT_PROP.INNER_HTML) {
        return false;
      }

      const val = props[key];
      return typeof val === 'string' || typeof val === 'number' || val === true;
    });
  }

  propsToHTML() {
    const keys = this.getValidProps();

    if (!keys.length) {
      return '';
    }

    const props = this.props;
    const pairs = keys.map(key => {
      if (!/^[a-zA-Z0-9-:\._]+$/.test(key)) {
        throw new Error(`Invalid attribute name format ${key}`);
      }

      const val = props[key]; // https://html.spec.whatwg.org/multipage/dom.html#attributes

      return val === true || val === '' ? key : `${key}="${doubleQuoteEncode(val.toString())}"`;
    });
    return ` ${pairs.join(' ')}`;
  }

}