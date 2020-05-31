import {
    NodePropsType,
    ComponentFunctionType,
    NullableChildType,
} from '../types.ts';
import { NODE_TYPE } from '../constants.ts';
import { FragmentNode } from './FragmentNode.ts';
import { Node } from './Node.ts';
import { normalizeChildren } from './utils/normalizeChildren.ts';

export class ComponentNode extends Node {
    type = NODE_TYPE.COMPONENT;

    constructor(
        public component: ComponentFunctionType,
        public props: NodePropsType,
        children: NullableChildType[],
    ) {
        super(children);
    }

    render(): string | any[] {
        return [].concat(this.renderComponent() as any).join('');
    }

    renderComponent() {
        const child = this.component(this.props, this.children);
        const children = normalizeChildren(
            Array.isArray(child) ? child : [child],
        );
        if (children.length === 1) {
            return children[0].render();
        } else if (children.length > 1) {
            return new FragmentNode(children).render();
        }
    }
}
