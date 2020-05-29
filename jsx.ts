import { NODE_TYPE } from './constants';
import {
    ChildNodeType,
    NodePropsType,
    ComponentFunctionType,
    NullableChildType,
    NodeType,
    EmptyProps,
    ChildType,
} from './types';

import { html } from './html';

export let renderer = html();

function renderChildren<T>(
    children: ChildNodeType[],
): T[] {
    const result = [];

    for (const child of children) {
        const renderedChild = child.render();

        if (renderedChild) {
            if (Array.isArray(renderedChild)) {
                for (const subchild of renderedChild) {
                    if (subchild) {
                        result.push(subchild);
                    }
                }
            } else {
                result.push(renderedChild);
            }
        }
    }

    return result;
}

export class ElementNode {
    type: string = NODE_TYPE.ELEMENT;
    name: string;
    props: NodePropsType;
    children: ChildNodeType[];
    onRender?: <T>(element: T) => void;

    constructor(name: string, props: NodePropsType, children: ChildNodeType[]) {
        this.name = name;
        this.props = props;
        this.children = children;

        const onRender = props.onRender;
        if (typeof onRender === 'function') {
            this.onRender = onRender;
            delete props.onRender;
        }
    }

    render() {
        const el = renderer(this);
        if (this.onRender) {
            this.onRender(el);
        }
        return el;
    }

    renderChildren<T>(): T[] {
        return renderChildren(this.children);
    }
}

export class FragmentNode {
    type: string = NODE_TYPE.FRAGMENT;
    children: ChildNodeType[];

    constructor(children: ChildNodeType[]) {
        this.children = children;
    }

    render<T>(): T[] {
        return renderChildren(this.children);
    }
}

export class TextNode {
    type: typeof NODE_TYPE.TEXT = NODE_TYPE.TEXT;

    text: string;

    constructor(text: string) {
        this.text = text;
    }

    render() {
        return renderer(this);
    }
}

export class ComponentNode<P = NodePropsType> {
    type: typeof NODE_TYPE.COMPONENT = NODE_TYPE.COMPONENT;

    component: ComponentFunctionType<P>;
    props: NodePropsType;
    children: ChildNodeType[];

    constructor(
        component: ComponentFunctionType<P>,
        props: NodePropsType,
        children: ChildNodeType[],
    ) {
        this.component = component;
        this.props = props;
        this.children = children;
    }

    renderComponent(): any {
        const props = this.props;
        const child = normalizeChild(this.component(props, this.children));
        if (child) {
            return (child as any).render();
        }
    }

    render() {
        return renderer(this);
    }

    renderChildren<T>(): T[] {
        return renderChildren(this.children);
    }
}

function normalizeChildren(children: NullableChildType[]): ChildNodeType[] {
    const result = [];

    for (const child of children) {
        if (!child) {
            continue;
        } else if (typeof child === 'string' || typeof child === 'number') {
            result.push(new TextNode(`${child}`));
        } else if (typeof child === 'boolean') {
            continue;
        } else if (Array.isArray(child)) {
            for (const subchild of normalizeChildren(child)) {
                result.push(subchild);
            }
        } else if (
            child &&
            (child.type === NODE_TYPE.ELEMENT ||
                child.type === NODE_TYPE.TEXT ||
                child.type === NODE_TYPE.COMPONENT)
        ) {
            result.push(child);
        } else {
            throw new TypeError(`Unrecognized node type: ${typeof child}`);
        }
    }

    return result;
}

function normalizeChild(child: any): NodeType | void {
    const children = normalizeChildren(Array.isArray(child) ? child : [child]);

    if (children.length === 1) {
        return children[0];
    } else if (children.length > 1) {
        return new FragmentNode(children);
    }
}

export const jsx = <P = NodePropsType>(
    element: string | ComponentFunctionType<P>,
    props: P | null,
    ...children: NullableChildType[]
) => {
    props = props || ({} as P);
    children = normalizeChildren(children);

    if (typeof element === 'string') {
        return new ElementNode(element, props, children as any);
    }

    if (typeof element === 'function') {
        return new ComponentNode(element, props, children as any);
    }

    throw new TypeError(`Expected jsx element to be a string or a function`);
};

export const Fragment: ComponentFunctionType<EmptyProps> = (
    props: NodePropsType,
    children: ChildType,
): NullableChildType => {
    return children;
};
