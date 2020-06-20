"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementNode = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../constants");

var _Node2 = require("./Node");

var _htmlEncode = require("./utils/htmlEncode");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ELEMENT_PROP = {
  INNER_HTML: 'innerHTML'
};

var ElementNode = /*#__PURE__*/function (_Node) {
  (0, _inherits2["default"])(ElementNode, _Node);

  var _super = _createSuper(ElementNode);

  function ElementNode(name, props, children) {
    var _this;

    (0, _classCallCheck2["default"])(this, ElementNode);
    _this = _super.call(this, children);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", _constants.NODE_TYPE.ELEMENT);
    return _this;
  }

  (0, _createClass2["default"])(ElementNode, [{
    key: "render",
    value: function () {
      var _render = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var renderedProps, renderedChildren;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                renderedProps = this.propsToHTML();

                if (!(typeof this.props[ELEMENT_PROP.INNER_HTML] === 'string')) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = this.props[ELEMENT_PROP.INNER_HTML] // @ts-ignore
                ;
                _context.next = 8;
                break;

              case 5:
                _context.next = 7;
                return this.renderChildren();

              case 7:
                _context.t0 = _context.sent.join('');

              case 8:
                renderedChildren = _context.t0;
                return _context.abrupt("return", renderedChildren ? "<".concat(this.name).concat(renderedProps, ">").concat(renderedChildren, "</").concat(this.name, ">") : "<".concat(this.name).concat(renderedProps, " />"));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "getValidProps",
    value: function getValidProps() {
      var props = this.props;
      return Object.keys(this.props).filter(function (key) {
        if (key === ELEMENT_PROP.INNER_HTML) {
          return false;
        }

        var val = props[key];
        return typeof val === 'string' || typeof val === 'number' || val === true;
      });
    }
  }, {
    key: "propsToHTML",
    value: function propsToHTML() {
      var keys = this.getValidProps();

      if (!keys.length) {
        return '';
      }

      var props = this.props;
      var pairs = keys.map(function (key) {
        if (!/^[a-zA-Z0-9-:\._]+$/.test(key)) {
          throw new Error("Invalid attribute name format ".concat(key));
        }

        var val = props[key]; // https://html.spec.whatwg.org/multipage/dom.html#attributes

        return val === true || val === '' ? key : "".concat(key, "=\"").concat((0, _htmlEncode.doubleQuoteEncode)(val.toString()), "\"");
      });
      return " ".concat(pairs.join(' '));
    }
  }]);
  return ElementNode;
}(_Node2.Node);

exports.ElementNode = ElementNode;