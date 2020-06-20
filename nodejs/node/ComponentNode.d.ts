import { NodePropsType, ComponentFunctionType, NullableChildType } from "../types";
import { NODE_TYPE } from "../constants";
import { Node } from "./Node";
export declare class ComponentNode extends Node {
    component: ComponentFunctionType;
    props: NodePropsType;
    type: NODE_TYPE;
    constructor(component: ComponentFunctionType, props: NodePropsType, children: NullableChildType[]);
    render(): Promise<string | any[]>;
    renderComponent(): Promise<string | any[]>;
}
