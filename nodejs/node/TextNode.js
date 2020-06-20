import { NODE_TYPE } from "../constants";
import { htmlEncode } from "./utils/htmlEncode";
export class TextNode {
  type = NODE_TYPE.TEXT;

  constructor(text) {
    this.text = text;
  }

  async render() {
    return htmlEncode(this.text);
  }

}