/// <reference path="../jsx.d.ts" />

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { React, Fragment } from '../mod.ts';

const Title = () => <h1>title</h1>;
const Value = ({ val }: { val: string }) => <p>value: {val}</p>;
const Numeric = ({ num }: { num: number }) => <p>num: {num}</p>;

const View = () => (
    <div class="deno">
        <Title />
        <p onclick={() => 'lol'} valid checked={true} select="">
            land
        </p>
        <br />
        <hr />
        <Fragment>
            <Value val="hello" />
            <Numeric num={23} />
        </Fragment>
    </div>
);

if (import.meta.main) {
    (<View />).render().then(console.log);
} else {
    // Run test

    Deno.test('render title', async() => {
        assertEquals(await (<Title />).render(), '<h1>title</h1>');
    });

    Deno.test('render value', async() => {
        const val = 'hello';
        assertEquals(await (<Value val={val} />).render(), `<p>value: ${val}</p>`);
    });

    Deno.test('render numeric', async() => {
        const num = 123;
        assertEquals(await (<Numeric num={num} />).render(), `<p>num: ${num}</p>`);
    });

    Deno.test('render view', async() => {
        assertEquals(
            await (<View />).render(),
            '<div class="deno"><h1>title</h1><p valid checked select>land</p><br /><hr /><p>value: hello</p><p>num: 23</p></div>',
        );
    });

    Deno.test('render empty', async ()=>{
        assertEquals(
            await (<div/>).render(),
            `<div></div>`
        )

        assertEquals(
            await (<img/>).render(),
            `<img />`
        )
    })
}
