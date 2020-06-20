let {
  React,
  Fragment
} = require('../nodejs/mod');

const Title = () => /*#__PURE__*/React.createElement("h1", null, "title");

const Value = ({
  val
}) => /*#__PURE__*/React.createElement("p", null, "value: ", val);

const Numeric = ({
  num
}) => /*#__PURE__*/React.createElement("p", null, "num: ", num);

const View = () => /*#__PURE__*/React.createElement("div", {
  class: "deno"
}, /*#__PURE__*/React.createElement(Title, null), /*#__PURE__*/React.createElement("p", {
  onclick: () => 'lol',
  valid: true,
  checked: true,
  select: ""
}, "land"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Value, {
  val: "hello"
}), /*#__PURE__*/React.createElement(Numeric, {
  num: 23
})));

/*#__PURE__*/
React.createElement(View, null).render().then(console.log);
