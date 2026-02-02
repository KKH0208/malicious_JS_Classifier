/* 元のURL: https://wired.com */
// 外部JS: https://wired.com/verso/static/6280.e8798f41bfbe7ff1708c.js
"use strict";
(globalThis["webpackChunkverso"] = globalThis["webpackChunkverso"] || []).push([[6280],{

/***/ 49606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (false) {}
// We don't want bundlers to error when they encounter usage of any of these exports.
// It's up to the package author to ensure that if they access React internals,
// they do so in a safe way that won't break if React changes how they use these internals.
// (e.g. only access them in development, and only in an optional way that won't
// break if internals are not there or do not have the expected structure)
// @ts-ignore
module.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = undefined;
// @ts-ignore
module.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = undefined;
// @ts-ignore
module.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = undefined;
// Here we actually pull in the React library and add everything
// it exports to our own `module.exports`.
// If React suddenly were to add one of the above "polyfilled" exports,
// the React version would overwrite our version, so this should be
// future-proof.
Object.assign(module.exports, __webpack_require__(96540));


/***/ }),

/***/ 2135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J1: () => (/* binding */ gql),
/* harmony export */   Nh: () => (/* binding */ resetCaches),
/* harmony export */   VC: () => (/* binding */ enableExperimentalFragmentVariables),
/* harmony export */   gi: () => (/* binding */ disableFragmentWarnings),
/* harmony export */   qj: () => (/* binding */ disableExperimentalFragmentVariables)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8674);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66005);


var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function (fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
                        + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
                        + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                }
            }
            else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        }
        else {
            definitions.push(fragmentDefinition);
        }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, ast), { definitions: definitions });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function (node) {
        if (node.loc)
            delete node.loc;
        Object.keys(node).forEach(function (key) {
            var value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = (0,graphql__WEBPACK_IMPORTED_MODULE_1__/* .parse */ .qg)(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof literals === 'string') {
        literals = [literals];
    }
    var result = literals[0];
    args.forEach(function (arg, i) {
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        }
        else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function (gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (gql)));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 21020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(96540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 8674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ }),

/***/ 55285:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ApolloCache)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8674);
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1161);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65215);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81212);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84824);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73401);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92922);
/* harmony import */ var _wry_caches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11744);
/* harmony import */ var _utilities_caching_getMemoryInternals_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35051);
/* harmony import */ var _core_equalByQuery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9080);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52687);
/* harmony import */ var _masking_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45410);








var ApolloCache = /** @class */ (function () {
    function ApolloCache() {
        this.assumeImmutableResults = false;
        // Make sure we compute the same (===) fragment query document every
        // time we receive the same fragment in readFragment.
        this.getFragmentDoc = (0,optimism__WEBPACK_IMPORTED_MODULE_0__/* .wrap */ .LV)(_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .getFragmentQueryDocument */ .ct, {
            max: _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__/* .cacheSizes */ .v["cache.fragmentQueryDocuments"] ||
                1000 /* defaultCacheSizes["cache.fragmentQueryDocuments"] */,
            cache: _wry_caches__WEBPACK_IMPORTED_MODULE_4__/* .WeakCache */ .l,
        });
    }
    // Function used to lookup a fragment when a fragment definition is not part
    // of the GraphQL document. This is useful for caches, such as InMemoryCache,
    // that register fragments ahead of time so they can be referenced by name.
    ApolloCache.prototype.lookupFragment = function (fragmentName) {
        return null;
    };
    // Transactional API
    // The batch method is intended to replace/subsume both performTransaction
    // and recordOptimisticTransaction, but performTransaction came first, so we
    // provide a default batch implementation that's just another way of calling
    // performTransaction. Subclasses of ApolloCache (such as InMemoryCache) can
    // override the batch method to do more interesting things with its options.
    ApolloCache.prototype.batch = function (options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic
            : options.optimistic === false ? null
                : void 0;
        var updateResult;
        this.performTransaction(function () { return (updateResult = options.update(_this)); }, optimisticId);
        return updateResult;
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    // Optional API
    // Called once per input document, allowing the cache to make static changes
    // to the query, such as adding __typename fields.
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    // Called before each ApolloLink request, allowing the cache to make dynamic
    // changes to the query, such as filling in missing fragment definitions.
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    // DataProxy API
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, options), { rootId: options.id || "ROOT_QUERY", optimistic: optimistic }));
    };
    /** {@inheritDoc @apollo/client!ApolloClient#watchFragment:member(1)} */
    ApolloCache.prototype.watchFragment = function (options) {
        var _this = this;
        var fragment = options.fragment, fragmentName = options.fragmentName, from = options.from, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, otherOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(options, ["fragment", "fragmentName", "from", "optimistic"]);
        var query = this.getFragmentDoc(fragment, fragmentName);
        // While our TypeScript types do not allow for `undefined` as a valid
        // `from`, its possible `useFragment` gives us an `undefined` since it
        // calls` cache.identify` and provides that value to `from`. We are
        // adding this fix here however to ensure those using plain JavaScript
        // and using `cache.identify` themselves will avoid seeing the obscure
        // warning.
        var id = typeof from === "undefined" || typeof from === "string" ?
            from
            : this.identify(from);
        var dataMasking = !!options[Symbol.for("apollo.dataMasking")];
        if (globalThis.__DEV__ !== false) {
            var actualFragmentName = fragmentName || (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__/* .getFragmentDefinition */ .E4)(fragment).name.value;
            if (!id) {
                globalThis.__DEV__ !== false && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .V1.warn(1, actualFragmentName);
            }
        }
        var diffOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, otherOptions), { returnPartialData: true, id: id, query: query, optimistic: optimistic });
        var latestDiff;
        return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__/* .Observable */ .c(function (observer) {
            return _this.watch((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, diffOptions), { immediate: true, callback: function (diff) {
                    var data = dataMasking ?
                        (0,_masking_index_js__WEBPACK_IMPORTED_MODULE_8__/* .maskFragment */ .z)(diff.result, fragment, _this, fragmentName)
                        : diff.result;
                    if (
                    // Always ensure we deliver the first result
                    latestDiff &&
                        (0,_core_equalByQuery_js__WEBPACK_IMPORTED_MODULE_9__/* .equalByQuery */ .a)(query, { data: latestDiff.result }, { data: data }, 
                        // TODO: Fix the type on WatchFragmentOptions so that TVars
                        // extends OperationVariables
                        options.variables)) {
                        return;
                    }
                    var result = {
                        data: data,
                        complete: !!diff.complete,
                    };
                    if (diff.missing) {
                        result.missing = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__/* .mergeDeepArray */ .IM)(diff.missing.map(function (error) { return error.missing; }));
                    }
                    latestDiff = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, diff), { result: data });
                    observer.next(result);
                } }));
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || "ROOT_QUERY",
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    ApolloCache.prototype.updateQuery = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readQuery(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeQuery((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, options), { data: data }));
                return data;
            },
        });
    };
    ApolloCache.prototype.updateFragment = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readFragment(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeFragment((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, options), { data: data }));
                return data;
            },
        });
    };
    return ApolloCache;
}());

if (globalThis.__DEV__ !== false) {
    ApolloCache.prototype.getMemoryInternals = _utilities_caching_getMemoryInternals_js__WEBPACK_IMPORTED_MODULE_11__/* .getApolloCacheMemoryInternals */ .tQ;
}
//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 31988:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ Cache)
/* harmony export */ });
var Cache;
(function (Cache) {
})(Cache || (Cache = {}));
//# sourceMappingURL=Cache.js.map

/***/ }),

/***/ 24253:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MissingFieldError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8674);

var MissingFieldError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MissingFieldError, _super);
    function MissingFieldError(message, path, query, variables) {
        var _a;
        // 'Error' breaks prototype chain here
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.path = path;
        _this.query = query;
        _this.variables = variables;
        if (Array.isArray(_this.path)) {
            _this.missing = _this.message;
            for (var i = _this.path.length - 1; i >= 0; --i) {
                _this.missing = (_a = {}, _a[_this.path[i]] = _this.missing, _a);
            }
        }
        else {
            _this.missing = _this.path;
        }
        // We're not using `Object.setPrototypeOf` here as it isn't fully supported
        // on Android (see issue #3236).
        _this.__proto__ = MissingFieldError.prototype;
        return _this;
    }
    return MissingFieldError;
}(Error));

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 73194:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $3: () => (/* binding */ hasOwn),
/* harmony export */   I6: () => (/* binding */ normalizeConfig),
/* harmony export */   T9: () => (/* binding */ selectionSetMatchesResult),
/* harmony export */   Ui: () => (/* binding */ getTypenameFromStoreObject),
/* harmony export */   Xx: () => (/* binding */ shouldCanonizeResults),
/* harmony export */   d1: () => (/* binding */ storeValueIsStoreObject),
/* harmony export */   gk: () => (/* binding */ TypeOrFieldNameRegExp),
/* harmony export */   iJ: () => (/* binding */ fieldNameFromStoreName),
/* harmony export */   lq: () => (/* binding */ extractFragmentContext),
/* harmony export */   mv: () => (/* binding */ makeProcessedFieldsMerger),
/* harmony export */   or: () => (/* binding */ defaultDataIdFromObject)
/* harmony export */ });
/* unused harmony export isNullish */
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87945);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67194);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90075);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45636);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68869);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92922);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65215);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84824);

var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
    return value === null || value === void 0;
}

function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                !isNullish(id) ? { id: id }
                    : !isNullish(_id) ? { _id: _id }
                        : void 0;
        }
        // If there is no object.id, fall back to object._id.
        if (isNullish(id) && !isNullish(_id)) {
            id = _id;
        }
        if (!isNullish(id)) {
            return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ?
                id
                : JSON.stringify(id));
        }
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    // Thanks to the shouldCanonizeResults helper, this should be the only line
    // you have to change to reenable canonization by default in the future.
    canonizeResults: false,
};
function normalizeConfig(config) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__/* .compact */ .o)(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isReference */ .A_)(objectOrReference) ?
        store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isNonNullObject */ .U)(result)) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isArray */ .c)(result) ?
            result.every(function (item) {
                return selectionSetMatchesResult(selectionSet, item, variables);
            })
            : selectionSet.selections.every(function (field) {
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isField */ .dt)(field) && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__/* .shouldInclude */ .MS)(field, variables)) {
                    var key = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__/* .resultKeyNameFromField */ .ue)(field);
                    return (hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables)));
                }
                // If the selection has been skipped with @skip(true) or
                // @include(false), it should not count against the matching. If
                // the selection is not a field, it must be a fragment (inline or
                // named). We will determine if selectionSetMatchesResult for that
                // fragment when we get to it, so for now we return true.
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isNonNullObject */ .U)(value) && !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isReference */ .A_)(value) && !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__/* .isArray */ .c)(value);
}
function makeProcessedFieldsMerger() {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__/* .DeepMerger */ .ZI();
}
function extractFragmentContext(document, fragments) {
    // FragmentMap consisting only of fragments defined directly in document, not
    // including other fragments registered in the FragmentRegistry.
    var fragmentMap = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__/* .createFragmentMap */ .JG)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__/* .getFragmentDefinitions */ .zK)(document));
    return {
        fragmentMap: fragmentMap,
        lookupFragment: function (name) {
            var def = fragmentMap[name];
            if (!def && fragments) {
                def = fragments.lookup(name);
            }
            return def || null;
        },
    };
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 75107:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ InMemoryCache)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/globals/index.js
var globals = __webpack_require__(52687);
// EXTERNAL MODULE: ./node_modules/optimism/lib/index.js + 7 modules
var lib = __webpack_require__(1161);
// EXTERNAL MODULE: ./node_modules/@wry/equality/lib/index.js
var equality_lib = __webpack_require__(15381);
// EXTERNAL MODULE: ./node_modules/@apollo/client/cache/core/cache.js
var cache = __webpack_require__(55285);
// EXTERNAL MODULE: ./node_modules/@apollo/client/cache/core/types/common.js
var common = __webpack_require__(24253);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
var DocumentTransform = __webpack_require__(29993);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/transform.js
var transform = __webpack_require__(3902);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/caching/sizes.js
var sizes = __webpack_require__(81212);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/canonicalStringify.js
var canonicalStringify = __webpack_require__(96269);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/print.js
var print = __webpack_require__(47397);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/storeUtils.js
var storeUtils = __webpack_require__(67194);
// EXTERNAL MODULE: ./node_modules/graphql/language/kinds.mjs
var kinds = __webpack_require__(73061);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/canUse.js
var canUse = __webpack_require__(2619);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/compact.js
var compact = __webpack_require__(87945);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/getFromAST.js
var getFromAST = __webpack_require__(84824);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/mergeDeep.js
var mergeDeep = __webpack_require__(92922);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/directives.js
var directives = __webpack_require__(68869);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/fragments.js
var fragments = __webpack_require__(65215);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
var maybeDeepFreeze = __webpack_require__(21469);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/objects.js
var objects = __webpack_require__(90075);
// EXTERNAL MODULE: ./node_modules/@wry/trie/lib/index.js
var trie_lib = __webpack_require__(54834);
// EXTERNAL MODULE: ./node_modules/@apollo/client/cache/inmemory/helpers.js
var helpers = __webpack_require__(73194);
;// ./node_modules/@apollo/client/cache/inmemory/entityStore.js







var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
var EntityStore = /** @class */ (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        // Maps root entity IDs to the number of times they have been retained, minus
        // the number of times they have been released. Retained entities keep other
        // entities they reference (even indirectly) from being garbage collected.
        this.rootIds = Object.create(null);
        // Lazily tracks { __ref: <dataId> } strings contained by this.data[dataId].
        this.refs = Object.create(null);
        // Bound function that can be passed around to provide easy access to fields
        // of Reference objects as well as ordinary objects.
        this.getFieldValue = function (objectOrReference, storeFieldName) {
            return (0,maybeDeepFreeze/* maybeDeepFreeze */.G)((0,storeUtils/* isReference */.A_)(objectOrReference) ?
                _this.get(objectOrReference.__ref, storeFieldName)
                : objectOrReference && objectOrReference[storeFieldName]);
        };
        // Returns true for non-normalized StoreObjects and non-dangling
        // References, indicating that readField(name, objOrRef) has a chance of
        // working. Useful for filtering out dangling references from lists.
        this.canRead = function (objOrRef) {
            return (0,storeUtils/* isReference */.A_)(objOrRef) ?
                _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        // Bound function that converts an id or an object with a __typename and
        // primary key fields to a Reference object. If called with a Reference object,
        // that same Reference object is returned. Pass true for mergeIntoStore to persist
        // an object into the store.
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return (0,storeUtils/* makeReference */.WU)(objOrIdOrRef);
            }
            if ((0,storeUtils/* isReference */.A_)(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = (0,storeUtils/* makeReference */.WU)(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    // Although the EntityStore class is abstract, it contains concrete
    // implementations of the various NormalizedCache interface methods that
    // are inherited by the Root and Layer subclasses.
    EntityStore.prototype.toObject = function () {
        return (0,tslib_es6.__assign)({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (helpers/* hasOwn */.$3.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && helpers/* hasOwn */.$3.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            helpers/* hasOwn */.$3.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        // The has method (above) calls lookup with dependOnExistence = true, so
        // that it can later be invalidated when we add or remove a StoreObject for
        // this dataId. Any consumer who cares about the contents of the StoreObject
        // should not rely on this dependency, since the contents could change
        // without the object being added or removed.
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (helpers/* hasOwn */.$3.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        // Convert unexpected references to ID strings.
        if ((0,storeUtils/* isReference */.A_)(older))
            older = older.__ref;
        if ((0,storeUtils/* isReference */.A_)(newer))
            newer = newer.__ref;
        var existing = typeof older === "string" ? this.lookup((dataId = older)) : older;
        var incoming = typeof newer === "string" ? this.lookup((dataId = newer)) : newer;
        // If newer was a string ID, but that ID was not defined in this store,
        // then there are no fields to be merged, so we're done.
        if (!incoming)
            return;
        (0,globals/* invariant */.V1)(typeof dataId === "string", 2);
        var merged = new mergeDeep/* DeepMerger */.ZI(storeObjectReconciler).merge(existing, incoming);
        // Even if merged === existing, existing may have come from a lower
        // layer, so we always need to set this.data[dataId] on this level.
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                // If we added a new StoreObject where there was previously none, dirty
                // anything that depended on the existence of this dataId, such as the
                // EntityStore#has method.
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                // Now invalidate dependents who called getFieldValue for any fields
                // that are changing as a result of this merge.
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing ||
                        existing[storeFieldName] !== merged[storeFieldName]) {
                        // Always dirty the full storeFieldName, which may include
                        // serialized arguments following the fieldName prefix.
                        fieldsToDirty_1[storeFieldName] = 1;
                        // Also dirty fieldNameFromStoreName(storeFieldName) if it's
                        // different from storeFieldName and this field does not have
                        // keyArgs configured, because that means the cache can't make
                        // any assumptions about how field values with the same field
                        // name but different arguments might be interrelated, so it
                        // must err on the side of invalidating all field values that
                        // share the same short fieldName, regardless of arguments.
                        var fieldName = (0,helpers/* fieldNameFromStoreName */.iJ)(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        // If merged[storeFieldName] has become undefined, and this is the
                        // Root layer, actually delete the property from the merged object,
                        // which is guaranteed to have been created fresh in this method.
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    // Since we return default root __typename strings
                    // automatically from store.get, we don't need to dirty the
                    // ROOT_QUERY.__typename field if merged.__typename is equal
                    // to the default string (usually "Query").
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) {
                    return _this.group.dirty(dataId, fieldName);
                });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: storeUtils/* isReference */.A_,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) {
                    return _this.policies.readField(typeof fieldNameOrOptions === "string" ?
                        {
                            fieldName: fieldNameOrOptions,
                            from: from || (0,storeUtils/* makeReference */.WU)(dataId),
                        }
                        : fieldNameOrOptions, { store: _this });
                },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = (0,helpers/* fieldNameFromStoreName */.iJ)(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function" ? fields : (fields[storeFieldName] || fields[fieldName]);
                if (modify) {
                    var newValue = modify === delModifier ? DELETE : (modify((0,maybeDeepFreeze/* maybeDeepFreeze */.G)(fieldValue), (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) })));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                            if (globalThis.__DEV__ !== false) {
                                var checkReference = function (ref) {
                                    if (_this.lookup(ref.__ref) === undefined) {
                                        globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(3, ref);
                                        return true;
                                    }
                                };
                                if ((0,storeUtils/* isReference */.A_)(newValue)) {
                                    checkReference(newValue);
                                }
                                else if (Array.isArray(newValue)) {
                                    // Warn about writing "mixed" arrays of Reference and non-Reference objects
                                    var seenReference = false;
                                    var someNonReference = void 0;
                                    for (var _i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
                                        var value = newValue_1[_i];
                                        if ((0,storeUtils/* isReference */.A_)(value)) {
                                            seenReference = true;
                                            if (checkReference(value))
                                                break;
                                        }
                                        else {
                                            // Do not warn on primitive values, since those could never be represented
                                            // by a reference. This is a valid (albeit uncommon) use case.
                                            if (typeof value === "object" && !!value) {
                                                var id = _this.policies.identify(value)[0];
                                                // check if object could even be referenced, otherwise we are not interested in it for this warning
                                                if (id) {
                                                    someNonReference = value;
                                                }
                                            }
                                        }
                                        if (seenReference && someNonReference !== undefined) {
                                            globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(4, someNonReference);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    // If called with only one argument, removes the entire entity
    // identified by dataId. If called with a fieldName as well, removes all
    // fields of that entity whose names match fieldName according to the
    // fieldNameFromStoreName helper function. If called with a fieldName
    // and variables, removes all fields of that entity whose names match fieldName
    // and whose arguments when cached exactly match the variables passed.
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args ?
                this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options, limit) {
        var evicted = false;
        if (options.id) {
            if (helpers/* hasOwn */.$3.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
                evicted = this.parent.evict(options, limit) || evicted;
            }
            // Always invalidate the field to trigger rereading of watched
            // queries, even if no cache data was modified by the eviction,
            // because queries may depend on computed fields with custom read
            // functions, whose values are not stored in the EntityStore.
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!helpers/* hasOwn */.$3.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && helpers/* hasOwn */.$3.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = (0,tslib_es6.__rest)(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return (this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1);
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    // Return a Set<string> of all the ID strings that have been retained by
    // this layer/root *and* any layers/roots beneath it.
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            // Official singleton IDs like ROOT_QUERY and ROOT_MUTATION are
            // always considered roots for garbage collection, regardless of
            // their retainment counts in this.rootIds.
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    // The goal of garbage collection is to remove IDs from the Root layer of the
    // store that are no longer reachable starting from any IDs that have been
    // explicitly retained (see retain and release, above). Returns an array of
    // dataId strings that were removed from the store.
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (helpers/* hasOwn */.$3.call(snapshot, id)) {
                // Because we are iterating over an ECMAScript Set, the IDs we add here
                // will be visited in later iterations of the forEach loop only if they
                // were not previously contained by the Set.
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                // By removing IDs from the snapshot object here, we protect them from
                // getting removed from the root store layer below.
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!helpers/* hasOwn */.$3.call(this.refs, dataId)) {
            var found_1 = (this.refs[dataId] = Object.create(null));
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            // Within the store, only arrays and objects can contain child entity
            // references, so we can prune the traversal using this predicate:
            workSet_1.forEach(function (obj) {
                if ((0,storeUtils/* isReference */.A_)(obj)) {
                    found_1[obj.__ref] = true;
                    // In rare cases, a { __ref } Reference object may have other fields.
                    // This often indicates a mismerging of References with StoreObjects,
                    // but garbage collection should not be fooled by a stray __ref
                    // property in a StoreObject (ignoring all the other fields just
                    // because the StoreObject looks like a Reference). To avoid this
                    // premature termination of findChildRefIds recursion, we fall through
                    // to the code below, which will handle any other properties of obj.
                }
                if ((0,objects/* isNonNullObject */.U)(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        // No need to add primitive values to the workSet, since they cannot
                        // contain reference objects.
                        if ((0,objects/* isNonNullObject */.U)(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());

// A single CacheGroup represents a set of one or more EntityStore objects,
// typically the Root store in a CacheGroup by itself, and all active Layer
// stores in a group together. A single EntityStore object belongs to only
// one CacheGroup, store.group. The CacheGroup is responsible for tracking
// dependencies, so store.group is helpful for generating unique keys for
// cached results that need to be invalidated when/if those dependencies
// change. If we used the EntityStore objects themselves as cache keys (that
// is, store rather than store.group), the cache would become unnecessarily
// fragmented by all the different Layer objects. Instead, the CacheGroup
// approach allows all optimistic Layer objects in the same linked list to
// belong to one CacheGroup, with the non-optimistic Root object belonging
// to another CacheGroup, allowing resultCaching dependencies to be tracked
// separately for optimistic and non-optimistic entity data.
var CacheGroup = /** @class */ (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? (0,lib/* dep */.yN)() : null;
        this.keyMaker = new trie_lib/* Trie */.b(canUse/* canUseWeakMap */.et);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = (0,helpers/* fieldNameFromStoreName */.iJ)(storeFieldName);
            if (fieldName !== storeFieldName) {
                // Fields with arguments that contribute extra identifying
                // information to the fieldName (thus forming the storeFieldName)
                // depend not only on the full storeFieldName but also on the
                // short fieldName, so the field can be invalidated using either
                // level of specificity.
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), 
            // When storeFieldName === "__exists", that means the entity identified
            // by dataId has either disappeared from the cache or was newly added,
            // so the result caching system would do well to "forget everything it
            // knows" about that object. To achieve that kind of invalidation, we
            // not only dirty the associated result cache entry, but also remove it
            // completely from the dependency graph. For the optimism implementation
            // details, see https://github.com/benjamn/optimism/pull/195.
            storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    // Since field names cannot have '#' characters in them, this method
    // of joining the field name and the ID should be unambiguous, and much
    // cheaper than JSON.stringify([dataId, fieldName]).
    return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        // We use this pseudo-field __exists elsewhere in the EntityStore code to
        // represent changes in the existence of the entity object identified by
        // entityId. This dependency gets reliably dirtied whenever an object with
        // this ID is deleted (or newly created) within this group, so any result
        // cache entries (for example, StoreReader#executeSelectionSet results) that
        // depend on __exists for this entityId will get dirtied as well, leading to
        // the eventual recomputation (instead of reuse) of those result objects the
        // next time someone reads them from the cache.
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    // Refer to this class as EntityStore.Root outside this namespace.
    var Root = /** @class */ (function (_super) {
        (0,tslib_es6.__extends)(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new trie_lib/* Trie */.b(canUse/* canUseWeakMap */.et);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            // Adding an optimistic Layer on top of the Root actually adds the Layer
            // on top of the Stump, so the Stump always comes between the Root and
            // any Layer objects that we've added.
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            // Never remove the root layer.
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(EntityStore || (EntityStore = {}));
// Not exported, since all Layer instances are created by the addLayer method
// of the EntityStore.Root class.
var Layer = /** @class */ (function (_super) {
    (0,tslib_es6.__extends)(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        // Remove all instances of the given id, not just the first one.
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                // Dirty every ID we're removing. Technically we might be able to avoid
                // dirtying fields that have values in higher layers, but we don't have
                // easy access to higher layers here, and we're about to recreate those
                // layers anyway (see parent.addLayer below).
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        // The StoreObject identified by dataId was defined in this layer
                        // but will be undefined in the parent layer, so we can delete the
                        // whole entity using this.delete(dataId). Since we're about to
                        // throw this layer away, the only goal of this deletion is to dirty
                        // the removed fields.
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        // This layer had an entry for dataId but it was undefined, which
                        // means the entity was deleted in this layer, and it's about to
                        // become undeleted when we remove this layer, so we need to dirty
                        // all fields that are about to be reexposed.
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        // If ownStoreObject is not exactly the same as parentStoreObject,
                        // dirty any fields whose values will change as a result of this
                        // removal.
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!(0,equality_lib/* equal */.L)(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        // No changes are necessary if the parent chain remains identical.
        if (parent === this.parent)
            return this;
        // Recreate this layer on top of the new parent.
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return helpers/* hasOwn */.$3.call(this.data, dataId) ? (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, 
        // @ts-expect-error
        arguments);
    };
    return Layer;
}(EntityStore));
// Represents a Layer permanently installed just above the Root, which allows
// reading optimistically (and registering optimistic dependencies) even when
// no optimistic layers are currently active. The stump.group CacheGroup object
// is shared by any/all Layer objects added on top of the Stump.
var Stump = /** @class */ (function (_super) {
    (0,tslib_es6.__extends)(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        // Never remove the Stump layer.
        return this;
    };
    Stump.prototype.merge = function (older, newer) {
        // We never want to write any data into the Stump, so we forward any merge
        // calls to the Root instead. Another option here would be to throw an
        // exception, but the toReference(object, true) function can sometimes
        // trigger Stump writes (which used to be Root writes, before the Stump
        // concept was introduced).
        return this.parent.merge(older, newer);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    // Wherever there is a key collision, prefer the incoming value, unless
    // it is deeply equal to the existing value. It's worth checking deep
    // equality here (even though blindly returning incoming would be
    // logically correct) because preserving the referential identity of
    // existing data can prevent needless rereading and rerendering.
    return (0,equality_lib/* equal */.L)(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    // When result caching is disabled, store.depend will be null.
    return !!(store instanceof EntityStore && store.group.caching);
}
//# sourceMappingURL=entityStore.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/arrays.js
var arrays = __webpack_require__(45636);
;// ./node_modules/@apollo/client/cache/inmemory/object-canon.js




function shallowCopy(value) {
    if ((0,objects/* isNonNullObject */.U)(value)) {
        return (0,arrays/* isArray */.c)(value) ?
            value.slice(0)
            : (0,tslib_es6.__assign)({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
// When programmers talk about the "canonical form" of an object, they
// usually have the following meaning in mind, which I've copied from
// https://en.wiktionary.org/wiki/canonical_form:
//
// 1. A standard or normal presentation of a mathematical entity [or
//    object]. A canonical form is an element of a set of representatives
//    of equivalence classes of forms such that there is a function or
//    procedure which projects every element of each equivalence class
//    onto that one element, the canonical form of that equivalence
//    class. The canonical form is expected to be simpler than the rest of
//    the forms in some way.
//
// That's a long-winded way of saying any two objects that have the same
// canonical form may be considered equivalent, even if they are !==,
// which usually means the objects are structurally equivalent (deeply
// equal), but don't necessarily use the same memory.
//
// Like a literary or musical canon, this ObjectCanon class represents a
// collection of unique canonical items (JavaScript objects), with the
// important property that canon.admit(a) === canon.admit(b) if a and b
// are deeply equal to each other. In terms of the definition above, the
// canon.admit method is the "function or procedure which projects every"
// object "onto that one element, the canonical form."
//
// In the worst case, the canonicalization process may involve looking at
// every property in the provided object tree, so it takes the same order
// of time as deep equality checking. Fortunately, already-canonicalized
// objects are returned immediately from canon.admit, so the presence of
// canonical subtrees tends to speed up canonicalization.
//
// Since consumers of canonical objects can check for deep equality in
// constant time, canonicalizing cache results can massively improve the
// performance of application code that skips re-rendering unchanged
// results, such as "pure" UI components in a framework like React.
//
// Of course, since canonical objects may be shared widely between
// unrelated consumers, it's important to think of them as immutable, even
// though they are not actually frozen with Object.freeze in production,
// due to the extra performance overhead that comes with frozen objects.
//
// Custom scalar objects whose internal class name is neither Array nor
// Object can be included safely in the admitted tree, but they will not
// be replaced with a canonical version (to put it another way, they are
// assumed to be canonical already).
//
// If we ignore custom objects, no detection of cycles or repeated object
// references is currently required by the StoreReader class, since
// GraphQL result objects are JSON-serializable trees (and thus contain
// neither cycles nor repeated subtrees), so we can avoid the complexity
// of keeping track of objects we've already seen during the recursion of
// the admit method.
//
// In the future, we may consider adding additional cases to the switch
// statement to handle other common object types, such as "[object Date]"
// objects, as needed.
var ObjectCanon = /** @class */ (function () {
    function ObjectCanon() {
        // Set of all canonical objects this ObjectCanon has admitted, allowing
        // canon.admit to return previously-canonicalized objects immediately.
        this.known = new (canUse/* canUseWeakSet */.En ? WeakSet : Set)();
        // Efficient storage/lookup structure for canonical objects.
        this.pool = new trie_lib/* Trie */.b(canUse/* canUseWeakMap */.et);
        // Make the ObjectCanon assume this value has already been
        // canonicalized.
        this.passes = new WeakMap();
        // Arrays that contain the same elements in a different order can share
        // the same SortedKeysInfo object, to save memory.
        this.keysByJSON = new Map();
        // This has to come last because it depends on keysByJSON.
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return (0,objects/* isNonNullObject */.U)(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if ((0,objects/* isNonNullObject */.U)(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if ((0,objects/* isNonNullObject */.U)(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    // Arrays are looked up in the Trie using their recursively
                    // canonicalized elements, and the known version of the array is
                    // preserved as node.array.
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add((node.array = array));
                        // Since canonical arrays may be shared widely between
                        // unrelated consumers, it's important to regard them as
                        // immutable, even if they are not frozen in production.
                        if (globalThis.__DEV__ !== false) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    // Objects are looked up in the Trie by their prototype (which
                    // is *not* recursively canonicalized), followed by a JSON
                    // representation of their (sorted) keys, followed by the
                    // sequence of recursively canonicalized values corresponding to
                    // those keys. To keep the final results unambiguous with other
                    // sequences (such as arrays that just happen to contain [proto,
                    // keys.json, value1, value2, ...]), the known version of the
                    // object is stored as node.object.
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = (node.object = Object.create(proto_1));
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        // Since canonical objects may be shared widely between
                        // unrelated consumers, it's important to regard them as
                        // immutable, even if they are not frozen in production.
                        if (globalThis.__DEV__ !== false) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    // It's worthwhile to cache the sorting of arrays of strings, since the
    // same initial unsorted arrays tend to be encountered many times.
    // Fortunately, we can reuse the Trie machinery to look up the sorted
    // arrays in linear time (which is faster than sorting large arrays).
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, (node.keys = { sorted: keys, json: json }));
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());

//# sourceMappingURL=object-canon.js.map
;// ./node_modules/@apollo/client/cache/inmemory/readFromStore.js









function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        // We split out this property so we can pass different values
        // independently without modifying options.context itself.
        options.context.canonizeResults,
    ];
}
var StoreReader = /** @class */ (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (canUse/* canUseWeakMap */.et ? WeakMap : Map)();
        this.config = (0,compact/* compact */.o)(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: (0,helpers/* shouldCanonizeResults */.Xx)(config),
        });
        this.canon = config.canon || new ObjectCanon();
        // memoized functions in this class will be "garbage-collected"
        // by recreating the whole `StoreReader` in
        // `InMemoryCache.resetResultsCache`
        // (triggered from `InMemoryCache.gc` with `resetResultCache: true`)
        this.executeSelectionSet = (0,lib/* wrap */.LV)(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            // Negate this boolean option so we can find out if we've already read
            // this result using the other boolean value.
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, other), { 
                        // If we previously read this result without canonizing it, we can
                        // reuse that result simply by canonizing it now.
                        result: _this.canon.admit(other.result) });
                }
                // If we previously read this result with canonization enabled, we can
                // return that canonized result as-is.
                return other;
            }
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            // Finally, if we didn't find any useful previous results, run the real
            // execSelectionSetImpl method with the given options.
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize ||
                sizes/* cacheSizes */.v["inMemoryCache.executeSelectionSet"] ||
                50000 /* defaultCacheSizes["inMemoryCache.executeSelectionSet"] */,
            keyArgs: execSelectionSetKeyArgs,
            // Note that the parameters of makeCacheKey are determined by the
            // array returned by keyArgs.
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(selectionSet, (0,storeUtils/* isReference */.A_)(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            },
        });
        this.executeSubSelectedArray = (0,lib/* wrap */.LV)(function (options) {
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize ||
                sizes/* cacheSizes */.v["inMemoryCache.executeSubSelectedArray"] ||
                10000 /* defaultCacheSizes["inMemoryCache.executeSubSelectedArray"] */,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            },
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new ObjectCanon();
    };
    /**
     * Given a store and a query, return as much of the result as possible and
     * identify if any data was missing from the store.
     */
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, (0,getFromAST/* getDefaultValues */.wY)((0,getFromAST/* getQueryDefinition */.AT)(query))), variables);
        var rootRef = (0,storeUtils/* makeReference */.WU)(rootId);
        var execResult = this.executeSelectionSet({
            selectionSet: (0,getFromAST/* getMainDefinition */.Vn)(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: (0,tslib_es6.__assign)({ store: store, query: query, policies: policies, variables: variables, varString: (0,canonicalStringify/* canonicalStringify */.M)(variables), canonizeResults: canonizeResults }, (0,helpers/* extractFragmentContext */.lq)(query, this.config.fragments)),
        });
        var missing;
        if (execResult.missing) {
            // For backwards compatibility we still report an array of
            // MissingFieldError objects, even though there will only ever be at most
            // one of them, now that all missing field error messages are grouped
            // together in the execResult.missing tree.
            missing = [
                new common/* MissingFieldError */.Z(firstMissing(execResult.missing), execResult.missing, query, variables),
            ];
            if (!returnPartialData) {
                throw missing[0];
            }
        }
        return {
            result: execResult.result,
            complete: !missing,
            missing: missing,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if (supportsResultCaching(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, 
            // If result is canonical, then it could only have been previously
            // cached by the canonizing version of executeSelectionSet, so we can
            // avoid checking both possibilities here.
            this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    // Uncached version of executeSelectionSet.
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if ((0,storeUtils/* isReference */.A_)(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object"),
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var objectsToMerge = [];
        var missing;
        var missingMerger = new mergeDeep/* DeepMerger */.ZI();
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            // Ensure we always include a default value for the __typename
            // field, if we have one, and this.config.addTypename is true. Note
            // that this field can be overridden by other merged objects.
            objectsToMerge.push({ __typename: typename });
        }
        function handleMissing(result, resultName) {
            var _a;
            if (result.missing) {
                missing = missingMerger.merge(missing, (_a = {},
                    _a[resultName] = result.missing,
                    _a));
            }
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a, _b;
            // Omit fields with directives @skip(if: <truthy value>) or
            // @include(if: <falsy value>).
            if (!(0,directives/* shouldInclude */.MS)(selection, variables))
                return;
            if ((0,storeUtils/* isField */.dt)(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = (0,storeUtils/* resultKeyNameFromField */.ue)(selection);
                if (fieldValue === void 0) {
                    if (!transform/* addTypenameToDocument */.XY.added(selection)) {
                        missing = missingMerger.merge(missing, (_a = {},
                            _a[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat((0,storeUtils/* isReference */.A_)(objectOrReference) ?
                                objectOrReference.__ref + " object"
                                : "object " + JSON.stringify(objectOrReference, null, 2)),
                            _a));
                    }
                }
                else if ((0,arrays/* isArray */.c)(fieldValue)) {
                    if (fieldValue.length > 0) {
                        fieldValue = handleMissing(_this.executeSubSelectedArray({
                            field: selection,
                            array: fieldValue,
                            enclosingRef: enclosingRef,
                            context: context,
                        }), resultName);
                    }
                }
                else if (!selection.selectionSet) {
                    // If the field does not have a selection set, then we handle it
                    // as a scalar value. To keep this.canon from canonicalizing
                    // this value, we use this.canon.pass to wrap fieldValue in a
                    // Pass object that this.canon.admit will later unwrap as-is.
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    // In this case, because we know the field has a selection set,
                    // it must be trying to query a GraphQLObjectType, which is why
                    // fieldValue must be != null.
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: (0,storeUtils/* isReference */.A_)(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }), resultName);
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
                }
            }
            else {
                var fragment = (0,fragments/* getFragmentFromSelection */.HQ)(selection, context.lookupFragment);
                if (!fragment && selection.kind === kinds/* Kind */.b.FRAGMENT_SPREAD) {
                    throw (0,globals/* newInvariantError */.vA)(10, selection.name.value);
                }
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var result = (0,mergeDeep/* mergeDeepArray */.IM)(objectsToMerge);
        var finalResult = { result: result, missing: missing };
        var frozen = context.canonizeResults ?
            this.canon.admit(finalResult)
            // Since this.canon is normally responsible for freezing results (only in
            // development), freeze them manually if canonization is disabled.
            : (0,maybeDeepFreeze/* maybeDeepFreeze */.G)(finalResult);
        // Store this result with its selection set so that we can quickly
        // recognize it again in the StoreReader#isFresh method.
        if (frozen.result) {
            this.knownResults.set(frozen.result, selectionSet);
        }
        return frozen;
    };
    // Uncached version of executeSubSelectedArray.
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        var missingMerger = new mergeDeep/* DeepMerger */.ZI();
        function handleMissing(childResult, i) {
            var _a;
            if (childResult.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[i] = childResult.missing, _a));
            }
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            // null value in array
            if (item === null) {
                return null;
            }
            // This is a nested array, recurse
            if ((0,arrays/* isArray */.c)(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            // This is an object, run the selection set on it
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: (0,storeUtils/* isReference */.A_)(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (globalThis.__DEV__ !== false) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());

function firstMissing(tree) {
    try {
        JSON.stringify(tree, function (_, value) {
            if (typeof value === "string")
                throw value;
            return value;
        });
    }
    catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if ((0,objects/* isNonNullObject */.U)(value)) {
                (0,globals/* invariant */.V1)(
                    !(0,storeUtils/* isReference */.A_)(value),
                    11,
                    (0,helpers/* getTypenameFromStoreObject */.Ui)(store, value),
                    field.name.value
                );
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}
//# sourceMappingURL=readFromStore.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/cloneDeep.js
var cloneDeep = __webpack_require__(91495);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
var stringifyForDisplay = __webpack_require__(3813);
// EXTERNAL MODULE: ./node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var reactiveVars = __webpack_require__(90738);
;// ./node_modules/@apollo/client/cache/inmemory/key-extractor.js



// Mapping from JSON-encoded KeySpecifier strings to associated information.
var specifierInfoCache = Object.create(null);
function lookupSpecifierInfo(spec) {
    // It's safe to encode KeySpecifier arrays with JSON.stringify, since they're
    // just arrays of strings or nested KeySpecifier arrays, and the order of the
    // array elements is important (and suitably preserved by JSON.stringify).
    var cacheKey = JSON.stringify(spec);
    return (specifierInfoCache[cacheKey] ||
        (specifierInfoCache[cacheKey] = Object.create(null)));
}
function keyFieldsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return (info.keyFieldsFn || (info.keyFieldsFn = function (object, context) {
            var extract = function (from, key) {
                return context.readField(key, from);
            };
            var keyObject = (context.keyObject = collectSpecifierPaths(specifier, function (schemaKeyPath) {
                var extracted = extractKeyPath(context.storeObject, schemaKeyPath, 
                // Using context.readField to extract paths from context.storeObject
                // allows the extraction to see through Reference objects and respect
                // custom read functions.
                extract);
                if (extracted === void 0 &&
                    object !== context.storeObject &&
                    helpers/* hasOwn */.$3.call(object, schemaKeyPath[0])) {
                    // If context.storeObject fails to provide a value for the requested
                    // path, fall back to the raw result object, if it has a top-level key
                    // matching the first key in the path (schemaKeyPath[0]). This allows
                    // key fields included in the written data to be saved in the cache
                    // even if they are not selected explicitly in context.selectionSet.
                    // Not being mentioned by context.selectionSet is convenient here,
                    // since it means these extra fields cannot be affected by field
                    // aliasing, which is why we can use extractKey instead of
                    // context.readField for this extraction.
                    extracted = extractKeyPath(object, schemaKeyPath, extractKey);
                }
                (0,globals/* invariant */.V1)(extracted !== void 0, 5, schemaKeyPath.join("."), object);
                return extracted;
            }));
            return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
        }));
}
// The keyArgs extraction process is roughly analogous to keyFields extraction,
// but there are no aliases involved, missing fields are tolerated (by merely
// omitting them from the key), and drawing from field.directives or variables
// is allowed (in addition to drawing from the field's arguments object).
// Concretely, these differences mean passing a different key path extractor
// function to collectSpecifierPaths, reusing the shared extractKeyPath helper
// wherever possible.
function keyArgsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return (info.keyArgsFn ||
        (info.keyArgsFn = function (args, _a) {
            var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
            var collected = collectSpecifierPaths(specifier, function (keyPath) {
                var firstKey = keyPath[0];
                var firstChar = firstKey.charAt(0);
                if (firstChar === "@") {
                    if (field && (0,arrays/* isNonEmptyArray */.E)(field.directives)) {
                        var directiveName_1 = firstKey.slice(1);
                        // If the directive appears multiple times, only the first
                        // occurrence's arguments will be used. TODO Allow repetition?
                        // TODO Cache this work somehow, a la aliasMap?
                        var d = field.directives.find(function (d) { return d.name.value === directiveName_1; });
                        // Fortunately argumentsObjectFromField works for DirectiveNode!
                        var directiveArgs = d && (0,storeUtils/* argumentsObjectFromField */.MB)(d, variables);
                        // For directives without arguments (d defined, but directiveArgs ===
                        // null), the presence or absence of the directive still counts as
                        // part of the field key, so we return null in those cases. If no
                        // directive with this name was found for this field (d undefined and
                        // thus directiveArgs undefined), we return undefined, which causes
                        // this value to be omitted from the key object returned by
                        // collectSpecifierPaths.
                        return (directiveArgs &&
                            extractKeyPath(directiveArgs, 
                            // If keyPath.length === 1, this code calls extractKeyPath with an
                            // empty path, which works because it uses directiveArgs as the
                            // extracted value.
                            keyPath.slice(1)));
                    }
                    // If the key started with @ but there was no corresponding directive,
                    // we want to omit this value from the key object, not fall through to
                    // treating @whatever as a normal argument name.
                    return;
                }
                if (firstChar === "$") {
                    var variableName = firstKey.slice(1);
                    if (variables && helpers/* hasOwn */.$3.call(variables, variableName)) {
                        var varKeyPath = keyPath.slice(0);
                        varKeyPath[0] = variableName;
                        return extractKeyPath(variables, varKeyPath);
                    }
                    // If the key started with $ but there was no corresponding variable, we
                    // want to omit this value from the key object, not fall through to
                    // treating $whatever as a normal argument name.
                    return;
                }
                if (args) {
                    return extractKeyPath(args, keyPath);
                }
            });
            var suffix = JSON.stringify(collected);
            // If no arguments were passed to this field, and it didn't have any other
            // field key contributions from directives or variables, hide the empty
            // :{} suffix from the field key. However, a field passed no arguments can
            // still end up with a non-empty :{...} suffix if its key configuration
            // refers to directives or variables.
            if (args || suffix !== "{}") {
                fieldName += ":" + suffix;
            }
            return fieldName;
        }));
}
function collectSpecifierPaths(specifier, extractor) {
    // For each path specified by specifier, invoke the extractor, and repeatedly
    // merge the results together, with appropriate ancestor context.
    var merger = new mergeDeep/* DeepMerger */.ZI();
    return getSpecifierPaths(specifier).reduce(function (collected, path) {
        var _a;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
            // This path is not expected to contain array indexes, so the toMerge
            // reconstruction will not contain arrays. TODO Fix this?
            for (var i = path.length - 1; i >= 0; --i) {
                toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
            }
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, Object.create(null));
}
function getSpecifierPaths(spec) {
    var info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        var paths_1 = (info.paths = []);
        var currentPath_1 = [];
        spec.forEach(function (s, i) {
            if ((0,arrays/* isArray */.c)(s)) {
                getSpecifierPaths(s).forEach(function (p) { return paths_1.push(currentPath_1.concat(p)); });
                currentPath_1.length = 0;
            }
            else {
                currentPath_1.push(s);
                if (!(0,arrays/* isArray */.c)(spec[i + 1])) {
                    paths_1.push(currentPath_1.slice(0));
                    currentPath_1.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    // For each key in path, extract the corresponding child property from obj,
    // flattening arrays if encountered (uncommon for keyFields and keyArgs, but
    // possible). The final result of path.reduce is normalized so unexpected leaf
    // objects have their keys safely sorted. That final result is difficult to
    // type as anything other than any. You're welcome to try to improve the
    // return type, but keep in mind extractKeyPath is not a public function
    // (exported only for testing), so the effort may not be worthwhile unless the
    // limited set of actual callers (see above) pass arguments that TypeScript
    // can statically type. If we know only that path is some array of strings
    // (and not, say, a specific tuple of statically known strings), any (or
    // possibly unknown) is the honest answer.
    extract = extract || extractKey;
    return normalize(path.reduce(function reducer(obj, key) {
        return (0,arrays/* isArray */.c)(obj) ?
            obj.map(function (child) { return reducer(child, key); })
            : obj && extract(obj, key);
    }, object));
}
function normalize(value) {
    // Usually the extracted value will be a scalar value, since most primary
    // key fields are scalar, but just in case we get an object or an array, we
    // need to do some normalization of the order of (nested) keys.
    if ((0,objects/* isNonNullObject */.U)(value)) {
        if ((0,arrays/* isArray */.c)(value)) {
            return value.map(normalize);
        }
        return collectSpecifierPaths(Object.keys(value).sort(), function (path) {
            return extractKeyPath(value, path);
        });
    }
    return value;
}
//# sourceMappingURL=key-extractor.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/masking/utils.js
var utils = __webpack_require__(60857);
;// ./node_modules/@apollo/client/cache/inmemory/policies.js







function argsFromFieldSpecifier(spec) {
    return (spec.args !== void 0 ? spec.args
        : spec.field ? (0,storeUtils/* argumentsObjectFromField */.MB)(spec.field, spec.variables)
            : null);
}
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
// These merge functions can be selected by specifying merge:true or
// merge:false in a field policy.
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = /** @class */ (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        // Map from subtype names to sets of supertype names. Note that this
        // representation inverts the structure of possibleTypes (whose keys are
        // supertypes and whose values are arrays of subtypes) because it tends
        // to be much more efficient to search upwards than downwards.
        this.supertypeMap = new Map();
        // Any fuzzy subtypes specified by possibleTypes will be converted to
        // RegExp objects and recorded here. Every key of this map can also be
        // found in supertypeMap. In many cases this Map will be empty, which
        // means no fuzzy subtype checking will happen in fragmentMatches.
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = (0,tslib_es6.__assign)({ dataIdFromObject: helpers/* defaultDataIdFromObject */.or }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, partialContext) {
        var _a;
        var policies = this;
        var typename = (partialContext &&
            (partialContext.typename || ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename))) ||
            object.__typename;
        // It should be possible to write root Query fields with writeFragment,
        // using { __typename: "Query", ... } as the data, but it does not make
        // sense to allow the same identification behavior for the Mutation and
        // Subscription types, since application code should never be writing
        // directly to (or reading directly from) those root objects.
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        // Default context.storeObject to object if not otherwise provided.
        var storeObject = (partialContext && partialContext.storeObject) || object;
        var context = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, partialContext), { typename: typename, storeObject: storeObject, readField: (partialContext && partialContext.readField) ||
                function () {
                    var options = normalizeReadFieldOptions(arguments, storeObject);
                    return policies.readField(options, {
                        store: policies.cache["data"],
                        variables: options.variables,
                    });
                } });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = (policy && policy.keyFn) || this.config.dataIdFromObject;
        utils/* disableWarningsSlot */.yV.withValue(true, function () {
            while (keyFn) {
                var specifierOrId = keyFn((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, object), storeObject), context);
                if ((0,arrays/* isArray */.c)(specifierOrId)) {
                    keyFn = keyFieldsFnFromSpecifier(specifierOrId);
                }
                else {
                    id = specifierOrId;
                    break;
                }
            }
        });
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = (0,tslib_es6.__rest)(_a, ["queryType", "mutationType", "subscriptionType"]);
            // Though {query,mutation,subscription}Type configurations are rare,
            // it's important to call setRootTypename as early as possible,
            // since these configurations should apply consistently for the
            // entire lifetime of the cache. Also, since only one __typename can
            // qualify as one of these root types, these three properties cannot
            // be inherited, unlike the rest of the incoming properties. That
            // restriction is convenient, because the purpose of this.toBeAdded
            // is to delay the processing of type/field policies until the first
            // time they're used, allowing policies to be added in any order as
            // long as all relevant policies (including policies for supertypes)
            // have been added by the time a given policy is used for the first
            // time. In other words, since inheritance doesn't matter for these
            // properties, there's also no need to delay their processing using
            // the this.toBeAdded queue.
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (helpers/* hasOwn */.$3.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge
                    // Pass merge:true as a shorthand for a merge implementation
                    // that returns options.mergeObjects(existing, incoming).
                    : merge === true ? mergeTrueFn
                        // Pass merge:false to make incoming always replace existing
                        // without any warnings about data clobbering.
                        : merge === false ? mergeFalseFn
                            : existing.merge;
        }
        // Type policies can define merge functions, as an alternative to
        // using field policies to merge child objects.
        setMerge(existing, incoming.merge);
        existing.keyFn =
            // Pass false to disable normalization for this typename.
            keyFields === false ? nullKeyFieldsFn
                // Pass an array of strings to use those fields to compute a
                // composite ID for objects of this typename.
                : (0,arrays/* isArray */.c)(keyFields) ? keyFieldsFnFromSpecifier(keyFields)
                    // Pass a function to take full control over identification.
                    : typeof keyFields === "function" ? keyFields
                        // Leave existing.keyFn unchanged if above cases fail.
                        : existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        // Pass false to disable argument-based differentiation of
                        // field identities.
                        keyArgs === false ? simpleKeyArgsFn
                            // Pass an array of strings to use named arguments to
                            // compute a composite identity for the field.
                            : (0,arrays/* isArray */.c)(keyArgs) ? keyArgsFnFromSpecifier(keyArgs)
                                // Pass a function to take full control over field identity.
                                : typeof keyArgs === "function" ? keyArgs
                                    // Leave existing.keyFn unchanged if above cases fail.
                                    : existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    // If we have both a read and a merge function, assume
                    // keyArgs:false, because read and merge together can take
                    // responsibility for interpreting arguments in and out. This
                    // default assumption can always be overridden by specifying
                    // keyArgs explicitly in the FieldPolicy.
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            (0,globals/* invariant */.V1)(!old || old === which, 6, which);
            // First, delete any old __typename associated with this rootId from
            // rootIdsByTypename.
            if (old)
                delete this.rootIdsByTypename[old];
            // Now make this the only __typename that maps to this rootId.
            this.rootIdsByTypename[typename] = rootId;
            // Finally, update the __typename associated with this rootId.
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            // Make sure all types have an entry in this.supertypeMap, even if
            // their supertype set is empty, so we can return false immediately
            // from policies.fragmentMatches for unknown supertypes.
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(helpers/* TypeOrFieldNameRegExp */.gk);
                if (!match || match[0] !== subtype) {
                    // TODO Don't interpret just any invalid typename as a RegExp.
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!helpers/* hasOwn */.$3.call(this.typePolicies, typename)) {
            var policy_1 = (this.typePolicies[typename] = Object.create(null));
            policy_1.fields = Object.create(null);
            // When the TypePolicy for typename is first accessed, instead of
            // starting with an empty policy object, inherit any properties or
            // fields from the type policies of the supertypes of typename.
            //
            // Any properties or fields defined explicitly within the TypePolicy
            // for typename will take precedence, and if there are multiple
            // supertypes, the properties of policies whose types were added
            // later via addPossibleTypes will take precedence over those of
            // earlier supertypes. TODO Perhaps we should warn about these
            // conflicts in development, and recommend defining the property
            // explicitly in the subtype policy?
            //
            // Field policy inheritance is atomic/shallow: you can't inherit a
            // field policy and then override just its read function, since read
            // and merge functions often need to cooperate, so changing only one
            // of them would be a recipe for inconsistency.
            //
            // Once the TypePolicy for typename has been accessed, its properties can
            // still be updated directly using addTypePolicies, but future changes to
            // inherited supertype policies will not be reflected in this subtype
            // policy, because this code runs at most once per typename.
            var supertypes_1 = this.supertypeMap.get(typename);
            if (!supertypes_1 && this.fuzzySubtypes.size) {
                // To make the inheritance logic work for unknown typename strings that
                // may have fuzzy supertypes, we give this typename an empty supertype
                // set and then populate it with any fuzzy supertypes that match.
                supertypes_1 = this.getSupertypeSet(typename, true);
                // This only works for typenames that are directly matched by a fuzzy
                // supertype. What if there is an intermediate chain of supertypes?
                // While possible, that situation can only be solved effectively by
                // specifying the intermediate relationships via possibleTypes, manually
                // and in a non-fuzzy way.
                this.fuzzySubtypes.forEach(function (regExp, fuzzy) {
                    if (regExp.test(typename)) {
                        // The fuzzy parameter is just the original string version of regExp
                        // (not a valid __typename string), but we can look up the
                        // associated supertype(s) in this.supertypeMap.
                        var fuzzySupertypes = _this.supertypeMap.get(fuzzy);
                        if (fuzzySupertypes) {
                            fuzzySupertypes.forEach(function (supertype) {
                                return supertypes_1.add(supertype);
                            });
                        }
                    }
                });
            }
            if (supertypes_1 && supertypes_1.size) {
                supertypes_1.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = (0,tslib_es6.__rest)(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            // Merge the pending policies into this.typePolicies, in the order they
            // were originally passed to addTypePolicy.
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return (fieldPolicies[fieldName] ||
                (createIfMissing && (fieldPolicies[fieldName] = Object.create(null))));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, (supertypeSet = new Set()));
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        // If the fragment has a type condition but the object we're matching
        // against does not have a __typename, the fragment cannot match.
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        // Common case: fragment type condition and __typename are the same.
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            // We need to check fuzzy subtypes only if we encountered fuzzy
            // subtype strings in addPossibleTypes, and only while writing to
            // the cache, since that's when selectionSetMatchesResult gives a
            // strong signal of fragment matching. The StoreReader class calls
            // policies.fragmentMatches without passing a result object, so
            // needToCheckFuzzySubtypes is always false while reading.
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            // It's important to keep evaluating workQueue.length each time through
            // the loop, because the queue can grow while we're iterating over it.
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(7, typename, supertype);
                        }
                        // Record positive results for faster future lookup.
                        // Unfortunately, we cannot safely cache negative results,
                        // because new possibleTypes data could always be added to the
                        // Policies class.
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    // Start checking fuzzy subtypes only after exhausting all
                    // non-fuzzy subtypes (after the final iteration of the loop).
                    i === workQueue_1.length - 1 &&
                    // We could wait to compare fragment.selectionSet to result
                    // after we verify the supertype, but this check is often less
                    // expensive than that search, and we will have to do the
                    // comparison anyway whenever we find a potential match.
                    (0,helpers/* selectionSetMatchesResult */.T9)(fragment.selectionSet, result, variables)) {
                    // We don't always need to check fuzzy subtypes (if no result
                    // was provided, or !this.fuzzySubtypes.size), but, when we do,
                    // we only want to check them once.
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    // If we find any fuzzy subtypes that match typename, extend the
                    // workQueue to search through the supertypes of those fuzzy
                    // subtypes. Otherwise the for-loop will terminate and we'll
                    // return false below.
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if ((0,arrays/* isArray */.c)(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    // If the custom keyFn returns a falsy value, fall back to
                    // fieldName instead.
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName =
                fieldSpec.field ?
                    (0,storeUtils/* storeKeyNameFromField */.Ii)(fieldSpec.field, fieldSpec.variables)
                    : (0,storeUtils/* getStoreKeyName */.o5)(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        // Returning false from a keyArgs function is like configuring
        // keyArgs: false, but more dynamic.
        if (storeFieldName === false) {
            return fieldName;
        }
        // Make sure custom field names start with the actual field.name.value
        // of the field, so we can always figure out which properties of a
        // StoreObject correspond to which original field names.
        return fieldName === (0,helpers/* fieldNameFromStoreName */.iJ)(storeFieldName) ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = (0,helpers/* fieldNameFromStoreName */.iJ)(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage((0,storeUtils/* isReference */.A_)(objectOrReference) ?
                objectOrReference.__ref
                : objectOrReference, storeFieldName));
            // Call read(existing, readOptions) with cacheSlot holding this.cache.
            return reactiveVars/* cacheSlot */.bl.withValue(this.cache, read, [
                existing,
                readOptions,
            ]);
        }
        return existing;
    };
    Policies.prototype.getReadFunction = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            // Instead of going to the trouble of creating a full
            // FieldFunctionOptions object and calling mergeTrueFn, we can
            // simply call mergeObjects, as mergeTrueFn would.
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            // Likewise for mergeFalseFn, whose implementation is even simpler.
            return incoming;
        }
        // If cache.writeQuery or cache.writeFragment was called with
        // options.overwrite set to true, we still call merge functions, but
        // the existing data is always undefined, so the merge function will
        // not attempt to combine the incoming data with the existing data.
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, 
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0, {
            typename: typename,
            fieldName: field.name.value,
            field: field,
            variables: context.variables,
        }, context, storage || Object.create(null)));
    };
    return Policies;
}());

function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = (0,helpers/* fieldNameFromStoreName */.iJ)(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: storeUtils/* isReference */.A_,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function () {
            return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
    var options;
    if (typeof fieldNameOrOptions === "string") {
        options = {
            fieldName: fieldNameOrOptions,
            // Default to objectOrReference only when no second argument was
            // passed for the from parameter, not when undefined is explicitly
            // passed as the second argument.
            from: argc > 1 ? from : objectOrReference,
        };
    }
    else {
        options = (0,tslib_es6.__assign)({}, fieldNameOrOptions);
        // Default to objectOrReference only when fieldNameOrOptions.from is
        // actually omitted, rather than just undefined.
        if (!helpers/* hasOwn */.$3.call(options, "from")) {
            options.from = objectOrReference;
        }
    }
    if (globalThis.__DEV__ !== false && options.from === void 0) {
        globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(8, (0,stringifyForDisplay/* stringifyForDisplay */.p)(Array.from(readFieldArgs)));
    }
    if (void 0 === options.variables) {
        options.variables = variables;
    }
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if ((0,arrays/* isArray */.c)(existing) || (0,arrays/* isArray */.c)(incoming)) {
            throw (0,globals/* newInvariantError */.vA)(9);
        }
        // These dynamic checks are necessary because the parameters of a
        // custom merge function can easily have the any type, so the type
        // system cannot always enforce the StoreObject | Reference parameter
        // types of options.mergeObjects.
        if ((0,objects/* isNonNullObject */.U)(existing) && (0,objects/* isNonNullObject */.U)(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if ((0,storeUtils/* isReference */.A_)(existing) && (0,helpers/* storeValueIsStoreObject */.d1)(incoming)) {
                // Update the normalized EntityStore for the entity identified by
                // existing.__ref, preferring/overwriting any fields contributed by the
                // newer incoming StoreObject.
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if ((0,helpers/* storeValueIsStoreObject */.d1)(existing) && (0,storeUtils/* isReference */.A_)(incoming)) {
                // Update the normalized EntityStore for the entity identified by
                // incoming.__ref, taking fields from the older existing object only if
                // those fields are not already present in the newer StoreObject
                // identified by incoming.__ref.
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if ((0,helpers/* storeValueIsStoreObject */.d1)(existing) &&
                (0,helpers/* storeValueIsStoreObject */.d1)(incoming)) {
                return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, existing), incoming);
            }
        }
        return incoming;
    };
}
//# sourceMappingURL=policies.js.map
;// ./node_modules/@apollo/client/cache/inmemory/writeToStore.js








// Since there are only four possible combinations of context.clientOnly and
// context.deferred values, we should need at most four "flavors" of any given
// WriteContext. To avoid creating multiple copies of the same context, we cache
// the contexts in the context.flavors Map (shared by all flavors) according to
// their clientOnly and deferred values (always in that order).
function getContextFlavor(context, clientOnly, deferred) {
    var key = "".concat(clientOnly).concat(deferred);
    var flavored = context.flavors.get(key);
    if (!flavored) {
        context.flavors.set(key, (flavored =
            context.clientOnly === clientOnly && context.deferred === deferred ?
                context
                : (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, context), { clientOnly: clientOnly, deferred: deferred })));
    }
    return flavored;
}
var StoreWriter = /** @class */ (function () {
    function StoreWriter(cache, reader, fragments) {
        this.cache = cache;
        this.reader = reader;
        this.fragments = fragments;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = (0,getFromAST/* getOperationDefinition */.Vu)(query);
        var merger = (0,helpers/* makeProcessedFieldsMerger */.mv)();
        variables = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, (0,getFromAST/* getDefaultValues */.wY)(operationDefinition)), variables);
        var context = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({ store: store, written: Object.create(null), merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            }, variables: variables, varString: (0,canonicalStringify/* canonicalStringify */.M)(variables) }, (0,helpers/* extractFragmentContext */.lq)(query, this.fragments)), { overwrite: !!overwrite, incomingById: new Map(), clientOnly: false, deferred: false, flavors: new Map() });
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map() },
            context: context,
        });
        if (!(0,storeUtils/* isReference */.A_)(ref)) {
            throw (0,globals/* newInvariantError */.vA)(12, result);
        }
        // So far, the store has not been modified, so now it's time to process
        // context.incomingById and merge those incoming fields into context.store.
        context.incomingById.forEach(function (_a, dataId) {
            var storeObject = _a.storeObject, mergeTree = _a.mergeTree, fieldNodeSet = _a.fieldNodeSet;
            var entityRef = (0,storeUtils/* makeReference */.WU)(dataId);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
                if ((0,storeUtils/* isReference */.A_)(applied)) {
                    // Assume References returned by applyMerges have already been merged
                    // into the store. See makeMergeObjectsFunction in policies.ts for an
                    // example of how this can happen.
                    return;
                }
                // Otherwise, applyMerges returned a StoreObject, whose fields we should
                // merge into the store (see store.merge statement below).
                storeObject = applied;
            }
            if (globalThis.__DEV__ !== false && !context.overwrite) {
                var fieldsWithSelectionSets_1 = Object.create(null);
                fieldNodeSet.forEach(function (field) {
                    if (field.selectionSet) {
                        fieldsWithSelectionSets_1[field.name.value] = true;
                    }
                });
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1[(0,helpers/* fieldNameFromStoreName */.iJ)(storeFieldName)] ===
                        true;
                };
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach(function (storeFieldName) {
                    // If a merge function was defined for this field, trust that it
                    // did the right thing about (not) clobbering data. If the field
                    // has no selection set, it's a scalar field, so it doesn't need
                    // a merge function (even if it's an object, like JSON data).
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, storeObject);
        });
        // Any IDs written explicitly to the cache will be retained as
        // reachable root IDs for garbage collection purposes. Although this
        // logic includes root IDs like ROOT_QUERY and ROOT_MUTATION, their
        // retainment counts are effectively ignored because cache.gc() always
        // includes them in its root ID set.
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, 
        // This object allows processSelectionSet to report useful information
        // to its callers without explicitly returning that information.
        mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        // This variable will be repeatedly updated using context.merge to
        // accumulate all fields that need to be written into the store.
        var incoming = Object.create(null);
        // If typename was not passed in, infer it. Note that typename is
        // always passed in for tricky-to-infer cases such as "Query" for
        // ROOT_QUERY.
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            (0,storeUtils/* getTypenameFromResult */.D$)(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incoming.__typename = typename;
        }
        // This readField function will be passed as context.readField in the
        // KeyFieldsContext object created within policies.identify (called below).
        // In addition to reading from the existing context.store (thanks to the
        // policies.readField(options, context) line at the very bottom), this
        // version of readField can read from Reference objects that are currently
        // pending in context.incomingById, which is important whenever keyFields
        // need to be extracted from a child object that processSelectionSet has
        // turned into a Reference.
        var readField = function () {
            var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
            if ((0,storeUtils/* isReference */.A_)(options.from)) {
                var info = context.incomingById.get(options.from.__ref);
                if (info) {
                    var result_1 = policies.readField((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { from: info.storeObject }), context);
                    if (result_1 !== void 0) {
                        return result_1;
                    }
                }
            }
            return policies.readField(options, context);
        };
        var fieldNodeSet = new Set();
        this.flattenFields(selectionSet, result, 
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        context, typename).forEach(function (context, field) {
            var _a;
            var resultFieldKey = (0,storeUtils/* resultKeyNameFromField */.ue)(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                var storeFieldName = policies.getStoreFieldName({
                    typename: typename,
                    fieldName: field.name.value,
                    field: field,
                    variables: context.variables,
                });
                var childTree = getChildMergeTree(mergeTree, storeFieldName);
                var incomingValue = _this.processFieldValue(value, field, 
                // Reset context.clientOnly and context.deferred to their default
                // values before processing nested selection sets.
                field.selectionSet ?
                    getContextFlavor(context, false, false)
                    : context, childTree);
                // To determine if this field holds a child object with a merge function
                // defined in its type policy (see PR #7070), we need to figure out the
                // child object's __typename.
                var childTypename = void 0;
                // The field's value can be an object that has a __typename only if the
                // field has a selection set. Otherwise incomingValue is scalar.
                if (field.selectionSet &&
                    ((0,storeUtils/* isReference */.A_)(incomingValue) || (0,helpers/* storeValueIsStoreObject */.d1)(incomingValue))) {
                    childTypename = readField("__typename", incomingValue);
                }
                var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge) {
                    childTree.info = {
                        // TODO Check compatibility against any existing childTree.field?
                        field: field,
                        typename: typename,
                        merge: merge,
                    };
                }
                else {
                    maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                }
                incoming = context.merge(incoming, (_a = {},
                    _a[storeFieldName] = incomingValue,
                    _a));
            }
            else if (globalThis.__DEV__ !== false &&
                !context.clientOnly &&
                !context.deferred &&
                !transform/* addTypenameToDocument */.XY.added(field) &&
                // If the field has a read function, it may be a synthetic field or
                // provide a default value, so its absence from the written data should
                // not be cause for alarm.
                !policies.getReadFunction(typename, field.name.value)) {
                globalThis.__DEV__ !== false && globals/* invariant */.V1.error(13, (0,storeUtils/* resultKeyNameFromField */.ue)(field), result);
            }
        });
        // Identify the result object, even if dataId was already provided,
        // since we always need keyObject below.
        try {
            var _b = policies.identify(result, {
                typename: typename,
                selectionSet: selectionSet,
                fragmentMap: context.fragmentMap,
                storeObject: incoming,
                readField: readField,
            }), id = _b[0], keyObject = _b[1];
            // If dataId was not provided, fall back to the id just generated by
            // policies.identify.
            dataId = dataId || id;
            // Write any key fields that were used during identification, even if
            // they were not mentioned in the original query.
            if (keyObject) {
                // TODO Reverse the order of the arguments?
                incoming = context.merge(incoming, keyObject);
            }
        }
        catch (e) {
            // If dataId was provided, tolerate failure of policies.identify.
            if (!dataId)
                throw e;
        }
        if ("string" === typeof dataId) {
            var dataRef = (0,storeUtils/* makeReference */.WU)(dataId);
            // Avoid processing the same entity object using the same selection
            // set more than once. We use an array instead of a Set since most
            // entity IDs will be written using only one selection set, so the
            // size of this array is likely to be very small, meaning indexOf is
            // likely to be faster than Set.prototype.has.
            var sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0)
                return dataRef;
            sets.push(selectionSet);
            // If we're about to write a result object into the store, but we
            // happen to know that the exact same (===) result object would be
            // returned if we were to reread the result with the same inputs,
            // then we can skip the rest of the processSelectionSet work for
            // this object, and immediately return a Reference to it.
            if (this.reader &&
                this.reader.isFresh(result, dataRef, selectionSet, context)) {
                return dataRef;
            }
            var previous_1 = context.incomingById.get(dataId);
            if (previous_1) {
                previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
                previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
                fieldNodeSet.forEach(function (field) { return previous_1.fieldNodeSet.add(field); });
            }
            else {
                context.incomingById.set(dataId, {
                    storeObject: incoming,
                    // Save a reference to mergeTree only if it is not empty, because
                    // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
                    // reused for entirely different parts of the result tree.
                    mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                    fieldNodeSet: fieldNodeSet,
                });
            }
            return dataRef;
        }
        return incoming;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            // In development, we need to clone scalar values so that they can be
            // safely frozen with maybeDeepFreeze in readFromStore.ts. In production,
            // it's cheaper to store the scalar values directly in the cache.
            return globalThis.__DEV__ !== false ? (0,cloneDeep/* cloneDeep */.m)(value) : value;
        }
        if ((0,arrays/* isArray */.c)(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    // Implements https://spec.graphql.org/draft/#sec-Field-Collection, but with
    // some additions for tracking @client and @defer directives.
    StoreWriter.prototype.flattenFields = function (selectionSet, result, context, typename) {
        if (typename === void 0) { typename = (0,storeUtils/* getTypenameFromResult */.D$)(result, selectionSet, context.fragmentMap); }
        var fieldMap = new Map();
        var policies = this.cache.policies;
        var limitingTrie = new trie_lib/* Trie */.b(false); // No need for WeakMap, since limitingTrie does not escape.
        (function flatten(selectionSet, inheritedContext) {
            var visitedNode = limitingTrie.lookup(selectionSet, 
            // Because we take inheritedClientOnly and inheritedDeferred into
            // consideration here (in addition to selectionSet), it's possible for
            // the same selection set to be flattened more than once, if it appears
            // in the query with different @client and/or @directive configurations.
            inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited)
                return;
            visitedNode.visited = true;
            selectionSet.selections.forEach(function (selection) {
                if (!(0,directives/* shouldInclude */.MS)(selection, context.variables))
                    return;
                var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
                if (
                // Since the presence of @client or @defer on this field can only
                // cause clientOnly or deferred to become true, we can skip the
                // forEach loop if both clientOnly and deferred are already true.
                !(clientOnly && deferred) &&
                    (0,arrays/* isNonEmptyArray */.E)(selection.directives)) {
                    selection.directives.forEach(function (dir) {
                        var name = dir.name.value;
                        if (name === "client")
                            clientOnly = true;
                        if (name === "defer") {
                            var args = (0,storeUtils/* argumentsObjectFromField */.MB)(dir, context.variables);
                            // The @defer directive takes an optional args.if boolean
                            // argument, similar to @include(if: boolean). Note that
                            // @defer(if: false) does not make context.deferred false, but
                            // instead behaves as if there was no @defer directive.
                            if (!args || args.if !== false) {
                                deferred = true;
                            }
                            // TODO In the future, we may want to record args.label using
                            // context.deferred, if a label is specified.
                        }
                    });
                }
                if ((0,storeUtils/* isField */.dt)(selection)) {
                    var existing = fieldMap.get(selection);
                    if (existing) {
                        // If this field has been visited along another recursive path
                        // before, the final context should have clientOnly or deferred set
                        // to true only if *all* paths have the directive (hence the &&).
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                }
                else {
                    var fragment = (0,fragments/* getFragmentFromSelection */.HQ)(selection, context.lookupFragment);
                    if (!fragment && selection.kind === kinds/* Kind */.b.FRAGMENT_SPREAD) {
                        throw (0,globals/* newInvariantError */.vA)(14, selection.name.value);
                    }
                    if (fragment &&
                        policies.fragmentMatches(fragment, typename, result, context.variables)) {
                        flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                    }
                }
            });
        })(selectionSet, context);
        return fieldMap;
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !(0,storeUtils/* isReference */.A_)(incoming)) {
            var e_1 = 
            // Items in the same position in different arrays are not
            // necessarily related to each other, so when incoming is an array
            // we process its elements as if there was no existing data.
            (!(0,arrays/* isArray */.c)(incoming) &&
                // Likewise, existing must be either a Reference or a StoreObject
                // in order for its fields to be safe to merge with the fields of
                // the incoming object.
                ((0,storeUtils/* isReference */.A_)(existing) || (0,helpers/* storeValueIsStoreObject */.d1)(existing))) ?
                existing
                : void 0;
            // This narrowing is implied by mergeTree.map.size > 0 and
            // !isReference(incoming), though TypeScript understandably cannot
            // hope to infer this type.
            var i_1 = incoming;
            // The options.storage objects provided to read and merge functions
            // are derived from the identity of the parent object plus a
            // sequence of storeFieldName strings/numbers identifying the nested
            // field name path of each field value to be merged.
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [(0,storeUtils/* isReference */.A_)(e_1) ? e_1.__ref : e_1];
            }
            // It's possible that applying merge functions to this subtree will
            // not change the incoming data, so this variable tracks the fields
            // that did change, so we can create a new incoming object when (and
            // only when) at least one incoming field has changed. We use a Map
            // to preserve the type of numeric keys.
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return ((0,arrays/* isArray */.c)(from) ?
                    typeof name === "number" ?
                        from[name]
                        : void 0
                    : context.store.getFieldValue(from, String(name)));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                // If we have no incoming data, leave any existing data untouched.
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map();
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    (0,globals/* invariant */.V1)(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                // Shallow clone i so we can add changed fields to it.
                incoming = ((0,arrays/* isArray */.c)(i_1) ? i_1.slice(0) : (0,tslib_es6.__assign)({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());

var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map() });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map()
        : left.map.size ? left.map
            : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
// Note that this function is unused in production, and thus should be
// pruned by any well-configured minifier.
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    // It's always safe to replace a reference, since it refers to data
    // safely stored elsewhere.
    if ((0,storeUtils/* isReference */.A_)(existing))
        return;
    // If the values are structurally equivalent, we do not need to worry
    // about incoming replacing existing.
    if ((0,equality_lib/* equal */.L)(existing, incoming))
        return;
    // If we're replacing every key of the existing object, then the
    // existing data would be overwritten even if the objects were
    // normalized, so warning would not be helpful here.
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = (0,helpers/* fieldNameFromStoreName */.iJ)(storeFieldName);
    var typeDotName = "".concat(parentType, ".").concat(fieldName);
    // Avoid warning more than once for the same type and field name.
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    // Arrays do not have __typename fields, and always need a custom merge
    // function, even if their elements are normalized entities.
    if (!(0,arrays/* isArray */.c)(existing) && !(0,arrays/* isArray */.c)(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" && !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(15, fieldName, parentType, childTypenames.length ?
        "either ensure all objects of type " +
            childTypenames.join(" and ") +
            " have an ID or a custom merge function, or "
        : "", typeDotName, (0,tslib_es6.__assign)({}, existing), (0,tslib_es6.__assign)({}, incoming));
}
//# sourceMappingURL=writeToStore.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/caching/getMemoryInternals.js
var getMemoryInternals = __webpack_require__(35051);
;// ./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js


// Make builtins like Map and Set safe to use with non-extensible objects.













var InMemoryCache = /** @class */ (function (_super) {
    (0,tslib_es6.__extends)(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.addTypenameTransform = new DocumentTransform/* DocumentTransform */.c(transform/* addTypenameToDocument */.XY);
        // Override the default value, since InMemoryCache result objects are frozen
        // in development and expected to remain logically immutable in production.
        _this.assumeImmutableResults = true;
        _this.makeVar = reactiveVars/* makeVar */.UT;
        _this.txCount = 0;
        _this.config = (0,helpers/* normalizeConfig */.I6)(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        // Passing { resultCaching: false } in the InMemoryCache constructor options
        // will completely disable dependency tracking, which will improve memory
        // usage but worsen the performance of repeated reads.
        var rootStore = (this.data = new EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        }));
        // When no optimistic writes are currently active, cache.optimisticData ===
        // cache.data, so there are no additional layers on top of the actual data.
        // When an optimistic update happens, this.optimisticData will become a
        // linked list of EntityStore Layer objects that terminates with the
        // original this.data cache object.
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        var fragments = this.config.fragments;
        // The StoreWriter is mostly stateless and so doesn't really need to be
        // reset, but it does need to have its writer.storeReader reference updated,
        // so it's simpler to update this.storeWriter as well.
        this.storeWriter = new StoreWriter(this, (this.storeReader = new StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: (0,helpers/* shouldCanonizeResults */.Xx)(this.config),
            canon: resetResultIdentities ? void 0 : (previousReader && previousReader.canon),
            fragments: fragments,
        })), fragments);
        this.maybeBroadcastWatch = (0,lib/* wrap */.LV)(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize ||
                sizes/* cacheSizes */.v["inMemoryCache.maybeBroadcastWatch"] ||
                5000 /* defaultCacheSizes["inMemoryCache.maybeBroadcastWatch"] */,
            makeCacheKey: function (c) {
                // Return a cache key (thus enabling result caching) only if we're
                // currently using a data store that can track cache dependencies.
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (supportsResultCaching(store)) {
                    var optimistic = c.optimistic, id = c.id, variables = c.variables;
                    return store.makeCacheKey(c.query, 
                    // Different watches can have the same query, optimistic
                    // status, rootId, and variables, but if their callbacks are
                    // different, the (identical) result needs to be delivered to
                    // each distinct callback. The easiest way to achieve that
                    // separation is to include c.callback in the cache key for
                    // maybeBroadcastWatch calls. See issue #5733.
                    c.callback, (0,canonicalStringify/* canonicalStringify */.M)({ optimistic: optimistic, id: id, variables: variables }));
                }
            },
        });
        // Since we have thrown away all the cached functions that depend on the
        // CacheGroup dependencies maintained by EntityStore, we should also reset
        // all CacheGroup dependency information.
        new Set([this.data.group, this.optimisticData.group]).forEach(function (group) {
            return group.resetCaching();
        });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        // Since calling this.init() discards/replaces the entire StoreReader, along
        // with the result caches it maintains, this.data.replace(data) won't have
        // to bother deleting the old data.
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var 
        // Since read returns data or null, without any additional metadata
        // about whether/where there might have been missing fields, the
        // default behavior cannot be returnPartialData = true (like it is
        // for the diff method), since defaulting to true would violate the
        // integrity of the T in the return type. However, partial data may
        // be useful in some cases, so returnPartialData:true may be
        // specified explicitly.
        _a = options.returnPartialData, 
        // Since read returns data or null, without any additional metadata
        // about whether/where there might have been missing fields, the
        // default behavior cannot be returnPartialData = true (like it is
        // for the diff method), since defaulting to true would violate the
        // integrity of the T in the return type. However, partial data may
        // be useful in some cases, so returnPartialData:true may be
        // specified explicitly.
        returnPartialData = _a === void 0 ? false : _a;
        try {
            return (this.storeReader.diffQueryAgainstStore((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null);
        }
        catch (e) {
            if (e instanceof common/* MissingFieldError */.Z) {
                // Swallow MissingFieldError and return null, so callers do not need to
                // worry about catching "normal" exceptions resulting from incomplete
                // cache data. Unexpected errors will be re-thrown. If you need more
                // information about which fields were missing, use cache.diff instead,
                // and examine diffResult.missing.
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (helpers/* hasOwn */.$3.call(options, "id") && !options.id) {
            // To my knowledge, TypeScript does not currently provide a way to
            // enforce that an optional property?:type must *not* be undefined
            // when present. That ability would be useful here, because we want
            // options.id to default to ROOT_QUERY only when no options.id was
            // provided. If the caller attempts to pass options.id with a
            // falsy/undefined value (perhaps because cache.identify failed), we
            // should not assume the goal was to modify the ROOT_QUERY object.
            // We could throw, but it seems natural to return false to indicate
            // that nothing was modified.
            return false;
        }
        var store = ((options.optimistic) // Defaults to false.
        ) ?
            this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            // In case we previously called forgetCache(this) because
            // this.watches became empty (see below), reattach this cache to any
            // reactive variables on which it previously depended. It might seem
            // paradoxical that we're able to recall something we supposedly
            // forgot, but the point of calling forgetCache(this) is to silence
            // useless broadcasts while this.watches is empty, and to allow the
            // cache to be garbage collected. If, however, we manage to call
            // recallCache(this) here, this cache object must not have been
            // garbage collected yet, and should resume receiving updates from
            // reactive variables, now that it has a watcher to notify.
            (0,reactiveVars/* recallCache */.MS)(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            // Once we remove the last watch from this.watches, cache.broadcastWatches
            // no longer does anything, so we preemptively tell the reactive variable
            // system to exclude this cache from future broadcasts.
            if (_this.watches.delete(watch) && !_this.watches.size) {
                (0,reactiveVars/* forgetCache */.WR)(_this);
            }
            // Remove this watch from the LRU cache managed by the
            // maybeBroadcastWatch OptimisticWrapperFunction, to prevent memory
            // leaks involving the closure of watch.callback.
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        var _a;
        canonicalStringify/* canonicalStringify */.M.reset();
        print/* print */.y.reset();
        this.addTypenameTransform.resetCache();
        (_a = this.config.fragments) === null || _a === void 0 ? void 0 : _a.resetCaches();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    // Call this method to ensure the given root ID remains in the cache after
    // garbage collection, along with its transitive child entities. Note that
    // the cache automatically retains all directly written entities. By default,
    // the retainment persists after optimistic updates are removed. Pass true
    // for the optimistic argument if you would prefer for the retainment to be
    // discarded when the top-most optimistic layer is removed. Returns the
    // resulting (non-negative) retainment count.
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    // Call this method to undo the effect of the retain method, above. Once the
    // retainment count falls to zero, the given ID will no longer be preserved
    // during garbage collection, though it may still be preserved by other safe
    // entities that refer to it. Returns the resulting (non-negative) retainment
    // count, in case that's useful.
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    // Returns the canonical ID for a given StoreObject, obeying typePolicies
    // and keyFields (and dataIdFromObject, if you still use that). At minimum,
    // the object must contain a __typename and any primary key fields required
    // to identify entities of that type. If you pass a query result object, be
    // sure that none of the primary key fields have been renamed by aliasing.
    // If you pass a Reference object, its __ref ID string will be returned.
    InMemoryCache.prototype.identify = function (object) {
        if ((0,storeUtils/* isReference */.A_)(object))
            return object.__ref;
        try {
            return this.policies.identify(object)[0];
        }
        catch (e) {
            globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(e);
        }
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (helpers/* hasOwn */.$3.call(options, "id")) {
                // See comment in modify method about why we return false when
                // options.id exists but is falsy/undefined.
                return false;
            }
            options = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { id: "ROOT_QUERY" });
        }
        try {
            // It's unlikely that the eviction will end up invoking any other
            // cache update operations while it's running, but {in,de}crementing
            // this.txCount still seems like a good idea, for uniformity with
            // the other update methods.
            ++this.txCount;
            // Pass this.data as a limit on the depth of the eviction, so evictions
            // during optimistic updates (when this.data is temporarily set equal to
            // this.optimisticData) do not escape their optimistic Layer.
            return this.optimisticData.evict(options, this.data);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function (options) {
        var _this = this;
        this.init();
        canonicalStringify/* canonicalStringify */.M.reset();
        if (options && options.discardWatches) {
            // Similar to what happens in the unsubscribe function returned by
            // cache.watch, applied to all current watches.
            this.watches.forEach(function (watch) { return _this.maybeBroadcastWatch.forget(watch); });
            this.watches.clear();
            (0,reactiveVars/* forgetCache */.WR)(this);
        }
        else {
            // Calling this.init() above unblocks all maybeBroadcastWatch caching, so
            // this.broadcastWatches() triggers a broadcast to every current watcher
            // (letting them know their data is now missing). This default behavior is
            // convenient because it means the watches do not have to be manually
            // reestablished after resetting the cache. To prevent this broadcast and
            // cancel all watches, pass true for options.discardWatches.
            this.broadcastWatches();
        }
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                return (updateResult = update(_this));
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            // If an options.onWatchUpdated callback is provided, we want to call it
            // with only the Cache.WatchOptions objects affected by options.update,
            // but there might be dirty watchers already waiting to be broadcast that
            // have nothing to do with the update. To prevent including those watchers
            // in the post-update broadcast, we perform this initial broadcast to
            // collect the dirty watchers, so we can re-dirty them later, after the
            // post-update broadcast, allowing them to receive their pending
            // broadcasts the next time broadcastWatches is called, just as they would
            // if we never called cache.batch.
            this.broadcastWatches((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === "string") {
            // Note that there can be multiple layers with the same optimistic ID.
            // When removeOptimistic(id) is called for that id, all matching layers
            // will be removed, and the remaining layers will be reapplied.
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            // Ensure both this.data and this.optimisticData refer to the root
            // (non-optimistic) layer of the cache during the update. Note that
            // this.data could be a Layer if we are currently executing an optimistic
            // update function, but otherwise will always be an EntityStore.Root
            // instance.
            perform(this.data);
        }
        else {
            // Otherwise, leave this.data and this.optimisticData unchanged and run
            // the update with broadcast batching.
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        // Note: if this.txCount > 0, then alreadyDirty.size === 0, so this code
        // takes the else branch and calls this.broadcastWatches(options), which
        // does nothing when this.txCount > 0.
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        // Since onWatchUpdated did not return false, this diff is
                        // about to be broadcast to watch.callback, so we don't need
                        // to re-dirty it with the other alreadyDirty watches below.
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            // Silently re-dirty any watches that were already dirty before the update
            // was performed, and were not broadcast just now.
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            // If alreadyDirty is empty or we don't have an onWatchUpdated
            // function, we don't need to go to the trouble of wrapping
            // options.onWatchUpdated.
            this.broadcastWatches(options);
        }
        return updateResult;
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || optimisticId !== null,
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        return this.addTypenameToDocument(this.addFragmentsToDocument(document));
    };
    InMemoryCache.prototype.fragmentMatches = function (fragment, typename) {
        return this.policies.fragmentMatches(fragment, typename);
    };
    InMemoryCache.prototype.lookupFragment = function (fragmentName) {
        var _a;
        return ((_a = this.config.fragments) === null || _a === void 0 ? void 0 : _a.lookup(fragmentName)) || null;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.addFragmentsToDocument = function (document) {
        var fragments = this.config.fragments;
        return fragments ? fragments.transform(document) : document;
    };
    InMemoryCache.prototype.addTypenameToDocument = function (document) {
        if (this.addTypename) {
            return this.addTypenameTransform.transformDocument(document);
        }
        return document;
    };
    // This method is wrapped by maybeBroadcastWatch, which is called by
    // broadcastWatches, so that we compute and broadcast results only when
    // the data that would be broadcast might have changed. It would be
    // simpler to check for changes after recomputing a result but before
    // broadcasting it, but this wrapping approach allows us to skip both
    // the recomputation and the broadcast, in most cases.
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        // Both WatchOptions and DiffOptions extend ReadOptions, and DiffOptions
        // currently requires no additional properties, so we can use c (a
        // WatchOptions object) as DiffOptions, without having to allocate a new
        // object, and without having to enumerate the relevant properties (query,
        // variables, etc.) explicitly. There will be some additional properties
        // (lastDiff, callback, etc.), but cache.diff ignores them.
        var diff = this.diff(c);
        if (options) {
            if (c.optimistic && typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                // Returning false from the onWatchUpdated callback will prevent
                // calling c.callback(diff) for this watcher.
                return;
            }
        }
        if (!lastDiff || !(0,equality_lib/* equal */.L)(lastDiff.result, diff.result)) {
            c.callback((c.lastDiff = diff), lastDiff);
        }
    };
    return InMemoryCache;
}(cache/* ApolloCache */.k));

if (globalThis.__DEV__ !== false) {
    InMemoryCache.prototype.getMemoryInternals = getMemoryInternals/* getInMemoryCacheMemoryInternals */.cM;
}
//# sourceMappingURL=inMemoryCache.js.map

/***/ }),

/***/ 90738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MS: () => (/* binding */ recallCache),
/* harmony export */   UT: () => (/* binding */ makeVar),
/* harmony export */   WR: () => (/* binding */ forgetCache),
/* harmony export */   bl: () => (/* binding */ cacheSlot)
/* harmony export */ });
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1161);

// Contextual Slot that acquires its value when custom read functions are
// called in Policies#readField.
var cacheSlot = new optimism__WEBPACK_IMPORTED_MODULE_0__/* .Slot */ .DX();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, (info = {
            vars: new Set(),
            dep: (0,optimism__WEBPACK_IMPORTED_MODULE_0__/* .dep */ .yN)(),
        }));
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
// Calling forgetCache(cache) serves to silence broadcasts and allows the
// cache to be garbage collected. However, the varsByCache WeakMap
// preserves the set of reactive variables that were previously associated
// with this cache, which makes it possible to "recall" the cache at a
// later time, by reattaching it to those variables. If the cache has been
// garbage collected in the meantime, because it is no longer reachable,
// you won't be able to call recallCache(cache), and the cache will
// automatically disappear from the varsByCache WeakMap.
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    // Invalidate any fields with custom read functions that
                    // consumed this variable, so query results involving those
                    // fields will be recomputed the next time we read them.
                    getCacheInfo(cache).dep.dirty(rv);
                    // Broadcast changes to any caches that have previously read
                    // from this variable.
                    broadcast(cache);
                });
                // Finally, notify any listeners added via rv.onNextChange.
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            // When reading from the variable, obtain the current cache from
            // context via cacheSlot. This isn't entirely foolproof, but it's
            // the same system that powers varDep.
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = (rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    });
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}
//# sourceMappingURL=reactiveVars.js.map

/***/ }),

/***/ 234:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ ApolloClient)
});

// UNUSED EXPORTS: mergeOptions

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/globals/index.js
var globals = __webpack_require__(52687);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/core/ApolloLink.js + 3 modules
var ApolloLink = __webpack_require__(91188);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/core/execute.js
var execute = __webpack_require__(74081);
// EXTERNAL MODULE: ./node_modules/@apollo/client/version.js
var version = __webpack_require__(32816);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/http/HttpLink.js
var HttpLink = __webpack_require__(94537);
// EXTERNAL MODULE: ./node_modules/@wry/equality/lib/index.js
var lib = __webpack_require__(15381);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/incrementalResult.js
var incrementalResult = __webpack_require__(56453);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/directives.js
var directives = __webpack_require__(68869);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/transform.js
var transform = __webpack_require__(3902);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/fragments.js
var graphql_fragments = __webpack_require__(65215);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/canonicalStringify.js
var canonicalStringify = __webpack_require__(96269);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/DocumentTransform.js
var DocumentTransform = __webpack_require__(29993);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/observables/asyncMap.js
var asyncMap = __webpack_require__(83851);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/errorHandling.js
var errorHandling = __webpack_require__(59599);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/arrays.js
var arrays = __webpack_require__(45636);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/getFromAST.js
var getFromAST = __webpack_require__(84824);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/storeUtils.js
var storeUtils = __webpack_require__(67194);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/objects.js
var objects = __webpack_require__(90075);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/makeUniqueId.js
var makeUniqueId = __webpack_require__(98170);
// EXTERNAL MODULE: ./node_modules/zen-observable-ts/module.js
var zen_observable_ts_module = __webpack_require__(73401);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/observables/Concast.js
var Concast = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@apollo/client/errors/index.js
var client_errors = __webpack_require__(9211);
// EXTERNAL MODULE: ./node_modules/@apollo/client/core/ObservableQuery.js
var ObservableQuery = __webpack_require__(72988);
// EXTERNAL MODULE: ./node_modules/@apollo/client/core/networkStatus.js
var core_networkStatus = __webpack_require__(88599);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/mergeDeep.js
var mergeDeep = __webpack_require__(92922);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/canUse.js
var canUse = __webpack_require__(2619);
;// ./node_modules/@apollo/client/core/QueryInfo.js






var destructiveMethodCounts = new (canUse/* canUseWeakMap */.et ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        // @ts-expect-error this is just too generic to be typed correctly
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, 
            // The %1e15 allows the count to wrap around to 0 safely every
            // quadrillion evictions, so there's no risk of overflow. To be
            // clear, this is more of a pedantic principle than something
            // that matters in any conceivable practical scenario.
            (destructiveMethodCounts.get(cache) + 1) % 1e15);
            // @ts-expect-error this is just too generic to be typed correctly
            return original.apply(this, arguments);
        };
    }
}
// A QueryInfo object represents a single query managed by the
// QueryManager, which tracks all QueryInfo objects by queryId in its
// this.queries Map. QueryInfo objects store the latest results and errors
// for the given query, and are responsible for reporting those results to
// the corresponding ObservableQuery, via the QueryInfo.notify method.
// Results are reported asynchronously whenever setDiff marks the
// QueryInfo object as dirty, though a call to the QueryManager's
// broadcastQueries method may trigger the notification before it happens
// automatically. This class used to be a simple interface type without
// any field privacy or meaningful methods, which is why it still has so
// many public fields. The effort to lock down and simplify the QueryInfo
// interface is ongoing, and further improvements are welcome.
var QueryInfo = /** @class */ (function () {
    function QueryInfo(queryManager, queryId) {
        if (queryId === void 0) { queryId = queryManager.generateQueryId(); }
        this.queryId = queryId;
        this.document = null;
        this.lastRequestId = 1;
        this.stopped = false;
        this.observableQuery = null;
        var cache = (this.cache = queryManager.cache);
        // Track how often cache.evict is called, since we want eviction to
        // override the feud-stopping logic in the markResult method, by
        // causing shouldWrite to return true. Wrapping the cache.evict method
        // is a bit of a hack, but it saves us from having to make eviction
        // counting an official part of the ApolloCache API.
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || core_networkStatus/* NetworkStatus */.pT.loading;
        if (this.variables &&
            this.networkStatus !== core_networkStatus/* NetworkStatus */.pT.loading &&
            !(0,lib/* equal */.L)(this.variables, query.variables)) {
            networkStatus = core_networkStatus/* NetworkStatus */.pT.setVariables;
        }
        if (!(0,lib/* equal */.L)(query.variables, this.variables)) {
            this.lastDiff = void 0;
            // Ensure we don't continue to receive cache updates for old variables
            this.cancel();
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.resetDiff = function () {
        this.lastDiff = void 0;
    };
    QueryInfo.prototype.getDiff = function () {
        var options = this.getDiffOptions();
        if (this.lastDiff && (0,lib/* equal */.L)(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff =
            diff ?
                {
                    diff: diff,
                    options: options || this.getDiffOptions(),
                }
                : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        var _a;
        if (variables === void 0) { variables = this.variables; }
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _a, _b;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        // If we are trying to deliver an incomplete cache result, we avoid
        // reporting it if the query has errored, otherwise we let the broadcast try
        // and repair the partial result by refetching the query. This check avoids
        // a situation where a query that errors and another succeeds with
        // overlapping data does not report the partial data result to the errored
        // query.
        //
        // See https://github.com/apollographql/apollo-client/issues/11400 for more
        // information on this issue.
        if (diff && !diff.complete && ((_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.getLastError())) {
            return;
        }
        this.updateLastDiff(diff);
        if (!(0,lib/* equal */.L)(oldDiff && oldDiff.result, diff && diff.result)) {
            (_b = this.observableQuery) === null || _b === void 0 ? void 0 : _b["scheduleNotify"]();
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        if (oq === this.observableQuery)
            return;
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
        }
    };
    QueryInfo.prototype.stop = function () {
        var _a;
        if (!this.stopped) {
            this.stopped = true;
            // Cancel the pending notify timeout
            (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a["resetNotifications"]();
            this.cancel();
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () {
        var _a;
        (_a = this.cancelWatch) === null || _a === void 0 ? void 0 : _a.call(this);
        this.cancelWatch = void 0;
    };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch || !(0,lib/* equal */.L)(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancelWatch = this.cache.watch((this.lastWatch = watchOptions));
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            // If cache.evict has been called since the last time we wrote this
            // data into the cache, there's a chance writing this result into
            // the cache will repair what was evicted.
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            (0,lib/* equal */.L)(variables, lastWrite.variables) &&
            (0,lib/* equal */.L)(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, document, options, cacheWriteBehavior) {
        var _this = this;
        var _a;
        var merger = new mergeDeep/* DeepMerger */.ZI();
        var graphQLErrors = (0,arrays/* isNonEmptyArray */.E)(result.errors) ? result.errors.slice(0) : [];
        // Cancel the pending notify timeout (if it exists) to prevent extraneous network
        // requests. To allow future notify timeouts, diff and dirty are reset as well.
        (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a["resetNotifications"]();
        if ("incremental" in result && (0,arrays/* isNonEmptyArray */.E)(result.incremental)) {
            var mergedData = (0,incrementalResult/* mergeIncrementalData */.bd)(this.getDiff().result, result);
            result.data = mergedData;
            // Detect the first chunk of a deferred query and merge it with existing
            // cache data. This ensures a `cache-first` fetch policy that returns
            // partial cache data or a `cache-and-network` fetch policy that already
            // has full data in the cache does not complain when trying to merge the
            // initial deferred server data with existing cache data.
        }
        else if ("hasNext" in result && result.hasNext) {
            var diff = this.getDiff();
            result.data = merger.merge(diff.result, result.data);
        }
        this.graphQLErrors = graphQLErrors;
        if (options.fetchPolicy === "no-cache") {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0 /* CacheWriteBehavior.FORBID */) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                // Using a transaction here so we have a chance to read the result
                // back from the cache before the watch callback fires as a result
                // of writeQuery, so we can store the new diff quietly and ignore
                // it when we receive it redundantly from the watch callback.
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1 /* CacheWriteBehavior.OVERWRITE */,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        // If result is the same as the last result we received from
                        // the network (and the variables match too), avoid writing
                        // result into the cache again. The wisdom of skipping this
                        // cache write is far from obvious, since any cache write
                        // could be the one that puts the cache back into a desired
                        // state, fixing corruption or missing data. However, if we
                        // always write every network result into the cache, we enable
                        // feuds between queries competing to update the same data in
                        // incompatible ways, which can lead to an endless cycle of
                        // cache broadcasts and useless network requests. As with any
                        // feud, eventually one side must step back from the brink,
                        // letting the other side(s) have the last word(s). There may
                        // be other points where we could break this cycle, such as
                        // silencing the broadcast for cache.writeQuery (not a good
                        // idea, since it just delays the feud a bit) or somehow
                        // avoiding the network request that just happened (also bad,
                        // because the server could return useful new data). All
                        // options considered, skipping this cache write seems to be
                        // the least damaging place to break the cycle, because it
                        // reflects the intuition that we recently wrote this exact
                        // result into the cache, so the cache *should* already/still
                        // contain this data. If some other query has clobbered that
                        // data in the meantime, that's too bad, but there will be no
                        // winners if every query blindly reverts to its own version
                        // of the data. This approach also gives the network a chance
                        // to return new data, which will be written into the cache as
                        // usual, notifying only those queries that are directly
                        // affected by the cache updates, as usual. In the future, an
                        // even more sophisticated cache could perhaps prevent or
                        // mitigate the clobbering somehow, but that would make this
                        // particular cache write even less important, and thus
                        // skipping it would be even safer than it is today.
                        if (_this.lastDiff && _this.lastDiff.diff.complete) {
                            // Reuse data from the last good (complete) diff that we
                            // received, when possible.
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                        // If the previous this.diff was incomplete, fall through to
                        // re-reading the latest data with cache.diff, below.
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    // In case the QueryManager stops this QueryInfo before its
                    // results are delivered, it's important to avoid restarting the
                    // cache watch when markResult is called. We also avoid updating
                    // the watch if we are writing a result that doesn't match the current
                    // variables to avoid race conditions from broadcasting the wrong
                    // result.
                    if (!_this.stopped && (0,lib/* equal */.L)(_this.variables, options.variables)) {
                        // Any time we're about to update this.diff, we need to make
                        // sure we've started watching the cache.
                        _this.updateWatch(options.variables);
                    }
                    // If we're allowed to write to the cache, and we can read a
                    // complete result from the cache, update result.data to be the
                    // result from the cache, rather than the raw network result.
                    // Set without setDiff to avoid triggering a notify call, since
                    // we have other ways of notifying for this result.
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return (this.networkStatus = core_networkStatus/* NetworkStatus */.pT.ready);
    };
    QueryInfo.prototype.markError = function (error) {
        var _a;
        this.networkStatus = core_networkStatus/* NetworkStatus */.pT.error;
        this.lastWrite = void 0;
        (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a["resetNotifications"]();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());

function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
    var writeWithErrors = !(0,errorHandling/* graphQLResultHasError */.t)(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}
//# sourceMappingURL=QueryInfo.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/print.js
var print = __webpack_require__(47397);
// EXTERNAL MODULE: ./node_modules/@wry/trie/lib/index.js
var trie_lib = __webpack_require__(54834);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/caching/caches.js
var caches = __webpack_require__(599);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/caching/sizes.js
var sizes = __webpack_require__(81212);
// EXTERNAL MODULE: ./node_modules/@apollo/client/masking/maskDefinition.js
var maskDefinition = __webpack_require__(64083);
// EXTERNAL MODULE: ./node_modules/@apollo/client/masking/utils.js
var utils = __webpack_require__(60857);
;// ./node_modules/@apollo/client/masking/maskOperation.js




/** @internal */
function maskOperation(data, document, cache) {
    var _a;
    if (!cache.fragmentMatches) {
        if (globalThis.__DEV__ !== false) {
            (0,utils/* warnOnImproperCacheImplementation */.Ki)();
        }
        return data;
    }
    var definition = (0,getFromAST/* getOperationDefinition */.Vu)(document);
    (0,globals/* invariant */.V1)(definition, 51);
    if (data == null) {
        // Maintain the original `null` or `undefined` value
        return data;
    }
    return (0,maskDefinition/* maskDefinition */.S)(data, definition.selectionSet, {
        operationType: definition.operation,
        operationName: (_a = definition.name) === null || _a === void 0 ? void 0 : _a.value,
        fragmentMap: (0,graphql_fragments/* createFragmentMap */.JG)((0,getFromAST/* getFragmentDefinitions */.zK)(document)),
        cache: cache,
        mutableTargets: new utils/* MapImpl */.jq(),
        knownChanged: new utils/* SetImpl */.xm(),
    });
}
//# sourceMappingURL=maskOperation.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/masking/maskFragment.js
var maskFragment = __webpack_require__(45410);
;// ./node_modules/@apollo/client/core/QueryManager.js














var QueryManager_hasOwnProperty = Object.prototype.hasOwnProperty;
var IGNORE = Object.create(null);



var QueryManager = /** @class */ (function () {
    function QueryManager(options) {
        var _this = this;
        this.clientAwareness = {};
        // All the queries that the QueryManager is currently managing (not
        // including mutations and subscriptions).
        this.queries = new Map();
        // Maps from queryId strings to Promise rejection functions for
        // currently active queries and fetches.
        // Use protected instead of private field so
        // @apollo/experimental-nextjs-app-support can access type info.
        this.fetchCancelFns = new Map();
        this.transformCache = new caches/* AutoCleanedWeakCache */.A(sizes/* cacheSizes */.v["queryManager.getDocumentInfo"] ||
            2000 /* defaultCacheSizes["queryManager.getDocumentInfo"] */);
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        // Use protected instead of private field so
        // @apollo/experimental-nextjs-app-support can access type info.
        this.inFlightLinkObservables = new trie_lib/* Trie */.b(false);
        this.noCacheWarningsByQueryId = new Set();
        var defaultDocumentTransform = new DocumentTransform/* DocumentTransform */.c(function (document) { return _this.cache.transformDocument(document); }, 
        // Allow the apollo cache to manage its own transform caches
        { cache: false });
        this.cache = options.cache;
        this.link = options.link;
        this.defaultOptions = options.defaultOptions;
        this.queryDeduplication = options.queryDeduplication;
        this.clientAwareness = options.clientAwareness;
        this.localState = options.localState;
        this.ssrMode = options.ssrMode;
        this.assumeImmutableResults = options.assumeImmutableResults;
        this.dataMasking = options.dataMasking;
        var documentTransform = options.documentTransform;
        this.documentTransform =
            documentTransform ?
                defaultDocumentTransform
                    .concat(documentTransform)
                    // The custom document transform may add new fragment spreads or new
                    // field selections, so we want to give the cache a chance to run
                    // again. For example, the InMemoryCache adds __typename to field
                    // selections and fragments from the fragment registry.
                    .concat(defaultDocumentTransform)
                : defaultDocumentTransform;
        this.defaultContext = options.defaultContext || Object.create(null);
        if ((this.onBroadcast = options.onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    /**
     * Call this method to terminate any active query processes, making it safe
     * to dispose of this QueryManager instance.
     */
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches((0,globals/* newInvariantError */.vA)(27));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        return (0,tslib_es6.__awaiter)(this, arguments, void 0, function (_b) {
            var mutationId, hasClientExports, mutationStoreValue, isOptimistic, self;
            var _c, _d;
            var mutation = _b.mutation, variables = _b.variables, optimisticResponse = _b.optimisticResponse, updateQueries = _b.updateQueries, _e = _b.refetchQueries, refetchQueries = _e === void 0 ? [] : _e, _f = _b.awaitRefetchQueries, awaitRefetchQueries = _f === void 0 ? false : _f, updateWithProxyFn = _b.update, onQueryUpdated = _b.onQueryUpdated, _g = _b.fetchPolicy, fetchPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.fetchPolicy) || "network-only" : _g, _h = _b.errorPolicy, errorPolicy = _h === void 0 ? ((_d = this.defaultOptions.mutate) === null || _d === void 0 ? void 0 : _d.errorPolicy) || "none" : _h, keepRootFields = _b.keepRootFields, context = _b.context;
            return (0,tslib_es6.__generator)(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        (0,globals/* invariant */.V1)(mutation, 28);
                        (0,globals/* invariant */.V1)(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 29);
                        mutationId = this.generateMutationId();
                        mutation = this.cache.transformForLink(this.transform(mutation));
                        hasClientExports = this.getDocumentInfo(mutation).hasClientExports;
                        variables = this.getVariables(mutation, variables);
                        if (!hasClientExports) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_j.sent());
                        _j.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        isOptimistic = optimisticResponse &&
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        this.broadcastQueries();
                        self = this;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                return (0,asyncMap/* asyncMap */.x)(self.getObservableFromLink(mutation, (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, context), { optimisticResponse: isOptimistic ? optimisticResponse : void 0 }), variables, {}, false), function (result) {
                                    if ((0,errorHandling/* graphQLResultHasError */.t)(result) && errorPolicy === "none") {
                                        throw new client_errors/* ApolloError */.K4({
                                            graphQLErrors: (0,errorHandling/* getGraphQLErrorsFromResult */.M)(result),
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = (0,tslib_es6.__assign)({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === "ignore" && (0,errorHandling/* graphQLResultHasError */.t)(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: isOptimistic ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        // Since mutations might receive multiple payloads from the
                                        // ApolloLink chain (e.g. when used with @defer),
                                        // we resolve with a SingleExecutionResult or after the final
                                        // ExecutionPatchResult has arrived and we have assembled the
                                        // multipart response into a single result.
                                        if (!("hasNext" in storeResult) || storeResult.hasNext === false) {
                                            resolve((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, storeResult), { data: self.maskOperation({
                                                    document: mutation,
                                                    data: storeResult.data,
                                                    fetchPolicy: fetchPolicy,
                                                    id: mutationId,
                                                }) }));
                                        }
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (isOptimistic) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof client_errors/* ApolloError */.K4 ? err : (new client_errors/* ApolloError */.K4({
                                            networkError: err,
                                        })));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            if (!(0,incrementalResult/* isExecutionPatchIncrementalResult */.ST)(result)) {
                cacheWrites.push({
                    result: result.data,
                    dataId: "ROOT_MUTATION",
                    query: mutation.document,
                    variables: mutation.variables,
                });
            }
            if ((0,incrementalResult/* isExecutionPatchIncrementalResult */.ST)(result) &&
                (0,arrays/* isNonEmptyArray */.E)(result.incremental)) {
                var diff = cache.diff({
                    id: "ROOT_MUTATION",
                    // The cache complains if passed a mutation where it expects a
                    // query, so we transform mutations and subscriptions to queries
                    // (only once, thanks to this.transformCache).
                    query: this.getDocumentInfo(mutation.document).asQuery,
                    variables: mutation.variables,
                    optimistic: false,
                    returnPartialData: true,
                });
                var mergedData = void 0;
                if (diff.result) {
                    mergedData = (0,incrementalResult/* mergeIncrementalData */.bd)(diff.result, result);
                }
                if (typeof mergedData !== "undefined") {
                    // cast the ExecutionPatchResult to FetchResult here since
                    // ExecutionPatchResult never has `data` when returned from the server
                    result.data = mergedData;
                    cacheWrites.push({
                        result: mergedData,
                        dataId: "ROOT_MUTATION",
                        query: mutation.document,
                        variables: mutation.variables,
                    });
                }
            }
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !QueryManager_hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    // Read the current query result from the store.
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        // Run our reducer using the current query result and the mutation result.
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: (document && (0,getFromAST/* getOperationName */.n4)(document)) || void 0,
                            queryVariables: variables,
                        });
                        // Write the modified result back into the store if we got a new result.
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: "ROOT_QUERY",
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            (mutation.refetchQueries || "").length > 0 ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    // If the mutation has some writes associated with it then we need to
                    // apply those writes to the store by running this reducer again with
                    // a write action.
                    var update = mutation.update;
                    // Determine whether result is a SingleExecutionResult,
                    // or the final ExecutionPatchResult.
                    var isFinalResult = !(0,incrementalResult/* isExecutionPatchResult */.YX)(result) ||
                        ((0,incrementalResult/* isExecutionPatchIncrementalResult */.ST)(result) && !result.hasNext);
                    if (update) {
                        if (!skipCache) {
                            // Re-read the ROOT_MUTATION data we just wrote into the cache
                            // (the first cache.write call in the cacheWrites.forEach loop
                            // above), so field read functions have a chance to run for
                            // fields within mutation result objects.
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                // The cache complains if passed a mutation where it expects a
                                // query, so we transform mutations and subscriptions to queries
                                // (only once, thanks to this.transformCache).
                                query: _this.getDocumentInfo(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, result), { data: diff.result });
                                if ("incremental" in result) {
                                    delete result.incremental;
                                }
                                if ("hasNext" in result) {
                                    delete result.hasNext;
                                }
                            }
                        }
                        // If we've received the whole response,
                        // either a SingleExecutionResult or the final ExecutionPatchResult,
                        // call the update function.
                        if (isFinalResult) {
                            update(cache, result, {
                                context: mutation.context,
                                variables: mutation.variables,
                            });
                        }
                    }
                    // TODO Do this with cache.evict({ id: 'ROOT_MUTATION' }) but make it
                    // shallow to allow rolling back optimistic evictions.
                    if (!skipCache && !mutation.keepRootFields && isFinalResult) {
                        cache.modify({
                            id: "ROOT_MUTATION",
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                // Write the final mutation.result to the root layer of the cache.
                optimistic: false,
                // Remove the corresponding optimistic layer at the same time as we
                // write the final non-optimistic result.
                removeOptimistic: mutation.removeOptimistic,
                // Let the caller of client.mutate optionally determine the refetching
                // behavior for watched queries after the mutation.update function runs.
                // If no onQueryUpdated function was provided for this mutation, pass
                // null instead of undefined to disable the default refetching behavior.
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                // Returning a promise here makes the mutation await that promise, so we
                // include results in that promise's work if awaitRefetchQueries or an
                // onQueryUpdated function was specified.
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function" ?
            optimisticResponse(mutation.variables, { IGNORE: IGNORE })
            : optimisticResponse;
        if (data === IGNORE) {
            return false;
        }
        this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                globalThis.__DEV__ !== false && globals/* invariant */.V1.error(error);
            }
        }, mutation.mutationId);
        return true;
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchConcastWithInfo(this.getOrCreateQuery(queryId), options, networkStatus).concast.promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        return this.documentTransform.transformDocument(document);
    };
    QueryManager.prototype.getDocumentInfo = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var cacheEntry = {
                // TODO These three calls (hasClientExports, shouldForceResolvers, and
                // usesNonreactiveDirective) are performing independent full traversals
                // of the transformed document. We should consider merging these
                // traversals into a single pass in the future, though the work is
                // cached after the first time.
                hasClientExports: (0,directives/* hasClientExports */.f2)(document),
                hasForcedResolvers: this.localState.shouldForceResolvers(document),
                hasNonreactiveDirective: (0,directives/* hasDirectives */.d8)(["nonreactive"], document),
                nonReactiveQuery: (0,transform/* addNonReactiveToNamedFragments */.x3)(document),
                clientQuery: this.localState.clientQuery(document),
                serverQuery: (0,transform/* removeDirectivesFromDocument */.iz)([
                    { name: "client", remove: true },
                    { name: "connection" },
                    { name: "nonreactive" },
                    { name: "unmask" },
                ], document),
                defaultVars: (0,getFromAST/* getDefaultValues */.wY)((0,getFromAST/* getOperationDefinition */.Vu)(document)),
                // Transform any mutation or subscription operations to query operations
                // so we can read/write them from/to the cache.
                asQuery: (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, document), { definitions: document.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, def), { operation: "query" });
                        }
                        return def;
                    }) }),
            };
            transformCache.set(document, cacheEntry);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, this.getDocumentInfo(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        var query = this.transform(options.query);
        // assign variable default values if supplied
        // NOTE: We don't modify options.query here with the transformed query to
        // ensure observable.options.query is set to the raw untransformed query.
        options = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { variables: this.getVariables(query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === "undefined") {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new QueryInfo(this);
        var observable = new ObservableQuery/* ObservableQuery */.U({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        observable["lastQuery"] = query;
        if (!ObservableQuery/* ObservableQuery */.U["inactiveOnCreation"].getValue()) {
            this.queries.set(observable.queryId, queryInfo);
        }
        // We give queryInfo the transformed query to ensure the first cache diff
        // uses the transformed query instead of the raw query
        queryInfo.init({
            document: query,
            observableQuery: observable,
            variables: observable.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        (0,globals/* invariant */.V1)(options.query, 30);
        (0,globals/* invariant */.V1)(options.query.kind === "Document", 31);
        (0,globals/* invariant */.V1)(!options.returnPartialData, 32);
        (0,globals/* invariant */.V1)(!options.pollInterval, 33);
        var query = this.transform(options.query);
        return this.fetchQuery(queryId, (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { query: query }))
            .then(function (result) {
            return result && (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, result), { data: _this.maskOperation({
                    document: query,
                    data: result.data,
                    fetchPolicy: options.fetchPolicy,
                    id: queryId,
                }) });
        })
            .finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function (options) {
        if (options === void 0) { options = {
            discardWatches: true,
        }; }
        // Before we have sent the reset action to the store, we can no longer
        // rely on the results returned by in-flight requests since these may
        // depend on values that previously existed in the data portion of the
        // store. So, we cancel the promises and observers that we have issued
        // so far and not yet resolved (in the case of queries).
        this.cancelPendingFetches((0,globals/* newInvariantError */.vA)(34));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                // Set loading to true so listeners don't trigger unless they want
                // results with partial data.
                queryInfo.networkStatus = core_networkStatus/* NetworkStatus */.pT.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        // begin removing data from the store
        return this.cache.reset(options);
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNames = new Map();
        var queryNamesAndQueryStrings = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNames.set(desc, desc);
                    queryNamesAndQueryStrings.set(desc, false);
                }
                else if ((0,storeUtils/* isDocumentNode */.Kc)(desc)) {
                    var queryString = (0,print/* print */.y)(_this.transform(desc));
                    queryNames.set(queryString, (0,getFromAST/* getOperationName */.n4)(desc));
                    queryNamesAndQueryStrings.set(queryString, false);
                }
                else if ((0,objects/* isNonNullObject */.U)(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" ||
                    (include === "active" && !oq.hasObservers())) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndQueryStrings.has(queryName)) ||
                    (document && queryNamesAndQueryStrings.has((0,print/* print */.y)(document)))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndQueryStrings.set(queryName, true);
                    if (document)
                        queryNamesAndQueryStrings.set((0,print/* print */.y)(document), true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                // We will be issuing a fresh network request for this query, so we
                // pre-allocate a new query ID here, using a special prefix to enable
                // cleaning up these temporary queries later, after fetching.
                var queryId = (0,makeUniqueId/* makeUniqueId */.v)("legacyOneTimeQuery");
                var queryInfo = _this.getOrCreateQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new ObservableQuery/* ObservableQuery */.U({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { fetchPolicy: "network-only" }),
                });
                (0,globals/* invariant */.V1)(oq.queryId === queryId);
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (globalThis.__DEV__ !== false && queryNamesAndQueryStrings.size) {
            queryNamesAndQueryStrings.forEach(function (included, nameOrQueryString) {
                if (!included) {
                    var queryName = queryNames.get(nameOrQueryString);
                    if (queryName) {
                        globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(35, queryName);
                    }
                    else {
                        globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(36);
                    }
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" && fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            (_this.queries.get(queryId) || observableQuery["queryInfo"]).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.startGraphQLSubscription = function (options) {
        var _this = this;
        var query = options.query, variables = options.variables;
        var fetchPolicy = options.fetchPolicy, _a = options.errorPolicy, errorPolicy = _a === void 0 ? "none" : _a, _b = options.context, context = _b === void 0 ? {} : _b, _c = options.extensions, extensions = _c === void 0 ? {} : _c;
        query = this.transform(query);
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables, extensions).map(function (result) {
                if (fetchPolicy !== "no-cache") {
                    // the subscription interface should handle not sending us results we no longer subscribe to.
                    // XXX I don't think we ever send in an object with errors, but we might in the future...
                    if (shouldWriteResult(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: "ROOT_SUBSCRIPTION",
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                var hasErrors = (0,errorHandling/* graphQLResultHasError */.t)(result);
                var hasProtocolErrors = (0,client_errors/* graphQLResultHasProtocolErrors */.uR)(result);
                if (hasErrors || hasProtocolErrors) {
                    var errors = {};
                    if (hasErrors) {
                        errors.graphQLErrors = result.errors;
                    }
                    if (hasProtocolErrors) {
                        errors.protocolErrors = result.extensions[client_errors/* PROTOCOL_ERRORS_SYMBOL */.K$];
                    }
                    // `errorPolicy` is a mechanism for handling GraphQL errors, according
                    // to our documentation, so we throw protocol errors regardless of the
                    // set error policy.
                    if (errorPolicy === "none" || hasProtocolErrors) {
                        throw new client_errors/* ApolloError */.K4(errors);
                    }
                }
                if (errorPolicy === "ignore") {
                    delete result.errors;
                }
                return result;
            });
        };
        if (this.getDocumentInfo(query).hasClientExports) {
            var observablePromise_1 = this.localState
                .addExportedVariables(query, variables, context)
                .then(makeObservable);
            return new zen_observable_ts_module/* Observable */.c(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return (sub = observable.subscribe(observer)); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        var _a;
        // teardown all links
        // Both `QueryManager.fetchRequest` and `QueryManager.query` create separate promises
        // that each add their reject functions to fetchCancelFns.
        // A query created with `QueryManager.query()` could trigger a `QueryManager.fetchRequest`.
        // The same queryId could have two rejection fns for two promises
        this.fetchCancelFns.delete(queryId);
        if (this.queries.has(queryId)) {
            (_a = this.queries.get(queryId)) === null || _a === void 0 ? void 0 : _a.stop();
            this.queries.delete(queryId);
        }
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { var _a; return (_a = info.observableQuery) === null || _a === void 0 ? void 0 : _a["notify"](); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, extensions, 
    // Prefer context.queryDeduplication if specified.
    deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var _b = this.getDocumentInfo(query), serverQuery = _b.serverQuery, clientQuery = _b.clientQuery;
        if (serverQuery) {
            var _c = this, inFlightLinkObservables_1 = _c.inFlightLinkObservables, link = _c.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: (0,getFromAST/* getOperationName */.n4)(serverQuery) || void 0,
                context: this.prepareContext((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, context), { forceFetch: !deduplication })),
                extensions: extensions,
            };
            context = operation.context;
            if (deduplication) {
                var printedServerQuery_1 = (0,print/* print */.y)(serverQuery);
                var varJson_1 = (0,canonicalStringify/* canonicalStringify */.M)(variables);
                var entry = inFlightLinkObservables_1.lookup(printedServerQuery_1, varJson_1);
                observable = entry.observable;
                if (!observable) {
                    var concast_1 = new Concast/* Concast */.E([
                        (0,execute/* execute */.g)(link, operation),
                    ]);
                    observable = entry.observable = concast_1;
                    concast_1.beforeNext(function cb(method, arg) {
                        if (method === "next" && "hasNext" in arg && arg.hasNext) {
                            concast_1.beforeNext(cb);
                        }
                        else {
                            inFlightLinkObservables_1.remove(printedServerQuery_1, varJson_1);
                        }
                    });
                }
            }
            else {
                observable = new Concast/* Concast */.E([
                    (0,execute/* execute */.g)(link, operation),
                ]);
            }
        }
        else {
            observable = new Concast/* Concast */.E([zen_observable_ts_module/* Observable */.c.of({ data: {} })]);
            context = this.prepareContext(context);
        }
        if (clientQuery) {
            observable = (0,asyncMap/* asyncMap */.x)(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = (queryInfo.lastRequestId = this.generateRequestId());
        // Performing transformForLink here gives this.cache a chance to fill in
        // missing fragment definitions (for example) before sending this document
        // through the link chain.
        var linkDocument = this.cache.transformForLink(options.query);
        return (0,asyncMap/* asyncMap */.x)(this.getObservableFromLink(linkDocument, options.context, options.variables), function (result) {
            var graphQLErrors = (0,errorHandling/* getGraphQLErrorsFromResult */.M)(result);
            var hasErrors = graphQLErrors.length > 0;
            var errorPolicy = options.errorPolicy;
            // If we interrupted this request by calling getResultsFromLink again
            // with the same QueryInfo object, we ignore the old results.
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && errorPolicy === "none") {
                    // Throwing here effectively calls observer.error.
                    throw queryInfo.markError(new client_errors/* ApolloError */.K4({
                        graphQLErrors: graphQLErrors,
                    }));
                }
                // Use linkDocument rather than queryInfo.document so the
                // operation/fragments used to write the result are the same as the
                // ones used to obtain it from the link.
                queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: core_networkStatus/* NetworkStatus */.pT.ready,
            };
            // In the case we start multiple network requests simulatenously, we
            // want to ensure we properly set `data` if we're reporting on an old
            // result which will not be caught by the conditional above that ends up
            // throwing the markError result.
            if (hasErrors && errorPolicy === "none") {
                aqr.data = void 0;
            }
            if (hasErrors && errorPolicy !== "ignore") {
                aqr.errors = graphQLErrors;
                aqr.networkStatus = core_networkStatus/* NetworkStatus */.pT.error;
            }
            return aqr;
        }, function (networkError) {
            var error = (0,client_errors/* isApolloError */.Mn)(networkError) ? networkError : (new client_errors/* ApolloError */.K4({ networkError: networkError }));
            // Avoid storing errors from older interrupted queries.
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchConcastWithInfo = function (queryInfo, options, 
    // The initial networkStatus for this fetch, most often
    // NetworkStatus.loading, but also possibly fetchMore, poll, refetch,
    // or setVariables.
    networkStatus, query) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = core_networkStatus/* NetworkStatus */.pT.loading; }
        if (query === void 0) { query = options.query; }
        var variables = this.getVariables(query, options.variables);
        var defaults = this.defaultOptions.watchQuery;
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? (defaults && defaults.fetchPolicy) || "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? (defaults && defaults.errorPolicy) || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            // Since normalized is always a fresh copy of options, it's safe to
            // modify its properties here, rather than creating yet another new
            // WatchQueryOptions object.
            normalized.variables = variables;
            var sourcesWithInfo = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
            if (
            // If we're in standby, postpone advancing options.fetchPolicy using
            // applyNextFetchPolicy.
            normalized.fetchPolicy !== "standby" &&
                // The "standby" policy currently returns [] from fetchQueryByPolicy, so
                // this is another way to detect when nothing was done/fetched.
                sourcesWithInfo.sources.length > 0 &&
                queryInfo.observableQuery) {
                queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
            }
            return sourcesWithInfo;
        };
        // This cancel function needs to be set before the concast is created,
        // in case concast creation synchronously cancels the request.
        var cleanupCancelFn = function () { return _this.fetchCancelFns.delete(queryInfo.queryId); };
        this.fetchCancelFns.set(queryInfo.queryId, function (reason) {
            cleanupCancelFn();
            // This delay ensures the concast variable has been initialized.
            setTimeout(function () { return concast.cancel(reason); });
        });
        var concast, containsDataFromLink;
        // If the query has @export(as: ...) directives, then we need to
        // process those directives asynchronously. When there are no
        // @export directives (the common case), we deliberately avoid
        // wrapping the result of this.fetchQueryByPolicy in a Promise,
        // since the timing of result delivery is (unfortunately) important
        // for backwards compatibility. TODO This code could be simpler if
        // we deprecated and removed LocalState.
        if (this.getDocumentInfo(normalized.query).hasClientExports) {
            concast = new Concast/* Concast */.E(this.localState
                .addExportedVariables(normalized.query, normalized.variables, normalized.context)
                .then(fromVariables)
                .then(function (sourcesWithInfo) { return sourcesWithInfo.sources; }));
            // there is just no way we can synchronously get the *right* value here,
            // so we will assume `true`, which is the behaviour before the bug fix in
            // #10597. This means that bug is not fixed in that case, and is probably
            // un-fixable with reasonable effort for the edge case of @export as
            // directives.
            containsDataFromLink = true;
        }
        else {
            var sourcesWithInfo = fromVariables(normalized.variables);
            containsDataFromLink = sourcesWithInfo.fromLink;
            concast = new Concast/* Concast */.E(sourcesWithInfo.sources);
        }
        concast.promise.then(cleanupCancelFn, cleanupCancelFn);
        return {
            concast: concast,
            fromLink: containsDataFromLink,
        };
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? (0,makeUniqueId/* makeUniqueId */.v)("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: (_this.queries.get(queryId) || oq["queryInfo"]).getDiff(),
                });
            });
        }
        var results = new Map();
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                // Since you can perform any combination of cache reads and/or writes in
                // the cache.batch update function, its optimistic option can be either
                // a boolean or a string, representing three distinct modes of
                // operation:
                //
                // * false: read/write only the root layer
                // * true: read/write the topmost layer
                // * string: read/write a fresh optimistic layer with that ID string
                //
                // When typeof optimistic === "string", a new optimistic layer will be
                // temporarily created within cache.batch with that string as its ID. If
                // we then pass that same string as the removeOptimistic option, we can
                // make cache.batch immediately remove the optimistic layer after
                // running the updateCache function, triggering only one broadcast.
                //
                // However, the refetchQueries method accepts only true or false for its
                // optimistic option (not string). We interpret true to mean a temporary
                // optimistic layer should be created, to allow efficiently rolling back
                // the effect of the updateCache function, which involves passing a
                // string instead of true as the optimistic option to cache.batch, when
                // refetchQueries receives optimistic: true.
                //
                // In other words, we are deliberately not supporting the use case of
                // writing to an *existing* optimistic layer (using the refetchQueries
                // updateCache function), since that would potentially interfere with
                // other optimistic updates in progress. Instead, you can read/write
                // only the root layer by passing optimistic: false to refetchQueries,
                // or you can read/write a brand new optimistic layer that will be
                // automatically removed by passing optimistic: true.
                optimistic: (optimistic && removeOptimistic) || false,
                // The removeOptimistic option can also be provided by itself, even if
                // optimistic === false, to remove some previously-added optimistic
                // layer safely and efficiently, like we do in markMutationResult.
                //
                // If an explicit removeOptimistic string is provided with optimistic:
                // true, the removeOptimistic string will determine the ID of the
                // temporary optimistic layer, in case that ever matters.
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            // Since we're about to handle this query now, remove it from
                            // includedQueriesById, in case it was added earlier because of
                            // options.include.
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                // The onQueryUpdated function requested the default refetching
                                // behavior by returning true.
                                result = oq.refetch();
                            }
                            // Record the result in the results Map, as long as onQueryUpdated
                            // did not return false to skip/ignore this result.
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            // Allow the default cache broadcast to happen, except when
                            // onQueryUpdated returns false.
                            return result;
                        }
                        if (onQueryUpdated !== null) {
                            // If we don't have an onQueryUpdated function, and onQueryUpdated
                            // was not disabled by passing null, make sure this query is
                            // "included" like any other options.include-specified query.
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                // If onQueryUpdated is provided, we want to use it for all included
                // queries, even the QueryOptions ones.
                if (onQueryUpdated) {
                    if (!diff) {
                        diff = _this.cache.diff(oq["queryInfo"]["getDiffOptions"]());
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                // Otherwise, we fall back to refetching.
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            // In case no updateCache callback was provided (so cache.batch was not
            // called above, and thus did not already remove the optimistic layer),
            // remove it here. Since this is a no-op when the layer has already been
            // removed, we do it even if we called cache.batch above, since it's
            // possible this.cache is an instance of some ApolloCache subclass other
            // than InMemoryCache, and does not fully support the removeOptimistic
            // option for cache.batch.
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.maskOperation = function (options) {
        var _a, _b, _c;
        var document = options.document, data = options.data;
        if (globalThis.__DEV__ !== false) {
            var fetchPolicy = options.fetchPolicy, id = options.id;
            var operationType = (_a = (0,getFromAST/* getOperationDefinition */.Vu)(document)) === null || _a === void 0 ? void 0 : _a.operation;
            var operationId = ((_b = operationType === null || operationType === void 0 ? void 0 : operationType[0]) !== null && _b !== void 0 ? _b : "o") + id;
            if (this.dataMasking &&
                fetchPolicy === "no-cache" &&
                !(0,graphql_fragments/* isFullyUnmaskedOperation */.s6)(document) &&
                !this.noCacheWarningsByQueryId.has(operationId)) {
                this.noCacheWarningsByQueryId.add(operationId);
                globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(
                    37,
                    (_c = (0,getFromAST/* getOperationName */.n4)(document)) !== null && _c !== void 0 ? _c : "Unnamed ".concat(operationType !== null && operationType !== void 0 ? operationType : "operation")
                );
            }
        }
        return (this.dataMasking ?
            maskOperation(data, document, this.cache)
            : data);
    };
    QueryManager.prototype.maskFragment = function (options) {
        var data = options.data, fragment = options.fragment, fragmentName = options.fragmentName;
        return this.dataMasking ?
            (0,maskFragment/* maskFragment */.z)(data, fragment, this.cache, fragmentName)
            : data;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, 
    // The initial networkStatus for this fetch, most often
    // NetworkStatus.loading, but also possibly fetchMore, poll, refetch,
    // or setVariables.
    networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: query,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || core_networkStatus/* NetworkStatus */.pT.loading; }
            var data = diff.result;
            if (globalThis.__DEV__ !== false && !returnPartialData && !(0,lib/* equal */.L)(data, {})) {
                (0,ObservableQuery/* logMissingFieldErrors */.y)(diff.missing);
            }
            var fromData = function (data) {
                return zen_observable_ts_module/* Observable */.c.of((0,tslib_es6.__assign)({ data: data, loading: (0,core_networkStatus/* isNetworkRequestInFlight */.bi)(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true })));
            };
            if (data && _this.getDocumentInfo(query).hasForcedResolvers) {
                return _this.localState
                    .runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                })
                    .then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            // Resolves https://github.com/apollographql/apollo-client/issues/10317.
            // If errorPolicy is 'none' and notifyOnNetworkStatusChange is true,
            // data was incorrectly returned from the cache on refetch:
            // if diff.missing exists, we should not return cache data.
            if (errorPolicy === "none" &&
                networkStatus === core_networkStatus/* NetworkStatus */.pT.refetch &&
                Array.isArray(diff.missing)) {
                return fromData(void 0);
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 /* CacheWriteBehavior.FORBID */
            // Watched queries must opt into overwriting existing data on refetch,
            // by passing refetchWritePolicy: "overwrite" in their WatchQueryOptions.
            : (networkStatus === core_networkStatus/* NetworkStatus */.pT.refetch &&
                refetchWritePolicy !== "merge") ?
                1 /* CacheWriteBehavior.OVERWRITE */
                : 2 /* CacheWriteBehavior.MERGE */;
        var resultsFromLink = function () {
            return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
                query: query,
                variables: variables,
                context: context,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
            });
        };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            (0,core_networkStatus/* isNetworkRequestInFlight */.bi)(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return {
                        fromLink: false,
                        sources: [resultsFromCache(diff, queryInfo.markReady())],
                    };
                }
                if (returnPartialData || shouldNotify) {
                    return {
                        fromLink: true,
                        sources: [resultsFromCache(diff), resultsFromLink()],
                    };
                }
                return { fromLink: true, sources: [resultsFromLink()] };
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return {
                        fromLink: true,
                        sources: [resultsFromCache(diff), resultsFromLink()],
                    };
                }
                return { fromLink: true, sources: [resultsFromLink()] };
            }
            case "cache-only":
                return {
                    fromLink: false,
                    sources: [resultsFromCache(readCache(), queryInfo.markReady())],
                };
            case "network-only":
                if (shouldNotify) {
                    return {
                        fromLink: true,
                        sources: [resultsFromCache(readCache()), resultsFromLink()],
                    };
                }
                return { fromLink: true, sources: [resultsFromLink()] };
            case "no-cache":
                if (shouldNotify) {
                    return {
                        fromLink: true,
                        // Note that queryInfo.getDiff() for no-cache queries does not call
                        // cache.diff, but instead returns a { complete: false } stub result
                        // when there is no queryInfo.diff already defined.
                        sources: [resultsFromCache(queryInfo.getDiff()), resultsFromLink()],
                    };
                }
                return { fromLink: true, sources: [resultsFromLink()] };
            case "standby":
                return { fromLink: false, sources: [] };
        }
    };
    QueryManager.prototype.getOrCreateQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return (0,tslib_es6.__assign)((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, this.defaultContext), newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

//# sourceMappingURL=QueryManager.js.map
// EXTERNAL MODULE: ./node_modules/graphql/language/visitor.mjs
var visitor = __webpack_require__(11786);
// EXTERNAL MODULE: ./node_modules/graphql/language/predicates.mjs
var predicates = __webpack_require__(48710);
// EXTERNAL MODULE: ./node_modules/@apollo/client/cache/inmemory/reactiveVars.js
var reactiveVars = __webpack_require__(90738);
;// ./node_modules/@apollo/client/core/LocalState.js





var LocalState = /** @class */ (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.selectionsToResolveCache = new WeakMap();
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = (0,mergeDeep/* mergeDeep */.D9)(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = (0,mergeDeep/* mergeDeep */.D9)(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    // Run local client resolvers against the incoming query and remote data.
    // Locally resolved field values are merged with the incoming remote data,
    // and returned. Note that locally resolved fields will overwrite
    // remote data using the same field name.
    LocalState.prototype.runResolvers = function (_a) {
        return (0,tslib_es6.__awaiter)(this, arguments, void 0, function (_b) {
            var document = _b.document, remoteResult = _b.remoteResult, context = _b.context, variables = _b.variables, _c = _b.onlyRunForcedResolvers, onlyRunForcedResolvers = _c === void 0 ? false : _c;
            return (0,tslib_es6.__generator)(this, function (_d) {
                if (document) {
                    return [2 /*return*/, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return ((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, remoteResult), { data: localResult.result })); })];
                }
                return [2 /*return*/, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    // Client queries contain everything in the incoming document (if a @client
    // directive is found).
    LocalState.prototype.clientQuery = function (document) {
        if ((0,directives/* hasDirectives */.d8)(["client"], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    // Server queries are stripped of all @client based selection sets.
    LocalState.prototype.serverQuery = function (document) {
        return (0,transform/* removeClientSetsFromDocument */.er)(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, context), { cache: cache, 
            // Getting an entry's cache key is useful for local state resolvers.
            getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    // To support `@client @export(as: "someVar")` syntax, we'll first resolve
    // @client @export fields locally, then pass the resolved values back to be
    // used alongside the original operation variables.
    LocalState.prototype.addExportedVariables = function (document_1) {
        return (0,tslib_es6.__awaiter)(this, arguments, void 0, function (document, variables, context) {
            if (variables === void 0) { variables = {}; }
            if (context === void 0) { context = {}; }
            return (0,tslib_es6.__generator)(this, function (_a) {
                if (document) {
                    return [2 /*return*/, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return ((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, variables), data.exportedVariables)); })];
                }
                return [2 /*return*/, (0,tslib_es6.__assign)({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        (0,visitor/* visit */.YR)(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === "client" && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === "always" &&
                                arg.value.kind === "BooleanValue" &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return visitor/* BREAK */.sP;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    // Query the cache and return matching data.
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: (0,transform/* buildQueryFromSelectionSet */.zc)(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document_1, rootValue_1) {
        return (0,tslib_es6.__awaiter)(this, arguments, void 0, function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
            var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a, cache, client, execContext, isClientFieldDescendant;
            if (context === void 0) { context = {}; }
            if (variables === void 0) { variables = {}; }
            if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
            if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
            return (0,tslib_es6.__generator)(this, function (_b) {
                mainDefinition = (0,getFromAST/* getMainDefinition */.Vn)(document);
                fragments = (0,getFromAST/* getFragmentDefinitions */.zK)(document);
                fragmentMap = (0,graphql_fragments/* createFragmentMap */.JG)(fragments);
                selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
                definitionOperation = mainDefinition.operation;
                defaultOperationType = definitionOperation ?
                    definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : "Query";
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    selectionsToResolve: selectionsToResolve,
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                isClientFieldDescendant = false;
                return [2 /*return*/, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, isClientFieldDescendant, rootValue, execContext) {
        return (0,tslib_es6.__awaiter)(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return (0,tslib_es6.__generator)(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return (0,tslib_es6.__awaiter)(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return (0,tslib_es6.__generator)(this, function (_a) {
                        if (!isClientFieldDescendant &&
                            !execContext.selectionsToResolve.has(selection)) {
                            // Skip selections without @client directives
                            // (still processing if one of the ancestors or one of the child fields has @client directive)
                            return [2 /*return*/];
                        }
                        if (!(0,directives/* shouldInclude */.MS)(selection, variables)) {
                            // Skip this entirely.
                            return [2 /*return*/];
                        }
                        if ((0,storeUtils/* isField */.dt)(selection)) {
                            return [2 /*return*/, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== "undefined") {
                                        resultsToMerge.push((_a = {},
                                            _a[(0,storeUtils/* resultKeyNameFromField */.ue)(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if ((0,storeUtils/* isInlineFragment */.kd)(selection)) {
                            fragment = selection;
                        }
                        else {
                            // This is a named fragment.
                            fragment = fragmentMap[selection.name.value];
                            (0,globals/* invariant */.V1)(fragment, 19, selection.name.value);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2 /*return*/, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2 /*return*/];
                    });
                }); };
                return [2 /*return*/, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return (0,mergeDeep/* mergeDeepArray */.IM)(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, isClientFieldDescendant, rootValue, execContext) {
        return (0,tslib_es6.__awaiter)(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return (0,tslib_es6.__generator)(this, function (_a) {
                if (!rootValue) {
                    return [2 /*return*/, null];
                }
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = (0,storeUtils/* resultKeyNameFromField */.ue)(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                // Usually all local resolvers are run when passing through here, but
                // if we've specifically identified that we only want to run forced
                // resolvers (that is, resolvers for fields marked with
                // `@client(always: true)`), then we'll skip running non-forced resolvers.
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(
                            // In case the resolve function accesses reactive variables,
                            // set cacheSlot to the current cache instance.
                            reactiveVars/* cacheSlot */.bl.withValue(this.cache, resolve, [
                                rootValue,
                                (0,storeUtils/* argumentsObjectFromField */.MB)(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2 /*return*/, resultPromise.then(function (result) {
                        var _a, _b;
                        if (result === void 0) { result = defaultResult; }
                        // If an @export directive is associated with the current field, store
                        // the `as` export variable name and current result for later use.
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === "export" && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        // Handle all scalar types here.
                        if (!field.selectionSet) {
                            return result;
                        }
                        // From here down, the field has a selection set, which means it's trying
                        // to query a GraphQLObjectType.
                        if (result == null) {
                            // Basically any field in a GraphQL response can be null, or missing
                            return result;
                        }
                        var isClientField = (_b = (_a = field.directives) === null || _a === void 0 ? void 0 : _a.some(function (d) { return d.name.value === "client"; })) !== null && _b !== void 0 ? _b : false;
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result, execContext);
                        }
                        // Returned value is an object, and the query has a sub-selection. Recurse.
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, isClientFieldDescendant, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            // This is a nested array, recurse.
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
            }
            // This is an object, run the selection set on it.
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
            }
        }));
    };
    // Collect selection nodes on paths from document root down to all @client directives.
    // This function takes into account transitive fragment spreads.
    // Complexity equals to a single `visit` over the full document.
    LocalState.prototype.collectSelectionsToResolve = function (mainDefinition, fragmentMap) {
        var isSingleASTNode = function (node) { return !Array.isArray(node); };
        var selectionsToResolveCache = this.selectionsToResolveCache;
        function collectByDefinition(definitionNode) {
            if (!selectionsToResolveCache.has(definitionNode)) {
                var matches_1 = new Set();
                selectionsToResolveCache.set(definitionNode, matches_1);
                (0,visitor/* visit */.YR)(definitionNode, {
                    Directive: function (node, _, __, ___, ancestors) {
                        if (node.name.value === "client") {
                            ancestors.forEach(function (node) {
                                if (isSingleASTNode(node) && (0,predicates/* isSelectionNode */.VK)(node)) {
                                    matches_1.add(node);
                                }
                            });
                        }
                    },
                    FragmentSpread: function (spread, _, __, ___, ancestors) {
                        var fragment = fragmentMap[spread.name.value];
                        (0,globals/* invariant */.V1)(fragment, 20, spread.name.value);
                        var fragmentSelections = collectByDefinition(fragment);
                        if (fragmentSelections.size > 0) {
                            // Fragment for this spread contains @client directive (either directly or transitively)
                            // Collect selection nodes on paths from the root down to fields with the @client directive
                            ancestors.forEach(function (node) {
                                if (isSingleASTNode(node) && (0,predicates/* isSelectionNode */.VK)(node)) {
                                    matches_1.add(node);
                                }
                            });
                            matches_1.add(spread);
                            fragmentSelections.forEach(function (selection) {
                                matches_1.add(selection);
                            });
                        }
                    },
                });
            }
            return selectionsToResolveCache.get(definitionNode);
        }
        return collectByDefinition(mainDefinition);
    };
    return LocalState;
}());

//# sourceMappingURL=LocalState.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/mergeOptions.js
var mergeOptions = __webpack_require__(60144);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/caching/getMemoryInternals.js
var getMemoryInternals = __webpack_require__(35051);
;// ./node_modules/@apollo/client/core/ApolloClient.js







var hasSuggestedDevtools = false;
// Though mergeOptions now resides in @apollo/client/utilities, it was
// previously declared and exported from this module, and then reexported from
// @apollo/client/core. Since we need to preserve that API anyway, the easiest
// solution is to reexport mergeOptions where it was previously declared (here).



/**
 * This is the primary Apollo Client class. It is used to send GraphQL documents (i.e. queries
 * and mutations) to a GraphQL spec-compliant server over an `ApolloLink` instance,
 * receive results from the server and cache the results in a store. It also delivers updates
 * to GraphQL queries through `Observable` instances.
 */
var ApolloClient = /** @class */ (function () {
    /**
     * Constructs an instance of `ApolloClient`.
     *
     * @example
     * ```js
     * import { ApolloClient, InMemoryCache } from '@apollo/client';
     *
     * const cache = new InMemoryCache();
     *
     * const client = new ApolloClient({
     *   // Provide required constructor fields
     *   cache: cache,
     *   uri: 'http://localhost:4000/',
     *
     *   // Provide some optional constructor fields
     *   name: 'react-web-client',
     *   version: '1.3',
     *   queryDeduplication: false,
     *   defaultOptions: {
     *     watchQuery: {
     *       fetchPolicy: 'cache-and-network',
     *     },
     *   },
     * });
     * ```
     */
    function ApolloClient(options) {
        var _this = this;
        var _a;
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        if (!options.cache) {
            throw (0,globals/* newInvariantError */.vA)(16);
        }
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, documentTransform = options.documentTransform, _b = options.ssrMode, ssrMode = _b === void 0 ? false : _b, _c = options.ssrForceFetchDelay, ssrForceFetchDelay = _c === void 0 ? 0 : _c, 
        // Expose the client instance as window.__APOLLO_CLIENT__ and call
        // onBroadcast in queryManager.broadcastQueries to enable browser
        // devtools, but disable them by default in production.
        connectToDevTools = options.connectToDevTools, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, defaultContext = options.defaultContext, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? cache.assumeImmutableResults : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version, devtools = options.devtools, dataMasking = options.dataMasking;
        var link = options.link;
        if (!link) {
            link =
                uri ? new HttpLink/* HttpLink */.P({ uri: uri, credentials: credentials, headers: headers }) : ApolloLink/* ApolloLink */.C.empty();
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.typeDefs = typeDefs;
        this.devtoolsConfig = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, devtools), { enabled: (_a = devtools === null || devtools === void 0 ? void 0 : devtools.enabled) !== null && _a !== void 0 ? _a : connectToDevTools });
        if (this.devtoolsConfig.enabled === undefined) {
            this.devtoolsConfig.enabled = globalThis.__DEV__ !== false;
        }
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.watchFragment = this.watchFragment.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        this.version = version/* version */.r;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new QueryManager({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            defaultContext: defaultContext,
            documentTransform: documentTransform,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            dataMasking: !!dataMasking,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: this.devtoolsConfig.enabled ?
                function () {
                    if (_this.devToolsHookCb) {
                        _this.devToolsHookCb({
                            action: {},
                            state: {
                                queries: _this.queryManager.getQueryStore(),
                                mutations: _this.queryManager.mutationStore || {},
                            },
                            dataWithOptimisticResults: _this.cache.extract(true),
                        });
                    }
                }
                : void 0,
        });
        if (this.devtoolsConfig.enabled)
            this.connectToDevTools();
    }
    ApolloClient.prototype.connectToDevTools = function () {
        if (false) {}
        var windowWithDevTools = window;
        var devtoolsSymbol = Symbol.for("apollo.devtools");
        (windowWithDevTools[devtoolsSymbol] =
            windowWithDevTools[devtoolsSymbol] || []).push(this);
        windowWithDevTools.__APOLLO_CLIENT__ = this;
        /**
         * Suggest installing the devtools for developers who don't have them
         */
        if (!hasSuggestedDevtools && globalThis.__DEV__ !== false) {
            hasSuggestedDevtools = true;
            if (window.document &&
                window.top === window.self &&
                /^(https?|file):$/.test(window.location.protocol)) {
                setTimeout(function () {
                    if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                        var nav = window.navigator;
                        var ua = nav && nav.userAgent;
                        var url = void 0;
                        if (typeof ua === "string") {
                            if (ua.indexOf("Chrome/") > -1) {
                                url =
                                    "https://chrome.google.com/webstore/detail/" +
                                        "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                            }
                            else if (ua.indexOf("Firefox/") > -1) {
                                url =
                                    "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                            }
                        }
                        if (url) {
                            globalThis.__DEV__ !== false && globals/* invariant */.V1.log("Download the Apollo DevTools for a better development " +
                                "experience: %s", url);
                        }
                    }
                }, 10000);
            }
        }
    };
    Object.defineProperty(ApolloClient.prototype, "documentTransform", {
        /**
         * The `DocumentTransform` used to modify GraphQL documents before a request
         * is made. If a custom `DocumentTransform` is not provided, this will be the
         * default document transform.
         */
        get: function () {
            return this.queryManager.documentTransform;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Call this method to terminate any active client processes, making it safe
     * to dispose of this `ApolloClient` instance.
     */
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    /**
     * This watches the cache store of the query according to the options specified and
     * returns an `ObservableQuery`. We can subscribe to this `ObservableQuery` and
     * receive updated results through an observer when the cache store changes.
     *
     * Note that this method is not an implementation of GraphQL subscriptions. Rather,
     * it uses Apollo's store in order to reactively deliver updates to your query results.
     *
     * For example, suppose you call watchQuery on a GraphQL query that fetches a person's
     * first and last name and this person has a particular object identifier, provided by
     * dataIdFromObject. Later, a different query fetches that same person's
     * first and last name and the first name has now changed. Then, any observers associated
     * with the results of the first query will be updated with a new result object.
     *
     * Note that if the cache does not change, the subscriber will *not* be notified.
     *
     * See [here](https://medium.com/apollo-stack/the-concepts-of-graphql-bc68bd819be3#.3mb0cbcmc) for
     * a description of store reactivity.
     */
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = (0,mergeOptions/* mergeOptions */.l)(this.defaultOptions.watchQuery, options);
        }
        // XXX Overwriting options is probably not the best way to do this long term...
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === "network-only" ||
                options.fetchPolicy === "cache-and-network")) {
            options = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { fetchPolicy: "cache-first" });
        }
        return this.queryManager.watchQuery(options);
    };
    /**
     * This resolves a single query according to the options specified and
     * returns a `Promise` which is either resolved with the resulting data
     * or rejected with an error.
     *
     * @param options - An object of type `QueryOptions` that allows us to
     * describe how this query should be treated e.g. whether it should hit the
     * server at all or just resolve from the cache, etc.
     */
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = (0,mergeOptions/* mergeOptions */.l)(this.defaultOptions.query, options);
        }
        (0,globals/* invariant */.V1)(options.fetchPolicy !== "cache-and-network", 17);
        if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
            options = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { fetchPolicy: "cache-first" });
        }
        return this.queryManager.query(options);
    };
    /**
     * This resolves a single mutation according to the options specified and returns a
     * Promise which is either resolved with the resulting data or rejected with an
     * error. In some cases both `data` and `errors` might be undefined, for example
     * when `errorPolicy` is set to `'ignore'`.
     *
     * It takes options as an object with the following keys and values:
     */
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = (0,mergeOptions/* mergeOptions */.l)(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    /**
     * This subscribes to a graphql subscription according to the options specified and returns an
     * `Observable` which either emits received data or an error.
     */
    ApolloClient.prototype.subscribe = function (options) {
        var _this = this;
        var id = this.queryManager.generateQueryId();
        return this.queryManager
            .startGraphQLSubscription(options)
            .map(function (result) { return ((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, result), { data: _this.queryManager.maskOperation({
                document: options.query,
                data: result.data,
                fetchPolicy: options.fetchPolicy,
                id: id,
            }) })); });
    };
    /**
     * Tries to read some data from the store in the shape of the provided
     * GraphQL query without making a network request. This method will start at
     * the root query. To start at a specific id returned by `dataIdFromObject`
     * use `readFragment`.
     *
     * @param optimistic - Set to `true` to allow `readQuery` to return
     * optimistic results. Is `false` by default.
     */
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    /**
     * Watches the cache store of the fragment according to the options specified
     * and returns an `Observable`. We can subscribe to this
     * `Observable` and receive updated results through an
     * observer when the cache store changes.
     *
     * You must pass in a GraphQL document with a single fragment or a document
     * with multiple fragments that represent what you are reading. If you pass
     * in a document with multiple fragments then you must also specify a
     * `fragmentName`.
     *
     * @since 3.10.0
     * @param options - An object of type `WatchFragmentOptions` that allows
     * the cache to identify the fragment and optionally specify whether to react
     * to optimistic updates.
     */
    ApolloClient.prototype.watchFragment = function (options) {
        var _a;
        return this.cache.watchFragment((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), (_a = {}, _a[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, _a)));
    };
    /**
     * Tries to read some data from the store in the shape of the provided
     * GraphQL fragment without making a network request. This method will read a
     * GraphQL fragment from any arbitrary id that is currently cached, unlike
     * `readQuery` which will only read from the root query.
     *
     * You must pass in a GraphQL document with a single fragment or a document
     * with multiple fragments that represent what you are reading. If you pass
     * in a document with multiple fragments then you must also specify a
     * `fragmentName`.
     *
     * @param optimistic - Set to `true` to allow `readFragment` to return
     * optimistic results. Is `false` by default.
     */
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    /**
     * Writes some data in the shape of the provided GraphQL query directly to
     * the store. This method will start at the root query. To start at a
     * specific id returned by `dataIdFromObject` then use `writeFragment`.
     */
    ApolloClient.prototype.writeQuery = function (options) {
        var ref = this.cache.writeQuery(options);
        if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
        }
        return ref;
    };
    /**
     * Writes some data in the shape of the provided GraphQL fragment directly to
     * the store. This method will write to a GraphQL fragment from any arbitrary
     * id that is currently cached, unlike `writeQuery` which will only write
     * from the root query.
     *
     * You must pass in a GraphQL document with a single fragment or a document
     * with multiple fragments that represent what you are writing. If you pass
     * in a document with multiple fragments then you must also specify a
     * `fragmentName`.
     */
    ApolloClient.prototype.writeFragment = function (options) {
        var ref = this.cache.writeFragment(options);
        if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
        }
        return ref;
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return (0,execute/* execute */.g)(this.link, payload);
    };
    /**
     * Resets your entire store by clearing out your cache and then re-executing
     * all of your active queries. This makes it so that you may guarantee that
     * there is no data left in your store from a time before you called this
     * method.
     *
     * `resetStore()` is useful when your user just logged out. Youâve removed the
     * user session, and you now want to make sure that any references to data you
     * might have fetched while the user session was active is gone.
     *
     * It is important to remember that `resetStore()` *will* refetch any active
     * queries. This means that any components that might be mounted will execute
     * their queries again using your network interface. If you do not want to
     * re-execute any queries then you should make sure to stop watching any
     * active queries.
     */
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () {
            return _this.queryManager.clearStore({
                discardWatches: false,
            });
        })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    /**
     * Remove all data from the store. Unlike `resetStore`, `clearStore` will
     * not refetch any active queries.
     */
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () {
            return _this.queryManager.clearStore({
                discardWatches: true,
            });
        })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    /**
     * Allows callbacks to be registered that are executed when the store is
     * reset. `onResetStore` returns an unsubscribe function that can be used
     * to remove registered callbacks.
     */
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    /**
     * Allows callbacks to be registered that are executed when the store is
     * cleared. `onClearStore` returns an unsubscribe function that can be used
     * to remove registered callbacks.
     */
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    /**
     * Refetches all of your active queries.
     *
     * `reFetchObservableQueries()` is useful if you want to bring the client back to proper state in case of a network outage
     *
     * It is important to remember that `reFetchObservableQueries()` *will* refetch any active
     * queries. This means that any components that might be mounted will execute
     * their queries again using your network interface. If you do not want to
     * re-execute any queries then you should make sure to stop watching any
     * active queries.
     * Takes optional parameter `includeStandby` which will include queries in standby-mode when refetching.
     */
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    /**
     * Refetches specified active queries. Similar to "reFetchObservableQueries()" but with a specific list of queries.
     *
     * `refetchQueries()` is useful for use cases to imperatively refresh a selection of queries.
     *
     * It is important to remember that `refetchQueries()` *will* refetch specified active
     * queries. This means that any components that might be mounted will execute
     * their queries again using your network interface. If you do not want to
     * re-execute any queries then you should make sure to stop watching any
     * active queries.
     */
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        // In case you need the raw results immediately, without awaiting
        // Promise.all(results):
        result.queries = queries;
        result.results = results;
        // If you decide to ignore the result Promise because you're using
        // result.queries and result.results instead, you shouldn't have to worry
        // about preventing uncaught rejections for the Promise.all result.
        result.catch(function (error) {
            globalThis.__DEV__ !== false && globals/* invariant */.V1.debug(18, error);
        });
        return result;
    };
    /**
     * Get all currently active `ObservableQuery` objects, in a `Map` keyed by
     * query ID strings.
     *
     * An "active" query is one that has observers and a `fetchPolicy` other than
     * "standby" or "cache-only".
     *
     * You can include all `ObservableQuery` objects (including the inactive ones)
     * by passing "all" instead of "active", or you can include just a subset of
     * active queries by passing an array of query names or DocumentNode objects.
     */
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    /**
     * Exposes the cache's complete state, in a serializable format for later restoration.
     */
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    /**
     * Replaces existing state in the cache (if any) with the values expressed by
     * `serializedState`.
     *
     * Called when hydrating a cache (server side rendering, or offline storage),
     * and also (potentially) during hot reloads.
     */
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    /**
     * Add additional local resolvers.
     */
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    /**
     * Set (override existing) local resolvers.
     */
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    /**
     * Get all registered local resolvers.
     */
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    /**
     * Set a custom local state fragment matcher.
     */
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    /**
     * Define a new ApolloLink (or link chain) that Apollo Client will use.
     */
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    Object.defineProperty(ApolloClient.prototype, "defaultContext", {
        get: function () {
            return this.queryManager.defaultContext;
        },
        enumerable: false,
        configurable: true
    });
    return ApolloClient;
}());

if (globalThis.__DEV__ !== false) {
    ApolloClient.prototype.getMemoryInternals = getMemoryInternals/* getApolloClientMemoryInternals */.ep;
}
//# sourceMappingURL=ApolloClient.js.map

/***/ }),

/***/ 72988:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ObservableQuery),
/* harmony export */   y: () => (/* binding */ logMissingFieldErrors)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8674);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15381);
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88599);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84824);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87945);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91495);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59019);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26502);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73401);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21291);
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9211);
/* harmony import */ var _equalByQuery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9080);
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1161);








var assign = Object.assign, hasOwnProperty = Object.hasOwnProperty;
var ObservableQuery = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = this;
        var startedInactive = ObservableQuery.inactiveOnCreation.getValue();
        _this = _super.call(this, function (observer) {
            _this._getOrCreateQuery();
            // Zen Observable has its own error function, so in order to log correctly
            // we need to provide a custom error callback.
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            // Deliver most recent error or result.
            var last = _this.last;
            if (last && last.error) {
                observer.error && observer.error(last.error);
            }
            else if (last && last.result) {
                observer.next && observer.next(_this.maskResult(last.result));
            }
            // Initiate observation of this query if it hasn't been reported to
            // the QueryManager yet.
            if (first) {
                // Blindly catching here prevents unhandled promise rejections,
                // and is safe because the ObservableQuery handles this error with
                // this.observer.error, so we're not just swallowing the error by
                // ignoring it here.
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.dirty = false;
        _this._getOrCreateQuery = function () {
            if (startedInactive) {
                queryManager["queries"].set(_this.queryId, queryInfo);
                startedInactive = false;
            }
            return _this.queryManager.getOrCreateQuery(_this.queryId);
        };
        // related classes
        _this.queryInfo = queryInfo;
        _this.queryManager = queryManager;
        // active state
        _this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy);
        _this.isTornDown = false;
        _this.subscribeToMore = _this.subscribeToMore.bind(_this);
        _this.maskResult = _this.maskResult.bind(_this);
        var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
        var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, 
        // Make sure we don't store "standby" as the initialFetchPolicy.
        _f = options.initialFetchPolicy, 
        // Make sure we don't store "standby" as the initialFetchPolicy.
        initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : (fetchPolicy) : _f;
        _this.options = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { 
            // Remember the initial options.fetchPolicy so we can revert back to this
            // policy when variables change. This information can also be specified
            // (or overridden) by providing options.initialFetchPolicy explicitly.
            initialFetchPolicy: initialFetchPolicy, 
            // This ensures this.options.fetchPolicy always has a string value, in
            // case options.fetchPolicy was not provided.
            fetchPolicy: fetchPolicy });
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__/* .getOperationDefinition */ .Vu)(_this.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "query", {
        // The `query` computed property will always reflect the document transformed
        // by the last run query. `this.options.query` will always reflect the raw
        // untransformed query to ensure document transforms with runtime conditionals
        // are run on the original document.
        get: function () {
            return this.lastQuery || this.options.query;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        // Computed shorthand for this.options.variables, preserved for
        // backwards compatibility.
        /**
         * An object containing the variables that were provided for the query.
         */
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // TODO: this code doesnât actually make sense insofar as the observer
            // will never exist in this.observers due how zen-observable wraps observables.
            // https://github.com/zenparsing/zen-observable/blob/master/src/Observable.js#L169
            var observer = {
                next: function (result) {
                    resolve(result);
                    // Stop the query within the QueryManager if we can before
                    // this function returns.
                    //
                    // We do this in order to prevent observers piling up within
                    // the QueryManager. Notice that we only fully unsubscribe
                    // from the subscription in a setTimeout(..., 0)  call. This call can
                    // actually be handled by the browser at a much later time. If queries
                    // are fired in the meantime, observers that should have been removed
                    // from the QueryManager will continue to fire, causing an unnecessary
                    // performance hit.
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    /** @internal */
    ObservableQuery.prototype.resetDiff = function () {
        this.queryInfo.resetDiff();
    };
    ObservableQuery.prototype.getCurrentFullResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        // Use the last result as long as the variables match this.variables.
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.ready;
        var result = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, lastResult), { loading: (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .isNetworkRequestInFlight */ .bi)(networkStatus), networkStatus: networkStatus });
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
        if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        skipCacheDataFor(fetchPolicy) ||
            // If this.options.query has @client(always: true) fields, we cannot
            // trust diff.result, since it was read from the cache without running
            // local resolvers (and it's too late to run resolvers now, since we must
            // return a result synchronously).
            this.queryManager.getDocumentInfo(this.query).hasForcedResolvers) {
            // Fall through.
        }
        else if (this.waitForOwnResult) {
            // This would usually be a part of `QueryInfo.getDiff()`.
            // which we skip in the waitForOwnResult case since we are not
            // interested in the diff.
            this.queryInfo["updateWatch"]();
        }
        else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) {
                result.data = diff.result;
            }
            if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(result.data, {})) {
                result.data = void 0;
            }
            if (diff.complete) {
                // Similar to setting result.partial to false, but taking advantage of the
                // falsiness of missing fields.
                delete result.partial;
                // If the diff is complete, and we're using a FetchPolicy that
                // terminates after a complete cache read, we can assume the next result
                // we receive will have NetworkStatus.ready and !loading.
                if (diff.complete &&
                    result.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.loading &&
                    (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
                    result.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.ready;
                    result.loading = false;
                }
            }
            else {
                result.partial = true;
            }
            // We need to check for both both `error` and `errors` field because there
            // are cases where sometimes `error` is set, but not `errors` and
            // vice-versa. This will be updated in the next major version when
            // `errors` is deprecated in favor of `error`.
            if (result.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.ready &&
                (result.error || result.errors)) {
                result.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.error;
            }
            if (globalThis.__DEV__ !== false &&
                !diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                logMissingFieldErrors(diff.missing);
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        return this.maskResult(this.getCurrentFullResult(saveAsLastResult));
    };
    // Compares newResult to the snapshot we took of this.lastResult when it was
    // first received.
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult, variables) {
        if (!this.last) {
            return true;
        }
        var documentInfo = this.queryManager.getDocumentInfo(this.query);
        var dataMasking = this.queryManager.dataMasking;
        var query = dataMasking ? documentInfo.nonReactiveQuery : this.query;
        var resultIsDifferent = dataMasking || documentInfo.hasNonreactiveDirective ?
            !(0,_equalByQuery_js__WEBPACK_IMPORTED_MODULE_6__/* .equalByQuery */ .a)(query, this.last.result, newResult, this.variables)
            : !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(this.last.result, newResult);
        return (resultIsDifferent || (variables && !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(this.last.variables, variables)));
    };
    ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
        var last = this.last;
        if (last &&
            last[key] &&
            (!variablesMustMatch || (0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(last.variables, this.variables))) {
            return last[key];
        }
    };
    ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    /**
     * Update the variables of this observable query, and fetch the new results.
     * This method should be preferred over `setVariables` in most use cases.
     *
     * @param variables - The new set of variables. If there are missing variables,
     * the previous values of those variables will be used.
     */
    ObservableQuery.prototype.refetch = function (variables) {
        var _a;
        var reobserveOptions = {
            // Always disable polling for refetches.
            pollInterval: 0,
        };
        // Unless the provided fetchPolicy always consults the network
        // (no-cache, network-only, or cache-and-network), override it with
        // network-only to force the refetch for this fetchQuery call.
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === "no-cache") {
            reobserveOptions.fetchPolicy = "no-cache";
        }
        else {
            reobserveOptions.fetchPolicy = "network-only";
        }
        if (globalThis.__DEV__ !== false && variables && hasOwnProperty.call(variables, "variables")) {
            var queryDef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__/* .getQueryDefinition */ .AT)(this.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function (v) { return v.variable.name.value === "variables"; })) {
                globalThis.__DEV__ !== false && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.warn(
                    21,
                    variables,
                    ((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || queryDef
                );
            }
        }
        if (variables && !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(this.options.variables, variables)) {
            // Update the existing options with new variables
            reobserveOptions.variables = this.options.variables = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.refetch);
    };
    /**
     * A function that helps you fetch the next set of results for a [paginated list field](https://www.apollographql.com/docs/react/pagination/core-api/).
     */
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, (fetchMoreOptions.query ? fetchMoreOptions : ((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.options), { query: this.options.query }), fetchMoreOptions), { variables: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.options.variables), fetchMoreOptions.variables) })))), { 
            // The fetchMore request goes immediately to the network and does
            // not automatically write its result to the cache (hence no-cache
            // instead of network-only), because we allow the caller of
            // fetchMore to provide an updateQuery callback that determines how
            // the data gets written to the cache.
            fetchPolicy: "no-cache" });
        combinedOptions.query = this.transformDocument(combinedOptions.query);
        var qid = this.queryManager.generateQueryId();
        // If a temporary query is passed to `fetchMore`, we don't want to store
        // it as the last query result since it may be an optimized query for
        // pagination. We will however run the transforms on the original document
        // as well as the document passed in `fetchMoreOptions` to ensure the cache
        // uses the most up-to-date document which may rely on runtime conditionals.
        this.lastQuery =
            fetchMoreOptions.query ?
                this.transformDocument(this.options.query)
                : combinedOptions.query;
        // Simulate a loading result for the original query with
        // result.networkStatus === NetworkStatus.fetchMore.
        var queryInfo = this.queryInfo;
        var originalNetworkStatus = queryInfo.networkStatus;
        queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.fetchMore;
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.observe();
        }
        var updatedQuerySet = new Set();
        var updateQuery = fetchMoreOptions === null || fetchMoreOptions === void 0 ? void 0 : fetchMoreOptions.updateQuery;
        var isCached = this.options.fetchPolicy !== "no-cache";
        if (!isCached) {
            (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(updateQuery, 22);
        }
        return this.queryManager
            .fetchQuery(qid, combinedOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.fetchMore)
            .then(function (fetchMoreResult) {
            _this.queryManager.removeQuery(qid);
            if (queryInfo.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.fetchMore) {
                queryInfo.networkStatus = originalNetworkStatus;
            }
            if (isCached) {
                // Performing this cache update inside a cache.batch transaction ensures
                // any affected cache.watch watchers are notified at most once about any
                // updates. Most watchers will be using the QueryInfo class, which
                // responds to notifications by calling reobserveCacheFirst to deliver
                // fetchMore cache results back to this ObservableQuery.
                _this.queryManager.cache.batch({
                    update: function (cache) {
                        var updateQuery = fetchMoreOptions.updateQuery;
                        if (updateQuery) {
                            cache.updateQuery({
                                query: _this.query,
                                variables: _this.variables,
                                returnPartialData: true,
                                optimistic: false,
                            }, function (previous) {
                                return updateQuery(previous, {
                                    fetchMoreResult: fetchMoreResult.data,
                                    variables: combinedOptions.variables,
                                });
                            });
                        }
                        else {
                            // If we're using a field policy instead of updateQuery, the only
                            // thing we need to do is write the new data to the cache using
                            // combinedOptions.variables (instead of this.variables, which is
                            // what this.updateQuery uses, because it works by abusing the
                            // original field value, keyed by the original variables).
                            cache.writeQuery({
                                query: combinedOptions.query,
                                variables: combinedOptions.variables,
                                data: fetchMoreResult.data,
                            });
                        }
                    },
                    onWatchUpdated: function (watch) {
                        // Record the DocumentNode associated with any watched query whose
                        // data were updated by the cache writes above.
                        updatedQuerySet.add(watch.query);
                    },
                });
            }
            else {
                // There is a possibility `lastResult` may not be set when
                // `fetchMore` is called which would cause this to crash. This should
                // only happen if we haven't previously reported a result. We don't
                // quite know what the right behavior should be here since this block
                // of code runs after the fetch result has executed on the network.
                // We plan to let it crash in the meantime.
                //
                // If we get bug reports due to the `data` property access on
                // undefined, this should give us a real-world scenario that we can
                // use to test against and determine the right behavior. If we do end
                // up changing this behavior, this may require, for example, an
                // adjustment to the types on `updateQuery` since that function
                // expects that the first argument always contains previous result
                // data, but not `undefined`.
                var lastResult = _this.getLast("result");
                var data = updateQuery(lastResult.data, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables,
                });
                _this.reportResult((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, lastResult), { networkStatus: originalNetworkStatus, loading: (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .isNetworkRequestInFlight */ .bi)(originalNetworkStatus), data: data }), _this.variables);
            }
            return _this.maskResult(fetchMoreResult);
        })
            .finally(function () {
            // In case the cache writes above did not generate a broadcast
            // notification (which would have been intercepted by onWatchUpdated),
            // likely because the written data were the same as what was already in
            // the cache, we still want fetchMore to deliver its final loading:false
            // result with the unchanged data.
            if (isCached && !updatedQuerySet.has(_this.query)) {
                _this.reobserveCacheFirst();
            }
        });
    };
    // XXX the subscription variables are separate from the query variables.
    // if you want to update subscription variables, right now you have to do that separately,
    // and you can only do it by stopping the subscription and then subscribing again with new variables.
    /**
     * A function that enables you to execute a [subscription](https://www.apollographql.com/docs/react/data/subscriptions/), usually to subscribe to specific fields that were included in the query.
     *
     * This function returns _another_ function that you can call to terminate the subscription.
     */
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, updateOptions) {
                        return updateQuery(previous, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ subscriptionData: subscriptionData }, updateOptions));
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                globalThis.__DEV__ !== false && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.error(23, err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.silentSetOptions = function (newOptions) {
        var mergedOptions = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__/* .compact */ .o)(this.options, newOptions || {});
        assign(this.options, mergedOptions);
    };
    /**
     * Update the variables of this observable query, and fetch the new results
     * if they've changed. Most users should prefer `refetch` instead of
     * `setVariables` in order to to be properly notified of results even when
     * they come from the cache.
     *
     * Note: the `next` callback will *not* fire if the variables have not changed
     * or if the result is coming from cache.
     *
     * Note: the promise will return the old results immediately if the variables
     * have not changed.
     *
     * Note: the promise will return null immediately if the query is not active
     * (there are no subscribers).
     *
     * @param variables - The new set of variables. If there are missing variables,
     * the previous values of those variables will be used.
     */
    ObservableQuery.prototype.setVariables = function (variables) {
        if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(this.variables, variables)) {
            // If we have no observers, then we don't actually want to make a network
            // request. As soon as someone observes the query, the request will kick
            // off. For now, we just store any changes. (See #1077)
            return this.observers.size ? this.result() : Promise.resolve();
        }
        this.options.variables = variables;
        // See comment above
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            // Reset options.fetchPolicy to its original value.
            fetchPolicy: this.options.initialFetchPolicy,
            variables: variables,
        }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.setVariables);
    };
    /**
     * A function that enables you to update the query's cached result without executing a followup GraphQL operation.
     *
     * See [using updateQuery and updateFragment](https://www.apollographql.com/docs/react/caching/cache-interaction/#using-updatequery-and-updatefragment) for additional information.
     */
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var _a = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false,
        }), result = _a.result, complete = _a.complete;
        var newResult = mapFn(result, {
            variables: this.variables,
            complete: !!complete,
            previousData: result,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    /**
     * A function that instructs the query to begin re-executing at a specified interval (in milliseconds).
     */
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    /**
     * A function that instructs the query to stop polling after a previous call to `startPolling`.
     */
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    // Update options.fetchPolicy according to options.nextFetchPolicy.
    ObservableQuery.prototype.applyNextFetchPolicy = function (reason, 
    // It's possible to use this method to apply options.nextFetchPolicy to
    // options.fetchPolicy even if options !== this.options, though that happens
    // most often when the options are temporary, used for only one request and
    // then thrown away, so nextFetchPolicy may not end up mattering.
    options) {
        if (options.nextFetchPolicy) {
            var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
            if (fetchPolicy === "standby") {
                // Do nothing, leaving options.fetchPolicy unchanged.
            }
            else if (typeof options.nextFetchPolicy === "function") {
                // When someone chooses "cache-and-network" or "network-only" as their
                // initial FetchPolicy, they often do not want future cache updates to
                // trigger unconditional network requests, which is what repeatedly
                // applying the "cache-and-network" or "network-only" policies would
                // seem to imply. Instead, when the cache reports an update after the
                // initial network request, it may be desirable for subsequent network
                // requests to be triggered only if the cache result is incomplete. To
                // that end, the options.nextFetchPolicy option provides an easy way to
                // update options.fetchPolicy after the initial network request, without
                // having to call observableQuery.setOptions.
                options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
                    reason: reason,
                    options: options,
                    observable: this,
                    initialFetchPolicy: initialFetchPolicy,
                });
            }
            else if (reason === "variables-changed") {
                options.fetchPolicy = initialFetchPolicy;
            }
            else {
                options.fetchPolicy = options.nextFetchPolicy;
            }
        }
        return options.fetchPolicy;
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus, query) {
        // TODO Make sure we update the networkStatus (and infer fetchVariables)
        // before actually committing to the fetch.
        var queryInfo = this._getOrCreateQuery();
        queryInfo.setObservableQuery(this);
        return this.queryManager["fetchConcastWithInfo"](queryInfo, options, newNetworkStatus, query);
    };
    // Turns polling on or off based on this.options.pollInterval.
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        // Avoid polling in SSR mode
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval || !this.hasObservers()) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo && pollingInfo.interval === pollInterval) {
            return;
        }
        (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(pollInterval, 24);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            var _a, _b;
            if (_this.pollingInfo) {
                if (!(0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .isNetworkRequestInFlight */ .bi)(_this.queryInfo.networkStatus) &&
                    !((_b = (_a = _this.options).skipPollAttempt) === null || _b === void 0 ? void 0 : _b.call(_a))) {
                    _this.reobserve({
                        // Most fetchPolicy options don't make sense to use in a polling context, as
                        // users wouldn't want to be polling the cache directly. However, network-only and
                        // no-cache are both useful for when the user wants to control whether or not the
                        // polled results are written to the cache.
                        fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ?
                            "no-cache"
                            : "network-only",
                    }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
        if (variables === void 0) { variables = this.variables; }
        var error = this.getLastError();
        // Preserve this.last.error unless the variables have changed.
        if (error && this.last && !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(variables, this.last.variables)) {
            error = void 0;
        }
        return (this.last = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ result: this.queryManager.assumeImmutableResults ?
                newResult
                : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__/* .cloneDeep */ .m)(newResult), variables: variables }, (error ? { error: error } : null)));
    };
    ObservableQuery.prototype.reobserveAsConcast = function (newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = 
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.refetch ||
            // The fetchMore method does not actually call the reobserve method, but,
            // if it did, it would definitely use a disposable Concast.
            newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.fetchMore ||
            // Polling uses a disposable Concast so the polling options (which force
            // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
            newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.poll;
        // Save the old variables, since Object.assign may modify them below.
        var oldVariables = this.options.variables;
        var oldFetchPolicy = this.options.fetchPolicy;
        var mergedOptions = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__/* .compact */ .o)(this.options, newOptions || {});
        var options = useDisposableConcast ?
            // Disposable Concast fetches receive a shallow copy of this.options
            // (merged with newOptions), leaving this.options unmodified.
            mergedOptions
            : assign(this.options, mergedOptions);
        // Don't update options.query with the transformed query to avoid
        // overwriting this.options.query when we aren't using a disposable concast.
        // We want to ensure we can re-run the custom document transforms the next
        // time a request is made against the original query.
        var query = this.transformDocument(options.query);
        this.lastQuery = query;
        if (!useDisposableConcast) {
            // We can skip calling updatePolling if we're not changing this.options.
            this.updatePolling();
            // Reset options.fetchPolicy to its original value when variables change,
            // unless a new fetchPolicy was provided by newOptions.
            if (newOptions &&
                newOptions.variables &&
                !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(newOptions.variables, oldVariables) &&
                // Don't mess with the fetchPolicy if it's currently "standby".
                options.fetchPolicy !== "standby" &&
                // If we're changing the fetchPolicy anyway, don't try to change it here
                // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
                (options.fetchPolicy === oldFetchPolicy ||
                    // A `nextFetchPolicy` function has even higher priority, though,
                    // so in that case `applyNextFetchPolicy` must be called.
                    typeof options.nextFetchPolicy === "function")) {
                this.applyNextFetchPolicy("variables-changed", options);
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.setVariables;
                }
            }
        }
        this.waitForOwnResult && (this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy));
        var finishWaitingForOwnResult = function () {
            if (_this.concast === concast) {
                _this.waitForOwnResult = false;
            }
        };
        var variables = options.variables && (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options.variables);
        var _a = this.fetch(options, newNetworkStatus, query), concast = _a.concast, fromLink = _a.fromLink;
        var observer = {
            next: function (result) {
                if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(_this.variables, variables)) {
                    finishWaitingForOwnResult();
                    _this.reportResult(result, variables);
                }
            },
            error: function (error) {
                if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* .equal */ .L)(_this.variables, variables)) {
                    // Coming from `getResultsFromLink`, `error` here should always be an `ApolloError`.
                    // However, calling `concast.cancel` can inject another type of error, so we have to
                    // wrap it again here.
                    if (!(0,_errors_index_js__WEBPACK_IMPORTED_MODULE_9__/* .isApolloError */ .Mn)(error)) {
                        error = new _errors_index_js__WEBPACK_IMPORTED_MODULE_9__/* .ApolloError */ .K4({ networkError: error });
                    }
                    finishWaitingForOwnResult();
                    _this.reportError(error, variables);
                }
            },
        };
        if (!useDisposableConcast && (fromLink || !this.concast)) {
            // We use the {add,remove}Observer methods directly to avoid wrapping
            // observer with an unnecessary SubscriptionObserver object.
            if (this.concast && this.observer) {
                this.concast.removeObserver(this.observer);
            }
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__/* .preventUnhandledRejection */ .X)(this.reobserveAsConcast(newOptions, newNetworkStatus).promise.then(this.maskResult));
    };
    ObservableQuery.prototype.resubscribeAfterError = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // If `lastError` is set in the current when the subscription is re-created,
        // the subscription will immediately receive the error, which will
        // cause it to terminate again. To avoid this, we first clear
        // the last error/result from the `observableQuery` before re-starting
        // the subscription, and restore the last value afterwards so that the
        // subscription has a chance to stay open.
        var last = this.last;
        this.resetLastResults();
        var subscription = this.subscribe.apply(this, args);
        this.last = last;
        return subscription;
    };
    // (Re)deliver the current result to this.observers without applying fetch
    // policies or making network requests.
    ObservableQuery.prototype.observe = function () {
        this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentFullResult(false), this.variables);
    };
    ObservableQuery.prototype.reportResult = function (result, variables) {
        var lastError = this.getLastError();
        var isDifferent = this.isDifferentFromLastResult(result, variables);
        // Update the last result even when isDifferentFromLastResult returns false,
        // because the query may be using the @nonreactive directive, and we want to
        // save the the latest version of any nonreactive subtrees (in case
        // getCurrentResult is called), even though we skip broadcasting changes.
        if (lastError || !result.partial || this.options.returnPartialData) {
            this.updateLastResult(result, variables);
        }
        if (lastError || isDifferent) {
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__/* .iterateObserversSafely */ .w)(this.observers, "next", this.maskResult(result));
        }
    };
    ObservableQuery.prototype.reportError = function (error, variables) {
        // Since we don't get the current result on errors, only the error, we
        // must mirror the updates that occur in QueryStore.markQueryError here
        var errorResult = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.getLastResult()), { error: error, errors: error.graphQLErrors, networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .NetworkStatus */ .pT.error, loading: false });
        this.updateLastResult(errorResult, variables);
        (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__/* .iterateObserversSafely */ .w)(this.observers, "error", (this.last.error = error));
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        // stop all active GraphQL subscriptions
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    ObservableQuery.prototype.transformDocument = function (document) {
        return this.queryManager.transform(document);
    };
    ObservableQuery.prototype.maskResult = function (result) {
        return result && "data" in result ? (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, result), { data: this.queryManager.maskOperation({
                document: this.query,
                data: result.data,
                fetchPolicy: this.options.fetchPolicy,
                id: this.queryId,
            }) }) : result;
    };
    /** @internal */
    ObservableQuery.prototype.resetNotifications = function () {
        this.cancelNotifyTimeout();
        this.dirty = false;
    };
    ObservableQuery.prototype.cancelNotifyTimeout = function () {
        if (this.notifyTimeout) {
            clearTimeout(this.notifyTimeout);
            this.notifyTimeout = void 0;
        }
    };
    /** @internal */
    ObservableQuery.prototype.scheduleNotify = function () {
        var _this = this;
        if (this.dirty)
            return;
        this.dirty = true;
        if (!this.notifyTimeout) {
            this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
        }
    };
    /** @internal */
    ObservableQuery.prototype.notify = function () {
        this.cancelNotifyTimeout();
        if (this.dirty) {
            if (this.options.fetchPolicy == "cache-only" ||
                this.options.fetchPolicy == "cache-and-network" ||
                !(0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_5__/* .isNetworkRequestInFlight */ .bi)(this.queryInfo.networkStatus)) {
                var diff = this.queryInfo.getDiff();
                if (diff.fromOptimisticTransaction) {
                    // If this diff came from an optimistic transaction, deliver the
                    // current cache data to the ObservableQuery, but don't perform a
                    // reobservation, since oq.reobserveCacheFirst might make a network
                    // request, and we never want to trigger network requests in the
                    // middle of optimistic updates.
                    this.observe();
                }
                else {
                    // Otherwise, make the ObservableQuery "reobserve" the latest data
                    // using a temporary fetch policy of "cache-first", so complete cache
                    // results have a chance to be delivered without triggering additional
                    // network requests, even when options.fetchPolicy is "network-only"
                    // or "cache-and-network". All other fetch policies are preserved by
                    // this method, and are handled by calling oq.reobserve(). If this
                    // reobservation is spurious, isDifferentFromLastResult still has a
                    // chance to catch it before delivery to ObservableQuery subscribers.
                    this.reobserveCacheFirst();
                }
            }
        }
        this.dirty = false;
    };
    // Reobserve with fetchPolicy effectively set to "cache-first", triggering
    // delivery of any new data from the cache, possibly falling back to the network
    // if any cache data are missing. This allows _complete_ cache results to be
    // delivered without also kicking off unnecessary network requests when
    // this.options.fetchPolicy is "cache-and-network" or "network-only". When
    // this.options.fetchPolicy is any other policy ("cache-first", "cache-only",
    // "standby", or "no-cache"), we call this.reobserve() as usual.
    ObservableQuery.prototype.reobserveCacheFirst = function () {
        var _a = this.options, fetchPolicy = _a.fetchPolicy, nextFetchPolicy = _a.nextFetchPolicy;
        if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
            return this.reobserve({
                fetchPolicy: "cache-first",
                // Use a temporary nextFetchPolicy function that replaces itself with the
                // previous nextFetchPolicy value and returns the original fetchPolicy.
                nextFetchPolicy: function (currentFetchPolicy, context) {
                    // Replace this nextFetchPolicy function in the options object with the
                    // original this.options.nextFetchPolicy value.
                    this.nextFetchPolicy = nextFetchPolicy;
                    // If the original nextFetchPolicy value was a function, give it a
                    // chance to decide what happens here.
                    if (typeof this.nextFetchPolicy === "function") {
                        return this.nextFetchPolicy(currentFetchPolicy, context);
                    }
                    // Otherwise go back to the original this.options.fetchPolicy.
                    return fetchPolicy;
                },
            });
        }
        return this.reobserve();
    };
    /**
     * @internal
     * A slot used by the `useQuery` hook to indicate that `client.watchQuery`
     * should not register the query immediately, but instead wait for the query to
     * be started registered with the `QueryManager` when `useSyncExternalStore`
     * actively subscribes to it.
     */
    ObservableQuery.inactiveOnCreation = new optimism__WEBPACK_IMPORTED_MODULE_2__/* .Slot */ .DX();
    return ObservableQuery;
}(_utilities_index_js__WEBPACK_IMPORTED_MODULE_12__/* .Observable */ .c));

// Necessary because the ObservableQuery constructor has a different
// signature than the Observable constructor.
(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__/* .fixObservableSubclass */ .r)(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
    globalThis.__DEV__ !== false && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.error(25, error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (globalThis.__DEV__ !== false && missing) {
        globalThis.__DEV__ !== false && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.debug(26, missing);
    }
}
function skipCacheDataFor(fetchPolicy /* `undefined` would mean `"cache-first"` */) {
    return (fetchPolicy === "network-only" ||
        fetchPolicy === "no-cache" ||
        fetchPolicy === "standby");
}
//# sourceMappingURL=ObservableQuery.js.map

/***/ }),

/***/ 9080:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ equalByQuery)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8674);
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15381);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84824);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65215);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68869);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67194);



// Returns true if aResult and bResult are deeply equal according to the fields
// selected by the given query, ignoring any fields marked as @nonreactive.
function equalByQuery(query, _a, _b, variables) {
    var aData = _a.data, aRest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["data"]);
    var bData = _b.data, bRest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_b, ["data"]);
    return ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(aRest, bRest) &&
        equalBySelectionSet((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .getMainDefinition */ .Vn)(query).selectionSet, aData, bData, {
            fragmentMap: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__/* .createFragmentMap */ .JG)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .getFragmentDefinitions */ .zK)(query)),
            variables: variables,
        }));
}
function equalBySelectionSet(selectionSet, aResult, bResult, context) {
    if (aResult === bResult) {
        return true;
    }
    var seenSelections = new Set();
    // Returning true from this Array.prototype.every callback function skips the
    // current field/subtree. Returning false aborts the entire traversal
    // immediately, causing equalBySelectionSet to return false.
    return selectionSet.selections.every(function (selection) {
        // Avoid re-processing the same selection at the same level of recursion, in
        // case the same field gets included via multiple indirect fragment spreads.
        if (seenSelections.has(selection))
            return true;
        seenSelections.add(selection);
        // Ignore @skip(if: true) and @include(if: false) fields.
        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__/* .shouldInclude */ .MS)(selection, context.variables))
            return true;
        // If the field or (named) fragment spread has a @nonreactive directive on
        // it, we don't care if it's different, so we pretend it's the same.
        if (selectionHasNonreactiveDirective(selection))
            return true;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__/* .isField */ .dt)(selection)) {
            var resultKey = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__/* .resultKeyNameFromField */ .ue)(selection);
            var aResultChild = aResult && aResult[resultKey];
            var bResultChild = bResult && bResult[resultKey];
            var childSelectionSet = selection.selectionSet;
            if (!childSelectionSet) {
                // These are scalar values, so we can compare them with deep equal
                // without redoing the main recursive work.
                return (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(aResultChild, bResultChild);
            }
            var aChildIsArray = Array.isArray(aResultChild);
            var bChildIsArray = Array.isArray(bResultChild);
            if (aChildIsArray !== bChildIsArray)
                return false;
            if (aChildIsArray && bChildIsArray) {
                var length_1 = aResultChild.length;
                if (bResultChild.length !== length_1) {
                    return false;
                }
                for (var i = 0; i < length_1; ++i) {
                    if (!equalBySelectionSet(childSelectionSet, aResultChild[i], bResultChild[i], context)) {
                        return false;
                    }
                }
                return true;
            }
            return equalBySelectionSet(childSelectionSet, aResultChild, bResultChild, context);
        }
        else {
            var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__/* .getFragmentFromSelection */ .HQ)(selection, context.fragmentMap);
            if (fragment) {
                // The fragment might === selection if it's an inline fragment, but
                // could be !== if it's a named fragment ...spread.
                if (selectionHasNonreactiveDirective(fragment))
                    return true;
                return equalBySelectionSet(fragment.selectionSet, 
                // Notice that we reuse the same aResult and bResult values here,
                // since the fragment ...spread does not specify a field name, but
                // consists of multiple fields (within the fragment's selection set)
                // that should be applied to the current result value(s).
                aResult, bResult, context);
            }
        }
    });
}
function selectionHasNonreactiveDirective(selection) {
    return (!!selection.directives && selection.directives.some(directiveIsNonreactive));
}
function directiveIsNonreactive(dir) {
    return dir.name.value === "nonreactive";
}
//# sourceMappingURL=equalByQuery.js.map

/***/ }),

/***/ 88599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D2: () => (/* binding */ isNetworkRequestSettled),
/* harmony export */   bi: () => (/* binding */ isNetworkRequestInFlight),
/* harmony export */   pT: () => (/* binding */ NetworkStatus)
/* harmony export */ });
/**
 * The current status of a queryâs execution in our system.
 */
var NetworkStatus;
(function (NetworkStatus) {
    /**
     * The query has never been run before and the query is now currently running. A query will still
     * have this network status even if a partial data result was returned from the cache, but a
     * query was dispatched anyway.
     */
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    /**
     * If `setVariables` was called and a query was fired because of that then the network status
     * will be `setVariables` until the result of that query comes back.
     */
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    /**
     * Indicates that `fetchMore` was called on this query and that the query created is currently in
     * flight.
     */
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    /**
     * Similar to the `setVariables` network status. It means that `refetch` was called on a query
     * and the refetch request is currently in flight.
     */
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    /**
     * Indicates that a polling query is currently in flight. So for example if you are polling a
     * query every 10 seconds then the network status will switch to `poll` every 10 seconds whenever
     * a poll request has been sent but not resolved.
     */
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    /**
     * No request is in flight for this query, and no errors happened. Everything is OK.
     */
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    /**
     * No request is in flight for this query, but one or more errors were detected.
     */
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
/**
 * Returns true if there is currently a network request in flight according to a given network
 * status.
 */
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}
/**
 * Returns true if the network request is in ready or error state according to a given network
 * status.
 */
function isNetworkRequestSettled(networkStatus) {
    return networkStatus === 7 || networkStatus === 8;
}
//# sourceMappingURL=networkStatus.js.map

/***/ }),

/***/ 9211:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K$: () => (/* binding */ PROTOCOL_ERRORS_SYMBOL),
/* harmony export */   K4: () => (/* binding */ ApolloError),
/* harmony export */   Mn: () => (/* binding */ isApolloError),
/* harmony export */   uR: () => (/* binding */ graphQLResultHasProtocolErrors)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8674);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90075);



// This Symbol allows us to pass transport-specific errors from the link chain
// into QueryManager/client internals without risking a naming collision within
// extensions (which implementers can use as they see fit).
var PROTOCOL_ERRORS_SYMBOL = Symbol();
function graphQLResultHasProtocolErrors(result) {
    if (result.extensions) {
        return Array.isArray(result.extensions[PROTOCOL_ERRORS_SYMBOL]);
    }
    return false;
}
function isApolloError(err) {
    return err.hasOwnProperty("graphQLErrors");
}
// Sets the error message on this error according to the
// the GraphQL and network errors that are present.
// If the error message has already been set through the
// constructor or otherwise, this function is a nop.
var generateErrorMessage = function (err) {
    var errors = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
    if (err.networkError)
        errors.push(err.networkError);
    return (errors
        // The rest of the code sometimes unsafely types non-Error objects as GraphQLErrors
        .map(function (err) {
        return ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isNonNullObject */ .U)(err) && err.message) || "Error message not found.";
    })
        .join("\n"));
};
var ApolloError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ApolloError, _super);
    // Constructs an instance of ApolloError given serialized GraphQL errors,
    // client errors, protocol errors or network errors.
    // Note that one of these has to be a valid
    // value or the constructed error will be meaningless.
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, protocolErrors = _a.protocolErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.name = "ApolloError";
        _this.graphQLErrors = graphQLErrors || [];
        _this.protocolErrors = protocolErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.cause =
            (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([
                networkError
            ], (graphQLErrors || []), true), (protocolErrors || []), true), (clientErrors || []), true).find(function (e) { return !!e; }) || null;
        // We're not using `Object.setPrototypeOf` here as it isn't fully
        // supported on Android (see issue #3236).
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 52304:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ApolloCache: () => (/* reexport */ core.ApolloCache),
  ApolloClient: () => (/* reexport */ core.ApolloClient),
  ApolloConsumer: () => (/* reexport */ ApolloConsumer),
  ApolloError: () => (/* reexport */ core.ApolloError),
  ApolloLink: () => (/* reexport */ core.ApolloLink),
  ApolloProvider: () => (/* reexport */ ApolloProvider),
  Cache: () => (/* reexport */ core.Cache),
  DocumentTransform: () => (/* reexport */ core.DocumentTransform),
  DocumentType: () => (/* reexport */ DocumentType),
  HttpLink: () => (/* reexport */ core.HttpLink),
  InMemoryCache: () => (/* reexport */ core.InMemoryCache),
  MissingFieldError: () => (/* reexport */ core.MissingFieldError),
  NetworkStatus: () => (/* reexport */ core.NetworkStatus),
  Observable: () => (/* reexport */ core.Observable),
  ObservableQuery: () => (/* reexport */ core.ObservableQuery),
  checkFetcher: () => (/* reexport */ core.checkFetcher),
  concat: () => (/* reexport */ core.concat),
  createHttpLink: () => (/* reexport */ core.createHttpLink),
  createQueryPreloader: () => (/* reexport */ createQueryPreloader),
  createSignalIfSupported: () => (/* reexport */ core.createSignalIfSupported),
  defaultDataIdFromObject: () => (/* reexport */ core.defaultDataIdFromObject),
  defaultPrinter: () => (/* reexport */ core.defaultPrinter),
  disableExperimentalFragmentVariables: () => (/* reexport */ core.disableExperimentalFragmentVariables),
  disableFragmentWarnings: () => (/* reexport */ core.disableFragmentWarnings),
  empty: () => (/* reexport */ core.empty),
  enableExperimentalFragmentVariables: () => (/* reexport */ core.enableExperimentalFragmentVariables),
  execute: () => (/* reexport */ core.execute),
  fallbackHttpConfig: () => (/* reexport */ core.fallbackHttpConfig),
  from: () => (/* reexport */ core.from),
  fromError: () => (/* reexport */ core.fromError),
  fromPromise: () => (/* reexport */ core.fromPromise),
  getApolloContext: () => (/* reexport */ getApolloContext),
  gql: () => (/* reexport */ core.gql),
  isApolloError: () => (/* reexport */ core.isApolloError),
  isNetworkRequestSettled: () => (/* reexport */ core.isNetworkRequestSettled),
  isReference: () => (/* reexport */ core.isReference),
  makeReference: () => (/* reexport */ core.makeReference),
  makeVar: () => (/* reexport */ core.makeVar),
  mergeOptions: () => (/* reexport */ core.mergeOptions),
  operationName: () => (/* reexport */ operationName),
  parseAndCheckHttpResponse: () => (/* reexport */ core.parseAndCheckHttpResponse),
  parser: () => (/* reexport */ parser),
  resetApolloContext: () => (/* reexport */ resetApolloContext),
  resetCaches: () => (/* reexport */ core.resetCaches),
  rewriteURIForGET: () => (/* reexport */ core.rewriteURIForGET),
  selectHttpOptionsAndBody: () => (/* reexport */ core.selectHttpOptionsAndBody),
  selectHttpOptionsAndBodyInternal: () => (/* reexport */ core.selectHttpOptionsAndBodyInternal),
  selectURI: () => (/* reexport */ core.selectURI),
  serializeFetchParameter: () => (/* reexport */ core.serializeFetchParameter),
  setLogVerbosity: () => (/* reexport */ core.setLogVerbosity),
  skipToken: () => (/* reexport */ skipToken),
  split: () => (/* reexport */ core.split),
  throwServerError: () => (/* reexport */ core.throwServerError),
  toPromise: () => (/* reexport */ core.toPromise),
  useApolloClient: () => (/* reexport */ useApolloClient),
  useBackgroundQuery: () => (/* reexport */ useBackgroundQuery),
  useFragment: () => (/* reexport */ useFragment),
  useLazyQuery: () => (/* reexport */ useLazyQuery),
  useLoadableQuery: () => (/* reexport */ useLoadableQuery),
  useMutation: () => (/* reexport */ useMutation),
  useQuery: () => (/* reexport */ useQuery),
  useQueryRefHandlers: () => (/* reexport */ useQueryRefHandlers),
  useReactiveVar: () => (/* reexport */ useReactiveVar),
  useReadQuery: () => (/* reexport */ useReadQuery),
  useSubscription: () => (/* reexport */ useSubscription),
  useSuspenseFragment: () => (/* reexport */ useSuspenseFragment),
  useSuspenseQuery: () => (/* reexport */ useSuspenseQuery)
});

// EXTERNAL MODULE: ./node_modules/@apollo/client/core/index.js
var core = __webpack_require__(21659);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/globals/index.js
var globals = __webpack_require__(52687);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/@apollo/client/node_modules/rehackt/index.js
var rehackt = __webpack_require__(49606);
var rehackt_namespaceObject = /*#__PURE__*/__webpack_require__.t(rehackt, 2);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/canUse.js
var canUse = __webpack_require__(2619);
;// ./node_modules/@apollo/client/react/context/ApolloContext.js



// To make sure Apollo Client doesn't create more than one React context
// (which can lead to problems like having an Apollo Client instance added
// in one context, then attempting to retrieve it from another different
// context), a single Apollo context is created and tracked in global state.
var contextKey = canUse/* canUseSymbol */.ol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function getApolloContext() {
    (0,globals/* invariant */.V1)("createContext" in rehackt_namespaceObject, 54);
    var context = rehackt.createContext[contextKey];
    if (!context) {
        Object.defineProperty(rehackt.createContext, contextKey, {
            value: (context = rehackt.createContext({})),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = "ApolloContext";
    }
    return context;
}
/**
 * @deprecated This function has no "resetting" effect since Apollo Client 3.4.12,
 * and will be removed in the next major version of Apollo Client.
 * If you want to get the Apollo Context, use `getApolloContext` instead.
 */
var resetApolloContext = getApolloContext;
//# sourceMappingURL=ApolloContext.js.map
;// ./node_modules/@apollo/client/react/context/ApolloProvider.js




var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    var parentContext = rehackt.useContext(ApolloContext);
    var context = rehackt.useMemo(function () {
        return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, parentContext), { client: client || parentContext.client });
    }, [parentContext, client]);
    (0,globals/* invariant */.V1)(context.client, 55);
    return (rehackt.createElement(ApolloContext.Provider, { value: context }, children));
};
//# sourceMappingURL=ApolloProvider.js.map
;// ./node_modules/@apollo/client/react/context/ApolloConsumer.js



var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return (rehackt.createElement(ApolloContext.Consumer, null, function (context) {
        (0,globals/* invariant */.V1)(context && context.client, 53);
        return props.children(context.client);
    }));
};
//# sourceMappingURL=ApolloConsumer.js.map
;// ./node_modules/@apollo/client/react/hooks/useApolloClient.js



/**
 * @example
 * ```jsx
 * import { useApolloClient } from '@apollo/client';
 *
 * function SomeComponent() {
 *   const client = useApolloClient();
 *   // `client` is now set to the `ApolloClient` instance being used by the
 *   // application (that was configured using something like `ApolloProvider`)
 * }
 * ```
 *
 * @since 3.0.0
 * @returns The `ApolloClient` instance being used by the application.
 */
function useApolloClient(override) {
    var context = rehackt.useContext(getApolloContext());
    var client = override || context.client;
    (0,globals/* invariant */.V1)(!!client, 58);
    return client;
}
//# sourceMappingURL=useApolloClient.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/mergeOptions.js
var mergeOptions = __webpack_require__(60144);
;// ./node_modules/@apollo/client/react/hooks/useSyncExternalStore.js



var didWarnUncachedGetSnapshot = false;
// Prevent webpack from complaining about our feature detection of the
// useSyncExternalStore property of the React namespace, which is expected not
// to exist when using React 17 and earlier, and that's fine.
var uSESKey = "useSyncExternalStore";
var realHook = rehackt_namespaceObject[uSESKey];
// Adapted from https://www.npmjs.com/package/use-sync-external-store, with
// Apollo Client deviations called out by "// DEVIATION ..." comments.
// When/if React.useSyncExternalStore is defined, delegate fully to it.
var useSyncExternalStore = realHook ||
    (function (subscribe, getSnapshot, getServerSnapshot) {
        // Read the current snapshot from the store on every render. Again, this
        // breaks the rules of React, and only works here because of specific
        // implementation details, most importantly that updates are
        // always synchronous.
        var value = getSnapshot();
        if (
        // DEVIATION: Using __DEV__
        globalThis.__DEV__ !== false &&
            !didWarnUncachedGetSnapshot &&
            // DEVIATION: Not using Object.is because we know our snapshots will never
            // be exotic primitive values like NaN, which is !== itself.
            value !== getSnapshot()) {
            didWarnUncachedGetSnapshot = true;
            // DEVIATION: Using invariant.error instead of console.error directly.
            globalThis.__DEV__ !== false && globals/* invariant */.V1.error(68);
        }
        // Because updates are synchronous, we don't queue them. Instead we force a
        // re-render whenever the subscribed state changes by updating an some
        // arbitrary useState hook. Then, during render, we call getSnapshot to read
        // the current value.
        //
        // Because we don't actually use the state returned by the useState hook, we
        // can save a bit of memory by storing other stuff in that slot.
        //
        // To implement the early bailout, we need to track some things on a mutable
        // object. Usually, we would put that in a useRef hook, but we can stash it in
        // our useState hook instead.
        //
        // To force a re-render, we call forceUpdate({inst}). That works because the
        // new object always fails an equality check.
        var _a = rehackt.useState({
            inst: { value: value, getSnapshot: getSnapshot },
        }), inst = _a[0].inst, forceUpdate = _a[1];
        // Track the latest getSnapshot function with a ref. This needs to be updated
        // in the layout phase so we can access it during the tearing check that
        // happens on subscribe.
        if (canUse/* canUseLayoutEffect */.JR) {
            // DEVIATION: We avoid calling useLayoutEffect when !canUseLayoutEffect,
            // which may seem like a conditional hook, but this code ends up behaving
            // unconditionally (one way or the other) because canUseLayoutEffect is
            // constant.
            rehackt.useLayoutEffect(function () {
                Object.assign(inst, { value: value, getSnapshot: getSnapshot });
                // Whenever getSnapshot or subscribe changes, we need to check in the
                // commit phase if there was an interleaved mutation. In concurrent mode
                // this can happen all the time, but even in synchronous mode, an earlier
                // effect may have mutated the store.
                if (checkIfSnapshotChanged(inst)) {
                    // Force a re-render.
                    forceUpdate({ inst: inst });
                }
                // React Hook React.useLayoutEffect has a missing dependency: 'inst'. Either include it or remove the dependency array.
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [subscribe, value, getSnapshot]);
        }
        else {
            Object.assign(inst, { value: value, getSnapshot: getSnapshot });
        }
        rehackt.useEffect(function () {
            // Check for changes right before subscribing. Subsequent changes will be
            // detected in the subscription handler.
            if (checkIfSnapshotChanged(inst)) {
                // Force a re-render.
                forceUpdate({ inst: inst });
            }
            // Subscribe to the store and return a clean-up function.
            return subscribe(function handleStoreChange() {
                // TODO: Because there is no cross-renderer API for batching updates, it's
                // up to the consumer of this library to wrap their subscription event
                // with unstable_batchedUpdates. Should we try to detect when this isn't
                // the case and print a warning in development?
                // The store changed. Check if the snapshot changed since the last time we
                // read from the store.
                if (checkIfSnapshotChanged(inst)) {
                    // Force a re-render.
                    forceUpdate({ inst: inst });
                }
            });
            // React Hook React.useEffect has a missing dependency: 'inst'. Either include it or remove the dependency array.
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [subscribe]);
        return value;
    });
function checkIfSnapshotChanged(_a) {
    var value = _a.value, getSnapshot = _a.getSnapshot;
    try {
        return value !== getSnapshot();
    }
    catch (_b) {
        return true;
    }
}
//# sourceMappingURL=useSyncExternalStore.js.map
// EXTERNAL MODULE: ./node_modules/@wry/equality/lib/index.js
var lib = __webpack_require__(15381);
// EXTERNAL MODULE: ./node_modules/@apollo/client/errors/index.js
var client_errors = __webpack_require__(9211);
// EXTERNAL MODULE: ./node_modules/@apollo/client/core/ObservableQuery.js
var ObservableQuery = __webpack_require__(72988);
// EXTERNAL MODULE: ./node_modules/@apollo/client/core/networkStatus.js
var networkStatus = __webpack_require__(88599);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/caching/caches.js
var caches = __webpack_require__(599);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/caching/sizes.js
var sizes = __webpack_require__(81212);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/caching/getMemoryInternals.js
var getMemoryInternals = __webpack_require__(35051);
;// ./node_modules/@apollo/client/react/parser/index.js



var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache;
function operationName(type) {
    var name;
    switch (type) {
        case DocumentType.Query:
            name = "Query";
            break;
        case DocumentType.Mutation:
            name = "Mutation";
            break;
        case DocumentType.Subscription:
            name = "Subscription";
            break;
    }
    return name;
}
// This parser is mostly used to safety check incoming documents.
function parser(document) {
    if (!cache) {
        cache = new caches/* AutoCleanedWeakCache */.A(sizes/* cacheSizes */.v.parser || 1000 /* defaultCacheSizes.parser */);
    }
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    (0,globals/* invariant */.V1)(!!document && !!document.kind, 70, document);
    var fragments = [];
    var queries = [];
    var mutations = [];
    var subscriptions = [];
    for (var _i = 0, _a = document.definitions; _i < _a.length; _i++) {
        var x = _a[_i];
        if (x.kind === "FragmentDefinition") {
            fragments.push(x);
            continue;
        }
        if (x.kind === "OperationDefinition") {
            switch (x.operation) {
                case "query":
                    queries.push(x);
                    break;
                case "mutation":
                    mutations.push(x);
                    break;
                case "subscription":
                    subscriptions.push(x);
                    break;
            }
        }
    }
    (0,globals/* invariant */.V1)(!fragments.length ||
        queries.length ||
        mutations.length ||
        subscriptions.length, 71);
    (0,globals/* invariant */.V1)(
        queries.length + mutations.length + subscriptions.length <= 1,
        72,
        document,
        queries.length,
        subscriptions.length,
        mutations.length
    );
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length ? queries
        : mutations.length ? mutations
            : subscriptions;
    (0,globals/* invariant */.V1)(definitions.length === 1, 73, document, definitions.length);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === "Name") {
        name = definition.name.value;
    }
    else {
        name = "data"; // fallback to using data if no name
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
parser.resetCache = function () {
    cache = undefined;
};
if (globalThis.__DEV__ !== false) {
    (0,getMemoryInternals/* registerGlobalCache */.D_)("parser", function () { return (cache ? cache.size : 0); });
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    (0,globals/* invariant */.V1)(
        operation.type === type,
        74,
        requiredOperationName,
        requiredOperationName,
        usedOperationName
    );
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/compact.js
var compact = __webpack_require__(87945);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/arrays.js
var arrays = __webpack_require__(45636);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
var maybeDeepFreeze = __webpack_require__(21469);
;// ./node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var wrapperSymbol = Symbol.for("apollo.hook.wrappers");
/**
 * @internal
 *
 * Makes an Apollo Client hook "wrappable".
 * That means that the Apollo Client instance can expose a "wrapper" that will be
 * used to wrap the original hook implementation with additional logic.
 * @example
 * ```tsx
 * // this is already done in `@apollo/client` for all wrappable hooks (see `WrappableHooks`)
 * // following this pattern
 * function useQuery() {
 *   return wrapHook('useQuery', _useQuery, options.client)(query, options);
 * }
 * function _useQuery(query, options) {
 *   // original implementation
 * }
 *
 * // this is what a library like `@apollo/client-react-streaming` would do
 * class ApolloClientWithStreaming extends ApolloClient {
 *   constructor(options) {
 *     super(options);
 *     this.queryManager[Symbol.for("apollo.hook.wrappers")] = {
 *       useQuery: (original) => (query, options) => {
 *         console.log("useQuery was called with options", options);
 *         return original(query, options);
 *       }
 *     }
 *   }
 * }
 *
 * // this will now log the options and then call the original `useQuery`
 * const client = new ApolloClientWithStreaming({ ... });
 * useQuery(query, { client });
 * ```
 */
function wrapHook(hookName, useHook, clientOrObsQuery) {
    var queryManager = clientOrObsQuery["queryManager"];
    var wrappers = queryManager && queryManager[wrapperSymbol];
    var wrapper = wrappers && wrappers[hookName];
    return wrapper ? wrapper(useHook) : useHook;
}
//# sourceMappingURL=wrapHook.js.map
;// ./node_modules/@apollo/client/react/hooks/useQuery.js

/**
 * Function parameters in this file try to follow a common order for the sake of
 * readability and consistency. The order is as follows:
 *
 * resultData
 * observable
 * client
 * query
 * options
 * watchQueryOptions
 * makeWatchQueryOptions
 * isSSRAllowed
 * disableNetworkFetches
 * partialRefetch
 * renderPromises
 * isSyncSSR
 * callbacks
 */
/** */












var useQuery_hasOwnProperty = Object.prototype.hasOwnProperty;
function noop() { }
var lastWatchOptions = Symbol();
/**
 * A hook for executing queries in an Apollo application.
 *
 * To run a query within a React component, call `useQuery` and pass it a GraphQL query document.
 *
 * When your component renders, `useQuery` returns an object from Apollo Client that contains `loading`, `error`, and `data` properties you can use to render your UI.
 *
 * > Refer to the [Queries](https://www.apollographql.com/docs/react/data/queries) section for a more in-depth overview of `useQuery`.
 *
 * @example
 * ```jsx
 * import { gql, useQuery } from '@apollo/client';
 *
 * const GET_GREETING = gql`
 *   query GetGreeting($language: String!) {
 *     greeting(language: $language) {
 *       message
 *     }
 *   }
 * `;
 *
 * function Hello() {
 *   const { loading, error, data } = useQuery(GET_GREETING, {
 *     variables: { language: 'english' },
 *   });
 *   if (loading) return <p>Loading ...</p>;
 *   return <h1>Hello {data.greeting.message}!</h1>;
 * }
 * ```
 * @since 3.0.0
 * @param query - A GraphQL query document parsed into an AST by `gql`.
 * @param options - Options to control how the query is executed.
 * @returns Query result object
 */
function useQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return wrapHook("useQuery", 
    // eslint-disable-next-line react-compiler/react-compiler
    useQuery_, useApolloClient(options && options.client))(query, options);
}
function useQuery_(query, options) {
    var _a = useQueryInternals(query, options), result = _a.result, obsQueryFields = _a.obsQueryFields;
    return rehackt.useMemo(function () { return ((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, result), obsQueryFields)); }, [result, obsQueryFields]);
}
function useInternalState(client, query, options, renderPromises, makeWatchQueryOptions) {
    function createInternalState(previous) {
        var _a;
        verifyDocumentType(query, DocumentType.Query);
        var internalState = {
            client: client,
            query: query,
            observable: 
            // See if there is an existing observable that was used to fetch the same
            // data and if so, use it instead since it will contain the proper queryId
            // to fetch the result set. This is used during SSR.
            (renderPromises &&
                renderPromises.getSSRObservable(makeWatchQueryOptions())) ||
                ObservableQuery/* ObservableQuery */.U["inactiveOnCreation"].withValue(!renderPromises, function () {
                    return client.watchQuery(getObsQueryOptions(void 0, client, options, makeWatchQueryOptions()));
                }),
            resultData: {
                // Reuse previousData from previous InternalState (if any) to provide
                // continuity of previousData even if/when the query or client changes.
                previousData: (_a = previous === null || previous === void 0 ? void 0 : previous.resultData.current) === null || _a === void 0 ? void 0 : _a.data,
            },
        };
        return internalState;
    }
    var _a = rehackt.useState(createInternalState), internalState = _a[0], updateInternalState = _a[1];
    /**
     * Used by `useLazyQuery` when a new query is executed.
     * We keep this logic here since it needs to update things in unsafe
     * ways and here we at least can keep track of that in a single place.
     */
    function onQueryExecuted(watchQueryOptions) {
        var _a;
        var _b;
        // this needs to be set to prevent an immediate `resubscribe` in the
        // next rerender of the `useQuery` internals
        Object.assign(internalState.observable, (_a = {},
            _a[lastWatchOptions] = watchQueryOptions,
            _a));
        var resultData = internalState.resultData;
        updateInternalState((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, internalState), { 
            // might be a different query
            query: watchQueryOptions.query, resultData: Object.assign(resultData, {
                // We need to modify the previous `resultData` object as we rely on the
                // object reference in other places
                previousData: ((_b = resultData.current) === null || _b === void 0 ? void 0 : _b.data) || resultData.previousData,
                current: undefined,
            }) }));
    }
    if (client !== internalState.client || query !== internalState.query) {
        // If the client or query have changed, we need to create a new InternalState.
        // This will trigger a re-render with the new state, but it will also continue
        // to run the current render function to completion.
        // Since we sometimes trigger some side-effects in the render function, we
        // re-assign `state` to the new state to ensure that those side-effects are
        // triggered with the new state.
        var newInternalState = createInternalState(internalState);
        updateInternalState(newInternalState);
        return [newInternalState, onQueryExecuted];
    }
    return [internalState, onQueryExecuted];
}
function useQueryInternals(query, options) {
    var client = useApolloClient(options.client);
    var renderPromises = rehackt.useContext(getApolloContext()).renderPromises;
    var isSyncSSR = !!renderPromises;
    var disableNetworkFetches = client.disableNetworkFetches;
    var ssrAllowed = options.ssr !== false && !options.skip;
    var partialRefetch = options.partialRefetch;
    var makeWatchQueryOptions = createMakeWatchQueryOptions(client, query, options, isSyncSSR);
    var _a = useInternalState(client, query, options, renderPromises, makeWatchQueryOptions), _b = _a[0], observable = _b.observable, resultData = _b.resultData, onQueryExecuted = _a[1];
    var watchQueryOptions = makeWatchQueryOptions(observable);
    useResubscribeIfNecessary(resultData, // might get mutated during render
    observable, // might get mutated during render
    client, options, watchQueryOptions);
    var obsQueryFields = rehackt.useMemo(function () { return bindObservableMethods(observable); }, [observable]);
    useRegisterSSRObservable(observable, renderPromises, ssrAllowed);
    var result = useObservableSubscriptionResult(resultData, observable, client, options, watchQueryOptions, disableNetworkFetches, partialRefetch, isSyncSSR, {
        onCompleted: options.onCompleted || noop,
        onError: options.onError || noop,
    });
    return {
        result: result,
        obsQueryFields: obsQueryFields,
        observable: observable,
        resultData: resultData,
        client: client,
        onQueryExecuted: onQueryExecuted,
    };
}
function useObservableSubscriptionResult(resultData, observable, client, options, watchQueryOptions, disableNetworkFetches, partialRefetch, isSyncSSR, callbacks) {
    var callbackRef = rehackt.useRef(callbacks);
    rehackt.useEffect(function () {
        // Make sure state.onCompleted and state.onError always reflect the latest
        // options.onCompleted and options.onError callbacks provided to useQuery,
        // since those functions are often recreated every time useQuery is called.
        // Like the forceUpdate method, the versions of these methods inherited from
        // InternalState.prototype are empty no-ops, but we can override them on the
        // base state object (without modifying the prototype).
        // eslint-disable-next-line react-compiler/react-compiler
        callbackRef.current = callbacks;
    });
    var resultOverride = ((isSyncSSR || disableNetworkFetches) &&
        options.ssr === false &&
        !options.skip) ?
        // If SSR has been explicitly disabled, and this function has been called
        // on the server side, return the default loading state.
        ssrDisabledResult
        : options.skip || watchQueryOptions.fetchPolicy === "standby" ?
            // When skipping a query (ie. we're not querying for data but still want to
            // render children), make sure the `data` is cleared out and `loading` is
            // set to `false` (since we aren't loading anything).
            //
            // NOTE: We no longer think this is the correct behavior. Skipping should
            // not automatically set `data` to `undefined`, but instead leave the
            // previous data in place. In other words, skipping should not mandate that
            // previously received data is all of a sudden removed. Unfortunately,
            // changing this is breaking, so we'll have to wait until Apollo Client 4.0
            // to address this.
            skipStandbyResult
            : void 0;
    var previousData = resultData.previousData;
    var currentResultOverride = rehackt.useMemo(function () {
        return resultOverride &&
            toQueryResult(resultOverride, previousData, observable, client);
    }, [client, observable, resultOverride, previousData]);
    return useSyncExternalStore(rehackt.useCallback(function (handleStoreChange) {
        // reference `disableNetworkFetches` here to ensure that the rules of hooks
        // keep it as a dependency of this effect, even though it's not used
        disableNetworkFetches;
        if (isSyncSSR) {
            return function () { };
        }
        var onNext = function () {
            var previousResult = resultData.current;
            // We use `getCurrentResult()` instead of the onNext argument because
            // the values differ slightly. Specifically, loading results will have
            // an empty object for data instead of `undefined` for some reason.
            var result = observable.getCurrentResult();
            // Make sure we're not attempting to re-render similar results
            if (previousResult &&
                previousResult.loading === result.loading &&
                previousResult.networkStatus === result.networkStatus &&
                (0,lib/* equal */.L)(previousResult.data, result.data)) {
                return;
            }
            setResult(result, resultData, observable, client, partialRefetch, handleStoreChange, callbackRef.current);
        };
        var onError = function (error) {
            subscription.current.unsubscribe();
            subscription.current = observable.resubscribeAfterError(onNext, onError);
            if (!useQuery_hasOwnProperty.call(error, "graphQLErrors")) {
                // The error is not a GraphQL error
                throw error;
            }
            var previousResult = resultData.current;
            if (!previousResult ||
                (previousResult && previousResult.loading) ||
                !(0,lib/* equal */.L)(error, previousResult.error)) {
                setResult({
                    data: (previousResult &&
                        previousResult.data),
                    error: error,
                    loading: false,
                    networkStatus: networkStatus/* NetworkStatus */.pT.error,
                }, resultData, observable, client, partialRefetch, handleStoreChange, callbackRef.current);
            }
        };
        // TODO evaluate if we keep this in
        // React Compiler cannot handle scoped `let` access, but a mutable object
        // like this is fine.
        // was:
        // let subscription = observable.subscribe(onNext, onError);
        var subscription = { current: observable.subscribe(onNext, onError) };
        // Do the "unsubscribe" with a short delay.
        // This way, an existing subscription can be reused without an additional
        // request if "unsubscribe"  and "resubscribe" to the same ObservableQuery
        // happen in very fast succession.
        return function () {
            setTimeout(function () { return subscription.current.unsubscribe(); });
        };
    }, [
        disableNetworkFetches,
        isSyncSSR,
        observable,
        resultData,
        partialRefetch,
        client,
    ]), function () {
        return currentResultOverride ||
            getCurrentResult(resultData, observable, callbackRef.current, partialRefetch, client);
    }, function () {
        return currentResultOverride ||
            getCurrentResult(resultData, observable, callbackRef.current, partialRefetch, client);
    });
}
function useRegisterSSRObservable(observable, renderPromises, ssrAllowed) {
    if (renderPromises && ssrAllowed) {
        renderPromises.registerSSRObservable(observable);
        if (observable.getCurrentResult().loading) {
            // TODO: This is a legacy API which could probably be cleaned up
            renderPromises.addObservableQueryPromise(observable);
        }
    }
}
// this hook is not compatible with any rules of React, and there's no good way to rewrite it.
// it should stay a separate hook that will not be optimized by the compiler
function useResubscribeIfNecessary(
/** this hook will mutate properties on `resultData` */
resultData, 
/** this hook will mutate properties on `observable` */
observable, client, options, watchQueryOptions) {
    var _a;
    if (observable[lastWatchOptions] &&
        !(0,lib/* equal */.L)(observable[lastWatchOptions], watchQueryOptions)) {
        // Though it might be tempting to postpone this reobserve call to the
        // useEffect block, we need getCurrentResult to return an appropriate
        // loading:true result synchronously (later within the same call to
        // useQuery). Since we already have this.observable here (not true for
        // the very first call to useQuery), we are not initiating any new
        // subscriptions, though it does feel less than ideal that reobserve
        // (potentially) kicks off a network request (for example, when the
        // variables have changed), which is technically a side-effect.
        observable.reobserve(getObsQueryOptions(observable, client, options, watchQueryOptions));
        // Make sure getCurrentResult returns a fresh ApolloQueryResult<TData>,
        // but save the current data as this.previousData, just like setResult
        // usually does.
        resultData.previousData =
            ((_a = resultData.current) === null || _a === void 0 ? void 0 : _a.data) || resultData.previousData;
        resultData.current = void 0;
    }
    observable[lastWatchOptions] = watchQueryOptions;
}
/*
 * A function to massage options before passing them to ObservableQuery.
 * This is two-step curried because we want to reuse the `make` function,
 * but the `observable` might differ between calls to `make`.
 */
function createMakeWatchQueryOptions(client, query, _a, isSyncSSR) {
    if (_a === void 0) { _a = {}; }
    var skip = _a.skip, ssr = _a.ssr, onCompleted = _a.onCompleted, onError = _a.onError, defaultOptions = _a.defaultOptions, 
    // The above options are useQuery-specific, so this ...otherOptions spread
    // makes otherOptions almost a WatchQueryOptions object, except for the
    // query property that we add below.
    otherOptions = (0,tslib_es6.__rest)(_a, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
    return function (observable) {
        // This Object.assign is safe because otherOptions is a fresh ...rest object
        // that did not exist until just now, so modifications are still allowed.
        var watchQueryOptions = Object.assign(otherOptions, { query: query });
        if (isSyncSSR &&
            (watchQueryOptions.fetchPolicy === "network-only" ||
                watchQueryOptions.fetchPolicy === "cache-and-network")) {
            // this behavior was added to react-apollo without explanation in this PR
            // https://github.com/apollographql/react-apollo/pull/1579
            watchQueryOptions.fetchPolicy = "cache-first";
        }
        if (!watchQueryOptions.variables) {
            watchQueryOptions.variables = {};
        }
        if (skip) {
            // When skipping, we set watchQueryOptions.fetchPolicy initially to
            // "standby", but we also need/want to preserve the initial non-standby
            // fetchPolicy that would have been used if not skipping.
            watchQueryOptions.initialFetchPolicy =
                watchQueryOptions.initialFetchPolicy ||
                    watchQueryOptions.fetchPolicy ||
                    getDefaultFetchPolicy(defaultOptions, client.defaultOptions);
            watchQueryOptions.fetchPolicy = "standby";
        }
        else if (!watchQueryOptions.fetchPolicy) {
            watchQueryOptions.fetchPolicy =
                (observable === null || observable === void 0 ? void 0 : observable.options.initialFetchPolicy) ||
                    getDefaultFetchPolicy(defaultOptions, client.defaultOptions);
        }
        return watchQueryOptions;
    };
}
function getObsQueryOptions(observable, client, queryHookOptions, watchQueryOptions) {
    var toMerge = [];
    var globalDefaults = client.defaultOptions.watchQuery;
    if (globalDefaults)
        toMerge.push(globalDefaults);
    if (queryHookOptions.defaultOptions) {
        toMerge.push(queryHookOptions.defaultOptions);
    }
    // We use compact rather than mergeOptions for this part of the merge,
    // because we want watchQueryOptions.variables (if defined) to replace
    // this.observable.options.variables whole. This replacement allows
    // removing variables by removing them from the variables input to
    // useQuery. If the variables were always merged together (rather than
    // replaced), there would be no way to remove existing variables.
    // However, the variables from options.defaultOptions and globalDefaults
    // (if provided) should be merged, to ensure individual defaulted
    // variables always have values, if not otherwise defined in
    // observable.options or watchQueryOptions.
    toMerge.push((0,compact/* compact */.o)(observable && observable.options, watchQueryOptions));
    return toMerge.reduce(mergeOptions/* mergeOptions */.l);
}
function setResult(nextResult, resultData, observable, client, partialRefetch, forceUpdate, callbacks) {
    var previousResult = resultData.current;
    if (previousResult && previousResult.data) {
        resultData.previousData = previousResult.data;
    }
    if (!nextResult.error && (0,arrays/* isNonEmptyArray */.E)(nextResult.errors)) {
        // Until a set naming convention for networkError and graphQLErrors is
        // decided upon, we map errors (graphQLErrors) to the error options.
        // TODO: Is it possible for both result.error and result.errors to be
        // defined here?
        nextResult.error = new client_errors/* ApolloError */.K4({ graphQLErrors: nextResult.errors });
    }
    resultData.current = toQueryResult(unsafeHandlePartialRefetch(nextResult, observable, partialRefetch), resultData.previousData, observable, client);
    // Calling state.setResult always triggers an update, though some call sites
    // perform additional equality checks before committing to an update.
    forceUpdate();
    handleErrorOrCompleted(nextResult, previousResult === null || previousResult === void 0 ? void 0 : previousResult.networkStatus, callbacks);
}
function handleErrorOrCompleted(result, previousNetworkStatus, callbacks) {
    if (!result.loading) {
        var error_1 = toApolloError(result);
        // wait a tick in case we are in the middle of rendering a component
        Promise.resolve()
            .then(function () {
            if (error_1) {
                callbacks.onError(error_1);
            }
            else if (result.data &&
                previousNetworkStatus !== result.networkStatus &&
                result.networkStatus === networkStatus/* NetworkStatus */.pT.ready) {
                callbacks.onCompleted(result.data);
            }
        })
            .catch(function (error) {
            globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(error);
        });
    }
}
function getCurrentResult(resultData, observable, callbacks, partialRefetch, client) {
    // Using this.result as a cache ensures getCurrentResult continues returning
    // the same (===) result object, unless state.setResult has been called, or
    // we're doing server rendering and therefore override the result below.
    if (!resultData.current) {
        // WARNING: SIDE-EFFECTS IN THE RENDER FUNCTION
        // this could call unsafeHandlePartialRefetch
        setResult(observable.getCurrentResult(), resultData, observable, client, partialRefetch, function () { }, callbacks);
    }
    return resultData.current;
}
function getDefaultFetchPolicy(queryHookDefaultOptions, clientDefaultOptions) {
    var _a;
    return ((queryHookDefaultOptions === null || queryHookDefaultOptions === void 0 ? void 0 : queryHookDefaultOptions.fetchPolicy) ||
        ((_a = clientDefaultOptions === null || clientDefaultOptions === void 0 ? void 0 : clientDefaultOptions.watchQuery) === null || _a === void 0 ? void 0 : _a.fetchPolicy) ||
        "cache-first");
}
function toApolloError(result) {
    return (0,arrays/* isNonEmptyArray */.E)(result.errors) ?
        new client_errors/* ApolloError */.K4({ graphQLErrors: result.errors })
        : result.error;
}
function toQueryResult(result, previousData, observable, client) {
    var data = result.data, partial = result.partial, resultWithoutPartial = (0,tslib_es6.__rest)(result, ["data", "partial"]);
    var queryResult = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({ data: data }, resultWithoutPartial), { client: client, observable: observable, variables: observable.variables, called: result !== ssrDisabledResult && result !== skipStandbyResult, previousData: previousData });
    return queryResult;
}
function unsafeHandlePartialRefetch(result, observable, partialRefetch) {
    // TODO: This code should be removed when the partialRefetch option is
    // removed. I was unable to get this hook to behave reasonably in certain
    // edge cases when this block was put in an effect.
    if (result.partial &&
        partialRefetch &&
        !result.loading &&
        (!result.data || Object.keys(result.data).length === 0) &&
        observable.options.fetchPolicy !== "cache-only") {
        observable.refetch();
        return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, result), { loading: true, networkStatus: networkStatus/* NetworkStatus */.pT.refetch });
    }
    return result;
}
var ssrDisabledResult = (0,maybeDeepFreeze/* maybeDeepFreeze */.G)({
    loading: true,
    data: void 0,
    error: void 0,
    networkStatus: networkStatus/* NetworkStatus */.pT.loading,
});
var skipStandbyResult = (0,maybeDeepFreeze/* maybeDeepFreeze */.G)({
    loading: false,
    data: void 0,
    error: void 0,
    networkStatus: networkStatus/* NetworkStatus */.pT.ready,
});
function bindObservableMethods(observable) {
    return {
        refetch: observable.refetch.bind(observable),
        reobserve: observable.reobserve.bind(observable),
        fetchMore: observable.fetchMore.bind(observable),
        updateQuery: observable.updateQuery.bind(observable),
        startPolling: observable.startPolling.bind(observable),
        stopPolling: observable.stopPolling.bind(observable),
        subscribeToMore: observable.subscribeToMore.bind(observable),
    };
}
//# sourceMappingURL=useQuery.js.map
;// ./node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js


// use canUseDOM here instead of canUseLayoutEffect because we want to be able
// to use useLayoutEffect in our jest tests. useLayoutEffect seems to work fine
// in useSuspenseQuery tests, but to honor the original comment about the
// warnings for useSyncExternalStore implementation, canUseLayoutEffect is left
// alone.
var useIsomorphicLayoutEffect = canUse/* canUseDOM */.Sw ? rehackt.useLayoutEffect : rehackt.useEffect;
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map
;// ./node_modules/@apollo/client/react/hooks/useLazyQuery.js





// The following methods, when called will execute the query, regardless of
// whether the useLazyQuery execute function was called before.
var EAGER_METHODS = [
    "refetch",
    "reobserve",
    "fetchMore",
    "updateQuery",
    "startPolling",
    "stopPolling",
    "subscribeToMore",
];
/**
 * A hook for imperatively executing queries in an Apollo application, e.g. in response to user interaction.
 *
 * > Refer to the [Queries - Manual execution with useLazyQuery](https://www.apollographql.com/docs/react/data/queries#manual-execution-with-uselazyquery) section for a more in-depth overview of `useLazyQuery`.
 *
 * @example
 * ```jsx
 * import { gql, useLazyQuery } from "@apollo/client";
 *
 * const GET_GREETING = gql`
 *   query GetGreeting($language: String!) {
 *     greeting(language: $language) {
 *       message
 *     }
 *   }
 * `;
 *
 * function Hello() {
 *   const [loadGreeting, { called, loading, data }] = useLazyQuery(
 *     GET_GREETING,
 *     { variables: { language: "english" } }
 *   );
 *   if (called && loading) return <p>Loading ...</p>
 *   if (!called) {
 *     return <button onClick={() => loadGreeting()}>Load greeting</button>
 *   }
 *   return <h1>Hello {data.greeting.message}!</h1>;
 * }
 * ```
 * @since 3.0.0
 *
 * @param query - A GraphQL query document parsed into an AST by `gql`.
 * @param options - Default options to control how the query is executed.
 * @returns A tuple in the form of `[execute, result]`
 */
function useLazyQuery(query, options) {
    var _a;
    var execOptionsRef = rehackt.useRef(void 0);
    var optionsRef = rehackt.useRef(void 0);
    var queryRef = rehackt.useRef(void 0);
    var merged = (0,mergeOptions/* mergeOptions */.l)(options, execOptionsRef.current || {});
    var document = (_a = merged === null || merged === void 0 ? void 0 : merged.query) !== null && _a !== void 0 ? _a : query;
    // Use refs to track options and the used query to ensure the `execute`
    // function remains referentially stable between renders.
    optionsRef.current = options;
    queryRef.current = document;
    var queryHookOptions = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, merged), { skip: !execOptionsRef.current });
    var _b = useQueryInternals(document, queryHookOptions), obsQueryFields = _b.obsQueryFields, useQueryResult = _b.result, client = _b.client, resultData = _b.resultData, observable = _b.observable, onQueryExecuted = _b.onQueryExecuted;
    var initialFetchPolicy = observable.options.initialFetchPolicy ||
        getDefaultFetchPolicy(queryHookOptions.defaultOptions, client.defaultOptions);
    var forceUpdateState = rehackt.useReducer(function (tick) { return tick + 1; }, 0)[1];
    // We use useMemo here to make sure the eager methods have a stable identity.
    var eagerMethods = rehackt.useMemo(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = obsQueryFields[key];
            eagerMethods[key] = function () {
                if (!execOptionsRef.current) {
                    execOptionsRef.current = Object.create(null);
                    // Only the first time populating execOptionsRef.current matters here.
                    forceUpdateState();
                }
                // @ts-expect-error this is just too generic to type
                return method.apply(this, arguments);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
        return eagerMethods;
    }, [forceUpdateState, obsQueryFields]);
    var called = !!execOptionsRef.current;
    var result = rehackt.useMemo(function () { return ((0,tslib_es6.__assign)((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, useQueryResult), eagerMethods), { called: called })); }, [useQueryResult, eagerMethods, called]);
    var execute = rehackt.useCallback(function (executeOptions) {
        execOptionsRef.current =
            executeOptions ? (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
                fetchPolicy: initialFetchPolicy,
            };
        var options = (0,mergeOptions/* mergeOptions */.l)(optionsRef.current, (0,tslib_es6.__assign)({ query: queryRef.current }, execOptionsRef.current));
        var promise = executeQuery(resultData, observable, client, document, (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { skip: false }), onQueryExecuted).then(function (queryResult) { return Object.assign(queryResult, eagerMethods); });
        // Because the return value of `useLazyQuery` is usually floated, we need
        // to catch the promise to prevent unhandled rejections.
        promise.catch(function () { });
        return promise;
    }, [
        client,
        document,
        eagerMethods,
        initialFetchPolicy,
        observable,
        resultData,
        onQueryExecuted,
    ]);
    var executeRef = rehackt.useRef(execute);
    useIsomorphicLayoutEffect(function () {
        executeRef.current = execute;
    });
    var stableExecute = rehackt.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return executeRef.current.apply(executeRef, args);
    }, []);
    return [stableExecute, result];
}
function executeQuery(resultData, observable, client, currentQuery, options, onQueryExecuted) {
    var query = options.query || currentQuery;
    var watchQueryOptions = createMakeWatchQueryOptions(client, query, options, false)(observable);
    var concast = observable.reobserveAsConcast(getObsQueryOptions(observable, client, options, watchQueryOptions));
    onQueryExecuted(watchQueryOptions);
    return new Promise(function (resolve) {
        var result;
        // Subscribe to the concast independently of the ObservableQuery in case
        // the component gets unmounted before the promise resolves. This prevents
        // the concast from terminating early and resolving with `undefined` when
        // there are no more subscribers for the concast.
        concast.subscribe({
            next: function (value) {
                result = value;
            },
            error: function () {
                resolve(toQueryResult(observable.getCurrentResult(), resultData.previousData, observable, client));
            },
            complete: function () {
                resolve(toQueryResult(observable["maskResult"](result), resultData.previousData, observable, client));
            },
        });
    });
}
//# sourceMappingURL=useLazyQuery.js.map
;// ./node_modules/@apollo/client/react/hooks/useMutation.js








/**
 *
 *
 * > Refer to the [Mutations](https://www.apollographql.com/docs/react/data/mutations/) section for a more in-depth overview of `useMutation`.
 *
 * @example
 * ```jsx
 * import { gql, useMutation } from '@apollo/client';
 *
 * const ADD_TODO = gql`
 *   mutation AddTodo($type: String!) {
 *     addTodo(type: $type) {
 *       id
 *       type
 *     }
 *   }
 * `;
 *
 * function AddTodo() {
 *   let input;
 *   const [addTodo, { data }] = useMutation(ADD_TODO);
 *
 *   return (
 *     <div>
 *       <form
 *         onSubmit={e => {
 *           e.preventDefault();
 *           addTodo({ variables: { type: input.value } });
 *           input.value = '';
 *         }}
 *       >
 *         <input
 *           ref={node => {
 *             input = node;
 *           }}
 *         />
 *         <button type="submit">Add Todo</button>
 *       </form>
 *     </div>
 *   );
 * }
 * ```
 * @since 3.0.0
 * @param mutation - A GraphQL mutation document parsed into an AST by `gql`.
 * @param options - Options to control how the mutation is executed.
 * @returns A tuple in the form of `[mutate, result]`
 */
function useMutation(mutation, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    verifyDocumentType(mutation, DocumentType.Mutation);
    var _a = rehackt.useState({
        called: false,
        loading: false,
        client: client,
    }), result = _a[0], setResult = _a[1];
    var ref = rehackt.useRef({
        result: result,
        mutationId: 0,
        isMounted: true,
        client: client,
        mutation: mutation,
        options: options,
    });
    useIsomorphicLayoutEffect(function () {
        Object.assign(ref.current, { client: client, options: options, mutation: mutation });
    });
    var execute = rehackt.useCallback(function (executeOptions) {
        if (executeOptions === void 0) { executeOptions = {}; }
        var _a = ref.current, options = _a.options, mutation = _a.mutation;
        var baseOptions = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { mutation: mutation });
        var client = executeOptions.client || ref.current.client;
        if (!ref.current.result.loading &&
            !baseOptions.ignoreResults &&
            ref.current.isMounted) {
            setResult((ref.current.result = {
                loading: true,
                error: void 0,
                data: void 0,
                called: true,
                client: client,
            }));
        }
        var mutationId = ++ref.current.mutationId;
        var clientOptions = (0,mergeOptions/* mergeOptions */.l)(baseOptions, executeOptions);
        return client
            .mutate(clientOptions)
            .then(function (response) {
            var _a, _b;
            var data = response.data, errors = response.errors;
            var error = errors && errors.length > 0 ?
                new client_errors/* ApolloError */.K4({ graphQLErrors: errors })
                : void 0;
            var onError = executeOptions.onError || ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError);
            if (error && onError) {
                onError(error, clientOptions);
            }
            if (mutationId === ref.current.mutationId &&
                !clientOptions.ignoreResults) {
                var result_1 = {
                    called: true,
                    loading: false,
                    data: data,
                    error: error,
                    client: client,
                };
                if (ref.current.isMounted && !(0,lib/* equal */.L)(ref.current.result, result_1)) {
                    setResult((ref.current.result = result_1));
                }
            }
            var onCompleted = executeOptions.onCompleted || ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onCompleted);
            if (!error) {
                onCompleted === null || onCompleted === void 0 ? void 0 : onCompleted(response.data, clientOptions);
            }
            return response;
        }, function (error) {
            var _a;
            if (mutationId === ref.current.mutationId &&
                ref.current.isMounted) {
                var result_2 = {
                    loading: false,
                    error: error,
                    data: void 0,
                    called: true,
                    client: client,
                };
                if (!(0,lib/* equal */.L)(ref.current.result, result_2)) {
                    setResult((ref.current.result = result_2));
                }
            }
            var onError = executeOptions.onError || ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError);
            if (onError) {
                onError(error, clientOptions);
                // TODO(brian): why are we returning this here???
                return { data: void 0, errors: error };
            }
            throw error;
        });
    }, []);
    var reset = rehackt.useCallback(function () {
        if (ref.current.isMounted) {
            var result_3 = {
                called: false,
                loading: false,
                client: ref.current.client,
            };
            Object.assign(ref.current, { mutationId: 0, result: result_3 });
            setResult(result_3);
        }
    }, []);
    rehackt.useEffect(function () {
        var current = ref.current;
        // eslint-disable-next-line react-compiler/react-compiler
        current.isMounted = true;
        return function () {
            current.isMounted = false;
        };
    }, []);
    return [execute, (0,tslib_es6.__assign)({ reset: reset }, result)];
}
//# sourceMappingURL=useMutation.js.map
// EXTERNAL MODULE: ./node_modules/zen-observable-ts/module.js
var zen_observable_ts_module = __webpack_require__(73401);
;// ./node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js


function useDeepMemo(memoFn, deps) {
    var ref = rehackt.useRef(void 0);
    if (!ref.current || !(0,lib/* equal */.L)(ref.current.deps, deps)) {
        // eslint-disable-next-line react-compiler/react-compiler
        ref.current = { value: memoFn(), deps: deps };
    }
    return ref.current.value;
}
//# sourceMappingURL=useDeepMemo.js.map
;// ./node_modules/@apollo/client/react/hooks/useSubscription.js











/**
 * > Refer to the [Subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/) section for a more in-depth overview of `useSubscription`.
 *
 * @example
 * ```jsx
 * const COMMENTS_SUBSCRIPTION = gql`
 *   subscription OnCommentAdded($repoFullName: String!) {
 *     commentAdded(repoFullName: $repoFullName) {
 *       id
 *       content
 *     }
 *   }
 * `;
 *
 * function DontReadTheComments({ repoFullName }) {
 *   const {
 *     data: { commentAdded },
 *     loading,
 *   } = useSubscription(COMMENTS_SUBSCRIPTION, { variables: { repoFullName } });
 *   return <h4>New comment: {!loading && commentAdded.content}</h4>;
 * }
 * ```
 * @remarks
 * #### Consider using `onData` instead of `useEffect`
 *
 * If you want to react to incoming data, please use the `onData` option instead of `useEffect`.
 * State updates you make inside a `useEffect` hook might cause additional rerenders, and `useEffect` is mostly meant for side effects of rendering, not as an event handler.
 * State updates made in an event handler like `onData` might - depending on the React version - be batched and cause only a single rerender.
 *
 * Consider the following component:
 *
 * ```jsx
 * export function Subscriptions() {
 *   const { data, error, loading } = useSubscription(query);
 *   const [accumulatedData, setAccumulatedData] = useState([]);
 *
 *   useEffect(() => {
 *     setAccumulatedData((prev) => [...prev, data]);
 *   }, [data]);
 *
 *   return (
 *     <>
 *       {loading && <p>Loading...</p>}
 *       {JSON.stringify(accumulatedData, undefined, 2)}
 *     </>
 *   );
 * }
 * ```
 *
 * Instead of using `useEffect` here, we can re-write this component to use the `onData` callback function accepted in `useSubscription`'s `options` object:
 *
 * ```jsx
 * export function Subscriptions() {
 *   const [accumulatedData, setAccumulatedData] = useState([]);
 *   const { data, error, loading } = useSubscription(
 *     query,
 *     {
 *       onData({ data }) {
 *         setAccumulatedData((prev) => [...prev, data])
 *       }
 *     }
 *   );
 *
 *   return (
 *     <>
 *       {loading && <p>Loading...</p>}
 *       {JSON.stringify(accumulatedData, undefined, 2)}
 *     </>
 *   );
 * }
 * ```
 *
 * > â ï¸ **Note:** The `useSubscription` option `onData` is available in Apollo Client >= 3.7. In previous versions, the equivalent option is named `onSubscriptionData`.
 *
 * Now, the first message will be added to the `accumulatedData` array since `onData` is called _before_ the component re-renders. React 18 automatic batching is still in effect and results in a single re-render, but with `onData` we can guarantee each message received after the component mounts is added to `accumulatedData`.
 *
 * @since 3.0.0
 * @param subscription - A GraphQL subscription document parsed into an AST by `gql`.
 * @param options - Options to control how the subscription is executed.
 * @returns Query result object
 */
function useSubscription(subscription, options) {
    if (options === void 0) { options = Object.create(null); }
    var hasIssuedDeprecationWarningRef = rehackt.useRef(false);
    var client = useApolloClient(options.client);
    verifyDocumentType(subscription, DocumentType.Subscription);
    if (!hasIssuedDeprecationWarningRef.current) {
        // eslint-disable-next-line react-compiler/react-compiler
        hasIssuedDeprecationWarningRef.current = true;
        if (options.onSubscriptionData) {
            globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(options.onData ? 61 : 62);
        }
        if (options.onSubscriptionComplete) {
            globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(options.onComplete ? 63 : 64);
        }
    }
    var skip = options.skip, fetchPolicy = options.fetchPolicy, errorPolicy = options.errorPolicy, shouldResubscribe = options.shouldResubscribe, context = options.context, extensions = options.extensions, ignoreResults = options.ignoreResults;
    var variables = useDeepMemo(function () { return options.variables; }, [options.variables]);
    var recreate = function () {
        return createSubscription(client, subscription, variables, fetchPolicy, errorPolicy, context, extensions);
    };
    var _a = rehackt.useState(options.skip ? null : recreate), observable = _a[0], setObservable = _a[1];
    var recreateRef = rehackt.useRef(recreate);
    useIsomorphicLayoutEffect(function () {
        recreateRef.current = recreate;
    });
    if (skip) {
        if (observable) {
            setObservable((observable = null));
        }
    }
    else if (!observable ||
        ((client !== observable.__.client ||
            subscription !== observable.__.query ||
            fetchPolicy !== observable.__.fetchPolicy ||
            errorPolicy !== observable.__.errorPolicy ||
            !(0,lib/* equal */.L)(variables, observable.__.variables)) &&
            (typeof shouldResubscribe === "function" ?
                !!shouldResubscribe(options)
                : shouldResubscribe) !== false)) {
        setObservable((observable = recreate()));
    }
    var optionsRef = rehackt.useRef(options);
    rehackt.useEffect(function () {
        optionsRef.current = options;
    });
    var fallbackLoading = !skip && !ignoreResults;
    var fallbackResult = rehackt.useMemo(function () { return ({
        loading: fallbackLoading,
        error: void 0,
        data: void 0,
        variables: variables,
    }); }, [fallbackLoading, variables]);
    var ignoreResultsRef = rehackt.useRef(ignoreResults);
    useIsomorphicLayoutEffect(function () {
        // We cannot reference `ignoreResults` directly in the effect below
        // it would add a dependency to the `useEffect` deps array, which means the
        // subscription would be recreated if `ignoreResults` changes
        // As a result, on resubscription, the last result would be re-delivered,
        // rendering the component one additional time, and re-triggering `onData`.
        // The same applies to `fetchPolicy`, which results in a new `observable`
        // being created. We cannot really avoid it in that case, but we can at least
        // avoid it for `ignoreResults`.
        ignoreResultsRef.current = ignoreResults;
    });
    var ret = useSyncExternalStore(rehackt.useCallback(function (update) {
        if (!observable) {
            return function () { };
        }
        var subscriptionStopped = false;
        var variables = observable.__.variables;
        var client = observable.__.client;
        var subscription = observable.subscribe({
            next: function (fetchResult) {
                var _a, _b;
                if (subscriptionStopped) {
                    return;
                }
                var result = {
                    loading: false,
                    // TODO: fetchResult.data can be null but SubscriptionResult.data
                    // expects TData | undefined only
                    data: fetchResult.data,
                    error: toApolloError(fetchResult),
                    variables: variables,
                };
                observable.__.setResult(result);
                if (!ignoreResultsRef.current)
                    update();
                if (result.error) {
                    (_b = (_a = optionsRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, result.error);
                }
                else if (optionsRef.current.onData) {
                    optionsRef.current.onData({
                        client: client,
                        data: result,
                    });
                }
                else if (optionsRef.current.onSubscriptionData) {
                    optionsRef.current.onSubscriptionData({
                        client: client,
                        subscriptionData: result,
                    });
                }
            },
            error: function (error) {
                var _a, _b;
                error =
                    error instanceof client_errors/* ApolloError */.K4 ? error : (new client_errors/* ApolloError */.K4({ protocolErrors: [error] }));
                if (!subscriptionStopped) {
                    observable.__.setResult({
                        loading: false,
                        data: void 0,
                        error: error,
                        variables: variables,
                    });
                    if (!ignoreResultsRef.current)
                        update();
                    (_b = (_a = optionsRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, error);
                }
            },
            complete: function () {
                if (!subscriptionStopped) {
                    if (optionsRef.current.onComplete) {
                        optionsRef.current.onComplete();
                    }
                    else if (optionsRef.current.onSubscriptionComplete) {
                        optionsRef.current.onSubscriptionComplete();
                    }
                }
            },
        });
        return function () {
            // immediately stop receiving subscription values, but do not unsubscribe
            // until after a short delay in case another useSubscription hook is
            // reusing the same underlying observable and is about to subscribe
            subscriptionStopped = true;
            setTimeout(function () {
                subscription.unsubscribe();
            });
        };
    }, [observable]), function () {
        return observable && !skip && !ignoreResults ?
            observable.__.result
            : fallbackResult;
    }, function () { return fallbackResult; });
    var restart = rehackt.useCallback(function () {
        (0,globals/* invariant */.V1)(!optionsRef.current.skip, 65);
        setObservable(recreateRef.current());
    }, [optionsRef, recreateRef]);
    return rehackt.useMemo(function () { return ((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, ret), { restart: restart })); }, [ret, restart]);
}
function createSubscription(client, query, variables, fetchPolicy, errorPolicy, context, extensions) {
    var options = {
        query: query,
        variables: variables,
        fetchPolicy: fetchPolicy,
        errorPolicy: errorPolicy,
        context: context,
        extensions: extensions,
    };
    var __ = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { client: client, result: {
            loading: true,
            data: void 0,
            error: void 0,
            variables: variables,
        }, setResult: function (result) {
            __.result = result;
        } });
    var observable = null;
    return Object.assign(new zen_observable_ts_module/* Observable */.c(function (observer) {
        // lazily start the subscription when the first observer subscribes
        // to get around strict mode
        if (!observable) {
            observable = client.subscribe(options);
        }
        var sub = observable.subscribe(observer);
        return function () { return sub.unsubscribe(); };
    }), {
        /**
         * A tracking object to store details about the observable and the latest result of the subscription.
         */
        __: __,
    });
}
//# sourceMappingURL=useSubscription.js.map
;// ./node_modules/@apollo/client/react/hooks/useReactiveVar.js


/**
 * Reads the value of a [reactive variable](https://www.apollographql.com/docs/react/local-state/reactive-variables/) and re-renders the containing component whenever that variable's value changes. This enables a reactive variable to trigger changes _without_ relying on the `useQuery` hook.
 *
 * @example
 * ```jsx
 * import { makeVar, useReactiveVar } from "@apollo/client";
 * export const cartItemsVar = makeVar([]);
 *
 * export function Cart() {
 *   const cartItems = useReactiveVar(cartItemsVar);
 *   // ...
 * }
 * ```
 * @since 3.2.0
 * @param rv - A reactive variable.
 * @returns The current value of the reactive variable.
 */
function useReactiveVar(rv) {
    return useSyncExternalStore(rehackt.useCallback(function (update) {
        // By reusing the same onNext function in the nested call to
        // rv.onNextChange(onNext), we can keep using the initial clean-up function
        // returned by rv.onNextChange(function onNext(v){...}), without having to
        // register the new clean-up function (returned by the nested
        // rv.onNextChange(onNext)) with yet another callback.
        return rv.onNextChange(function onNext() {
            update();
            rv.onNextChange(onNext);
        });
    }, [rv]), rv, rv);
}
//# sourceMappingURL=useReactiveVar.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/mergeDeep.js
var mergeDeep = __webpack_require__(92922);
;// ./node_modules/@apollo/client/react/hooks/useFragment.js







function useFragment(options) {
    return wrapHook("useFragment", 
    // eslint-disable-next-line react-compiler/react-compiler
    useFragment_, useApolloClient(options.client))(options);
}
function useFragment_(options) {
    var client = useApolloClient(options.client);
    var cache = client.cache;
    var from = options.from, rest = (0,tslib_es6.__rest)(options, ["from"]);
    // We calculate the cache id seperately from `stableOptions` because we don't
    // want changes to non key fields in the `from` property to affect
    // `stableOptions` and retrigger our subscription. If the cache identifier
    // stays the same between renders, we want to reuse the existing subscription.
    var id = rehackt.useMemo(function () {
        return typeof from === "string" ? from
            : from === null ? null
                : cache.identify(from);
    }, [cache, from]);
    var stableOptions = useDeepMemo(function () { return ((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, rest), { from: id })); }, [rest, id]);
    // Since .next is async, we need to make sure that we
    // get the correct diff on the next render given new diffOptions
    var diff = rehackt.useMemo(function () {
        var fragment = stableOptions.fragment, fragmentName = stableOptions.fragmentName, from = stableOptions.from, _a = stableOptions.optimistic, optimistic = _a === void 0 ? true : _a;
        if (from === null) {
            return {
                result: diffToResult({
                    result: {},
                    complete: false,
                }),
            };
        }
        var cache = client.cache;
        var diff = cache.diff((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, stableOptions), { returnPartialData: true, id: from, query: cache["getFragmentDoc"](fragment, fragmentName), optimistic: optimistic }));
        return {
            result: diffToResult((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, diff), { result: client["queryManager"].maskFragment({
                    fragment: fragment,
                    fragmentName: fragmentName,
                    data: diff.result,
                }) })),
        };
    }, [client, stableOptions]);
    // Used for both getSnapshot and getServerSnapshot
    var getSnapshot = rehackt.useCallback(function () { return diff.result; }, [diff]);
    return useSyncExternalStore(rehackt.useCallback(function (forceUpdate) {
        var lastTimeout = 0;
        var subscription = stableOptions.from === null ?
            null
            : client.watchFragment(stableOptions).subscribe({
                next: function (result) {
                    // Since `next` is called async by zen-observable, we want to avoid
                    // unnecessarily rerendering this hook for the initial result
                    // emitted from watchFragment which should be equal to
                    // `diff.result`.
                    if ((0,lib/* default */.A)(result, diff.result))
                        return;
                    diff.result = result;
                    // If we get another update before we've re-rendered, bail out of
                    // the update and try again. This ensures that the relative timing
                    // between useQuery and useFragment stays roughly the same as
                    // fixed in https://github.com/apollographql/apollo-client/pull/11083
                    clearTimeout(lastTimeout);
                    lastTimeout = setTimeout(forceUpdate);
                },
            });
        return function () {
            subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
            clearTimeout(lastTimeout);
        };
    }, [client, stableOptions, diff]), getSnapshot, getSnapshot);
}
function diffToResult(diff) {
    var result = {
        data: diff.result,
        complete: !!diff.complete,
    };
    if (diff.missing) {
        result.missing = (0,mergeDeep/* mergeDeepArray */.IM)(diff.missing.map(function (error) { return error.missing; }));
    }
    return result;
}
//# sourceMappingURL=useFragment.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/promises/decoration.js
var decoration = __webpack_require__(36697);
;// ./node_modules/@apollo/client/react/hooks/internal/__use.js


// Prevent webpack from complaining about our feature detection of the
// use property of the React namespace, which is expected not
// to exist when using current stable versions, and that's fine.
var useKey = "use";
var _use_realHook = rehackt_namespaceObject[useKey];
// This is named with two underscores to allow this hook to evade typical rules of
// hooks (i.e. it can be used conditionally)
var __use = _use_realHook ||
    function __use(promise) {
        var statefulPromise = (0,decoration/* wrapPromiseWithState */.zq)(promise);
        switch (statefulPromise.status) {
            case "pending":
                throw statefulPromise;
            case "rejected":
                throw statefulPromise.reason;
            case "fulfilled":
                return statefulPromise.value;
        }
    };
//# sourceMappingURL=__use.js.map
// EXTERNAL MODULE: ./node_modules/@wry/trie/lib/index.js
var trie_lib = __webpack_require__(54834);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/globals/invariantWrappers.js
var invariantWrappers = __webpack_require__(67235);
;// ./node_modules/@apollo/client/react/internal/cache/QueryReference.js





var QUERY_REFERENCE_SYMBOL = Symbol.for("apollo.internal.queryRef");
var PROMISE_SYMBOL = Symbol.for("apollo.internal.refPromise");
function wrapQueryRef(internalQueryRef) {
    var _a;
    var ref = (_a = {
            toPromise: function () {
                // We avoid resolving this promise with the query data because we want to
                // discourage using the server data directly from the queryRef. Instead,
                // the data should be accessed through `useReadQuery`. When the server
                // data is needed, its better to use `client.query()` directly.
                //
                // Here we resolve with the ref itself to make using this in React Router
                // or TanStack Router `loader` functions a bit more ergonomic e.g.
                //
                // function loader() {
                //   return { queryRef: await preloadQuery(query).toPromise() }
                // }
                return getWrappedPromise(ref).then(function () { return ref; });
            }
        },
        _a[QUERY_REFERENCE_SYMBOL] = internalQueryRef,
        _a[PROMISE_SYMBOL] = internalQueryRef.promise,
        _a);
    return ref;
}
function assertWrappedQueryRef(queryRef) {
    (0,invariantWrappers/* invariant */.V1)(!queryRef || QUERY_REFERENCE_SYMBOL in queryRef, 69);
}
function getWrappedPromise(queryRef) {
    var internalQueryRef = unwrapQueryRef(queryRef);
    return internalQueryRef.promise.status === "fulfilled" ?
        internalQueryRef.promise
        : queryRef[PROMISE_SYMBOL];
}
function unwrapQueryRef(queryRef) {
    return queryRef[QUERY_REFERENCE_SYMBOL];
}
function updateWrappedQueryRef(queryRef, promise) {
    queryRef[PROMISE_SYMBOL] = promise;
}
var OBSERVED_CHANGED_OPTIONS = [
    "canonizeResults",
    "context",
    "errorPolicy",
    "fetchPolicy",
    "refetchWritePolicy",
    "returnPartialData",
];
var InternalQueryReference = /** @class */ (function () {
    function InternalQueryReference(observable, options) {
        var _this = this;
        this.key = {};
        this.listeners = new Set();
        this.references = 0;
        this.softReferences = 0;
        this.handleNext = this.handleNext.bind(this);
        this.handleError = this.handleError.bind(this);
        this.dispose = this.dispose.bind(this);
        this.observable = observable;
        if (options.onDispose) {
            this.onDispose = options.onDispose;
        }
        this.setResult();
        this.subscribeToQuery();
        // Start a timer that will automatically dispose of the query if the
        // suspended resource does not use this queryRef in the given time. This
        // helps prevent memory leaks when a component has unmounted before the
        // query has finished loading.
        var startDisposeTimer = function () {
            var _a;
            if (!_this.references) {
                _this.autoDisposeTimeoutId = setTimeout(_this.dispose, (_a = options.autoDisposeTimeoutMs) !== null && _a !== void 0 ? _a : 30000);
            }
        };
        // We wait until the request has settled to ensure we don't dispose of the
        // query ref before the request finishes, otherwise we would leave the
        // promise in a pending state rendering the suspense boundary indefinitely.
        this.promise.then(startDisposeTimer, startDisposeTimer);
    }
    Object.defineProperty(InternalQueryReference.prototype, "disposed", {
        get: function () {
            return this.subscription.closed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InternalQueryReference.prototype, "watchQueryOptions", {
        get: function () {
            return this.observable.options;
        },
        enumerable: false,
        configurable: true
    });
    InternalQueryReference.prototype.reinitialize = function () {
        var observable = this.observable;
        var originalFetchPolicy = this.watchQueryOptions.fetchPolicy;
        var avoidNetworkRequests = originalFetchPolicy === "no-cache" || originalFetchPolicy === "standby";
        try {
            if (avoidNetworkRequests) {
                observable.silentSetOptions({ fetchPolicy: "standby" });
            }
            else {
                observable.resetLastResults();
                observable.silentSetOptions({ fetchPolicy: "cache-first" });
            }
            this.subscribeToQuery();
            if (avoidNetworkRequests) {
                return;
            }
            observable.resetDiff();
            this.setResult();
        }
        finally {
            observable.silentSetOptions({ fetchPolicy: originalFetchPolicy });
        }
    };
    InternalQueryReference.prototype.retain = function () {
        var _this = this;
        this.references++;
        clearTimeout(this.autoDisposeTimeoutId);
        var disposed = false;
        return function () {
            if (disposed) {
                return;
            }
            disposed = true;
            _this.references--;
            setTimeout(function () {
                if (!_this.references) {
                    _this.dispose();
                }
            });
        };
    };
    InternalQueryReference.prototype.softRetain = function () {
        var _this = this;
        this.softReferences++;
        var disposed = false;
        return function () {
            // Tracking if this has already been called helps ensure that
            // multiple calls to this function won't decrement the reference
            // counter more than it should. Subsequent calls just result in a noop.
            if (disposed) {
                return;
            }
            disposed = true;
            _this.softReferences--;
            setTimeout(function () {
                if (!_this.softReferences && !_this.references) {
                    _this.dispose();
                }
            });
        };
    };
    InternalQueryReference.prototype.didChangeOptions = function (watchQueryOptions) {
        var _this = this;
        return OBSERVED_CHANGED_OPTIONS.some(function (option) {
            return option in watchQueryOptions &&
                !(0,lib/* equal */.L)(_this.watchQueryOptions[option], watchQueryOptions[option]);
        });
    };
    InternalQueryReference.prototype.applyOptions = function (watchQueryOptions) {
        var _a = this.watchQueryOptions, currentFetchPolicy = _a.fetchPolicy, currentCanonizeResults = _a.canonizeResults;
        // "standby" is used when `skip` is set to `true`. Detect when we've
        // enabled the query (i.e. `skip` is `false`) to execute a network request.
        if (currentFetchPolicy === "standby" &&
            currentFetchPolicy !== watchQueryOptions.fetchPolicy) {
            this.initiateFetch(this.observable.reobserve(watchQueryOptions));
        }
        else {
            this.observable.silentSetOptions(watchQueryOptions);
            if (currentCanonizeResults !== watchQueryOptions.canonizeResults) {
                this.result = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, this.result), this.observable.getCurrentResult());
                this.promise = (0,decoration/* createFulfilledPromise */.$D)(this.result);
            }
        }
        return this.promise;
    };
    InternalQueryReference.prototype.listen = function (listener) {
        var _this = this;
        this.listeners.add(listener);
        return function () {
            _this.listeners.delete(listener);
        };
    };
    InternalQueryReference.prototype.refetch = function (variables) {
        return this.initiateFetch(this.observable.refetch(variables));
    };
    InternalQueryReference.prototype.fetchMore = function (options) {
        return this.initiateFetch(this.observable.fetchMore(options));
    };
    InternalQueryReference.prototype.dispose = function () {
        this.subscription.unsubscribe();
        this.onDispose();
    };
    InternalQueryReference.prototype.onDispose = function () {
        // noop. overridable by options
    };
    InternalQueryReference.prototype.handleNext = function (result) {
        var _a;
        switch (this.promise.status) {
            case "pending": {
                // Maintain the last successful `data` value if the next result does not
                // have one.
                if (result.data === void 0) {
                    result.data = this.result.data;
                }
                this.result = result;
                (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, result);
                break;
            }
            default: {
                // This occurs when switching to a result that is fully cached when this
                // class is instantiated. ObservableQuery will run reobserve when
                // subscribing, which delivers a result from the cache.
                if (result.data === this.result.data &&
                    result.networkStatus === this.result.networkStatus) {
                    return;
                }
                // Maintain the last successful `data` value if the next result does not
                // have one.
                if (result.data === void 0) {
                    result.data = this.result.data;
                }
                this.result = result;
                this.promise = (0,decoration/* createFulfilledPromise */.$D)(result);
                this.deliver(this.promise);
                break;
            }
        }
    };
    InternalQueryReference.prototype.handleError = function (error) {
        var _a;
        this.subscription.unsubscribe();
        this.subscription = this.observable.resubscribeAfterError(this.handleNext, this.handleError);
        switch (this.promise.status) {
            case "pending": {
                (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, error);
                break;
            }
            default: {
                this.promise = (0,decoration/* createRejectedPromise */.Il)(error);
                this.deliver(this.promise);
            }
        }
    };
    InternalQueryReference.prototype.deliver = function (promise) {
        this.listeners.forEach(function (listener) { return listener(promise); });
    };
    InternalQueryReference.prototype.initiateFetch = function (returnedPromise) {
        var _this = this;
        this.promise = this.createPendingPromise();
        this.promise.catch(function () { });
        // If the data returned from the fetch is deeply equal to the data already
        // in the cache, `handleNext` will not be triggered leaving the promise we
        // created in a pending state forever. To avoid this situtation, we attempt
        // to resolve the promise if `handleNext` hasn't been run to ensure the
        // promise is resolved correctly.
        returnedPromise
            .then(function () {
            // In the case of `fetchMore`, this promise is resolved before a cache
            // result is emitted due to the fact that `fetchMore` sets a `no-cache`
            // fetch policy and runs `cache.batch` in its `.then` handler. Because
            // the timing is different, we accidentally run this update twice
            // causing an additional re-render with the `fetchMore` result by
            // itself. By wrapping in `setTimeout`, this should provide a short
            // delay to allow the `QueryInfo.notify` handler to run before this
            // promise is checked.
            // See https://github.com/apollographql/apollo-client/issues/11315 for
            // more information
            setTimeout(function () {
                var _a;
                if (_this.promise.status === "pending") {
                    // Use the current result from the observable instead of the value
                    // resolved from the promise. This avoids issues in some cases where
                    // the raw resolved value should not be the emitted value, such as
                    // when a `fetchMore` call returns an empty array after it has
                    // reached the end of the list.
                    //
                    // See the following for more information:
                    // https://github.com/apollographql/apollo-client/issues/11642
                    _this.result = _this.observable.getCurrentResult();
                    (_a = _this.resolve) === null || _a === void 0 ? void 0 : _a.call(_this, _this.result);
                }
            });
        })
            .catch(function (error) { var _a; return (_a = _this.reject) === null || _a === void 0 ? void 0 : _a.call(_this, error); });
        return returnedPromise;
    };
    InternalQueryReference.prototype.subscribeToQuery = function () {
        var _this = this;
        this.subscription = this.observable
            .filter(function (result) { return !(0,lib/* equal */.L)(result.data, {}) && !(0,lib/* equal */.L)(result, _this.result); })
            .subscribe(this.handleNext, this.handleError);
    };
    InternalQueryReference.prototype.setResult = function () {
        // Don't save this result as last result to prevent delivery of last result
        // when first subscribing
        var result = this.observable.getCurrentResult(false);
        if ((0,lib/* equal */.L)(result, this.result)) {
            return;
        }
        this.result = result;
        this.promise =
            (result.data &&
                (!result.partial || this.watchQueryOptions.returnPartialData)) ?
                (0,decoration/* createFulfilledPromise */.$D)(result)
                : this.createPendingPromise();
    };
    InternalQueryReference.prototype.createPendingPromise = function () {
        var _this = this;
        return (0,decoration/* wrapPromiseWithState */.zq)(new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        }));
    };
    return InternalQueryReference;
}());

//# sourceMappingURL=QueryReference.js.map
;// ./node_modules/@apollo/client/react/internal/cache/FragmentReference.js



var FragmentReference = /** @class */ (function () {
    function FragmentReference(client, watchFragmentOptions, options) {
        var _this = this;
        this.key = {};
        this.listeners = new Set();
        this.references = 0;
        this.dispose = this.dispose.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleError = this.handleError.bind(this);
        this.observable = client.watchFragment(watchFragmentOptions);
        if (options.onDispose) {
            this.onDispose = options.onDispose;
        }
        var diff = this.getDiff(client, watchFragmentOptions);
        // Start a timer that will automatically dispose of the query if the
        // suspended resource does not use this fragmentRef in the given time. This
        // helps prevent memory leaks when a component has unmounted before the
        // query has finished loading.
        var startDisposeTimer = function () {
            var _a;
            if (!_this.references) {
                _this.autoDisposeTimeoutId = setTimeout(_this.dispose, (_a = options.autoDisposeTimeoutMs) !== null && _a !== void 0 ? _a : 30000);
            }
        };
        this.promise =
            diff.complete ?
                (0,decoration/* createFulfilledPromise */.$D)(diff.result)
                : this.createPendingPromise();
        this.subscribeToFragment();
        this.promise.then(startDisposeTimer, startDisposeTimer);
    }
    FragmentReference.prototype.listen = function (listener) {
        var _this = this;
        this.listeners.add(listener);
        return function () {
            _this.listeners.delete(listener);
        };
    };
    FragmentReference.prototype.retain = function () {
        var _this = this;
        this.references++;
        clearTimeout(this.autoDisposeTimeoutId);
        var disposed = false;
        return function () {
            if (disposed) {
                return;
            }
            disposed = true;
            _this.references--;
            setTimeout(function () {
                if (!_this.references) {
                    _this.dispose();
                }
            });
        };
    };
    FragmentReference.prototype.dispose = function () {
        this.subscription.unsubscribe();
        this.onDispose();
    };
    FragmentReference.prototype.onDispose = function () {
        // noop. overridable by options
    };
    FragmentReference.prototype.subscribeToFragment = function () {
        this.subscription = this.observable.subscribe(this.handleNext.bind(this), this.handleError.bind(this));
    };
    FragmentReference.prototype.handleNext = function (result) {
        var _a;
        switch (this.promise.status) {
            case "pending": {
                if (result.complete) {
                    return (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, result.data);
                }
                this.deliver(this.promise);
                break;
            }
            case "fulfilled": {
                // This can occur when we already have a result written to the cache and
                // we subscribe for the first time. We create a fulfilled promise in the
                // constructor with a value that is the same as the first emitted value
                // so we want to skip delivering it.
                if ((0,lib/* equal */.L)(this.promise.value, result.data)) {
                    return;
                }
                this.promise =
                    result.complete ?
                        (0,decoration/* createFulfilledPromise */.$D)(result.data)
                        : this.createPendingPromise();
                this.deliver(this.promise);
            }
        }
    };
    FragmentReference.prototype.handleError = function (error) {
        var _a;
        (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, error);
    };
    FragmentReference.prototype.deliver = function (promise) {
        this.listeners.forEach(function (listener) { return listener(promise); });
    };
    FragmentReference.prototype.createPendingPromise = function () {
        var _this = this;
        return (0,decoration/* wrapPromiseWithState */.zq)(new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        }));
    };
    FragmentReference.prototype.getDiff = function (client, options) {
        var cache = client.cache;
        var from = options.from, fragment = options.fragment, fragmentName = options.fragmentName;
        var diff = cache.diff((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { query: cache["getFragmentDoc"](fragment, fragmentName), returnPartialData: true, id: from, optimistic: true }));
        return (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, diff), { result: client["queryManager"].maskFragment({
                fragment: fragment,
                fragmentName: fragmentName,
                data: diff.result,
            }) });
    };
    return FragmentReference;
}());

//# sourceMappingURL=FragmentReference.js.map
;// ./node_modules/@apollo/client/react/internal/cache/SuspenseCache.js




var SuspenseCache = /** @class */ (function () {
    function SuspenseCache(options) {
        if (options === void 0) { options = Object.create(null); }
        this.queryRefs = new trie_lib/* Trie */.b(canUse/* canUseWeakMap */.et);
        this.fragmentRefs = new trie_lib/* Trie */.b(canUse/* canUseWeakMap */.et);
        this.options = options;
    }
    SuspenseCache.prototype.getQueryRef = function (cacheKey, createObservable) {
        var ref = this.queryRefs.lookupArray(cacheKey);
        if (!ref.current) {
            ref.current = new InternalQueryReference(createObservable(), {
                autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
                onDispose: function () {
                    delete ref.current;
                },
            });
        }
        return ref.current;
    };
    SuspenseCache.prototype.getFragmentRef = function (cacheKey, client, options) {
        var ref = this.fragmentRefs.lookupArray(cacheKey);
        if (!ref.current) {
            ref.current = new FragmentReference(client, options, {
                autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
                onDispose: function () {
                    delete ref.current;
                },
            });
        }
        return ref.current;
    };
    SuspenseCache.prototype.add = function (cacheKey, queryRef) {
        var ref = this.queryRefs.lookupArray(cacheKey);
        ref.current = queryRef;
    };
    return SuspenseCache;
}());

//# sourceMappingURL=SuspenseCache.js.map
;// ./node_modules/@apollo/client/react/internal/cache/getSuspenseCache.js

var suspenseCacheSymbol = Symbol.for("apollo.suspenseCache");
function getSuspenseCache(client) {
    var _a;
    if (!client[suspenseCacheSymbol]) {
        client[suspenseCacheSymbol] = new SuspenseCache((_a = client.defaultOptions.react) === null || _a === void 0 ? void 0 : _a.suspense);
    }
    return client[suspenseCacheSymbol];
}
//# sourceMappingURL=getSuspenseCache.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/canonicalStringify.js
var canonicalStringify = __webpack_require__(96269);
;// ./node_modules/@apollo/client/react/hooks/constants.js
var skipToken = Symbol.for("apollo.skipToken");
//# sourceMappingURL=constants.js.map
;// ./node_modules/@apollo/client/react/hooks/useSuspenseQuery.js











function useSuspenseQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return wrapHook("useSuspenseQuery", 
    // eslint-disable-next-line react-compiler/react-compiler
    useSuspenseQuery_, useApolloClient(typeof options === "object" ? options.client : undefined))(query, options);
}
function useSuspenseQuery_(query, options) {
    var client = useApolloClient(options.client);
    var suspenseCache = getSuspenseCache(client);
    var watchQueryOptions = useWatchQueryOptions({
        client: client,
        query: query,
        options: options,
    });
    var fetchPolicy = watchQueryOptions.fetchPolicy, variables = watchQueryOptions.variables;
    var _a = options.queryKey, queryKey = _a === void 0 ? [] : _a;
    var cacheKey = (0,tslib_es6.__spreadArray)([
        query,
        (0,canonicalStringify/* canonicalStringify */.M)(variables)
    ], [].concat(queryKey), true);
    var queryRef = suspenseCache.getQueryRef(cacheKey, function () {
        return client.watchQuery(watchQueryOptions);
    });
    var _b = rehackt.useState([queryRef.key, queryRef.promise]), current = _b[0], setPromise = _b[1];
    // This saves us a re-execution of the render function when a variable changed.
    if (current[0] !== queryRef.key) {
        // eslint-disable-next-line react-compiler/react-compiler
        current[0] = queryRef.key;
        current[1] = queryRef.promise;
    }
    var promise = current[1];
    if (queryRef.didChangeOptions(watchQueryOptions)) {
        current[1] = promise = queryRef.applyOptions(watchQueryOptions);
    }
    rehackt.useEffect(function () {
        var dispose = queryRef.retain();
        var removeListener = queryRef.listen(function (promise) {
            setPromise([queryRef.key, promise]);
        });
        return function () {
            removeListener();
            dispose();
        };
    }, [queryRef]);
    var skipResult = rehackt.useMemo(function () {
        var error = useSuspenseQuery_toApolloError(queryRef.result);
        return {
            loading: false,
            data: queryRef.result.data,
            networkStatus: error ? networkStatus/* NetworkStatus */.pT.error : networkStatus/* NetworkStatus */.pT.ready,
            error: error,
        };
    }, [queryRef.result]);
    var result = fetchPolicy === "standby" ? skipResult : __use(promise);
    var fetchMore = rehackt.useCallback(function (options) {
        var promise = queryRef.fetchMore(options);
        setPromise([queryRef.key, queryRef.promise]);
        return promise;
    }, [queryRef]);
    var refetch = rehackt.useCallback(function (variables) {
        var promise = queryRef.refetch(variables);
        setPromise([queryRef.key, queryRef.promise]);
        return promise;
    }, [queryRef]);
    // TODO: The internalQueryRef doesn't have TVariables' type information so we have to cast it here
    var subscribeToMore = queryRef.observable
        .subscribeToMore;
    return rehackt.useMemo(function () {
        return {
            client: client,
            data: result.data,
            error: useSuspenseQuery_toApolloError(result),
            networkStatus: result.networkStatus,
            fetchMore: fetchMore,
            refetch: refetch,
            subscribeToMore: subscribeToMore,
        };
    }, [client, fetchMore, refetch, result, subscribeToMore]);
}
function validateOptions(options) {
    var query = options.query, fetchPolicy = options.fetchPolicy, returnPartialData = options.returnPartialData;
    verifyDocumentType(query, DocumentType.Query);
    validateFetchPolicy(fetchPolicy);
    validatePartialDataReturn(fetchPolicy, returnPartialData);
}
function validateFetchPolicy(fetchPolicy) {
    if (fetchPolicy === void 0) { fetchPolicy = "cache-first"; }
    var supportedFetchPolicies = [
        "cache-first",
        "network-only",
        "no-cache",
        "cache-and-network",
    ];
    (0,globals/* invariant */.V1)(supportedFetchPolicies.includes(fetchPolicy), 66, fetchPolicy);
}
function validatePartialDataReturn(fetchPolicy, returnPartialData) {
    if (fetchPolicy === "no-cache" && returnPartialData) {
        globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(67);
    }
}
function useSuspenseQuery_toApolloError(result) {
    return (0,arrays/* isNonEmptyArray */.E)(result.errors) ?
        new client_errors/* ApolloError */.K4({ graphQLErrors: result.errors })
        : result.error;
}
function useWatchQueryOptions(_a) {
    var client = _a.client, query = _a.query, options = _a.options;
    return useDeepMemo(function () {
        var _a;
        if (options === skipToken) {
            return { query: query, fetchPolicy: "standby" };
        }
        var fetchPolicy = options.fetchPolicy ||
            ((_a = client.defaultOptions.watchQuery) === null || _a === void 0 ? void 0 : _a.fetchPolicy) ||
            "cache-first";
        var watchQueryOptions = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { fetchPolicy: fetchPolicy, query: query, notifyOnNetworkStatusChange: false, nextFetchPolicy: void 0 });
        if (globalThis.__DEV__ !== false) {
            validateOptions(watchQueryOptions);
        }
        // Assign the updated fetch policy after our validation since `standby` is
        // not a supported fetch policy on its own without the use of `skip`.
        if (options.skip) {
            watchQueryOptions.fetchPolicy = "standby";
        }
        return watchQueryOptions;
    }, [client, options, query]);
}
//# sourceMappingURL=useSuspenseQuery.js.map
;// ./node_modules/@apollo/client/react/hooks/useBackgroundQuery.js







function useBackgroundQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return wrapHook("useBackgroundQuery", 
    // eslint-disable-next-line react-compiler/react-compiler
    useBackgroundQuery_, useApolloClient(typeof options === "object" ? options.client : undefined))(query, options);
}
function useBackgroundQuery_(query, options) {
    var client = useApolloClient(options.client);
    var suspenseCache = getSuspenseCache(client);
    var watchQueryOptions = useWatchQueryOptions({ client: client, query: query, options: options });
    var fetchPolicy = watchQueryOptions.fetchPolicy, variables = watchQueryOptions.variables;
    var _a = options.queryKey, queryKey = _a === void 0 ? [] : _a;
    // This ref tracks the first time query execution is enabled to determine
    // whether to return a query ref or `undefined`. When initialized
    // in a skipped state (either via `skip: true` or `skipToken`) we return
    // `undefined` for the `queryRef` until the query has been enabled. Once
    // enabled, a query ref is always returned regardless of whether the query is
    // skipped again later.
    var didFetchResult = rehackt.useRef(fetchPolicy !== "standby");
    didFetchResult.current || (didFetchResult.current = fetchPolicy !== "standby");
    var cacheKey = (0,tslib_es6.__spreadArray)([
        query,
        (0,canonicalStringify/* canonicalStringify */.M)(variables)
    ], [].concat(queryKey), true);
    var queryRef = suspenseCache.getQueryRef(cacheKey, function () {
        return client.watchQuery(watchQueryOptions);
    });
    var _b = rehackt.useState(wrapQueryRef(queryRef)), wrappedQueryRef = _b[0], setWrappedQueryRef = _b[1];
    if (unwrapQueryRef(wrappedQueryRef) !== queryRef) {
        setWrappedQueryRef(wrapQueryRef(queryRef));
    }
    if (queryRef.didChangeOptions(watchQueryOptions)) {
        var promise = queryRef.applyOptions(watchQueryOptions);
        updateWrappedQueryRef(wrappedQueryRef, promise);
    }
    // This prevents issues where rerendering useBackgroundQuery after the
    // queryRef has been disposed would cause the hook to return a new queryRef
    // instance since disposal also removes it from the suspense cache. We add
    // the queryRef back in the suspense cache so that the next render will reuse
    // this queryRef rather than initializing a new instance.
    rehackt.useEffect(function () {
        // Since the queryRef is disposed async via `setTimeout`, we have to wait a
        // tick before checking it and adding back to the suspense cache.
        var id = setTimeout(function () {
            if (queryRef.disposed) {
                suspenseCache.add(cacheKey, queryRef);
            }
        });
        return function () { return clearTimeout(id); };
        // Omitting the deps is intentional. This avoids stale closures and the
        // conditional ensures we aren't running the logic on each render.
    });
    var fetchMore = rehackt.useCallback(function (options) {
        var promise = queryRef.fetchMore(options);
        setWrappedQueryRef(wrapQueryRef(queryRef));
        return promise;
    }, [queryRef]);
    var refetch = rehackt.useCallback(function (variables) {
        var promise = queryRef.refetch(variables);
        setWrappedQueryRef(wrapQueryRef(queryRef));
        return promise;
    }, [queryRef]);
    rehackt.useEffect(function () { return queryRef.softRetain(); }, [queryRef]);
    return [
        didFetchResult.current ? wrappedQueryRef : void 0,
        {
            fetchMore: fetchMore,
            refetch: refetch,
            // TODO: The internalQueryRef doesn't have TVariables' type information so we have to cast it here
            subscribeToMore: queryRef.observable
                .subscribeToMore,
        },
    ];
}
//# sourceMappingURL=useBackgroundQuery.js.map
;// ./node_modules/@apollo/client/react/hooks/useSuspenseFragment.js







var NULL_PLACEHOLDER = [];
function useSuspenseFragment(options) {
    return wrapHook("useSuspenseFragment", 
    // eslint-disable-next-line react-compiler/react-compiler
    useSuspenseFragment_, useApolloClient(typeof options === "object" ? options.client : undefined))(options);
}
function useSuspenseFragment_(options) {
    var client = useApolloClient(options.client);
    var from = options.from, variables = options.variables;
    var cache = client.cache;
    var id = rehackt.useMemo(function () {
        return typeof from === "string" ? from
            : from === null ? null
                : cache.identify(from);
    }, [cache, from]);
    var fragmentRef = id === null ? null : (getSuspenseCache(client).getFragmentRef([id, options.fragment, (0,canonicalStringify/* canonicalStringify */.M)(variables)], client, (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { variables: variables, from: id })));
    var _a = rehackt.useState(fragmentRef === null ? NULL_PLACEHOLDER : ([fragmentRef.key, fragmentRef.promise])), current = _a[0], setPromise = _a[1];
    rehackt.useEffect(function () {
        if (fragmentRef === null) {
            return;
        }
        var dispose = fragmentRef.retain();
        var removeListener = fragmentRef.listen(function (promise) {
            setPromise([fragmentRef.key, promise]);
        });
        return function () {
            dispose();
            removeListener();
        };
    }, [fragmentRef]);
    if (fragmentRef === null) {
        return { data: null };
    }
    if (current[0] !== fragmentRef.key) {
        // eslint-disable-next-line react-compiler/react-compiler
        current[0] = fragmentRef.key;
        current[1] = fragmentRef.promise;
    }
    var data = __use(current[1]);
    return { data: data };
}
//# sourceMappingURL=useSuspenseFragment.js.map
;// ./node_modules/@apollo/client/react/hooks/internal/useRenderGuard.js

var Ctx;
function useRenderGuard_noop() { }
function useRenderGuard() {
    if (!Ctx) {
        // we want the intialization to be lazy because `createContext` would error on import in a RSC
        Ctx = rehackt.createContext(null);
    }
    return rehackt.useCallback(
    /**
     * @returns true if the hook was called during render
     */ function () {
        var orig = console.error;
        try {
            console.error = useRenderGuard_noop;
            /**
             * `useContext` can be called conditionally during render, so this is safe.
             * (Also, during render we would want to throw as a reaction to this anyways, so it
             * wouldn't even matter if we got the order of hooks mixed up...)
             *
             * They cannot however be called outside of Render, and that's what we're testing here.
             *
             * Different versions of React have different behaviour on an invalid hook call:
             *
             * React 16.8 - 17: throws an error
             * https://github.com/facebook/react/blob/2b93d686e359c7afa299e2ec5cf63160a32a1155/packages/react/src/ReactHooks.js#L18-L26
             *
             * React 18 & 19: `console.error` in development, then `resolveDispatcher` returns `null` and a member access on `null` throws.
             * https://github.com/facebook/react/blob/58e8304483ebfadd02a295339b5e9a989ac98c6e/packages/react/src/ReactHooks.js#L28-L35
             */
            rehackt.useContext(Ctx);
            return true;
        }
        catch (e) {
            return false;
        }
        finally {
            console.error = orig;
        }
    }, []);
}
//# sourceMappingURL=useRenderGuard.js.map
;// ./node_modules/@apollo/client/react/hooks/useLoadableQuery.js








function useLoadableQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    var client = useApolloClient(options.client);
    var suspenseCache = getSuspenseCache(client);
    var watchQueryOptions = useWatchQueryOptions({ client: client, query: query, options: options });
    var _a = options.queryKey, queryKey = _a === void 0 ? [] : _a;
    var _b = rehackt.useState(null), queryRef = _b[0], setQueryRef = _b[1];
    assertWrappedQueryRef(queryRef);
    var internalQueryRef = queryRef && unwrapQueryRef(queryRef);
    if (queryRef && (internalQueryRef === null || internalQueryRef === void 0 ? void 0 : internalQueryRef.didChangeOptions(watchQueryOptions))) {
        var promise = internalQueryRef.applyOptions(watchQueryOptions);
        updateWrappedQueryRef(queryRef, promise);
    }
    var calledDuringRender = useRenderGuard();
    var fetchMore = rehackt.useCallback(function (options) {
        if (!internalQueryRef) {
            throw new Error("The query has not been loaded. Please load the query.");
        }
        var promise = internalQueryRef.fetchMore(options);
        setQueryRef(wrapQueryRef(internalQueryRef));
        return promise;
    }, [internalQueryRef]);
    var refetch = rehackt.useCallback(function (options) {
        if (!internalQueryRef) {
            throw new Error("The query has not been loaded. Please load the query.");
        }
        var promise = internalQueryRef.refetch(options);
        setQueryRef(wrapQueryRef(internalQueryRef));
        return promise;
    }, [internalQueryRef]);
    var loadQuery = rehackt.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (0,globals/* invariant */.V1)(!calledDuringRender(), 59);
        var variables = args[0];
        var cacheKey = (0,tslib_es6.__spreadArray)([
            query,
            (0,canonicalStringify/* canonicalStringify */.M)(variables)
        ], [].concat(queryKey), true);
        var queryRef = suspenseCache.getQueryRef(cacheKey, function () {
            return client.watchQuery((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, watchQueryOptions), { variables: variables }));
        });
        setQueryRef(wrapQueryRef(queryRef));
    }, [
        query,
        queryKey,
        suspenseCache,
        watchQueryOptions,
        calledDuringRender,
        client,
    ]);
    var subscribeToMore = rehackt.useCallback(function (options) {
        (0,globals/* invariant */.V1)(internalQueryRef, 60);
        return internalQueryRef.observable.subscribeToMore(
        // TODO: The internalQueryRef doesn't have TVariables' type information so we have to cast it here
        options);
    }, [internalQueryRef]);
    var reset = rehackt.useCallback(function () {
        setQueryRef(null);
    }, []);
    return [loadQuery, queryRef, { fetchMore: fetchMore, refetch: refetch, reset: reset, subscribeToMore: subscribeToMore }];
}
//# sourceMappingURL=useLoadableQuery.js.map
;// ./node_modules/@apollo/client/react/hooks/useQueryRefHandlers.js




/**
 * A React hook that returns a `refetch` and `fetchMore` function for a given
 * `queryRef`.
 *
 * This is useful to get access to handlers for a `queryRef` that was created by
 * `createQueryPreloader` or when the handlers for a `queryRef` produced in
 * a different component are inaccessible.
 *
 * @example
 * ```tsx
 * const MyComponent({ queryRef }) {
 *   const { refetch, fetchMore } = useQueryRefHandlers(queryRef);
 *
 *   // ...
 * }
 * ```
 * @since 3.9.0
 * @param queryRef - A `QueryRef` returned from `useBackgroundQuery`, `useLoadableQuery`, or `createQueryPreloader`.
 */
function useQueryRefHandlers(queryRef) {
    var unwrapped = unwrapQueryRef(queryRef);
    var clientOrObsQuery = useApolloClient(unwrapped ?
        // passing an `ObservableQuery` is not supported by the types, but it will
        // return any truthy value that is passed in as an override so we cast the result
        unwrapped["observable"]
        : undefined);
    return wrapHook("useQueryRefHandlers", 
    // eslint-disable-next-line react-compiler/react-compiler
    useQueryRefHandlers_, clientOrObsQuery)(queryRef);
}
function useQueryRefHandlers_(queryRef) {
    assertWrappedQueryRef(queryRef);
    var _a = rehackt.useState(queryRef), previousQueryRef = _a[0], setPreviousQueryRef = _a[1];
    var _b = rehackt.useState(queryRef), wrappedQueryRef = _b[0], setWrappedQueryRef = _b[1];
    var internalQueryRef = unwrapQueryRef(queryRef);
    // To ensure we can support React transitions, this hook needs to manage the
    // queryRef state and apply React's state value immediately to the existing
    // queryRef since this hook doesn't return the queryRef directly
    if (previousQueryRef !== queryRef) {
        setPreviousQueryRef(queryRef);
        setWrappedQueryRef(queryRef);
    }
    else {
        updateWrappedQueryRef(queryRef, getWrappedPromise(wrappedQueryRef));
    }
    var refetch = rehackt.useCallback(function (variables) {
        var promise = internalQueryRef.refetch(variables);
        setWrappedQueryRef(wrapQueryRef(internalQueryRef));
        return promise;
    }, [internalQueryRef]);
    var fetchMore = rehackt.useCallback(function (options) {
        var promise = internalQueryRef.fetchMore(options);
        setWrappedQueryRef(wrapQueryRef(internalQueryRef));
        return promise;
    }, [internalQueryRef]);
    return {
        refetch: refetch,
        fetchMore: fetchMore,
        // TODO: The internalQueryRef doesn't have TVariables' type information so we have to cast it here
        subscribeToMore: internalQueryRef.observable
            .subscribeToMore,
    };
}
//# sourceMappingURL=useQueryRefHandlers.js.map
;// ./node_modules/@apollo/client/react/hooks/useReadQuery.js






function useReadQuery(queryRef) {
    var unwrapped = unwrapQueryRef(queryRef);
    var clientOrObsQuery = useApolloClient(unwrapped ?
        // passing an `ObservableQuery` is not supported by the types, but it will
        // return any truthy value that is passed in as an override so we cast the result
        unwrapped["observable"]
        : undefined);
    return wrapHook("useReadQuery", 
    // eslint-disable-next-line react-compiler/react-compiler
    useReadQuery_, clientOrObsQuery)(queryRef);
}
function useReadQuery_(queryRef) {
    assertWrappedQueryRef(queryRef);
    var internalQueryRef = rehackt.useMemo(function () { return unwrapQueryRef(queryRef); }, [queryRef]);
    var getPromise = rehackt.useCallback(function () { return getWrappedPromise(queryRef); }, [queryRef]);
    if (internalQueryRef.disposed) {
        internalQueryRef.reinitialize();
        updateWrappedQueryRef(queryRef, internalQueryRef.promise);
    }
    rehackt.useEffect(function () { return internalQueryRef.retain(); }, [internalQueryRef]);
    var promise = useSyncExternalStore(rehackt.useCallback(function (forceUpdate) {
        return internalQueryRef.listen(function (promise) {
            updateWrappedQueryRef(queryRef, promise);
            forceUpdate();
        });
    }, [internalQueryRef, queryRef]), getPromise, getPromise);
    var result = __use(promise);
    return rehackt.useMemo(function () {
        return {
            data: result.data,
            networkStatus: result.networkStatus,
            error: useSuspenseQuery_toApolloError(result),
        };
    }, [result]);
}
//# sourceMappingURL=useReadQuery.js.map
;// ./node_modules/@apollo/client/react/hooks/index.js















//# sourceMappingURL=index.js.map
;// ./node_modules/@apollo/client/react/query-preloader/createQueryPreloader.js



/**
 * A higher order function that returns a `preloadQuery` function which
 * can be used to begin loading a query with the given `client`. This is useful
 * when you want to start loading a query as early as possible outside of a
 * React component.
 *
 * > Refer to the [Suspense - Initiating queries outside React](https://www.apollographql.com/docs/react/data/suspense#initiating-queries-outside-react) section for a more in-depth overview.
 *
 * @param client - The `ApolloClient` instance that will be used to load queries
 * from the returned `preloadQuery` function.
 * @returns The `preloadQuery` function.
 *
 * @example
 * ```js
 * const preloadQuery = createQueryPreloader(client);
 * ```
 * @since 3.9.0
 */
function createQueryPreloader(client) {
    return wrapHook("createQueryPreloader", _createQueryPreloader, client)(client);
}
var _createQueryPreloader = function (client) {
    return function preloadQuery(query, options) {
        var _a, _b;
        if (options === void 0) { options = Object.create(null); }
        var queryRef = new InternalQueryReference(client.watchQuery((0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, options), { query: query })), {
            autoDisposeTimeoutMs: (_b = (_a = client.defaultOptions.react) === null || _a === void 0 ? void 0 : _a.suspense) === null || _b === void 0 ? void 0 : _b.autoDisposeTimeoutMs,
        });
        return wrapQueryRef(queryRef);
    };
};
//# sourceMappingURL=createQueryPreloader.js.map
;// ./node_modules/@apollo/client/react/index.js





//# sourceMappingURL=index.js.map
;// ./node_modules/@apollo/client/index.js


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 91188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ ApolloLink)
});

// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/globals/index.js
var globals = __webpack_require__(52687);
// EXTERNAL MODULE: ./node_modules/zen-observable-ts/module.js
var zen_observable_ts_module = __webpack_require__(73401);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(8674);
;// ./node_modules/@apollo/client/link/utils/createOperation.js

function createOperation(starting, operation) {
    var context = (0,tslib_es6.__assign)({}, starting);
    var setContext = function (next) {
        if (typeof next === "function") {
            context = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, context), next(context));
        }
        else {
            context = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, context), next);
        }
    };
    var getContext = function () { return ((0,tslib_es6.__assign)({}, context)); };
    Object.defineProperty(operation, "setContext", {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, "getContext", {
        enumerable: false,
        value: getContext,
    });
    return operation;
}
//# sourceMappingURL=createOperation.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/getFromAST.js
var getFromAST = __webpack_require__(84824);
;// ./node_modules/@apollo/client/link/utils/transformOperation.js

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    // Best guess at an operation name
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== "string" ?
                (0,getFromAST/* getOperationName */.n4)(transformedOperation.query) || undefined
                : "";
    }
    return transformedOperation;
}
//# sourceMappingURL=transformOperation.js.map
;// ./node_modules/@apollo/client/link/utils/validateOperation.js

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        "query",
        "operationName",
        "variables",
        "extensions",
        "context",
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw (0,globals/* newInvariantError */.vA)(46, key);
        }
    }
    return operation;
}
//# sourceMappingURL=validateOperation.js.map
;// ./node_modules/@apollo/client/link/core/ApolloLink.js



function passthrough(op, forward) {
    return (forward ? forward(op) : zen_observable_ts_module/* Observable */.c.of());
}
function toLink(handler) {
    return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var ApolloLink = /** @class */ (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return zen_observable_ts_module/* Observable */.c.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        var ret;
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            ret = new ApolloLink(function (operation) {
                return test(operation) ?
                    leftLink.request(operation) || zen_observable_ts_module/* Observable */.c.of()
                    : rightLink.request(operation) || zen_observable_ts_module/* Observable */.c.of();
            });
        }
        else {
            ret = new ApolloLink(function (operation, forward) {
                return test(operation) ?
                    leftLink.request(operation, forward) || zen_observable_ts_module/* Observable */.c.of()
                    : rightLink.request(operation, forward) || zen_observable_ts_module/* Observable */.c.of();
            });
        }
        return Object.assign(ret, { left: leftLink, right: rightLink });
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || zen_observable_ts_module/* Observable */.c.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(38, firstLink);
            return firstLink;
        }
        var nextLink = toLink(second);
        var ret;
        if (isTerminating(nextLink)) {
            ret = new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts_module/* Observable */.c.of(); }) || zen_observable_ts_module/* Observable */.c.of();
            });
        }
        else {
            ret = new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || zen_observable_ts_module/* Observable */.c.of();
                }) || zen_observable_ts_module/* Observable */.c.of());
            });
        }
        return Object.assign(ret, { left: firstLink, right: nextLink });
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw (0,globals/* newInvariantError */.vA)(39);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            // Returning false indicates that observer.error does not need to be
            // called again, since it was already called (on the previous line).
            // Calling observer.error again would not cause any real problems,
            // since only the first call matters, but custom onError functions
            // might have other reasons for wanting to prevent the default
            // behavior by returning false.
            return false;
        }
        // Throw errors will be passed to observer.error.
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

//# sourceMappingURL=ApolloLink.js.map

/***/ }),

/***/ 74081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ execute)
/* harmony export */ });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91188);

var execute = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__/* .ApolloLink */ .C.execute;
//# sourceMappingURL=execute.js.map

/***/ }),

/***/ 8898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ch: () => (/* reexport */ ApolloLink/* ApolloLink */.C),
  xW: () => (/* reexport */ concat),
  Ie: () => (/* reexport */ empty),
  g7: () => (/* reexport */ execute/* execute */.g),
  HT: () => (/* reexport */ from),
  lD: () => (/* reexport */ split)
});

// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/globals/index.js
var globals = __webpack_require__(52687);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/core/ApolloLink.js + 3 modules
var ApolloLink = __webpack_require__(91188);
;// ./node_modules/@apollo/client/link/core/empty.js

var empty = ApolloLink/* ApolloLink */.C.empty;
//# sourceMappingURL=empty.js.map
;// ./node_modules/@apollo/client/link/core/from.js

var from = ApolloLink/* ApolloLink */.C.from;
//# sourceMappingURL=from.js.map
;// ./node_modules/@apollo/client/link/core/split.js

var split = ApolloLink/* ApolloLink */.C.split;
//# sourceMappingURL=split.js.map
;// ./node_modules/@apollo/client/link/core/concat.js

var concat = ApolloLink/* ApolloLink */.C.concat;
//# sourceMappingURL=concat.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/core/execute.js
var execute = __webpack_require__(74081);
;// ./node_modules/@apollo/client/link/core/index.js







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 94537:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ HttpLink)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8674);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91188);
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13782);



var HttpLink = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, (0,_createHttpLink_js__WEBPACK_IMPORTED_MODULE_1__/* .createHttpLink */ .$)(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ApolloLink */ .C));

//# sourceMappingURL=HttpLink.js.map

/***/ }),

/***/ 83438:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ checkFetcher)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === "undefined") {
        throw (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newInvariantError */ .vA)(40);
    }
};
//# sourceMappingURL=checkFetcher.js.map

/***/ }),

/***/ 13782:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ createHttpLink)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/globals/index.js
var globals = __webpack_require__(52687);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/core/ApolloLink.js + 3 modules
var ApolloLink = __webpack_require__(91188);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/directives.js
var directives = __webpack_require__(68869);
// EXTERNAL MODULE: ./node_modules/zen-observable-ts/module.js
var zen_observable_ts_module = __webpack_require__(73401);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/http/serializeFetchParameter.js
var serializeFetchParameter = __webpack_require__(49192);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/http/selectURI.js
var selectURI = __webpack_require__(88039);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js + 5 modules
var parseAndCheckHttpResponse = __webpack_require__(21799);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/http/checkFetcher.js
var checkFetcher = __webpack_require__(83438);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js
var selectHttpOptionsAndBody = __webpack_require__(84594);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/http/rewriteURIForGET.js
var rewriteURIForGET = __webpack_require__(9162);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/utils/fromError.js
var fromError = __webpack_require__(86092);
// EXTERNAL MODULE: ./node_modules/graphql/language/visitor.mjs
var visitor = __webpack_require__(11786);
;// ./node_modules/@apollo/client/link/utils/filterOperationVariables.js


function filterOperationVariables(variables, query) {
    var result = (0,tslib_es6.__assign)({}, variables);
    var unusedNames = new Set(Object.keys(variables));
    (0,visitor/* visit */.YR)(query, {
        Variable: function (node, _key, parent) {
            // A variable type definition at the top level of a query is not
            // enough to silence server-side errors about the variable being
            // unused, so variable definitions do not count as usage.
            // https://spec.graphql.org/draft/#sec-All-Variables-Used
            if (parent &&
                parent.kind !== "VariableDefinition") {
                unusedNames.delete(node.name.value);
            }
        },
    });
    unusedNames.forEach(function (name) {
        delete result[name];
    });
    return result;
}
//# sourceMappingURL=filterOperationVariables.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/transform.js
var transform = __webpack_require__(3902);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/graphql/getFromAST.js
var getFromAST = __webpack_require__(84824);
;// ./node_modules/@apollo/client/link/http/createHttpLink.js












var backupFetch = (0,globals/* maybe */.no)(function () { return fetch; });
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? "/graphql" : _a, 
    // use default global fetch if nothing passed in
    preferredFetch = linkOptions.fetch, _b = linkOptions.print, print = _b === void 0 ? selectHttpOptionsAndBody/* defaultPrinter */.i1 : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = (0,tslib_es6.__rest)(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
    if (globalThis.__DEV__ !== false) {
        // Make sure at least one of preferredFetch, window.fetch, or backupFetch is
        // defined, so requests won't fail at runtime.
        (0,checkFetcher/* checkFetcher */.S)(preferredFetch || backupFetch);
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions, preserveHeaderCase: preserveHeaderCase },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new ApolloLink/* ApolloLink */.C(function (operation) {
        var chosenURI = (0,selectURI/* selectURI */.z)(operation, uri);
        var context = operation.getContext();
        // `apollographql-client-*` headers are automatically set if a
        // `clientAwareness` object is found in the context. These headers are
        // set first, followed by the rest of the headers pulled from
        // `context.headers`. If desired, `apollographql-client-*` headers set by
        // the `clientAwareness` object can be overridden by
        // `apollographql-client-*` headers set in `context.headers`.
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders["apollographql-client-name"] = name_1;
            }
            if (version) {
                clientAwarenessHeaders["apollographql-client-version"] = version;
            }
        }
        var contextHeaders = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        if ((0,directives/* hasDirectives */.d8)(["client"], operation.query)) {
            var transformedQuery = (0,transform/* removeClientSetsFromDocument */.er)(operation.query);
            if (!transformedQuery) {
                return (0,fromError/* fromError */.N)(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
            }
            operation.query = transformedQuery;
        }
        //uses fallback, link, and then context to build options
        var _b = (0,selectHttpOptionsAndBody/* selectHttpOptionsAndBodyInternal */.HY)(operation, print, selectHttpOptionsAndBody/* fallbackHttpConfig */.R4, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            body.variables = filterOperationVariables(body.variables, operation.query);
        }
        var controller;
        if (!options.signal && typeof AbortController !== "undefined") {
            controller = new AbortController();
            options.signal = controller.signal;
        }
        // If requested, set method to GET if there are no mutations.
        var definitionIsMutation = function (d) {
            return d.kind === "OperationDefinition" && d.operation === "mutation";
        };
        var definitionIsSubscription = function (d) {
            return d.kind === "OperationDefinition" && d.operation === "subscription";
        };
        var isSubscription = definitionIsSubscription((0,getFromAST/* getMainDefinition */.Vn)(operation.query));
        // does not match custom directives beginning with @defer
        var hasDefer = (0,directives/* hasDirectives */.d8)(["defer"], operation.query);
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = "GET";
        }
        if (hasDefer || isSubscription) {
            options.headers = options.headers || {};
            var acceptHeader = "multipart/mixed;";
            // Omit defer-specific headers if the user attempts to defer a selection
            // set on a subscription and log a warning.
            if (isSubscription && hasDefer) {
                globalThis.__DEV__ !== false && globals/* invariant */.V1.warn(41);
            }
            if (isSubscription) {
                acceptHeader +=
                    "boundary=graphql;subscriptionSpec=1.0,application/json";
            }
            else if (hasDefer) {
                acceptHeader += "deferSpec=20220824,application/json";
            }
            options.headers.accept = acceptHeader;
        }
        if (options.method === "GET") {
            var _c = (0,rewriteURIForGET/* rewriteURIForGET */.E)(chosenURI, body), newURI = _c.newURI, parseError = _c.parseError;
            if (parseError) {
                return (0,fromError/* fromError */.N)(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = (0,serializeFetchParameter/* serializeFetchParameter */.Y)(body, "Payload");
            }
            catch (parseError) {
                return (0,fromError/* fromError */.N)(parseError);
            }
        }
        return new zen_observable_ts_module/* Observable */.c(function (observer) {
            // Prefer linkOptions.fetch (preferredFetch) if provided, and otherwise
            // fall back to the *current* global window.fetch function (see issue
            // #7832), or (if all else fails) the backupFetch function we saved when
            // this module was first evaluated. This last option protects against the
            // removal of window.fetch, which is unlikely but not impossible.
            var currentFetch = preferredFetch || (0,globals/* maybe */.no)(function () { return fetch; }) || backupFetch;
            var observerNext = observer.next.bind(observer);
            currentFetch(chosenURI, options)
                .then(function (response) {
                var _a;
                operation.setContext({ response: response });
                var ctype = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get("content-type");
                if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
                    return (0,parseAndCheckHttpResponse/* readMultipartBody */.tD)(response, observerNext);
                }
                else {
                    return (0,parseAndCheckHttpResponse/* parseAndCheckHttpResponse */.OQ)(operation)(response).then(observerNext);
                }
            })
                .then(function () {
                controller = undefined;
                observer.complete();
            })
                .catch(function (err) {
                controller = undefined;
                (0,parseAndCheckHttpResponse/* handleError */.H4)(err, observer);
            });
            return function () {
                // XXX support canceling this request
                // https://developers.google.com/web/updates/2017/09/abortable-fetch
                if (controller)
                    controller.abort();
            };
        });
    });
};
//# sourceMappingURL=createHttpLink.js.map

/***/ }),

/***/ 83746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ createSignalIfSupported)
/* harmony export */ });
/**
 * @deprecated
 * This is not used internally any more and will be removed in
 * the next major version of Apollo Client.
 */
var createSignalIfSupported = function () {
    if (typeof AbortController === "undefined")
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
//# sourceMappingURL=createSignalIfSupported.js.map

/***/ }),

/***/ 21799:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H4: () => (/* binding */ handleError),
  OQ: () => (/* binding */ parseAndCheckHttpResponse),
  tD: () => (/* binding */ readMultipartBody)
});

// UNUSED EXPORTS: parseHeaders, parseJsonBody

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/canUse.js
var canUse = __webpack_require__(2619);
;// ./node_modules/@apollo/client/link/http/iterators/async.js
/**
 * Original source:
 * https://github.com/kmalakoff/response-iterator/blob/master/src/iterators/async.ts
 */
function asyncIterator(source) {
    var _a;
    var iterator = source[Symbol.asyncIterator]();
    return _a = {
            next: function () {
                return iterator.next();
            }
        },
        _a[Symbol.asyncIterator] = function () {
            return this;
        },
        _a;
}
//# sourceMappingURL=async.js.map
;// ./node_modules/@apollo/client/link/http/iterators/nodeStream.js
/**
 * Original source:
 * https://github.com/kmalakoff/response-iterator/blob/master/src/iterators/nodeStream.ts
 */

function nodeStreamIterator(stream) {
    var cleanup = null;
    var error = null;
    var done = false;
    var data = [];
    var waiting = [];
    function onData(chunk) {
        if (error)
            return;
        if (waiting.length) {
            var shiftedArr = waiting.shift();
            if (Array.isArray(shiftedArr) && shiftedArr[0]) {
                return shiftedArr[0]({ value: chunk, done: false });
            }
        }
        data.push(chunk);
    }
    function onError(err) {
        error = err;
        var all = waiting.slice();
        all.forEach(function (pair) {
            pair[1](err);
        });
        !cleanup || cleanup();
    }
    function onEnd() {
        done = true;
        var all = waiting.slice();
        all.forEach(function (pair) {
            pair[0]({ value: undefined, done: true });
        });
        !cleanup || cleanup();
    }
    cleanup = function () {
        cleanup = null;
        stream.removeListener("data", onData);
        stream.removeListener("error", onError);
        stream.removeListener("end", onEnd);
        stream.removeListener("finish", onEnd);
        stream.removeListener("close", onEnd);
    };
    stream.on("data", onData);
    stream.on("error", onError);
    stream.on("end", onEnd);
    stream.on("finish", onEnd);
    stream.on("close", onEnd);
    function getNext() {
        return new Promise(function (resolve, reject) {
            if (error)
                return reject(error);
            if (data.length)
                return resolve({ value: data.shift(), done: false });
            if (done)
                return resolve({ value: undefined, done: true });
            waiting.push([resolve, reject]);
        });
    }
    var iterator = {
        next: function () {
            return getNext();
        },
    };
    if (canUse/* canUseAsyncIteratorSymbol */.uJ) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}
//# sourceMappingURL=nodeStream.js.map
;// ./node_modules/@apollo/client/link/http/iterators/promise.js
/**
 * Original source:
 * https://github.com/kmalakoff/response-iterator/blob/master/src/iterators/promise.ts
 */

function promiseIterator(promise) {
    var resolved = false;
    var iterator = {
        next: function () {
            if (resolved)
                return Promise.resolve({
                    value: undefined,
                    done: true,
                });
            resolved = true;
            return new Promise(function (resolve, reject) {
                promise
                    .then(function (value) {
                    resolve({ value: value, done: false });
                })
                    .catch(reject);
            });
        },
    };
    if (canUse/* canUseAsyncIteratorSymbol */.uJ) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}
//# sourceMappingURL=promise.js.map
;// ./node_modules/@apollo/client/link/http/iterators/reader.js
/**
 * Original source:
 * https://github.com/kmalakoff/response-iterator/blob/master/src/iterators/reader.ts
 */

function readerIterator(reader) {
    var iterator = {
        next: function () {
            return reader.read();
        },
    };
    if (canUse/* canUseAsyncIteratorSymbol */.uJ) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}
//# sourceMappingURL=reader.js.map
;// ./node_modules/@apollo/client/link/http/responseIterator.js
/**
 * Original source:
 * https://github.com/kmalakoff/response-iterator/blob/master/src/index.ts
 */





function isNodeResponse(value) {
    return !!value.body;
}
function isReadableStream(value) {
    return !!value.getReader;
}
function isAsyncIterableIterator(value) {
    return !!(canUse/* canUseAsyncIteratorSymbol */.uJ &&
        value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
    return !!value.stream;
}
function isBlob(value) {
    return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
    return !!value.pipe;
}
function responseIterator(response) {
    var body = response;
    if (isNodeResponse(response))
        body = response.body;
    if (isAsyncIterableIterator(body))
        return asyncIterator(body);
    if (isReadableStream(body))
        return readerIterator(body.getReader());
    // this errors without casting to ReadableStream<T>
    // because Blob.stream() returns a NodeJS ReadableStream
    if (isStreamableBlob(body)) {
        return readerIterator(body.stream().getReader());
    }
    if (isBlob(body))
        return promiseIterator(body.arrayBuffer());
    if (isNodeReadableStream(body))
        return nodeStreamIterator(body);
    throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
//# sourceMappingURL=responseIterator.js.map
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/utils/throwServerError.js
var throwServerError = __webpack_require__(64251);
// EXTERNAL MODULE: ./node_modules/@apollo/client/errors/index.js
var errors = __webpack_require__(9211);
// EXTERNAL MODULE: ./node_modules/@apollo/client/utilities/common/incrementalResult.js
var incrementalResult = __webpack_require__(56453);
;// ./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js





var parseAndCheckHttpResponse_hasOwnProperty = Object.prototype.hasOwnProperty;
function readMultipartBody(response, nextValue) {
    return (0,tslib_es6.__awaiter)(this, void 0, void 0, function () {
        var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _a, value, done, chunk, searchFrom, bi, message, i, headers, contentType_1, body, result, next;
        var _b, _c;
        var _d;
        return (0,tslib_es6.__generator)(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (TextDecoder === undefined) {
                        throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                    }
                    decoder = new TextDecoder("utf-8");
                    contentType = (_d = response.headers) === null || _d === void 0 ? void 0 : _d.get("content-type");
                    delimiter = "boundary=";
                    boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ?
                        contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim()
                        : "-";
                    boundary = "\r\n--".concat(boundaryVal);
                    buffer = "";
                    iterator = responseIterator(response);
                    running = true;
                    _e.label = 1;
                case 1:
                    if (!running) return [3 /*break*/, 3];
                    return [4 /*yield*/, iterator.next()];
                case 2:
                    _a = _e.sent(), value = _a.value, done = _a.done;
                    chunk = typeof value === "string" ? value : decoder.decode(value);
                    searchFrom = buffer.length - boundary.length + 1;
                    running = !done;
                    buffer += chunk;
                    bi = buffer.indexOf(boundary, searchFrom);
                    while (bi > -1) {
                        message = void 0;
                        _b = [
                            buffer.slice(0, bi),
                            buffer.slice(bi + boundary.length),
                        ], message = _b[0], buffer = _b[1];
                        i = message.indexOf("\r\n\r\n");
                        headers = parseHeaders(message.slice(0, i));
                        contentType_1 = headers["content-type"];
                        if (contentType_1 &&
                            contentType_1.toLowerCase().indexOf("application/json") === -1) {
                            throw new Error("Unsupported patch content type: application/json is required.");
                        }
                        body = message.slice(i);
                        if (body) {
                            result = parseJsonBody(response, body);
                            if (Object.keys(result).length > 1 ||
                                "data" in result ||
                                "incremental" in result ||
                                "errors" in result ||
                                "payload" in result) {
                                if ((0,incrementalResult/* isApolloPayloadResult */.Nw)(result)) {
                                    next = {};
                                    if ("payload" in result) {
                                        if (Object.keys(result).length === 1 && result.payload === null) {
                                            return [2 /*return*/];
                                        }
                                        next = (0,tslib_es6.__assign)({}, result.payload);
                                    }
                                    if ("errors" in result) {
                                        next = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, next), { extensions: (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, ("extensions" in next ? next.extensions : null)), (_c = {}, _c[errors/* PROTOCOL_ERRORS_SYMBOL */.K$] = result.errors, _c)) });
                                    }
                                    nextValue(next);
                                }
                                else {
                                    // for the last chunk with only `hasNext: false`
                                    // we don't need to call observer.next as there is no data/errors
                                    nextValue(result);
                                }
                            }
                            else if (
                            // If the chunk contains only a "hasNext: false", we can call
                            // observer.complete() immediately.
                            Object.keys(result).length === 1 &&
                                "hasNext" in result &&
                                !result.hasNext) {
                                return [2 /*return*/];
                            }
                        }
                        bi = buffer.indexOf(boundary);
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function parseHeaders(headerText) {
    var headersInit = {};
    headerText.split("\n").forEach(function (line) {
        var i = line.indexOf(":");
        if (i > -1) {
            // normalize headers to lowercase
            var name_1 = line.slice(0, i).trim().toLowerCase();
            var value = line.slice(i + 1).trim();
            headersInit[name_1] = value;
        }
    });
    return headersInit;
}
function parseJsonBody(response, bodyText) {
    if (response.status >= 300) {
        // Network error
        var getResult = function () {
            try {
                return JSON.parse(bodyText);
            }
            catch (err) {
                return bodyText;
            }
        };
        (0,throwServerError/* throwServerError */.A)(response, getResult(), "Response not successful: Received status code ".concat(response.status));
    }
    try {
        return JSON.parse(bodyText);
    }
    catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
    }
}
function handleError(err, observer) {
    // if it is a network error, BUT there is graphql result info fire
    // the next observer before calling error this gives apollo-client
    // (and react-apollo) the `graphqlErrors` and `networkErrors` to
    // pass to UI this should only happen if we *also* have data as
    // part of the response key per the spec
    if (err.result && err.result.errors && err.result.data) {
        // if we don't call next, the UI can only show networkError
        // because AC didn't get any graphqlErrors this is graphql
        // execution result info (i.e errors and possibly data) this is
        // because there is no formal spec how errors should translate to
        // http status codes. So an auth error (401) could have both data
        // from a public field, errors from a private field, and a status
        // of 401
        // {
        //  user { // this will have errors
        //    firstName
        //  }
        //  products { // this is public so will have data
        //    cost
        //  }
        // }
        //
        // the result of above *could* look like this:
        // {
        //   data: { products: [{ cost: "$10" }] },
        //   errors: [{
        //      message: 'your session has timed out',
        //      path: []
        //   }]
        // }
        // status code of above would be a 401
        // in the UI you want to show data where you can, errors as data where you can
        // and use correct http status codes
        observer.next(err.result);
    }
    observer.error(err);
}
function parseAndCheckHttpResponse(operations) {
    return function (response) {
        return response
            .text()
            .then(function (bodyText) { return parseJsonBody(response, bodyText); })
            .then(function (result) {
            if (!Array.isArray(result) &&
                !parseAndCheckHttpResponse_hasOwnProperty.call(result, "data") &&
                !parseAndCheckHttpResponse_hasOwnProperty.call(result, "errors")) {
                // Data error
                (0,throwServerError/* throwServerError */.A)(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ?
                    operations.map(function (op) { return op.operationName; })
                    : operations.operationName, "'."));
            }
            return result;
        });
    };
}
//# sourceMappingURL=parseAndCheckHttpResponse.js.map

/***/ }),

/***/ 9162:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ rewriteURIForGET)
/* harmony export */ });
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49192);

// For GET operations, returns the given URI rewritten with parameters, or a
// parse error.
function rewriteURIForGET(chosenURI, body) {
    // Implement the standard HTTP GET serialization, plus 'extensions'. Note
    // the extra level of JSON serialization!
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
    };
    if ("query" in body) {
        addQueryParam("query", body.query);
    }
    if (body.operationName) {
        addQueryParam("operationName", body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__/* .serializeFetchParameter */ .Y)(body.variables, "Variables map");
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam("variables", serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__/* .serializeFetchParameter */ .Y)(body.extensions, "Extensions map");
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam("extensions", serializedExtensions);
    }
    // Reconstruct the URI with added query params.
    // XXX This assumes that the URI is well-formed and that it doesn't
    //     already contain any of these query params. We could instead use the
    //     URL API and take a polyfill (whatwg-url@6) for older browsers that
    //     don't support URLSearchParams. Note that some browsers (and
    //     versions of whatwg-url) support URL but not URLSearchParams!
    var fragment = "", preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf("#");
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
    var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
    return { newURI: newURI };
}
//# sourceMappingURL=rewriteURIForGET.js.map

/***/ }),

/***/ 84594:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HY: () => (/* binding */ selectHttpOptionsAndBodyInternal),
/* harmony export */   R4: () => (/* binding */ fallbackHttpConfig),
/* harmony export */   Wz: () => (/* binding */ selectHttpOptionsAndBody),
/* harmony export */   i1: () => (/* binding */ defaultPrinter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8674);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47397);


var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
    preserveHeaderCase: false,
};
var defaultHeaders = {
    // headers are case insensitive (https://stackoverflow.com/a/5259004)
    accept: "*/*",
    // The content-type header describes the type of the body of the request, and
    // so it typically only is sent with requests that actually have bodies. One
    // could imagine that Apollo Client would remove this header when constructing
    // a GET request (which has no body), but we historically have not done that.
    // This means that browsers will preflight all Apollo Client requests (even
    // GET requests). Apollo Server's CSRF prevention feature (introduced in
    // AS3.7) takes advantage of this fact and does not block requests with this
    // header. If you want to drop this header from GET requests, then you should
    // probably replace it with a `apollo-require-preflight` header, or servers
    // with CSRF prevention enabled might block your GET request. See
    // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
    // for more details.
    "content-type": "application/json",
};
var defaultOptions = {
    method: "POST",
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var defaultPrinter = function (ast, printer) { return printer(ast); };
function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([operation,
        defaultPrinter], configs, false));
}
function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = {};
    var http = {};
    configs.forEach(function (config) {
        options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), config.options), { headers: (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options.headers), config.headers) });
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        http = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, http), config.http);
    });
    if (options.headers) {
        options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
    }
    //The body depends on the http options
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    // not sending the query (i.e persisted queries)
    if (http.includeQuery)
        body.query = printer(query, _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__/* .print */ .y);
    return {
        options: options,
        body: body,
    };
}
// Remove potential duplicate header names, preserving last (by insertion order).
// This is done to prevent unintentionally duplicating a header instead of
// overwriting it (See #8447 and #8449).
function removeDuplicateHeaders(headers, preserveHeaderCase) {
    // If we're not preserving the case, just remove duplicates w/ normalization.
    if (!preserveHeaderCase) {
        var normalizedHeaders_1 = {};
        Object.keys(Object(headers)).forEach(function (name) {
            normalizedHeaders_1[name.toLowerCase()] = headers[name];
        });
        return normalizedHeaders_1;
    }
    // If we are preserving the case, remove duplicates w/ normalization,
    // preserving the original name.
    // This allows for non-http-spec-compliant servers that expect intentionally
    // capitalized header names (See #6741).
    var headerData = {};
    Object.keys(Object(headers)).forEach(function (name) {
        headerData[name.toLowerCase()] = {
            originalName: name,
            value: headers[name],
        };
    });
    var normalizedHeaders = {};
    Object.keys(headerData).forEach(function (name) {
        normalizedHeaders[headerData[name].originalName] = headerData[name].value;
    });
    return normalizedHeaders;
}
//# sourceMappingURL=selectHttpOptionsAndBody.js.map

/***/ }),

/***/ 88039:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ selectURI)
/* harmony export */ });
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === "function") {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || "/graphql";
    }
};
//# sourceMappingURL=selectURI.js.map

/***/ }),

/***/ 49192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ serializeFetchParameter)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newInvariantError */ .vA)(42, label, e.message);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
//# sourceMappingURL=serializeFetchParameter.js.map

/***/ }),

/***/ 86092:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ fromError)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73401);

function fromError(errorValue) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(function (observer) {
        observer.error(errorValue);
    });
}
//# sourceMappingURL=fromError.js.map

/***/ }),

/***/ 73547:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ fromPromise)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73401);

function fromPromise(promise) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ 64251:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ throwServerError)
/* harmony export */ });
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = "ServerError";
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
//# sourceMappingURL=throwServerError.js.map

/***/ }),

/***/ 31052:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ toPromise)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);

function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    globalThis.__DEV__ !== false && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.warn(45);
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 64083:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ maskDefinition)
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73061);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21469);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67194);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68869);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60857);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);




function maskDefinition(data, selectionSet, context) {
    return _utils_js__WEBPACK_IMPORTED_MODULE_1__/* .disableWarningsSlot */ .yV.withValue(true, function () {
        var masked = maskSelectionSet(data, selectionSet, context, false);
        if (Object.isFrozen(data)) {
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .maybeDeepFreeze */ .G)(masked);
        }
        return masked;
    });
}
function getMutableTarget(data, mutableTargets) {
    if (mutableTargets.has(data)) {
        return mutableTargets.get(data);
    }
    var mutableTarget = Array.isArray(data) ? [] : Object.create(null);
    mutableTargets.set(data, mutableTarget);
    return mutableTarget;
}
function maskSelectionSet(data, selectionSet, context, migration, path) {
    var _a;
    var knownChanged = context.knownChanged;
    var memo = getMutableTarget(data, context.mutableTargets);
    if (Array.isArray(data)) {
        for (var _i = 0, _b = Array.from(data.entries()); _i < _b.length; _i++) {
            var _c = _b[_i], index = _c[0], item = _c[1];
            if (item === null) {
                memo[index] = null;
                continue;
            }
            var masked = maskSelectionSet(item, selectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", "[").concat(index, "]") : void 0);
            if (knownChanged.has(masked)) {
                knownChanged.add(memo);
            }
            memo[index] = masked;
        }
        return knownChanged.has(memo) ? memo : data;
    }
    for (var _d = 0, _e = selectionSet.selections; _d < _e.length; _d++) {
        var selection = _e[_d];
        var value = void 0;
        // we later want to add acessor warnings to the final result
        // so we need a new object to add the accessor warning to
        if (migration) {
            knownChanged.add(memo);
        }
        if (selection.kind === graphql__WEBPACK_IMPORTED_MODULE_3__/* .Kind */ .b.FIELD) {
            var keyName = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__/* .resultKeyNameFromField */ .ue)(selection);
            var childSelectionSet = selection.selectionSet;
            value = memo[keyName] || data[keyName];
            if (value === void 0) {
                continue;
            }
            if (childSelectionSet && value !== null) {
                var masked = maskSelectionSet(data[keyName], childSelectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", ".").concat(keyName) : void 0);
                if (knownChanged.has(masked)) {
                    value = masked;
                }
            }
            if (!(globalThis.__DEV__ !== false)) {
                memo[keyName] = value;
            }
            if (globalThis.__DEV__ !== false) {
                if (migration &&
                    keyName !== "__typename" &&
                    // either the field is not present in the memo object
                    // or it has a `get` descriptor, not a `value` descriptor
                    // => it is a warning accessor and we can overwrite it
                    // with another accessor
                    !((_a = Object.getOwnPropertyDescriptor(memo, keyName)) === null || _a === void 0 ? void 0 : _a.value)) {
                    Object.defineProperty(memo, keyName, getAccessorWarningDescriptor(keyName, value, path || "", context.operationName, context.operationType));
                }
                else {
                    delete memo[keyName];
                    memo[keyName] = value;
                }
            }
        }
        if (selection.kind === graphql__WEBPACK_IMPORTED_MODULE_3__/* .Kind */ .b.INLINE_FRAGMENT &&
            (!selection.typeCondition ||
                context.cache.fragmentMatches(selection, data.__typename))) {
            value = maskSelectionSet(data, selection.selectionSet, context, migration, path);
        }
        if (selection.kind === graphql__WEBPACK_IMPORTED_MODULE_3__/* .Kind */ .b.FRAGMENT_SPREAD) {
            var fragmentName = selection.name.value;
            var fragment = context.fragmentMap[fragmentName] ||
                (context.fragmentMap[fragmentName] =
                    context.cache.lookupFragment(fragmentName));
            (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(fragment, 47, fragmentName);
            var mode = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__/* .getFragmentMaskMode */ .s7)(selection);
            if (mode !== "mask") {
                value = maskSelectionSet(data, fragment.selectionSet, context, mode === "migrate", path);
            }
        }
        if (knownChanged.has(value)) {
            knownChanged.add(memo);
        }
    }
    if ("__typename" in data && !("__typename" in memo)) {
        memo.__typename = data.__typename;
    }
    // This check prevents cases where masked fields may accidentally be
    // returned as part of this object when the fragment also selects
    // additional fields from the same child selection.
    if (Object.keys(memo).length !== Object.keys(data).length) {
        knownChanged.add(memo);
    }
    return knownChanged.has(memo) ? memo : data;
}
function getAccessorWarningDescriptor(fieldName, value, path, operationName, operationType) {
    var getValue = function () {
        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .disableWarningsSlot */ .yV.getValue()) {
            return value;
        }
        globalThis.__DEV__ !== false && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.warn(48, operationName ?
            "".concat(operationType, " '").concat(operationName, "'")
            : "anonymous ".concat(operationType), "".concat(path, ".").concat(fieldName).replace(/^\./, ""));
        getValue = function () { return value; };
        return value;
    };
    return {
        get: function () {
            return getValue();
        },
        set: function (newValue) {
            getValue = function () { return newValue; };
        },
        enumerable: true,
        configurable: true,
    };
}
//# sourceMappingURL=maskDefinition.js.map

/***/ }),

/***/ 45410:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ maskFragment)
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73061);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60857);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15381);
/* harmony import */ var _maskDefinition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64083);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65215);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84824);






/** @internal */
function maskFragment(data, document, cache, fragmentName) {
    if (!cache.fragmentMatches) {
        if (globalThis.__DEV__ !== false) {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .warnOnImproperCacheImplementation */ .Ki)();
        }
        return data;
    }
    var fragments = document.definitions.filter(function (node) {
        return node.kind === graphql__WEBPACK_IMPORTED_MODULE_3__/* .Kind */ .b.FRAGMENT_DEFINITION;
    });
    if (typeof fragmentName === "undefined") {
        (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(fragments.length === 1, 49, fragments.length);
        fragmentName = fragments[0].name.value;
    }
    var fragment = fragments.find(function (fragment) { return fragment.name.value === fragmentName; });
    (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(!!fragment, 50, fragmentName);
    if (data == null) {
        // Maintain the original `null` or `undefined` value
        return data;
    }
    if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(data, {})) {
        // Return early and skip the masking algorithm if we don't have any data
        // yet. This can happen when cache.diff returns an empty object which is
        // used from watchFragment.
        return data;
    }
    return (0,_maskDefinition_js__WEBPACK_IMPORTED_MODULE_4__/* .maskDefinition */ .S)(data, fragment.selectionSet, {
        operationType: "fragment",
        operationName: fragment.name.value,
        fragmentMap: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__/* .createFragmentMap */ .JG)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__/* .getFragmentDefinitions */ .zK)(document)),
        cache: cache,
        mutableTargets: new _utils_js__WEBPACK_IMPORTED_MODULE_2__/* .MapImpl */ .jq(),
        knownChanged: new _utils_js__WEBPACK_IMPORTED_MODULE_2__/* .SetImpl */ .xm(),
    });
}
//# sourceMappingURL=maskFragment.js.map

/***/ }),

/***/ 60857:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ki: () => (/* binding */ warnOnImproperCacheImplementation),
/* harmony export */   jq: () => (/* binding */ MapImpl),
/* harmony export */   xm: () => (/* binding */ SetImpl),
/* harmony export */   yV: () => (/* binding */ disableWarningsSlot)
/* harmony export */ });
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1161);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52687);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2619);



var MapImpl = _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .canUseWeakMap */ .et ? WeakMap : Map;
var SetImpl = _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__/* .canUseWeakSet */ .En ? WeakSet : Set;
// Contextual slot that allows us to disable accessor warnings on fields when in
// migrate mode.
/** @internal */
var disableWarningsSlot = new optimism__WEBPACK_IMPORTED_MODULE_0__/* .Slot */ .DX();
var issuedWarning = false;
function warnOnImproperCacheImplementation() {
    if (!issuedWarning) {
        issuedWarning = true;
        globalThis.__DEV__ !== false && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .V1.warn(52);
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AutoCleanedWeakCache),
/* harmony export */   V: () => (/* binding */ AutoCleanedStrongCache)
/* harmony export */ });
/* harmony import */ var _wry_caches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11744);
/* harmony import */ var _wry_caches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37783);

var scheduledCleanup = new WeakSet();
function schedule(cache) {
    if (cache.size <= (cache.max || -1)) {
        return;
    }
    if (!scheduledCleanup.has(cache)) {
        scheduledCleanup.add(cache);
        setTimeout(function () {
            cache.clean();
            scheduledCleanup.delete(cache);
        }, 100);
    }
}
/**
 * @internal
 * A version of WeakCache that will auto-schedule a cleanup of the cache when
 * a new item is added and the cache reached maximum size.
 * Throttled to once per 100ms.
 *
 * @privateRemarks
 * Should be used throughout the rest of the codebase instead of WeakCache,
 * with the notable exception of usage in `wrap` from `optimism` - that one
 * already handles cleanup and should remain a `WeakCache`.
 */
var AutoCleanedWeakCache = function (max, dispose) {
    /*
    Some builds of `WeakCache` are function prototypes, some are classes.
    This library still builds with an ES5 target, so we can't extend the
    real classes.
    Instead, we have to use this workaround until we switch to a newer build
    target.
    */
    var cache = new _wry_caches__WEBPACK_IMPORTED_MODULE_0__/* .WeakCache */ .l(max, dispose);
    cache.set = function (key, value) {
        var ret = _wry_caches__WEBPACK_IMPORTED_MODULE_0__/* .WeakCache */ .l.prototype.set.call(this, key, value);
        schedule(this);
        return ret;
    };
    return cache;
};
/**
 * @internal
 * A version of StrongCache that will auto-schedule a cleanup of the cache when
 * a new item is added and the cache reached maximum size.
 * Throttled to once per 100ms.
 *
 * @privateRemarks
 * Should be used throughout the rest of the codebase instead of StrongCache,
 * with the notable exception of usage in `wrap` from `optimism` - that one
 * already handles cleanup and should remain a `StrongCache`.
 */
var AutoCleanedStrongCache = function (max, dispose) {
    /*
    Some builds of `StrongCache` are function prototypes, some are classes.
    This library still builds with an ES5 target, so we can't extend the
    real classes.
    Instead, we have to use this workaround until we switch to a newer build
    target.
    */
    var cache = new _wry_caches__WEBPACK_IMPORTED_MODULE_1__/* .StrongCache */ .C(max, dispose);
    cache.set = function (key, value) {
        var ret = _wry_caches__WEBPACK_IMPORTED_MODULE_1__/* .StrongCache */ .C.prototype.set.call(this, key, value);
        schedule(this);
        return ret;
    };
    return cache;
};
//# sourceMappingURL=caches.js.map

/***/ }),

/***/ 35051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D_: () => (/* binding */ registerGlobalCache),
/* harmony export */   cM: () => (/* binding */ getInMemoryCacheMemoryInternals),
/* harmony export */   ep: () => (/* binding */ getApolloClientMemoryInternals),
/* harmony export */   tQ: () => (/* binding */ getApolloCacheMemoryInternals)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8674);
/* harmony import */ var _sizes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81212);


var globalCaches = {};
function registerGlobalCache(name, getSize) {
    globalCaches[name] = getSize;
}
/**
 * For internal purposes only - please call `ApolloClient.getMemoryInternals` instead
 * @internal
 */
var getApolloClientMemoryInternals = globalThis.__DEV__ !== false ?
    _getApolloClientMemoryInternals
    : undefined;
/**
 * For internal purposes only - please call `ApolloClient.getMemoryInternals` instead
 * @internal
 */
var getInMemoryCacheMemoryInternals = globalThis.__DEV__ !== false ?
    _getInMemoryCacheMemoryInternals
    : undefined;
/**
 * For internal purposes only - please call `ApolloClient.getMemoryInternals` instead
 * @internal
 */
var getApolloCacheMemoryInternals = globalThis.__DEV__ !== false ?
    _getApolloCacheMemoryInternals
    : undefined;
function getCurrentCacheSizes() {
    // `defaultCacheSizes` is a `const enum` that will be inlined during build, so we have to reconstruct it's shape here
    var defaults = {
        parser: 1000 /* defaultCacheSizes["parser"] */,
        canonicalStringify: 1000 /* defaultCacheSizes["canonicalStringify"] */,
        print: 2000 /* defaultCacheSizes["print"] */,
        "documentTransform.cache": 2000 /* defaultCacheSizes["documentTransform.cache"] */,
        "queryManager.getDocumentInfo": 2000 /* defaultCacheSizes["queryManager.getDocumentInfo"] */,
        "PersistedQueryLink.persistedQueryHashes": 2000 /* defaultCacheSizes["PersistedQueryLink.persistedQueryHashes"] */,
        "fragmentRegistry.transform": 2000 /* defaultCacheSizes["fragmentRegistry.transform"] */,
        "fragmentRegistry.lookup": 1000 /* defaultCacheSizes["fragmentRegistry.lookup"] */,
        "fragmentRegistry.findFragmentSpreads": 4000 /* defaultCacheSizes["fragmentRegistry.findFragmentSpreads"] */,
        "cache.fragmentQueryDocuments": 1000 /* defaultCacheSizes["cache.fragmentQueryDocuments"] */,
        "removeTypenameFromVariables.getVariableDefinitions": 2000 /* defaultCacheSizes["removeTypenameFromVariables.getVariableDefinitions"] */,
        "inMemoryCache.maybeBroadcastWatch": 5000 /* defaultCacheSizes["inMemoryCache.maybeBroadcastWatch"] */,
        "inMemoryCache.executeSelectionSet": 50000 /* defaultCacheSizes["inMemoryCache.executeSelectionSet"] */,
        "inMemoryCache.executeSubSelectedArray": 10000 /* defaultCacheSizes["inMemoryCache.executeSubSelectedArray"] */,
    };
    return Object.fromEntries(Object.entries(defaults).map(function (_a) {
        var k = _a[0], v = _a[1];
        return [
            k,
            _sizes_js__WEBPACK_IMPORTED_MODULE_0__/* .cacheSizes */ .v[k] || v,
        ];
    }));
}
function _getApolloClientMemoryInternals() {
    var _a, _b, _c, _d, _e;
    if (!(globalThis.__DEV__ !== false))
        throw new Error("only supported in development mode");
    return {
        limits: getCurrentCacheSizes(),
        sizes: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ print: (_a = globalCaches.print) === null || _a === void 0 ? void 0 : _a.call(globalCaches), parser: (_b = globalCaches.parser) === null || _b === void 0 ? void 0 : _b.call(globalCaches), canonicalStringify: (_c = globalCaches.canonicalStringify) === null || _c === void 0 ? void 0 : _c.call(globalCaches), links: linkInfo(this.link), queryManager: {
                getDocumentInfo: this["queryManager"]["transformCache"].size,
                documentTransforms: transformInfo(this["queryManager"].documentTransform),
            } }, (_e = (_d = this.cache).getMemoryInternals) === null || _e === void 0 ? void 0 : _e.call(_d)),
    };
}
function _getApolloCacheMemoryInternals() {
    return {
        cache: {
            fragmentQueryDocuments: getWrapperInformation(this["getFragmentDoc"]),
        },
    };
}
function _getInMemoryCacheMemoryInternals() {
    var fragments = this.config.fragments;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _getApolloCacheMemoryInternals.apply(this)), { addTypenameDocumentTransform: transformInfo(this["addTypenameTransform"]), inMemoryCache: {
            executeSelectionSet: getWrapperInformation(this["storeReader"]["executeSelectionSet"]),
            executeSubSelectedArray: getWrapperInformation(this["storeReader"]["executeSubSelectedArray"]),
            maybeBroadcastWatch: getWrapperInformation(this["maybeBroadcastWatch"]),
        }, fragmentRegistry: {
            findFragmentSpreads: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.findFragmentSpreads),
            lookup: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.lookup),
            transform: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.transform),
        } });
}
function isWrapper(f) {
    return !!f && "dirtyKey" in f;
}
function getWrapperInformation(f) {
    return isWrapper(f) ? f.size : undefined;
}
function isDefined(value) {
    return value != null;
}
function transformInfo(transform) {
    return recurseTransformInfo(transform).map(function (cache) { return ({ cache: cache }); });
}
function recurseTransformInfo(transform) {
    return transform ?
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([
            getWrapperInformation(transform === null || transform === void 0 ? void 0 : transform["performWork"])
        ], recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["left"]), true), recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["right"]), true).filter(isDefined)
        : [];
}
function linkInfo(link) {
    var _a;
    return link ?
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([
            (_a = link === null || link === void 0 ? void 0 : link.getMemoryInternals) === null || _a === void 0 ? void 0 : _a.call(link)
        ], linkInfo(link === null || link === void 0 ? void 0 : link.left), true), linkInfo(link === null || link === void 0 ? void 0 : link.right), true).filter(isDefined)
        : [];
}
//# sourceMappingURL=getMemoryInternals.js.map

/***/ }),

/***/ 81212:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ cacheSizes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8674);
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);


var cacheSizeSymbol = Symbol.for("apollo.cacheSize");
/**
 *
 * The global cache size configuration for Apollo Client.
 *
 * @remarks
 *
 * You can directly modify this object, but any modification will
 * only have an effect on caches that are created after the modification.
 *
 * So for global caches, such as `parser`, `canonicalStringify` and `print`,
 * you might need to call `.reset` on them, which will essentially re-create them.
 *
 * Alternatively, you can set `globalThis[Symbol.for("apollo.cacheSize")]` before
 * you load the Apollo Client package:
 *
 * @example
 * ```ts
 * globalThis[Symbol.for("apollo.cacheSize")] = {
 *   parser: 100
 * } satisfies Partial<CacheSizes> // the `satisfies` is optional if using TypeScript
 * ```
 */
var cacheSizes = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .global */ .Sf[cacheSizeSymbol]);
//# sourceMappingURL=sizes.js.map

/***/ }),

/***/ 45636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ isNonEmptyArray),
/* harmony export */   c: () => (/* binding */ isArray)
/* harmony export */ });
// A version of Array.isArray that works better with readonly arrays.
var isArray = Array.isArray;
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}
//# sourceMappingURL=arrays.js.map

/***/ }),

/***/ 2619:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   En: () => (/* binding */ canUseWeakSet),
/* harmony export */   JR: () => (/* binding */ canUseLayoutEffect),
/* harmony export */   Sw: () => (/* binding */ canUseDOM),
/* harmony export */   et: () => (/* binding */ canUseWeakMap),
/* harmony export */   ol: () => (/* binding */ canUseSymbol),
/* harmony export */   uJ: () => (/* binding */ canUseAsyncIteratorSymbol)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);

var isReactNative = (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .no)(function () { return navigator.product; }) == "ReactNative";
var canUseWeakMap = typeof WeakMap === "function" &&
    !(isReactNative && !global.HermesInternal);
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
var canUseDOM = typeof (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .no)(function () { return window.document.createElement; }) === "function";
var usingJSDOM = 
// Following advice found in this comment from @domenic (maintainer of jsdom):
// https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
//
// Since we control the version of Jest and jsdom used when running Apollo
// Client tests, and that version is recent enought to include " jsdom/x.y.z"
// at the end of the user agent string, I believe this case is all we need to
// check. Testing for "Node.js" was recommended for backwards compatibility
// with older version of jsdom, but we don't have that problem.
(0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .no)(function () { return navigator.userAgent.indexOf("jsdom") >= 0; }) || false;
// Our tests should all continue to pass if we remove this !usingJSDOM
// condition, thereby allowing useLayoutEffect when using jsdom. Unfortunately,
// if we allow useLayoutEffect, then useSyncExternalStore generates many
// warnings about useLayoutEffect doing nothing on the server. While these
// warnings are harmless, this !usingJSDOM condition seems to be the best way to
// prevent them (i.e. skipping useLayoutEffect when using jsdom).
var canUseLayoutEffect = (canUseDOM || isReactNative) && !usingJSDOM;
//# sourceMappingURL=canUse.js.map

/***/ }),

/***/ 96269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ canonicalStringify)
/* harmony export */ });
/* harmony import */ var _utilities_caching_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _utilities_caching_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81212);
/* harmony import */ var _caching_getMemoryInternals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35051);


/**
 * Like JSON.stringify, but with object keys always sorted in the same order.
 *
 * To achieve performant sorting, this function uses a Map from JSON-serialized
 * arrays of keys (in any order) to sorted arrays of the same keys, with a
 * single sorted array reference shared by all permutations of the keys.
 *
 * As a drawback, this function will add a little bit more memory for every
 * object encountered that has different (more, less, a different order of) keys
 * than in the past.
 *
 * In a typical application, this extra memory usage should not play a
 * significant role, as `canonicalStringify` will be called for only a limited
 * number of object shapes, and the cache will not grow beyond a certain point.
 * But in some edge cases, this could be a problem, so we provide
 * canonicalStringify.reset() as a way of clearing the cache.
 * */
var canonicalStringify = Object.assign(function canonicalStringify(value) {
    return JSON.stringify(value, stableObjectReplacer);
}, {
    reset: function () {
        // Clearing the sortingMap will reclaim all cached memory, without
        // affecting the logical results of canonicalStringify, but potentially
        // sacrificing performance until the cache is refilled.
        sortingMap = new _utilities_caching_index_js__WEBPACK_IMPORTED_MODULE_0__/* .AutoCleanedStrongCache */ .V(_utilities_caching_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cacheSizes */ .v.canonicalStringify || 1000 /* defaultCacheSizes.canonicalStringify */);
    },
});
if (globalThis.__DEV__ !== false) {
    (0,_caching_getMemoryInternals_js__WEBPACK_IMPORTED_MODULE_2__/* .registerGlobalCache */ .D_)("canonicalStringify", function () { return sortingMap.size; });
}
// Values are JSON-serialized arrays of object keys (in any order), and values
// are sorted arrays of the same keys.
var sortingMap;
canonicalStringify.reset();
// The JSON.stringify function takes an optional second argument called a
// replacer function. This function is called for each key-value pair in the
// object being stringified, and its return value is used instead of the
// original value. If the replacer function returns a new value, that value is
// stringified as JSON instead of the original value of the property.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter
function stableObjectReplacer(key, value) {
    if (value && typeof value === "object") {
        var proto = Object.getPrototypeOf(value);
        // We don't want to mess with objects that are not "plain" objects, which
        // means their prototype is either Object.prototype or null. This check also
        // prevents needlessly rearranging the indices of arrays.
        if (proto === Object.prototype || proto === null) {
            var keys = Object.keys(value);
            // If keys is already sorted, let JSON.stringify serialize the original
            // value instead of creating a new object with keys in the same order.
            if (keys.every(everyKeyInOrder))
                return value;
            var unsortedKey = JSON.stringify(keys);
            var sortedKeys = sortingMap.get(unsortedKey);
            if (!sortedKeys) {
                keys.sort();
                var sortedKey = JSON.stringify(keys);
                // Checking for sortedKey in the sortingMap allows us to share the same
                // sorted array reference for all permutations of the same set of keys.
                sortedKeys = sortingMap.get(sortedKey) || keys;
                sortingMap.set(unsortedKey, sortedKeys);
                sortingMap.set(sortedKey, sortedKeys);
            }
            var sortedObject_1 = Object.create(proto);
            // Reassigning the keys in sorted order will cause JSON.stringify to
            // serialize them in sorted order.
            sortedKeys.forEach(function (key) {
                sortedObject_1[key] = value[key];
            });
            return sortedObject_1;
        }
    }
    return value;
}
// Since everything that happens in stableObjectReplacer benefits from being as
// efficient as possible, we use a static function as the callback for
// keys.every in order to test if the provided keys are already sorted without
// allocating extra memory for a callback.
function everyKeyInOrder(key, i, keys) {
    return i === 0 || keys[i - 1] <= key;
}
//# sourceMappingURL=canonicalStringify.js.map

/***/ }),

/***/ 91495:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ cloneDeep)
/* harmony export */ });
var toString = Object.prototype.toString;
/**
 * Deeply clones a value to create a new instance.
 */
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map();
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map();
            if (seen.has(val))
                return seen.get(val);
            // High fidelity polyfills of Object.create and Object.getPrototypeOf are
            // possible in all JS environments, so we will assume they exist/work.
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),

/***/ 87945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ compact)
/* harmony export */ });
/**
 * Merges the provided objects shallowly and removes
 * all properties with an `undefined` value
 */
function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}
//# sourceMappingURL=compact.js.map

/***/ }),

/***/ 59599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getGraphQLErrorsFromResult),
/* harmony export */   t: () => (/* binding */ graphQLResultHasError)
/* harmony export */ });
/* harmony import */ var _arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45636);
/* harmony import */ var _incrementalResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56453);


function graphQLResultHasError(result) {
    var errors = getGraphQLErrorsFromResult(result);
    return (0,_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonEmptyArray */ .E)(errors);
}
function getGraphQLErrorsFromResult(result) {
    var graphQLErrors = (0,_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonEmptyArray */ .E)(result.errors) ? result.errors.slice(0) : [];
    if ((0,_incrementalResult_js__WEBPACK_IMPORTED_MODULE_1__/* .isExecutionPatchIncrementalResult */ .ST)(result) &&
        (0,_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonEmptyArray */ .E)(result.incremental)) {
        result.incremental.forEach(function (incrementalResult) {
            if (incrementalResult.errors) {
                graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
            }
        });
    }
    return graphQLErrors;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),

/***/ 98170:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ makeUniqueId)
/* harmony export */ });
var prefixCounts = new Map();
// These IDs won't be globally unique, but they will be unique within this
// process, thanks to the counter, and unguessable thanks to the random suffix.
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
//# sourceMappingURL=makeUniqueId.js.map

/***/ }),

/***/ 21469:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ maybeDeepFreeze)
/* harmony export */ });
/* unused harmony export deepFreeze */
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90075);

function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonNullObject */ .U)(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonNullObject */ .U)(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (globalThis.__DEV__ !== false && !Object.isFrozen(obj)) {
        try {
            Object.freeze(obj);
        }
        catch (e) {
            // Some types like Uint8Array and Node.js's Buffer cannot be frozen, but
            // they all throw a TypeError when you try, so we re-throw any exceptions
            // that are not TypeErrors, since that would be unexpected.
            if (e instanceof TypeError)
                return null;
            throw e;
        }
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (globalThis.__DEV__ !== false) {
        deepFreeze(obj);
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),

/***/ 92922:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D9: () => (/* binding */ mergeDeep),
/* harmony export */   IM: () => (/* binding */ mergeDeepArray),
/* harmony export */   ZI: () => (/* binding */ DeepMerger)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8674);
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90075);


var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
// In almost any situation where you could succeed in getting the
// TypeScript compiler to infer a tuple type for the sources array, you
// could just use mergeDeep instead of mergeDeepArray, so instead of
// trying to convert T[] to an intersection type we just infer the array
// element type, which works perfectly when the sources array has a
// consistent element type.
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = /** @class */ (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = _objects_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonNullObject */ .U;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonNullObject */ .U)(source) && (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonNullObject */ .U)(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([target,
                            source,
                            sourceKey], context, false));
                        // A well-implemented reconciler may return targetValue to indicate
                        // the merge changed nothing about the structure of the target.
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    // If there is no collision, the target can safely share memory with
                    // the source, and the recursion can terminate here.
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        // If source (or target) is not an object, let source replace target.
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonNullObject */ .U)(value)) {
            if (!this.pastCopies.has(value)) {
                if (Array.isArray(value)) {
                    value = value.slice(0);
                }
                else {
                    value = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ __proto__: Object.getPrototypeOf(value) }, value);
                }
                this.pastCopies.add(value);
            }
        }
        return value;
    };
    return DeepMerger;
}());

//# sourceMappingURL=mergeDeep.js.map

/***/ }),

/***/ 60144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ mergeOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8674);
/* harmony import */ var _compact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87945);


function mergeOptions(defaults, options) {
    return (0,_compact_js__WEBPACK_IMPORTED_MODULE_0__/* .compact */ .o)(defaults, options, options.variables && {
        variables: (0,_compact_js__WEBPACK_IMPORTED_MODULE_0__/* .compact */ .o)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (defaults && defaults.variables)), options.variables)),
    });
}
//# sourceMappingURL=mergeOptions.js.map

/***/ }),

/***/ 3813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ stringifyForDisplay)
/* harmony export */ });
/* harmony import */ var _makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98170);

function stringifyForDisplay(value, space) {
    if (space === void 0) { space = 0; }
    var undefId = (0,_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__/* .makeUniqueId */ .v)("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }, space)
        .split(JSON.stringify(undefId))
        .join("<undefined>");
}
//# sourceMappingURL=stringifyForDisplay.js.map

/***/ }),

/***/ 37008:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83687);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .n)(function () { return globalThis; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .n)(function () { return window; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .n)(function () { return self; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .n)(function () { return global; }) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
(0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .n)(function () {
    return _maybe_js__WEBPACK_IMPORTED_MODULE_0__/* .maybe */ .n.constructor("return this")();
}));
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 67235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V1: () => (/* binding */ invariant),
/* harmony export */   vA: () => (/* binding */ newInvariantError)
/* harmony export */ });
/* unused harmony export ApolloErrorMessageHandler */
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72232);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32816);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37008);
/* harmony import */ var _common_stringifyForDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3813);




function wrap(fn) {
    return function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof message === "number") {
            var arg0 = message;
            message = getHandledErrorMsg(arg0);
            if (!message) {
                message = getFallbackErrorMsg(arg0, args);
                args = [];
            }
        }
        fn.apply(void 0, [message].concat(args));
    };
}
var invariant = Object.assign(function invariant(condition, message) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (!condition) {
        (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(condition, getHandledErrorMsg(message, args) || getFallbackErrorMsg(message, args));
    }
}, {
    debug: wrap(ts_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.debug),
    log: wrap(ts_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.log),
    warn: wrap(ts_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.warn),
    error: wrap(ts_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.error),
});
/**
 * Returns an InvariantError.
 *
 * `message` can only be a string, a concatenation of strings, or a ternary statement
 * that results in a string. This will be enforced on build, where the message will
 * be replaced with a message number.
 * String substitutions with %s are supported and will also return
 * pretty-stringified objects.
 * Excess `optionalParams` will be swallowed.
 */
function newInvariantError(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    return new ts_invariant__WEBPACK_IMPORTED_MODULE_0__/* .InvariantError */ .zU(getHandledErrorMsg(message, optionalParams) ||
        getFallbackErrorMsg(message, optionalParams));
}
var ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + _version_js__WEBPACK_IMPORTED_MODULE_2__/* .version */ .r);
function stringify(arg) {
    if (typeof arg == "string") {
        return arg;
    }
    try {
        return (0,_common_stringifyForDisplay_js__WEBPACK_IMPORTED_MODULE_3__/* .stringifyForDisplay */ .p)(arg, 2).slice(0, 1000);
    }
    catch (_a) {
        return "<non-serializable>";
    }
}
function getHandledErrorMsg(message, messageArgs) {
    if (messageArgs === void 0) { messageArgs = []; }
    if (!message)
        return;
    return (_global_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[ApolloErrorMessageHandler] &&
        _global_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[ApolloErrorMessageHandler](message, messageArgs.map(stringify)));
}
function getFallbackErrorMsg(message, messageArgs) {
    if (messageArgs === void 0) { messageArgs = []; }
    if (!message)
        return;
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
        version: _version_js__WEBPACK_IMPORTED_MODULE_2__/* .version */ .r,
        message: message,
        args: messageArgs.map(stringify),
    })));
}

//# sourceMappingURL=invariantWrappers.js.map

/***/ }),

/***/ 29993:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ DocumentTransform)
/* harmony export */ });
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54834);
/* harmony import */ var _common_canUse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2619);
/* harmony import */ var _getFromAST_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84824);
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52687);
/* harmony import */ var _wry_caches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11744);
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1161);
/* harmony import */ var _caching_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81212);







function identity(document) {
    return document;
}
var DocumentTransform = /** @class */ (function () {
    function DocumentTransform(transform, options) {
        if (options === void 0) { options = Object.create(null); }
        this.resultCache = _common_canUse_js__WEBPACK_IMPORTED_MODULE_3__/* .canUseWeakSet */ .En ? new WeakSet() : new Set();
        this.transform = transform;
        if (options.getCacheKey) {
            // Override default `getCacheKey` function, which returns [document].
            this.getCacheKey = options.getCacheKey;
        }
        this.cached = options.cache !== false;
        this.resetCache();
    }
    // This default implementation of getCacheKey can be overridden by providing
    // options.getCacheKey to the DocumentTransform constructor. In general, a
    // getCacheKey function may either return an array of keys (often including
    // the document) to be used as a cache key, or undefined to indicate the
    // transform for this document should not be cached.
    DocumentTransform.prototype.getCacheKey = function (document) {
        return [document];
    };
    DocumentTransform.identity = function () {
        // No need to cache this transform since it just returns the document
        // unchanged. This should save a bit of memory that would otherwise be
        // needed to populate the `documentCache` of this transform.
        return new DocumentTransform(identity, { cache: false });
    };
    DocumentTransform.split = function (predicate, left, right) {
        if (right === void 0) { right = DocumentTransform.identity(); }
        return Object.assign(new DocumentTransform(function (document) {
            var documentTransform = predicate(document) ? left : right;
            return documentTransform.transformDocument(document);
        }, 
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: false }), { left: left, right: right });
    };
    /**
     * Resets the internal cache of this transform, if it has one.
     */
    DocumentTransform.prototype.resetCache = function () {
        var _this = this;
        if (this.cached) {
            var stableCacheKeys_1 = new _wry_trie__WEBPACK_IMPORTED_MODULE_0__/* .Trie */ .b(_common_canUse_js__WEBPACK_IMPORTED_MODULE_3__/* .canUseWeakMap */ .et);
            this.performWork = (0,optimism__WEBPACK_IMPORTED_MODULE_2__/* .wrap */ .LV)(DocumentTransform.prototype.performWork.bind(this), {
                makeCacheKey: function (document) {
                    var cacheKeys = _this.getCacheKey(document);
                    if (cacheKeys) {
                        (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_1__/* .invariant */ .V1)(Array.isArray(cacheKeys), 77);
                        return stableCacheKeys_1.lookupArray(cacheKeys);
                    }
                },
                max: _caching_index_js__WEBPACK_IMPORTED_MODULE_4__/* .cacheSizes */ .v["documentTransform.cache"],
                cache: (_wry_caches__WEBPACK_IMPORTED_MODULE_5__/* .WeakCache */ .l),
            });
        }
    };
    DocumentTransform.prototype.performWork = function (document) {
        (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_6__/* .checkDocument */ .sw)(document);
        return this.transform(document);
    };
    DocumentTransform.prototype.transformDocument = function (document) {
        // If a user passes an already transformed result back to this function,
        // immediately return it.
        if (this.resultCache.has(document)) {
            return document;
        }
        var transformedDocument = this.performWork(document);
        this.resultCache.add(transformedDocument);
        return transformedDocument;
    };
    DocumentTransform.prototype.concat = function (otherTransform) {
        var _this = this;
        return Object.assign(new DocumentTransform(function (document) {
            return otherTransform.transformDocument(_this.transformDocument(document));
        }, 
        // Reasonably assume both transforms handle their own caching
        { cache: false }), {
            left: this,
            right: otherTransform,
        });
    };
    return DocumentTransform;
}());

//# sourceMappingURL=DocumentTransform.js.map

/***/ }),

/***/ 65215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HQ: () => (/* binding */ getFragmentFromSelection),
/* harmony export */   JG: () => (/* binding */ createFragmentMap),
/* harmony export */   ct: () => (/* binding */ getFragmentQueryDocument),
/* harmony export */   s6: () => (/* binding */ isFullyUnmaskedOperation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8674);
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11786);



/**
 * Returns a query document which adds a single query operation that only
 * spreads the target fragment inside of it.
 *
 * So for example a document of:
 *
 * ```graphql
 * fragment foo on Foo { a b c }
 * ```
 *
 * Turns into:
 *
 * ```graphql
 * { ...foo }
 *
 * fragment foo on Foo { a b c }
 * ```
 *
 * The target fragment will either be the only fragment in the document, or a
 * fragment specified by the provided `fragmentName`. If there is more than one
 * fragment, but a `fragmentName` was not defined then an error will be thrown.
 */
function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    // Build an array of all our fragment definitions that will be used for
    // validations. We also do some validations on the other definitions in the
    // document while building this list.
    var fragments = [];
    document.definitions.forEach(function (definition) {
        // Throw an error if we encounter an operation definition because we will
        // define our own operation definition later on.
        if (definition.kind === "OperationDefinition") {
            throw (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newInvariantError */ .vA)(
                85,
                definition.operation,
                definition.name ? " named '".concat(definition.name.value, "'") : ""
            );
        }
        // Add our definition to the fragments array if it is a fragment
        // definition.
        if (definition.kind === "FragmentDefinition") {
            fragments.push(definition);
        }
    });
    // If the user did not give us a fragment name then let us try to get a
    // name from a single fragment in the definition.
    if (typeof actualFragmentName === "undefined") {
        (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(fragments.length === 1, 86, fragments.length);
        actualFragmentName = fragments[0].name.value;
    }
    // Generate a query document with an operation that simply spreads the
    // fragment inside of it.
    var query = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, document), { definitions: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([
            {
                kind: "OperationDefinition",
                // OperationTypeNode is an enum
                operation: "query",
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions, true) });
    return query;
}
// Utility function that takes a list of fragment definitions and makes a hash out of them
// that maps the name of the fragment to the fragment definition.
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case "InlineFragment":
            return selection;
        case "FragmentSpread": {
            var fragmentName = selection.name.value;
            if (typeof fragmentMap === "function") {
                return fragmentMap(fragmentName);
            }
            var fragment = fragmentMap && fragmentMap[fragmentName];
            (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(fragment, 87, fragmentName);
            return fragment || null;
        }
        default:
            return null;
    }
}
function isFullyUnmaskedOperation(document) {
    var isUnmasked = true;
    (0,graphql__WEBPACK_IMPORTED_MODULE_2__/* .visit */ .YR)(document, {
        FragmentSpread: function (node) {
            isUnmasked =
                !!node.directives &&
                    node.directives.some(function (directive) { return directive.name.value === "unmask"; });
            if (!isUnmasked) {
                return graphql__WEBPACK_IMPORTED_MODULE_2__/* .BREAK */ .sP;
            }
        },
    });
    return isUnmasked;
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ 84824:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AT: () => (/* binding */ getQueryDefinition),
/* harmony export */   E4: () => (/* binding */ getFragmentDefinition),
/* harmony export */   Vn: () => (/* binding */ getMainDefinition),
/* harmony export */   Vu: () => (/* binding */ getOperationDefinition),
/* harmony export */   n4: () => (/* binding */ getOperationName),
/* harmony export */   sw: () => (/* binding */ checkDocument),
/* harmony export */   wY: () => (/* binding */ getDefaultValues),
/* harmony export */   zK: () => (/* binding */ getFragmentDefinitions)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67194);


// Checks the document for errors and throws an exception if there is an error.
function checkDocument(doc) {
    (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(doc && doc.kind === "Document", 88);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== "FragmentDefinition"; })
        .map(function (definition) {
        if (definition.kind !== "OperationDefinition") {
            throw (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newInvariantError */ .vA)(89, definition.kind);
        }
        return definition;
    });
    (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(operations.length <= 1, 90, operations.length);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) {
        return definition.kind === "OperationDefinition";
    })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === "OperationDefinition" && !!definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
// Returns the FragmentDefinitions from a particular document as an array
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) {
        return definition.kind === "FragmentDefinition";
    });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(queryDef && queryDef.operation === "query", 91);
    return queryDef;
}
function getFragmentDefinition(doc) {
    (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(doc.kind === "Document", 92);
    (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(doc.definitions.length <= 1, 93);
    var fragmentDef = doc.definitions[0];
    (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(fragmentDef.kind === "FragmentDefinition", 94);
    return fragmentDef;
}
/**
 * Returns the first operation definition found in this document.
 * If no operation definition is found, the first fragment definition will be returned.
 * If no definitions are found, an error will be thrown.
 */
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === "OperationDefinition") {
            var operation = definition.operation;
            if (operation === "query" ||
                operation === "mutation" ||
                operation === "subscription") {
                return definition;
            }
        }
        if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
            // we do this because we want to allow multiple fragment definitions
            // to precede an operation definition.
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newInvariantError */ .vA)(95);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                (0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .valueToObjectRepresentation */ .J)(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),

/***/ 47397:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ print)
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99352);
/* harmony import */ var _caching_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(599);
/* harmony import */ var _caching_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81212);
/* harmony import */ var _caching_getMemoryInternals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35051);



var printCache;
var print = Object.assign(function (ast) {
    var result = printCache.get(ast);
    if (!result) {
        result = (0,graphql__WEBPACK_IMPORTED_MODULE_0__.print)(ast);
        printCache.set(ast, result);
    }
    return result;
}, {
    reset: function () {
        printCache = new _caching_index_js__WEBPACK_IMPORTED_MODULE_1__/* .AutoCleanedWeakCache */ .A(_caching_index_js__WEBPACK_IMPORTED_MODULE_2__/* .cacheSizes */ .v.print || 2000 /* defaultCacheSizes.print */);
    },
});
print.reset();
if (globalThis.__DEV__ !== false) {
    (0,_caching_getMemoryInternals_js__WEBPACK_IMPORTED_MODULE_3__/* .registerGlobalCache */ .D_)("print", function () { return (printCache ? printCache.size : 0); });
}
//# sourceMappingURL=print.js.map

/***/ }),

/***/ 67194:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A_: () => (/* binding */ isReference),
/* harmony export */   D$: () => (/* binding */ getTypenameFromResult),
/* harmony export */   Ii: () => (/* binding */ storeKeyNameFromField),
/* harmony export */   J: () => (/* binding */ valueToObjectRepresentation),
/* harmony export */   Kc: () => (/* binding */ isDocumentNode),
/* harmony export */   MB: () => (/* binding */ argumentsObjectFromField),
/* harmony export */   WU: () => (/* binding */ makeReference),
/* harmony export */   dt: () => (/* binding */ isField),
/* harmony export */   kd: () => (/* binding */ isInlineFragment),
/* harmony export */   o5: () => (/* binding */ getStoreKeyName),
/* harmony export */   ue: () => (/* binding */ resultKeyNameFromField)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var _common_objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90075);
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65215);
/* harmony import */ var _common_canonicalStringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96269);




function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
    return ((0,_common_objects_js__WEBPACK_IMPORTED_MODULE_1__/* .isNonNullObject */ .U)(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === "StringValue";
}
function isBooleanValue(value) {
    return value.kind === "BooleanValue";
}
function isIntValue(value) {
    return value.kind === "IntValue";
}
function isFloatValue(value) {
    return value.kind === "FloatValue";
}
function isVariable(value) {
    return value.kind === "Variable";
}
function isObjectValue(value) {
    return value.kind === "ObjectValue";
}
function isListValue(value) {
    return value.kind === "ListValue";
}
function isEnumValue(value) {
    return value.kind === "EnumValue";
}
function isNullValue(value) {
    return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newInvariantError */ .vA)(96, name.value, value.kind);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    "connection",
    "include",
    "skip",
    "client",
    "rest",
    "export",
    "nonreactive",
];
// Default stable JSON.stringify implementation used by getStoreKeyName. Can be
// updated/replaced with something better by calling
// getStoreKeyName.setStringify(newStringifyFunction).
var storeKeyNameStringify = _common_canonicalStringify_js__WEBPACK_IMPORTED_MODULE_2__/* .canonicalStringify */ .M;
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives["connection"] &&
        directives["connection"]["key"]) {
        if (directives["connection"]["filter"] &&
            directives["connection"]["filter"].length > 0) {
            var filterKeys = directives["connection"]["filter"] ?
                directives["connection"]["filter"]
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return "".concat(directives["connection"]["key"], "(").concat(storeKeyNameStringify(filteredArgs_1), ")");
        }
        else {
            return directives["connection"]["key"];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        // We can't use `JSON.stringify` here since it's non-deterministic,
        // and can lead to different store key names being created even though
        // the `args` object used during creation has the same properties/values.
        var stringifiedArgs = storeKeyNameStringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@".concat(key, "(").concat(storeKeyNameStringify(directives[key]), ")");
            }
            else {
                completeFieldName += "@".concat(key);
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = storeKeyNameStringify;
        storeKeyNameStringify = s;
        return previous;
    },
});
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    var fragments;
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === "__typename") {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else if (fragments) {
            fragments.push(selection);
        }
        else {
            fragments = [selection];
        }
    }
    if (typeof result.__typename === "string") {
        return result.__typename;
    }
    if (fragments) {
        for (var _b = 0, fragments_1 = fragments; _b < fragments_1.length; _b++) {
            var selection = fragments_1[_b];
            var typename = getTypenameFromResult(result, (0,_fragments_js__WEBPACK_IMPORTED_MODULE_3__/* .getFragmentFromSelection */ .HQ)(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === "string") {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === "Field";
}
function isInlineFragment(selection) {
    return selection.kind === "InlineFragment";
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),

/***/ 82562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Concast)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8674);
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73401);
/* harmony import */ var _iteration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26502);
/* harmony import */ var _subclassing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21291);




function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// A Concast<T> observable concatenates the given sources into a single
// non-overlapping sequence of Ts, automatically unwrapping any promises,
// and broadcasts the T elements of that sequence to any number of
// subscribers, all without creating a bunch of intermediary Observable
// wrapper objects.
//
// Even though any number of observers can subscribe to the Concast, each
// source observable is guaranteed to receive at most one subscribe call,
// and the results are multicast to all observers.
//
// In addition to broadcasting every next/error message to this.observers,
// the Concast stores the most recent message using this.latest, so any
// new observers can immediately receive the latest message, even if it
// was originally delivered in the past. This behavior means we can assume
// every active observer in this.observers has received the same most
// recent message.
//
// With the exception of this.latest replay, a Concast is a "hot"
// observable in the sense that it does not replay past results from the
// beginning of time for each new observer.
//
// Could we have used some existing RxJS class instead? Concast<T> is
// similar to a BehaviorSubject<T>, because it is multicast and redelivers
// the latest next/error message to new subscribers. Unlike Subject<T>,
// Concast<T> does not expose an Observer<T> interface (this.handlers is
// intentionally private), since Concast<T> gets its inputs from the
// concatenated sources. If we ever switch to RxJS, there may be some
// value in reusing their code, but for now we use zen-observable, which
// does not contain any Subject implementations.
var Concast = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Concast, _super);
    // Not only can the individual elements of the iterable be promises, but
    // also the iterable itself can be wrapped in a promise.
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        // Active observers receiving broadcast messages. Thanks to this.latest,
        // we can assume all observers in this Set have received the same most
        // recent message, though possibly at different times in the past.
        _this.observers = new Set();
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        // Bound handler functions that can be reused for every internal
        // subscription.
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    _this.notify("next", result);
                    (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__/* .iterateObserversSafely */ .w)(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    // Delay unsubscribing from the underlying subscription slightly,
                    // so that immediately subscribing another observer can keep the
                    // subscription active.
                    if (sub)
                        setTimeout(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    _this.notify("error", error);
                    (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__/* .iterateObserversSafely */ .w)(_this.observers, "error", error);
                }
            },
            complete: function () {
                var _a = _this, sub = _a.sub, _b = _a.sources, sources = _b === void 0 ? [] : _b;
                if (sub !== null) {
                    // If complete is called before concast.start, this.sources may be
                    // undefined, so we use a default value of [] for sources. That works
                    // here because it falls into the if (!value) {...} block, which
                    // appropriately terminates the Concast, even if this.sources might
                    // eventually have been initialized to a non-empty array.
                    var value = sources.shift();
                    if (!value) {
                        if (sub)
                            setTimeout(function () { return sub.unsubscribe(); });
                        _this.sub = null;
                        if (_this.latest && _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        _this.notify("complete");
                        // We do not store this.latest = ["complete"], because doing so
                        // discards useful information about the previous next (or
                        // error) message. Instead, if new observers subscribe after
                        // this Concast has completed, they will receive the final
                        // 'next' message (unless there was an error) immediately
                        // followed by a 'complete' message (see addObserver).
                        (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__/* .iterateObserversSafely */ .w)(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return (_this.sub = obs.subscribe(_this.handlers)); }, _this.handlers.error);
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.nextResultListeners = new Set();
        // A public way to abort observation and broadcast.
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.error(reason);
        };
        // Suppress rejection warnings for this.promise, since it's perfectly
        // acceptable to pay no attention to this.promise if you're consuming
        // the results through the normal observable API.
        _this.promise.catch(function (_) { });
        // If someone accidentally tries to create a Concast using a subscriber
        // function, recover by creating an Observable from that subscriber and
        // using it as the source.
        if (typeof sources === "function") {
            sources = [new _Observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .c(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        // In practice, sources is most often simply an Array of observables.
        // TODO Consider using sources[Symbol.iterator]() to take advantage
        // of the laziness of non-Array iterables.
        this.sources = Array.from(sources);
        // Calling this.handlers.complete() kicks off consumption of the first
        // source observable. It's tempting to do this step lazily in
        // addObserver, but this.promise can be accessed without calling
        // addObserver, so consumption needs to begin eagerly.
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            // If the subscription is already closed, and the last message was
            // a 'next' message, simulate delivery of the final 'complete'
            // message again.
            if (this.sub === null && nextOrError === "next" && observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            // Immediately deliver the most recent message, so we can always
            // be sure all observers have the latest information.
            this.deliverLastMessage(observer);
            this.observers.add(observer);
        }
    };
    Concast.prototype.removeObserver = function (observer) {
        if (this.observers.delete(observer) && this.observers.size < 1) {
            // In case there are still any listeners in this.nextResultListeners, and
            // no error or completion has been broadcast yet, make sure those
            // observers have a chance to run and then remove themselves from
            // this.observers.
            this.handlers.complete();
        }
    };
    Concast.prototype.notify = function (method, arg) {
        var nextResultListeners = this.nextResultListeners;
        if (nextResultListeners.size) {
            // Replacing this.nextResultListeners first ensures it does not grow while
            // we are iterating over it, potentially leading to infinite loops.
            this.nextResultListeners = new Set();
            nextResultListeners.forEach(function (listener) { return listener(method, arg); });
        }
    };
    // We need a way to run callbacks just *before* the next result (or error or
    // completion) is delivered by this Concast, so we can be sure any code that
    // runs as a result of delivering that result/error observes the effects of
    // running the callback(s). It was tempting to reuse the Observer type instead
    // of introducing NextResultListener, but that messes with the sizing and
    // maintenance of this.observers, and ends up being more code overall.
    Concast.prototype.beforeNext = function (callback) {
        var called = false;
        this.nextResultListeners.add(function (method, arg) {
            if (!called) {
                called = true;
                callback(method, arg);
            }
        });
    };
    return Concast;
}(_Observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .c));

// Necessary because the Concast constructor has a different signature
// than the Observable constructor.
(0,_subclassing_js__WEBPACK_IMPORTED_MODULE_3__/* .fixObservableSubclass */ .r)(Concast);
//# sourceMappingURL=Concast.js.map

/***/ }),

/***/ 83851:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ asyncMap)
/* harmony export */ });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73401);

// Like Observable.prototype.map, except that the mapping function can
// optionally return a Promise (or be async).
function asyncMap(observable, mapFn, catchFn) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(function (observer) {
        var promiseQueue = {
            // Normally we would initialize promiseQueue to Promise.resolve(), but
            // in this case, for backwards compatibility, we need to be careful to
            // invoke the first callback synchronously.
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, key) {
            return function (arg) {
                if (examiner) {
                    var both = function () {
                        // If the observer is closed, we don't want to continue calling the
                        // mapping function - it's result will be swallowed anyways.
                        return observer.closed ?
                            /* will be swallowed */ 0
                            : examiner(arg);
                    };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) { return observer.next(result); }, function (error) { return observer.error(error); });
                }
                else {
                    observer[key](arg);
                }
            };
        }
        var handler = {
            next: makeCallback(mapFn, "next"),
            error: makeCallback(catchFn, "error"),
            complete: function () {
                // no need to reassign `promiseQueue`, after `observer.complete`,
                // the observer will be closed and short-circuit everything anyways
                /*promiseQueue = */ promiseQueue.then(function () { return observer.complete(); });
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}
//# sourceMappingURL=asyncMap.js.map

/***/ }),

/***/ 26502:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ iterateObserversSafely)
/* harmony export */ });
function iterateObserversSafely(observers, method, argument) {
    // In case observers is modified during iteration, we need to commit to the
    // original elements, which also provides an opportunity to filter them down
    // to just the observers with the given method.
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}
//# sourceMappingURL=iteration.js.map

/***/ }),

/***/ 21291:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ fixObservableSubclass)
/* harmony export */ });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73401);
/* harmony import */ var _common_canUse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2619);


// Generic implementations of Observable.prototype methods like map and
// filter need to know how to create a new Observable from an Observable
// subclass (like Concast or ObservableQuery). Those methods assume
// (perhaps unwisely?) that they can call the subtype's constructor with a
// Subscriber function, even though the subclass constructor might expect
// different parameters. Defining this static Symbol.species property on
// the subclass is a hint to generic Observable code to use the default
// constructor instead of trying to do `new Subclass(observer => ...)`.
function fixObservableSubclass(subclass) {
    function set(key) {
        // Object.defineProperty is necessary because the Symbol.species
        // property is a getter by default in modern JS environments, so we
        // can't assign to it with a normal assignment expression.
        Object.defineProperty(subclass, key, { value: _Observable_js__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c });
    }
    if (_common_canUse_js__WEBPACK_IMPORTED_MODULE_1__/* .canUseSymbol */ .ol && Symbol.species) {
        set(Symbol.species);
    }
    // The "@@species" string is used as a fake Symbol.species value in some
    // polyfill systems (including the SymbolSpecies variable used by
    // zen-observable), so we should set it as well, to be safe.
    set("@@species");
    return subclass;
}
//# sourceMappingURL=subclassing.js.map

/***/ }),

/***/ 59019:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ preventUnhandledRejection)
/* harmony export */ });
function preventUnhandledRejection(promise) {
    promise.catch(function () { });
    return promise;
}
//# sourceMappingURL=preventUnhandledRejection.js.map

/***/ }),

/***/ 32816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ version)
/* harmony export */ });
var version = "3.13.9";
//# sourceMappingURL=version.js.map

/***/ }),

/***/ 37783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ StrongCache)
/* harmony export */ });
function defaultDispose() { }
class StrongCache {
    constructor(max = Infinity, dispose = defaultDispose) {
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    has(key) {
        return this.map.has(key);
    }
    get(key) {
        const node = this.getNode(key);
        return node && node.value;
    }
    get size() {
        return this.map.size;
    }
    getNode(key) {
        const node = this.map.get(key);
        if (node && node !== this.newest) {
            const { older, newer } = node;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    }
    set(key, value) {
        let node = this.getNode(key);
        if (node) {
            return node.value = value;
        }
        node = {
            key,
            value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    }
    clean() {
        while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
        }
    }
    delete(key) {
        const node = this.map.get(key);
        if (node) {
            if (node === this.newest) {
                this.newest = node.older;
            }
            if (node === this.oldest) {
                this.oldest = node.newer;
            }
            if (node.newer) {
                node.newer.older = node.older;
            }
            if (node.older) {
                node.older.newer = node.newer;
            }
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=strong.js.map

/***/ }),

/***/ 11744:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ WeakCache)
/* harmony export */ });
function noop() { }
const defaultDispose = noop;
const _WeakRef = typeof WeakRef !== "undefined"
    ? WeakRef
    : function (value) {
        return { deref: () => value };
    };
const _WeakMap = typeof WeakMap !== "undefined" ? WeakMap : Map;
const _FinalizationRegistry = typeof FinalizationRegistry !== "undefined"
    ? FinalizationRegistry
    : function () {
        return {
            register: noop,
            unregister: noop,
        };
    };
const finalizationBatchSize = 10024;
class WeakCache {
    constructor(max = Infinity, dispose = defaultDispose) {
        this.max = max;
        this.dispose = dispose;
        this.map = new _WeakMap();
        this.newest = null;
        this.oldest = null;
        this.unfinalizedNodes = new Set();
        this.finalizationScheduled = false;
        this.size = 0;
        this.finalize = () => {
            const iterator = this.unfinalizedNodes.values();
            for (let i = 0; i < finalizationBatchSize; i++) {
                const node = iterator.next().value;
                if (!node)
                    break;
                this.unfinalizedNodes.delete(node);
                const key = node.key;
                delete node.key;
                node.keyRef = new _WeakRef(key);
                this.registry.register(key, node, node);
            }
            if (this.unfinalizedNodes.size > 0) {
                queueMicrotask(this.finalize);
            }
            else {
                this.finalizationScheduled = false;
            }
        };
        this.registry = new _FinalizationRegistry(this.deleteNode.bind(this));
    }
    has(key) {
        return this.map.has(key);
    }
    get(key) {
        const node = this.getNode(key);
        return node && node.value;
    }
    getNode(key) {
        const node = this.map.get(key);
        if (node && node !== this.newest) {
            const { older, newer } = node;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    }
    set(key, value) {
        let node = this.getNode(key);
        if (node) {
            return (node.value = value);
        }
        node = {
            key,
            value,
            newer: null,
            older: this.newest,
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.scheduleFinalization(node);
        this.map.set(key, node);
        this.size++;
        return node.value;
    }
    clean() {
        while (this.oldest && this.size > this.max) {
            this.deleteNode(this.oldest);
        }
    }
    deleteNode(node) {
        if (node === this.newest) {
            this.newest = node.older;
        }
        if (node === this.oldest) {
            this.oldest = node.newer;
        }
        if (node.newer) {
            node.newer.older = node.older;
        }
        if (node.older) {
            node.older.newer = node.newer;
        }
        this.size--;
        const key = node.key || (node.keyRef && node.keyRef.deref());
        this.dispose(node.value, key);
        if (!node.keyRef) {
            this.unfinalizedNodes.delete(node);
        }
        else {
            this.registry.unregister(node);
        }
        if (key)
            this.map.delete(key);
    }
    delete(key) {
        const node = this.map.get(key);
        if (node) {
            this.deleteNode(node);
            return true;
        }
        return false;
    }
    scheduleFinalization(node) {
        this.unfinalizedNodes.add(node);
        if (!this.finalizationScheduled) {
            this.finalizationScheduled = true;
            queueMicrotask(this.finalize);
        }
    }
}
//# sourceMappingURL=weak.js.map

/***/ }),

/***/ 15381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   L: () => (/* binding */ equal)
/* harmony export */ });
const { toString, hasOwnProperty } = Object.prototype;
const fnToStr = Function.prototype.toString;
const previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
// Allow default imports as well.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equal);
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    const aTag = toString.call(a);
    const bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            const aKeys = definedKeys(a);
            const bKeys = definedKeys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            const keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (let k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (let k = 0; k < keyCount; ++k) {
                const key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == `${b}`;
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            const aIterator = a.entries();
            const isMap = aTag === '[object Map]';
            while (true) {
                const info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                const [aKey, aValue] = info.value;
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
        case '[object Uint16Array]':
        case '[object Uint8Array]': // Buffer, in Node.js.
        case '[object Uint32Array]':
        case '[object Int32Array]':
        case '[object Int8Array]':
        case '[object Int16Array]':
        case '[object ArrayBuffer]':
            // DataView doesn't need these conversions, but the equality check is
            // otherwise the same.
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // Fall through...
        case '[object DataView]': {
            let len = a.byteLength;
            if (len === b.byteLength) {
                while (len-- && a[len] === b[len]) {
                    // Keep looping as long as the bytes are equal.
                }
            }
            return len === -1;
        }
        case '[object AsyncFunction]':
        case '[object GeneratorFunction]':
        case '[object AsyncGeneratorFunction]':
        case '[object Function]': {
            const aCode = fnToStr.call(a);
            if (aCode !== fnToStr.call(b)) {
                return false;
            }
            // We consider non-native functions equal if they have the same code
            // (native functions require === because their code is censored).
            // Note that this behavior is not entirely sound, since !== function
            // objects with the same code can behave differently depending on
            // their closure scope. However, any function can behave differently
            // depending on the values of its input arguments (including this)
            // and its calling context (including its closure scope), even
            // though the function object is === to itself; and it is entirely
            // possible for functions that are not === to behave exactly the
            // same under all conceivable circumstances. Because none of these
            // factors are statically decidable in JavaScript, JS function
            // equality is not well-defined. This ambiguity allows us to
            // consider the best possible heuristic among various imperfect
            // options, and equating non-native functions that have the same
            // code has enormous practical benefits, such as when comparing
            // functions that are repeatedly passed as fresh function
            // expressions within objects that are otherwise deeply equal. Since
            // any function created from the same syntactic expression (in the
            // same code location) will always stringify to the same code
            // according to fnToStr.call, we can reasonably expect these
            // repeatedly passed function expressions to have the same code, and
            // thus behave "the same" (with all the caveats mentioned above),
            // even though the runtime function objects are !== to one another.
            return !endsWith(aCode, nativeCodeSuffix);
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function definedKeys(obj) {
    // Remember that the second argument to Array.prototype.filter will be
    // used as `this` within the callback function.
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
const nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    const fromIndex = full.length - suffix.length;
    return fromIndex >= 0 &&
        full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    let bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 54834:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Trie)
/* harmony export */ });
// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
const defaultMakeData = () => Object.create(null);
// Useful for processing arguments objects as well as arrays.
const { forEach, slice } = Array.prototype;
const { hasOwnProperty } = Object.prototype;
class Trie {
    constructor(weakness = true, makeData = defaultMakeData) {
        this.weakness = weakness;
        this.makeData = makeData;
    }
    lookup() {
        return this.lookupArray(arguments);
    }
    lookupArray(array) {
        let node = this;
        forEach.call(array, key => node = node.getChildTrie(key));
        return hasOwnProperty.call(node, "data")
            ? node.data
            : node.data = this.makeData(slice.call(array));
    }
    peek() {
        return this.peekArray(arguments);
    }
    peekArray(array) {
        let node = this;
        for (let i = 0, len = array.length; node && i < len; ++i) {
            const map = node.mapFor(array[i], false);
            node = map && map.get(array[i]);
        }
        return node && node.data;
    }
    remove() {
        return this.removeArray(arguments);
    }
    removeArray(array) {
        let data;
        if (array.length) {
            const head = array[0];
            const map = this.mapFor(head, false);
            const child = map && map.get(head);
            if (child) {
                data = child.removeArray(slice.call(array, 1));
                if (!child.data && !child.weak && !(child.strong && child.strong.size)) {
                    map.delete(head);
                }
            }
        }
        else {
            data = this.data;
            delete this.data;
        }
        return data;
    }
    getChildTrie(key) {
        const map = this.mapFor(key, true);
        let child = map.get(key);
        if (!child)
            map.set(key, child = new Trie(this.weakness, this.makeData));
        return child;
    }
    mapFor(key, create) {
        return this.weakness && isObjRef(key)
            ? this.weak || (create ? this.weak = new WeakMap : void 0)
            : this.strong || (create ? this.strong = new Map : void 0);
    }
}
function isObjRef(value) {
    switch (typeof value) {
        case "object":
            if (value === null)
                break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1161:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DX: () => (/* reexport */ Slot),
  yN: () => (/* reexport */ dep),
  LV: () => (/* binding */ wrap)
});

// UNUSED EXPORTS: KeyTrie, asyncFromGen, bindContext, defaultMakeCacheKey, noContext, nonReactive, setTimeout

;// ./node_modules/optimism/node_modules/@wry/trie/lib/index.js
// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
const defaultMakeData = () => Object.create(null);
// Useful for processing arguments objects as well as arrays.
const { forEach, slice } = Array.prototype;
const { hasOwnProperty: lib_hasOwnProperty } = Object.prototype;
class Trie {
    constructor(weakness = true, makeData = defaultMakeData) {
        this.weakness = weakness;
        this.makeData = makeData;
    }
    lookup(...array) {
        return this.lookupArray(array);
    }
    lookupArray(array) {
        let node = this;
        forEach.call(array, key => node = node.getChildTrie(key));
        return lib_hasOwnProperty.call(node, "data")
            ? node.data
            : node.data = this.makeData(slice.call(array));
    }
    peek(...array) {
        return this.peekArray(array);
    }
    peekArray(array) {
        let node = this;
        for (let i = 0, len = array.length; node && i < len; ++i) {
            const map = this.weakness && isObjRef(array[i]) ? node.weak : node.strong;
            node = map && map.get(array[i]);
        }
        return node && node.data;
    }
    getChildTrie(key) {
        const map = this.weakness && isObjRef(key)
            ? this.weak || (this.weak = new WeakMap())
            : this.strong || (this.strong = new Map());
        let child = map.get(key);
        if (!child)
            map.set(key, child = new Trie(this.weakness, this.makeData));
        return child;
    }
}
function isObjRef(value) {
    switch (typeof value) {
        case "object":
            if (value === null)
                break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@wry/caches/lib/strong.js
var strong = __webpack_require__(37783);
;// ./node_modules/@wry/context/lib/slot.js
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
let currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
const MISSING_VALUE = {};
let idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
const makeSlotClass = () => class Slot {
    constructor() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2),
        ].join(":");
    }
    hasValue() {
        for (let context = currentContext; context; context = context.parent) {
            // We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context.slots) {
                const value = context.slots[this.id];
                if (value === MISSING_VALUE)
                    break;
                if (context !== currentContext) {
                    // Cache the value in currentContext.slots so the next lookup will
                    // be faster. This caching is safe because the tree of contexts and
                    // the values of the slots are logically immutable.
                    currentContext.slots[this.id] = value;
                }
                return true;
            }
        }
        if (currentContext) {
            // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
    }
    getValue() {
        if (this.hasValue()) {
            return currentContext.slots[this.id];
        }
    }
    withValue(value, callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        const slots = {
            __proto__: null,
            [this.id]: value,
        };
        const parent = currentContext;
        currentContext = { parent, slots };
        try {
            // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.
            return callback.apply(thisArg, args);
        }
        finally {
            currentContext = parent;
        }
    }
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    static bind(callback) {
        const context = currentContext;
        return function () {
            const saved = currentContext;
            try {
                currentContext = context;
                return callback.apply(this, arguments);
            }
            finally {
                currentContext = saved;
            }
        };
    }
    // Immediately run a callback function without any captured context.
    static noContext(callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        if (currentContext) {
            const saved = currentContext;
            try {
                currentContext = null;
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            }
            finally {
                currentContext = saved;
            }
        }
        else {
            return callback.apply(thisArg, args);
        }
    }
};
function maybe(fn) {
    try {
        return fn();
    }
    catch (ignored) { }
}
// We store a single global implementation of the Slot class as a permanent
// non-enumerable property of the globalThis object. This obfuscation does
// nothing to prevent access to the Slot class, but at least it ensures the
// implementation (i.e. currentContext) cannot be tampered with, and all copies
// of the @wry/context package (hopefully just one) will share the same Slot
// implementation. Since the first copy of the @wry/context package to be
// imported wins, this technique imposes a steep cost for any future breaking
// changes to the Slot class.
const globalKey = "@wry/context:Slot";
const host = 
// Prefer globalThis when available.
// https://github.com/benjamn/wryware/issues/347
maybe(() => globalThis) ||
    // Fall back to global, which works in Node.js and may be converted by some
    // bundlers to the appropriate identifier (window, self, ...) depending on the
    // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
    maybe(() => global) ||
    // Otherwise, use a dummy host that's local to this module. We used to fall
    // back to using the Array constructor as a namespace, but that was flagged in
    // https://github.com/benjamn/wryware/issues/347, and can be avoided.
    Object.create(null);
// Whichever globalHost we're using, make TypeScript happy about the additional
// globalKey property.
const globalHost = host;
const Slot = globalHost[globalKey] ||
    // Earlier versions of this package stored the globalKey property on the Array
    // constructor, so we check there as well, to prevent Slot class duplication.
    Array[globalKey] ||
    (function (Slot) {
        try {
            Object.defineProperty(globalHost, globalKey, {
                value: Slot,
                enumerable: false,
                writable: false,
                // When it was possible for globalHost to be the Array constructor (a
                // legacy Slot dedup strategy), it was important for the property to be
                // configurable:true so it could be deleted. That does not seem to be as
                // important when globalHost is the global object, but I don't want to
                // cause similar problems again, and configurable:true seems safest.
                // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
                configurable: true
            });
        }
        finally {
            return Slot;
        }
    })(makeSlotClass());
//# sourceMappingURL=slot.js.map
;// ./node_modules/@wry/context/lib/index.js


const { bind, noContext } = Slot;
// Like global.setTimeout, except the callback runs with captured context.

function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function () {
        const gen = genFn.apply(this, arguments);
        const boundNext = bind(gen.next);
        const boundThrow = bind(gen.throw);
        return new Promise((resolve, reject) => {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                }
                catch (error) {
                    return reject(error);
                }
                const next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                }
                else {
                    next(result.value);
                }
            }
            const invokeNext = (value) => invoke(boundNext, value);
            const invokeThrow = (error) => invoke(boundThrow, error);
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
const wrappedFibers = (/* unused pure expression or super */ null && ([]));
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        const wrap = (obj, method) => {
            const fn = obj[method];
            obj[method] = function () {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}
//# sourceMappingURL=index.js.map
;// ./node_modules/optimism/lib/context.js

const parentEntrySlot = new Slot();
function nonReactive(fn) {
    return parentEntrySlot.withValue(void 0, fn);
}


//# sourceMappingURL=context.js.map
;// ./node_modules/optimism/lib/helpers.js
const { hasOwnProperty: helpers_hasOwnProperty, } = Object.prototype;
const arrayFromSet = Array.from ||
    function (set) {
        const array = [];
        set.forEach(item => array.push(item));
        return array;
    };
function maybeUnsubscribe(entryOrDep) {
    const { unsubscribe } = entryOrDep;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}
//# sourceMappingURL=helpers.js.map
;// ./node_modules/optimism/lib/entry.js


const emptySetPool = [];
const POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    const len = a.length;
    return (
    // Unknown values are not equal to each other.
    len > 0 &&
        // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length &&
        // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch (value.length) {
        case 0: throw new Error("unknown value");
        case 1: return value[0];
        case 2: throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
class Entry {
    constructor(fn) {
        this.fn = fn;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
    }
    peek() {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    }
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    recompute(args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this)
            ? reallyRecompute(this, args)
            : valueGet(this.value);
    }
    setDirty() {
        if (this.dirty)
            return;
        this.dirty = true;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    }
    dispose() {
        this.setDirty();
        // Sever any dependency relationships with our own children, so those
        // children don't retain this parent Entry in their child.parents sets,
        // thereby preventing it from being fully garbage collected.
        forgetChildren(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        eachParent(this, (parent, child) => {
            parent.setDirty();
            forgetChild(parent, this);
        });
    }
    forget() {
        // The code that creates Entry objects in index.ts will replace this method
        // with one that actually removes the Entry from the cache, which will also
        // trigger the entry.dispose method.
        this.dispose();
    }
    dependOn(dep) {
        dep.add(this);
        if (!this.deps) {
            this.deps = emptySetPool.pop() || new Set();
        }
        this.deps.add(dep);
    }
    forgetDeps() {
        if (this.deps) {
            arrayFromSet(this.deps).forEach(dep => dep.delete(this));
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    }
}
Entry.count = 0;
function rememberParent(child) {
    const parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        }
        else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
    if (maybeSubscribe(entry, args)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    const { normalizeResult } = entry;
    let oldValueCopy;
    if (normalizeResult && entry.value.length === 1) {
        oldValueCopy = valueCopy(entry.value);
    }
    // Make entry.value an empty array, representing an unknown value.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, args);
        // If we have a viable oldValueCopy to compare with the (successfully
        // recomputed) new entry.value, and they are not already === identical, give
        // normalizeResult a chance to pick/choose/reuse parts of oldValueCopy[0]
        // and/or entry.value[0] to determine the final cached entry.value.
        if (normalizeResult && oldValueCopy && !valueIs(oldValueCopy, entry.value)) {
            try {
                entry.value[0] = normalizeResult(entry.value[0], oldValueCopy[0]);
            }
            catch (_a) {
                // If normalizeResult throws, just use the newer value, rather than
                // saving the exception as entry.value[1].
            }
        }
    }
    catch (e) {
        // If entry.fn throws, entry.value will hold that exception.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    const parentCount = child.parents.size;
    if (parentCount) {
        const parents = arrayFromSet(child.parents);
        for (let i = 0; i < parentCount; ++i) {
            callback(parents[i], child);
        }
    }
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    const parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    }
    else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    // If parent was clean before, it just became (possibly) dirty (according to
    // mightBeDirty), since we just added child to parent.dirtyChildren.
    if (parentWasClean) {
        reportDirty(parent);
    }
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    const childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    }
    else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    const dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
        parent.childValues.forEach((_value, child) => {
            forgetChild(parent, child);
        });
    }
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") {
        try {
            maybeUnsubscribe(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, args);
        }
        catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}
//# sourceMappingURL=entry.js.map
;// ./node_modules/optimism/lib/dep.js


const EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true, // Fully remove parent Entry from LRU cache and computation graph
};
function dep(options) {
    const depsByKey = new Map();
    const subscribe = options && options.subscribe;
    function depend(key) {
        const parent = parentEntrySlot.getValue();
        if (parent) {
            let dep = depsByKey.get(key);
            if (!dep) {
                depsByKey.set(key, dep = new Set);
            }
            parent.dependOn(dep);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep);
                dep.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        const dep = depsByKey.get(key);
        if (dep) {
            const m = (entryMethodName &&
                helpers_hasOwnProperty.call(EntryMethods, entryMethodName)) ? entryMethodName : "setDirty";
            // We have to use arrayFromSet(dep).forEach instead of dep.forEach,
            // because modifying a Set while iterating over it can cause elements in
            // the Set to be removed from the Set before they've been iterated over.
            arrayFromSet(dep).forEach(entry => entry[m]());
            depsByKey.delete(key);
            maybeUnsubscribe(dep);
        }
    };
    return depend;
}
//# sourceMappingURL=dep.js.map
;// ./node_modules/optimism/lib/index.js




// These helper functions are important for making optimism work with
// asynchronous code. In order to register parent-child dependencies,
// optimism needs to know about any currently active parent computations.
// In ordinary synchronous code, the parent context is implicit in the
// execution stack, but asynchronous code requires some extra guidance in
// order to propagate context from one async task segment to the next.

// A lighter-weight dependency, similar to OptimisticWrapperFunction, except
// with only one argument, no makeCacheKey, no wrapped function to recompute,
// and no result value. Useful for representing dependency leaves in the graph
// of computation. Subscriptions are supported.

// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
let defaultKeyTrie;
function defaultMakeCacheKey(...args) {
    const trie = defaultKeyTrie || (defaultKeyTrie = new Trie(typeof WeakMap === "function"));
    return trie.lookupArray(args);
}
// If you're paranoid about memory leaks, or you want to avoid using WeakMap
// under the hood, but you still need the behavior of defaultMakeCacheKey,
// import this constructor to create your own tries.

;
const caches = new Set();
function wrap(originalFunction, { max = Math.pow(2, 16), keyArgs, makeCacheKey = defaultMakeCacheKey, normalizeResult, subscribe, cache: cacheOption = strong/* StrongCache */.C, } = Object.create(null)) {
    const cache = typeof cacheOption === "function"
        ? new cacheOption(max, entry => entry.dispose())
        : cacheOption;
    const optimistic = function () {
        const key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        let entry = cache.get(key);
        if (!entry) {
            cache.set(key, entry = new Entry(originalFunction));
            entry.normalizeResult = normalizeResult;
            entry.subscribe = subscribe;
            // Give the Entry the ability to trigger cache.delete(key), even though
            // the Entry itself does not know about key or cache.
            entry.forget = () => cache.delete(key);
        }
        const value = entry.recompute(Array.prototype.slice.call(arguments));
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(cache => cache.clean());
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: () => cache.size,
        configurable: false,
        enumerable: false,
    });
    Object.freeze(optimistic.options = {
        max,
        keyArgs,
        makeCacheKey,
        normalizeResult,
        subscribe,
        cache,
    });
    function dirtyKey(key) {
        const entry = key && cache.get(key);
        if (entry) {
            entry.setDirty();
        }
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        const entry = key && cache.get(key);
        if (entry) {
            return entry.peek();
        }
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return key ? cache.delete(key) : false;
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 72232:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q9: () => (/* binding */ setVerbosity),
/* harmony export */   V1: () => (/* binding */ invariant),
/* harmony export */   zU: () => (/* binding */ InvariantError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8674);

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));

function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (invariant)));
//# sourceMappingURL=invariant.js.map

/***/ }),

/***/ 73401:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// === Symbol Support ===
var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(observer, subscriber) {
    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  var _proto = Subscription.prototype;

  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== 'closed') {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };

  _createClass(Subscription, [{
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = /*#__PURE__*/function () {
  function SubscriptionObserver(subscription) {
    this._subscription = subscription;
  }

  var _proto2 = SubscriptionObserver.prototype;

  _proto2.next = function next(value) {
    onNotify(this._subscription, 'next', value);
  };

  _proto2.error = function error(value) {
    onNotify(this._subscription, 'error', value);
  };

  _proto2.complete = function complete() {
    onNotify(this._subscription, 'complete');
  };

  _createClass(SubscriptionObserver, [{
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = /*#__PURE__*/function () {
  function Observable(subscriber) {
    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  var _proto3 = Observable.prototype;

  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== 'object' || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }

    return new Subscription(observer, this._subscriber);
  };

  _proto3.forEach = function forEach(fn) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (typeof fn !== 'function') {
        reject(new TypeError(fn + ' is not a function'));
        return;
      }

      function done() {
        subscription.unsubscribe();
        resolve();
      }

      var subscription = _this.subscribe({
        next: function (value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };

  _proto3.map = function map(fn) {
    var _this2 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this2.subscribe({
        next: function (value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.filter = function filter(fn) {
    var _this3 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this3.subscribe({
        next: function (value) {
          try {
            if (!fn(value)) return;
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.reduce = function reduce(fn) {
    var _this4 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function (observer) {
      return _this4.subscribe({
        next: function (value) {
          var first = !hasValue;
          hasValue = true;

          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };

  _proto3.concat = function concat() {
    var _this5 = this;

    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    var C = getSpecies(this);
    return new C(function (observer) {
      var subscription;
      var index = 0;

      function startNext(next) {
        subscription = next.subscribe({
          next: function (v) {
            observer.next(v);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (index === sources.length) {
              subscription = undefined;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }

      startNext(_this5);
      return function () {
        if (subscription) {
          subscription.unsubscribe();
          subscription = undefined;
        }
      };
    });
  };

  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      var subscriptions = [];

      var outer = _this6.subscribe({
        next: function (value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }

          var inner = C.from(value).subscribe({
            next: function (value) {
              observer.next(value);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              var i = subscriptions.indexOf(inner);
              if (i >= 0) subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          completeIfDone();
        }
      });

      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0) observer.complete();
      }

      return function () {
        subscriptions.forEach(function (s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };

  _proto3[SymbolObservable] = function () {
    return this;
  };

  Observable.from = function from(x) {
    var C = typeof this === 'function' ? this : Observable;
    if (x == null) throw new TypeError(x + ' is not an object');
    var method = getMethod(x, SymbolObservable);

    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
      if (isObservable(observable) && observable.constructor === C) return observable;
      return new C(function (observer) {
        return observable.subscribe(observer);
      });
    }

    if (hasSymbol('iterator')) {
      method = getMethod(x, SymbolIterator);

      if (method) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done;) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }
    }

    if (Array.isArray(x)) {
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }

    throw new TypeError(x + ' is not observable');
  };

  Observable.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    var C = typeof this === 'function' ? this : Observable;
    return new C(function (observer) {
      enqueue(function () {
        if (observer.closed) return;

        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed) return;
        }

        observer.complete();
      });
    });
  };

  _createClass(Observable, null, [{
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}




/***/ })

}]);

