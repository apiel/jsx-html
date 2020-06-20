# jsx-html

`jsx-html` render JSX template to HTML asynchronously. Compatible with Deno and NodeJs.

## NodeJs

```sh
yarn add async-jsx-html
# or
npm install async-jsx-html
```

```tsx
import { React } from 'async-jsx-html';

const View = () => <div>Hello</div>;
// render return a Promise
(<View />).render().then((html: string) => console.log(html));
```

## Deno

```tsx
/// <reference path="https://raw.githubusercontent.com/apiel/jsx-html/latest/jsx.d.ts" />

import { React } from 'https://raw.githubusercontent.com/apiel/jsx-html/latest/mod.ts';

const View = () => <div>Hello</div>;
// render return a Promise
(<View />).render().then((html: string) => console.log(html));
```

```sh
deno run https://raw.githubusercontent.com/apiel/jsx-html/latest/examples/00.tsx
```

## TsConfig

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
(<View />).render().then(console.log);
```

> **Note:** prefer using sermver tags version instead of latest to avoid conflict with caching, e.g:
> `import { jsx } from 'https://raw.githubusercontent.com/apiel/jsx-html/1.0.0/mod.ts';`.

## Async component

Unlike React, components can be asynchrone, so you can fetch for data without to handle states.

```tsx
import { React } from 'https://raw.githubusercontent.com/apiel/jsx-html/latest/mod.ts';

const Data = async () => {
    const res = await fetch('http://example.com/some/api');
    const content = new Uint8Array(await res.arrayBuffer());
    return <div>{content}</div>;
};

const View = () => (
    <div>
        <Data />
    </div>
);

(<View />).render().then(console.log);
```
