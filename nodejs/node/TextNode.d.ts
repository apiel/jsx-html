import { NODE_TYPE } from "../constants";
export declare class TextNode {
    text: string;
    type: NODE_TYPE;
    constructor(text: string);
    render(): Promise<string | any[]>;
}
