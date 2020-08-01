/// <reference path="../jsx.d.ts" />
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { React } from '../mod.ts';

const View = () => {
    return <div innerHTML="<b>hello</b> world" />;
};

if (import.meta.main) {
    (<View />).render().then(console.log);
} else {
    Deno.test('render with array', async () => {
        assertEquals(
            await (<View />).render(),
            '<div><b>hello</b> world</div>',
        );
    });
}
