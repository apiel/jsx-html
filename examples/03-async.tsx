/// <reference path="../jsx.d.ts" />

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { delay } from 'https://deno.land/std/async/delay.ts';
import { React } from '../mod.ts';

const Title = async () => {
    await delay(100);
    return <h1>title</h1>;
};

const View = () => (
    <div>
        <Title />
    </div>
);

if (import.meta.main) {
    (<View />).render().then(console.log);
} else {
    // Run test

    Deno.test('render title', async () => {
        assertEquals(await (<Title />).render(), '<h1>title</h1>');
    });

    Deno.test('render view', async () => {
        assertEquals(await (<View />).render(), '<div><h1>title</h1></div>');
    });
}
