deno test examples/01.test.tsx

deno run examples/00.tsx
deno run examples/01.tsx
deno run -c examples/02/tsconfig.json examples/02/02.tsx

https://deno.land/manual/contributing/style_guide


- would be great to make it as well node compatible:
tsc examples/01.tsx --jsx react --outDir dist && node dist/examples/01.js
