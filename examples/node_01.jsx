let { React, Fragment } = require('../nodejs/mod');

const Title = () => <h1>title</h1>;
const Value = ({ val }) => <p>value: {val}</p>;
const Numeric = ({ num }) => <p>num: {num}</p>;

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

(<View />).render().then(console.log);
