import { NODE_TYPE } from "../constants";
import { NullableChildType } from "../types";
export declare abstract class Node {
    children: NullableChildType[];
    abstract type: NODE_TYPE;
    constructor(children: NullableChildType[]);
    abstract render(): Promise<string | any[]>;
    renderChildren(): Promise<string[]>;
}
