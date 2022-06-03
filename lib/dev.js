'use strict';

var React = require('react');
var Modal = require('@cogoport/front/components/admin/Modal');
var Toggle = require('@cogoport/front/components/admin/Toggle');
var components = require('@cogoport/front/components');
var styled = require('@cogoport/front/styled');
var admin = require('@cogoport/front/components/admin');
var jsxRuntime = require('react/jsx-runtime');
var reactDom = require('react-dom');
var StaticAxios = require('axios');
var util = require('util');
var date = require('@cogoport/front/date');
var helpers = require('@cogoport/front/helpers');
var pie = require('@cogoport/front/charts/pie');
var bar = require('@cogoport/front/charts/bar');
var funnel = require('@cogoport/front/charts/funnel');
var line = require('@cogoport/front/charts/line');
var bump = require('@cogoport/front/charts/bump');
var utils$3 = require('@cogoport/front/utils');
var hooks = require('@cogoport/front/hooks');
var Input = require('@cogoport/front/components/Input');
var Switch = require('@cogoport/front/components/Switch');
var TagSelect = require('@cogoport/front/components/Pills');
var DateTimePicker = require('@cogoport/front/components/DateTimePicker');
var reactSelect = require('react-select');
var reactGridSystem = require('react-grid-system');
var Button$1 = require('@cogoport/front/components/admin/Button');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);
var Toggle__default = /*#__PURE__*/_interopDefaultLegacy(Toggle);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var reactDom__default = /*#__PURE__*/_interopDefaultLegacy(reactDom);
var StaticAxios__default = /*#__PURE__*/_interopDefaultLegacy(StaticAxios);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
var Input__default = /*#__PURE__*/_interopDefaultLegacy(Input);
var Switch__default = /*#__PURE__*/_interopDefaultLegacy(Switch);
var TagSelect__default = /*#__PURE__*/_interopDefaultLegacy(TagSelect);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button$1);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator$1(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
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
}

function _objectWithoutPropertiesLoose$h(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$h(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$h(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _templateObject$n;
var Container$5 = styled__default["default"].div(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: row;\n    padding: 20px 0;\n    justify-content: space-between;\n"])));

var _templateObject$m;
var Btn = styled__default["default"](admin.Button)(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["\n\n    text-transform: capitalize;\n"])));

var _excluded$v = ["children"];

var Button = function Button(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties$h(_ref, _excluded$v);

  return /*#__PURE__*/jsxRuntime.jsx(Btn, _objectSpread2(_objectSpread2({}, rest), {}, {
    children: children
  }));
};

var CancelUpdateDashboardConfirmationModal = function CancelUpdateDashboardConfirmationModal(_ref) {
  var _ref$showCancelUpdate = _ref.showCancelUpdateConfirmationModal,
      showCancelUpdateConfirmationModal = _ref$showCancelUpdate === void 0 ? false : _ref$showCancelUpdate,
      _ref$setShowCancelUpd = _ref.setShowCancelUpdateConfirmationModal,
      setShowCancelUpdateConfirmationModal = _ref$setShowCancelUpd === void 0 ? function () {} : _ref$setShowCancelUpd,
      _ref$setDashboardMode = _ref.setDashboardMode,
      setDashboardMode = _ref$setDashboardMode === void 0 ? function () {} : _ref$setDashboardMode,
      _ref$reloadOnUpdate = _ref.reloadOnUpdate,
      reloadOnUpdate = _ref$reloadOnUpdate === void 0 ? true : _ref$reloadOnUpdate,
      _ref$setReloadOnUpdat = _ref.setReloadOnUpdate,
      setReloadOnUpdate = _ref$setReloadOnUpdat === void 0 ? function () {} : _ref$setReloadOnUpdat;
  if (!showCancelUpdateConfirmationModal) return null;

  var handleClickProceed = function handleClickProceed() {
    setDashboardMode('view');
    setShowCancelUpdateConfirmationModal(false);
    setReloadOnUpdate(!reloadOnUpdate);
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Modal, {
    show: showCancelUpdateConfirmationModal,
    onClose: function onClose() {
      return setShowCancelUpdateConfirmationModal(false);
    },
    width: 350,
    onOuterClick: function onOuterClick() {
      return setShowCancelUpdateConfirmationModal(false);
    },
    children: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      direction: "column",
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
        size: 18,
        bold: true,
        children: "Confirmation"
      }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
        direction: "column",
        margin: "16px 0 0 0",
        children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
          size: 16,
          children: "Any changes made, will not be updated. Are you sure, want to proceed?"
        }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
          justifyContent: "flex-end",
          margin: "16px 0 0 0",
          style: {
            gap: '16px'
          },
          children: [/*#__PURE__*/jsxRuntime.jsx(Button, {
            onClick: function onClick() {
              return setShowCancelUpdateConfirmationModal(false);
            },
            className: "secondary sm",
            children: "Cancel"
          }), /*#__PURE__*/jsxRuntime.jsx(Button, {
            className: "primary sm",
            onClick: handleClickProceed,
            size: "sm",
            children: "Proceed"
          })]
        })]
      })]
    })
  });
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lodash_isequal = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
});

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function require$$2 () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

// this file was prevaled
var fastRGLPropsEqual = function fastRGLPropsEqual(a, b, isEqualImpl) {
  if (a === b) return true;
  return a.className === b.className && isEqualImpl(a.style, b.style) && a.width === b.width && a.autoSize === b.autoSize && a.cols === b.cols && a.draggableCancel === b.draggableCancel && a.draggableHandle === b.draggableHandle && isEqualImpl(a.verticalCompact, b.verticalCompact) && isEqualImpl(a.compactType, b.compactType) && isEqualImpl(a.layout, b.layout) && isEqualImpl(a.margin, b.margin) && isEqualImpl(a.containerPadding, b.containerPadding) && a.rowHeight === b.rowHeight && a.maxRows === b.maxRows && a.isBounded === b.isBounded && a.isDraggable === b.isDraggable && a.isResizable === b.isResizable && a.allowOverlap === b.allowOverlap && a.preventCollision === b.preventCollision && a.useCSSTransforms === b.useCSSTransforms && a.transformScale === b.transformScale && a.isDroppable === b.isDroppable && isEqualImpl(a.resizeHandles, b.resizeHandles) && isEqualImpl(a.resizeHandle, b.resizeHandle) && a.onLayoutChange === b.onLayoutChange && a.onDragStart === b.onDragStart && a.onDrag === b.onDrag && a.onDragStop === b.onDragStop && a.onResizeStart === b.onResizeStart && a.onResize === b.onResize && a.onResizeStop === b.onResizeStop && a.onDrop === b.onDrop && isEqualImpl(a.droppingItem, b.droppingItem) && isEqualImpl(a.innerRef, b.innerRef);
};

var utils$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bottom = bottom;
exports.childrenEqual = childrenEqual;
exports.cloneLayout = cloneLayout;
exports.cloneLayoutItem = cloneLayoutItem;
exports.collides = collides;
exports.compact = compact;
exports.compactItem = compactItem;
exports.compactType = compactType;
exports.correctBounds = correctBounds;
exports.fastPositionEqual = fastPositionEqual;
exports.fastRGLPropsEqual = void 0;
exports.getAllCollisions = getAllCollisions;
exports.getFirstCollision = getFirstCollision;
exports.getLayoutItem = getLayoutItem;
exports.getStatics = getStatics;
exports.modifyLayout = modifyLayout;
exports.moveElement = moveElement;
exports.moveElementAwayFromCollision = moveElementAwayFromCollision;
exports.noop = void 0;
exports.perc = perc;
exports.setTopLeft = setTopLeft;
exports.setTransform = setTransform;
exports.sortLayoutItems = sortLayoutItems;
exports.sortLayoutItemsByColRow = sortLayoutItemsByColRow;
exports.sortLayoutItemsByRowCol = sortLayoutItemsByRowCol;
exports.synchronizeLayoutWithChildren = synchronizeLayoutWithChildren;
exports.validateLayout = validateLayout;
exports.withLayoutItem = withLayoutItem;

var _lodash = _interopRequireDefault(lodash_isequal);

var _react = _interopRequireDefault(React__default["default"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */

function bottom(layout
/*: Layout*/
)
/*: number*/
{
  var max = 0,
      bottomY;

  for (var i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }

  return max;
}

function cloneLayout(layout
/*: Layout*/
)
/*: Layout*/
{
  var newLayout = Array(layout.length);

  for (var i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i]);
  }

  return newLayout;
} // Modify a layoutItem inside a layout. Returns a new Layout,
// does not mutate. Carries over all other LayoutItems unmodified.


function modifyLayout(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: Layout*/
{
  var newLayout = Array(layout.length);

  for (var i = 0, len = layout.length; i < len; i++) {
    if (layoutItem.i === layout[i].i) {
      newLayout[i] = layoutItem;
    } else {
      newLayout[i] = layout[i];
    }
  }

  return newLayout;
} // Function to be called to modify a layout item.
// Does defensive clones to ensure the layout is not modified.


function withLayoutItem(layout
/*: Layout*/
, itemKey
/*: string*/
, cb
/*: LayoutItem => LayoutItem*/
)
/*: [Layout, ?LayoutItem]*/
{
  var item = getLayoutItem(layout, itemKey);
  if (!item) return [layout, null];
  item = cb(cloneLayoutItem(item)); // defensive clone then modify
  // FIXME could do this faster if we already knew the index

  layout = modifyLayout(layout, item);
  return [layout, item];
} // Fast path to cloning, since this is monomorphic


function cloneLayoutItem(layoutItem
/*: LayoutItem*/
)
/*: LayoutItem*/
{
  return {
    w: layoutItem.w,
    h: layoutItem.h,
    x: layoutItem.x,
    y: layoutItem.y,
    i: layoutItem.i,
    minW: layoutItem.minW,
    maxW: layoutItem.maxW,
    minH: layoutItem.minH,
    maxH: layoutItem.maxH,
    moved: Boolean(layoutItem.moved),
    static: Boolean(layoutItem.static),
    // These can be null/undefined
    isDraggable: layoutItem.isDraggable,
    isResizable: layoutItem.isResizable,
    resizeHandles: layoutItem.resizeHandles,
    isBounded: layoutItem.isBounded
  };
}
/**
 * Comparing React `children` is a bit difficult. This is a good way to compare them.
 * This will catch differences in keys, order, and length.
 */


function childrenEqual(a
/*: ReactChildren*/
, b
/*: ReactChildren*/
)
/*: boolean*/
{
  return (0, _lodash.default)(_react.default.Children.map(a, function (c) {
    return c === null || c === void 0 ? void 0 : c.key;
  }), _react.default.Children.map(b, function (c) {
    return c === null || c === void 0 ? void 0 : c.key;
  }));
}
/**
 * See `fastRGLPropsEqual.js`.
 * We want this to run as fast as possible - it is called often - and to be
 * resilient to new props that we add. So rather than call lodash.isEqual,
 * which isn't suited to comparing props very well, we use this specialized
 * function in conjunction with preval to generate the fastest possible comparison
 * function, tuned for exactly our props.
 */

/*:: type FastRGLPropsEqual = (Object, Object, Function) => boolean;*/


 // Like the above, but a lot simpler.


exports.fastRGLPropsEqual = fastRGLPropsEqual;

function fastPositionEqual(a
/*: Position*/
, b
/*: Position*/
)
/*: boolean*/
{
  return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height;
}
/**
 * Given two layoutitems, check if they collide.
 */


function collides(l1
/*: LayoutItem*/
, l2
/*: LayoutItem*/
)
/*: boolean*/
{
  if (l1.i === l2.i) return false; // same element

  if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2

  if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2

  if (l1.y + l1.h <= l2.y) return false; // l1 is above l2

  if (l1.y >= l2.y + l2.h) return false; // l1 is below l2

  return true; // boxes overlap
}
/**
 * Given a layout, compact it. This involves going down each y coordinate and removing gaps
 * between items.
 *
 * Does not modify layout items (clones). Creates a new layout array.
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}       Compacted Layout.
 */


function compact(layout
/*: Layout*/
, compactType
/*: CompactType*/
, cols
/*: number*/
)
/*: Layout*/
{
  // Statics go in the compareWith array right away so items flow around them.
  var compareWith = getStatics(layout); // We go through the items by row and column.

  var sorted = sortLayoutItems(layout, compactType); // Holding for new items.

  var out = Array(layout.length);

  for (var i = 0, len = sorted.length; i < len; i++) {
    var l = cloneLayoutItem(sorted[i]); // Don't move static elements

    if (!l.static) {
      l = compactItem(compareWith, l, compactType, cols, sorted); // Add to comparison array. We only collide with items before this one.
      // Statics are already in this array.

      compareWith.push(l);
    } // Add to output array to make sure they still come out in the right order.


    out[layout.indexOf(sorted[i])] = l; // Clear moved flag, if it exists.

    l.moved = false;
  }

  return out;
}

var heightWidth = {
  x: "w",
  y: "h"
};
/**
 * Before moving item down, it will check if the movement will cause collisions and move those items down before.
 */

function resolveCompactionCollision(layout
/*: Layout*/
, item
/*: LayoutItem*/
, moveToCoord
/*: number*/
, axis
/*: "x" | "y"*/
) {
  var sizeProp = heightWidth[axis];
  item[axis] += 1;
  var itemIndex = layout.map(function (layoutItem) {
    return layoutItem.i;
  }).indexOf(item.i); // Go through each item we collide with.

  for (var i = itemIndex + 1; i < layout.length; i++) {
    var otherItem = layout[i]; // Ignore static items

    if (otherItem.static) continue; // Optimization: we can break early if we know we're past this el
    // We can do this b/c it's a sorted layout

    if (otherItem.y > item.y + item.h) break;

    if (collides(item, otherItem)) {
      resolveCompactionCollision(layout, otherItem, moveToCoord + item[sizeProp], axis);
    }
  }

  item[axis] = moveToCoord;
}
/**
 * Compact an item in the layout.
 *
 * Modifies item.
 *
 */


function compactItem(compareWith
/*: Layout*/
, l
/*: LayoutItem*/
, compactType
/*: CompactType*/
, cols
/*: number*/
, fullLayout
/*: Layout*/
)
/*: LayoutItem*/
{
  var compactV = compactType === "vertical";
  var compactH = compactType === "horizontal";

  if (compactV) {
    // Bottom 'y' possible is the bottom of the layout.
    // This allows you to do nice stuff like specify {y: Infinity}
    // This is here because the layout must be sorted in order to get the correct bottom `y`.
    l.y = Math.min(bottom(compareWith), l.y); // Move the element up as far as it can go without colliding.

    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  } else if (compactH) {
    // Move the element left as far as it can go without colliding.
    while (l.x > 0 && !getFirstCollision(compareWith, l)) {
      l.x--;
    }
  } // Move it down, and keep moving it down if it's colliding.


  var collides;

  while (collides = getFirstCollision(compareWith, l)) {
    if (compactH) {
      resolveCompactionCollision(fullLayout, l, collides.x + collides.w, "x");
    } else {
      resolveCompactionCollision(fullLayout, l, collides.y + collides.h, "y");
    } // Since we can't grow without bounds horizontally, if we've overflown, let's move it down and try again.


    if (compactH && l.x + l.w > cols) {
      l.x = cols - l.w;
      l.y++;
    }
  } // Ensure that there are no negative positions


  l.y = Math.max(l.y, 0);
  l.x = Math.max(l.x, 0);
  return l;
}
/**
 * Given a layout, make sure all elements fit within its bounds.
 *
 * Modifies layout items.
 *
 * @param  {Array} layout Layout array.
 * @param  {Number} bounds Number of columns.
 */


function correctBounds(layout
/*: Layout*/
, bounds
/*: { cols: number }*/
)
/*: Layout*/
{
  var collidesWith = getStatics(layout);

  for (var i = 0, len = layout.length; i < len; i++) {
    var l = layout[i]; // Overflows right

    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w; // Overflows left

    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }

    if (!l.static) collidesWith.push(l);else {
      // If this is static and collides with other statics, we must move it down.
      // We have to do something nicer than just letting them overlap.
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }

  return layout;
}
/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */


function getLayoutItem(layout
/*: Layout*/
, id
/*: string*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id) return layout[i];
  }
}
/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */


function getFirstCollision(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i];
  }
}

function getAllCollisions(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: Array<LayoutItem>*/
{
  return layout.filter(function (l) {
    return collides(l, layoutItem);
  });
}
/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */


function getStatics(layout
/*: Layout*/
)
/*: Array<LayoutItem>*/
{
  return layout.filter(function (l) {
    return l.static;
  });
}
/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * Modifies layout items.
 *
 * @param  {Array}      layout            Full layout to modify.
 * @param  {LayoutItem} l                 element to move.
 * @param  {Number}     [x]               X position in grid units.
 * @param  {Number}     [y]               Y position in grid units.
 */


function moveElement(layout
/*: Layout*/
, l
/*: LayoutItem*/
, x
/*: ?number*/
, y
/*: ?number*/
, isUserAction
/*: ?boolean*/
, preventCollision
/*: ?boolean*/
, compactType
/*: CompactType*/
, cols
/*: number*/
, allowOverlap
/*: ?boolean*/
)
/*: Layout*/
{
  // If this is static and not explicitly enabled as draggable,
  // no move is possible, so we can short-circuit this immediately.
  if (l.static && l.isDraggable !== true) return layout; // Short-circuit if nothing to do.

  if (l.y === y && l.x === x) return layout;
  log("Moving element ".concat(l.i, " to [").concat(String(x), ",").concat(String(y), "] from [").concat(l.x, ",").concat(l.y, "]"));
  var oldX = l.x;
  var oldY = l.y; // This is quite a bit faster than extending the object

  if (typeof x === "number") l.x = x;
  if (typeof y === "number") l.y = y;
  l.moved = true; // If this collides with anything, move it.
  // When doing this comparison, we have to sort the items we compare with
  // to ensure, in the case of multiple collisions, that we're getting the
  // nearest collision.

  var sorted = sortLayoutItems(layout, compactType);
  var movingUp = compactType === "vertical" && typeof y === "number" ? oldY >= y : compactType === "horizontal" && typeof x === "number" ? oldX >= x : false; // $FlowIgnore acceptable modification of read-only array as it was recently cloned

  if (movingUp) sorted = sorted.reverse();
  var collisions = getAllCollisions(sorted, l);
  var hasCollisions = collisions.length > 0; // We may have collisions. We can short-circuit if we've turned off collisions or
  // allowed overlap.

  if (hasCollisions && allowOverlap) {
    // Easy, we don't need to resolve collisions. But we *did* change the layout,
    // so clone it on the way out.
    return cloneLayout(layout);
  } else if (hasCollisions && preventCollision) {
    // If we are preventing collision but not allowing overlap, we need to
    // revert the position of this element so it goes to where it came from, rather
    // than the user's desired location.
    log("Collision prevented on ".concat(l.i, ", reverting."));
    l.x = oldX;
    l.y = oldY;
    l.moved = false;
    return layout; // did not change so don't clone
  } // Move each item that collides away from this element.


  for (var i = 0, len = collisions.length; i < len; i++) {
    var collision = collisions[i];
    log("Resolving collision between ".concat(l.i, " at [").concat(l.x, ",").concat(l.y, "] and ").concat(collision.i, " at [").concat(collision.x, ",").concat(collision.y, "]")); // Short circuit so we can't infinite loop

    if (collision.moved) continue; // Don't move static items - we have to move *this* element away

    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, l, isUserAction, compactType);
    } else {
      layout = moveElementAwayFromCollision(layout, l, collision, isUserAction, compactType);
    }
  }

  return layout;
}
/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {LayoutItem} collidesWith Layout item we're colliding with.
 * @param  {LayoutItem} itemToMove   Layout item we're moving.
 */


function moveElementAwayFromCollision(layout
/*: Layout*/
, collidesWith
/*: LayoutItem*/
, itemToMove
/*: LayoutItem*/
, isUserAction
/*: ?boolean*/
, compactType
/*: CompactType*/
, cols
/*: number*/
)
/*: Layout*/
{
  var compactH = compactType === "horizontal"; // Compact vertically if not set to horizontal

  var compactV = compactType !== "horizontal";
  var preventCollision = collidesWith.static; // we're already colliding (not for static items)
  // If there is enough space above the collision to put this element, move it there.
  // We only do this on the main collision as this can get funky in cascades and cause
  // unwanted swapping behavior.

  if (isUserAction) {
    // Reset isUserAction flag because we're not in the main collision anymore.
    isUserAction = false; // Make a mock item so we don't modify the item here, only modify in moveElement.

    var fakeItem
    /*: LayoutItem*/
    = {
      x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
      y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: "-1"
    }; // No collision? If so, we can go up there; otherwise, we'll end up moving down as normal

    if (!getFirstCollision(layout, fakeItem)) {
      log("Doing reverse collision on ".concat(itemToMove.i, " up to [").concat(fakeItem.x, ",").concat(fakeItem.y, "]."));
      return moveElement(layout, itemToMove, compactH ? fakeItem.x : undefined, compactV ? fakeItem.y : undefined, isUserAction, preventCollision, compactType);
    }
  }

  return moveElement(layout, itemToMove, compactH ? itemToMove.x + 1 : undefined, compactV ? itemToMove.y + 1 : undefined, isUserAction, preventCollision, compactType);
}
/**
 * Helper to convert a number to a percentage string.
 *
 * @param  {Number} num Any number
 * @return {String}     That number as a percentage.
 */


function perc(num
/*: number*/
)
/*: string*/
{
  return num * 100 + "%";
}

function setTransform(_ref)
/*: Object*/
{
  var top = _ref.top,
      left = _ref.left,
      width = _ref.width,
      height = _ref.height;
  // Replace unitless items with px
  var translate = "translate(".concat(left, "px,").concat(top, "px)");
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    position: "absolute"
  };
}

function setTopLeft(_ref2)
/*: Object*/
{
  var top = _ref2.top,
      left = _ref2.left,
      width = _ref2.width,
      height = _ref2.height;
  return {
    top: "".concat(top, "px"),
    left: "".concat(left, "px"),
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    position: "absolute"
  };
}
/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */


function sortLayoutItems(layout
/*: Layout*/
, compactType
/*: CompactType*/
)
/*: Layout*/
{
  if (compactType === "horizontal") return sortLayoutItemsByColRow(layout);
  if (compactType === "vertical") return sortLayoutItemsByRowCol(layout);else return layout;
}
/**
 * Sort layout items by row ascending and column ascending.
 *
 * Does not modify Layout.
 */


function sortLayoutItemsByRowCol(layout
/*: Layout*/
)
/*: Layout*/
{
  // Slice to clone array as sort modifies
  return layout.slice(0).sort(function (a, b) {
    if (a.y > b.y || a.y === b.y && a.x > b.x) {
      return 1;
    } else if (a.y === b.y && a.x === b.x) {
      // Without this, we can get different sort results in IE vs. Chrome/FF
      return 0;
    }

    return -1;
  });
}
/**
 * Sort layout items by column ascending then row ascending.
 *
 * Does not modify Layout.
 */


function sortLayoutItemsByColRow(layout
/*: Layout*/
)
/*: Layout*/
{
  return layout.slice(0).sort(function (a, b) {
    if (a.x > b.x || a.x === b.x && a.y > b.y) {
      return 1;
    }

    return -1;
  });
}
/**
 * Generate a layout using the initialLayout and children as a template.
 * Missing entries will be added, extraneous ones will be truncated.
 *
 * Does not modify initialLayout.
 *
 * @param  {Array}  initialLayout Layout passed in through props.
 * @param  {String} breakpoint    Current responsive breakpoint.
 * @param  {?String} compact      Compaction option.
 * @return {Array}                Working layout.
 */


function synchronizeLayoutWithChildren(initialLayout
/*: Layout*/
, children
/*: ReactChildren*/
, cols
/*: number*/
, compactType
/*: CompactType*/
, allowOverlap
/*: ?boolean*/
)
/*: Layout*/
{
  initialLayout = initialLayout || []; // Generate one layout item per child.

  var layout
  /*: LayoutItem[]*/
  = [];

  _react.default.Children.forEach(children, function (child
  /*: ReactElement<any>*/
  ) {
    // Child may not exist
    if ((child === null || child === void 0 ? void 0 : child.key) == null) return; // Don't overwrite if it already exists.

    var exists = getLayoutItem(initialLayout, String(child.key));

    if (exists) {
      layout.push(cloneLayoutItem(exists));
    } else {
      if (child.props._grid) {
        console.warn("`_grid` properties on children have been deprecated as of React 15.2. " + "Please use `data-grid` or add your properties directly to the `layout`.");
      }

      var g = child.props["data-grid"] || child.props._grid; // Hey, this item has a data-grid property, use it.

      if (g) {
        {
          validateLayout([g], "ReactGridLayout.children");
        } // FIXME clone not really necessary here


        layout.push(cloneLayoutItem(_objectSpread(_objectSpread({}, g), {}, {
          i: child.key
        })));
      } else {
        // Nothing provided: ensure this is added to the bottom
        // FIXME clone not really necessary here
        layout.push(cloneLayoutItem({
          w: 1,
          h: 1,
          x: 0,
          y: bottom(layout),
          i: String(child.key)
        }));
      }
    }
  }); // Correct the layout.


  var correctedLayout = correctBounds(layout, {
    cols: cols
  });
  return allowOverlap ? correctedLayout : compact(correctedLayout, compactType, cols);
}
/**
 * Validate a layout. Throws errors.
 *
 * @param  {Array}  layout        Array of layout items.
 * @param  {String} [contextName] Context name for errors.
 * @throw  {Error}                Validation error.
 */


function validateLayout(layout
/*: Layout*/
)
/*: void*/
{
  var contextName
  /*: string*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Layout";
  var subProps = ["x", "y", "w", "h"];
  if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");

  for (var i = 0, len = layout.length; i < len; i++) {
    var item = layout[i];

    for (var j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== "number") {
        throw new Error("ReactGridLayout: " + contextName + "[" + i + "]." + subProps[j] + " must be a number!");
      }
    }
  }
} // Legacy support for verticalCompact: false


function compactType(props
/*: ?{ verticalCompact: boolean, compactType: CompactType }*/
)
/*: CompactType*/
{
  var _ref3 = props || {},
      verticalCompact = _ref3.verticalCompact,
      compactType = _ref3.compactType;

  return verticalCompact === false ? null : compactType;
}

function log() {

  return; // eslint-disable-next-line no-console
}

var noop = function noop() {};

exports.noop = noop;
});

unwrapExports(utils$2);
utils$2.bottom;
utils$2.childrenEqual;
utils$2.cloneLayout;
utils$2.cloneLayoutItem;
utils$2.collides;
utils$2.compact;
utils$2.compactItem;
utils$2.compactType;
utils$2.correctBounds;
utils$2.fastPositionEqual;
utils$2.fastRGLPropsEqual;
utils$2.getAllCollisions;
utils$2.getFirstCollision;
utils$2.getLayoutItem;
utils$2.getStatics;
utils$2.modifyLayout;
utils$2.moveElement;
utils$2.moveElementAwayFromCollision;
utils$2.noop;
utils$2.perc;
utils$2.setTopLeft;
utils$2.setTransform;
utils$2.sortLayoutItems;
utils$2.sortLayoutItemsByColRow;
utils$2.sortLayoutItemsByRowCol;
utils$2.synchronizeLayoutWithChildren;
utils$2.validateLayout;
utils$2.withLayoutItem;

var calculateUtils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcGridColWidth = calcGridColWidth;
exports.calcGridItemPosition = calcGridItemPosition;
exports.calcGridItemWHPx = calcGridItemWHPx;
exports.calcWH = calcWH;
exports.calcXY = calcXY;
exports.clamp = clamp;

/*:: import type { Position } from "./utils";*/

/*:: export type PositionParams = {
  margin: [number, number],
  containerPadding: [number, number],
  containerWidth: number,
  cols: number,
  rowHeight: number,
  maxRows: number
};*/
// Helper for generating column width
function calcGridColWidth(positionParams
/*: PositionParams*/
)
/*: number*/
{
  var margin = positionParams.margin,
      containerPadding = positionParams.containerPadding,
      containerWidth = positionParams.containerWidth,
      cols = positionParams.cols;
  return (containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols;
} // This can either be called:
// calcGridItemWHPx(w, colWidth, margin[0])
// or
// calcGridItemWHPx(h, rowHeight, margin[1])


function calcGridItemWHPx(gridUnits
/*: number*/
, colOrRowSize
/*: number*/
, marginPx
/*: number*/
)
/*: number*/
{
  // 0 * Infinity === NaN, which causes problems with resize contraints
  if (!Number.isFinite(gridUnits)) return gridUnits;
  return Math.round(colOrRowSize * gridUnits + Math.max(0, gridUnits - 1) * marginPx);
}
/**
 * Return position on the page given an x, y, w, h.
 * left, top, width, height are all in pixels.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calculations.
 * @param  {Number}  x                      X coordinate in grid units.
 * @param  {Number}  y                      Y coordinate in grid units.
 * @param  {Number}  w                      W coordinate in grid units.
 * @param  {Number}  h                      H coordinate in grid units.
 * @return {Position}                       Object containing coords.
 */


function calcGridItemPosition(positionParams
/*: PositionParams*/
, x
/*: number*/
, y
/*: number*/
, w
/*: number*/
, h
/*: number*/
, state
/*: ?Object*/
)
/*: Position*/
{
  var margin = positionParams.margin,
      containerPadding = positionParams.containerPadding,
      rowHeight = positionParams.rowHeight;
  var colWidth = calcGridColWidth(positionParams);
  var out = {}; // If resizing, use the exact width and height as returned from resizing callbacks.

  if (state && state.resizing) {
    out.width = Math.round(state.resizing.width);
    out.height = Math.round(state.resizing.height);
  } // Otherwise, calculate from grid units.
  else {
    out.width = calcGridItemWHPx(w, colWidth, margin[0]);
    out.height = calcGridItemWHPx(h, rowHeight, margin[1]);
  } // If dragging, use the exact width and height as returned from dragging callbacks.


  if (state && state.dragging) {
    out.top = Math.round(state.dragging.top);
    out.left = Math.round(state.dragging.left);
  } // Otherwise, calculate from grid units.
  else {
    out.top = Math.round((rowHeight + margin[1]) * y + containerPadding[1]);
    out.left = Math.round((colWidth + margin[0]) * x + containerPadding[0]);
  }

  return out;
}
/**
 * Translate x and y coordinates from pixels to grid units.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calculations.
 * @param  {Number} top                     Top position (relative to parent) in pixels.
 * @param  {Number} left                    Left position (relative to parent) in pixels.
 * @param  {Number} w                       W coordinate in grid units.
 * @param  {Number} h                       H coordinate in grid units.
 * @return {Object}                         x and y in grid units.
 */


function calcXY(positionParams
/*: PositionParams*/
, top
/*: number*/
, left
/*: number*/
, w
/*: number*/
, h
/*: number*/
)
/*: { x: number, y: number }*/
{
  var margin = positionParams.margin,
      cols = positionParams.cols,
      rowHeight = positionParams.rowHeight,
      maxRows = positionParams.maxRows;
  var colWidth = calcGridColWidth(positionParams); // left = colWidth * x + margin * (x + 1)
  // l = cx + m(x+1)
  // l = cx + mx + m
  // l - m = cx + mx
  // l - m = x(c + m)
  // (l - m) / (c + m) = x
  // x = (left - margin) / (coldWidth + margin)

  var x = Math.round((left - margin[0]) / (colWidth + margin[0]));
  var y = Math.round((top - margin[1]) / (rowHeight + margin[1])); // Capping

  x = clamp(x, 0, cols - w);
  y = clamp(y, 0, maxRows - h);
  return {
    x: x,
    y: y
  };
}
/**
 * Given a height and width in pixel values, calculate grid units.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calcluations.
 * @param  {Number} height                  Height in pixels.
 * @param  {Number} width                   Width in pixels.
 * @param  {Number} x                       X coordinate in grid units.
 * @param  {Number} y                       Y coordinate in grid units.
 * @return {Object}                         w, h as grid units.
 */


function calcWH(positionParams
/*: PositionParams*/
, width
/*: number*/
, height
/*: number*/
, x
/*: number*/
, y
/*: number*/
)
/*: { w: number, h: number }*/
{
  var margin = positionParams.margin,
      maxRows = positionParams.maxRows,
      cols = positionParams.cols,
      rowHeight = positionParams.rowHeight;
  var colWidth = calcGridColWidth(positionParams); // width = colWidth * w - (margin * (w - 1))
  // ...
  // w = (width + margin) / (colWidth + margin)

  var w = Math.round((width + margin[0]) / (colWidth + margin[0]));
  var h = Math.round((height + margin[1]) / (rowHeight + margin[1])); // Capping

  w = clamp(w, 0, cols - x);
  h = clamp(h, 0, maxRows - y);
  return {
    w: w,
    h: h
  };
} // Similar to _.clamp


function clamp(num
/*: number*/
, lowerBound
/*: number*/
, upperBound
/*: number*/
)
/*: number*/
{
  return Math.max(Math.min(num, upperBound), lowerBound);
}
});

unwrapExports(calculateUtils);
calculateUtils.calcGridColWidth;
calculateUtils.calcGridItemPosition;
calculateUtils.calcGridItemWHPx;
calculateUtils.calcWH;
calculateUtils.calcXY;
calculateUtils.clamp;

var reactIs_development = createCommonjsModule(function (module, exports) {



{
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;

var has$7 = Function.call.bind(Object.prototype.hasOwnProperty);

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

var has$6 = has$7;

var printWarning$1 = function() {};

{
  var ReactPropTypesSecret = ReactPropTypesSecret$1;
  var loggedTypeFailures = {};
  var has$5 = has$6;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has$5(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

{
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$6(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$6(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$6(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var require$$1$1 = factoryWithTypeCheckers;

var propTypes$1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require$$1$1(ReactIs.isElement, throwOnDirectAccess);
}
});

var shims = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dontSetMe = dontSetMe;
exports.findInArray = findInArray;
exports.int = int;
exports.isFunction = isFunction;
exports.isNum = isNum;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array
/*: Array<any> | TouchList*/
, callback
/*: Function*/
)
/*: any*/
{
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func
/*: any*/
)
/*: boolean %checks*/
{
  // $FlowIgnore[method-unbinding]
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num
/*: any*/
)
/*: boolean %checks*/
{
  return typeof num === 'number' && !isNaN(num);
}

function int(a
/*: string*/
)
/*: number*/
{
  return parseInt(a, 10);
}

function dontSetMe(props
/*: Object*/
, propName
/*: string*/
, componentName
/*: string*/
)
/*: ?Error*/
{
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}
});

unwrapExports(shims);
shims.dontSetMe;
shims.findInArray;
shims.isFunction;
shims.isNum;

var getPrefix_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
exports.default = void 0;
exports.getPrefix = getPrefix;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];

function getPrefix()
/*: string*/
{
  var _window$document, _window$document$docu;

  var prop
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Ensure we're running in an environment where there is actually a global
  // `window` obj
  if (typeof window === 'undefined') return ''; // If we're in a pseudo-browser server-side environment, this access
  // path may not exist, so bail out if it doesn't.

  var style = (_window$document = window.document) === null || _window$document === void 0 ? void 0 : (_window$document$docu = _window$document.documentElement) === null || _window$document$docu === void 0 ? void 0 : _window$document$docu.style;
  if (!style) return '';
  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}

function browserPrefixToStyle(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}

function kebabToTitleCase(str
/*: string*/
)
/*: string*/
{
  var out = '';
  var shouldCapitalize = true;

  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }

  return out;
} // Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`


var _default = (getPrefix()
/*: string*/
);

exports.default = _default;
});

unwrapExports(getPrefix_1);
getPrefix_1.browserPrefixToKey;
getPrefix_1.browserPrefixToStyle;
getPrefix_1.getPrefix;

var domFns = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClassName = addClassName;
exports.addEvent = addEvent;
exports.addUserSelectStyles = addUserSelectStyles;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.getTranslation = getTranslation;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.offsetXYFromParent = offsetXYFromParent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.removeClassName = removeClassName;
exports.removeEvent = removeEvent;
exports.removeUserSelectStyles = removeUserSelectStyles;



var _getPrefix = _interopRequireWildcard(getPrefix_1);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchesSelectorFunc = '';

function matchesSelector(el
/*: Node*/
, selector
/*: string*/
)
/*: boolean*/
{
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, shims.isFunction)(el[method]);
    });
  } // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable


  if (!(0, shims.isFunction)(el[matchesSelectorFunc])) return false; // $FlowIgnore: Doesn't think elements are indexable

  return el[matchesSelectorFunc](selector);
} // Works up the tree to the draggable itself attempting to match selector.


function matchesSelectorAndParentsTo(el
/*: Node*/
, selector
/*: string*/
, baseNode
/*: Node*/
)
/*: boolean*/
{
  var node = el;

  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions); // $FlowIgnore[method-unbinding]


  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions); // $FlowIgnore[method-unbinding]


  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function outerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, shims.int)(computedStyle.borderTopWidth);
  height += (0, shims.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, shims.int)(computedStyle.borderLeftWidth);
  width += (0, shims.int)(computedStyle.borderRightWidth);
  return width;
}

function innerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, shims.int)(computedStyle.paddingTop);
  height -= (0, shims.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, shims.int)(computedStyle.paddingLeft);
  width -= (0, shims.int)(computedStyle.paddingRight);
  return width;
}
/*:: interface EventWithOffset {
  clientX: number, clientY: number
}*/


// Get from offsetParent
function offsetXYFromParent(evt
/*: EventWithOffset*/
, offsetParent
/*: HTMLElement*/
, scale
/*: number*/
)
/*: ControlPosition*/
{
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x: x,
    y: y
  };
}

function createCSSTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: Object*/
{
  var translation = getTranslation(controlPos, positionOffset, 'px');
  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default), translation);
}

function createSVGTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: string*/
{
  var translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}

function getTranslation(_ref2, positionOffset
/*: PositionOffsetControlPosition*/
, unitSuffix
/*: string*/
)
/*: string*/
{
  var x = _ref2.x,
      y = _ref2.y;
  var translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");

  if (positionOffset) {
    var defaultX = "".concat(typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
    var defaultY = "".concat(typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
  }

  return translation;
}

function getTouch(e
/*: MouseTouchEvent*/
, identifier
/*: number*/
)
/*: ?{clientX: number, clientY: number}*/
{
  return e.targetTouches && (0, shims.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, shims.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e
/*: MouseTouchEvent*/
)
/*: ?number*/
{
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
} // User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
// Note we're passing `document` b/c we could be iframed


function addUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');

  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;

  try {
    if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection'); // $FlowIgnore: IE

    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      // Remove selection caused by scroll, unless it's a focused input
      // (we use doc.defaultView in case we're in an iframe)
      var selection = (doc.defaultView || window).getSelection();

      if (selection && selection.type !== 'Caret') {
        selection.removeAllRanges();
      }
    }
  } catch (e) {// probably IE
  }
}

function addClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
      el.className += " ".concat(className);
    }
  }
}

function removeClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), 'g'), '');
  }
}
});

unwrapExports(domFns);
domFns.addClassName;
domFns.addEvent;
domFns.addUserSelectStyles;
domFns.createCSSTransform;
domFns.createSVGTransform;
domFns.getTouch;
domFns.getTouchIdentifier;
domFns.getTranslation;
domFns.innerHeight;
domFns.innerWidth;
domFns.matchesSelector;
domFns.matchesSelectorAndParentsTo;
domFns.offsetXYFromParent;
domFns.outerHeight;
domFns.outerWidth;
domFns.removeClassName;
domFns.removeEvent;
domFns.removeUserSelectStyles;

var positionFns = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;
exports.getBoundPosition = getBoundPosition;
exports.getControlPosition = getControlPosition;
exports.snapToGrid = snapToGrid;





function getBoundPosition(draggable
/*: Draggable*/
, x
/*: number*/
, y
/*: number*/
)
/*: [number, number]*/
{
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y]; // Clone new bounds

  var bounds = draggable.props.bounds;
  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;
    var ownerWindow = ownerDocument.defaultView;
    var boundNode;

    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }

    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }

    var boundNodeEl
    /*: HTMLElement*/
    = boundNode; // for Flow, can't seem to refine correctly

    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl); // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.

    bounds = {
      left: -node.offsetLeft + (0, shims.int)(boundNodeStyle.paddingLeft) + (0, shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, shims.int)(boundNodeStyle.paddingTop) + (0, shims.int)(nodeStyle.marginTop),
      right: (0, domFns.innerWidth)(boundNodeEl) - (0, domFns.outerWidth)(node) - node.offsetLeft + (0, shims.int)(boundNodeStyle.paddingRight) - (0, shims.int)(nodeStyle.marginRight),
      bottom: (0, domFns.innerHeight)(boundNodeEl) - (0, domFns.outerHeight)(node) - node.offsetTop + (0, shims.int)(boundNodeStyle.paddingBottom) - (0, shims.int)(nodeStyle.marginBottom)
    };
  } // Keep x and y below right and bottom limits...


  if ((0, shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom); // But above left and top limits.

  if ((0, shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}

function snapToGrid(grid
/*: [number, number]*/
, pendingX
/*: number*/
, pendingY
/*: number*/
)
/*: [number, number]*/
{
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
} // Get {x, y} positions from event.


function getControlPosition(e
/*: MouseTouchEvent*/
, touchIdentifier
/*: ?number*/
, draggableCore
/*: DraggableCore*/
)
/*: ?ControlPosition*/
{
  var touchObj = typeof touchIdentifier === 'number' ? (0, domFns.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch

  var node = findDOMNode(draggableCore); // User can provide an offsetParent if desired.

  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
} // Create an data object exposed by <DraggableCore>'s events


function createCoreData(draggable
/*: DraggableCore*/
, x
/*: number*/
, y
/*: number*/
)
/*: DraggableData*/
{
  var state = draggable.state;
  var isStart = !(0, shims.isNum)(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX,
      deltaY: y - state.lastY,
      lastX: state.lastX,
      lastY: state.lastY,
      x: x,
      y: y
    };
  }
} // Create an data exposed by <Draggable>'s events


function createDraggableData(draggable
/*: Draggable*/
, coreData
/*: DraggableData*/
)
/*: DraggableData*/
{
  var scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
} // A lot faster than stringify/parse


function cloneBounds(bounds
/*: Bounds*/
)
/*: Bounds*/
{
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable
/*: Draggable | DraggableCore*/
)
/*: HTMLElement*/
{
  var node = draggable.findDOMNode();

  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  } // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME


  return node;
}
});

unwrapExports(positionFns);
positionFns.canDragX;
positionFns.canDragY;
positionFns.createCoreData;
positionFns.createDraggableData;
positionFns.getBoundPosition;
positionFns.getControlPosition;
positionFns.snapToGrid;

var log_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

/*eslint no-console:0*/
function log() {
}
});

unwrapExports(log_1);

var require$$1 = propTypes$1;

var DraggableCore_1$1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

var _reactDom = _interopRequireDefault(reactDom__default["default"]);







var _log = _interopRequireDefault(log_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Simple abstraction for dragging events names.
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
}; // Default to mouse events.

var dragEventFor = eventsFor.mouse;
/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/

/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/

/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void | false;*/

/*:: export type ControlPosition = {x: number, y: number};*/

/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/

/*:: export type DraggableCoreDefaultProps = {
  allowAnyClick: boolean,
  disabled: boolean,
  enableUserSelectHack: boolean,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/

/*:: export type DraggableCoreProps = {
  ...DraggableCoreDefaultProps,
  cancel: string,
  children: ReactElement<any>,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
};*/

//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//
var DraggableCore = /*#__PURE__*/function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  var _super = _createSuper(DraggableCore);

  function DraggableCore() {
    var _this;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    });

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e); // Only accept left-clicks.


      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false; // Get nodes. Be sure to grab relative document (could be iframed)

      var thisNode = _this.findDOMNode();

      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }

      var ownerDocument = thisNode.ownerDocument; // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
        return;
      } // Prevent scrolling on mobile devices, like ipad/iphone.
      // Important that this is after handle/cancel.


      if (e.type === 'touchstart') e.preventDefault(); // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.

      var touchIdentifier = (0, domFns.getTouchIdentifier)(e);

      _this.setState({
        touchIdentifier: touchIdentifier
      }); // Get the current drag point from the event. This is used as the offset.


      var position = (0, positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // Create an event object with all the data parents need to make a decision here.

      var coreEvent = (0, positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent); // Call event handler. If it returns explicit false, cancel.

      (0, _log.default)('calling', _this.props.onStart);

      var shouldUpdate = _this.props.onStart(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) return; // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.

      if (_this.props.enableUserSelectHack) (0, domFns.addUserSelectStyles)(ownerDocument); // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.

      _this.setState({
        dragging: true,
        lastX: x,
        lastY: y
      }); // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.


      (0, domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
      (0, domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      // Get the current drag point from the event. This is used as the offset.
      var position = (0, positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX,
            deltaY = y - _this.state.lastY;

        var _snapToGrid = (0, positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        deltaX = _snapToGrid2[0];
        deltaY = _snapToGrid2[1];
        if (!deltaX && !deltaY) return; // skip useless drag

        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent); // Call event handler. If it returns explicit false, trigger end.

      var shouldUpdate = _this.props.onDrag(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents')
          /*: any*/
          )
          /*: MouseTouchEvent*/
          ); // I see why this insanity was deprecated
          // $FlowIgnore

          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

          _this.handleDragStop(event);
        }

        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function (e) {
      if (!_this.state.dragging) return;
      var position = (0, positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX || 0;
        var deltaY = y - _this.state.lastY || 0;

        var _snapToGrid3 = (0, positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid4 = _slicedToArray(_snapToGrid3, 2);

        deltaX = _snapToGrid4[0];
        deltaY = _snapToGrid4[1];
        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, positionFns.createCoreData)(_assertThisInitialized(_this), x, y); // Call event handler

      var shouldContinue = _this.props.onStop(e, coreEvent);

      if (shouldContinue === false || _this.mounted === false) return false;

      var thisNode = _this.findDOMNode();

      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) (0, domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }

      (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent); // Reset the el.

      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      if (thisNode) {
        // Remove event handlers
        (0, _log.default)('DraggableCore: Removing handlers');
        (0, domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      dragEventFor = eventsFor.mouse;
      return _this.handleDragStop(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStop(e);
    });

    return _this;
  }

  _createClass(DraggableCore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true; // Touch handlers must be added with {passive: false} to be cancelable.
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention

      var thisNode = this.findDOMNode();

      if (thisNode) {
        (0, domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false; // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.

      var thisNode = this.findDOMNode();

      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;
        (0, domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        (0, domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
        (0, domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        (0, domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        (0, domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
        if (this.props.enableUserSelectHack) (0, domFns.removeUserSelectStyles)(ownerDocument);
      }
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      var _this$props, _this$props2, _this$props2$nodeRef;

      return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef ? (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$nodeRef = _this$props2.nodeRef) === null || _this$props2$nodeRef === void 0 ? void 0 : _this$props2$nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: React.Element<any>*/
    {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return /*#__PURE__*/React.cloneElement(React.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(React.Component);

exports.default = DraggableCore;

_defineProperty(DraggableCore, "displayName", 'DraggableCore');

_defineProperty(DraggableCore, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props
  /*: DraggableCoreProps*/
  , propName
  /*: $Keys<DraggableCoreProps>*/
  ) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,

  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,

  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,

  /**
   * These properties should be defined on the child, not here.
   */
  className: shims.dontSetMe,
  style: shims.dontSetMe,
  transform: shims.dontSetMe
});

_defineProperty(DraggableCore, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  disabled: false,
  enableUserSelectHack: true,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {},
  scale: 1
});
});

unwrapExports(DraggableCore_1$1);

var Draggable_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DraggableCore", {
  enumerable: true,
  get: function get() {
    return _DraggableCore.default;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

var _reactDom = _interopRequireDefault(reactDom__default["default"]);

var _clsx2 = _interopRequireDefault(require$$2);







var _DraggableCore = _interopRequireDefault(DraggableCore_1$1);

var _log = _interopRequireDefault(log_1);

var _excluded = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Define <Draggable>
//
var Draggable = /*#__PURE__*/function (_React$Component) {
  _inherits(Draggable, _React$Component);

  var _super = _createSuper(Draggable);

  function Draggable(props
  /*: DraggableProps*/
  ) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, coreData) {
      (0, _log.default)('Draggable: onDragStart: %j', coreData); // Short-circuit if user's callback killed it.

      var shouldStart = _this.props.onStart(e, (0, positionFns.createDraggableData)(_assertThisInitialized(_this), coreData)); // Kills start event on core as well, so move handlers are never bound.


      if (shouldStart === false) return false;

      _this.setState({
        dragging: true,
        dragged: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, coreData) {
      if (!_this.state.dragging) return false;
      (0, _log.default)('Draggable: onDrag: %j', coreData);
      var uiData = (0, positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        x: uiData.x,
        y: uiData.y
      }; // Keep within bounds.

      if (_this.props.bounds) {
        // Save original x and y.
        var x = newState.x,
            y = newState.y; // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY; // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = (0, positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY; // Recalculate slack by noting how much was shaved by the boundPosition handler.

        newState.slackX = _this.state.slackX + (x - newState.x);
        newState.slackY = _this.state.slackY + (y - newState.y); // Update the event we fire to reflect what really happened after bounds took effect.

        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      } // Short-circuit if user's callback killed it.


      var shouldUpdate = _this.props.onDrag(e, uiData);

      if (shouldUpdate === false) return false;

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, coreData) {
      if (!_this.state.dragging) return false; // Short-circuit if user's callback killed it.

      var shouldContinue = _this.props.onStop(e, (0, positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));

      if (shouldContinue === false) return false;
      (0, _log.default)('Draggable: onDragStop: %j', coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        dragging: false,
        slackX: 0,
        slackY: 0
      }; // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.

      var controlled = Boolean(_this.props.position);

      if (controlled) {
        var _this$props$position = _this.props.position,
            x = _this$props$position.x,
            y = _this$props$position.y;
        newState.x = x;
        newState.y = y;
      }

      _this.setState(newState);
    });

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,
      // Whether or not we have been dragged before.
      dragged: false,
      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,
      prevPropsPosition: _objectSpread({}, props.position),
      // Used for compensating for out-of-bounds drags
      slackX: 0,
      slackY: 0,
      // Can only determine if SVG after mounting
      isElementSVG: false
    };

    if (props.position && !(props.onDrag || props.onStop)) {
      // eslint-disable-next-line no-console
      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
    }

    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        dragging: false
      }); // prevents invariant if unmounted while dragging
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;

      return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactElement<any>*/
    {
      var _clsx;

      var _this$props2 = this.props;
          _this$props2.axis;
          _this$props2.bounds;
          var children = _this$props2.children,
          defaultPosition = _this$props2.defaultPosition,
          defaultClassName = _this$props2.defaultClassName,
          defaultClassNameDragging = _this$props2.defaultClassNameDragging,
          defaultClassNameDragged = _this$props2.defaultClassNameDragged,
          position = _this$props2.position,
          positionOffset = _this$props2.positionOffset;
          _this$props2.scale;
          var draggableCoreProps = _objectWithoutProperties(_this$props2, _excluded);

      var style = {};
      var svgTransform = null; // If this is controlled, we don't want to move it - unless it's dragging.

      var controlled = Boolean(position);
      var draggable = !controlled || this.state.dragging;
      var validPosition = position || defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: (0, positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
        // Set top if vertical drag is enabled
        y: (0, positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
      }; // If this element was SVG, we use the `transform` attribute.

      if (this.state.isElementSVG) {
        svgTransform = (0, domFns.createSVGTransform)(transformOpts, positionOffset);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = (0, domFns.createCSSTransform)(transformOpts, positionOffset);
      } // Mark with class while dragging


      var className = (0, _clsx2.default)(children.props.className || '', defaultClassName, (_clsx = {}, _defineProperty(_clsx, defaultClassNameDragging, this.state.dragging), _defineProperty(_clsx, defaultClassNameDragged, this.state.dragged), _clsx)); // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)

      return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /*#__PURE__*/React.cloneElement(React.Children.only(children), {
        className: className,
        style: _objectSpread(_objectSpread({}, children.props.style), style),
        transform: svgTransform
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: // React 16.3+
    // Arity (props, state)
    function getDerivedStateFromProps(_ref, _ref2)
    /*: ?$Shape<DraggableState>*/
    {
      var position = _ref.position;
      var prevPropsPosition = _ref2.prevPropsPosition;

      // Set x/y if a new position is provided in props that is different than the previous.
      if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
        (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
          position: position,
          prevPropsPosition: prevPropsPosition
        });
        return {
          x: position.x,
          y: position.y,
          prevPropsPosition: _objectSpread({}, position)
        };
      }

      return null;
    }
  }]);

  return Draggable;
}(React.Component);

exports.default = Draggable;

_defineProperty(Draggable, "displayName", 'Draggable');

_defineProperty(Draggable, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
    left: _propTypes.default.number,
    right: _propTypes.default.number,
    top: _propTypes.default.number,
    bottom: _propTypes.default.number
  }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
  defaultClassName: _propTypes.default.string,
  defaultClassNameDragging: _propTypes.default.string,
  defaultClassNameDragged: _propTypes.default.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  positionOffset: _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: shims.dontSetMe,
  style: shims.dontSetMe,
  transform: shims.dontSetMe
}));

_defineProperty(Draggable, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: {
    x: 0,
    y: 0
  },
  scale: 1
}));
});

unwrapExports(Draggable_1);

var Draggable = Draggable_1.default,
    DraggableCore = Draggable_1.DraggableCore; // Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266


var cjs = Draggable;
var default_1 = Draggable;
var DraggableCore_1 = DraggableCore;
cjs.default = default_1;
cjs.DraggableCore = DraggableCore_1;

var utils$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.cloneElement = cloneElement;

var _react = _interopRequireDefault(React__default["default"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React.addons.cloneWithProps look-alike that merges style & className.
function cloneElement(element, props) {
  if (props.style && element.props.style) {
    props.style = _objectSpread(_objectSpread({}, element.props.style), props.style);
  }

  if (props.className && element.props.className) {
    props.className = element.props.className + " " + props.className;
  }

  return /*#__PURE__*/_react.default.cloneElement(element, props);
}
});

unwrapExports(utils$1);
utils$1.cloneElement;

var propTypes = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.resizableProps = void 0;

var _propTypes = _interopRequireDefault(require$$1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizableProps = {
  /*
  * Restricts resizing to a particular axis (default: 'both')
  * 'both' - allows resizing by width or height
  * 'x' - only allows the width to be changed
  * 'y' - only allows the height to be changed
  * 'none' - disables resizing altogether
  * */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),
  className: _propTypes.default.string,

  /*
  * Require that one and only one child be present.
  * */
  children: _propTypes.default.element.isRequired,

  /*
  * These will be passed wholesale to react-draggable's DraggableCore
  * */
  draggableOpts: _propTypes.default.shape({
    allowAnyClick: _propTypes.default.bool,
    cancel: _propTypes.default.string,
    children: _propTypes.default.node,
    disabled: _propTypes.default.bool,
    enableUserSelectHack: _propTypes.default.bool,
    offsetParent: _propTypes.default.node,
    grid: _propTypes.default.arrayOf(_propTypes.default.number),
    handle: _propTypes.default.string,
    nodeRef: _propTypes.default.object,
    onStart: _propTypes.default.func,
    onDrag: _propTypes.default.func,
    onStop: _propTypes.default.func,
    onMouseDown: _propTypes.default.func,
    scale: _propTypes.default.number
  }),

  /*
  * Initial height
  * */
  height: _propTypes.default.number.isRequired,

  /*
  * Customize cursor resize handle
  * */
  handle: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),

  /*
  * If you change this, be sure to update your css
  * */
  handleSize: _propTypes.default.arrayOf(_propTypes.default.number),
  lockAspectRatio: _propTypes.default.bool,

  /*
  * Max X & Y measure
  * */
  maxConstraints: _propTypes.default.arrayOf(_propTypes.default.number),

  /*
  * Min X & Y measure
  * */
  minConstraints: _propTypes.default.arrayOf(_propTypes.default.number),

  /*
  * Called on stop resize event
  * */
  onResizeStop: _propTypes.default.func,

  /*
  * Called on start resize event
  * */
  onResizeStart: _propTypes.default.func,

  /*
  * Called on resize event
  * */
  onResize: _propTypes.default.func,

  /*
  * Defines which resize handles should be rendered (default: 'se')
  * 's' - South handle (bottom-center)
  * 'w' - West handle (left-center)
  * 'e' - East handle (right-center)
  * 'n' - North handle (top-center)
  * 'sw' - Southwest handle (bottom-left)
  * 'nw' - Northwest handle (top-left)
  * 'se' - Southeast handle (bottom-right)
  * 'ne' - Northeast handle (top-center)
  * */
  resizeHandles: _propTypes.default.arrayOf(_propTypes.default.oneOf(['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'])),

  /*
  * If `transform: scale(n)` is set on the parent, this should be set to `n`.
  * */
  transformScale: _propTypes.default.number,

  /*
   * Initial width
   */
  width: _propTypes.default.number.isRequired
};
exports.resizableProps = resizableProps;
});

unwrapExports(propTypes);
propTypes.resizableProps;

var Resizable_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(React__default["default"]);







var _excluded = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// The base <Resizable> component.
// This component does not have state and relies on the parent to set its props based on callback data.
var Resizable = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Resizable, _React$Component);

  function Resizable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handleRefs = {};
    _this.lastHandleRect = null;
    _this.slack = null;
    return _this;
  }

  var _proto = Resizable.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.resetData();
  };

  _proto.resetData = function resetData() {
    this.lastHandleRect = this.slack = null;
  } // Clamp width and height within provided constraints
  ;

  _proto.runConstraints = function runConstraints(width, height) {
    var _this$props = this.props,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        lockAspectRatio = _this$props.lockAspectRatio; // short circuit

    if (!minConstraints && !maxConstraints && !lockAspectRatio) return [width, height]; // If constraining to min and max, we need to also fit width and height to aspect ratio.

    if (lockAspectRatio) {
      var ratio = this.props.width / this.props.height;
      var deltaW = width - this.props.width;
      var deltaH = height - this.props.height; // Find which coordinate was greater and should push the other toward it.
      // E.g.:
      // ratio = 1, deltaW = 10, deltaH = 5, deltaH should become 10.
      // ratio = 2, deltaW = 10, deltaH = 6, deltaW should become 12.

      if (Math.abs(deltaW) > Math.abs(deltaH * ratio)) {
        height = width / ratio;
      } else {
        width = height * ratio;
      }
    }

    var oldW = width,
        oldH = height; // Add slack to the values used to calculate bound position. This will ensure that if
    // we start removing slack, the element won't react to it right away until it's been
    // completely removed.

    var _ref = this.slack || [0, 0],
        slackW = _ref[0],
        slackH = _ref[1];

    width += slackW;
    height += slackH;

    if (minConstraints) {
      width = Math.max(minConstraints[0], width);
      height = Math.max(minConstraints[1], height);
    }

    if (maxConstraints) {
      width = Math.min(maxConstraints[0], width);
      height = Math.min(maxConstraints[1], height);
    } // If the width or height changed, we must have introduced some slack. Record it for the next iteration.


    this.slack = [slackW + (oldW - width), slackH + (oldH - height)];
    return [width, height];
  }
  /**
   * Wrapper around drag events to provide more useful data.
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */
  ;

  _proto.resizeHandler = function resizeHandler(handlerName, axis) {
    var _this2 = this;

    return function (e, _ref2) {
      var node = _ref2.node,
          deltaX = _ref2.deltaX,
          deltaY = _ref2.deltaY;
      // Reset data in case it was left over somehow (should not be possible)
      if (handlerName === 'onResizeStart') _this2.resetData(); // Axis restrictions

      var canDragX = (_this2.props.axis === 'both' || _this2.props.axis === 'x') && axis !== 'n' && axis !== 's';
      var canDragY = (_this2.props.axis === 'both' || _this2.props.axis === 'y') && axis !== 'e' && axis !== 'w'; // No dragging possible.

      if (!canDragX && !canDragY) return; // Decompose axis for later use

      var axisV = axis[0];
      var axisH = axis[axis.length - 1]; // intentionally not axis[1], so that this catches axis === 'w' for example
      // Track the element being dragged to account for changes in position.
      // If a handle's position is changed between callbacks, we need to factor this in to the next callback.
      // Failure to do so will cause the element to "skip" when resized upwards or leftwards.

      var handleRect = node.getBoundingClientRect();

      if (_this2.lastHandleRect != null) {
        // If the handle has repositioned on either axis since last render,
        // we need to increase our callback values by this much.
        // Only checking 'n', 'w' since resizing by 's', 'w' won't affect the overall position on page,
        if (axisH === 'w') {
          var deltaLeftSinceLast = handleRect.left - _this2.lastHandleRect.left;
          deltaX += deltaLeftSinceLast;
        }

        if (axisV === 'n') {
          var deltaTopSinceLast = handleRect.top - _this2.lastHandleRect.top;
          deltaY += deltaTopSinceLast;
        }
      } // Storage of last rect so we know how much it has really moved.


      _this2.lastHandleRect = handleRect; // Reverse delta if using top or left drag handles.

      if (axisH === 'w') deltaX = -deltaX;
      if (axisV === 'n') deltaY = -deltaY; // Update w/h by the deltas. Also factor in transformScale.

      var width = _this2.props.width + (canDragX ? deltaX / _this2.props.transformScale : 0);
      var height = _this2.props.height + (canDragY ? deltaY / _this2.props.transformScale : 0); // Run user-provided constraints.

      var _this2$runConstraints = _this2.runConstraints(width, height);

      width = _this2$runConstraints[0];
      height = _this2$runConstraints[1];
      var dimensionsChanged = width !== _this2.props.width || height !== _this2.props.height; // Call user-supplied callback if present.

      var cb = typeof _this2.props[handlerName] === 'function' ? _this2.props[handlerName] : null; // Don't call 'onResize' if dimensions haven't changed.

      var shouldSkipCb = handlerName === 'onResize' && !dimensionsChanged;

      if (cb && !shouldSkipCb) {
        e.persist == null ? void 0 : e.persist();
        cb(e, {
          node: node,
          size: {
            width: width,
            height: height
          },
          handle: axis
        });
      } // Reset internal data


      if (handlerName === 'onResizeStop') _this2.resetData();
    };
  } // Render a resize handle given an axis & DOM ref. Ref *must* be attached for
  // the underlying draggable library to work properly.
  ;

  _proto.renderResizeHandle = function renderResizeHandle(handleAxis, ref) {
    var handle = this.props.handle; // No handle provided, make the default

    if (!handle) {
      return /*#__PURE__*/React.createElement("span", {
        className: "react-resizable-handle react-resizable-handle-" + handleAxis,
        ref: ref
      });
    } // Handle is a function, such as:
    // `handle={(handleAxis) => <span className={...} />}`


    if (typeof handle === 'function') {
      return handle(handleAxis, ref);
    } // Handle is a React component (composite or DOM).


    var isDOMElement = typeof handle.type === 'string';

    var props = _objectSpread({
      ref: ref
    }, isDOMElement ? {} : {
      handleAxis: handleAxis
    });

    return /*#__PURE__*/React.cloneElement(handle, props);
  };

  _proto.render = function render() {
    var _this3 = this;

    // Pass along only props not meant for the `<Resizable>`.`
    // eslint-disable-next-line no-unused-vars
    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        draggableOpts = _this$props2.draggableOpts;
        _this$props2.width;
        _this$props2.height;
        _this$props2.handle;
        _this$props2.handleSize;
        _this$props2.lockAspectRatio;
        _this$props2.axis;
        _this$props2.minConstraints;
        _this$props2.maxConstraints;
        _this$props2.onResize;
        _this$props2.onResizeStop;
        _this$props2.onResizeStart;
        var resizeHandles = _this$props2.resizeHandles;
        _this$props2.transformScale;
        var p = _objectWithoutPropertiesLoose(_this$props2, _excluded); // What we're doing here is getting the child of this element, and cloning it with this element's props.
    // We are then defining its children as:
    // 1. Its original children (resizable's child's children), and
    // 2. One or more draggable handles.


    return (0, utils$1.cloneElement)(children, _objectSpread(_objectSpread({}, p), {}, {
      className: (className ? className + " " : '') + "react-resizable",
      children: [].concat(children.props.children, resizeHandles.map(function (handleAxis) {
        var _this3$handleRefs$han;

        // Create a ref to the handle so that `<DraggableCore>` doesn't have to use ReactDOM.findDOMNode().
        var ref = (_this3$handleRefs$han = _this3.handleRefs[handleAxis]) != null ? _this3$handleRefs$han : _this3.handleRefs[handleAxis] = /*#__PURE__*/React.createRef();
        return /*#__PURE__*/React.createElement(cjs.DraggableCore, _extends({}, draggableOpts, {
          nodeRef: ref,
          key: "resizableHandle-" + handleAxis,
          onStop: _this3.resizeHandler('onResizeStop', handleAxis),
          onStart: _this3.resizeHandler('onResizeStart', handleAxis),
          onDrag: _this3.resizeHandler('onResize', handleAxis)
        }), _this3.renderResizeHandle(handleAxis, ref));
      }))
    }));
  };

  return Resizable;
}(React.Component);

exports.default = Resizable;
Resizable.propTypes = propTypes.resizableProps;
Resizable.defaultProps = {
  axis: 'both',
  handleSize: [20, 20],
  lockAspectRatio: false,
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity],
  resizeHandles: ['se'],
  transformScale: 1
};
});

unwrapExports(Resizable_1);

var ResizableBox_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

var _Resizable = _interopRequireDefault(Resizable_1);



var _excluded = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ResizableBox = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ResizableBox, _React$Component);

  function ResizableBox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      width: _this.props.width,
      height: _this.props.height,
      propsWidth: _this.props.width,
      propsHeight: _this.props.height
    };

    _this.onResize = function (e, data) {
      var size = data.size;

      if (_this.props.onResize) {
        e.persist == null ? void 0 : e.persist();

        _this.setState(size, function () {
          return _this.props.onResize && _this.props.onResize(e, data);
        });
      } else {
        _this.setState(size);
      }
    };

    return _this;
  }

  ResizableBox.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    // If parent changes height/width, set that in our state.
    if (state.propsWidth !== props.width || state.propsHeight !== props.height) {
      return {
        width: props.width,
        height: props.height,
        propsWidth: props.width,
        propsHeight: props.height
      };
    }

    return null;
  };

  var _proto = ResizableBox.prototype;

  _proto.render = function render() {
    // Basic wrapper around a Resizable instance.
    // If you use Resizable directly, you are responsible for updating the child component
    // with a new width and height.
    var _this$props = this.props,
        handle = _this$props.handle,
        handleSize = _this$props.handleSize;
        _this$props.onResize;
        var onResizeStart = _this$props.onResizeStart,
        onResizeStop = _this$props.onResizeStop,
        draggableOpts = _this$props.draggableOpts,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        lockAspectRatio = _this$props.lockAspectRatio,
        axis = _this$props.axis;
        _this$props.width;
        _this$props.height;
        var resizeHandles = _this$props.resizeHandles,
        style = _this$props.style,
        transformScale = _this$props.transformScale,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return /*#__PURE__*/React.createElement(_Resizable.default, {
      axis: axis,
      draggableOpts: draggableOpts,
      handle: handle,
      handleSize: handleSize,
      height: this.state.height,
      lockAspectRatio: lockAspectRatio,
      maxConstraints: maxConstraints,
      minConstraints: minConstraints,
      onResizeStart: onResizeStart,
      onResize: this.onResize,
      onResizeStop: onResizeStop,
      resizeHandles: resizeHandles,
      transformScale: transformScale,
      width: this.state.width
    }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
      style: _objectSpread(_objectSpread({}, style), {}, {
        width: this.state.width + 'px',
        height: this.state.height + 'px'
      })
    })));
  };

  return ResizableBox;
}(React.Component);

exports.default = ResizableBox;
ResizableBox.propTypes = _objectSpread(_objectSpread({}, propTypes.resizableProps), {}, {
  children: _propTypes.default.element
});
});

unwrapExports(ResizableBox_1);

var reactResizable = function() {
  throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
};

var Resizable = Resizable_1.default;
var ResizableBox = ResizableBox_1.default;
reactResizable.Resizable = Resizable;
reactResizable.ResizableBox = ResizableBox;

var ReactGridLayoutPropTypes = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeHandleType = exports.resizeHandleAxesType = exports.default = void 0;

var _propTypes = _interopRequireDefault(require$$1);

var _react = _interopRequireDefault(React__default["default"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Defines which resize handles should be rendered (default: 'se')
// Allows for any combination of:
// 's' - South handle (bottom-center)
// 'w' - West handle (left-center)
// 'e' - East handle (right-center)
// 'n' - North handle (top-center)
// 'sw' - Southwest handle (bottom-left)
// 'nw' - Northwest handle (top-left)
// 'se' - Southeast handle (bottom-right)
// 'ne' - Northeast handle (top-right)
var resizeHandleAxesType
/*: ReactPropsChainableTypeChecker*/
= _propTypes.default.arrayOf(_propTypes.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])); // Custom component for resize handles


exports.resizeHandleAxesType = resizeHandleAxesType;

var resizeHandleType
/*: ReactPropsChainableTypeChecker*/
= _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]);
/*:: export type Props = {|
  className: string,
  style: Object,
  width: number,
  autoSize: boolean,
  cols: number,
  draggableCancel: string,
  draggableHandle: string,
  verticalCompact: boolean,
  compactType: CompactType,
  layout: Layout,
  margin: [number, number],
  containerPadding: ?[number, number],
  rowHeight: number,
  maxRows: number,
  isBounded: boolean,
  isDraggable: boolean,
  isResizable: boolean,
  isDroppable: boolean,
  preventCollision: boolean,
  useCSSTransforms: boolean,
  transformScale: number,
  droppingItem: $Shape<LayoutItem>,
  resizeHandles: ResizeHandleAxis[],
  resizeHandle?: ResizeHandle,
  allowOverlap: boolean,

  // Callbacks
  onLayoutChange: Layout => void,
  onDrag: EventCallback,
  onDragStart: EventCallback,
  onDragStop: EventCallback,
  onResize: EventCallback,
  onResizeStart: EventCallback,
  onResizeStop: EventCallback,
  onDropDragOver: (e: DragOverEvent) => ?({| w?: number, h?: number |} | false),
  onDrop: (layout: Layout, item: ?LayoutItem, e: Event) => void,
  children: ReactChildrenArray<ReactElement<any>>,
  innerRef?: Ref<"div">
|};*/

/*:: export type DefaultProps = $Diff<
  Props,
  {
    children: ReactChildrenArray<ReactElement<any>>,
    width: number
  }
>;*/


exports.resizeHandleType = resizeHandleType;
var _default = {
  //
  // Basic props
  //
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  // This can be set explicitly. If it is not set, it will automatically
  // be set to the container width. Note that resizes will *not* cause this to adjust.
  // If you need that behavior, use WidthProvider.
  width: _propTypes.default.number,
  // If true, the container height swells and contracts to fit contents
  autoSize: _propTypes.default.bool,
  // # of cols.
  cols: _propTypes.default.number,
  // A selector that will not be draggable.
  draggableCancel: _propTypes.default.string,
  // A selector for the draggable handler
  draggableHandle: _propTypes.default.string,
  // Deprecated
  verticalCompact: function verticalCompact(props
  /*: Props*/
  ) {
    if (props.verticalCompact === false && "development" !== "production") {
      console.warn( // eslint-disable-line no-console
      "`verticalCompact` on <ReactGridLayout> is deprecated and will be removed soon. " + 'Use `compactType`: "horizontal" | "vertical" | null.');
    }
  },
  // Choose vertical or hotizontal compaction
  compactType: (_propTypes.default.oneOf(["vertical", "horizontal"])
  /*: ReactPropsChainableTypeChecker*/
  ),
  // layout is an array of object with the format:
  // {x: Number, y: Number, w: Number, h: Number, i: String}
  layout: function layout(props
  /*: Props*/
  ) {
    var layout = props.layout; // I hope you're setting the data-grid property on the grid items

    if (layout === undefined) return;

    utils$2.validateLayout(layout, "layout");
  },
  //
  // Grid Dimensions
  //
  // Margin between items [x, y] in px
  margin: (_propTypes.default.arrayOf(_propTypes.default.number)
  /*: ReactPropsChainableTypeChecker*/
  ),
  // Padding inside the container [x, y] in px
  containerPadding: (_propTypes.default.arrayOf(_propTypes.default.number)
  /*: ReactPropsChainableTypeChecker*/
  ),
  // Rows have a static height, but you can change this based on breakpoints if you like
  rowHeight: _propTypes.default.number,
  // Default Infinity, but you can specify a max here if you like.
  // Note that this isn't fully fleshed out and won't error if you specify a layout that
  // extends beyond the row capacity. It will, however, not allow users to drag/resize
  // an item past the barrier. They can push items beyond the barrier, though.
  // Intentionally not documented for this reason.
  maxRows: _propTypes.default.number,
  //
  // Flags
  //
  isBounded: _propTypes.default.bool,
  isDraggable: _propTypes.default.bool,
  isResizable: _propTypes.default.bool,
  // If true, grid can be placed one over the other.
  allowOverlap: _propTypes.default.bool,
  // If true, grid items won't change position when being dragged over.
  preventCollision: _propTypes.default.bool,
  // Use CSS transforms instead of top/left
  useCSSTransforms: _propTypes.default.bool,
  // parent layout transform scale
  transformScale: _propTypes.default.number,
  // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
  isDroppable: _propTypes.default.bool,
  // Resize handle options
  resizeHandles: resizeHandleAxesType,
  resizeHandle: resizeHandleType,
  //
  // Callbacks
  //
  // Callback so you can save the layout. Calls after each drag & resize stops.
  onLayoutChange: _propTypes.default.func,
  // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
  // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
  onDragStart: _propTypes.default.func,
  // Calls on each drag movement.
  onDrag: _propTypes.default.func,
  // Calls when drag is complete.
  onDragStop: _propTypes.default.func,
  //Calls when resize starts.
  onResizeStart: _propTypes.default.func,
  // Calls when resize movement happens.
  onResize: _propTypes.default.func,
  // Calls when resize is complete.
  onResizeStop: _propTypes.default.func,
  // Calls when some element is dropped.
  onDrop: _propTypes.default.func,
  //
  // Other validations
  //
  droppingItem: (_propTypes.default.shape({
    i: _propTypes.default.string.isRequired,
    w: _propTypes.default.number.isRequired,
    h: _propTypes.default.number.isRequired
  })
  /*: ReactPropsChainableTypeChecker*/
  ),
  // Children must not have duplicate keys.
  children: function children(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var children = props[propName]; // Check children keys for duplicates. Throw if found.

    var keys = {};

    _react.default.Children.forEach(children, function (child) {
      if ((child === null || child === void 0 ? void 0 : child.key) == null) return;

      if (keys[child.key]) {
        throw new Error('Duplicate child key "' + child.key + '" found! This will cause problems in ReactGridLayout.');
      }

      keys[child.key] = true;
    });
  },
  // Optional ref for getting a reference for the wrapping div.
  innerRef: _propTypes.default.any
};
exports.default = _default;
});

unwrapExports(ReactGridLayoutPropTypes);
ReactGridLayoutPropTypes.resizeHandleType;
ReactGridLayoutPropTypes.resizeHandleAxesType;

var GridItem_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);











var _clsx = _interopRequireDefault(require$$2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * An individual item within a ReactGridLayout.
 */
var GridItem = /*#__PURE__*/function (_React$Component) {
  _inherits(GridItem, _React$Component);

  var _super = _createSuper(GridItem);

  function GridItem() {
    var _this;

    _classCallCheck(this, GridItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      resizing: null,
      dragging: null,
      className: ""
    });

    _defineProperty(_assertThisInitialized(_this), "elementRef", /*#__PURE__*/_react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, _ref) {
      var node = _ref.node;
      var _this$props = _this.props,
          onDragStart = _this$props.onDragStart,
          transformScale = _this$props.transformScale;
      if (!onDragStart) return;
      var newPosition
      /*: PartialPosition*/
      = {
        top: 0,
        left: 0
      }; // TODO: this wont work on nested parents

      var offsetParent = node.offsetParent;
      if (!offsetParent) return;
      var parentRect = offsetParent.getBoundingClientRect();
      var clientRect = node.getBoundingClientRect();
      var cLeft = clientRect.left / transformScale;
      var pLeft = parentRect.left / transformScale;
      var cTop = clientRect.top / transformScale;
      var pTop = parentRect.top / transformScale;
      newPosition.left = cLeft - pLeft + offsetParent.scrollLeft;
      newPosition.top = cTop - pTop + offsetParent.scrollTop;

      _this.setState({
        dragging: newPosition
      }); // Call callback with this data


      var _calcXY = (0, calculateUtils.calcXY)(_this.getPositionParams(), newPosition.top, newPosition.left, _this.props.w, _this.props.h),
          x = _calcXY.x,
          y = _calcXY.y;

      return onDragStart.call(_assertThisInitialized(_this), _this.props.i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, _ref2) {
      var node = _ref2.node,
          deltaX = _ref2.deltaX,
          deltaY = _ref2.deltaY;
      var onDrag = _this.props.onDrag;
      if (!onDrag) return;

      if (!_this.state.dragging) {
        throw new Error("onDrag called before onDragStart.");
      }

      var top = _this.state.dragging.top + deltaY;
      var left = _this.state.dragging.left + deltaX;
      var _this$props2 = _this.props,
          isBounded = _this$props2.isBounded,
          i = _this$props2.i,
          w = _this$props2.w,
          h = _this$props2.h,
          containerWidth = _this$props2.containerWidth;

      var positionParams = _this.getPositionParams(); // Boundary calculations; keeps items within the grid


      if (isBounded) {
        var offsetParent = node.offsetParent;

        if (offsetParent) {
          var _this$props3 = _this.props,
              margin = _this$props3.margin,
              rowHeight = _this$props3.rowHeight;
          var bottomBoundary = offsetParent.clientHeight - (0, calculateUtils.calcGridItemWHPx)(h, rowHeight, margin[1]);
          top = (0, calculateUtils.clamp)(top, 0, bottomBoundary);
          var colWidth = (0, calculateUtils.calcGridColWidth)(positionParams);
          var rightBoundary = containerWidth - (0, calculateUtils.calcGridItemWHPx)(w, colWidth, margin[0]);
          left = (0, calculateUtils.clamp)(left, 0, rightBoundary);
        }
      }

      var newPosition
      /*: PartialPosition*/
      = {
        top: top,
        left: left
      };

      _this.setState({
        dragging: newPosition
      }); // Call callback with this data


      var _calcXY2 = (0, calculateUtils.calcXY)(positionParams, top, left, w, h),
          x = _calcXY2.x,
          y = _calcXY2.y;

      return onDrag.call(_assertThisInitialized(_this), i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, _ref3) {
      var node = _ref3.node;
      var onDragStop = _this.props.onDragStop;
      if (!onDragStop) return;

      if (!_this.state.dragging) {
        throw new Error("onDragEnd called before onDragStart.");
      }

      var _this$props4 = _this.props,
          w = _this$props4.w,
          h = _this$props4.h,
          i = _this$props4.i;
      var _this$state$dragging = _this.state.dragging,
          left = _this$state$dragging.left,
          top = _this$state$dragging.top;
      var newPosition
      /*: PartialPosition*/
      = {
        top: top,
        left: left
      };

      _this.setState({
        dragging: null
      });

      var _calcXY3 = (0, calculateUtils.calcXY)(_this.getPositionParams(), top, left, w, h),
          x = _calcXY3.x,
          y = _calcXY3.y;

      return onDragStop.call(_assertThisInitialized(_this), i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStop", function (e, callbackData) {
      _this.onResizeHandler(e, callbackData, "onResizeStop");
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStart", function (e, callbackData) {
      _this.onResizeHandler(e, callbackData, "onResizeStart");
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (e, callbackData) {
      _this.onResizeHandler(e, callbackData, "onResize");
    });

    return _this;
  }

  _createClass(GridItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps
    /*: Props*/
    , nextState
    /*: State*/
    )
    /*: boolean*/
    {
      // We can't deeply compare children. If the developer memoizes them, we can
      // use this optimization.
      if (this.props.children !== nextProps.children) return true;
      if (this.props.droppingPosition !== nextProps.droppingPosition) return true; // TODO memoize these calculations so they don't take so long?

      var oldPosition = (0, calculateUtils.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state);
      var newPosition = (0, calculateUtils.calcGridItemPosition)(this.getPositionParams(nextProps), nextProps.x, nextProps.y, nextProps.w, nextProps.h, nextState);
      return !(0, utils$2.fastPositionEqual)(oldPosition, newPosition) || this.props.useCSSTransforms !== nextProps.useCSSTransforms;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.moveDroppingItem({});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    /*: Props*/
    ) {
      this.moveDroppingItem(prevProps);
    } // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.

  }, {
    key: "moveDroppingItem",
    value: function moveDroppingItem(prevProps
    /*: Props*/
    ) {
      var droppingPosition = this.props.droppingPosition;
      if (!droppingPosition) return;
      var node = this.elementRef.current; // Can't find DOM node (are we unmounted?)

      if (!node) return;
      var prevDroppingPosition = prevProps.droppingPosition || {
        left: 0,
        top: 0
      };
      var dragging = this.state.dragging;
      var shouldDrag = dragging && droppingPosition.left !== prevDroppingPosition.left || droppingPosition.top !== prevDroppingPosition.top;

      if (!dragging) {
        this.onDragStart(droppingPosition.e, {
          node: node,
          deltaX: droppingPosition.left,
          deltaY: droppingPosition.top
        });
      } else if (shouldDrag) {
        var deltaX = droppingPosition.left - dragging.left;
        var deltaY = droppingPosition.top - dragging.top;
        this.onDrag(droppingPosition.e, {
          node: node,
          deltaX: deltaX,
          deltaY: deltaY
        });
      }
    }
  }, {
    key: "getPositionParams",
    value: function getPositionParams()
    /*: PositionParams*/
    {
      var props
      /*: Props*/
      = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return {
        cols: props.cols,
        containerPadding: props.containerPadding,
        containerWidth: props.containerWidth,
        margin: props.margin,
        maxRows: props.maxRows,
        rowHeight: props.rowHeight
      };
    }
    /**
     * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
     * well when server rendering, and the only way to do that properly is to use percentage width/left because
     * we don't know exactly what the browser viewport is.
     * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
     * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
     *
     * @param  {Object} pos Position object with width, height, left, top.
     * @return {Object}     Style object.
     */

  }, {
    key: "createStyle",
    value: function createStyle(pos
    /*: Position*/
    )
    /*: { [key: string]: ?string }*/
    {
      var _this$props5 = this.props,
          usePercentages = _this$props5.usePercentages,
          containerWidth = _this$props5.containerWidth,
          useCSSTransforms = _this$props5.useCSSTransforms;
      var style; // CSS Transforms support (default)

      if (useCSSTransforms) {
        style = (0, utils$2.setTransform)(pos);
      } else {
        // top,left (slow)
        style = (0, utils$2.setTopLeft)(pos); // This is used for server rendering.

        if (usePercentages) {
          style.left = (0, utils$2.perc)(pos.left / containerWidth);
          style.width = (0, utils$2.perc)(pos.width / containerWidth);
        }
      }

      return style;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */

  }, {
    key: "mixinDraggable",
    value: function mixinDraggable(child
    /*: ReactElement<any>*/
    , isDraggable
    /*: boolean*/
    )
    /*: ReactElement<any>*/
    {
      return /*#__PURE__*/_react.default.createElement(cjs.DraggableCore, {
        disabled: !isDraggable,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, child);
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */

  }, {
    key: "mixinResizable",
    value: function mixinResizable(child
    /*: ReactElement<any>*/
    , position
    /*: Position*/
    , isResizable
    /*: boolean*/
    )
    /*: ReactElement<any>*/
    {
      var _this$props6 = this.props,
          cols = _this$props6.cols,
          x = _this$props6.x,
          minW = _this$props6.minW,
          minH = _this$props6.minH,
          maxW = _this$props6.maxW,
          maxH = _this$props6.maxH,
          transformScale = _this$props6.transformScale,
          resizeHandles = _this$props6.resizeHandles,
          resizeHandle = _this$props6.resizeHandle;
      var positionParams = this.getPositionParams(); // This is the max possible width - doesn't go to infinity because of the width of the window

      var maxWidth = (0, calculateUtils.calcGridItemPosition)(positionParams, 0, 0, cols - x, 0).width; // Calculate min/max constraints using our min & maxes

      var mins = (0, calculateUtils.calcGridItemPosition)(positionParams, 0, 0, minW, minH);
      var maxes = (0, calculateUtils.calcGridItemPosition)(positionParams, 0, 0, maxW, maxH);
      var minConstraints = [mins.width, mins.height];
      var maxConstraints = [Math.min(maxes.width, maxWidth), Math.min(maxes.height, Infinity)];
      return /*#__PURE__*/_react.default.createElement(reactResizable.Resizable // These are opts for the resize handle itself
      , {
        draggableOpts: {
          disabled: !isResizable
        },
        className: isResizable ? undefined : "react-resizable-hide",
        width: position.width,
        height: position.height,
        minConstraints: minConstraints,
        maxConstraints: maxConstraints,
        onResizeStop: this.onResizeStop,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        transformScale: transformScale,
        resizeHandles: resizeHandles,
        handle: resizeHandle
      }, child);
    }
    /**
     * onDragStart event handler
     * @param  {Event}  e             event data
     * @param  {Object} callbackData  an object with node, delta and position information
     */

  }, {
    key: "onResizeHandler",
    value:
    /**
     * Wrapper around drag events to provide more useful data.
     * All drag events call the function with the given handler name,
     * with the signature (index, x, y).
     *
     * @param  {String} handlerName Handler name to wrap.
     * @return {Function}           Handler function.
     */
    function onResizeHandler(e
    /*: Event*/
    , _ref4, handlerName
    /*: string*/
    )
    /*: void*/
    {
      var node = _ref4.node,
          size = _ref4.size;
      var handler = this.props[handlerName];
      if (!handler) return;
      var _this$props7 = this.props,
          cols = _this$props7.cols,
          x = _this$props7.x,
          y = _this$props7.y,
          i = _this$props7.i,
          maxH = _this$props7.maxH,
          minH = _this$props7.minH;
      var _this$props8 = this.props,
          minW = _this$props8.minW,
          maxW = _this$props8.maxW; // Get new XY

      var _calcWH = (0, calculateUtils.calcWH)(this.getPositionParams(), size.width, size.height, x, y),
          w = _calcWH.w,
          h = _calcWH.h; // minW should be at least 1 (TODO propTypes validation?)


      minW = Math.max(minW, 1); // maxW should be at most (cols - x)

      maxW = Math.min(maxW, cols - x); // Min/max capping

      w = (0, calculateUtils.clamp)(w, minW, maxW);
      h = (0, calculateUtils.clamp)(h, minH, maxH);
      this.setState({
        resizing: handlerName === "onResizeStop" ? null : size
      });
      handler.call(this, i, w, h, {
        e: e,
        node: node,
        size: size
      });
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactNode*/
    {
      var _this$props9 = this.props,
          x = _this$props9.x,
          y = _this$props9.y,
          w = _this$props9.w,
          h = _this$props9.h,
          isDraggable = _this$props9.isDraggable,
          isResizable = _this$props9.isResizable,
          droppingPosition = _this$props9.droppingPosition,
          useCSSTransforms = _this$props9.useCSSTransforms;
      var pos = (0, calculateUtils.calcGridItemPosition)(this.getPositionParams(), x, y, w, h, this.state);

      var child = _react.default.Children.only(this.props.children); // Create the child element. We clone the existing element but modify its className and style.


      var newChild = /*#__PURE__*/_react.default.cloneElement(child, {
        ref: this.elementRef,
        className: (0, _clsx.default)("react-grid-item", child.props.className, this.props.className, {
          static: this.props.static,
          resizing: Boolean(this.state.resizing),
          "react-draggable": isDraggable,
          "react-draggable-dragging": Boolean(this.state.dragging),
          dropping: Boolean(droppingPosition),
          cssTransforms: useCSSTransforms
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: _objectSpread(_objectSpread(_objectSpread({}, this.props.style), child.props.style), this.createStyle(pos))
      }); // Resizable support. This is usually on but the user can toggle it off.


      newChild = this.mixinResizable(newChild, pos, isResizable); // Draggable support. This is always on, except for with placeholders.

      newChild = this.mixinDraggable(newChild, isDraggable);
      return newChild;
    }
  }]);

  return GridItem;
}(_react.default.Component);

exports.default = GridItem;

_defineProperty(GridItem, "propTypes", {
  // Children must be only a single element
  children: _propTypes.default.element,
  // General grid attributes
  cols: _propTypes.default.number.isRequired,
  containerWidth: _propTypes.default.number.isRequired,
  rowHeight: _propTypes.default.number.isRequired,
  margin: _propTypes.default.array.isRequired,
  maxRows: _propTypes.default.number.isRequired,
  containerPadding: _propTypes.default.array.isRequired,
  // These are all in grid units
  x: _propTypes.default.number.isRequired,
  y: _propTypes.default.number.isRequired,
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  // All optional
  minW: function minW(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("minWidth not Number");
    if (value > props.w || value > props.maxW) return new Error("minWidth larger than item width/maxWidth");
  },
  maxW: function maxW(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("maxWidth not Number");
    if (value < props.w || value < props.minW) return new Error("maxWidth smaller than item width/minWidth");
  },
  minH: function minH(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("minHeight not Number");
    if (value > props.h || value > props.maxH) return new Error("minHeight larger than item height/maxHeight");
  },
  maxH: function maxH(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("maxHeight not Number");
    if (value < props.h || value < props.minH) return new Error("maxHeight smaller than item height/minHeight");
  },
  // ID is nice to have for callbacks
  i: _propTypes.default.string.isRequired,
  // Resize handle options
  resizeHandles: ReactGridLayoutPropTypes.resizeHandleAxesType,
  resizeHandle: ReactGridLayoutPropTypes.resizeHandleType,
  // Functions
  onDragStop: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onDrag: _propTypes.default.func,
  onResizeStop: _propTypes.default.func,
  onResizeStart: _propTypes.default.func,
  onResize: _propTypes.default.func,
  // Flags
  isDraggable: _propTypes.default.bool.isRequired,
  isResizable: _propTypes.default.bool.isRequired,
  isBounded: _propTypes.default.bool.isRequired,
  static: _propTypes.default.bool,
  // Use CSS transforms instead of top/left
  useCSSTransforms: _propTypes.default.bool.isRequired,
  transformScale: _propTypes.default.number,
  // Others
  className: _propTypes.default.string,
  // Selector for draggable handle
  handle: _propTypes.default.string,
  // Selector for draggable cancel (see react-draggable)
  cancel: _propTypes.default.string,
  // Current position of a dropping element
  droppingPosition: _propTypes.default.shape({
    e: _propTypes.default.object.isRequired,
    left: _propTypes.default.number.isRequired,
    top: _propTypes.default.number.isRequired
  })
});

_defineProperty(GridItem, "defaultProps", {
  className: "",
  cancel: "",
  handle: "",
  minH: 1,
  minW: 1,
  maxH: Infinity,
  maxW: Infinity,
  transformScale: 1
});
});

unwrapExports(GridItem_1);

var ReactGridLayout_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(React__default["default"]);

var _lodash = _interopRequireDefault(lodash_isequal);

var _clsx = _interopRequireDefault(require$$2);





var _GridItem = _interopRequireDefault(GridItem_1);

var _ReactGridLayoutPropTypes = _interopRequireDefault(ReactGridLayoutPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// End Types
var layoutClassName = "react-grid-layout";
var isFirefox = false; // Try...catch will protect from navigator not existing (e.g. node) or a bad implementation of navigator

try {
  isFirefox = /firefox/i.test(navigator.userAgent);
} catch (e) {
  /* Ignore */
}
/**
 * A reactive, fluid grid layout with draggable, resizable components.
 */


var ReactGridLayout = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactGridLayout, _React$Component);

  var _super = _createSuper(ReactGridLayout);

  function ReactGridLayout() {
    var _this;

    _classCallCheck(this, ReactGridLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeDrag: null,
      layout: (0, utils$2.synchronizeLayoutWithChildren)(_this.props.layout, _this.props.children, _this.props.cols, // Legacy support for verticalCompact: false
      (0, utils$2.compactType)(_this.props), _this.props.allowOverlap),
      mounted: false,
      oldDragItem: null,
      oldLayout: null,
      oldResizeItem: null,
      droppingDOMNode: null,
      children: []
    });

    _defineProperty(_assertThisInitialized(_this), "dragEnterCounter", 0);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (i
    /*: string*/
    , x
    /*: number*/
    , y
    /*: number*/
    , _ref) {
      var e = _ref.e,
          node = _ref.node;
      var layout = _this.state.layout;
      var l = (0, utils$2.getLayoutItem)(layout, i);
      if (!l) return;

      _this.setState({
        oldDragItem: (0, utils$2.cloneLayoutItem)(l),
        oldLayout: layout
      });

      return _this.props.onDragStart(layout, l, l, null, e, node);
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (i, x, y, _ref2) {
      var e = _ref2.e,
          node = _ref2.node;
      var oldDragItem = _this.state.oldDragItem;
      var layout = _this.state.layout;
      var _this$props = _this.props,
          cols = _this$props.cols,
          allowOverlap = _this$props.allowOverlap,
          preventCollision = _this$props.preventCollision;
      var l = (0, utils$2.getLayoutItem)(layout, i);
      if (!l) return; // Create placeholder (display only)

      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        placeholder: true,
        i: i
      }; // Move the element to the dragged location.

      var isUserAction = true;
      layout = (0, utils$2.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, utils$2.compactType)(_this.props), cols, allowOverlap);

      _this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);

      _this.setState({
        layout: allowOverlap ? layout : (0, utils$2.compact)(layout, (0, utils$2.compactType)(_this.props), cols),
        activeDrag: placeholder
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (i, x, y, _ref3) {
      var e = _ref3.e,
          node = _ref3.node;
      if (!_this.state.activeDrag) return;
      var oldDragItem = _this.state.oldDragItem;
      var layout = _this.state.layout;
      var _this$props2 = _this.props,
          cols = _this$props2.cols,
          preventCollision = _this$props2.preventCollision,
          allowOverlap = _this$props2.allowOverlap;
      var l = (0, utils$2.getLayoutItem)(layout, i);
      if (!l) return; // Move the element here

      var isUserAction = true;
      layout = (0, utils$2.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, utils$2.compactType)(_this.props), cols, allowOverlap);

      _this.props.onDragStop(layout, oldDragItem, l, null, e, node); // Set state


      var newLayout = allowOverlap ? layout : (0, utils$2.compact)(layout, (0, utils$2.compactType)(_this.props), cols);
      var oldLayout = _this.state.oldLayout;

      _this.setState({
        activeDrag: null,
        layout: newLayout,
        oldDragItem: null,
        oldLayout: null
      });

      _this.onLayoutMaybeChanged(newLayout, oldLayout);
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStart", function (i, w, h, _ref4) {
      var e = _ref4.e,
          node = _ref4.node;
      var layout = _this.state.layout;
      var l = (0, utils$2.getLayoutItem)(layout, i);
      if (!l) return;

      _this.setState({
        oldResizeItem: (0, utils$2.cloneLayoutItem)(l),
        oldLayout: _this.state.layout
      });

      _this.props.onResizeStart(layout, l, l, null, e, node);
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (i, w, h, _ref5) {
      var e = _ref5.e,
          node = _ref5.node;
      var _this$state = _this.state,
          layout = _this$state.layout,
          oldResizeItem = _this$state.oldResizeItem;
      var _this$props3 = _this.props,
          cols = _this$props3.cols,
          preventCollision = _this$props3.preventCollision,
          allowOverlap = _this$props3.allowOverlap;

      var _withLayoutItem = (0, utils$2.withLayoutItem)(layout, i, function (l) {
        // Something like quad tree should be used
        // to find collisions faster
        var hasCollisions;

        if (preventCollision && !allowOverlap) {
          var collisions = (0, utils$2.getAllCollisions)(layout, _objectSpread(_objectSpread({}, l), {}, {
            w: w,
            h: h
          })).filter(function (layoutItem) {
            return layoutItem.i !== l.i;
          });
          hasCollisions = collisions.length > 0; // If we're colliding, we need adjust the placeholder.

          // If we're colliding, we need adjust the placeholder.
          if (hasCollisions) {
            // adjust w && h to maximum allowed space
            var leastX = Infinity,
                leastY = Infinity;
            collisions.forEach(function (layoutItem) {
              if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
              if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
            });
            if (Number.isFinite(leastX)) l.w = leastX - l.x;
            if (Number.isFinite(leastY)) l.h = leastY - l.y;
          }
        }

        if (!hasCollisions) {
          // Set new width and height.
          l.w = w;
          l.h = h;
        }

        return l;
      }),
          _withLayoutItem2 = _slicedToArray(_withLayoutItem, 2),
          newLayout = _withLayoutItem2[0],
          l = _withLayoutItem2[1]; // Shouldn't ever happen, but typechecking makes it necessary


      if (!l) return; // Create placeholder element (display only)

      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        static: true,
        i: i
      };

      _this.props.onResize(newLayout, oldResizeItem, l, placeholder, e, node); // Re-compact the newLayout and set the drag placeholder.


      _this.setState({
        layout: allowOverlap ? newLayout : (0, utils$2.compact)(newLayout, (0, utils$2.compactType)(_this.props), cols),
        activeDrag: placeholder
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStop", function (i, w, h, _ref6) {
      var e = _ref6.e,
          node = _ref6.node;
      var _this$state2 = _this.state,
          layout = _this$state2.layout,
          oldResizeItem = _this$state2.oldResizeItem;
      var _this$props4 = _this.props,
          cols = _this$props4.cols,
          allowOverlap = _this$props4.allowOverlap;
      var l = (0, utils$2.getLayoutItem)(layout, i);

      _this.props.onResizeStop(layout, oldResizeItem, l, null, e, node); // Set state


      var newLayout = allowOverlap ? layout : (0, utils$2.compact)(layout, (0, utils$2.compactType)(_this.props), cols);
      var oldLayout = _this.state.oldLayout;

      _this.setState({
        activeDrag: null,
        layout: newLayout,
        oldResizeItem: null,
        oldLayout: null
      });

      _this.onLayoutMaybeChanged(newLayout, oldLayout);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragOver", function (e) {
      var _e$nativeEvent$target;

      e.preventDefault(); // Prevent any browser native action

      e.stopPropagation(); // we should ignore events from layout's children in Firefox
      // to avoid unpredictable jumping of a dropping placeholder
      // FIXME remove this hack

      if (isFirefox && // $FlowIgnore can't figure this out
      !((_e$nativeEvent$target = e.nativeEvent.target) !== null && _e$nativeEvent$target !== void 0 && _e$nativeEvent$target.classList.contains(layoutClassName))) {
        return false;
      }

      var _this$props5 = _this.props,
          droppingItem = _this$props5.droppingItem,
          onDropDragOver = _this$props5.onDropDragOver,
          margin = _this$props5.margin,
          cols = _this$props5.cols,
          rowHeight = _this$props5.rowHeight,
          maxRows = _this$props5.maxRows,
          width = _this$props5.width,
          containerPadding = _this$props5.containerPadding,
          transformScale = _this$props5.transformScale; // Allow user to customize the dropping item or short-circuit the drop based on the results
      // of the `onDragOver(e: Event)` callback.

      var onDragOverResult = onDropDragOver === null || onDropDragOver === void 0 ? void 0 : onDropDragOver(e);

      if (onDragOverResult === false) {
        if (_this.state.droppingDOMNode) {
          _this.removeDroppingPlaceholder();
        }

        return false;
      }

      var finalDroppingItem = _objectSpread(_objectSpread({}, droppingItem), onDragOverResult);

      var layout = _this.state.layout; // This is relative to the DOM element that this event fired for.

      var _e$nativeEvent = e.nativeEvent,
          layerX = _e$nativeEvent.layerX,
          layerY = _e$nativeEvent.layerY;
      var droppingPosition = {
        left: layerX / transformScale,
        top: layerY / transformScale,
        e: e
      };

      if (!_this.state.droppingDOMNode) {
        var positionParams
        /*: PositionParams*/
        = {
          cols: cols,
          margin: margin,
          maxRows: maxRows,
          rowHeight: rowHeight,
          containerWidth: width,
          containerPadding: containerPadding || margin
        };
        var calculatedPosition = (0, calculateUtils.calcXY)(positionParams, layerY, layerX, finalDroppingItem.w, finalDroppingItem.h);

        _this.setState({
          droppingDOMNode: /*#__PURE__*/React.createElement("div", {
            key: finalDroppingItem.i
          }),
          droppingPosition: droppingPosition,
          layout: [].concat(_toConsumableArray(layout), [_objectSpread(_objectSpread({}, finalDroppingItem), {}, {
            x: calculatedPosition.x,
            y: calculatedPosition.y,
            static: false,
            isDraggable: true
          })])
        });
      } else if (_this.state.droppingPosition) {
        var _this$state$droppingP = _this.state.droppingPosition,
            left = _this$state$droppingP.left,
            top = _this$state$droppingP.top;
        var shouldUpdatePosition = left != layerX || top != layerY;

        if (shouldUpdatePosition) {
          _this.setState({
            droppingPosition: droppingPosition
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeDroppingPlaceholder", function () {
      var _this$props6 = _this.props,
          droppingItem = _this$props6.droppingItem,
          cols = _this$props6.cols;
      var layout = _this.state.layout;
      var newLayout = (0, utils$2.compact)(layout.filter(function (l) {
        return l.i !== droppingItem.i;
      }), (0, utils$2.compactType)(_this.props), cols);

      _this.setState({
        layout: newLayout,
        droppingDOMNode: null,
        activeDrag: null,
        droppingPosition: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragLeave", function (e) {
      e.preventDefault(); // Prevent any browser native action

      e.stopPropagation();
      _this.dragEnterCounter--; // onDragLeave can be triggered on each layout's child.
      // But we know that count of dragEnter and dragLeave events
      // will be balanced after leaving the layout's container
      // so we can increase and decrease count of dragEnter and
      // when it'll be equal to 0 we'll remove the placeholder

      if (_this.dragEnterCounter === 0) {
        _this.removeDroppingPlaceholder();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnter", function (e) {
      e.preventDefault(); // Prevent any browser native action

      e.stopPropagation();
      _this.dragEnterCounter++;
    });

    _defineProperty(_assertThisInitialized(_this), "onDrop", function (e
    /*: Event*/
    ) {
      e.preventDefault(); // Prevent any browser native action

      e.stopPropagation();
      var droppingItem = _this.props.droppingItem;
      var layout = _this.state.layout;
      var item = layout.find(function (l) {
        return l.i === droppingItem.i;
      }); // reset dragEnter counter on drop

      _this.dragEnterCounter = 0;

      _this.removeDroppingPlaceholder();

      _this.props.onDrop(layout, item, e);
    });

    return _this;
  }

  _createClass(ReactGridLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      }); // Possibly call back with layout on mount. This should be done after correcting the layout width
      // to ensure we don't rerender with the wrong width.

      this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps
    /*: Props*/
    , nextState
    /*: State*/
    )
    /*: boolean*/
    {
      return (// NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== nextProps.children || !(0, utils$2.fastRGLPropsEqual)(this.props, nextProps, _lodash.default) || this.state.activeDrag !== nextState.activeDrag || this.state.mounted !== nextState.mounted || this.state.droppingPosition !== nextState.droppingPosition
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    /*: Props*/
    , prevState
    /*: State*/
    ) {
      if (!this.state.activeDrag) {
        var newLayout = this.state.layout;
        var oldLayout = prevState.layout;
        this.onLayoutMaybeChanged(newLayout, oldLayout);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */

  }, {
    key: "containerHeight",
    value: function containerHeight()
    /*: ?string*/
    {
      if (!this.props.autoSize) return;
      var nbRow = (0, utils$2.bottom)(this.state.layout);
      var containerPaddingY = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return nbRow * this.props.rowHeight + (nbRow - 1) * this.props.margin[1] + containerPaddingY * 2 + "px";
    }
    /**
     * When dragging starts
     * @param {String} i Id of the child
     * @param {Number} x X position of the move
     * @param {Number} y Y position of the move
     * @param {Event} e The mousedown event
     * @param {Element} node The current dragging DOM element
     */

  }, {
    key: "onLayoutMaybeChanged",
    value: function onLayoutMaybeChanged(newLayout
    /*: Layout*/
    , oldLayout
    /*: ?Layout*/
    ) {
      if (!oldLayout) oldLayout = this.state.layout;

      if (!(0, _lodash.default)(oldLayout, newLayout)) {
        this.props.onLayoutChange(newLayout);
      }
    }
  }, {
    key: "placeholder",
    value:
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    function placeholder()
    /*: ?ReactElement<any>*/
    {
      var activeDrag = this.state.activeDrag;
      if (!activeDrag) return null;
      var _this$props7 = this.props,
          width = _this$props7.width,
          cols = _this$props7.cols,
          margin = _this$props7.margin,
          containerPadding = _this$props7.containerPadding,
          rowHeight = _this$props7.rowHeight,
          maxRows = _this$props7.maxRows,
          useCSSTransforms = _this$props7.useCSSTransforms,
          transformScale = _this$props7.transformScale; // {...this.state.activeDrag} is pretty slow, actually

      return /*#__PURE__*/React.createElement(_GridItem.default, {
        w: activeDrag.w,
        h: activeDrag.h,
        x: activeDrag.x,
        y: activeDrag.y,
        i: activeDrag.i,
        className: "react-grid-placeholder",
        containerWidth: width,
        cols: cols,
        margin: margin,
        containerPadding: containerPadding || margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        isDraggable: false,
        isResizable: false,
        isBounded: false,
        useCSSTransforms: useCSSTransforms,
        transformScale: transformScale
      }, /*#__PURE__*/React.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */

  }, {
    key: "processGridItem",
    value: function processGridItem(child
    /*: ReactElement<any>*/
    , isDroppingItem
    /*: boolean*/
    )
    /*: ?ReactElement<any>*/
    {
      if (!child || !child.key) return;
      var l = (0, utils$2.getLayoutItem)(this.state.layout, String(child.key));
      if (!l) return null;
      var _this$props8 = this.props,
          width = _this$props8.width,
          cols = _this$props8.cols,
          margin = _this$props8.margin,
          containerPadding = _this$props8.containerPadding,
          rowHeight = _this$props8.rowHeight,
          maxRows = _this$props8.maxRows,
          isDraggable = _this$props8.isDraggable,
          isResizable = _this$props8.isResizable,
          isBounded = _this$props8.isBounded,
          useCSSTransforms = _this$props8.useCSSTransforms,
          transformScale = _this$props8.transformScale,
          draggableCancel = _this$props8.draggableCancel,
          draggableHandle = _this$props8.draggableHandle,
          resizeHandles = _this$props8.resizeHandles,
          resizeHandle = _this$props8.resizeHandle;
      var _this$state3 = this.state,
          mounted = _this$state3.mounted,
          droppingPosition = _this$state3.droppingPosition; // Determine user manipulations possible.
      // If an item is static, it can't be manipulated by default.
      // Any properties defined directly on the grid item will take precedence.

      var draggable = typeof l.isDraggable === "boolean" ? l.isDraggable : !l.static && isDraggable;
      var resizable = typeof l.isResizable === "boolean" ? l.isResizable : !l.static && isResizable;
      var resizeHandlesOptions = l.resizeHandles || resizeHandles; // isBounded set on child if set on parent, and child is not explicitly false

      var bounded = draggable && isBounded && l.isBounded !== false;
      return /*#__PURE__*/React.createElement(_GridItem.default, {
        containerWidth: width,
        cols: cols,
        margin: margin,
        containerPadding: containerPadding || margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        cancel: draggableCancel,
        handle: draggableHandle,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: draggable,
        isResizable: resizable,
        isBounded: bounded,
        useCSSTransforms: useCSSTransforms && mounted,
        usePercentages: !mounted,
        transformScale: transformScale,
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        i: l.i,
        minH: l.minH,
        minW: l.minW,
        maxH: l.maxH,
        maxW: l.maxW,
        static: l.static,
        droppingPosition: isDroppingItem ? droppingPosition : undefined,
        resizeHandles: resizeHandlesOptions,
        resizeHandle: resizeHandle
      }, child);
    } // Called while dragging an element. Part of browser native drag/drop API.
    // Native event target might be the layout itself, or an element within the layout.

  }, {
    key: "render",
    value: function render()
    /*: React.Element<"div">*/
    {
      var _this2 = this;

      var _this$props9 = this.props,
          className = _this$props9.className,
          style = _this$props9.style,
          isDroppable = _this$props9.isDroppable,
          innerRef = _this$props9.innerRef;
      var mergedClassName = (0, _clsx.default)(layoutClassName, className);

      var mergedStyle = _objectSpread({
        height: this.containerHeight()
      }, style);

      return /*#__PURE__*/React.createElement("div", {
        ref: innerRef,
        className: mergedClassName,
        style: mergedStyle,
        onDrop: isDroppable ? this.onDrop : utils$2.noop,
        onDragLeave: isDroppable ? this.onDragLeave : utils$2.noop,
        onDragEnter: isDroppable ? this.onDragEnter : utils$2.noop,
        onDragOver: isDroppable ? this.onDragOver : utils$2.noop
      }, React.Children.map(this.props.children, function (child) {
        return _this2.processGridItem(child);
      }), isDroppable && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, true), this.placeholder());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps
    /*: Props*/
    , prevState
    /*: State*/
    )
    /*: $Shape<State> | null*/
    {
      var newLayoutBase;

      if (prevState.activeDrag) {
        return null;
      } // Legacy support for compactType
      // Allow parent to set layout directly.


      if (!(0, _lodash.default)(nextProps.layout, prevState.propsLayout) || nextProps.compactType !== prevState.compactType) {
        newLayoutBase = nextProps.layout;
      } else if (!(0, utils$2.childrenEqual)(nextProps.children, prevState.children)) {
        // If children change, also regenerate the layout. Use our state
        // as the base in case because it may be more up to date than
        // what is in props.
        newLayoutBase = prevState.layout;
      } // We need to regenerate the layout.


      if (newLayoutBase) {
        var newLayout = (0, utils$2.synchronizeLayoutWithChildren)(newLayoutBase, nextProps.children, nextProps.cols, (0, utils$2.compactType)(nextProps), nextProps.allowOverlap);
        return {
          layout: newLayout,
          // We need to save these props to state for using
          // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
          compactType: nextProps.compactType,
          children: nextProps.children,
          propsLayout: nextProps.layout
        };
      }

      return null;
    }
  }]);

  return ReactGridLayout;
}(React.Component);

exports.default = ReactGridLayout;

_defineProperty(ReactGridLayout, "displayName", "ReactGridLayout");

_defineProperty(ReactGridLayout, "propTypes", _ReactGridLayoutPropTypes.default);

_defineProperty(ReactGridLayout, "defaultProps", {
  autoSize: true,
  cols: 12,
  className: "",
  style: {},
  draggableHandle: "",
  draggableCancel: "",
  containerPadding: null,
  rowHeight: 150,
  maxRows: Infinity,
  // infinite vertical growth
  layout: [],
  margin: [10, 10],
  isBounded: false,
  isDraggable: true,
  isResizable: true,
  allowOverlap: false,
  isDroppable: false,
  useCSSTransforms: true,
  transformScale: 1,
  verticalCompact: true,
  compactType: "vertical",
  preventCollision: false,
  droppingItem: {
    i: "__dropping-elem__",
    h: 1,
    w: 1
  },
  resizeHandles: ["se"],
  onLayoutChange: utils$2.noop,
  onDragStart: utils$2.noop,
  onDrag: utils$2.noop,
  onDragStop: utils$2.noop,
  onResizeStart: utils$2.noop,
  onResize: utils$2.noop,
  onResizeStop: utils$2.noop,
  onDrop: utils$2.noop,
  onDropDragOver: utils$2.noop
});
});

unwrapExports(ReactGridLayout_1);

var responsiveUtils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findOrGenerateResponsiveLayout = findOrGenerateResponsiveLayout;
exports.getBreakpointFromWidth = getBreakpointFromWidth;
exports.getColsFromBreakpoint = getColsFromBreakpoint;
exports.sortBreakpoints = sortBreakpoints;



/**
 * Given a width, find the highest breakpoint that matches is valid for it (width > breakpoint).
 *
 * @param  {Object} breakpoints Breakpoints object (e.g. {lg: 1200, md: 960, ...})
 * @param  {Number} width Screen width.
 * @return {String}       Highest breakpoint that is less than width.
 */
function getBreakpointFromWidth(breakpoints
/*: Breakpoints<Breakpoint>*/
, width
/*: number*/
)
/*: Breakpoint*/
{
  var sorted = sortBreakpoints(breakpoints);
  var matching = sorted[0];

  for (var i = 1, len = sorted.length; i < len; i++) {
    var breakpointName = sorted[i];
    if (width > breakpoints[breakpointName]) matching = breakpointName;
  }

  return matching;
}
/**
 * Given a breakpoint, get the # of cols set for it.
 * @param  {String} breakpoint Breakpoint name.
 * @param  {Object} cols       Map of breakpoints to cols.
 * @return {Number}            Number of cols.
 */


function getColsFromBreakpoint(breakpoint
/*: Breakpoint*/
, cols
/*: Breakpoints<Breakpoint>*/
)
/*: number*/
{
  if (!cols[breakpoint]) {
    throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
  }

  return cols[breakpoint];
}
/**
 * Given existing layouts and a new breakpoint, find or generate a new layout.
 *
 * This finds the layout above the new one and generates from it, if it exists.
 *
 * @param  {Object} layouts     Existing layouts.
 * @param  {Array} breakpoints All breakpoints.
 * @param  {String} breakpoint New breakpoint.
 * @param  {String} breakpoint Last breakpoint (for fallback).
 * @param  {Number} cols       Column count at new breakpoint.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}             New layout.
 */


function findOrGenerateResponsiveLayout(layouts
/*: ResponsiveLayout<Breakpoint>*/
, breakpoints
/*: Breakpoints<Breakpoint>*/
, breakpoint
/*: Breakpoint*/
, lastBreakpoint
/*: Breakpoint*/
, cols
/*: number*/
, compactType
/*: CompactType*/
)
/*: Layout*/
{
  // If it already exists, just return it.
  if (layouts[breakpoint]) return (0, utils$2.cloneLayout)(layouts[breakpoint]); // Find or generate the next layout

  var layout = layouts[lastBreakpoint];
  var breakpointsSorted = sortBreakpoints(breakpoints);
  var breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));

  for (var i = 0, len = breakpointsAbove.length; i < len; i++) {
    var b = breakpointsAbove[i];

    if (layouts[b]) {
      layout = layouts[b];
      break;
    }
  }

  layout = (0, utils$2.cloneLayout)(layout || []); // clone layout so we don't modify existing items

  return (0, utils$2.compact)((0, utils$2.correctBounds)(layout, {
    cols: cols
  }), compactType, cols);
}
/**
 * Given breakpoints, return an array of breakpoints sorted by width. This is usually
 * e.g. ['xxs', 'xs', 'sm', ...]
 *
 * @param  {Object} breakpoints Key/value pair of breakpoint names to widths.
 * @return {Array}              Sorted breakpoints.
 */


function sortBreakpoints(breakpoints
/*: Breakpoints<Breakpoint>*/
)
/*: Array<Breakpoint>*/
{
  var keys
  /*: Array<string>*/
  = Object.keys(breakpoints);
  return keys.sort(function (a, b) {
    return breakpoints[a] - breakpoints[b];
  });
}
});

unwrapExports(responsiveUtils);
responsiveUtils.findOrGenerateResponsiveLayout;
responsiveUtils.getBreakpointFromWidth;
responsiveUtils.getColsFromBreakpoint;
responsiveUtils.sortBreakpoints;

var ResponsiveReactGridLayout_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

var _lodash = _interopRequireDefault(lodash_isequal);





var _ReactGridLayout = _interopRequireDefault(ReactGridLayout_1);

var _excluded = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// $FlowFixMe[method-unbinding]
var type = function type(obj) {
  return Object.prototype.toString.call(obj);
};
/**
 * Get a value of margin or containerPadding.
 *
 * @param  {Array | Object} param Margin | containerPadding, e.g. [10, 10] | {lg: [10, 10], ...}.
 * @param  {String} breakpoint   Breakpoint: lg, md, sm, xs and etc.
 * @return {Array}
 */


function getIndentationValue
/*:: <T: ?[number, number]>*/
(param
/*: { [key: string]: T } | T*/
, breakpoint
/*: string*/
)
/*: T*/
{
  // $FlowIgnore TODO fix this typedef
  if (param == null) return null; // $FlowIgnore TODO fix this typedef

  return Array.isArray(param) ? param : param[breakpoint];
}
/*:: type State = {
  layout: Layout,
  breakpoint: string,
  cols: number,
  layouts?: ResponsiveLayout<string>
};*/

/*:: type Props<Breakpoint: string = string> = {|
  ...React.ElementConfig<typeof ReactGridLayout>,

  // Responsive config
  breakpoint?: ?Breakpoint,
  breakpoints: Breakpoints<Breakpoint>,
  cols: { [key: Breakpoint]: number },
  layouts: ResponsiveLayout<Breakpoint>,
  width: number,
  margin: { [key: Breakpoint]: [number, number] } | [number, number],
  /* prettier-ignore *-/
  containerPadding: { [key: Breakpoint]: ?[number, number] } | ?[number, number],

  // Callbacks
  onBreakpointChange: (Breakpoint, cols: number) => void,
  onLayoutChange: OnLayoutChangeCallback,
  onWidthChange: (
    containerWidth: number,
    margin: [number, number],
    cols: number,
    containerPadding: ?[number, number]
  ) => void
|};*/

/*:: type DefaultProps = Pick<
  Props<>,
  {|
    allowOverlap: 0,
    breakpoints: 0,
    cols: 0,
    containerPadding: 0,
    layouts: 0,
    margin: 0,
    onBreakpointChange: 0,
    onLayoutChange: 0,
    onWidthChange: 0
  |}
>;*/


var ResponsiveReactGridLayout = /*#__PURE__*/function (_React$Component) {
  _inherits(ResponsiveReactGridLayout, _React$Component);

  var _super = _createSuper(ResponsiveReactGridLayout);

  function ResponsiveReactGridLayout() {
    var _this;

    _classCallCheck(this, ResponsiveReactGridLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", _this.generateInitialState());

    _defineProperty(_assertThisInitialized(_this), "onLayoutChange", function (layout
    /*: Layout*/
    ) {
      _this.props.onLayoutChange(layout, _objectSpread(_objectSpread({}, _this.props.layouts), {}, _defineProperty({}, _this.state.breakpoint, layout)));
    });

    return _this;
  }

  _createClass(ResponsiveReactGridLayout, [{
    key: "generateInitialState",
    value: function generateInitialState()
    /*: State*/
    {
      var _this$props = this.props,
          width = _this$props.width,
          breakpoints = _this$props.breakpoints,
          layouts = _this$props.layouts,
          cols = _this$props.cols;
      var breakpoint = (0, responsiveUtils.getBreakpointFromWidth)(breakpoints, width);
      var colNo = (0, responsiveUtils.getColsFromBreakpoint)(breakpoint, cols); // verticalCompact compatibility, now deprecated

      var compactType = this.props.verticalCompact === false ? null : this.props.compactType; // Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
      // for this layout.

      var initialLayout = (0, responsiveUtils.findOrGenerateResponsiveLayout)(layouts, breakpoints, breakpoint, breakpoint, colNo, compactType);
      return {
        layout: initialLayout,
        breakpoint: breakpoint,
        cols: colNo
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    /*: Props<*>*/
    ) {
      // Allow parent to set width or breakpoint directly.
      if (this.props.width != prevProps.width || this.props.breakpoint !== prevProps.breakpoint || !(0, _lodash.default)(this.props.breakpoints, prevProps.breakpoints) || !(0, _lodash.default)(this.props.cols, prevProps.cols)) {
        this.onWidthChange(prevProps);
      }
    } // wrap layouts so we do not need to pass layouts to child

  }, {
    key: "onWidthChange",
    value:
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    function onWidthChange(prevProps
    /*: Props<*>*/
    ) {
      var _this$props2 = this.props,
          breakpoints = _this$props2.breakpoints,
          cols = _this$props2.cols,
          layouts = _this$props2.layouts,
          compactType = _this$props2.compactType;
      var newBreakpoint = this.props.breakpoint || (0, responsiveUtils.getBreakpointFromWidth)(this.props.breakpoints, this.props.width);
      var lastBreakpoint = this.state.breakpoint;
      var newCols
      /*: number*/
      = (0, responsiveUtils.getColsFromBreakpoint)(newBreakpoint, cols);

      var newLayouts = _objectSpread({}, layouts); // Breakpoint change


      if (lastBreakpoint !== newBreakpoint || prevProps.breakpoints !== breakpoints || prevProps.cols !== cols) {
        // Preserve the current layout if the current breakpoint is not present in the next layouts.
        if (!(lastBreakpoint in newLayouts)) newLayouts[lastBreakpoint] = (0, utils$2.cloneLayout)(this.state.layout); // Find or generate a new layout.

        var layout = (0, responsiveUtils.findOrGenerateResponsiveLayout)(newLayouts, breakpoints, newBreakpoint, lastBreakpoint, newCols, compactType); // This adds missing items.

        layout = (0, utils$2.synchronizeLayoutWithChildren)(layout, this.props.children, newCols, compactType, this.props.allowOverlap); // Store the new layout.

        newLayouts[newBreakpoint] = layout; // callbacks

        this.props.onLayoutChange(layout, newLayouts);
        this.props.onBreakpointChange(newBreakpoint, newCols);
        this.setState({
          breakpoint: newBreakpoint,
          layout: layout,
          cols: newCols
        });
      }

      var margin = getIndentationValue(this.props.margin, newBreakpoint);
      var containerPadding = getIndentationValue(this.props.containerPadding, newBreakpoint); //call onWidthChange on every change of width, not only on breakpoint changes

      this.props.onWidthChange(this.props.width, margin, newCols, containerPadding);
    }
  }, {
    key: "render",
    value: function render()
    /*: React.Element<typeof ReactGridLayout>*/
    {
      /* eslint-disable no-unused-vars */
      var _this$props3 = this.props;
          _this$props3.breakpoint;
          _this$props3.breakpoints;
          _this$props3.cols;
          _this$props3.layouts;
          var margin = _this$props3.margin,
          containerPadding = _this$props3.containerPadding;
          _this$props3.onBreakpointChange;
          _this$props3.onLayoutChange;
          _this$props3.onWidthChange;
          var other = _objectWithoutProperties(_this$props3, _excluded);
      /* eslint-enable no-unused-vars */


      return /*#__PURE__*/React.createElement(_ReactGridLayout.default, _extends({}, other, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: getIndentationValue(margin, this.state.breakpoint),
        containerPadding: getIndentationValue(containerPadding, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps
    /*: Props<*>*/
    , prevState
    /*: State*/
    )
    /*: ?$Shape<State>*/
    {
      if (!(0, _lodash.default)(nextProps.layouts, prevState.layouts)) {
        // Allow parent to set layouts directly.
        var breakpoint = prevState.breakpoint,
            _cols = prevState.cols; // Since we're setting an entirely new layout object, we must generate a new responsive layout
        // if one does not exist.

        var newLayout = (0, responsiveUtils.findOrGenerateResponsiveLayout)(nextProps.layouts, nextProps.breakpoints, breakpoint, breakpoint, _cols, nextProps.compactType);
        return {
          layout: newLayout,
          layouts: nextProps.layouts
        };
      }

      return null;
    }
  }]);

  return ResponsiveReactGridLayout;
}(React.Component);

exports.default = ResponsiveReactGridLayout;

_defineProperty(ResponsiveReactGridLayout, "propTypes", {
  //
  // Basic props
  //
  // Optional, but if you are managing width yourself you may want to set the breakpoint
  // yourself as well.
  breakpoint: _propTypes.default.string,
  // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
  breakpoints: _propTypes.default.object,
  allowOverlap: _propTypes.default.bool,
  // # of cols. This is a breakpoint -> cols map
  cols: _propTypes.default.object,
  // # of margin. This is a breakpoint -> margin map
  // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
  // Margin between items [x, y] in px
  // e.g. [10, 10]
  margin: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  // # of containerPadding. This is a breakpoint -> containerPadding map
  // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
  // Padding inside the container [x, y] in px
  // e.g. [10, 10]
  containerPadding: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  // layouts is an object mapping breakpoints to layouts.
  // e.g. {lg: Layout, md: Layout, ...}
  layouts: function layouts(props
  /*: Props<>*/
  , propName
  /*: string*/
  ) {
    if (type(props[propName]) !== "[object Object]") {
      throw new Error("Layout property must be an object. Received: " + type(props[propName]));
    }

    Object.keys(props[propName]).forEach(function (key) {
      if (!(key in props.breakpoints)) {
        throw new Error("Each key in layouts must align with a key in breakpoints.");
      }

      (0, utils$2.validateLayout)(props.layouts[key], "layouts." + key);
    });
  },
  // The width of this component.
  // Required in this propTypes stanza because generateInitialState() will fail without it.
  width: _propTypes.default.number.isRequired,
  //
  // Callbacks
  //
  // Calls back with breakpoint and new # cols
  onBreakpointChange: _propTypes.default.func,
  // Callback so you can save the layout.
  // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
  onLayoutChange: _propTypes.default.func,
  // Calls back with (containerWidth, margin, cols, containerPadding)
  onWidthChange: _propTypes.default.func
});

_defineProperty(ResponsiveReactGridLayout, "defaultProps", {
  breakpoints: {
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0
  },
  cols: {
    lg: 12,
    md: 10,
    sm: 6,
    xs: 4,
    xxs: 2
  },
  containerPadding: {
    lg: null,
    md: null,
    sm: null,
    xs: null,
    xxs: null
  },
  layouts: {},
  margin: [10, 10],
  allowOverlap: false,
  onBreakpointChange: utils$2.noop,
  onLayoutChange: utils$2.noop,
  onWidthChange: utils$2.noop
});
});

unwrapExports(ResponsiveReactGridLayout_1);

var WidthProvider = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WidthProvideRGL;

var React = _interopRequireWildcard(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

var _clsx = _interopRequireDefault(require$$2);

var _excluded = ["measureBeforeMount"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layoutClassName = "react-grid-layout";
/*
 * A simple HOC that provides facility for listening to container resizes.
 *
 * The Flow type is pretty janky here. I can't just spread `WPProps` into this returned object - I wish I could - but it triggers
 * a flow bug of some sort that causes it to stop typechecking.
 */

function WidthProvideRGL
/*:: <Config>*/
(ComposedComponent
/*: React.AbstractComponent<Config>*/
)
/*: React.AbstractComponent<ComposedProps<Config>>*/
{
  var _class;

  return _class = /*#__PURE__*/function (_React$Component) {
    _inherits(WidthProvider, _React$Component);

    var _super = _createSuper(WidthProvider);

    function WidthProvider() {
      var _this;

      _classCallCheck(this, WidthProvider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        width: 1280
      });

      _defineProperty(_assertThisInitialized(_this), "elementRef", /*#__PURE__*/React.createRef());

      _defineProperty(_assertThisInitialized(_this), "mounted", false);

      _defineProperty(_assertThisInitialized(_this), "onWindowResize", function () {
        if (!_this.mounted) return;
        var node = _this.elementRef.current; // Flow casts this to Text | Element
        // fix: grid position error when node or parentNode display is none by window resize
        // #924 #1084

        if (node instanceof HTMLElement && node.offsetWidth) {
          _this.setState({
            width: node.offsetWidth
          });
        }
      });

      return _this;
    }

    _createClass(WidthProvider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
        window.addEventListener("resize", this.onWindowResize); // Call to properly set the breakpoint and resize the elements.
        // Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
        // appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.

        this.onWindowResize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
        window.removeEventListener("resize", this.onWindowResize);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            measureBeforeMount = _this$props.measureBeforeMount,
            rest = _objectWithoutProperties(_this$props, _excluded);

        if (measureBeforeMount && !this.mounted) {
          return /*#__PURE__*/React.createElement("div", {
            className: (0, _clsx.default)(this.props.className, layoutClassName),
            style: this.props.style // $FlowIgnore ref types
            ,
            ref: this.elementRef
          });
        }

        return /*#__PURE__*/React.createElement(ComposedComponent, _extends({
          innerRef: this.elementRef
        }, rest, this.state));
      }
    }]);

    return WidthProvider;
  }(React.Component), _defineProperty(_class, "defaultProps", {
    measureBeforeMount: false
  }), _defineProperty(_class, "propTypes", {
    // If true, will not render children until mounted. Useful for getting the exact width before
    // rendering, to prevent any unsightly resizing.
    measureBeforeMount: _propTypes.default.bool
  }), _class;
}
});

unwrapExports(WidthProvider);

var reactGridLayout = createCommonjsModule(function (module) {
module.exports = ReactGridLayout_1.default;
module.exports.utils = utils$2;
module.exports.Responsive =
  ResponsiveReactGridLayout_1.default;
module.exports.Responsive.utils = responsiveUtils;
module.exports.WidthProvider =
  WidthProvider.default;
});
reactGridLayout.utils;
var reactGridLayout_2 = reactGridLayout.Responsive;
var reactGridLayout_3 = reactGridLayout.WidthProvider;

var _templateObject$l, _templateObject2$d, _templateObject3$7, _templateObject4$5, _templateObject5$5;
var GridContainer = styled__default["default"].div(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["\n    border: 1px solid rgb(224, 224, 224);\n    border-radius: 8px;\n    height: 100%;\n    cursor: ", ";\n\n    &:active {\n        cursor: ", ";\n    }\n"])), function (props) {
  return props.isEditable ? 'grab' : 'auto';
}, function (props) {
  return props.isEditable ? 'grabbing' : 'auto';
});
styled__default["default"].div(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["\n    border: 1px solid rgb(224, 224, 224);\n    border-radius: 8px;\n    cursor: ", ";\n    width: 100%;\n    height: 200px;\n    margin: 8px 0;\n\n    &:active {\n        cursor: ", ";\n    }\n"])), function (props) {
  return props.isEditable ? 'grab' : 'auto';
}, function (props) {
  return props.isEditable ? 'grabbing' : 'auto';
});
var MainSection = styled__default["default"].div(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tpadding: 8px 0;\n"])));
styled__default["default"].div(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["\n\twidth: 350px;\n\tpadding: 8px;\n    border: 1px solid rgb(224, 224, 224);\n    margin-top: 16px;\n    border-radius: 8px;\n    height: calc(100vh - 100px);\n    overflow-y: scroll;\n"])));
var Container$4 = styled__default["default"].div(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: row;\n    background-color: #ffffff;\n    border-radius: 8px;\n"])));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends$h() {
  _extends$h = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$h.apply(this, arguments);
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(_typeof_1);

var regeneratorRuntime$1 = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(regeneratorRuntime$1);

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntime$1();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

var iterator = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value;
    }
  };
};

var yallist = Yallist;

Yallist.Node = Node;
Yallist.create = Yallist;

function Yallist (list) {
  var self = this;
  if (!(self instanceof Yallist)) {
    self = new Yallist();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }
  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;

  return next
};

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;
  if (head) {
    head.prev = node;
  }

  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.length++;
};

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;
  if (tail) {
    tail.next = node;
  }

  this.tail = node;
  if (!this.head) {
    this.head = node;
  }
  this.length++;
};

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push$1(this, arguments[i]);
  }
  return this.length
};

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }
  return this.length
};

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
  return res
};

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  this.length--;
  return res
};

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }
  if (i === n && walker !== null) {
    return walker.value
  }
};

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }
  if (i === n && walker !== null) {
    return walker.value
  }
};

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }
  return res
};

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }
  return res
};

Yallist.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc
};

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc
};

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }
  return arr
};

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }
  return arr
};

Yallist.prototype.slice = function (from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist();
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }
  return ret
};

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist();
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }
  return ret
};

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1;
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }

  var ret = [];
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }
  if (walker === null) {
    walker = this.tail;
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i]);
  }
  return ret;
};

Yallist.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }
  this.head = tail;
  this.tail = head;
  return this
};

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self);

  if (inserted.next === null) {
    self.tail = inserted;
  }
  if (inserted.prev === null) {
    self.head = inserted;
  }

  self.length++;

  return inserted
}

function push$1 (self, item) {
  self.tail = new Node(item, self.tail, null, self);
  if (!self.head) {
    self.head = self.tail;
  }
  self.length++;
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self);
  if (!self.tail) {
    self.tail = self.head;
  }
  self.length++;
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

try {
  // add if support for Symbol.iterator is present
  iterator(Yallist);
} catch (er) {}

// A linked list to keep track of recently-used-ness


const MAX = Symbol('max');
const LENGTH = Symbol('length');
const LENGTH_CALCULATOR = Symbol('lengthCalculator');
const ALLOW_STALE = Symbol('allowStale');
const MAX_AGE = Symbol('maxAge');
const DISPOSE = Symbol('dispose');
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
const LRU_LIST = Symbol('lruList');
const CACHE = Symbol('cache');
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');

const naiveLength = () => 1;

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options };

    if (!options)
      options = {};

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    this[MAX] = options.max || Infinity;

    const lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity;
    trim(this);
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA;
    trim(this);
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength;

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      });
    }
    trim(this);
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev;
      forEachStep(this, fn, walker, thisp);
      walker = prev;
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next;
      forEachStep(this, fn, walker, thisp);
      walker = next;
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value));
    }

    this[CACHE] = new Map(); // hash of items by key
    this[LRU_LIST] = new yallist(); // list of items in order of use recency
    this[LENGTH] = 0; // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE];

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR](value, key);

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key));
        return false
      }

      const node = this[CACHE].get(key);
      const item = node.value;

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value);
      }

      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      this[LENGTH] += len - item.length;
      item.length = len;
      this.get(key);
      trim(this);
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge);

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value);

      return false
    }

    this[LENGTH] += hit.length;
    this[LRU_LIST].unshift(hit);
    this[CACHE].set(key, this[LRU_LIST].head);
    trim(this);
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value;
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail;
    if (!node)
      return null

    del(this, node);
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key));
  }

  load (arr) {
    // reset the cache
    this.reset();

    const now = Date.now();
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v);
      else {
        const maxAge = expiresAt - now;
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false));
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key);
  if (node) {
    const hit = node.value;
    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now();
        self[LRU_LIST].unshiftNode(node);
      }
    }
    return hit.value
  }
};

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
};

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev;
      del(self, walker);
      walker = prev;
    }
  }
};

const del = (self, node) => {
  if (node) {
    const hit = node.value;
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value);

    self[LENGTH] -= hit.length;
    self[CACHE].delete(hit.key);
    self[LRU_LIST].removeNode(node);
  }
};

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value;
  if (isStale(self, hit)) {
    del(self, node);
    if (!self[ALLOW_STALE])
      hit = undefined;
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self);
};

var lruCache = LRUCache;

var has$4 = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has$4.call(foo, ctor) && ++len && !has$4.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

var actions = {
  REQUEST_START: 'REQUEST_START',
  REQUEST_END: 'REQUEST_END'
};
var DEFAULT_OPTIONS = {
  manual: false,
  useCache: true,
  ssr: true,
  autoCancel: true
};
var useAxios$1 = makeUseAxios();
useAxios$1.__ssrPromises;
    useAxios$1.resetConfigure;
    useAxios$1.configure;
    useAxios$1.loadCache;
    useAxios$1.serializeCache;
    useAxios$1.clearCache;

function isReactEvent(obj) {
  return obj && obj.nativeEvent && obj.nativeEvent instanceof Event;
}

function createCacheKey(config) {
  var cleanedConfig = _extends$h({}, config);

  delete cleanedConfig.cancelToken;
  return JSON.stringify(cleanedConfig);
}

function configToObject(config) {
  if (typeof config === 'string') {
    return {
      url: config
    };
  }

  return Object.assign({}, config);
}

function makeUseAxios(configureOptions) {
  var cache;
  var axiosInstance;
  var defaultOptions;
  var __ssrPromises = [];

  function resetConfigure() {
    cache = new lruCache();
    axiosInstance = StaticAxios__default["default"];
    defaultOptions = DEFAULT_OPTIONS;
  }

  function configure(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.axios !== undefined) {
      axiosInstance = options.axios;
    }

    if (options.cache !== undefined) {
      cache = options.cache;
    }

    if (options.defaultOptions !== undefined) {
      defaultOptions = _extends$h({}, DEFAULT_OPTIONS, options.defaultOptions);
    }
  }

  resetConfigure();
  configure(configureOptions);

  function loadCache(data) {
    cache.load(data);
  }

  function serializeCache() {
    return _serializeCache.apply(this, arguments);
  }

  function _serializeCache() {
    _serializeCache = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var ssrPromisesCopy;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ssrPromisesCopy = [].concat(__ssrPromises);
              __ssrPromises.length = 0;
              _context.next = 4;
              return Promise.all(ssrPromisesCopy);

            case 4:
              return _context.abrupt("return", cache.dump());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _serializeCache.apply(this, arguments);
  }

  function clearCache() {
    cache.reset();
  }

  return Object.assign(useAxios, {
    __ssrPromises: __ssrPromises,
    resetConfigure: resetConfigure,
    configure: configure,
    loadCache: loadCache,
    serializeCache: serializeCache,
    clearCache: clearCache
  });

  function tryStoreInCache(config, response) {
    if (!cache) {
      return;
    }

    var cacheKey = createCacheKey(config);

    var responseForCache = _extends$h({}, response);

    delete responseForCache.config;
    delete responseForCache.request;
    cache.set(cacheKey, responseForCache);
  }

  function createInitialState(config, options) {
    var response = !options.manual && tryGetFromCache(config, options);
    return _extends$h({
      loading: !options.manual && !response,
      error: null
    }, response ? {
      data: response.data,
      response: response
    } : null);
  }

  function reducer(state, action) {
    var _extends2;

    switch (action.type) {
      case actions.REQUEST_START:
        return _extends$h({}, state, {
          loading: true,
          error: null
        });

      case actions.REQUEST_END:
        return _extends$h({}, state, {
          loading: false
        }, action.error ? {} : {
          data: action.payload.data,
          error: null
        }, (_extends2 = {}, _extends2[action.error ? 'error' : 'response'] = action.payload, _extends2));
    }
  }

  function tryGetFromCache(config, options, dispatch) {
    if (!cache || !options.useCache) {
      return;
    }

    var cacheKey = createCacheKey(config);
    var response = cache.get(cacheKey);

    if (response && dispatch) {
      dispatch({
        type: actions.REQUEST_END,
        payload: response
      });
    }

    return response;
  }

  function executeRequest(_x, _x2) {
    return _executeRequest.apply(this, arguments);
  }

  function _executeRequest() {
    _executeRequest = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(config, dispatch) {
      var response;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dispatch({
                type: actions.REQUEST_START
              });
              _context2.next = 4;
              return axiosInstance(config);

            case 4:
              response = _context2.sent;
              tryStoreInCache(config, response);
              dispatch({
                type: actions.REQUEST_END,
                payload: response
              });
              return _context2.abrupt("return", response);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);

              if (!StaticAxios__default["default"].isCancel(_context2.t0)) {
                dispatch({
                  type: actions.REQUEST_END,
                  payload: _context2.t0,
                  error: true
                });
              }

              throw _context2.t0;

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));
    return _executeRequest.apply(this, arguments);
  }

  function request(_x3, _x4, _x5) {
    return _request.apply(this, arguments);
  }

  function _request() {
    _request = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(config, options, dispatch) {
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", tryGetFromCache(config, options, dispatch) || executeRequest(config, dispatch));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _request.apply(this, arguments);
  }

  function useAxios(_config, _options) {
    var config = React__default["default"].useMemo(function () {
      return configToObject(_config);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    useDeepCompareMemoize(_config));
    var options = React__default["default"].useMemo(function () {
      return _extends$h({}, defaultOptions, _options);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    useDeepCompareMemoize(_options));
    var cancelSourceRef = React__default["default"].useRef();

    var _React$useReducer = React__default["default"].useReducer(reducer, createInitialState(config, options)),
        state = _React$useReducer[0],
        dispatch = _React$useReducer[1];

    if (typeof window === 'undefined' && options.ssr && !options.manual) {
      useAxios.__ssrPromises.push(axiosInstance(config));
    }

    var cancelOutstandingRequest = React__default["default"].useCallback(function () {
      if (cancelSourceRef.current) {
        cancelSourceRef.current.cancel();
      }
    }, []);
    var withCancelToken = React__default["default"].useCallback(function (config) {
      if (options.autoCancel) {
        cancelOutstandingRequest();
      }

      cancelSourceRef.current = StaticAxios__default["default"].CancelToken.source();
      config.cancelToken = cancelSourceRef.current.token;
      return config;
    }, [cancelOutstandingRequest, options.autoCancel]);
    React__default["default"].useEffect(function () {
      if (!options.manual) {
        request(withCancelToken(config), options, dispatch)["catch"](function () {});
      }

      return cancelOutstandingRequest;
    }, [config, options, withCancelToken, cancelOutstandingRequest]);
    var refetch = React__default["default"].useCallback(function (configOverride, options) {
      configOverride = configToObject(configOverride);
      return request(withCancelToken(_extends$h({}, config, isReactEvent(configOverride) ? null : configOverride)), _extends$h({
        useCache: false
      }, options), dispatch);
    }, [config, withCancelToken]);
    return [state, refetch, cancelOutstandingRequest];
  }
}

function useDeepCompareMemoize(value) {
  var ref = React__default["default"].useRef();
  var signalRef = React__default["default"].useRef(0);

  if (!dequal(value, ref.current)) {
    ref.current = value;
    signalRef.current += 1;
  }

  return [signalRef.current];
}

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;


var hasSymbols$1 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return shams();
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr$1 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$1.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var functionBind = Function.prototype.bind || implementation;

var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$1 = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError$1();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = hasSymbols$1();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError$1,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};



var $concat$1 = functionBind.call(Function.call, Array.prototype.concat);
var $spliceApply = functionBind.call(Function.apply, Array.prototype.splice);
var $replace$1 = functionBind.call(Function.call, String.prototype.replace);
var $strSlice = functionBind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace$1(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace$1(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (src(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (src(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError$1('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError$1('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError$1('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat$1([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (src(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError$1('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = src(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var callBind = createCommonjsModule(function (module) {




var $apply = getIntrinsic('%Function.prototype.apply%');
var $call = getIntrinsic('%Function.prototype.call%');
var $reflectApply = getIntrinsic('%Reflect.apply%', true) || functionBind.call($call, $apply);

var $gOPD = getIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = getIntrinsic('%Object.defineProperty%', true);
var $max = getIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(functionBind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(functionBind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}
});
callBind.apply;

var $indexOf = callBind(getIntrinsic('String.prototype.indexOf'));

var callBound = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = getIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

var util_inspect = util__default["default"].inspect;

var utilInspect = util_inspect;

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}


var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

var objectInspect = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has$3(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has$3(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has$3(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has$3(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has$3(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray$3(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has$3(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp$1(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray$3(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate$1(obj) && !isRegExp$1(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray$3(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate$1(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp$1(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has$3(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray$3(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has$3(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has$3(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

var inspect = objectInspect;

var $TypeError = getIntrinsic('%TypeError%');
var $WeakMap = getIntrinsic('%WeakMap%', true);
var $Map = getIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

var sideChannel = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

var formats = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray$2(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray$2(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has$2.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray$2(target) && !isArray$2(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray$2(target) && isArray$2(source)) {
        source.forEach(function (item, i) {
            if (has$2.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has$2.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray$2(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

var utils = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

var has$1 = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray$1 = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel$1
) {
    var obj = object;

    var tmpSc = sideChannel$1;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults$1.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray$1(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray$1(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel$1.set(object, step);
        var valueSideChannel = sideChannel();
        valueSideChannel.set(sentinel, sideChannel$1);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults$1;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults$1.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has$1.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults$1.filter;
    if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults$1.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults$1.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults$1.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults$1.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults$1.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
};

var stringify_1 = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray$1(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel$1 = sideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel$1
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

var parse = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};

var lib = {
    formats: formats,
    parse: parse,
    stringify: stringify_1
};

var _excluded$u = ["scope"];

var showError = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
    var type,
        _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';

            if (typeof window !== 'undefined') {
              if (type === 'warn') {
                components.toast.warn(message);
              } else {
                components.toast.error(message);
              }
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function showError(_x) {
    return _ref.apply(this, arguments);
  };
}();

var config = {
  analytics: {
    tokenKey: 'cogo-analytics-token',
    storeKey: '__COGO_ANALYTICS_STORE__'
  },
  "public": {
    options: {}
  }
};
var request = StaticAxios__default["default"].create();
request.interceptors.request.use(function (oldAxiosConfig) {
  var _oldAxiosConfig$scope = oldAxiosConfig.scope,
      scope = _oldAxiosConfig$scope === void 0 ? 'public' : _oldAxiosConfig$scope,
      axiosConfig = _objectWithoutProperties$h(oldAxiosConfig, _excluded$u);

  var _config$scope = config[scope],
      tokenKey = _config$scope.tokenKey;
      _config$scope.storeKey;
  var token = helpers.getCookie(tokenKey, oldAxiosConfig.ctx);
  axiosConfig.timeout = 300000;

  axiosConfig.paramsSerializer = function (params) {
    var paramsStringify = lib.stringify(params, {
      arrayFormat: 'brackets',
      serializeDate: function serializeDate(date$1) {
        return date.formatDateToString(date$1);
      }
    });
    return paramsStringify;
  };

  switch (scope) {
    case 'analytics':
      axiosConfig.baseURL = 'https://api-matrix2.dev.cogoport.io';
      axiosConfig.headers = {
        authorizationscope: 'partner'
      };

      if (token) {
        axiosConfig.headers.authorization = "Bearer: da0e11ed-3875-4857-a50e-5f62b2eb64ed";
      }

      break;
  }

  return axiosConfig;
});
request.interceptors.response.use(function (response) {
  return {
    hasError: false,
    data: response === null || response === void 0 ? void 0 : response.data,
    status: response === null || response === void 0 ? void 0 : response.status
  };
}, function (error) {
  if (error.response) {
    var _error$response2;

    var _ref2 = (error === null || error === void 0 ? void 0 : error.response) || {},
        status = _ref2.status;

    if (status === 400 || status === 500) {
      var _error$response;

      var res = error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data;
      var keys = Object.keys(res || {});
      var errorObj = {};
      keys === null || keys === void 0 ? void 0 : keys.forEach(function (key) {
        errorObj[key] = "".concat(key, " ").concat(Array.isArray(res[key]) ? (res[key] || []).join(', ') : res[key]);
      }); // eslint-disable-next-line prefer-promise-reject-errors

      return Promise.reject({
        status: status,
        data: errorObj
      });
    }

    if ((error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 401) {
      showError('Authentication failed!');
    } else if (status === 403) {
      var _error$response3, _error$response3$data, _error$response3$data2;

      var message = (error === null || error === void 0 ? void 0 : (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : (_error$response3$data = _error$response3.data) === null || _error$response3$data === void 0 ? void 0 : (_error$response3$data2 = _error$response3$data.base) === null || _error$response3$data2 === void 0 ? void 0 : _error$response3$data2[0]) || 'You are not authorized to access this feature!!';
      showError(message, 'warn');
    } else {
      showError("The application has encountered an unknown error.\n\t\t\t\t\t\tOur team is looking into this with the utmost urgency.\n\t\t\t\t\t\tPlease try again after some time. If the issue persists, please contact us via chat.");
    }

    return Promise.reject(error);
  }

  return Promise.reject(error);
});

var useAxios = makeUseAxios({
  axios: request,
  cache: false
});
/**
 *
 * @param 		{string} 					[method='get']		HTTP Method for the request
 * @param 		{boolean} 					[auto=false]		Enable auto trigger and disable auto trigger
 * @param 		{'public'|'analytics'} 	[scope='public']	Scope for which config should be applied
 * @returns 	AxiosRequestFunction
 */

var useRequest = function useRequest() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
  var auto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'public';
  return function () {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://api-matrix2.dev.cogoport.io';
    var body;
    var options;
    var methodWithBodies = ['post', 'put', 'patch'];
    var methodWithoutBodies = ['get', 'delete', 'head', 'options'];

    if (methodWithBodies.includes(method.toLowerCase())) {
      body = arguments.length <= 1 ? undefined : arguments[1];
      options = arguments.length <= 2 ? undefined : arguments[2];
    } else if (methodWithoutBodies.includes(method.toLowerCase())) {
      options = arguments.length <= 1 ? undefined : arguments[1];
    } // eslint-disable-next-line react-hooks/rules-of-hooks


    var _useAxios = useAxios(_objectSpread2({
      url: url,
      method: method,
      scope: scope,
      data: body
    }, options), {
      manual: !auto
    }),
        _useAxios2 = _slicedToArray(_useAxios, 2),
        _useAxios2$ = _useAxios2[0],
        loading = _useAxios2$.loading,
        error = _useAxios2$.error,
        data = _useAxios2$.data,
        response = _useAxios2$.response,
        trigger = _useAxios2[1];

    return {
      loading: loading,
      error: error,
      data: data,
      response: response,
      trigger: trigger
    };
  };
};

var _templateObject$k, _templateObject2$c;
styled__default["default"].div(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n"])));
var NoRecordContainer = styled__default["default"].div(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["\n    height: 70%; \n    width: 100%;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n"])));

var Pie = function Pie(_ref) {
  var data = _ref.data,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purple_orange' : _ref$themeType;
  return /*#__PURE__*/jsxRuntime.jsx(pie.ResponsivePie, {
    data: data,
    margin: {
      top: 40,
      right: 80,
      bottom: 80,
      left: 80
    },
    innerRadius: 0,
    padAngle: 0.7,
    cornerRadius: 3,
    activeOuterRadiusOffset: 8,
    borderWidth: 1,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 0.2]]
    },
    arcLinkLabelsSkipAngle: 0,
    arcLinkLabelsTextColor: "#333333",
    arcLinkLabelsThickness: 2,
    arcLinkLabelsColor: {
      from: 'color'
    },
    arcLabelsSkipAngle: 0,
    arcLabelsTextColor: themeType === 'purple_orange' ? '#ffffff' : '#000000',
    colors: {
      scheme: themeType || 'purple_orange'
    }
  });
};

var Bar = function Bar(_ref) {
  var data = _ref.data,
      layout = _ref.layout,
      valueKeys = _ref.valueKeys,
      indexByKey = _ref.indexByKey,
      xAxisLabel = _ref.xAxisLabel,
      yAxisLabel = _ref.yAxisLabel,
      groupMode = _ref.groupMode,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purple_orange' : _ref$themeType;
  return /*#__PURE__*/jsxRuntime.jsx(bar.ResponsiveBar, {
    data: data,
    keys: valueKeys || [],
    indexBy: indexByKey || '',
    margin: {
      top: 50,
      right: 130,
      bottom: 75,
      left: 60
    },
    padding: 0.3,
    valueScale: {
      type: 'linear'
    },
    indexScale: {
      type: 'band',
      round: true
    },
    valueFormat: " >-0.3s",
    colors: {
      scheme: themeType || 'purple_orange'
    },
    groupMode: groupMode || 'grouped',
    layout: layout || 'vertical',
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -45,
      legend: "".concat(xAxisLabel || 'x-axis'),
      legendPosition: 'middle',
      legendOffset: 32
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "".concat(yAxisLabel || 'y-axis'),
      legendPosition: 'middle',
      legendOffset: -40
    },
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: themeType === 'purple_orange' ? '#ffffff' : '#000000',
    legends: [{
      dataFrom: 'keys',
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [{
        on: 'hover',
        style: {
          itemOpacity: 1
        }
      }]
    }]
  });
};

var Funnel = function Funnel(_ref) {
  var data = _ref.data,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purple_orange' : _ref$themeType;
  return /*#__PURE__*/jsxRuntime.jsx(funnel.ResponsiveFunnel, {
    data: data,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    },
    valueFormat: ">-.4s",
    colors: {
      scheme: themeType
    },
    borderWidth: 20,
    currentPartSizeExtension: 10,
    currentBorderWidth: 40,
    motionConfig: "wobbly",
    direction: direction,
    enableBeforeSeparators: false,
    enableAfterSeparators: false,
    labelColor: themeType === 'purple_orange' ? 'white' : 'black'
  });
};

var Line = function Line(_ref) {
  var data = _ref.data,
      _ref$axisBottomLabel = _ref.axisBottomLabel,
      axisBottomLabel = _ref$axisBottomLabel === void 0 ? 'y' : _ref$axisBottomLabel,
      _ref$axisLeftLabel = _ref.axisLeftLabel,
      axisLeftLabel = _ref$axisLeftLabel === void 0 ? 'x' : _ref$axisLeftLabel,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purple_orange' : _ref$themeType;
  return /*#__PURE__*/jsxRuntime.jsx(line.ResponsiveLine, {
    data: data,
    curve: "natural",
    margin: {
      top: 25,
      right: 100,
      bottom: 75,
      left: 75
    },
    xScale: {
      type: 'point'
    },
    yScale: {
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: false,
      reverse: false
    },
    yFormat: " >-.2f",
    axisTop: null,
    axisRight: null,
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -45,
      legend: axisBottomLabel,
      legendOffset: 40,
      legendPosition: 'middle'
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: axisLeftLabel,
      legendOffset: -40,
      legendPosition: 'middle'
    },
    colors: {
      scheme: themeType
    },
    enableArea: false,
    pointSize: 10,
    pointColor: {
      theme: 'background'
    },
    pointBorderWidth: 2,
    pointBorderColor: {
      from: 'serieColor'
    },
    pointLabelYOffset: -12,
    useMesh: true,
    labelTextColor: themeType === 'purple_orange' ? 'white' : 'black',
    legends: [{
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [{
        on: 'hover',
        style: {
          itemBackground: 'rgba(0, 0, 0, .03)',
          itemOpacity: 1
        }
      }]
    }]
  });
};

var Area = function Area(_ref) {
  var data = _ref.data,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purple_orange' : _ref$themeType;
  return /*#__PURE__*/jsxRuntime.jsx(bump.ResponsiveAreaBump, {
    data: data,
    margin: {
      top: 40,
      right: 100,
      bottom: 75,
      left: 100
    },
    spacing: 8,
    colors: {
      scheme: themeType || 'purple_orange'
    },
    startLabel: "id",
    axisTop: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -36
    },
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: 32
    }
  });
};

var Donut = function Donut(_ref) {
  var data = _ref.data,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purple_orange' : _ref$themeType;
  return /*#__PURE__*/jsxRuntime.jsx(pie.ResponsivePie, {
    data: data,
    margin: {
      top: 40,
      right: 80,
      bottom: 80,
      left: 80
    },
    innerRadius: 0.5,
    padAngle: 0.7,
    cornerRadius: 3,
    activeOuterRadiusOffset: 8,
    borderWidth: 1,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 0.2]]
    },
    arcLinkLabelsSkipAngle: 10,
    arcLinkLabelsThickness: 2,
    arcLinkLabelsColor: {
      from: 'color'
    },
    arcLabelsSkipAngle: 10,
    colors: {
      scheme: themeType || 'purple_orange'
    },
    arcLabelsTextColor: themeType === 'purple_orange' ? '#ffffff' : '#000000'
  });
};

var _path$e;

var _excluded$t = ["title", "titleId"];

function _extends$g() { _extends$g = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function _objectWithoutProperties$g(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$g(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$g(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgStats(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$g(_ref, _excluded$t);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$g({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$e || (_path$e = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18 20V10M12 20V4M6 20v-6",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$d;

var _excluded$s = ["title", "titleId"];

function _extends$f() { _extends$f = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function _objectWithoutProperties$f(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$f(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$f(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgMoney(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$f(_ref, _excluded$s);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$f({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$d || (_path$d = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$c;

var _excluded$r = ["title", "titleId"];

function _extends$e() { _extends$e = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function _objectWithoutProperties$e(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$e(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$e(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgUsers(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$e(_ref, _excluded$r);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$e({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$c || (_path$c = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$b;

var _excluded$q = ["title", "titleId"];

function _extends$d() { _extends$d = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function _objectWithoutProperties$d(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$d(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$d(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgChart(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$d(_ref, _excluded$q);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$d({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$b || (_path$b = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10h10z",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _rect, _path$a;

var _excluded$p = ["title", "titleId"];

function _extends$c() { _extends$c = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function _objectWithoutProperties$c(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$c(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$c(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgContainer(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$c(_ref, _excluded$p);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$c({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _rect || (_rect = /*#__PURE__*/React__namespace.createElement("rect", {
    x: 2,
    y: 5,
    width: 20,
    height: 14,
    rx: 2,
    stroke: "#000",
    strokeWidth: 2
  })), _path$a || (_path$a = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M5.227 7.5v9M7.955 7.5v9M10.682 7.5v9M13.409 7.5v9M16.136 7.5v9M18.864 7.5v9"
  })));
}

var options = [{
  label: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    alignItems: "center",
    children: [/*#__PURE__*/jsxRuntime.jsx(SvgStats, {}), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
      marginLeft: 8,
      children: "Stats"
    })]
  }),
  value: 'stats',
  icon: /*#__PURE__*/jsxRuntime.jsx(SvgStats, {})
}, {
  label: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    alignItems: "center",
    children: [/*#__PURE__*/jsxRuntime.jsx(SvgMoney, {}), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
      marginLeft: 8,
      children: "Money"
    })]
  }),
  value: 'money',
  icon: /*#__PURE__*/jsxRuntime.jsx(SvgMoney, {})
}, {
  label: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    alignItems: "center",
    children: [/*#__PURE__*/jsxRuntime.jsx(SvgUsers, {}), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
      marginLeft: 8,
      children: "Users"
    })]
  }),
  value: 'users',
  icon: /*#__PURE__*/jsxRuntime.jsx(SvgUsers, {})
}, {
  label: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    alignItems: "center",
    children: [/*#__PURE__*/jsxRuntime.jsx(SvgChart, {}), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
      marginLeft: 8,
      children: "Chart"
    })]
  }),
  value: 'chart',
  icon: /*#__PURE__*/jsxRuntime.jsx(SvgChart, {})
}, {
  label: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    alignItems: "center",
    children: [/*#__PURE__*/jsxRuntime.jsx(SvgContainer, {}), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
      marginLeft: 8,
      children: "Container"
    })]
  }),
  value: 'container',
  icon: /*#__PURE__*/jsxRuntime.jsx(SvgContainer, {})
}];

var _templateObject$j;
var kpiIcons = options.reduce(function (pv, cv) {
  return _objectSpread2(_objectSpread2({}, pv), {}, _defineProperty({}, cv.value, cv.icon));
}, {});

var KpiStatsBox = function KpiStatsBox(_ref) {
  var data = _ref.data;
      _ref.themeType;

  var _ref2 = (data === null || data === void 0 ? void 0 : data[0]) || {},
      label = _ref2.label,
      value = _ref2.value,
      icon = _ref2.icon;

  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    direction: "column",
    alignItems: "center",
    width: "100%",
    children: [/*#__PURE__*/jsxRuntime.jsx(Avatar, {
      icon: icon,
      children: icon in kpiIcons ? kpiIcons[icon] : ''
    }), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
      marginTop: 12,
      size: 24,
      bold: true,
      children: value
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Text, {
      size: 12,
      children: ["# ", utils$3.startCase(label)]
    })]
  });
};

var Avatar = styled__default["default"].div(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n    width: 50px;\n    height: 50px;\n    background: ", ";\n    overflow: hidden;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & svg {\n        width: 100%;\n        height: 100%;\n    }\n"])), function (props) {
  return props.icon ? 'transparent' : 'silver';
});

var _templateObject$i, _templateObject2$b, _templateObject3$6, _templateObject4$4, _templateObject5$4, _templateObject6$2;
var themes = {
  blues: {
    active: '#2270b5',
    inactive: '#c6daef',
    pointer: '#0a306b',
    pointer_inner: '#c6daef'
  },
  purples: {
    active: '#6a51a3',
    inactive: '#dadaea',
    pointer: '#3f007d',
    pointer_inner: '#dadaea'
  },
  purple_orange: {
    active: '#762a83',
    inactive: '#f7f7f7',
    pointer: '#df8214',
    pointer_inner: '#fee0b6'
  },
  yellow_orange_red: {
    active: '#e31a1c',
    inactive: '#ffed9f',
    pointer: '#fd8d3c',
    pointer_inner: '#fed875'
  },
  pastel1: {
    active: '#ccebc5',
    inactive: '#f2f2f2',
    pointer: '#fbb4ae',
    pointer_inner: '#fcd9ec'
  },
  reds: {
    active: '#ef3b2c',
    inactive: '#fee0d2',
    pointer: '#fb6a49',
    pointer_inner: '#fc9272'
  },
  purple_blue: {
    active: '#3f007d',
    inactive: '#6a51a3',
    pointer: '#807dba',
    pointer_inner: '#9e9ac8'
  },
  set3: {
    active: '#9e9ac8',
    inactive: '#ccebc5',
    pointer: '#bc80bd',
    pointer_inner: '#d9d9d9'
  },
  red_grey: {
    active: '#67001f',
    inactive: '#d6604d',
    pointer: '#fddbc7',
    pointer_inner: '#4d4d4d'
  },
  green_blue: {
    active: '#a8ddb5',
    inactive: '#7bccc4',
    pointer: '#4eb3d3',
    pointer_inner: '#2b8cbe'
  }
};
var GaugeHolder$1 = styled__default["default"].div(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n    width: 220px;\n    margin: 0 auto;\n    position: relative;\n    text-align: center;\n"])));
var CircleMask$1 = styled__default["default"].div(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["\n    width: 220px;\n    height: 106px;\n    padding: 5px 10px 0;\n    border-bottom: ", ";\n    position: relative;\n    text-align: center;\n    overflow: hidden;\n"])), function (props) {
  var _themes$props$themeTy;

  return "1px solid ".concat(themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy === void 0 ? void 0 : _themes$props$themeTy.inactive);
});
var Circle$1 = styled__default["default"].div(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: ", ";\n    position: relative;\n"])), function (props) {
  var _themes$props$themeTy2;

  return "10px solid ".concat(themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy2 = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy2 === void 0 ? void 0 : _themes$props$themeTy2.inactive);
});
var CircleInner = styled__default["default"].div(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    border: 10px solid transparent;\n    border-bottom: ", ";\n    border-left: ", ";\n    transition: .3s ease-in-out;\n    transform: rotate(-45deg);\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: white;\n        border: ", ";\n        left: 16px;\n        top: 18px;\n    }\n"])), function (props) {
  var _themes$props$themeTy3;

  return "10px solid ".concat(themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy3 = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy3 === void 0 ? void 0 : _themes$props$themeTy3.active);
}, function (props) {
  var _themes$props$themeTy4;

  return "10px solid ".concat(themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy4 = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy4 === void 0 ? void 0 : _themes$props$themeTy4.active);
}, function (props) {
  var _themes$props$themeTy5;

  return "4px solid ".concat(themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy5 = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy5 === void 0 ? void 0 : _themes$props$themeTy5.active);
});
var Percentage = styled__default["default"].div(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["\n    margin: 20px;\n    font-weight: bold;\n    color: ", ";\n    font-size: 15px;\n    width: 100%;\n"])), function (props) {
  var _themes$props$themeTy6;

  return themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy6 = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy6 === void 0 ? void 0 : _themes$props$themeTy6.active;
});
var GaugeCopy$1 = styled__default["default"].div(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    position: absolute;\n    background: ", ";\n    top: 60%;\n    left: 55%;\n    transition: .3s ease-in-out;\n    transform: translate(-50%, -50%) rotate(0deg);\n    margin: 8px 0 0;\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        width: 22px;\n        height: 22px;\n        border-radius: 50%;\n        background: ", ";\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%,-50%);\n    }\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        border: 7px solid transparent;\n        border-right: ", ";\n        left: -75px;\n        top: 8px;\n        width: 0;\n        height: 0;\n    }\n"])), function (props) {
  var _themes$props$themeTy7;

  return themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy7 = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy7 === void 0 ? void 0 : _themes$props$themeTy7.pointer;
}, function (props) {
  var _themes$props$themeTy8;

  return themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy8 = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy8 === void 0 ? void 0 : _themes$props$themeTy8.pointer_inner;
}, function (props) {
  var _themes$props$themeTy9;

  return "70px solid ".concat(themes === null || themes === void 0 ? void 0 : (_themes$props$themeTy9 = themes[props === null || props === void 0 ? void 0 : props.themeType]) === null || _themes$props$themeTy9 === void 0 ? void 0 : _themes$props$themeTy9.pointer);
});

var _templateObject$h;

var TableChart$1 = function TableChart(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purple_orange' : _ref$themeType;
  var columns = Object.keys((data === null || data === void 0 ? void 0 : data[0]) || {}).map(function (columnName) {
    return {
      Header: columnName,
      accessor: columnName,
      key: columnName
    };
  }) || [];
  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    style: {
      background: '#fff',
      overflowY: 'scroll',
      height: '100%'
    },
    children: /*#__PURE__*/jsxRuntime.jsx(Table, {
      themeType: themeType,
      columns: columns,
      data: data
    })
  });
};

var Table = styled__default["default"](components.Table)(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n    background-color: #ffffff;\n\toverflow-x: scroll;\n\theight: unset;\n\n\t.ui-table {\n\t\twhite-space: nowrap;\n\n\t\t.ui-table-head-cell {\n\t\t\tmin-width: 190px;\n            background: ", ";\n            color: white;\n\t\t}\n\t\t.ui-table-body-cell {\n\t\t\tbackground-color: #ffffff !important;\n\t\t\tbackground: #ffffff !important;\n            min-width: 190px;\n\t\t}\n\t\t.ui-table-body-row:hover {\n\t\t\t.ui-table-body-cell {\n\t\t\t\tbackground-color: #F5FAFE !important;\n\t\t\t\tbackground: #F5FAFE !important;\n\t\t\t}\n\t\t}\n\t\t.selected {\n\t\t\t.ui-table-body-cell {\n\t\t\t\tbackground-color: #F5FAFE !important;\n\t\t\t\tbackground: #F5FAFE !important;\n\t\t\t}\n\t\t}\n\t\t.ui-table-body-row {}\n\t}\n"])), function (props) {
  return props.themeType in themes ? themes[props.themeType].active : '#ffffff';
});

var Title = function Title(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    direction: "column",
    alignItems: "center",
    style: {
      gap: '8px',
      height: '100%',
      padding: '16px'
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
      size: 20,
      bold: true,
      children: data === null || data === void 0 ? void 0 : data.title
    }), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
      size: 12,
      children: data === null || data === void 0 ? void 0 : data.description
    })]
  });
};

var _path$9;

var _excluded$o = ["title", "titleId"];

function _extends$b() { _extends$b = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function _objectWithoutProperties$b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgTrendBlack(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$b(_ref, _excluded$o);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$b({
    width: "1em",
    height: "1em",
    viewBox: "0 0 19 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$9 || (_path$9 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.002 1c.01-.07.01-.14 0-.21a.642.642 0 00-.05-.17 1.108 1.108 0 00-.09-.14.753.753 0 00-.14-.17l-.12-.07a.692.692 0 00-.19-.1h-.2a.7.7 0 00-.21-.14h-5a1 1 0 100 2h2.83l-4 4.71-4.32-2.57a1 1 0 00-1.28.22l-5 6a1 1 0 001.195 1.546 1 1 0 00.345-.266l4.45-5.34 4.27 2.56a1 1 0 001.27-.21l4.24-4.95V6a1 1 0 102 0V1z",
    fill: "#393F70"
  })));
}

var _path$8, _path2$1;

var _excluded$n = ["title", "titleId"];

function _extends$a() { _extends$a = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgIcUp(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$a(_ref, _excluded$n);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$a({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$8 || (_path$8 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8 0a8 8 0 110 16A8 8 0 018 0z",
    fill: "#67C676"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8 4.8v6.4m0-6.4l2.133 2.24M8 4.8L5.867 7.04",
    stroke: "#fff",
    strokeLinecap: "round"
  })));
}

var _path$7, _path2;

var _excluded$m = ["title", "titleId"];

function _extends$9() { _extends$9 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgIcDown(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$9(_ref, _excluded$m);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$9({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$7 || (_path$7 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8 16A8 8 0 118 0a8 8 0 010 16z",
    fill: "#CB6464"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8 11.2V4.8m0 6.4L5.867 8.96M8 11.2l2.133-2.24",
    stroke: "#fff",
    strokeLinecap: "round"
  })));
}

var Trend = function Trend(_ref) {
  var _data$chartData, _data$chartData$, _data$chartData2, _data$chartData2$;

  var data = _ref.data;
      _ref.themeType;
  var newValue = +(data === null || data === void 0 ? void 0 : (_data$chartData = data.chartData) === null || _data$chartData === void 0 ? void 0 : (_data$chartData$ = _data$chartData[1]) === null || _data$chartData$ === void 0 ? void 0 : _data$chartData$.value) || 0;
  var oldValue = +(data === null || data === void 0 ? void 0 : (_data$chartData2 = data.chartData) === null || _data$chartData2 === void 0 ? void 0 : (_data$chartData2$ = _data$chartData2[0]) === null || _data$chartData2$ === void 0 ? void 0 : _data$chartData2$.value) || 0;
  var percentage = "".concat((newValue - oldValue) / oldValue * 100);
  var isPercentageDownwards = percentage[0] === '-';

  if (isPercentageDownwards) {
    percentage = percentage.replace('-', '');
  }

  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    direction: "column",
    alignItems: "center",
    width: "100%",
    style: {
      gap: '8px'
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(SvgTrendBlack, {
      width: 24,
      height: 24
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      direction: "column",
      alignItems: "center",
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
        size: 24,
        bold: true,
        children: newValue
      }), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
        size: 12,
        children: data === null || data === void 0 ? void 0 : data.label
      })]
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      alignItems: "center",
      style: {
        gap: '4px'
      },
      children: [isPercentageDownwards ? /*#__PURE__*/jsxRuntime.jsx(SvgIcDown, {
        width: 20,
        height: 20
      }) : /*#__PURE__*/jsxRuntime.jsx(SvgIcUp, {
        width: 20,
        height: 20
      }), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
        as: "span",
        size: 18,
        style: {
          color: 'rgb(116, 131, 143)'
        },
        children: "\u2022"
      }), /*#__PURE__*/jsxRuntime.jsxs(components.Text, {
        size: 12,
        style: {
          color: 'rgb(116, 131, 143)'
        },
        children: [(+percentage || 0).toFixed(2), "% ", isPercentageDownwards ? 'down' : 'up', " from last timeline"]
      })]
    })]
  });
};

var Gauge = function Gauge(_ref) {
  var data = _ref.data,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purple_orange' : _ref$themeType;

  var _useState = React.useState({
    value: 0,
    percentage: 0,
    diameterValue: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      gaugeData = _useState2[0],
      setGaugeData = _useState2[1];

  React.useEffect(function () {
    var _data$chartData, _data$chartData$;

    var value = (data === null || data === void 0 ? void 0 : (_data$chartData = data.chartData) === null || _data$chartData === void 0 ? void 0 : (_data$chartData$ = _data$chartData[0]) === null || _data$chartData$ === void 0 ? void 0 : _data$chartData$.value) || 0;
    var percentage = (value * 100).toFixed(2);
    if (percentage > 100) percentage = 100;
    setGaugeData(_objectSpread2(_objectSpread2({}, gaugeData), {}, {
      value: value,
      percentage: percentage,
      diameterValue: percentage * 1.8 - 45
    }));
  }, []);
  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    width: "100%",
    style: {
      gap: '8px',
      justifyContent: 'center'
    },
    children: /*#__PURE__*/jsxRuntime.jsxs(GaugeHolder$1, {
      children: [/*#__PURE__*/jsxRuntime.jsx(CircleMask$1, {
        themeType: themeType,
        children: /*#__PURE__*/jsxRuntime.jsx(Circle$1, {
          themeType: themeType,
          children: /*#__PURE__*/jsxRuntime.jsx(CircleInner, {
            themeType: themeType,
            style: {
              transform: "rotate(".concat(gaugeData === null || gaugeData === void 0 ? void 0 : gaugeData.diameterValue, "deg)")
            }
          })
        })
      }), /*#__PURE__*/jsxRuntime.jsxs(Percentage, {
        themeType: themeType,
        children: [gaugeData === null || gaugeData === void 0 ? void 0 : gaugeData.percentage, " %"]
      }), /*#__PURE__*/jsxRuntime.jsx(GaugeCopy$1, {
        themeType: themeType,
        style: {
          transform: "translate(-50%, -50%) rotate(".concat((gaugeData === null || gaugeData === void 0 ? void 0 : gaugeData.percentage) * 1.8, "deg)")
        }
      })]
    })
  });
};

var FunnelChart = function FunnelChart(_ref) {
  var data = _ref.data,
      direction = _ref.direction,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(Funnel, {
    data: data,
    direction: direction,
    themeType: themeType
  });
};

var DATE_PATTERN = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3})Z$/g;

var formatData = function formatData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!data) return '';
  if (isDate(data)) return date.formatDateToString(data, 'dd MMM yyyy');
  return data;
};

var isDate = function isDate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return RegExp(DATE_PATTERN).test(data);
};

var _templateObject$g, _templateObject2$a;
var ChartsContainer$1 = styled__default["default"].div(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n    border-radius: 8px;\n    height: ", ";\n    padding: 8px;\n    overflow-y: hidden;\n\n    &.full {\n        width: 100%;\n        height: 500px;\n    }\n"])), function (props) {
  return props.gridItemHeight ? "".concat(props.gridItemHeight - 35, "px") : props !== null && props !== void 0 && props.isKpiStatsBoxChart || props !== null && props !== void 0 && props.isTitleChart ? 'auto' : '300px';
});
var SubChartContainer = styled__default["default"].div(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["\n    /* text-align: center;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); */\n"])));

var FunnelWidget = function FunnelWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var chartData = [];
    query_data === null || query_data === void 0 ? void 0 : query_data.forEach(function (result) {
      var dataItem = {};
      dataItem.id = result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.id];
      dataItem.value = formatData(result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.value]);
      dataItem.label = result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.id];
      chartData.push(dataItem);
    });
    return /*#__PURE__*/jsxRuntime.jsxs(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        justifyContent: "center",
        children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
          children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
        })
      }), /*#__PURE__*/jsxRuntime.jsx(FunnelChart, {
        data: chartData,
        themeType: themeType
      })]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var DonutChart = function DonutChart(_ref) {
  var data = _ref.data,
      layout = _ref.layout,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(Donut, {
    data: data,
    layout: layout,
    themeType: themeType
  });
};

var DonutWidget = function DonutWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var chartData = [];
    query_data === null || query_data === void 0 ? void 0 : query_data.forEach(function (result) {
      var dataItem = {};
      dataItem.id = result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.id];
      dataItem.value = formatData(result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.value]);
      dataItem.label = result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.id];
      chartData.push(dataItem);
    });
    return /*#__PURE__*/jsxRuntime.jsxs(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        justifyContent: "center",
        children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
          children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
        })
      }), /*#__PURE__*/jsxRuntime.jsx(DonutChart, {
        data: chartData,
        themeType: themeType
      })]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var PieChart = function PieChart(_ref) {
  var data = _ref.data,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(Pie, {
    data: data,
    themeType: themeType
  });
};

var PieWidget = function PieWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var chartData = [];
    query_data === null || query_data === void 0 ? void 0 : query_data.forEach(function (result) {
      var dataItem = {};
      dataItem.id = result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.id];
      dataItem.value = formatData(result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.value]);
      dataItem.label = result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.id];
      chartData.push(dataItem);
    });
    return /*#__PURE__*/jsxRuntime.jsxs(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        justifyContent: "center",
        children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
          children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
        })
      }), /*#__PURE__*/jsxRuntime.jsx(PieChart, {
        data: chartData,
        themeType: themeType
      })]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var BarChart = function BarChart(_ref) {
  var data = _ref.data,
      layout = _ref.layout,
      valueKeys = _ref.valueKeys,
      indexByKey = _ref.indexByKey,
      xAxisLabel = _ref.xAxisLabel,
      yAxisLabel = _ref.yAxisLabel,
      groupMode = _ref.groupMode,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(Bar, {
    data: data,
    layout: layout,
    valueKeys: valueKeys,
    indexByKey: indexByKey,
    xAxisLabel: xAxisLabel,
    yAxisLabel: yAxisLabel,
    groupMode: groupMode,
    themeType: themeType
  });
};

var BarWidget = function BarWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var _widget_config$y_axis2;

    var chartData = [];
    var valueKeys = [];
    var indexByKey = widget_config === null || widget_config === void 0 ? void 0 : widget_config.x_axis;
    var xAxisLabel = widget_config === null || widget_config === void 0 ? void 0 : widget_config.x_axis_label;
    var yAxisLabel = widget_config === null || widget_config === void 0 ? void 0 : widget_config.y_axis_label;
    var groupMode = widget_config === null || widget_config === void 0 ? void 0 : widget_config.group_mode;
    query_data === null || query_data === void 0 ? void 0 : query_data.forEach(function (result) {
      var _widget_config$y_axis;

      var dataObj = {};
      dataObj[widget_config.x_axis] = formatData(result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.x_axis]);
      widget_config === null || widget_config === void 0 ? void 0 : (_widget_config$y_axis = widget_config.y_axis_fields) === null || _widget_config$y_axis === void 0 ? void 0 : _widget_config$y_axis.forEach(function (y_axis_field) {
        dataObj[y_axis_field.y_axis] = formatData(result[y_axis_field.y_axis]);
      });
      chartData.push(dataObj);
    });
    widget_config === null || widget_config === void 0 ? void 0 : (_widget_config$y_axis2 = widget_config.y_axis_fields) === null || _widget_config$y_axis2 === void 0 ? void 0 : _widget_config$y_axis2.forEach(function (y_axis_field) {
      valueKeys.push(y_axis_field.y_axis);
    });
    return /*#__PURE__*/jsxRuntime.jsxs(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        justifyContent: "center",
        children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
          children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
        })
      }), /*#__PURE__*/jsxRuntime.jsx(BarChart, {
        data: chartData,
        indexByKey: indexByKey,
        valueKeys: valueKeys,
        xAxisLabel: xAxisLabel,
        yAxisLabel: yAxisLabel,
        groupMode: groupMode,
        themeType: themeType
      })]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var KpiStatsBoxChart = function KpiStatsBoxChart(_ref) {
  var data = _ref.data,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(KpiStatsBox, {
    data: data,
    themeType: themeType
  });
};

var KpiStatsBoxWidget = function KpiStatsBoxWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var chartData = [{
      label: widget_config === null || widget_config === void 0 ? void 0 : widget_config.id,
      value: (query_data === null || query_data === void 0 ? void 0 : query_data[0][widget_config === null || widget_config === void 0 ? void 0 : widget_config.id]) || '',
      icon: (widget_config === null || widget_config === void 0 ? void 0 : widget_config.icon) || ''
    }];
    return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      isKpiStatsBoxChart: true,
      children: /*#__PURE__*/jsxRuntime.jsxs(SubChartContainer, {
        children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
          justifyContent: "center",
          children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
            children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
          })
        }), /*#__PURE__*/jsxRuntime.jsx(KpiStatsBoxChart, {
          data: chartData,
          themeType: themeType
        })]
      })
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var TableChart = function TableChart(_ref) {
  var data = _ref.data,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(TableChart$1, {
    data: data,
    themeType: themeType
  });
};

var _path$6;

var _excluded$l = ["title", "titleId"];

function _extends$8() { _extends$8 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgActiveRightArrow(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$8(_ref, _excluded$l);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$8({
    width: "1em",
    height: "1em",
    viewBox: "0 0 4 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$6 || (_path$6 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M.88 7.64L3.72 4.325a.5.5 0 000-.65L.88.358A.5.5 0 000 .685v6.63a.5.5 0 00.88.325z",
    fill: "#5936F0"
  })));
}

var _path$5;

var _excluded$k = ["title", "titleId"];

function _extends$7() { _extends$7 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgActiveLeftArrow(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$7(_ref, _excluded$k);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$7({
    width: "1em",
    height: "1em",
    viewBox: "0 0 4 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$5 || (_path$5 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.12.36L.28 3.675a.5.5 0 000 .65L3.12 7.642A.5.5 0 004 7.315V.685A.5.5 0 003.12.36z",
    fill: "#5936F0"
  })));
}

var _path$4;

var _excluded$j = ["title", "titleId"];

function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgInactiveLeftArrow(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$6(_ref, _excluded$j);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$6({
    width: "1em",
    height: "1em",
    viewBox: "0 0 4 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.12.36L.28 3.675a.5.5 0 000 .65L3.12 7.642A.5.5 0 004 7.315V.685A.5.5 0 003.12.36z",
    fill: "#BDBDBD"
  })));
}

var _path$3;

var _excluded$i = ["title", "titleId"];

function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgInactiveRightArrow(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$5(_ref, _excluded$i);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$5({
    width: "1em",
    height: "1em",
    viewBox: "0 0 4 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M.88 7.64L3.72 4.325a.5.5 0 000-.65L.88.358A.5.5 0 000 .685v6.63a.5.5 0 00.88.325z",
    fill: "#BDBDBD"
  })));
}

var Pagination = function Pagination(_ref) {
  var _ref$showPagination = _ref.showPagination,
      showPagination = _ref$showPagination === void 0 ? false : _ref$showPagination,
      _ref$showPaginationOn = _ref.showPaginationOnLessData,
      showPaginationOnLessData = _ref$showPaginationOn === void 0 ? false : _ref$showPaginationOn,
      paginationData = _ref.paginationData,
      setParams = _ref.setParams,
      dataCount = _ref.dataCount;
  if (!showPagination || !showPaginationOnLessData && (paginationData === null || paginationData === void 0 ? void 0 : paginationData.total_count) <= (paginationData === null || paginationData === void 0 ? void 0 : paginationData.page_limit)) return null;
  var totalCount = (paginationData === null || paginationData === void 0 ? void 0 : paginationData.total_count) || 0;
  var resultsCount = dataCount || 0;
  var pageLimit = (paginationData === null || paginationData === void 0 ? void 0 : paginationData.page_limit) || 0;
  var currentPage = (paginationData === null || paginationData === void 0 ? void 0 : paginationData.page) || 0;
  var totalPage = (paginationData === null || paginationData === void 0 ? void 0 : paginationData.total) || 0;
  var firstValue = dataCount === 0 ? 0 : (currentPage - 1) * pageLimit + 1;
  var lastValue = currentPage * pageLimit < totalCount ? currentPage * pageLimit : totalCount;

  var onRightArrowClick = function onRightArrowClick() {
    setParams(function (p) {
      return _objectSpread2(_objectSpread2({}, p), {}, {
        page: currentPage + 1
      });
    });
  };

  var onLeftArrowClick = function onLeftArrowClick() {
    setParams(function (p) {
      return _objectSpread2(_objectSpread2({}, p), {}, {
        page: currentPage - 1
      });
    });
  };

  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    justifyContent: "flex-end",
    padding: "8px 0",
    children: [/*#__PURE__*/jsxRuntime.jsxs(components.Text, {
      color: "#5936F0",
      size: 12,
      children: ["Showing ", firstValue, " - ", lastValue, " out of ", totalCount]
    }), currentPage === 1 || resultsCount === 0 ? /*#__PURE__*/jsxRuntime.jsx(SvgInactiveLeftArrow, {
      size: 1.2,
      style: {
        marginLeft: '20px'
      }
    }) : /*#__PURE__*/jsxRuntime.jsx(SvgActiveLeftArrow, {
      size: 1.2,
      style: {
        marginLeft: '16px',
        cursor: 'pointer'
      },
      onClick: onLeftArrowClick
    }), currentPage === totalPage || resultsCount === 0 ? /*#__PURE__*/jsxRuntime.jsx(SvgInactiveRightArrow, {
      size: 1.2,
      style: {
        marginLeft: '20px'
      }
    }) : /*#__PURE__*/jsxRuntime.jsx(SvgActiveRightArrow, {
      size: 1.2,
      style: {
        marginLeft: '16px',
        cursor: 'pointer'
      },
      onClick: onRightArrowClick
    })]
  });
};

var TableWidget = function TableWidget(_ref) {
  var _widgetData$widget_co, _widgetData$widget_co2;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      _ref$showPagination = _ref.showPagination,
      showPagination = _ref$showPagination === void 0 ? false : _ref$showPagination,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;

  var _useState = React.useState({
    page: 1,
    page_limit: 10
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = React.useState({
    total_count: (query_data === null || query_data === void 0 ? void 0 : query_data.length) || 0,
    page_limit: params === null || params === void 0 ? void 0 : params.page_limit,
    total: (query_data === null || query_data === void 0 ? void 0 : query_data.length) % (params === null || params === void 0 ? void 0 : params.page_limit) === 0 ? Math.floor((query_data === null || query_data === void 0 ? void 0 : query_data.length) / (params === null || params === void 0 ? void 0 : params.page_limit)) : Math.floor((query_data === null || query_data === void 0 ? void 0 : query_data.length) / (params === null || params === void 0 ? void 0 : params.page_limit)) + 1,
    page: params === null || params === void 0 ? void 0 : params.page
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      paginationData = _useState4[0],
      setPaginationData = _useState4[1];

  React.useEffect(function () {
    setPaginationData(_objectSpread2(_objectSpread2({}, paginationData), {}, {
      page: params === null || params === void 0 ? void 0 : params.page
    }));
  }, [params]);
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : (_widgetData$widget_co2 = _widgetData$widget_co.widget_config_data) === null || _widgetData$widget_co2 === void 0 ? void 0 : _widgetData$widget_co2.table_fields;

  var renderWidget = function renderWidget() {
    var chartData = (query_data === null || query_data === void 0 ? void 0 : query_data.map(function (row) {
      return widget_config === null || widget_config === void 0 ? void 0 : widget_config.reduce(function (pv, cv) {
        return _objectSpread2(_objectSpread2({}, pv), {}, _defineProperty({}, cv.id, row[cv.id]));
      }, {});
    })) || [];
    var lowerOffset = ((paginationData === null || paginationData === void 0 ? void 0 : paginationData.page) - 1) * (params === null || params === void 0 ? void 0 : params.page_limit);
    var upperOffset = ((paginationData === null || paginationData === void 0 ? void 0 : paginationData.page) - 1) * (params === null || params === void 0 ? void 0 : params.page_limit) + (params === null || params === void 0 ? void 0 : params.page_limit);
    var showData = chartData.slice(lowerOffset, upperOffset);
    return /*#__PURE__*/jsxRuntime.jsxs(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        justifyContent: "center",
        children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
          children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
        })
      }), /*#__PURE__*/jsxRuntime.jsx(Pagination, {
        showPagination: showPagination,
        showPaginationOnLessData: true,
        paginationData: paginationData,
        setParams: setParams,
        dataCount: query_data.length
      }), /*#__PURE__*/jsxRuntime.jsx(TableChart, {
        data: showData,
        themeType: themeType
      })]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var TitleChart = function TitleChart(_ref) {
  var data = _ref.data,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(Title, {
    data: data,
    themeType: themeType
  });
};

var TitleWidget = function TitleWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      gridItemHeight = _ref.gridItemHeight;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;
  return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer$1, {
    gridItemHeight: gridItemHeight,
    isTitleChart: true,
    children: /*#__PURE__*/jsxRuntime.jsx(SubChartContainer, {
      children: /*#__PURE__*/jsxRuntime.jsx(TitleChart, {
        data: {
          title: widget_config === null || widget_config === void 0 ? void 0 : widget_config.title,
          description: widget_config === null || widget_config === void 0 ? void 0 : widget_config.description
        }
      })
    })
  });
};

var LineChart = function LineChart(_ref) {
  var data = _ref.data,
      layout = _ref.layout,
      axisLeftLabel = _ref.axisLeftLabel,
      axisBottomLabel = _ref.axisBottomLabel,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(Line, {
    data: data,
    layout: layout,
    axisLeftLabel: axisLeftLabel,
    axisBottomLabel: axisBottomLabel,
    themeType: themeType
  });
};

var LineWidget = function LineWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var _widget_config$y_axis;

    var x_axis_label = widget_config === null || widget_config === void 0 ? void 0 : widget_config.x_axis_label;
    var y_axis_label = widget_config === null || widget_config === void 0 ? void 0 : widget_config.y_axis_label;
    var data = (widget_config === null || widget_config === void 0 ? void 0 : (_widget_config$y_axis = widget_config.y_axis_fields) === null || _widget_config$y_axis === void 0 ? void 0 : _widget_config$y_axis.map(function (y_axis_field) {
      return {
        id: y_axis_field === null || y_axis_field === void 0 ? void 0 : y_axis_field.y_axis,
        data: (query_data === null || query_data === void 0 ? void 0 : query_data.map(function (result) {
          return {
            x: formatData(result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.x_axis]),
            y: formatData(result[y_axis_field === null || y_axis_field === void 0 ? void 0 : y_axis_field.y_axis])
          };
        })) || []
      };
    })) || [];
    return /*#__PURE__*/jsxRuntime.jsxs(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        justifyContent: "center",
        children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
          children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
        })
      }), /*#__PURE__*/jsxRuntime.jsx(LineChart, {
        data: data,
        themeType: themeType,
        axisBottomLabel: x_axis_label,
        axisLeftLabel: y_axis_label
      })]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var AreaChart = function AreaChart(_ref) {
  var data = _ref.data,
      layout = _ref.layout;
  return /*#__PURE__*/jsxRuntime.jsx(Area, {
    data: data,
    layout: layout
  });
};

var AreaWidget = function AreaWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var _widget_config$area_f;

    var data = [];
    widget_config === null || widget_config === void 0 ? void 0 : (_widget_config$area_f = widget_config.area_fields) === null || _widget_config$area_f === void 0 ? void 0 : _widget_config$area_f.forEach(function (area_field) {
      var dataItem = {};
      dataItem.id = area_field === null || area_field === void 0 ? void 0 : area_field.id;
      dataItem.data = [];
      query_data === null || query_data === void 0 ? void 0 : query_data.forEach(function (result) {
        var dataObj = {};
        dataObj.x = formatData(result[area_field === null || area_field === void 0 ? void 0 : area_field.x_axis]);
        dataObj.y = formatData(result[area_field === null || area_field === void 0 ? void 0 : area_field.y_axis]);
        dataItem.data.push(dataObj);
      });
      data.push(dataItem);
    });
    return /*#__PURE__*/jsxRuntime.jsxs(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        justifyContent: "center",
        children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
          children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
        })
      }), /*#__PURE__*/jsxRuntime.jsx(AreaChart, {
        data: data,
        themeType: themeType
      })]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var TrendChart = function TrendChart(_ref) {
  var data = _ref.data,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(Trend, {
    data: data,
    themeType: themeType
  });
};

var TrendWidget = function TrendWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var data = {
      label: widget_config === null || widget_config === void 0 ? void 0 : widget_config.label,
      chartData: (query_data === null || query_data === void 0 ? void 0 : query_data.map(function (result) {
        return {
          id: formatData(result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.id] || ''),
          value: formatData(result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.value] || '')
        };
      })) || []
    };
    return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      style: {
        height: 'auto'
      },
      children: /*#__PURE__*/jsxRuntime.jsxs(SubChartContainer, {
        children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
          justifyContent: "center",
          children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
            children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
          })
        }), /*#__PURE__*/jsxRuntime.jsx(TrendChart, {
          data: data,
          themeType: themeType
        })]
      })
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var GaugeChart = function GaugeChart(_ref) {
  var data = _ref.data,
      themeType = _ref.themeType;
  return /*#__PURE__*/jsxRuntime.jsx(Gauge, {
    data: data,
    themeType: themeType
  });
};

var GaugeWidget = function GaugeWidget(_ref) {
  var _widgetData$widget_co;

  var widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight;
  var query_data = widgetData === null || widgetData === void 0 ? void 0 : widgetData.query_data;
  var widget_config = widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$widget_co = widgetData.widget_config) === null || _widgetData$widget_co === void 0 ? void 0 : _widgetData$widget_co.widget_config_data;

  var renderWidget = function renderWidget() {
    var data = {
      label: widget_config === null || widget_config === void 0 ? void 0 : widget_config.label,
      chartData: (query_data === null || query_data === void 0 ? void 0 : query_data.map(function (result) {
        return {
          value: formatData(result[widget_config === null || widget_config === void 0 ? void 0 : widget_config.value] || '')
        };
      })) || []
    };
    return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer$1, {
      gridItemHeight: gridItemHeight,
      style: {
        height: 'auto'
      },
      children: /*#__PURE__*/jsxRuntime.jsxs(SubChartContainer, {
        children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
          justifyContent: "center",
          children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
            children: widgetData === null || widgetData === void 0 ? void 0 : widgetData.name
          })
        }), /*#__PURE__*/jsxRuntime.jsx(GaugeChart, {
          data: data,
          themeType: themeType
        })]
      })
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    display: "block",
    children: renderWidget()
  });
};

var WidgetToRender = function WidgetToRender(_ref) {
  var widget_type = _ref.widget_type,
      widgetData = _ref.widgetData,
      themeType = _ref.themeType,
      showPagination = _ref.showPagination,
      paginationData = _ref.paginationData,
      setParams = _ref.setParams;
      _ref.gridItemHeight;
  var TYPE_MAPPING = {
    funnel: {
      Widget: FunnelWidget
    },
    donut: {
      Widget: DonutWidget
    },
    pie: {
      Widget: PieWidget
    },
    bar: {
      Widget: BarWidget
    },
    kpi_stats_box: {
      Widget: KpiStatsBoxWidget
    },
    table: {
      Widget: TableWidget
    },
    title: {
      Widget: TitleWidget
    },
    line: {
      Widget: LineWidget
    },
    area: {
      Widget: AreaWidget
    },
    trend: {
      Widget: TrendWidget
    },
    gauge: {
      Widget: GaugeWidget
    }
  };
  var ComponentWidget = widget_type in TYPE_MAPPING ? TYPE_MAPPING[widget_type].Widget : null;
  if (!ComponentWidget) return null;
  return /*#__PURE__*/jsxRuntime.jsx(ComponentWidget, {
    widgetData: widgetData,
    themeType: themeType,
    showPagination: showPagination,
    paginationData: paginationData,
    setParams: setParams // gridItemHeight={gridItemHeight}

  });
};

var _templateObject$f, _templateObject2$9;
var ChartsContainer = styled__default["default"].div(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n    border-radius: 8px;\n    height: 300px;\n    padding: 8px;\n    \n    &.full {\n        width: 100%;\n        height: 500px;\n    }\n"])));
var CenterLoading = styled__default["default"].div(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["\n    text-align: center;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n"])));

var _templateObject$e;
var StatsLoadingContainer = styled__default["default"].div(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  padding-top: 30px;\n  .dots-bars-5 {\n    width: 40px;\n    height: 30px;\n    --c1: linear-gradient(#66acf7, #66acf7);\n    --c2: linear-gradient(#f1bb1a, #f1bb1a);\n    --c3: linear-gradient(#6cc077, #6cc077);\n    background:\n      var(--c1) 0    100%/8px 30px,\n      var(--c2) 50%  100%/8px 20px,\n      var(--c3) 100% 100%/8px 10px;\n    background-repeat: no-repeat;\n    position: relative;\n    clip-path: inset(-100% 0);\n  }\n  .dots-bars-5:before{\n    content: \"\";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background:currentColor;\n    left:-16px;\n    top:0;\n    animation: \n      db5-1 2s   linear infinite,\n      db5-2 0.5s cubic-bezier(0,200,.8,200) infinite;\n  }\n  \n  @keyframes db5-1 {\n    0%   {left:-16px;transform:translateY(-8px)}\n    100% {left:calc(100% + 8px);transform:translateY(22px)}\n  }\n  \n  @keyframes db5-2 {\n    100% {top:-0.1px}\n  }\n"])));

var StatsLoading = function StatsLoading() {
  return /*#__PURE__*/jsxRuntime.jsx(StatsLoadingContainer, {
    children: /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      alignItems: "center",
      direction: "column",
      marginBottom: 16,
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        className: "dots-bars-5"
      })
    })
  });
};

var AreaWidgetLoading = function AreaWidgetLoading() {
  return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer, {
    children: /*#__PURE__*/jsxRuntime.jsxs(components.Skeleton, {
      speed: 2,
      width: 500,
      height: 300,
      viewBox: "0 0 500 300",
      backgroundColor: "#f3f3f3",
      foregroundColor: "#ecebeb",
      children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "7",
        y: "71",
        rx: "3",
        ry: "3",
        width: "480",
        height: "31"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "7",
        y: "133",
        rx: "3",
        ry: "3",
        width: "481",
        height: "31"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "7",
        y: "194",
        rx: "3",
        ry: "3",
        width: "481",
        height: "31"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "6",
        y: "260",
        rx: "0",
        ry: "0",
        width: "482",
        height: "31"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "358",
        y: "236",
        rx: "0",
        ry: "0",
        width: "6",
        height: "2"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "7",
        y: "11",
        rx: "0",
        ry: "0",
        width: "480",
        height: "31"
      })]
    })
  });
};

var BarWidgetLoading = function BarWidgetLoading() {
  return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer, {
    children: /*#__PURE__*/jsxRuntime.jsxs(components.Skeleton, {
      speed: 2,
      width: 500,
      height: 300,
      viewBox: "0 0 500 300",
      backgroundColor: "#f3f3f3",
      foregroundColor: "#ecebeb",
      children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "410",
        y: "180",
        rx: "3",
        ry: "3",
        width: "37",
        height: "96"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "325",
        y: "97",
        rx: "3",
        ry: "3",
        width: "37",
        height: "180"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "237",
        y: "28",
        rx: "3",
        ry: "3",
        width: "38",
        height: "250"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "64",
        y: "61",
        rx: "3",
        ry: "3",
        width: "38",
        height: "216"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "151",
        y: "126",
        rx: "3",
        ry: "3",
        width: "38",
        height: "151"
      })]
    })
  });
};

var DonutWidgetLoading = function DonutWidgetLoading() {
  return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer, {
    children: /*#__PURE__*/jsxRuntime.jsx(components.Skeleton, {
      speed: 2,
      width: 500,
      height: 300,
      viewBox: "0 0 500 300",
      backgroundColor: "#f3f3f3",
      foregroundColor: "#ecebeb",
      children: /*#__PURE__*/jsxRuntime.jsx("circle", {
        cx: "280",
        cy: "158",
        r: "97"
      })
    })
  });
};

var FunnelWidgetLoading = function FunnelWidgetLoading() {
  return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer, {
    children: /*#__PURE__*/jsxRuntime.jsxs(components.Skeleton, {
      speed: 2,
      width: 500,
      height: 300,
      viewBox: "0 0 500 300",
      backgroundColor: "#f3f3f3",
      foregroundColor: "#ecebeb",
      children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "339",
        y: "120",
        rx: "3",
        ry: "3",
        width: "98",
        height: "65"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "22",
        y: "75",
        rx: "3",
        ry: "3",
        width: "119",
        height: "153"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "238",
        y: "107",
        rx: "3",
        ry: "3",
        width: "115",
        height: "90"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "139",
        y: "91",
        rx: "3",
        ry: "3",
        width: "115",
        height: "120"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "435",
        y: "129",
        rx: "0",
        ry: "0",
        width: "79",
        height: "47"
      })]
    })
  });
};

var _templateObject$d, _templateObject2$8, _templateObject3$5, _templateObject4$3, _templateObject5$3, _templateObject6$1;
var GaugeHolder = styled__default["default"].div(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n    width: 220px;\n    margin: 0 auto;\n    position: relative;\n    text-align: center;\n"])));
var CircleMask = styled__default["default"].div(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["\n    width: 220px;\n    height: 106px;\n    padding: 5px 10px 0;\n    border-bottom: ", ";\n    position: relative;\n    text-align: center;\n    overflow: hidden;\n"])), function () {
  return '1px solid #ecebeb';
});
var Circle = styled__default["default"].div(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: ", ";\n    position: relative;\n"])), function () {
  return '10px solid #ecebeb';
});
styled__default["default"].div(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    border: 10px solid transparent;\n    border-bottom: '10px solid #ecebeb';\n    border-left: '10px solid #ecebeb';\n    transition: .3s ease-in-out;\n    transform: rotate(-45deg);\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: #ecebeb;\n        border: '4px solid #ecebeb';\n        left: 16px;\n        top: 18px;\n    }\n"])));
styled__default["default"].div(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["\n    margin: 20px;\n    font-weight: bold;\n    color: #ecebeb;\n    font-size: 15px;\n    width: 100%;\n"])));
var GaugeCopy = styled__default["default"].div(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    position: absolute;\n    background: #ecebeb;\n    top: 60%;\n    left: 55%;\n    transition: .3s ease-in-out;\n    transform: translate(-50%, -50%) rotate(0deg);\n    margin: 8px 0 0;\n\n    &:after {\n        content: \"\";\n        position: absolute;\n        width: 22px;\n        height: 22px;\n        border-radius: 50%;\n        background: #ecebeb;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%,-50%);\n    }\n\n    &:before {\n        content: \"\";\n        position: absolute;\n        border: 7px solid transparent;\n        border-right: ", ";\n        left: -75px;\n        top: 8px;\n        width: 0;\n        height: 0;\n    }\n"])), function () {
  return '70px solid #ecebeb';
});

var GaugeWidgetLoading = function GaugeWidgetLoading() {
  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    width: "100%",
    direction: "column",
    style: {
      gap: '8px',
      justifyContent: 'center',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/jsxRuntime.jsxs(GaugeHolder, {
      children: [/*#__PURE__*/jsxRuntime.jsx(CircleMask, {
        children: /*#__PURE__*/jsxRuntime.jsx(Circle, {})
      }), /*#__PURE__*/jsxRuntime.jsx(GaugeCopy, {
        style: {
          transform: "translate(-50%, 65%) rotate(".concat(30 * 1.8, "deg)")
        }
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(components.Text, {
      marginTop: 20,
      marginLeft: 30,
      size: 12,
      color: "#333333",
      children: "Fetching data..."
    })]
  });
};

var LineWidgetLoading = function LineWidgetLoading() {
  return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer, {
    children: /*#__PURE__*/jsxRuntime.jsxs(components.Skeleton, {
      speed: 2,
      width: 500,
      height: 300,
      viewBox: "0 0 500 300",
      backgroundColor: "#f3f3f3",
      foregroundColor: "#ecebeb",
      children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "11",
        y: "196",
        rx: "3",
        ry: "3",
        width: "460",
        height: "13"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "12",
        y: "248",
        rx: "3",
        ry: "3",
        width: "458",
        height: "13"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "11",
        y: "147",
        rx: "3",
        ry: "3",
        width: "459",
        height: "13"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "12",
        y: "47",
        rx: "3",
        ry: "3",
        width: "458",
        height: "14"
      }), /*#__PURE__*/jsxRuntime.jsx("rect", {
        x: "12",
        y: "97",
        rx: "3",
        ry: "3",
        width: "458",
        height: "14"
      })]
    })
  });
};

var PieWidgetLoading = function PieWidgetLoading() {
  return /*#__PURE__*/jsxRuntime.jsx(ChartsContainer, {
    children: /*#__PURE__*/jsxRuntime.jsx(components.Skeleton, {
      speed: 2,
      width: 500,
      height: 300,
      viewBox: "0 0 500 300",
      backgroundColor: "#f3f3f3",
      foregroundColor: "#ecebeb",
      children: /*#__PURE__*/jsxRuntime.jsx("circle", {
        cx: "280",
        cy: "158",
        r: "97"
      })
    })
  });
};

var WidgetLoading = function WidgetLoading(_ref) {
  var widget_type = _ref.widget_type;
  var WIDGET_MAPPING = {
    area: AreaWidgetLoading,
    bar: BarWidgetLoading,
    donut: DonutWidgetLoading,
    funnel: FunnelWidgetLoading,
    gauge: GaugeWidgetLoading,
    line: LineWidgetLoading,
    pie: PieWidgetLoading
  };
  var LoadingComponent = WIDGET_MAPPING[widget_type];
  return /*#__PURE__*/jsxRuntime.jsx(CenterLoading, {
    children: /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      className: "center",
      justifyContent: "center",
      alignItems: "center",
      children: LoadingComponent ? /*#__PURE__*/jsxRuntime.jsx(LoadingComponent, {}) : /*#__PURE__*/jsxRuntime.jsx(StatsLoading, {})
    })
  });
};

var defaultPaginationParams = {
  sort_type: 'desc',
  sort_by: 'created_at',
  page_limit: 100,
  page: 1
};

var SCOPES = {
  ANALYTICS: 'analytics'
};
var SCOPE_ANALYTICS = SCOPES.ANALYTICS;
var API = {
  LOGIN_USER: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/login_user'
  },
  LIST_ANALYTICS_QUERY_LOGS: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/list_analytics_query_logs'
  },
  GET_USER_SESSION: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/get_user_session'
  },
  DELETE_USER_SESSION: {
    apiMethod: 'delete',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/delete_user_session'
  },
  SETUP_ANALYTICS_DATABASE_CONNECTION: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/setup_analytics_database_connection'
  },
  LIST_ANALYTICS_DATA_SOURCES: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/list_analytics_data_sources'
  },
  CREATE_ANALYTICS_DATA_SOURCE: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/create_analytics_data_source'
  },
  UPDATE_ANALYTICS_DATA_SOURCE: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/update_analytics_data_source'
  },
  GET_ALL_TABLES_FROM_DATA_SOURCE: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/get_all_tables_from_data_source'
  },
  LIST_ALL_RECORDS_FROM_TABLE: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/list_all_records_from_table'
  },
  GET_ANALYTICS_QUERY_RESULT_SET: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/get_analytics_query_result_set'
  },
  CREATE_ANALYTICS_WIDGET: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/create_analytics_widget'
  },
  LIST_ANALYTICS_WIDGETS: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/list_analytics_widgets'
  },
  GET_ANALYTICS_WIDGET: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/get_analytics_widget'
  },
  UPDATE_ANALYTICS_WIDGET: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/update_analytics_widget'
  },
  CREATE_ANALYTICS_DASHBOARD: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/create_analytics_dashboard'
  },
  LIST_ANALYTICS_DASHBOARDS: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/list_analytics_dashboards'
  },
  LIST_SHARED_DASHBOARDS: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/list_shared_dashboards'
  },
  CREATE_ANALYTICS_PUBLIC_DASHBOARD: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/create_analytics_public_dashboard'
  },
  GET_ANALYTICS_DASHBOARD: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/get_analytics_dashboard'
  },
  LIST_ANALYTICS_COLLECTIONS: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/list_analytics_collections'
  },
  CREATE_ANALYTICS_COLLECTION: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/create_analytics_collection'
  },
  UPDATE_ANALYTICS_COLLECTION: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/update_analytics_collection'
  },
  UPDATE_ANALYTICS_DASHBOARD: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/update_analytics_dashboard'
  },
  UPDATE_ANALYTICS_DASHBOARD_STATUS: {
    apiMethod: 'post',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/update_analytics_dashboard_status'
  },
  GET_ANALYTICS_PUBLIC_DASHBOARD: {
    apiMethod: 'get',
    apiScope: SCOPE_ANALYTICS,
    apiName: '/get_analytics_public_dashboard'
  }
};

var WidgetComponent = function WidgetComponent(_ref) {
  var _getWidgetAPI$data, _widgetData$paginatio, _widgetData$paginatio2, _widgetData$paginatio3, _widgetData$paginatio4;

  var widget_id = _ref.widget_id,
      widget_type = _ref.widget_type,
      themeType = _ref.themeType,
      gridItemHeight = _ref.gridItemHeight,
      _ref$query_variable_v = _ref.query_variable_values,
      query_variable_values = _ref$query_variable_v === void 0 ? {} : _ref$query_variable_v;

  var _useState = React.useState(_objectSpread2(_objectSpread2({}, defaultPaginationParams), {}, {
    id: widget_id
  })),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _API$GET_ANALYTICS_WI = API.GET_ANALYTICS_WIDGET,
      apiMethod = _API$GET_ANALYTICS_WI.apiMethod,
      apiScope = _API$GET_ANALYTICS_WI.apiScope,
      apiName = _API$GET_ANALYTICS_WI.apiName;
  var getWidgetAPI = useRequest(apiMethod, true, apiScope)(apiName, {
    params: _objectSpread2(_objectSpread2({}, params), {}, {
      query_variable_values: query_variable_values
    })
  });
  var loading = getWidgetAPI === null || getWidgetAPI === void 0 ? void 0 : getWidgetAPI.loading;
  var widgetData = getWidgetAPI === null || getWidgetAPI === void 0 ? void 0 : (_getWidgetAPI$data = getWidgetAPI.data) === null || _getWidgetAPI$data === void 0 ? void 0 : _getWidgetAPI$data.data;
  var paginationData = {
    page: (widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$paginatio = widgetData.pagination_data) === null || _widgetData$paginatio === void 0 ? void 0 : _widgetData$paginatio.page) || 0,
    page_limit: (widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$paginatio2 = widgetData.pagination_data) === null || _widgetData$paginatio2 === void 0 ? void 0 : _widgetData$paginatio2.page_limit) || 0,
    total: (widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$paginatio3 = widgetData.pagination_data) === null || _widgetData$paginatio3 === void 0 ? void 0 : _widgetData$paginatio3.total) || 0,
    total_count: (widgetData === null || widgetData === void 0 ? void 0 : (_widgetData$paginatio4 = widgetData.pagination_data) === null || _widgetData$paginatio4 === void 0 ? void 0 : _widgetData$paginatio4.total_count) || 0
  };

  if (loading) {
    return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      style: {
        minHeight: '30vh'
      },
      children: /*#__PURE__*/jsxRuntime.jsx(WidgetLoading, {
        widget_type: widget_type
      })
    });
  }

  if (!widgetData) {
    if (widget_type !== 'title' && !(widgetData !== null && widgetData !== void 0 && widgetData.query_data)) {
      return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        style: {
          minHeight: '30vh'
        },
        children: /*#__PURE__*/jsxRuntime.jsx(NoRecordContainer, {})
      });
    }
  }

  return /*#__PURE__*/jsxRuntime.jsx(WidgetToRender, {
    widget_type: widget_type,
    widgetData: widgetData,
    themeType: themeType,
    showPagination: true,
    paginationData: paginationData,
    setParams: setParams,
    gridItemHeight: gridItemHeight
  });
};

var _templateObject$c;
var WidgetContainer = styled__default["default"].div(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width:100%;\n"])));

var GridItem = function GridItem(_ref) {
  var _layout_props$layout$, _layout_props$layout$2;

  var _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? {} : _ref$layout,
      isEditable = _ref.isEditable,
      widgets = _ref.widgets,
      removeChart = _ref.removeChart,
      layout_props = _ref.layout_props,
      themeType = _ref.themeType,
      queryVariableValues = _ref.queryVariableValues;
  var layoutRef = React.useRef(null);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      layoutHeight = _useState2[0],
      setLayoutHeight = _useState2[1];

  React.useEffect(function () {
    var _layoutRef$current, _layoutRef$current$cl;

    var height = ((_layoutRef$current = layoutRef.current) === null || _layoutRef$current === void 0 ? void 0 : (_layoutRef$current$cl = _layoutRef$current.closest('.react-grid-item')) === null || _layoutRef$current$cl === void 0 ? void 0 : _layoutRef$current$cl.clientHeight) || 0;
    if (isEditable && widgets.length > 1) height -= 35;
    if (height < 0) height = 0;
    setLayoutHeight(height);
  }, [layout === null || layout === void 0 ? void 0 : layout.h]);
  var onClickRemoveChart = React.useCallback(function (event) {
    event.stopPropagation();
    removeChart(layout === null || layout === void 0 ? void 0 : layout.i);
  }, []);
  return /*#__PURE__*/jsxRuntime.jsxs(GridContainer, {
    ref: layoutRef,
    isEditable: isEditable,
    children: [isEditable && widgets.length > 1 && /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      justifyContent: "flex-end",
      padding: "4px",
      children: /*#__PURE__*/jsxRuntime.jsx(components.Button, {
        ghost: true,
        size: "sm",
        onClick: onClickRemoveChart,
        children: "x"
      })
    }), /*#__PURE__*/jsxRuntime.jsx(WidgetContainer, {
      children: /*#__PURE__*/jsxRuntime.jsx(WidgetComponent, {
        widget_id: layout_props === null || layout_props === void 0 ? void 0 : (_layout_props$layout$ = layout_props[layout === null || layout === void 0 ? void 0 : layout.i]) === null || _layout_props$layout$ === void 0 ? void 0 : _layout_props$layout$.widget_id,
        widget_type: layout_props === null || layout_props === void 0 ? void 0 : (_layout_props$layout$2 = layout_props[layout === null || layout === void 0 ? void 0 : layout.i]) === null || _layout_props$layout$2 === void 0 ? void 0 : _layout_props$layout$2.widget_type,
        themeType: themeType,
        gridItemHeight: layoutHeight,
        query_variable_values: queryVariableValues
      })
    })]
  });
};

var RemoveWidgetModal = function RemoveWidgetModal(_ref) {
  var showRemoveWidgetModal = _ref.showRemoveWidgetModal,
      setShowRemoveWidgetModal = _ref.setShowRemoveWidgetModal,
      widgetIdToRemove = _ref.widgetIdToRemove,
      setWidgetIdToRemove = _ref.setWidgetIdToRemove,
      widgets = _ref.widgets,
      setWidgets = _ref.setWidgets;
  if (!showRemoveWidgetModal) return null;

  var handleClickCancelWidgetRemove = function handleClickCancelWidgetRemove() {
    setWidgetIdToRemove(null);
    setShowRemoveWidgetModal(false);
  };

  var handleClickRemoveWidget = function handleClickRemoveWidget() {
    setWidgets(widgets.filter(function (_ref2) {
      var id = _ref2.id;
      return id !== widgetIdToRemove;
    }));
    setWidgetIdToRemove(null);
    setShowRemoveWidgetModal(false);
  };

  return /*#__PURE__*/jsxRuntime.jsxs(components.Modal, {
    show: showRemoveWidgetModal,
    onClose: function onClose() {
      return setShowRemoveWidgetModal(false);
    },
    width: 350,
    onOuterClick: function onOuterClick() {
      return setShowRemoveWidgetModal(false);
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
      as: "h3",
      size: 18,
      bold: true,
      children: "Remove Widget"
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      direction: "column",
      margin: "16px 0 0 0",
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
        size: 16,
        children: "Are you sure, want to remove this widget?"
      }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
        justifyContent: "flex-end",
        margin: "16px 0 0 0",
        style: {
          gap: '16px'
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(admin.Button, {
          className: "secondary sm",
          onClick: handleClickCancelWidgetRemove,
          children: "Cancel"
        }), /*#__PURE__*/jsxRuntime.jsx(admin.Button, {
          className: "primary sm",
          onClick: handleClickRemoveWidget,
          children: "Remove"
        })]
      })]
    })]
  });
};

var ResponsiveGridLayout = reactGridLayout_3(reactGridLayout_2);

var ViewEditDashboardComponent = function ViewEditDashboardComponent(_ref) {
  var _dashboardLayout$lg;

  var _ref$widgets = _ref.widgets,
      widgets = _ref$widgets === void 0 ? [] : _ref$widgets,
      _ref$setWidgets = _ref.setWidgets,
      setWidgets = _ref$setWidgets === void 0 ? function () {} : _ref$setWidgets,
      themeType = _ref.themeType,
      _ref$dashboardMode = _ref.dashboardMode,
      dashboardMode = _ref$dashboardMode === void 0 ? 'view' : _ref$dashboardMode,
      _ref$dashboardLayout = _ref.dashboardLayout,
      dashboardLayout = _ref$dashboardLayout === void 0 ? {} : _ref$dashboardLayout,
      _ref$setDashboardLayo = _ref.setDashboardLayout,
      setDashboardLayout = _ref$setDashboardLayo === void 0 ? function () {} : _ref$setDashboardLayo,
      _ref$queryVariableVal = _ref.queryVariableValues,
      queryVariableValues = _ref$queryVariableVal === void 0 ? {} : _ref$queryVariableVal;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showRemoveWidgetModal = _useState2[0],
      setShowRemoveWidgetModal = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      widgetIdToRemove = _useState4[0],
      setWidgetIdToRemove = _useState4[1];

  var isEditable = dashboardMode !== 'view';

  var _widgets$reduce = widgets.reduce(function (pv, cv) {
    return _objectSpread2(_objectSpread2({}, pv), {}, {
      layout_props: _objectSpread2(_objectSpread2({}, pv.layout_props), {}, _defineProperty({}, cv.id, {
        widget_id: cv === null || cv === void 0 ? void 0 : cv.id,
        widget_type: cv === null || cv === void 0 ? void 0 : cv.type
      }))
    });
  }, {
    layout_props: {}
  }),
      layout_props = _widgets$reduce.layout_props;

  var removeChart = function removeChart(widgetId) {
    setWidgetIdToRemove(widgetId);
    setShowRemoveWidgetModal(true);
  };

  var onLayoutChange = function onLayoutChange(layouts) {
    setDashboardLayout(_objectSpread2(_objectSpread2({}, dashboardLayout), {}, {
      lg: layouts
    }));
  };

  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      direction: "column",
      style: {
        paddingBottom: isEditable ? '88px' : '8px'
      },
      children: /*#__PURE__*/jsxRuntime.jsx(Container$4, {
        children: /*#__PURE__*/jsxRuntime.jsx(MainSection, {
          children: /*#__PURE__*/jsxRuntime.jsx(ResponsiveGridLayout, {
            className: "layout",
            rowHeight: 30,
            layouts: dashboardLayout,
            cols: {
              lg: 12,
              md: 10,
              sm: 6,
              xs: 4,
              xxs: 2
            },
            onLayoutChange: onLayoutChange,
            isDroppable: true,
            measureBeforeMount: false,
            isDraggable: isEditable,
            isResizable: isEditable,
            isBounded: true,
            children: dashboardLayout === null || dashboardLayout === void 0 ? void 0 : (_dashboardLayout$lg = dashboardLayout.lg) === null || _dashboardLayout$lg === void 0 ? void 0 : _dashboardLayout$lg.map(function (layout) {
              return /*#__PURE__*/jsxRuntime.jsx("div", {
                children: /*#__PURE__*/jsxRuntime.jsx(GridItem, {
                  layout: layout,
                  isEditable: isEditable,
                  widgets: widgets,
                  removeChart: removeChart,
                  layout_props: layout_props,
                  themeType: themeType,
                  queryVariableValues: queryVariableValues
                })
              }, layout === null || layout === void 0 ? void 0 : layout.i);
            })
          })
        })
      })
    }), /*#__PURE__*/jsxRuntime.jsx(RemoveWidgetModal, {
      showRemoveWidgetModal: showRemoveWidgetModal,
      setShowRemoveWidgetModal: setShowRemoveWidgetModal,
      widgetIdToRemove: widgetIdToRemove,
      setWidgetIdToRemove: setWidgetIdToRemove,
      widgets: widgets,
      setWidgets: setWidgets
    })]
  });
};

var _excluded$h = ["control", "name"],
    _excluded2$5 = ["ref"];

var Select$1 = function Select(_ref) {
  var control = _ref.control,
      name = _ref.name,
      rest = _objectWithoutProperties$h(_ref, _excluded$h);

  var _useController = hooks.useController({
    name: name,
    control: control,
    rules: rest.rules,
    defaultValue: rest.defaultValue
  }),
      _useController$field = _useController.field,
      ref = _useController$field.ref,
      selectProps = _objectWithoutProperties$h(_useController$field, _excluded2$5);

  return /*#__PURE__*/jsxRuntime.jsx(components.Select, _objectSpread2(_objectSpread2(_objectSpread2({}, rest), selectProps), {}, {
    value: rest.value || selectProps.value,
    inputRef: ref
  }));
};

var _excluded$g = ["control", "name"],
    _excluded2$4 = ["ref"];

var SwitchControled = function SwitchControled(_ref) {
  var control = _ref.control,
      name = _ref.name,
      rest = _objectWithoutProperties$h(_ref, _excluded$g);

  var _useController = hooks.useController({
    name: name,
    control: control,
    rules: rest.rules,
    defaultValue: rest.defaultValue
  }),
      _useController$field = _useController.field,
      ref = _useController$field.ref,
      switchProps = _objectWithoutProperties$h(_useController$field, _excluded2$4);

  return /*#__PURE__*/jsxRuntime.jsx(Switch__default["default"], _objectSpread2(_objectSpread2(_objectSpread2({}, rest), switchProps), {}, {
    value: rest.value || switchProps.value,
    inputRef: ref
  }));
};

var _excluded$f = ["control", "name"],
    _excluded2$3 = ["ref"];

var TagSelectControled = function TagSelectControled(_ref) {
  var control = _ref.control,
      name = _ref.name,
      rest = _objectWithoutProperties$h(_ref, _excluded$f);

  var _useController = hooks.useController({
    name: name,
    control: control,
    rules: rest.rules,
    defaultValue: rest.defaultValue
  }),
      _useController$field = _useController.field,
      ref = _useController$field.ref,
      tagSelectProps = _objectWithoutProperties$h(_useController$field, _excluded2$3);

  return /*#__PURE__*/jsxRuntime.jsx(TagSelect__default["default"], _objectSpread2(_objectSpread2(_objectSpread2({}, rest), tagSelectProps), {}, {
    value: rest.value || tagSelectProps.value,
    inputRef: ref
  }));
};

var _excluded$e = ["control", "name"],
    _excluded2$2 = ["ref"];

var ToggleControled = function ToggleControled(_ref) {
  var control = _ref.control,
      name = _ref.name,
      rest = _objectWithoutProperties$h(_ref, _excluded$e);

  var _useController = hooks.useController({
    name: name,
    control: control,
    rules: rest.rules,
    defaultValue: rest.defaultValue
  }),
      _useController$field = _useController.field,
      ref = _useController$field.ref,
      toggleProps = _objectWithoutProperties$h(_useController$field, _excluded2$2);

  return /*#__PURE__*/jsxRuntime.jsx(components.Toggle, _objectSpread2(_objectSpread2(_objectSpread2({}, rest), toggleProps), {}, {
    value: rest.value || toggleProps.value,
    inputRef: ref
  }));
};

var _excluded$d = ["control", "name"],
    _excluded2$1 = ["ref"];

var SingleDatePickerControlled = function SingleDatePickerControlled(_ref) {
  var control = _ref.control,
      name = _ref.name,
      rest = _objectWithoutProperties$h(_ref, _excluded$d);

  var _useController = hooks.useController({
    name: name,
    control: control,
    rules: rest.rules,
    defaultValue: rest.defaultValue
  }),
      _useController$field = _useController.field,
      ref = _useController$field.ref,
      singleDatePickerProps = _objectWithoutProperties$h(_useController$field, _excluded2$1);

  return /*#__PURE__*/jsxRuntime.jsx(DateTimePicker.SingleDatePicker, _objectSpread2(_objectSpread2(_objectSpread2({}, rest), singleDatePickerProps), {}, {
    value: rest.value || singleDatePickerProps.value,
    inputRef: ref
  }));
};

var _templateObject$b, _templateObject2$7;
var Container$3 = styled__default["default"].div(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tcursor: text;\n\tcolor: #333;\n\n\twidth: 100%;\n\n\tborder-radius: 4px;\n\tpadding: 0 8px;\n\n\tbackground-color: #FFFFFF;\n\tborder: 1px solid #E0E0E0;\n\twill-change: border-color, box-shadow;\n\ttransition: border-color 0.1s linear, box-shadow 0.1s linear;\n\n\t&.size-sm {\n\t\theight: 24px;\n\t\tfont-size: 12px;\n\t}\n\n\t&.size-md {\n\t\theight: 32px;\n\t\tfont-size: 12px;\n\t}\n\n\t&.size-lg {\n\t\theight: 40px;\n\t\tfont-size: 14px;\n\t}\n\n\t&:hover {\n\t\tborder-color: #333;\n\t}\n\n\t&:focus-within {\n\t\tborder-color: #333;\n\t\tbox-shadow: 0 0 0 1px #333;\n\t}\n\n\t&.disabled {\n\t\tbackground-color: #F9F9F9;\n\t\tcursor: not-allowed;\n\t\tcolor: #828282;\n\n\t\t&:hover {\n\t\t\tborder-color: #E0E0E0;\n\t\t}\n\n\t\t&:focus-within {\n\t\t\tborder-color: #E0E0E0;\n\t\t\tbox-shadow: none;\n\t\t}\n\t}\n\n    & .toggle-password-span {\n        cursor: pointer;\n    }\n\n    &.disabled .toggle-password-span {\n        cursor: not-allowed;\n    }\n"])));
var StyledInput = styled__default["default"].input(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tbackground: transparent;\n\tborder: none;\n\toutline: 0;\n\tfont-size: 1em;\n\tcursor: inherit;\n\tcolor: inherit;\n\n\t&::placeholder {\n\t\tcolor: #BDBDBD;\n\t}\n"])));

var _excluded$c = ["className", "style", "disabled", "size"];

var PasswordInput = function PasswordInput(_ref, ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      props = _objectWithoutProperties$h(_ref, _excluded$c);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

  var containerDerivedClassNames = React.useMemo(function () {
    var classes = [className, "size-".concat(size)];
    if (disabled) classes.push('disabled');
    return classes.join(' ');
  }, [className, size, disabled]);
  var handleToggle = React.useCallback(function (event) {
    event.stopPropagation();
    if (disabled) return;
    setShowPassword(function (prevState) {
      return !prevState;
    });
  }, []);
  return /*#__PURE__*/jsxRuntime.jsxs(Container$3, {
    className: containerDerivedClassNames,
    style: _objectSpread2({}, style),
    children: [/*#__PURE__*/jsxRuntime.jsx(StyledInput, _objectSpread2(_objectSpread2({
      ref: ref
    }, props), {}, {
      type: showPassword ? 'text' : 'password',
      disabled: disabled
    })), /*#__PURE__*/jsxRuntime.jsx("span", {
      className: "toggle-password-span",
      onClick: handleToggle,
      "aria-hidden": "true",
      children: showPassword ? 'Hide' : 'Show'
    })]
  });
};

var PasswordInput$1 = /*#__PURE__*/React.forwardRef(PasswordInput);

var Option = function Option(props) {
  var data = props.data,
      _props$finalLabelKey = props.finalLabelKey,
      finalLabelKey = _props$finalLabelKey === void 0 ? 'name' : _props$finalLabelKey;

  if (data === null) {
    return null;
  }

  var getChild = function getChild() {
    if (data.__isNew__) {
      return data.label;
    }

    return data[finalLabelKey];
  };

  return /*#__PURE__*/jsxRuntime.jsx(reactSelect.components.Option, _objectSpread2(_objectSpread2({}, props), {}, {
    children: getChild()
  }));
};

var getAsyncFields = function getAsyncFields(key) {
  if (key === 'collections') {
    return {
      finalValueKey: 'id',
      finalLabelKey: 'name',
      endpoint: 'list_analytics_collections',
      defaultParams: {},
      defaultOptions: true,
      isSearchable: true
    };
  }

  return null;
};

var getOptionsFromKey = function getOptionsFromKey() {
  return null;
};

var _excluded$b = ["defaultParams", "finalValueKey", "finalLabelKey"];

var getOptions = function getOptions(options, optionsListKey, _ref) {
  var valueKey = _ref.valueKey,
      labelKey = _ref.labelKey,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params;
  var finalOptions = options || [];
  var finalValueKey = valueKey || 'value';
  var finalLabelKey = labelKey || 'label';
  var getOptionLabel = null;
  var getOptionValue = null;

  if (optionsListKey) {
    var asyncFields = getAsyncFields(optionsListKey);

    if (asyncFields) {
      var _asyncFields$defaultP = asyncFields.defaultParams,
          defaultParams = _asyncFields$defaultP === void 0 ? {} : _asyncFields$defaultP,
          finalValueKeyAsync = asyncFields.finalValueKey,
          finalLabelKeyAsync = asyncFields.finalLabelKey,
          restAsyncFields = _objectWithoutProperties$h(asyncFields, _excluded$b);

      var mergedParams = utils$3.merge({}, defaultParams, params);
      return {
        finalValueKey: valueKey || finalValueKeyAsync,
        finalLabelKey: labelKey || finalLabelKeyAsync,
        isAsync: true,
        asyncOptions: _objectSpread2(_objectSpread2({}, restAsyncFields), {}, {
          defaultParams: mergedParams
        })
      };
    }

    var data = getOptionsFromKey();

    if (data !== null) {
      finalOptions = data.options;
      finalValueKey = valueKey || data.valueKey;
      finalLabelKey = labelKey || data.labelKey;

      getOptionLabel = data.getOptionLabel || function () {
        return labelKey || 'label';
      };

      getOptionValue = data.getOptionValue || function () {
        return valueKey || 'value';
      };
    }
  }

  return {
    finalOptions: finalOptions,
    finalValueKey: finalValueKey,
    finalLabelKey: finalLabelKey,
    getOptionValue: getOptionValue,
    getOptionLabel: getOptionLabel,
    isAsync: false,
    defaultOptions: {}
  };
};

var _excluded$a = ["filters"],
    _excluded2 = ["filters"];

var getModifiedList = function getModifiedList(endpoint, list) {
  return list;
};

var loadOptions = function loadOptions(asyncOptions, finalValueKey, valueProp, setSelectedOption, getList, getList2, paramsOld) {
  var getAsyncOptions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchString) {
      var params, _ref2, filters, rest, getListMain, allPromises, _asyncOptions$grouped, _asyncOptions$grouped2, _ref3, oldFilters, newRest, res2, valuesRes, list, _valuesRes$, _valuesRes$2, _valuesRes$2$data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = {
                filters: {
                  q: searchString || undefined
                }
              };

              if (!searchString && valueProp) {
                params = {
                  filters: _defineProperty({}, finalValueKey, valueProp)
                };
              }

              _ref2 = paramsOld || {}, filters = _ref2.filters, rest = _objectWithoutProperties$h(_ref2, _excluded$a);
              getListMain = getList.trigger({
                params: _objectSpread2(_objectSpread2({}, rest), {}, {
                  filters: _objectSpread2(_objectSpread2({}, filters || {}), params.filters)
                })
              });
              allPromises = [getListMain];

              if ((asyncOptions.grouped || []).length) {
                _ref3 = (asyncOptions === null || asyncOptions === void 0 ? void 0 : (_asyncOptions$grouped = asyncOptions.grouped) === null || _asyncOptions$grouped === void 0 ? void 0 : (_asyncOptions$grouped2 = _asyncOptions$grouped[0]) === null || _asyncOptions$grouped2 === void 0 ? void 0 : _asyncOptions$grouped2.defaultParams) || {}, oldFilters = _ref3.filters, newRest = _objectWithoutProperties$h(_ref3, _excluded2);
                res2 = getList2.trigger({
                  params: _objectSpread2(_objectSpread2({}, newRest), {}, {
                    filters: _objectSpread2(_objectSpread2({}, oldFilters || {}), params.filters)
                  })
                });
                allPromises.push(res2);
              }

              _context.next = 8;
              return Promise.all(allPromises);

            case 8:
              valuesRes = _context.sent;
              list = [];

              if (allPromises.length < 2) {
                list = getModifiedList(asyncOptions.endpoint, asyncOptions.endpoint === 'get_fcl_freight_rate' ? (_valuesRes$ = valuesRes[0]) === null || _valuesRes$ === void 0 ? void 0 : _valuesRes$.data : ((_valuesRes$2 = valuesRes[0]) === null || _valuesRes$2 === void 0 ? void 0 : (_valuesRes$2$data = _valuesRes$2.data) === null || _valuesRes$2$data === void 0 ? void 0 : _valuesRes$2$data.list) || []);
              } else {
                list = valuesRes.map(function (valuesRe, i) {
                  var _asyncOptions$grouped3, _asyncOptions$grouped4, _valuesRe$data;

                  return {
                    label: i === 0 ? asyncOptions.groupedLabel : (_asyncOptions$grouped3 = asyncOptions.grouped[i - 1]) === null || _asyncOptions$grouped3 === void 0 ? void 0 : _asyncOptions$grouped3.groupedLabel,
                    options: getModifiedList(i === 0 ? asyncOptions.endpoint : (_asyncOptions$grouped4 = asyncOptions.grouped[i - 1]) === null || _asyncOptions$grouped4 === void 0 ? void 0 : _asyncOptions$grouped4.endpoint, ((_valuesRe$data = valuesRe.data) === null || _valuesRe$data === void 0 ? void 0 : _valuesRe$data.list) || [])
                  };
                });
              }

              if (!searchString && valueProp) {
                if (allPromises.length < 2) {
                  setSelectedOption(list);
                } else {
                  setSelectedOption([].concat(_toConsumableArray(list[0].options), _toConsumableArray(list[1].options)));
                }
              }

              return _context.abrupt("return", list);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAsyncOptions(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return function (inputValue, callback) {
    setTimeout( /*#__PURE__*/_asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = callback;
              _context2.next = 3;
              return getAsyncOptions(inputValue);

            case 3:
              _context2.t1 = _context2.sent;
              (0, _context2.t0)(_context2.t1);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), 1000);
  };
};

var getAutoMenuClose = function getAutoMenuClose(autoCloseMenu, multiple) {
  var closeMenuOnSelect = autoCloseMenu === null ? true : autoCloseMenu;

  if (multiple) {
    closeMenuOnSelect = autoCloseMenu === null ? false : autoCloseMenu;
  }

  return closeMenuOnSelect;
};

var _excluded$9 = ["options", "optionsListKey", "name", "multiple", "autoCloseMenu", "width", "value", "noOptionsMessage", "customComponents"];

var Select = function Select(props, ref) {
  var _asyncOptions$grouped, _asyncOptions$grouped2, _asyncOptions$grouped3, _asyncOptions$grouped4;

  var options = props.options,
      optionsListKey = props.optionsListKey,
      name = props.name,
      multiple = props.multiple,
      autoCloseMenu = props.autoCloseMenu;
      props.width;
      var valueProp = props.value;
      props.noOptionsMessage;
      var customComponents = props.customComponents,
      rest = _objectWithoutProperties$h(props, _excluded$9);

  var closeMenuOnSelect = getAutoMenuClose(autoCloseMenu, multiple);

  var _getOptions = getOptions(options, optionsListKey, _objectSpread2({}, rest)),
      finalOptions = _getOptions.finalOptions,
      isAsync = _getOptions.isAsync,
      finalValueKey = _getOptions.finalValueKey,
      finalLabelKey = _getOptions.finalLabelKey,
      defaultOptions = _getOptions.defaultOptions,
      isSearchable = _getOptions.isSearchable,
      asyncOptions = _getOptions.asyncOptions;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      initialLoadOptions = _useState2[0],
      setSelectedOption = _useState2[1];

  var params = utils$3.merge(_objectSpread2({}, rest.params || {}), (asyncOptions === null || asyncOptions === void 0 ? void 0 : asyncOptions.defaultParams) || {});
  var getList = useRequest('get', false, 'analytics')("/".concat(asyncOptions === null || asyncOptions === void 0 ? void 0 : asyncOptions.endpoint), {
    params: params
  });
  var getList2 = useRequest('get', false, 'analytics')("/".concat(asyncOptions === null || asyncOptions === void 0 ? void 0 : (_asyncOptions$grouped = asyncOptions.grouped) === null || _asyncOptions$grouped === void 0 ? void 0 : (_asyncOptions$grouped2 = _asyncOptions$grouped[0]) === null || _asyncOptions$grouped2 === void 0 ? void 0 : _asyncOptions$grouped2.endpoint) || '', {
    params: asyncOptions === null || asyncOptions === void 0 ? void 0 : (_asyncOptions$grouped3 = asyncOptions.grouped) === null || _asyncOptions$grouped3 === void 0 ? void 0 : (_asyncOptions$grouped4 = _asyncOptions$grouped3[0]) === null || _asyncOptions$grouped4 === void 0 ? void 0 : _asyncOptions$grouped4.defaultParams
  });

  var reactSelectAsyncProps = function reactSelectAsyncProps() {
    var loadOptions$1 = loadOptions(asyncOptions, finalValueKey, valueProp, setSelectedOption, getList, getList2, params);
    return {
      loadOptions: loadOptions$1,
      isSearchable: isSearchable,
      cacheOptions: true,
      initialLoadOptions: initialLoadOptions,
      defaultOptions: defaultOptions ? true : !!valueProp
    };
  };

  var reactSelectProps = function reactSelectProps() {
    return {
      options: finalOptions
    };
  };

  var finalElementProps = isAsync ? reactSelectAsyncProps() : reactSelectProps();

  var customComponentsAll = _objectSpread2(_objectSpread2({}, customComponents), {}, {
    Option: function Option$1(optionProps) {
      return /*#__PURE__*/jsxRuntime.jsx(Option, _objectSpread2(_objectSpread2({}, optionProps), {}, {
        finalLabelKey: finalLabelKey,
        optionsListKey: optionsListKey
      }));
    }
  });

  if (rest.ControlComponent) {
    customComponentsAll.Control = rest.ControlComponent;
  }

  return /*#__PURE__*/jsxRuntime.jsx(components.Select, _objectSpread2(_objectSpread2({
    ref: ref,
    name: name,
    closeMenuOnSelect: closeMenuOnSelect,
    isAsync: isAsync,
    labelKey: finalLabelKey,
    valueKey: finalValueKey,
    value: valueProp,
    customComponents: customComponentsAll,
    multiple: multiple
  }, finalElementProps), rest));
};

var AsyncSelect = /*#__PURE__*/React.forwardRef(Select);

var _excluded$8 = ["itemKey", "name", "value", "control"];

var SelectController$1 = function SelectController(_ref) {
  var itemKey = _ref.itemKey,
      name = _ref.name,
      value = _ref.value,
      control = _ref.control,
      rest = _objectWithoutProperties$h(_ref, _excluded$8);

  return /*#__PURE__*/jsxRuntime.jsx(hooks.Controller, {
    control: control,
    name: name,
    defaultValue: value,
    rules: rest.rules,
    shouldUnregister: rest.shouldUnregister,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
          _onChange = _ref2$field.onChange,
          onBlur = _ref2$field.onBlur,
          newValue = _ref2$field.value;
      return /*#__PURE__*/React.createElement(AsyncSelect, _objectSpread2(_objectSpread2({}, rest), {}, {
        key: itemKey,
        onChange: function onChange(val, obj) {
          _onChange(val, obj);

          if (rest.handleChange) {
            rest.handleChange(obj, name);
          }
        },
        value: newValue || value,
        onBlur: onBlur
      }));
    }
  }, itemKey || name);
};

var _templateObject$a, _templateObject2$6, _templateObject3$4, _templateObject4$2, _templateObject5$2, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var Container$2 = styled__default["default"].div(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n    display: flex;\n    .popover-button {\n        box-shadow: unset;\n        width: 100%;\n        white-space: nowrap;\n        justify-content: left !important;\n        border: 1px solid #E0E0E0;\n        height: 30px;\n        text-transform: none;\n        font-weight: 100 !important;\n        font-style: inherit !important;\n        letter-spacing: 0;\n        font-size: 12px;\n        text-align: left;\n\n        &:hover {\n            box-shadow: unset;\n        }\n        &:active {\n            border: 1px solid #000;\n        }\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after, .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before { \n        display: none;\n    }\n"])));
var PopoverContainer = styled__default["default"].div(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["\n    width: 300px;\n    background: #fff;\n    border-radius: 8px;\n    align-items: center;\n"])));
var PopoverCard = styled__default["default"].div(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n\tpointer-events: all;\n\talign-items: center;\n\tpadding: 8px;\n\tcolor: #333;\n\tfont-weight: normal;\n    border: 1px solid transparent;\n\n    &:not(:last-child) {\n        border-bottom: 1px solid #eee;\n    }\n\n    &:hover {\n\t\tbackground: #eee;\n\t\tcolor: rgb(116, 131, 143);\n    }\n    .card-button {\n        border-radius: 50%;\n        background-color: #fff;\n        &:hover {\n            background-color: #000;\n            color: #fff;\n        }\n    }\n"])));
var NavigationContainer = styled__default["default"].div(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n    display: flex;\n    direction: row;\n    border-bottom: 2px solid #eee;\n    overflow: auto;\n    padding: 10px 0;\n\n    .close-button {\n        position: absolute;\n        right: 0.2rem;\n        top: 10px;\n        border: unset;\n        width: 30px;\n        height: auto;\n        background: #fff;\n\n        &:hover {\n            box-shadow: unset;\n        }\n    }\n"])));
var NavigationText = styled__default["default"].div(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    font-size: 16px;\n    font-weight: ", ";\n    opacity: ", ";\n    width: 100%;\n    white-space: nowrap;\n\n    &:hover {\n        color: #034afd;\n    }\n"])), function (props) {
  return props !== null && props !== void 0 && props.isLast ? 500 : null;
}, function (props) {
  return props !== null && props !== void 0 && props.isLast ? 1 : 0.7;
});
var NoData = styled__default["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    align-items: center;\n    text-align: center;\n    height: 12vh;\n    padding-top: 10vh;\n    font-size: 15px;\n"])));
var ValueText = styled__default["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    opacity: ", ";\n"])), function (props) {
  return props !== null && props !== void 0 && props.isPlaceHolder ? 0.5 : 1;
});
var CollectionValueButton = styled__default["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border: 1px solid #eee;\n    padding: 2px;\n    border-radius: 4px;\n    background: #eee;\n    display: flex;\n    align-items:center;\n    justify-content:center;\n    flex-direction: 'row';\n"])));
var RemoveCollection = styled__default["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    display:flex;\n    justify-content:center;\n    margin-left: 15px;\n    border-radius: 4px;\n"])));

var _path$2;

var _excluded$7 = ["title", "titleId"];

function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgSingleArrowToRight(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$4(_ref, _excluded$7);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    "aria-hidden": "true",
    "data-prefix": "far",
    "data-icon": "greater-than",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512",
    className: "single-arrow-to-right_svg__svg-inline--fa single-arrow-to-right_svg__fa-greater-than single-arrow-to-right_svg__fa-w-10 single-arrow-to-right_svg__fa-7x",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M311.16 218.53L37.47 81.69c-7.9-3.95-17.52-.75-21.47 7.16L1.69 117.48c-3.95 7.9-.75 17.51 7.16 21.46L242.96 256 8.85 373.06c-7.9 3.95-11.11 13.56-7.16 21.46L16 423.15c3.95 7.9 13.56 11.11 21.47 7.16l273.68-136.84c5.42-2.71 8.84-8.25 8.84-14.31v-46.31c.01-6.07-3.41-11.61-8.83-14.32z"
  })));
}

var _path$1;

var _excluded$6 = ["title", "titleId"];

function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgDropdown(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$3(_ref, _excluded$6);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "dropdown_svg__core-ui-select-caret-icon",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M1.052 1.76L5.35 5.441a1 1 0 001.302 0l4.296-3.683c.705-.604.278-1.759-.65-1.759H1.703c-.928 0-1.355 1.155-.65 1.76z",
    fill: "#393F70"
  })));
}

var _path;

var _excluded$5 = ["title", "titleId"];

function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgDoubleArrowRight(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$2(_ref, _excluded$5);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    "aria-hidden": "true",
    "data-prefix": "fal",
    "data-icon": "angle-double-right",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512",
    className: "double-arrow-right_svg__svg-inline--fa double-arrow-right_svg__fa-angle-double-right double-arrow-right_svg__fa-w-10 double-arrow-right_svg__fa-7x",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z"
  })));
}

var _defs$1, _g$1;

var _excluded$4 = ["title", "titleId"];

function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgCloseButton(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties$1(_ref, _excluded$4);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    style: {
      width: 20,
      height: 20
    },
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _defs$1 || (_defs$1 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 10.586l5.293-5.293a1 1 0 011.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 11-1.414-1.414L10.586 12 5.293 6.707a1 1 0 011.414-1.414L12 10.586z",
    id: "close-button_svg__a"
  }))), _g$1 || (_g$1 = /*#__PURE__*/React__namespace.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__namespace.createElement("mask", {
    id: "close-button_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/React__namespace.createElement("use", {
    xlinkHref: "#close-button_svg__a"
  })), /*#__PURE__*/React__namespace.createElement("use", {
    fill: "#42526E",
    fillRule: "nonzero",
    xlinkHref: "#close-button_svg__a"
  }), /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#close-button_svg__b)",
    fill: "#525252",
    fillRule: "nonzero"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M0 24h24V0H0z"
  })))));
}

var _templateObject$9, _templateObject2$5, _templateObject3$3, _templateObject4$1, _templateObject5$1;
var bounce$1 = styled.keyframes(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n\t0%,\n\t50%,\n\t100% {\n\t\ttransform: scale(1);\n\t}\n\t25% {\n\t\ttransform: scale(0.6);\n\t}\n\t75% {\n\t\ttransform: scale(1.4);\n\t}\n"])));
var Container$1 = styled__default["default"].div(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n\talign-items: center;\n\tmargin: 0;\n\theight: 30vh;\n"])));
var PartnerTitle$1 = styled__default["default"].p(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["\n\tmargin: 0px;\n\tmargin-top: 8vh;\n\tfont-weight: bold;\n\tfont-size: 13px;\n\tline-height: 22px;\n\tletter-spacing: 0.02em;\n\tcolor: #000000;\n"])));
var AnimationContainer$1 = styled__default["default"].div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n    display: flex;\n\tjustify-content: center;\n\talign-items: center;\n"])));
var ColoredContainer$1 = styled__default["default"].div(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n    width: 15px;\n\theight: 15px;\n\tborder-radius: 100%;\n\tmargin: 10px;\n\tbackground-image: linear-gradient(\n\t\t145deg,\n\t\trgba(255, 255, 255, 0.5) 0%,\n\t\trgba(0, 0, 0, 0) 100%\n\t);\n\tanimation: ", " 1.5s 0.5s linear infinite;\n\n    &.yellow {\n\tbackground-color: #f1bb1a;\n    }\n\n    &.green {\n        background-color: #6cc077;\n        animation-delay: 0.1s;\n    }\n\n    &.blue {\n        background-color: #66acf7;\n        animation-delay: 0.2s;\n    }\n\n    &.black {\n        background-color: #000000;\n        animation-delay: 0.3s;\n    }\n"])), bounce$1);

var DashboardLoading$1 = function DashboardLoading(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'collections' : _ref$title;
  return /*#__PURE__*/jsxRuntime.jsx(Container$1, {
    children: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      alignItems: "center",
      direction: "column",
      children: [/*#__PURE__*/jsxRuntime.jsxs(PartnerTitle$1, {
        children: ["Loading ", title, "..."]
      }), /*#__PURE__*/jsxRuntime.jsxs(AnimationContainer$1, {
        children: [/*#__PURE__*/jsxRuntime.jsx(ColoredContainer$1, {
          className: "blue"
        }), /*#__PURE__*/jsxRuntime.jsx(ColoredContainer$1, {
          className: "yellow"
        }), /*#__PURE__*/jsxRuntime.jsx(ColoredContainer$1, {
          className: "green"
        }), /*#__PURE__*/jsxRuntime.jsx(ColoredContainer$1, {
          className: "black"
        })]
      })]
    })
  });
};

var CollectionPopover = function CollectionPopover(_ref) {
  var _listCollectionAPI$da;

  var _ref$previousValue = _ref.previousValue,
      previousValue = _ref$previousValue === void 0 ? null : _ref$previousValue,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Choose collection' : _ref$placeholder,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;

  var _useState = React.useState(previousValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showPopover = _useState4[0],
      setShowPopover = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      collectionId = _useState6[0],
      setCollectionId = _useState6[1];

  var _useState7 = React.useState([{
    id: null,
    name: 'Collection',
    description: null,
    status: null
  }]),
      _useState8 = _slicedToArray(_useState7, 2),
      navigationData = _useState8[0],
      setNavigationData = _useState8[1];

  var _API$LIST_ANALYTICS_C = API.LIST_ANALYTICS_COLLECTIONS,
      apiMethod = _API$LIST_ANALYTICS_C.apiMethod,
      apiName = _API$LIST_ANALYTICS_C.apiName,
      apiScope = _API$LIST_ANALYTICS_C.apiScope;
  var listCollectionAPI = useRequest(apiMethod, false, apiScope)(apiName);
  var loading = listCollectionAPI === null || listCollectionAPI === void 0 ? void 0 : listCollectionAPI.loading;
  var data = (listCollectionAPI === null || listCollectionAPI === void 0 ? void 0 : (_listCollectionAPI$da = listCollectionAPI.data) === null || _listCollectionAPI$da === void 0 ? void 0 : _listCollectionAPI$da.list) || [];

  var getCollectionList = function getCollectionList() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var filters = {};
    if (id) filters = {
      parent_collection_id: id
    };else filters = {
      top_level_collection_required: true
    };
    listCollectionAPI.trigger({
      params: {
        filters: filters
      }
    });
  };

  React.useEffect(function () {
    if (showPopover) getCollectionList(collectionId);
  }, [collectionId]);
  React.useEffect(function () {
    if (!showPopover) handleNavigationClick({
      id: null
    });
  }, [showPopover]);

  var handleArrowClick = function handleArrowClick(e, item) {
    e.stopPropagation();
    setCollectionId(item === null || item === void 0 ? void 0 : item.id);
    var collectionList = navigationData.concat(item) || [];
    setNavigationData(collectionList);
  };

  var handleOnClickCard = function handleOnClickCard(e, item) {
    setValue(item === null || item === void 0 ? void 0 : item.name);
    onChange(item === null || item === void 0 ? void 0 : item.id, item);
    setShowPopover(false);
  };

  var togglePopover = function togglePopover() {
    setShowPopover(function (previousState) {
      if (!previousState) getCollectionList();
      return !previousState;
    });
  };

  var handleNavigationClick = function handleNavigationClick(item) {
    var collectionList = navigationData;
    var index = collectionList.findIndex(function (a) {
      return a.id === (item === null || item === void 0 ? void 0 : item.id);
    });
    collectionList.length = index + 1;
    setNavigationData(collectionList);
    setCollectionId(item === null || item === void 0 ? void 0 : item.id);
  };

  var handleRemoveCollection = function handleRemoveCollection(e) {
    e.stopPropagation();
    onChange('', null);
    setValue(null);
  };

  var content = function content() {
    var popoverBody = function popoverBody() {
      var _navigationData;

      if (loading) return /*#__PURE__*/jsxRuntime.jsx(DashboardLoading$1, {
        title: navigationData === null || navigationData === void 0 ? void 0 : (_navigationData = navigationData[(navigationData === null || navigationData === void 0 ? void 0 : navigationData.length) - 1]) === null || _navigationData === void 0 ? void 0 : _navigationData.name
      });
      if (!loading && (data === null || data === void 0 ? void 0 : data.length) === 0) return /*#__PURE__*/jsxRuntime.jsx(NoData, {
        children: "No more collections"
      });
      return data.map(function (collection) {
        return /*#__PURE__*/jsxRuntime.jsxs(PopoverCard, {
          onClick: function onClick(e) {
            return handleOnClickCard(e, collection);
          },
          children: [collection === null || collection === void 0 ? void 0 : collection.name, /*#__PURE__*/jsxRuntime.jsx(components.Button, {
            className: "card-button",
            ghost: true,
            onClick: function onClick(e) {
              return handleArrowClick(e, collection);
            },
            children: /*#__PURE__*/jsxRuntime.jsx(SvgSingleArrowToRight, {})
          })]
        });
      });
    };

    return /*#__PURE__*/jsxRuntime.jsxs(PopoverContainer, {
      children: [/*#__PURE__*/jsxRuntime.jsxs(NavigationContainer, {
        children: [navigationData.map(function (navigation, index) {
          var _navigationData2;

          return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
            children: [index !== 0 && /*#__PURE__*/jsxRuntime.jsx(SvgDoubleArrowRight, {
              style: {
                margin: '3px 3px 0'
              }
            }), /*#__PURE__*/jsxRuntime.jsx(NavigationText, {
              isLast: (navigationData === null || navigationData === void 0 ? void 0 : (_navigationData2 = navigationData[(navigationData === null || navigationData === void 0 ? void 0 : navigationData.length) - 1]) === null || _navigationData2 === void 0 ? void 0 : _navigationData2.id) === (navigation === null || navigation === void 0 ? void 0 : navigation.id),
              onClick: function onClick() {
                return handleNavigationClick(navigation);
              },
              children: navigation === null || navigation === void 0 ? void 0 : navigation.name
            })]
          });
        }), /*#__PURE__*/jsxRuntime.jsx(components.Button, {
          ghost: true,
          className: "close-button",
          onClick: function onClick() {
            return setShowPopover(false);
          },
          children: /*#__PURE__*/jsxRuntime.jsx(SvgCloseButton, {})
        })]
      }), popoverBody()]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(Container$2, {
    children: /*#__PURE__*/jsxRuntime.jsx(components.Popover, {
      visible: showPopover,
      interactive: true,
      theme: "light-border",
      animation: "perspective",
      content: content(),
      onOuterClick: function onOuterClick() {
        return setShowPopover(false);
      },
      children: /*#__PURE__*/jsxRuntime.jsx(components.Button, {
        isSelected: showPopover,
        className: "popover-button",
        ghost: true,
        size: "sm",
        onClick: function onClick() {
          return togglePopover();
        },
        children: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
          children: [/*#__PURE__*/jsxRuntime.jsx(ValueText, {
            isPlaceHolder: !value && placeholder,
            children: value ? /*#__PURE__*/jsxRuntime.jsxs(CollectionValueButton, {
              children: [value, /*#__PURE__*/jsxRuntime.jsx(RemoveCollection, {
                children: /*#__PURE__*/jsxRuntime.jsx(SvgCloseButton, {
                  onClick: function onClick(e) {
                    return handleRemoveCollection(e);
                  },
                  style: {
                    fontSize: '14px'
                  }
                })
              })]
            }) : placeholder
          }), /*#__PURE__*/jsxRuntime.jsx(SvgDropdown, {})]
        })
      })
    })
  });
};

var _excluded$3 = ["previousValue", "itemKey", "name", "value", "control", "placeholder"];

var SelectController = function SelectController(_ref) {
  var previousValue = _ref.previousValue,
      itemKey = _ref.itemKey,
      name = _ref.name,
      value = _ref.value,
      control = _ref.control,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties$h(_ref, _excluded$3);

  return /*#__PURE__*/jsxRuntime.jsx(hooks.Controller, {
    control: control,
    name: name,
    defaultValue: value,
    rules: rest.rules,
    shouldUnregister: rest.shouldUnregister,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
          _onChange = _ref2$field.onChange,
          onBlur = _ref2$field.onBlur,
          newValue = _ref2$field.value;
      return /*#__PURE__*/React.createElement(CollectionPopover, _objectSpread2(_objectSpread2({}, rest), {}, {
        placeholder: placeholder,
        key: itemKey,
        onChange: function onChange(val, obj) {
          _onChange(val, obj);

          if (rest.handleChange) {
            rest.handleChange(obj, name);
          }
        },
        previousValue: previousValue,
        value: newValue || value,
        onBlur: onBlur
      }));
    }
  }, itemKey || name);
};

var getField = function getField(type) {
  var mapping = {
    select: Select$1,
    number: Input__default["default"],
    text: Input__default["default"],
    "switch": SwitchControled,
    tagSelect: TagSelectControled,
    toggle: ToggleControled,
    singleDatePicker: SingleDatePickerControlled,
    password: PasswordInput$1,
    asyncSelect: SelectController$1,
    nestedSelection: SelectController,
    textarea: components.TextArea
  };
  var element = mapping[type];

  if (!element) {
    // TODO remove this, and throw an error
    return /*#__PURE__*/jsxRuntime.jsx("div", {
      children: "No element found"
    });
  }

  return element;
};

reactGridSystem.setConfiguration({
  gutterWidth: 16
});
var Grid = {
  Container: reactGridSystem.Container,
  Row: reactGridSystem.Row,
  Col: reactGridSystem.Col,
  Visible: reactGridSystem.Visible,
  Hidden: reactGridSystem.Hidden,
  ScreenClassRender: reactGridSystem.ScreenClassRender,
  useScreenClass: reactGridSystem.useScreenClass,
  ScreenClassProvider: reactGridSystem.ScreenClassProvider
};

var _templateObject$8, _templateObject2$4;
var GridRow = Grid.Row,
    GridCol = Grid.Col;
var Row = styled__default["default"](GridRow)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n\t&.new-isolated {\n\t\t.ui-input-group {\n\t\t\theight: 32px;\n\t\t\tborder: 1px solid #E0E0E0;\n\t\t}\n\n\t\t.ui-input {\n\t\t\t&::placeholder {\n\t\t\t\tcolor: #828282;\n\t\t\t}\n\t\t\tfont-size: 12px;\n\t\t}\n\n\t\t.select__control {\n\t\t\tmin-height: 32px;\n\t\t\tfont-size: 12px;\n\t\t\tborder: 1px solid #E0E0E0;\n\t\t}\n\n\t\t.select__placeholder {\n\t\t\tline-height: 1.4;\n\t\t\tfont-size: 12px;\n\t\t}\n\n\t\ttextarea {\n\t\t\tpadding-left: 12px;\n\t\t\tpadding-right: 12px;\n\t\t\tfont-size: 12px;\n\t\t\tresize: none;\n\t\t\tline-height: 14px;\n\t\t}\n\n\t\t.ui-form-error-text {\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 18px;\n\t\t}\n\t}\n\n"])));
var Col = styled__default["default"](GridCol)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n\t&.new-isolated {\n\t\t&.error {\n\t\t\t.select__control {\n\t\t\t\tborder-color: #DE350B;\n\t\t\t}\n\t\t}\n\t}\n\n"])));

var _g, _defs;

var _excluded$2 = ["title", "titleId"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SvgIcDelete(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#ic-delete_svg__clip0)",
    fill: "#000"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.89 4.138h2.228v.375h.805v-.427a.753.753 0 00-.752-.753H8.837a.753.753 0 00-.752.753v.427h.805v-.375zM13.781 7.702H6.227a.354.354 0 00-.354.383l.632 7.81a.839.839 0 00.836.772h5.326c.437 0 .8-.336.836-.772l.632-7.81a.354.354 0 00-.354-.383zm-5.725 8.132H8.03a.402.402 0 01-.402-.377l-.395-6.412a.402.402 0 01.803-.05l.396 6.412a.402.402 0 01-.377.427zm2.355-.402a.402.402 0 01-.805 0V9.02a.402.402 0 11.805 0v6.412zm2.363-6.388l-.377 6.412a.402.402 0 11-.804-.048l.378-6.411a.402.402 0 11.803.047zM15.173 6.46l-.264-.792a.512.512 0 00-.485-.35h-8.84c-.22 0-.415.14-.485.35l-.264.792a.332.332 0 00.315.437h9.708a.332.332 0 00.315-.437z"
  }))), _defs || (_defs = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "ic-delete_svg__clip0"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    transform: "translate(3.333 3.333)",
    d: "M0 0h13.333v13.333H0z"
  })))));
}

var _templateObject$7, _templateObject2$3, _templateObject3$2;
var AddMore = styled__default["default"].div(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n    cursor: pointer;\n    font-size: 12px;\n    line-height: 15px;\n    text-decoration-line: underline;\n    color: #356EFD;\n    margin: 0 0 8px 8px;\n"])));
styled__default["default"].div(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n    margin: 8px 0;\n"])));
var Label$1 = styled__default["default"].div(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n    margin: 8px 0;\n"])));

var _excluded$1 = ["span", "showDivider", "lowerlabel", "label", "disableButtons", "show"];

var Child = function Child(_ref) {
  var controls = _ref.controls,
      control = _ref.control,
      register = _ref.register,
      field = _ref.field,
      index = _ref.index,
      name = _ref.name,
      remove = _ref.remove;
      _ref.error;
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    className: "form-fieldArray-".concat(name, "-").concat(index),
    children: /*#__PURE__*/jsxRuntime.jsxs(Row, {
      style: {
        margin: 0,
        display: 'flex',
        alignItems: 'flex-end'
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(Col, {
        xs: 11,
        sm: 11,
        md: 11,
        lg: 11,
        xl: 11,
        children: /*#__PURE__*/jsxRuntime.jsx(Row, {
          children: controls === null || controls === void 0 ? void 0 : controls.map(function (controlItem) {
            var Element = getField(controlItem.type);

            var _controlItem$span = controlItem.span,
                span = _controlItem$span === void 0 ? 6 : _controlItem$span;
                controlItem.showDivider;
                controlItem.lowerlabel;
                var label = controlItem.label;
                controlItem.disableButtons;
                var _controlItem$show = controlItem.show,
                show = _controlItem$show === void 0 ? true : _controlItem$show;
                _objectWithoutProperties$h(controlItem, _excluded$1);

            if (controlItem.watch) {
              return show ? /*#__PURE__*/jsxRuntime.jsxs(Col, {
                xs: 12,
                sm: 12,
                md: span,
                lg: span,
                style: {
                  padding: 8
                },
                children: [label && /*#__PURE__*/jsxRuntime.jsx(Label$1, {
                  children: label
                }), /*#__PURE__*/React.createElement(Element, _objectSpread2(_objectSpread2({}, controlItem), {}, {
                  key: "".concat(name, ".").concat(index, ".").concat(controlItem.name),
                  control: control,
                  name: "".concat(name, ".").concat(index, ".").concat(controlItem.name),
                  value: field[controlItem.name]
                }))]
              }, field.id) : /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {});
            }

            return show ? /*#__PURE__*/jsxRuntime.jsxs(Col, {
              xs: 12,
              sm: 12,
              md: span,
              lg: span,
              style: {
                padding: 8
              },
              children: [label && /*#__PURE__*/jsxRuntime.jsx(Label$1, {
                children: label
              }), /*#__PURE__*/React.createElement(Element, _objectSpread2(_objectSpread2(_objectSpread2({}, controlItem), {}, {
                key: "".concat(name, ".").concat(index, ".").concat(controlItem.name) // important to include key with field's id

              }, register("".concat(name, ".").concat(index, ".").concat(controlItem.name), _objectSpread2({}, controlItem.rules || {}))), {}, {
                defaultValue: field[controlItem.name]
              }))]
            }, field.id) : /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {});
          })
        })
      }), index > 0 && /*#__PURE__*/jsxRuntime.jsx(Col, {
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        style: {
          padding: 2
        },
        children: /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
          display: "block",
          style: {
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return remove(index, 1);
          },
          children: /*#__PURE__*/jsxRuntime.jsx(SvgIcDelete, {
            style: {
              height: 24,
              width: 24
            }
          })
        })
      })]
    })
  }, field.id);
};

var ChildFormat = function ChildFormat(_ref) {
  var name = _ref.name,
      control = _ref.control,
      register = _ref.register,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? [] : _ref$controls,
      error = _ref.error;

  var _useFieldArray = hooks.useFieldArray({
    control: control,
    name: name
  }),
      fields = _useFieldArray.fields,
      append = _useFieldArray.append,
      remove = _useFieldArray.remove; // const childEmptyValues = controls?.reduce((pv, cv) => ({
  // 	...pv,
  // 	[cv.name]: cv?.value || '',
  // }), {});


  var childEmptyValues = {};
  controls.forEach(function (controlItem) {
    childEmptyValues[controlItem.name] = controlItem.value || '';
  });
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    className: "form-fieldArray-".concat(name),
    children: [fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) {
      return /*#__PURE__*/jsxRuntime.jsx(Child, {
        field: field,
        index: index,
        register: register,
        control: control,
        controls: controls,
        name: name,
        remove: remove,
        error: error === null || error === void 0 ? void 0 : error[index]
      }, field.id);
    }), /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      children: /*#__PURE__*/jsxRuntime.jsx(AddMore, {
        onClick: function onClick() {
          return append(childEmptyValues);
        },
        children: "+ Add another"
      })
    })]
  });
};

var _templateObject$6, _templateObject2$2, _templateObject3$1;
var ErrorMessage = styled__default["default"].div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n    color: red;\n    font-size: 12px;\n"])));
var SpaceBetween = styled__default["default"].div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n\t&.row {\n\t\tlayout: flex row space-between center;\n\t\tpadding: 3px 6px;\n\t\t&:hover {\n\t\t\tbackground: #f2f2f2;\n\t\t\t&.error {\n\t\t\t\tbackground: #fef9f9;\n\t\t\t\tborder: 1px solid #cb6464;\n\t\t\t}\n\t\t}\n\t\t&.error {\n\t\t\tbackground: #fef9f9;\n\t\t\tborder: 1px solid #cb6464;\n\t\t}\n\t}\n\t&.row.no-padding{\n\t\tpadding: 3px 0px;\n\t}\n"])));
var Label = styled__default["default"].label(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n\tmargin-bottom: _s2;\n\tdisplay: inline-block;\n\tfont-size: 14px;\n\tcolor: #393F70;\n\tline-height: 20px;\n\tfont-weight: normal;\n\t&.bold {\n\t\tfont-weight: bold;\n\t\tline-height: 1.43;\n\t\tmargin-bottom: 0px;\n\t}\n\n\t&.row {\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 12px;\n\t\tline-height: 14px;\n\t\t/* identical to box height */\n\t\tmargin-bottom: 0px;\n\t\tletter-spacing: 0.02em;\n\t\tcolor: #4f4f4f;\n\t\t&.bordered {\n\t\t\tpadding: 0px 28px;\n\t\t\tmax-width: 100%;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t}\n\n\t&.new {\n\t\tfont-size: 12px;\n\t\tfont-weight: 700;\n\t\tcolor: #4F4F4F;\n\t}\n\t&.big {\n\t\tfont-weight: bold;\n\t\tfont-size: 12px;\n\t\tcolor: #000000;\n\t\tmargin-bottom: 8px;\n\t\t/* text-transform: uppercase; */\n\t}\n"])));

var _excluded = ["span", "show", "spanResponsive", "showDivider", "lowerlabel", "label", "disableButtons"];

var Form = function Form(_ref) {
  var controls = _ref.controls,
      fields = _ref.fields,
      errors = _ref.errors,
      themeType = _ref.themeType;
  var isHorizontal = (themeType || '').includes('row');
  return /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
    marginLeft: -8,
    marginRight: -8,
    display: "block",
    flex: 1,
    children: /*#__PURE__*/jsxRuntime.jsx(Row, {
      style: {
        margin: 0
      },
      children: controls === null || controls === void 0 ? void 0 : controls.map(function (control) {
        var _errors$control$name;

        var Element = getField(fields[control.name].type || control.type);

        var _fields$control$name = fields[control.name],
            _fields$control$name$ = _fields$control$name.span,
            span = _fields$control$name$ === void 0 ? 6 : _fields$control$name$,
            _fields$control$name$2 = _fields$control$name.show,
            show = _fields$control$name$2 === void 0 ? true : _fields$control$name$2;
            _fields$control$name.spanResponsive;
            _fields$control$name.showDivider;
            _fields$control$name.lowerlabel;
            var label = _fields$control$name.label;
            _fields$control$name.disableButtons;
            _objectWithoutProperties$h(_fields$control$name, _excluded);

        if (control.type === 'fieldArray') {
          return show ? /*#__PURE__*/jsxRuntime.jsxs(Col, {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 12,
            style: {
              padding: 8
            },
            children: [label && /*#__PURE__*/jsxRuntime.jsx(Label, {
              children: label
            }), /*#__PURE__*/jsxRuntime.jsx(ChildFormat, _objectSpread2(_objectSpread2({}, fields[control.name]), {}, {
              error: errors[control.name]
            }))]
          }, 'regular_1'.concat("_", control.name)) : /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {});
        }

        return show ? /*#__PURE__*/jsxRuntime.jsx(Col, {
          xs: 12,
          sm: 12,
          md: isHorizontal ? 12 : 6,
          lg: isHorizontal ? 12 : span,
          style: {
            padding: 8
          },
          children: /*#__PURE__*/jsxRuntime.jsxs(SpaceBetween, {
            children: [label && /*#__PURE__*/jsxRuntime.jsx(Label, {
              children: label
            }), /*#__PURE__*/jsxRuntime.jsx(Element, _objectSpread2(_objectSpread2({}, fields[control.name]), {}, {
              error: errors[control.name]
            })), errors[control.name] ? /*#__PURE__*/jsxRuntime.jsx(ErrorMessage, {
              children: errors === null || errors === void 0 ? void 0 : (_errors$control$name = errors[control.name]) === null || _errors$control$name === void 0 ? void 0 : _errors$control$name.message
            }) : null]
          })
        }, 'regular_1'.concat("_", control.name)) : /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {});
      })
    })
  });
};

var _templateObject$5;
var ThemeContainer = styled__default["default"].div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n    background-color: #ffffff;\n    padding: 12px 16px;\n    border-radius: 8px;\n    width: fit-content;\n\n    .core-ui-radio-root {\n    margin:10px\n    }\n"])));

var ThemeSelector = function ThemeSelector(_ref) {
  var _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? 'purples' : _ref$themeType,
      setThemeType = _ref.setThemeType;

  var _useState = React.useState(themeType),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var handleChange = function handleChange(value) {
    setChecked(value);
    setThemeType(value);
  };

  return /*#__PURE__*/jsxRuntime.jsxs(ThemeContainer, {
    children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
      bold: true,
      size: 12,
      marginBottom: 8,
      children: "Select theme"
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        children: /*#__PURE__*/jsxRuntime.jsx(admin.Radio, {
          className: "primary lg",
          label: "Winter",
          checked: checked === 'purple_blue',
          onChange: function onChange() {
            return handleChange('purple_blue');
          }
        })
      }), /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        marginLeft: "16px",
        children: /*#__PURE__*/jsxRuntime.jsx(admin.Radio, {
          className: "primary lg",
          label: "Monsoon",
          checked: checked === 'green_blue',
          onChange: function onChange() {
            return handleChange('green_blue');
          }
        })
      })]
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        children: /*#__PURE__*/jsxRuntime.jsx(admin.Radio, {
          className: "primary lg",
          label: "Spring",
          checked: checked === 'set3',
          onChange: function onChange() {
            return handleChange('set3');
          }
        })
      }), /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        marginLeft: "16px",
        children: /*#__PURE__*/jsxRuntime.jsx(admin.Radio, {
          className: "primary lg",
          label: "Autumn",
          checked: checked === 'red_grey',
          onChange: function onChange() {
            return handleChange('red_grey');
          }
        })
      })]
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        children: /*#__PURE__*/jsxRuntime.jsx(admin.Radio, {
          className: "primary lg",
          label: "Summer",
          checked: checked === 'yellow_orange_red',
          onChange: function onChange() {
            return handleChange('yellow_orange_red');
          }
        })
      }), /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        marginLeft: "1px",
        children: /*#__PURE__*/jsxRuntime.jsx(admin.Radio, {
          className: "primary lg",
          label: "Default",
          checked: checked === 'purples',
          onChange: function onChange() {
            return handleChange('purples');
          }
        })
      })]
    })]
  });
};

var controls$1 = [{
  name: 'name',
  label: 'Dashboard Name',
  placeholder: 'Enter here...',
  type: 'text',
  watch: false,
  span: 4,
  rules: {
    required: 'Field is required'
  }
}, {
  name: 'description',
  label: 'Description',
  placeholder: 'Enter here...',
  type: 'text',
  watch: false,
  span: 4,
  rules: {
    required: 'Field is required'
  }
}, {
  name: 'collection_id',
  label: 'Collection',
  defaultOptions: true,
  caret: true,
  span: 4,
  watch: true,
  scope: 'analytics',
  type: 'nestedSelection',
  optionsListKey: 'collections',
  valueKey: 'id',
  labelKey: 'name',
  placeholder: 'Search...'
}];

var getDashboardBasicControls = function getDashboardBasicControls() {
  var dashboardData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (Object.keys(dashboardData).length === 0) return controls$1;
  return controls$1 === null || controls$1 === void 0 ? void 0 : controls$1.map(function (control) {
    var _control$name = control.name,
        name = _control$name === void 0 ? '' : _control$name;

    if (name !== 'collection_id') {
      return _objectSpread2(_objectSpread2({}, control), {}, {
        value: (dashboardData === null || dashboardData === void 0 ? void 0 : dashboardData[name]) || undefined
      });
    }

    return _objectSpread2(_objectSpread2({}, control), {}, {
      previousValue: (dashboardData === null || dashboardData === void 0 ? void 0 : dashboardData.analytics_collection_name) || null
    });
  });
};

var _templateObject$4, _templateObject2$1;
var FormContainer = styled__default["default"].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n    background-color: #ffffff;\n    padding: 12px 16px;\n    border-radius: 8px;\n    width: 100%;\n    margin: 0 0 0 8px;\n"])));
styled__default["default"].div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n    margin: 16px 0;\n"])));

var _templateObject$3;
var SaveDashboardButtonContainer = styled__default["default"].div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n\twidth           : calc(100% - 110px);\n\tposition        : fixed;\n\tbottom          :0;\n\tright:32px;\n\tleft:92px;\n\tpadding         : 24px 36px;\n\tbox-sizing       : border-box;\n\tdisplay         : flex;\n\tjustify-content  : space-between;\n\talign-items      : center;\n\tbox-shadow       : 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);\n\tborder-radius    : 8px 8px 0 0;\n\tz-index          : 1;\n\tbackground-color : #F5FAFE;\n\tborder          : 1.5px solid #356EFD;\n\n\t@media (max-width: 1165px) {\n\t\twidth           : calc(100% - 16px);\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: 8px;\n\t}\n"])));

var SaveDashboardButton = function SaveDashboardButton(_ref) {
  var _ref$dashboardMode = _ref.dashboardMode,
      dashboardMode = _ref$dashboardMode === void 0 ? 'view' : _ref$dashboardMode,
      _ref$isDashboardEdite = _ref.isDashboardEdited,
      isDashboardEdited = _ref$isDashboardEdite === void 0 ? 'false' : _ref$isDashboardEdite,
      _ref$handleClickClose = _ref.handleClickClose,
      handleClickClose = _ref$handleClickClose === void 0 ? function () {} : _ref$handleClickClose,
      _ref$handleSubmit = _ref.handleSubmit,
      handleSubmit = _ref$handleSubmit === void 0 ? function () {} : _ref$handleSubmit,
      _ref$handleFormSubmit = _ref.handleFormSubmit,
      handleFormSubmit = _ref$handleFormSubmit === void 0 ? function () {} : _ref$handleFormSubmit,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? function () {} : _ref$onError,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? 'false' : _ref$loading;
  return /*#__PURE__*/jsxRuntime.jsxs(SaveDashboardButtonContainer, {
    children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      children: dashboardMode === 'edit' ? /*#__PURE__*/jsxRuntime.jsx(components.Text, {
        size: 14,
        children: "In case of any modifications on the dashboards, request you to please click on update dashboard button."
      }) : null
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      style: {
        gap: '8px'
      },
      children: [dashboardMode === 'edit' ? /*#__PURE__*/jsxRuntime.jsx(Button, {
        className: "primary sm",
        onClick: handleClickClose,
        children: "Cancel"
      }) : null, /*#__PURE__*/jsxRuntime.jsxs(Button, {
        className: "primary sm",
        onClick: handleSubmit(handleFormSubmit, onError),
        disabled: dashboardMode === 'edit' && (loading || !isDashboardEdited),
        children: [dashboardMode === 'edit' ? 'Update' : 'Create', " Dashboard"]
      })]
    })]
  });
};

var UpdateDashboard = function UpdateDashboard(_ref) {
  var _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? '' : _ref$themeType,
      _ref$setThemeType = _ref.setThemeType,
      setThemeType = _ref$setThemeType === void 0 ? function () {} : _ref$setThemeType,
      _ref$dashboardLayout = _ref.dashboardLayout,
      dashboardLayout = _ref$dashboardLayout === void 0 ? {} : _ref$dashboardLayout,
      _ref$dashboardData = _ref.dashboardData,
      dashboardData = _ref$dashboardData === void 0 ? {} : _ref$dashboardData,
      _ref$dashboardMode = _ref.dashboardMode,
      dashboardMode = _ref$dashboardMode === void 0 ? 'view' : _ref$dashboardMode,
      _ref$setDashboardMode = _ref.setDashboardMode,
      setDashboardMode = _ref$setDashboardMode === void 0 ? function () {} : _ref$setDashboardMode,
      _ref$widgetsMappingDa = _ref.widgetsMappingData,
      widgetsMappingData = _ref$widgetsMappingDa === void 0 ? [] : _ref$widgetsMappingDa,
      _ref$isDashboardEdite = _ref.isDashboardEdited,
      isDashboardEdited = _ref$isDashboardEdite === void 0 ? false : _ref$isDashboardEdite,
      _ref$setIsDashboardEd = _ref.setIsDashboardEdited,
      setIsDashboardEdited = _ref$setIsDashboardEd === void 0 ? function () {} : _ref$setIsDashboardEd,
      _ref$reloadOnUpdate = _ref.reloadOnUpdate,
      reloadOnUpdate = _ref$reloadOnUpdate === void 0 ? false : _ref$reloadOnUpdate,
      _ref$setReloadOnUpdat = _ref.setReloadOnUpdate,
      setReloadOnUpdate = _ref$setReloadOnUpdat === void 0 ? function () {} : _ref$setReloadOnUpdat;

  // const router = useRouter();
  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showCancelUpdateConfirmationModal = _useState6[0],
      setShowCancelUpdateConfirmationModal = _useState6[1];

  var _ref2 = dashboardMode === 'edit' ? API.UPDATE_ANALYTICS_DASHBOARD : API.CREATE_ANALYTICS_DASHBOARD,
      apiMethod = _ref2.apiMethod,
      apiScope = _ref2.apiScope,
      apiName = _ref2.apiName;

  var saveDashboardAPI = useRequest(apiMethod, false, apiScope)(apiName);
  var controls = React.useMemo(function () {
    return getDashboardBasicControls(dashboardData);
  }, [dashboardData]);

  var _useFormCogo = hooks.useFormCogo(controls),
      fields = _useFormCogo.fields,
      handleSubmit = _useFormCogo.handleSubmit,
      watch = _useFormCogo.watch,
      setValues = _useFormCogo.setValues;

  React.useEffect(function () {
    if (dashboardData !== null && dashboardData !== void 0 && dashboardData.analytics_collection_id) {
      setValues({
        collection_id: (dashboardData === null || dashboardData === void 0 ? void 0 : dashboardData.analytics_collection_id) || null
      });
    }
  }, []);
  React.useEffect(function () {
    var subscription = watch(function () {
      if (dashboardMode === 'edit' && !isDashboardEdited) {
        setIsDashboardEdited(true);
      }
    });
    return function () {
      return subscription.unsubscribe();
    };
  }, [watch]);
  React.useEffect(function () {
    if (reloadOnUpdate) setReloadOnUpdate(false);
  }, [reloadOnUpdate]);

  var handleClickClose = function handleClickClose() {
    return setShowCancelUpdateConfirmationModal(true);
  };

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(formData) {
      var _dashboardLayout$lg, _ref4;

      var widgetsInLayout, removedWidgetsFromDashboard, removedWidgets, payload, response, hasError, _response$data, message, _message, _error, _error$data, _message2;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (formData) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLoading(true);
              widgetsInLayout = (dashboardLayout === null || dashboardLayout === void 0 ? void 0 : (_dashboardLayout$lg = dashboardLayout.lg) === null || _dashboardLayout$lg === void 0 ? void 0 : _dashboardLayout$lg.map(function (item) {
                return {
                  analytics_widget_id: item === null || item === void 0 ? void 0 : item.i,
                  status: 'active',
                  position: {
                    x: item === null || item === void 0 ? void 0 : item.x,
                    y: item === null || item === void 0 ? void 0 : item.y,
                    w: (item === null || item === void 0 ? void 0 : item.w) < 6 ? 6 : item === null || item === void 0 ? void 0 : item.w,
                    h: (item === null || item === void 0 ? void 0 : item.h) < 8 ? 8 : item === null || item === void 0 ? void 0 : item.h,
                    minW: 6,
                    minH: 8
                  }
                };
              })) || [];
              removedWidgetsFromDashboard = ((_ref4 = widgetsMappingData || []) === null || _ref4 === void 0 ? void 0 : _ref4.filter(function (_ref5) {
                var id = _ref5.id;
                var widgetIds = (widgetsInLayout === null || widgetsInLayout === void 0 ? void 0 : widgetsInLayout.map(function (item) {
                  return item === null || item === void 0 ? void 0 : item.analytics_widget_id;
                })) || [];
                return !widgetIds.includes(id);
              })) || [];
              removedWidgets = removedWidgetsFromDashboard.map(function (item) {
                var _item$widget_data;

                return {
                  analytics_widget_id: item === null || item === void 0 ? void 0 : item.id,
                  status: 'inactive',
                  position: _objectSpread2({}, (item === null || item === void 0 ? void 0 : (_item$widget_data = item.widget_data) === null || _item$widget_data === void 0 ? void 0 : _item$widget_data.position) || {})
                };
              }) || [];
              payload = _objectSpread2(_objectSpread2({}, formData), {}, {
                theme_type: themeType,
                dashboard_widget_mapping: [].concat(_toConsumableArray(widgetsInLayout || []), _toConsumableArray(removedWidgets || []))
              });
              if (dashboardData) payload.id = dashboardData.id;
              _context.prev = 8;
              console.log('payload : ', payload);
              _context.next = 12;
              return saveDashboardAPI.trigger({
                data: payload
              });

            case 12:
              response = _context.sent;
              hasError = response.hasError;

              if (hasError) {
                message = (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Something went wrong...';
                components.toast.error(message);
              } else {
                _message = "Dashboard ".concat(dashboardData.length ? 'updated' : 'saved', " successfully...");
                components.toast.success(_message);

                if (dashboardData) {
                  setDashboardMode('view');
                  setReloadOnUpdate(true);
                } // else {
                // 	router.push({ pathname: ROUTER_PATHNAME.DASHBOARDS });
                // }

              }

              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](8);
              _message2 = ((_error = _objectSpread2({}, _context.t0)) === null || _error === void 0 ? void 0 : (_error$data = _error.data) === null || _error$data === void 0 ? void 0 : _error$data.message) || 'Something went wrong...';
              components.toast.error(_message2);

            case 21:
              _context.prev = 21;
              setLoading(false);
              return _context.finish(21);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 17, 21, 24]]);
    }));

    return function handleFormSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onError = function onError(errs) {
    return setErrors(errs);
  };

  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      flex: 1,
      children: [/*#__PURE__*/jsxRuntime.jsx(ThemeSelector, {
        themeType: themeType,
        setThemeType: setThemeType
      }), /*#__PURE__*/jsxRuntime.jsxs(FormContainer, {
        children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
          bold: true,
          size: 12,
          marginBottom: 8,
          children: "Dashboard Details"
        }), /*#__PURE__*/jsxRuntime.jsx(Form, {
          controls: controls,
          fields: fields,
          errors: errors
        })]
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(SaveDashboardButton, {
      dashboardMode: dashboardMode,
      isDashboardEdited: isDashboardEdited,
      handleClickClose: handleClickClose,
      handleSubmit: handleSubmit,
      handleFormSubmit: handleFormSubmit,
      onError: onError,
      loading: loading,
      dashboardData: dashboardData
    }), /*#__PURE__*/jsxRuntime.jsx(CancelUpdateDashboardConfirmationModal, {
      showCancelUpdateConfirmationModal: showCancelUpdateConfirmationModal,
      setShowCancelUpdateConfirmationModal: setShowCancelUpdateConfirmationModal,
      setDashboardMode: setDashboardMode,
      reloadOnUpdate: reloadOnUpdate,
      setReloadOnUpdate: setReloadOnUpdate
    })]
  });
};

var _templateObject$2;
var StyledTable = styled__default["default"](components.Table)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n\tbackground-color: #ffffff;\n\tborder-radius: 5px;\n\toverflow: auto;\n\t\n\t.ui-table {\n\t\twhite-space: nowrap;\n\t\t.ui-table-head-cell {\n\t\t\t/* background-color: #333333 !important; */\n\t\t\tmin-width: 190px;\n\t\t\t/* color: white; */\n\t\t\t\n\t\t}\n\t\t.ui-table-body-cell {\n\t\t\tbackground-color: #ffffff !important;\n\t\t\tbackground: #ffffff !important;\n            min-width: 190px;\n\t\t}\n\t\t.ui-table-body-row:hover {\n\t\t\t.ui-table-body-cell {\n\t\t\t\tbackground-color: #F5FAFE !important;\n\t\t\t\tbackground: #F5FAFE !important;\n\t\t\t}\n\t\t}\n\t\t.selected {\n\t\t\t.ui-table-body-cell {\n\t\t\t\tbackground-color: #F5FAFE !important;\n\t\t\t\tbackground: #F5FAFE !important;\n\t\t\t}\n\t\t}\n\t}\n"])));

var usePreparedColumns = function usePreparedColumns(_ref) {
  var columns = _ref.columns,
      loading = _ref.loading;
  var newColums = React.useMemo(function () {
    if (loading) {
      return columns === null || columns === void 0 ? void 0 : columns.map(function (col) {
        return _objectSpread2(_objectSpread2({}, col), {}, {
          accessor: function accessor() {
            return /*#__PURE__*/jsxRuntime.jsx(components.Skeleton, {
              height: 16,
              speed: 1,
              children: /*#__PURE__*/jsxRuntime.jsx("rect", {
                x: "0",
                y: "0",
                rx: "4",
                ry: "4",
                width: "80",
                height: "16"
              })
            });
          }
        });
      });
    }

    return columns;
  }, [loading, columns]);
  return {
    columns: newColums
  };
};

var usePreparedData = function usePreparedData(_ref) {
  var loading = _ref.loading,
      data = _ref.data;
  var newData = React.useMemo(function () {
    if (loading) {
      return new Array(3).fill({});
    }

    return data;
  }, [data, loading]);
  return {
    data: newData
  };
};

var TableContainer = function TableContainer(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'auto' : _ref$width,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$showPaginationOn = _ref.showPaginationOnLessData,
      showPaginationOnLessData = _ref$showPaginationOn === void 0 ? false : _ref$showPaginationOn,
      _ref$columns = _ref.columns,
      propColumns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$rows = _ref.rows,
      propData = _ref$rows === void 0 ? [] : _ref$rows,
      _ref$showPagination = _ref.showPagination,
      showPagination = _ref$showPagination === void 0 ? true : _ref$showPagination,
      _ref$paginationData = _ref.paginationData,
      paginationData = _ref$paginationData === void 0 ? {} : _ref$paginationData,
      _ref$setParams = _ref.setParams,
      setParams = _ref$setParams === void 0 ? function () {} : _ref$setParams;

  var _usePreparedColumns = usePreparedColumns({
    loading: loading,
    columns: propColumns
  }),
      columns = _usePreparedColumns.columns;

  var _usePreparedData = usePreparedData({
    loading: loading,
    data: propData
  }),
      data = _usePreparedData.data;

  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    height: "calc(100% - 22px)",
    display: "block",
    style: {
      width: width,
      overflow: 'auto',
      position: 'relative'
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(Pagination, {
      showPaginationOnLessData: showPaginationOnLessData,
      showPagination: showPagination,
      paginationData: paginationData,
      setParams: setParams,
      dataCount: data.length
    }), /*#__PURE__*/jsxRuntime.jsx(StyledTable, {
      style: {
        height: '100%',
        margin: 0
      },
      loading: loading,
      columns: columns,
      data: data
    })]
  });
};

var TableContainer$1 = /*#__PURE__*/React.memo(TableContainer);

var _templateObject$1;
var TableBodyContainer = styled__default["default"].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n    max-height:300px;\n    overflow:scroll;\n"])));

var WidgetSelector = function WidgetSelector(_ref) {
  var _listWidgetsAPI$data, _listWidgetsAPI$data2, _listWidgetsAPI$data3, _listWidgetsAPI$data4, _listWidgetsAPI$data5;

  var widgetsMappingData = _ref.widgetsMappingData,
      setShowImport = _ref.setShowImport,
      widgets = _ref.widgets,
      setWidgets = _ref.setWidgets;

  var _useState = React.useState({
    defaultPaginationParams: defaultPaginationParams,
    page_limit: 10,
    collection_data_required: true,
    filters: {
      q: ''
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _API$LIST_ANALYTICS_W = API.LIST_ANALYTICS_WIDGETS,
      apiMethod = _API$LIST_ANALYTICS_W.apiMethod,
      apiScope = _API$LIST_ANALYTICS_W.apiScope,
      apiName = _API$LIST_ANALYTICS_W.apiName;
  var listWidgetsAPI = useRequest(apiMethod, true, apiScope)(apiName, {
    params: params
  });
  var loading = listWidgetsAPI === null || listWidgetsAPI === void 0 ? void 0 : listWidgetsAPI.loading;
  var data = (listWidgetsAPI === null || listWidgetsAPI === void 0 ? void 0 : (_listWidgetsAPI$data = listWidgetsAPI.data) === null || _listWidgetsAPI$data === void 0 ? void 0 : _listWidgetsAPI$data.list) || [];
  var filteredData = data.filter(function (widgetData) {
    return !widgets.some(function (_ref2) {
      var id = _ref2.id;
      return id === (widgetData === null || widgetData === void 0 ? void 0 : widgetData.id);
    });
  });
  React.useEffect(function () {
    listWidgetsAPI.trigger({
      payload: _objectSpread2({}, params)
    });
  }, [params]);

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedWidgets = _useState4[0],
      setSelectedWidgets = _useState4[1];

  var tableFormattedColumns = [{
    Header: '#',
    accessor: function accessor(item) {
      var _selectedWidgets$filt;

      var isChecked = (selectedWidgets === null || selectedWidgets === void 0 ? void 0 : (_selectedWidgets$filt = selectedWidgets.filter(function (wid) {
        return (wid === null || wid === void 0 ? void 0 : wid.id) === (item === null || item === void 0 ? void 0 : item.id);
      })) === null || _selectedWidgets$filt === void 0 ? void 0 : _selectedWidgets$filt.length) > 0;
      return /*#__PURE__*/jsxRuntime.jsx(components.Checkbox, {
        checked: isChecked,
        onChange: function onChange() {
          return handleChangeCheckboxToggle(item);
        }
      });
    },
    key: 'check'
  }, {
    Header: 'Name',
    accessor: 'name',
    key: 'name'
  }, {
    Header: 'Type',
    accessor: function accessor(item) {
      return utils$3.startCase(item === null || item === void 0 ? void 0 : item.widget_type);
    },
    key: 'widget_type'
  }, {
    Header: 'Collection',
    accessor: function accessor(item) {
      var _item$analytics_colle, _item$analytics_colle2;

      return utils$3.startCase(item === null || item === void 0 ? void 0 : (_item$analytics_colle = item.analytics_collections) === null || _item$analytics_colle === void 0 ? void 0 : (_item$analytics_colle2 = _item$analytics_colle[0]) === null || _item$analytics_colle2 === void 0 ? void 0 : _item$analytics_colle2.name);
    },
    key: 'collection'
  }, {
    Header: 'Status',
    accessor: function accessor(item) {
      return utils$3.startCase(item === null || item === void 0 ? void 0 : item.status);
    },
    key: 'status'
  }];
  var paginationData = {
    page: (listWidgetsAPI === null || listWidgetsAPI === void 0 ? void 0 : (_listWidgetsAPI$data2 = listWidgetsAPI.data) === null || _listWidgetsAPI$data2 === void 0 ? void 0 : _listWidgetsAPI$data2.page) || 0,
    page_limit: (listWidgetsAPI === null || listWidgetsAPI === void 0 ? void 0 : (_listWidgetsAPI$data3 = listWidgetsAPI.data) === null || _listWidgetsAPI$data3 === void 0 ? void 0 : _listWidgetsAPI$data3.page_limit) || 0,
    total: (listWidgetsAPI === null || listWidgetsAPI === void 0 ? void 0 : (_listWidgetsAPI$data4 = listWidgetsAPI.data) === null || _listWidgetsAPI$data4 === void 0 ? void 0 : _listWidgetsAPI$data4.total) || 0,
    total_count: (listWidgetsAPI === null || listWidgetsAPI === void 0 ? void 0 : (_listWidgetsAPI$data5 = listWidgetsAPI.data) === null || _listWidgetsAPI$data5 === void 0 ? void 0 : _listWidgetsAPI$data5.total_count) || 0
  };

  var handleChangeCheckboxToggle = function handleChangeCheckboxToggle(item) {
    var _selectedWidgets$filt2;

    var is_selected = (selectedWidgets === null || selectedWidgets === void 0 ? void 0 : (_selectedWidgets$filt2 = selectedWidgets.filter(function (wid) {
      return (wid === null || wid === void 0 ? void 0 : wid.id) === (item === null || item === void 0 ? void 0 : item.id);
    })) === null || _selectedWidgets$filt2 === void 0 ? void 0 : _selectedWidgets$filt2.length) > 0;

    if (is_selected) {
      var remove_selected = selectedWidgets === null || selectedWidgets === void 0 ? void 0 : selectedWidgets.filter(function (wid) {
        return (wid === null || wid === void 0 ? void 0 : wid.id) !== (item === null || item === void 0 ? void 0 : item.id);
      });
      setSelectedWidgets(remove_selected);
    }

    if (!is_selected) {
      setSelectedWidgets([].concat(_toConsumableArray(selectedWidgets), [{
        id: item === null || item === void 0 ? void 0 : item.id,
        widget_type: item === null || item === void 0 ? void 0 : item.widget_type,
        status: 'active',
        position: {
          x: 0,
          y: 0,
          w: 6,
          h: 8,
          minW: 6,
          minH: 8
        },
        collection_id: item === null || item === void 0 ? void 0 : item.collection_id,
        collection_name: item === null || item === void 0 ? void 0 : item.collection_name,
        data_source_id: item === null || item === void 0 ? void 0 : item.data_source_id,
        description: item === null || item === void 0 ? void 0 : item.description,
        name: item === null || item === void 0 ? void 0 : item.name,
        query_string: item === null || item === void 0 ? void 0 : item.query_string,
        query_variables: item === null || item === void 0 ? void 0 : item.query_variables
      }]));
    }
  };

  var handleClickImportWidgets = function handleClickImportWidgets() {
    setWidgets([].concat(_toConsumableArray(widgets), _toConsumableArray(selectedWidgets.reduce(function (pv, cv) {
      var widget = widgetsMappingData.find(function (_ref3) {
        var id = _ref3.analytics_widget_id;
        return id === cv.id;
      });
      ((cv === null || cv === void 0 ? void 0 : cv.widget_type) || '').toLowerCase();
      var position = {
        // w : widgetType in chartDefaultWidth ? chartDefaultWidth[widgetType] : 9,
        w: 6,
        h: 8,
        x: widgets.length % 2 === 0 ? 0 : 7,
        y: 0,
        minW: 6,
        minH: 8,
        i: cv === null || cv === void 0 ? void 0 : cv.id
      };

      if (widget) {
        var _widget$widget_data, _widget$widget_data$;

        position = _objectSpread2(_objectSpread2({}, (widget === null || widget === void 0 ? void 0 : (_widget$widget_data = widget.widget_data) === null || _widget$widget_data === void 0 ? void 0 : (_widget$widget_data$ = _widget$widget_data[0]) === null || _widget$widget_data$ === void 0 ? void 0 : _widget$widget_data$.position) || position), {}, {
          i: cv === null || cv === void 0 ? void 0 : cv.id
        });
      }

      return [].concat(_toConsumableArray(pv), [{
        id: cv === null || cv === void 0 ? void 0 : cv.id,
        type: cv === null || cv === void 0 ? void 0 : cv.widget_type,
        position: position
      }]);
    }, []))));
    setShowImport(false);
  };

  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    direction: "column",
    children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
      as: "h3",
      size: 18,
      bold: true,
      children: "Add Widgets"
    }), loading ? /*#__PURE__*/jsxRuntime.jsx(TableContainer$1, {
      height: "300px",
      loading: loading,
      columns: [{
        Header: '#',
        accessor: '',
        key: ''
      }],
      rows: [],
      showPagination: false
    }) : /*#__PURE__*/jsxRuntime.jsxs(TableBodyContainer, {
      children: [/*#__PURE__*/jsxRuntime.jsx(Pagination, {
        showPagination: true,
        showPaginationOnLessData: true,
        paginationData: paginationData,
        setParams: setParams,
        dataCount: data.length || 0
      }), /*#__PURE__*/jsxRuntime.jsx(TableContainer$1, {
        height: "400px",
        loading: loading,
        columns: tableFormattedColumns,
        rows: filteredData,
        showPagination: false
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      margin: "8px 0",
      justifyContent: "flex-end",
      children: /*#__PURE__*/jsxRuntime.jsx(admin.Button, {
        className: "primary sm",
        onClick: handleClickImportWidgets,
        disabled: !selectedWidgets.length,
        children: "Save"
      })
    })]
  });
};

var date_control = {
  type: 'singleDatePicker',
  watch: true,
  span: 4,
  rules: {
    required: 'Mandatory'
  },
  autocomplete: 'off'
};
var text_control = {
  type: 'text',
  watch: false,
  span: 4,
  rules: {
    required: 'Mandatory'
  },
  autocomplete: 'off'
};

var VariableFilters = function VariableFilters(_ref) {
  var _ref$queryVariables = _ref.queryVariables,
      queryVariables = _ref$queryVariables === void 0 ? [] : _ref$queryVariables,
      queryVariableValues = _ref.queryVariableValues,
      setQueryVariableValues = _ref.setQueryVariableValues;
  var isApplied = (queryVariables === null || queryVariables === void 0 ? void 0 : queryVariables.length) > 0;
  var controls = queryVariables === null || queryVariables === void 0 ? void 0 : queryVariables.map(function (item) {
    return _objectSpread2(_objectSpread2({}, (item === null || item === void 0 ? void 0 : item.type) === 'text' ? text_control : date_control), {}, {
      name: item === null || item === void 0 ? void 0 : item.name,
      label: item === null || item === void 0 ? void 0 : item.label,
      defaultValue: item === null || item === void 0 ? void 0 : item.default_value
    });
  });

  var _useFormCogo = hooks.useFormCogo(controls),
      fields = _useFormCogo.fields,
      handleSubmit = _useFormCogo.handleSubmit,
      setValues = _useFormCogo.setValues;

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setQueryVariableValues(_objectSpread2(_objectSpread2({}, queryVariableValues), data));
              setErrors({});

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFormSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onError = function onError(errs) {
    setErrors(errs);
  };

  return isApplied && /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    flex: 1,
    justifyContent: "baseline",
    alignItems: "flex-end",
    children: [/*#__PURE__*/jsxRuntime.jsx(Form, {
      controls: controls,
      fields: fields,
      errors: errors
    }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      justifyContent: "flex-end",
      margin: "8px",
      children: [/*#__PURE__*/jsxRuntime.jsx(Button__default["default"], {
        className: "secondary sm",
        onClick: function onClick() {
          setValues(_objectSpread2({}, controls.reduce(function (pv, cv) {
            return _objectSpread2(_objectSpread2({}, pv), {}, _defineProperty({}, cv.name, ''));
          }, {})));
          setQueryVariableValues({});
        },
        children: "Reset"
      }), /*#__PURE__*/jsxRuntime.jsx(Button__default["default"], {
        className: "primary sm",
        onClick: handleSubmit(handleFormSubmit, onError),
        style: {
          marginLeft: '8px'
        },
        children: "Apply"
      })]
    })]
  });
};

var controls = [{
  name: 'title',
  label: 'Title',
  placeholder: 'Enter here...',
  type: 'text',
  watch: false,
  span: 12,
  rules: {
    required: 'Field is required'
  }
}, {
  name: 'description',
  label: 'Description',
  placeholder: 'Enter here...',
  type: 'text',
  watch: false,
  span: 12,
  rules: {
    required: 'Field is required'
  }
}, {
  name: 'collection_id',
  label: 'Collection',
  defaultOptions: true,
  caret: true,
  span: 12,
  watch: true,
  scope: 'analytics',
  type: 'nestedSelection',
  optionsListKey: 'collections',
  valueKey: 'id',
  labelKey: 'name',
  isClearable: true,
  placeholder: 'Choose collection...',
  multiple: false,
  previousValue: null
}];

var SaveTitleChartForm = function SaveTitleChartForm(_ref) {
  var _ref$widgetId = _ref.widgetId,
      widgetId = _ref$widgetId === void 0 ? '' : _ref$widgetId,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      _ref$setShowPopover = _ref.setShowPopover,
      setShowPopover = _ref$setShowPopover === void 0 ? 'false' : _ref$setShowPopover,
      widgets = _ref.widgets,
      _ref$setWidgets = _ref.setWidgets,
      setWidgets = _ref$setWidgets === void 0 ? function () {} : _ref$setWidgets,
      _ref$dashboardLayout = _ref.dashboardLayout,
      dashboardLayout = _ref$dashboardLayout === void 0 ? {} : _ref$dashboardLayout;

  var _ref2 = widgetId ? API.UPDATE_ANALYTICS_WIDGET : API.CREATE_ANALYTICS_WIDGET,
      apiMethod = _ref2.apiMethod,
      apiScope = _ref2.apiScope,
      apiName = _ref2.apiName;

  var createWidgetAPI = useRequest(apiMethod, false, apiScope)(apiName);

  var _useFormCogo = hooks.useFormCogo(controls),
      fields = _useFormCogo.fields,
      handleSubmit = _useFormCogo.handleSubmit,
      setValue = _useFormCogo.setValue;

  React.useEffect(function () {
    setValue('title', title);
    setValue('description', description);
  }, []);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var payload, response, _response$data, _response$data2, titleWidget, _error, _error$data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (data) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLoading(true);
              setErrors({});
              payload = {
                name: data === null || data === void 0 ? void 0 : data.title,
                description: data === null || data === void 0 ? void 0 : data.description,
                query_string: '',
                query_variables: [],
                collection_id: data === null || data === void 0 ? void 0 : data.collection_id,
                widget_type: 'title',
                widget_config: {
                  widget_config_data: _objectSpread2({}, data),
                  pagination_data_required: false
                }
              };
              if (widgetId) payload.id = widgetId;
              _context.prev = 6;
              _context.next = 9;
              return createWidgetAPI.trigger({
                data: payload
              });

            case 9:
              response = _context.sent;

              if (!widgetId) {
                titleWidget = {
                  id: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.id,
                  type: 'title',
                  position: {
                    x: 0,
                    y: 0,
                    w: 9,
                    h: 1,
                    minW: 6,
                    minH: 8,
                    i: response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.id
                  }
                };
                setWidgets([].concat(_toConsumableArray(widgets === null || widgets === void 0 ? void 0 : widgets.map(function (widget) {
                  var _dashboardLayout$lg;

                  var layoutPosition = dashboardLayout === null || dashboardLayout === void 0 ? void 0 : (_dashboardLayout$lg = dashboardLayout.lg) === null || _dashboardLayout$lg === void 0 ? void 0 : _dashboardLayout$lg.find(function (_ref4) {
                    var i = _ref4.i;
                    return i === (widget === null || widget === void 0 ? void 0 : widget.id);
                  });
                  return _objectSpread2(_objectSpread2({}, widget), {}, {
                    position: _objectSpread2(_objectSpread2({}, widget.position), layoutPosition || {})
                  });
                })), [_objectSpread2({}, titleWidget)]));
              }

              setShowPopover(false);
              admin.toast.success("Widget ".concat(widgetId ? 'updated' : 'created', " successfully..."));
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](6);
              admin.toast.error(((_error = _objectSpread2({}, _context.t0)) === null || _error === void 0 ? void 0 : (_error$data = _error.data) === null || _error$data === void 0 ? void 0 : _error$data.message) || 'Something went wrong...');

            case 18:
              _context.prev = 18;
              setLoading(false);
              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 15, 18, 21]]);
    }));

    return function handleFormSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onError = function onError(errs) {
    setErrors(errs);
  };

  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    direction: "column",
    children: [/*#__PURE__*/jsxRuntime.jsx(Form, {
      controls: controls,
      fields: fields,
      errors: errors
    }), /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      justifyContent: "flex-end",
      children: /*#__PURE__*/jsxRuntime.jsxs(admin.Button, {
        style: {
          margin: 8
        },
        className: "primary sm",
        onClick: handleSubmit(handleFormSubmit, onError),
        disabled: loading,
        children: [widgetId ? 'Update' : 'Create', " Widget"]
      })
    })]
  });
};

var TitleChartButton = function TitleChartButton(_ref) {
  var _ref$widgetId = _ref.widgetId,
      widgetId = _ref$widgetId === void 0 ? null : _ref$widgetId,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      _ref$widgets = _ref.widgets,
      widgets = _ref$widgets === void 0 ? {} : _ref$widgets,
      _ref$setWidgets = _ref.setWidgets,
      setWidgets = _ref$setWidgets === void 0 ? function () {} : _ref$setWidgets,
      _ref$dashboardLayout = _ref.dashboardLayout,
      dashboardLayout = _ref$dashboardLayout === void 0 ? {} : _ref$dashboardLayout,
      _ref$listWidgetsAPI = _ref.listWidgetsAPI,
      listWidgetsAPI = _ref$listWidgetsAPI === void 0 ? {} : _ref$listWidgetsAPI,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx(Button, {
      onClick: function onClick() {
        return setShowModal(!showModal);
      },
      className: "secondary sm",
      children: "Create Title Widget"
    }), showModal && /*#__PURE__*/jsxRuntime.jsxs(Modal__default["default"], {
      show: showModal,
      className: "primary sm",
      onClose: function onClose() {
        return setShowModal(false);
      },
      onOuterClick: function onOuterClick() {
        return setShowModal(false);
      },
      styles: {
        dialog: {
          overflow: 'visible'
        }
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
        children: "Create Title Widget"
      }), /*#__PURE__*/jsxRuntime.jsx(SaveTitleChartForm, {
        widgetId: widgetId,
        title: title,
        description: description,
        setShowPopover: setShowModal,
        widgets: widgets,
        setWidgets: setWidgets,
        dashboardLayout: dashboardLayout,
        listWidgetsAPI: listWidgetsAPI,
        params: params
      })]
    })]
  });
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var bounce = styled.keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t0%,\n\t50%,\n\t100% {\n\t\ttransform: scale(1);\n\t}\n\t25% {\n\t\ttransform: scale(0.6);\n\t}\n\t75% {\n\t\ttransform: scale(1.4);\n\t}\n"])));
var Container = styled__default["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\talign-items: center;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 50%;\n\t-ms-transform: translateY(-50%);\n\ttransform: translateY(-50%);\n"])));
var PartnerTitle = styled__default["default"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tmargin: 0px;\n\tfont-weight: bold;\n\tfont-size: 16px;\n\tline-height: 22px;\n\tletter-spacing: 0.02em;\n\tcolor: #000000;\n"])));
var AnimationContainer = styled__default["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n\tjustify-content: center;\n\talign-items: center;\n"])));
var ColoredContainer = styled__default["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 20px;\n\theight: 20px;\n\tborder-radius: 100%;\n\tmargin: 20px;\n\tbackground-image: linear-gradient(\n\t\t145deg,\n\t\trgba(255, 255, 255, 0.5) 0%,\n\t\trgba(0, 0, 0, 0) 100%\n\t);\n\tanimation: ", " 1.5s 0.5s linear infinite;\n\n    &.yellow {\n\tbackground-color: #f1bb1a;\n    }\n\n    &.green {\n        background-color: #6cc077;\n        animation-delay: 0.1s;\n    }\n\n    &.blue {\n        background-color: #66acf7;\n        animation-delay: 0.2s;\n    }\n\n    &.black {\n        background-color: #000000;\n        animation-delay: 0.3s;\n    }\n"])), bounce);

var DashboardLoading = function DashboardLoading(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Dashboard' : _ref$title;
  return /*#__PURE__*/jsxRuntime.jsx(Container, {
    children: /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      alignItems: "center",
      direction: "column",
      children: [/*#__PURE__*/jsxRuntime.jsxs(PartnerTitle, {
        children: ["Loading ", title, "..."]
      }), /*#__PURE__*/jsxRuntime.jsxs(AnimationContainer, {
        children: [/*#__PURE__*/jsxRuntime.jsx(ColoredContainer, {
          className: "blue"
        }), /*#__PURE__*/jsxRuntime.jsx(ColoredContainer, {
          className: "yellow"
        }), /*#__PURE__*/jsxRuntime.jsx(ColoredContainer, {
          className: "green"
        }), /*#__PURE__*/jsxRuntime.jsx(ColoredContainer, {
          className: "black"
        })]
      })]
    })
  });
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item img {\n  pointer-events: none;\n  user-select: none;  \n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.dropping {\n  visibility: hidden;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n\n.react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n\n.react-resizable-hide > .react-resizable-handle {\n  display: none;\n}\n\n.react-grid-item > .react-resizable-handle.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-w,\n.react-grid-item > .react-resizable-handle.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-n,\n.react-grid-item > .react-resizable-handle.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}\n";
styleInject(css_248z$1);

var css_248z = ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}";
styleInject(css_248z);

var DashboardPage = function DashboardPage(_ref) {
  var _getDashboardAPI$data;

  var id = _ref.id;

  var _useState = React.useState('view'),
      _useState2 = _slicedToArray(_useState, 2),
      dashboardMode = _useState2[0],
      setDashboardMode = _useState2[1];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      themeType = _useState4[0],
      setThemeType = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      widgets = _useState6[0],
      setWidgets = _useState6[1];

  var _useState7 = React.useState({
    lg: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      dashboardLayout = _useState8[0],
      setDashboardLayout = _useState8[1];

  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showImport = _useState10[0],
      setShowImport = _useState10[1];

  var _useState11 = React.useState({}),
      _useState12 = _slicedToArray(_useState11, 2),
      queryVariableValues = _useState12[0],
      setQueryVariableValues = _useState12[1];

  var _useState13 = React.useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isDashboardEdited = _useState14[0],
      setIsDashboardEdited = _useState14[1];

  var params = {
    id: id
  };
  var _API$GET_ANALYTICS_DA = API.GET_ANALYTICS_DASHBOARD,
      apiMethod = _API$GET_ANALYTICS_DA.apiMethod,
      apiScope = _API$GET_ANALYTICS_DA.apiScope,
      apiName = _API$GET_ANALYTICS_DA.apiName;
  var getDashboardAPI = useRequest(apiMethod, false, apiScope)(apiName, {
    params: params
  });
  var loading = getDashboardAPI === null || getDashboardAPI === void 0 ? void 0 : getDashboardAPI.loading;
  var api_data = getDashboardAPI === null || getDashboardAPI === void 0 ? void 0 : (_getDashboardAPI$data = getDashboardAPI.data) === null || _getDashboardAPI$data === void 0 ? void 0 : _getDashboardAPI$data.data;
  var dashboard_data = api_data === null || api_data === void 0 ? void 0 : api_data.data; // eslint-disable-next-line react-hooks/exhaustive-deps

  var widgetsMappingData = (api_data === null || api_data === void 0 ? void 0 : api_data.mapping_data) || [];

  var _useState15 = React.useState(true),
      _useState16 = _slicedToArray(_useState15, 2),
      reloadOnUpdate = _useState16[0],
      setReloadOnUpdate = _useState16[1];

  var _useState17 = React.useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      showCancelUpdateConfirmationModal = _useState18[0],
      setShowCancelUpdateConfirmationModal = _useState18[1];

  React.useEffect(function () {
    if (!reloadOnUpdate) return;
    getDashboardAPI.trigger({});
    setIsDashboardEdited(false); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadOnUpdate]);
  console.log('api data ', api_data);
  React.useEffect(function () {
    var _widgetsMappingData$, _widgetsMappingData$$;

    if (widgetsMappingData.length === 0) return;
    var newWidgets = widgetsMappingData === null || widgetsMappingData === void 0 ? void 0 : widgetsMappingData.map(function (widget) {
      var _widget$widget_data;

      return {
        id: widget === null || widget === void 0 ? void 0 : widget.id,
        type: widget === null || widget === void 0 ? void 0 : widget.widget_type,
        position: _objectSpread2(_objectSpread2({}, (widget === null || widget === void 0 ? void 0 : (_widget$widget_data = widget.widget_data) === null || _widget$widget_data === void 0 ? void 0 : _widget$widget_data.position) || {}), {}, {
          i: widget === null || widget === void 0 ? void 0 : widget.id
        })
      };
    });
    setThemeType((_widgetsMappingData$ = widgetsMappingData[0]) === null || _widgetsMappingData$ === void 0 ? void 0 : (_widgetsMappingData$$ = _widgetsMappingData$.widget_data) === null || _widgetsMappingData$$ === void 0 ? void 0 : _widgetsMappingData$$.theme_type);
    setWidgets(_toConsumableArray(newWidgets));
  }, [widgetsMappingData]);
  React.useEffect(function () {
    var layouts = widgets === null || widgets === void 0 ? void 0 : widgets.map(function (widget) {
      return _objectSpread2(_objectSpread2({}, widget === null || widget === void 0 ? void 0 : widget.position), {}, {
        i: widget === null || widget === void 0 ? void 0 : widget.id
      });
    });
    setDashboardLayout(_objectSpread2(_objectSpread2({}, dashboardLayout), {}, {
      lg: layouts
    }));
  }, [widgets]);
  React.useEffect(function () {
    if (!loading && dashboardMode === 'edit' && !isDashboardEdited) {
      setIsDashboardEdited(true);
    }
  }, [widgets, dashboardLayout, themeType]);

  var handletoggle = function handletoggle() {
    if (dashboardMode === 'view') setDashboardMode('edit');else if (isDashboardEdited) setShowCancelUpdateConfirmationModal(true);else setDashboardMode('view');
  };

  var handleRefresh = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator$1( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getDashboardAPI.trigger();

            case 2:
              setIsDashboardEdited(false);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleRefresh() {
      return _ref2.apply(this, arguments);
    };
  }();

  var query_variables = [];
  widgetsMappingData === null || widgetsMappingData === void 0 ? void 0 : widgetsMappingData.forEach(function (item) {
    var itemQv = (item === null || item === void 0 ? void 0 : item.query_variables) || [];

    if ((itemQv === null || itemQv === void 0 ? void 0 : itemQv.length) > 0) {
      itemQv.forEach(function (qv) {
        var isNotAlreadyAdded = (query_variables === null || query_variables === void 0 ? void 0 : query_variables.filter(function (x) {
          return (x === null || x === void 0 ? void 0 : x.name) === (qv === null || qv === void 0 ? void 0 : qv.name);
        }).length) === 0;

        if (isNotAlreadyAdded) {
          query_variables.push(qv);
        }
      });
    }
  });
  return /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
    direction: "column",
    children: [/*#__PURE__*/jsxRuntime.jsxs(Container$5, {
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Flex, {
        children: /*#__PURE__*/jsxRuntime.jsx(components.Text, {
          bold: true,
          children: "Dashboard Named"
        })
      }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
        alignItems: "center",
        style: {
          gap: '8px'
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(Toggle__default["default"], {
          offLabel: {
            label: 'View',
            value: 'view'
          },
          onLabel: {
            label: 'Edit',
            value: 'edit'
          },
          value: dashboardMode,
          disabled: loading,
          onChange: function onChange() {
            return handletoggle();
          }
        }), /*#__PURE__*/jsxRuntime.jsx(Button, {
          className: "secondary sm",
          disabled: loading,
          onClick: function onClick() {
            return handleRefresh();
          },
          children: "Refresh"
        })]
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(CancelUpdateDashboardConfirmationModal, {
      showCancelUpdateConfirmationModal: showCancelUpdateConfirmationModal,
      setShowCancelUpdateConfirmationModal: setShowCancelUpdateConfirmationModal,
      setDashboardMode: setDashboardMode,
      reloadOnUpdate: reloadOnUpdate,
      setReloadOnUpdate: setReloadOnUpdate
    }), dashboardMode === 'edit' && /*#__PURE__*/jsxRuntime.jsx(UpdateDashboard, {
      themeType: themeType,
      setThemeType: setThemeType,
      dashboardData: dashboard_data,
      dashboardLayout: dashboardLayout,
      dashboardMode: dashboardMode,
      setDashboardMode: setDashboardMode,
      widgetsMappingData: widgetsMappingData,
      isDashboardEdited: isDashboardEdited,
      setIsDashboardEdited: setIsDashboardEdited,
      reloadOnUpdate: reloadOnUpdate,
      setReloadOnUpdate: setReloadOnUpdate
    }), dashboardMode === 'edit' && /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
      justifyContent: "space-between",
      margin: "16px 0",
      children: [/*#__PURE__*/jsxRuntime.jsx(components.Text, {
        children: "Configure Dashboard"
      }), /*#__PURE__*/jsxRuntime.jsxs(components.Flex, {
        style: {
          gap: '8px'
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(TitleChartButton, {
          widgets: widgets,
          setWidgets: setWidgets,
          dashboardLayout: dashboardLayout
        }), /*#__PURE__*/jsxRuntime.jsx(Button, {
          className: "secondary sm",
          onClick: function onClick() {
            return setShowImport(true);
          },
          children: "Add Widgets"
        })]
      })]
    }), loading ? /*#__PURE__*/jsxRuntime.jsx(components.Flex, {
      alignItems: "center",
      direction: "column",
      children: /*#__PURE__*/jsxRuntime.jsx(DashboardLoading, {})
    }) : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(VariableFilters, {
        queryVariables: query_variables,
        queryVariableValues: queryVariableValues,
        setQueryVariableValues: setQueryVariableValues
      }), /*#__PURE__*/jsxRuntime.jsx(ViewEditDashboardComponent, {
        widgets: widgets,
        setWidgets: setWidgets,
        themeType: themeType,
        dashboardMode: dashboardMode,
        dashboardLayout: dashboardLayout,
        setDashboardLayout: setDashboardLayout,
        queryVariableValues: queryVariableValues
      })]
    }), showImport && /*#__PURE__*/jsxRuntime.jsx(Modal__default["default"], {
      show: showImport,
      className: "primary lg",
      onClose: function onClose() {
        return setShowImport(false);
      },
      width: 500,
      onOuterClick: function onOuterClick() {
        return setShowImport(false);
      },
      children: /*#__PURE__*/jsxRuntime.jsx(WidgetSelector, {
        widgetsMappingData: widgetsMappingData,
        setShowImport: setShowImport,
        widgets: widgets,
        setWidgets: setWidgets
      })
    })]
  });
};

module.exports = DashboardPage;
