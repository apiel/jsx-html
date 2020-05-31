import { ElementNode } from './node/ElementNode.ts';
import { TextNode } from './node/TextNode.ts';
import { ComponentNode } from './node/ComponentNode.ts';
import { FragmentNode } from './node/FragmentNode.ts';

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

export type ComponentFunctionType = (props: NodePropsType, child?: NullableChildType[]) => NullableChildType;
