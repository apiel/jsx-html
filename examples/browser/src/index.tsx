import { jsx, ElementNode } from 'async-jsx-html';

export function Test(props: any): ElementNode {
  console.log(props);
  return (
    <div>Hello World</div>
  )
}