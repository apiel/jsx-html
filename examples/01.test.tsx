/// <reference path="../jsx.d.ts" />

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { React } from '../mod.ts';
import { Title, View, Value, Numeric } from './01.tsx';

Deno.test('render title', () => {
    assertEquals((<Title />).render(), '<h1>title</h1>');
});

Deno.test('render value', () => {
    const val = 'hello';
    assertEquals((<Value val={val} />).render(), `<p>value: ${val}</p>`);
});

Deno.test('render numeric', () => {
    const num = 123;
    assertEquals((<Numeric num={num} />).render(), `<p>num: ${num}</p>`);
});

Deno.test('render view', () => {
    assertEquals(
        (<View />).render(),
        '<div class="deno"><h1>title</h1><p valid checked select>land</p><br /><hr /><p>value: hello</p><p>num: 23</p></div>',
    );
});
