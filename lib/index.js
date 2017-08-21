(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact')) :
  typeof define === 'function' && define.amd ? define(['preact'], factory) :
  (global.preactTinperBee = factory(global.Preact));
}(this, (function (preact) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var hasOwn = {}.hasOwnProperty;

function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            classes.push(classNames.apply(null, arg));
        } else if (argType === 'object') {
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.join(' ');
}

var Form = function (_Component) {
    inherits(Form, _Component);

    function Form() {
        classCallCheck(this, Form);
        return possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    createClass(Form, [{
        key: 'render',
        value: function render(_ref) {
            var horizontal = _ref.horizontal,
                children = _ref.children,
                style = _ref.style,
                className = _ref.className,
                inline = _ref.inline,
                props = objectWithoutProperties(_ref, ['horizontal', 'children', 'style', 'className', 'inline']);

            var classes = classNames({
                'u-form': true,
                'u-form-inline': inline,
                'u-form-horizontal': horizontal
            }, className);
            return preact.h(
                'form',
                _extends({
                    style: style,
                    'class': classes
                }, props),
                children
            );
        }
    }]);
    return Form;
}(preact.Component);

var Input = function (_Component) {
    inherits(Input, _Component);

    function Input() {
        classCallCheck(this, Input);
        return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    createClass(Input, [{
        key: 'render',
        value: function render(_ref) {
            var style = _ref.style,
                className = _ref.className,
                children = _ref.children,
                labelStyle = _ref.labelStyle,
                inputStyle = _ref.inputStyle,
                _ref$type = _ref.type,
                type = _ref$type === undefined ? 'text' : _ref$type,
                required = _ref.required,
                defaultValue = _ref.defaultValue,
                props = objectWithoutProperties(_ref, ['style', 'className', 'children', 'labelStyle', 'inputStyle', 'type', 'required', 'defaultValue']);


            var classes = classNames({
                'u-input': true
            });

            var inputClass = classNames({
                'u-input-item': true
            }, className);

            var labelClass = classNames({
                'u-input-label': true
            });

            return preact.h(
                'div',
                {
                    'class': classes,
                    style: style ? style : null
                },
                children ? preact.h(
                    'label',
                    { 'class': labelClass, style: labelStyle },
                    children
                ) : null,
                preact.h('input', _extends({
                    type: type,
                    style: inputStyle,
                    'class': inputClass,
                    value: defaultValue ? defaultValue : null,
                    required: required ? required : null
                }, props))
            );
        }
    }]);
    return Input;
}(preact.Component);

var FlexItem = function (_Component) {
    inherits(FlexItem, _Component);

    function FlexItem() {
        classCallCheck(this, FlexItem);
        return possibleConstructorReturn(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
    }

    createClass(FlexItem, [{
        key: 'render',
        value: function render(_ref) {
            var children = _ref.children,
                className = _ref.className,
                style = _ref.style,
                props = objectWithoutProperties(_ref, ['children', 'className', 'style']);


            var classes = classNames(defineProperty({}, 'u-flex-item', true), className);
            return preact.h(
                'div',
                _extends({
                    'class': classes,
                    style: style
                }, props),
                children
            );
        }
    }]);
    return FlexItem;
}(preact.Component);

var Flex = function (_Component) {
    inherits(Flex, _Component);

    function Flex() {
        classCallCheck(this, Flex);
        return possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    createClass(Flex, [{
        key: 'render',
        value: function render(_ref) {
            var _classNames;

            var direction = _ref.direction,
                wrap = _ref.wrap,
                justify = _ref.justify,
                align = _ref.align,
                alignContent = _ref.alignContent,
                className = _ref.className,
                children = _ref.children,
                style = _ref.style,
                props = objectWithoutProperties(_ref, ['direction', 'wrap', 'justify', 'align', 'alignContent', 'className', 'children', 'style']);


            var clsPrefix = 'u-flex';

            var classes = classNames((_classNames = {}, defineProperty(_classNames, '' + clsPrefix, true), defineProperty(_classNames, clsPrefix + '-dir-row', direction === 'row'), defineProperty(_classNames, clsPrefix + '-dir-row-reverse', direction === 'row-reverse'), defineProperty(_classNames, clsPrefix + '-dir-column', direction === 'column'), defineProperty(_classNames, clsPrefix + '-dir-column-reverse', direction === 'column-reverse'), defineProperty(_classNames, clsPrefix + '-nowrap', wrap === 'nowrap'), defineProperty(_classNames, clsPrefix + '-wrap', wrap === 'wrap'), defineProperty(_classNames, clsPrefix + '-wrap-reverse', wrap === 'wrap-reverse'), defineProperty(_classNames, clsPrefix + '-justify-start', justify === 'start'), defineProperty(_classNames, clsPrefix + '-justify-end', justify === 'end'), defineProperty(_classNames, clsPrefix + '-justify-center', justify === 'center'), defineProperty(_classNames, clsPrefix + '-justify-between', justify === 'between'), defineProperty(_classNames, clsPrefix + '-justify-around', justify === 'around'), defineProperty(_classNames, clsPrefix + '-align-top', align === 'top' || align === 'start'), defineProperty(_classNames, clsPrefix + '-align-middle', align === 'middle' || align === 'center'), defineProperty(_classNames, clsPrefix + '-align-bottom', align === 'bottom' || align === 'end'), defineProperty(_classNames, clsPrefix + '-align-baseline', align === 'baseline'), defineProperty(_classNames, clsPrefix + '-align-stretch', align === 'stretch'), defineProperty(_classNames, clsPrefix + '-align-content-start', alignContent === 'start'), defineProperty(_classNames, clsPrefix + '-align-content-end', alignContent === 'end'), defineProperty(_classNames, clsPrefix + '-align-content-center', alignContent === 'center'), defineProperty(_classNames, clsPrefix + '-align-content-between', alignContent === 'between'), defineProperty(_classNames, clsPrefix + '-align-content-around', alignContent === 'around'), defineProperty(_classNames, clsPrefix + '-align-content-stretch', alignContent === 'stretch'), _classNames), className);

            return preact.h(
                'div',
                _extends({
                    'class': classes,
                    style: style
                }, props),
                children
            );
        }
    }]);
    return Flex;
}(preact.Component);

Flex.Item = FlexItem;

var Button = function (_Component) {
    inherits(Button, _Component);

    function Button() {
        classCallCheck(this, Button);
        return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass(Button, [{
        key: 'render',
        value: function render(_ref) {
            var _classNames;

            var color = _ref.color,
                children = _ref.children,
                className = _ref.className,
                bordered = _ref.bordered,
                style = _ref.style,
                disabled = _ref.disabled,
                size = _ref.size,
                props = objectWithoutProperties(_ref, ['color', 'children', 'className', 'bordered', 'style', 'disabled', 'size']);

            var clsPrefix = 'u-button';
            var classes = classNames((_classNames = {}, defineProperty(_classNames, '' + clsPrefix, true), defineProperty(_classNames, clsPrefix + '-' + size, size), defineProperty(_classNames, clsPrefix + '-disabled', disabled), defineProperty(_classNames, clsPrefix + '-' + color, color), defineProperty(_classNames, clsPrefix + '-bordered', bordered), _classNames), className);

            return preact.h(
                'button',
                _extends({
                    'class': classes,
                    style: style,
                    disabled: disabled ? 'disabled' : ''
                }, props),
                children
            );
        }
    }]);
    return Button;
}(preact.Component);

/**
 * MUI NPM Package
 * @module pkg/preact.js
 */

/** Define module API */

var PreactTinperBee = {
    Flex: Flex,
    Button: Button,
    Form: Form,
    Input: Input
};

return PreactTinperBee;

})));