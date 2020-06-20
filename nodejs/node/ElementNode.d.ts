import { NODE_TYPE } from "../constants";
import { NodePropsType, NullableChildType } from "../types";
import { Node } from "./Node";
export declare class ElementNode extends Node {
    name: string;
    props: NodePropsType;
    type: NODE_TYPE;
    constructor(name: string, props: NodePropsType, children: NullableChildType[]);
    render(): Promise<string | any[]>;
    private getValidProps;
    private propsToHTML;
}
