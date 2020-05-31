/// <reference path="../jsx.d.ts" />

import { React } from '../mod.ts';

const View = () => <div>Hello</div>;

if (import.meta.main) {
    (<View />).render().then(console.log);
}