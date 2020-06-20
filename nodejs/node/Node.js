import { normalizeChildren } from "./utils/normalizeChildren";
export class Node {
  constructor(children) {
    this.children = children;
  }

  async renderChildren() {
    const result = [];
    const children = normalizeChildren(this.children);

    for (const child of children) {
      const renderedChild = await child.render();

      if (renderedChild) {
        if (Array.isArray(renderedChild)) {
          renderedChild.forEach(subchild => subchild && result.push(subchild));
        } else {
          result.push(renderedChild);
        }
      }
    }

    return result;
  }

}