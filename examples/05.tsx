/// <reference path="../jsx.d.ts" />
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { React } from '../mod.ts';

const View = () => {
    const techs = ['NodeJS', 'React Native', 'Next'];

    return (
        <ul>
            {techs.map((tech: any) => (
                <li>{tech}</li>
            ))}
        </ul>
    );
};

if (import.meta.main) {
    (<View />).render().then(console.log);
}

if (import.meta.main) {
    (<View />).render().then(console.log);
} else {
    Deno.test('render with array', async () => {
        assertEquals(
            await (<View />).render(),
            '<ul><li>NodeJS</li><li>React Native</li><li>Next</li></ul>',
        );
    });
}
