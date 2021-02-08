import { jsx, Fragment } from "./jsx";
import { ComponentFunctionType, NodePropsType, NullableChildType } from "./types";
export { ElementNode } from "./node/ElementNode";
export { ComponentNode } from "./node/ComponentNode";
export { jsx, Fragment, ComponentFunctionType, NullableChildType, NodePropsType };
export declare const React: {
    Fragment: (props: NodePropsType, children: import("./types").ChildType) => NullableChildType;
    createElement<P extends NodePropsType = NodePropsType>(element: string | ComponentFunctionType, props: P, ...children: NullableChildType[]): import("./node/ElementNode").ElementNode | import("./node/ComponentNode").ComponentNode;
};
export default React;
