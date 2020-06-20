import { NodePropsType, ComponentFunctionType, NullableChildType, ChildType } from "./types";
import { ElementNode } from "./node/ElementNode";
import { ComponentNode } from "./node/ComponentNode";
export declare const jsx: <P extends NodePropsType = NodePropsType>(element: string | ComponentFunctionType, props: P, ...children: NullableChildType[]) => ElementNode | ComponentNode;
export declare const Fragment: (props: NodePropsType, children: ChildType) => NullableChildType;
