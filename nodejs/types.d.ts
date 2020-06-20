import { ElementNode } from "./node/ElementNode";
import { TextNode } from "./node/TextNode";
import { ComponentNode } from "./node/ComponentNode";
import { FragmentNode } from "./node/FragmentNode";
export declare type NodePropsType = {
    [key: string]: any;
};
declare type Primitive = string | boolean | number;
declare type NullablePrimitive = Primitive | null | void;
export declare type ChildNodeType = ElementNode | TextNode | ComponentNode;
export declare type NodeType = ChildNodeType | FragmentNode;
export declare type ChildType = ChildNodeType | Primitive;
export declare type NullableChildType = ChildType | ChildNodeType | NullablePrimitive;
export declare type ComponentFunctionType = (props: NodePropsType, child?: NullableChildType[]) => NullableChildType | Promise<NullableChildType>;
export {};
