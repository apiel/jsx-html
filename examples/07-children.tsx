/// <reference path="../jsx.d.ts" />

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { React, Fragment } from '../mod.ts';

interface Props {
    title: string;
    children?: any;
}

const Layout = ({ title, children }: Props) => (
    <div class="deno">
        <h1>{ title }</h1>
        <div>
            {children}
        </div>
    </div>
);

const View = () => (
    <Layout title="hello world">
        <p>Content</p>
    </Layout>
);

if (import.meta.main) {
    (<View />).render().then(console.log);
} else {
    // Run test

    Deno.test('render layout', async () => {
        assertEquals(
            await (<View />).render(),
            '<div class="deno"><h1>hello world</h1><div><p>Content</p></div></div>',
        );
    });
}
