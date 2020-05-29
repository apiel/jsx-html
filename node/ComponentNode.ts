import {
    NodePropsType,
    ComponentFunctionType,
    ChildNodeType,
    NodeType,
} from '../types';
import { NODE_TYPE } from '../constants';
import { FragmentNode } from './FragmentNode';
import { normalizeChildren, renderer, renderChildren } from '../jsx';

export class ComponentNode<P = NodePropsType> {
    type = NODE_TYPE.COMPONENT;

    constructor(
        public component: ComponentFunctionType<P>,
        public props: NodePropsType,
        public children: ChildNodeType[],
    ) {}

    renderComponent() {
        const child = this.normalizeChild(
            this.component(this.props, this.children),
        );
        return child && child.render();
    }

    render() {
        return renderer(this);
    }

    renderChildren() {
        return renderChildren(this.children);
    }

    private normalizeChild(child: any): NodeType | void {
        const children = normalizeChildren(
            Array.isArray(child) ? child : [child],
        );

        if (children.length === 1) {
            return children[0];
        } else if (children.length > 1) {
            return new FragmentNode(children);
        }
    }
}
