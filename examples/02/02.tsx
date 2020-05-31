/// <reference path="../../jsx.d.ts" />

import { jsx } from '../../mod.ts';

const View = () => <div>Hello</div>;
(<View />).render().then(console.log);
