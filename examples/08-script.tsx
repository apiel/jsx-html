/// <reference path="../jsx.d.ts" />

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { React, Fragment } from '../mod.ts';

const View = () => (
    <div>
        <script src="/public/js/jquery.min.js" type="text/javascript"></script>
    </div>
);

if (import.meta.main) {
    (<View />).render().then(console.log);
} else {
    // Run test

    Deno.test('render script properly', async () => {
        assertEquals(
            await (<View />).render(),
            '<div><script src="/public/js/jquery.min.js" type="text/javascript"></script></div>',
        );
    });
}
