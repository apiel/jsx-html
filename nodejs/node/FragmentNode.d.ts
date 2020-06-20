import { NODE_TYPE } from "../constants";
import { ChildNodeType } from "../types";
import { Node } from "./Node";
export declare class FragmentNode extends Node {
    type: NODE_TYPE;
    constructor(children: ChildNodeType[]);
    render(): Promise<string[]>;
}
