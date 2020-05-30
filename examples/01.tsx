/// <reference path="../jsx.d.ts" />

import { React, Fragment } from '../mod.ts';

export const Title = () => <h1>title</h1>;
export const Value = ({ val }: { val: string }) => <p>value: {val}</p>;
export const Numeric = ({ num }: { num: number }) => <p>num: {num}</p>;

export const View = () => (
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

console.log((<View />).render());
