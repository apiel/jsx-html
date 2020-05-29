import { ElementNode } from './node/ElementNode';
import { TextNode } from './node/TextNode';
import { ComponentNode } from './node/ComponentNode';
import { FragmentNode } from './node/FragmentNode';

export type NodePropsType = {
    [key: string]: any;
};

export type EmptyProps = {};

type Primitive = string | boolean | number;
type NullablePrimitive = Primitive | null | void;

export type ChildNodeType =
    | ElementNode
    | TextNode
    | ComponentNode<NodePropsType>;

export type NodeType = ChildNodeType | FragmentNode;

export type ChildType = ChildNodeType | Primitive;
export type NullableChildType = ChildType | ChildNodeType | NullablePrimitive;

export type ComponentFunctionType<P> = (P, ChildrenType) => NullableChildType;

export type CreateElementNode<P = NodePropsType> = (
    element: string,
    props: P | null,
    ...children: NullableChildType[]
) => ElementNode;

export type CreateComponentNode<P = NodePropsType> = (
    element: ComponentFunctionType<P>,
    props: P | null,
    ...children: NullableChildType[]
) => ComponentNode<P>;

export type CreateNode<P = NodePropsType> = CreateElementNode<P> &
    CreateComponentNode<P>;
