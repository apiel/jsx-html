"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FragmentNode = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../constants");

var _Node2 = require("./Node");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FragmentNode = /*#__PURE__*/function (_Node) {
  (0, _inherits2["default"])(FragmentNode, _Node);

  var _super = _createSuper(FragmentNode);

  function FragmentNode(children) {
    var _this;

    (0, _classCallCheck2["default"])(this, FragmentNode);
    _this = _super.call(this, children);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", _constants.NODE_TYPE.FRAGMENT);
    return _this;
  }

  (0, _createClass2["default"])(FragmentNode, [{
    key: "render",
    value: function render() {
      // @ts-ignore
      return this.renderChildren();
    }
  }]);
  return FragmentNode;
}(_Node2.Node);

exports.FragmentNode = FragmentNode;