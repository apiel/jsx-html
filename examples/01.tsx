import { React } from '..';

const Title = () => <h1>title</h1>;
const Value = ({ val }: { val: string }) => <p>value: {val}</p>;
const Numeric = ({ num }: { num: number }) => <p>num: {num}</p>;

const View = () => (
    <div class="deno">
        <Title />
        <p>land</p>
        <Value val="hello" />
        <Numeric num={23} />
    </div>
);

console.log((<View />).render());
