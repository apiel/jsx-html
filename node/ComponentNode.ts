import {
    NodePropsType,
    ComponentFunctionType,
    ChildNodeType,
    NodeType,
} from '../types';
import { NODE_TYPE } from '../constants';
import { FragmentNode } from './FragmentNode';
import { normalizeChildren, renderer, renderChildren } from '../jsx';
import { Node } from './Node';

export class ComponentNode extends Node {
    type = NODE_TYPE.COMPONENT;

    constructor(
        public component: ComponentFunctionType,
        public props: NodePropsType,
        children: ChildNodeType[],
    ) {
        super(children);
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
