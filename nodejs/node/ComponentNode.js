"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentNode = void 0;

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

var _FragmentNode = require("./FragmentNode");

var _Node2 = require("./Node");

var _normalizeChildren = require("./utils/normalizeChildren");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ComponentNode = /*#__PURE__*/function (_Node) {
  (0, _inherits2["default"])(ComponentNode, _Node);

  var _super = _createSuper(ComponentNode);

  function ComponentNode(component, props, children) {
    var _this;

    (0, _classCallCheck2["default"])(this, ComponentNode);
    _this = _super.call(this, children);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", _constants.NODE_TYPE.COMPONENT);
    return _this;
  }

  (0, _createClass2["default"])(ComponentNode, [{
    key: "render",
    value: function () {
      var _render = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = [];
                _context.next = 3;
                return this.renderComponent();

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0.concat.call(_context.t0, _context.t1).join(''));

              case 5:
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
    key: "renderComponent",
    value: function () {
      var _renderComponent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var child, children;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.component(this.props, this.children);

              case 2:
                child = _context2.sent;
                children = (0, _normalizeChildren.normalizeChildren)(Array.isArray(child) ? child : [child]);

                if (!(children.length === 1)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", children[0].render());

              case 8:
                if (!(children.length > 1)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", new _FragmentNode.FragmentNode(children).render());

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function renderComponent() {
        return _renderComponent.apply(this, arguments);
      }

      return renderComponent;
    }()
  }]);
  return ComponentNode;
}(_Node2.Node);

exports.ComponentNode = ComponentNode;