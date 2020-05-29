import { ElementNode } from './node/ElementNode';
import { TextNode } from './node/TextNode';
import { ComponentNode } from './node/ComponentNode';
import { FragmentNode } from './node/FragmentNode';

export type NodePropsType = {
    [key: string]: any;
};

type Primitive = string | boolean | number;
type NullablePrimitive = Primitive | null | void;

export type ChildNodeType =
    | ElementNode
    | TextNode
    | ComponentNode;

export type NodeType = ChildNodeType | FragmentNode;

export type ChildType = ChildNodeType | Primitive;
export type NullableChildType = ChildType | ChildNodeType | NullablePrimitive;

export type ComponentFunctionType = (props: NodePropsType, child: ChildNodeType[]) => NullableChildType;
