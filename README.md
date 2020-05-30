# jsx-html

`jsx-html` render JSX template to HTML.

```tsx
/// <reference path="https://raw.githubusercontent.com/apiel/jsx-html/latest/jsx.d.ts" />

import { React } from 'https://raw.githubusercontent.com/apiel/jsx-html/latest/mod.ts';

const View = () => <div>Hello</div>;
console.log((<View />).render());
```

```sh
deno run https://raw.githubusercontent.com/apiel/jsx-html/latest/examples/00.tsx
```

As you would do with React, you need to import `React` from `jsx-html` for the transpiler. If you are not feeling confortable with using `React` as import since it is not React, you can import `jsx` from `jsx-html` but you would have to update your tsconfig file: https://github.com/denoland/deno/issues/3572

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "jsx"
  }
}
```

```tsx
/// <reference path="https://raw.githubusercontent.com/apiel/jsx-html/latest/jsx.d.ts" />

import { jsx } from 'https://raw.githubusercontent.com/apiel/jsx-html/latest/mod.ts';

const View = () => <div>Hello</div>;
console.log((<View />).render());
```
