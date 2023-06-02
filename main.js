/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/simply-pub-sub/src/publisher.js":
/*!******************************************************!*\
  !*** ./node_modules/simply-pub-sub/src/publisher.js ***!
  \******************************************************/
/***/ ((module) => {

eval("function Publisher(mainFnc) {\n  if (typeof mainFnc != 'function') throw new Error(`Parameter passed to publisher isn\\' a function! ${mainFnc}`);\n  const subscribers = {};\n  function subscribe(subName, fnc) {\n    if (typeof subName != 'string') throw new Error('First parameter of subscribe method must be a string!');\n    if (typeof fnc != 'function') throw new Error('Second parameter of subscribe method must be a function!');\n    subscribers[subName] = fnc;\n  }\n  function unsubscribe(subName) {\n    if (!subscribers[subName]) return console.log(`${subName} subscriber doesn't exist`);\n    delete subscribers[subName];\n  }\n  function unsubscribeAll() {\n    Object.keys(subscribers).forEach(subName => unsubscribe(subName));\n  }\n  function publish(...args) {\n    const result = mainFnc(...args);\n    for (const subName in subscribers) {\n      subscribers[subName](result);\n    }\n  }\n  publish.subscribers = subscribers;\n  publish.subscribe = subscribe;\n  publish.unsubscribe = unsubscribe;\n  publish.unsubscribeAll = unsubscribeAll;\n  publish.mainFunction = mainFnc;\n  return publish;\n}\nmodule.exports = Publisher;\n\n//# sourceURL=webpack://text-based-kit/./node_modules/simply-pub-sub/src/publisher.js?");

/***/ }),

/***/ "./node_modules/text-based-game-engine/src/checkStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/text-based-game-engine/src/checkStorage.js ***!
  \*****************************************************************/
/***/ ((module) => {

eval("function storageAvailable() {\n  try {\n    const x = 'test';\n    localStorage.setItem(x, x);\n    localStorage.removeItem(x);\n    return true;\n  } catch (error) {\n    return error;\n  }\n}\nmodule.exports = storageAvailable;\n\n//# sourceURL=webpack://text-based-kit/./node_modules/text-based-game-engine/src/checkStorage.js?");

/***/ }),

/***/ "./node_modules/text-based-game-engine/src/core.js":
/*!*********************************************************!*\
  !*** ./node_modules/text-based-game-engine/src/core.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./node_modules/text-based-game-engine/src/game.js\");\nconst Scene = __webpack_require__(/*! ./scene */ \"./node_modules/text-based-game-engine/src/scene.js\");\nconst Serialize = __webpack_require__(/*! ./serialize */ \"./node_modules/text-based-game-engine/src/serialize.js\");\nconst parser = __webpack_require__(/*! ./parser */ \"./node_modules/text-based-game-engine/src/parser.js\");\nmodule.exports = {\n  Game,\n  Scene,\n  Serialize,\n  parser\n};\n\n//# sourceURL=webpack://text-based-kit/./node_modules/text-based-game-engine/src/core.js?");

/***/ }),

/***/ "./node_modules/text-based-game-engine/src/game.js":
/*!*********************************************************!*\
  !*** ./node_modules/text-based-game-engine/src/game.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("const callCommand = function (alias, ...parameters) {\n  const command = this.commands[alias];\n  if (!command) return false;\n  command(this.data, ...parameters);\n};\nconst initializeScene = function (sceneName) {\n  const scene = this.scenes[sceneName];\n  if (!scene) return;\n  this.commands = {\n    ...scene.commands,\n    ...this.defaultCommands\n  };\n  scene.initializer();\n  for (let propName in scene.data) {\n    if (this.data[propName]) {\n      console.log(`${propName} already exists!`);\n      continue;\n    }\n    this.data[propName] = scene[propName];\n  }\n};\nmodule.exports = {\n  data: {},\n  scenes: {},\n  defaultCommands: {},\n  commands: {},\n  callCommand,\n  initializeScene\n};\n\n//# sourceURL=webpack://text-based-kit/./node_modules/text-based-game-engine/src/game.js?");

/***/ }),

/***/ "./node_modules/text-based-game-engine/src/parser.js":
/*!***********************************************************!*\
  !*** ./node_modules/text-based-game-engine/src/parser.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("function parser(input) {\n  if (typeof input != 'string') throw new Error('String must be passed to parser! Input: ' + input);\n  const parsedInput = input.trim().split(' ').filter(str => str !== '');\n  let command = parsedInput.shift();\n  if (typeof command != 'string') command = '';\n  return {\n    command,\n    words: parsedInput\n  };\n}\nmodule.exports = parser;\n\n//# sourceURL=webpack://text-based-kit/./node_modules/text-based-game-engine/src/parser.js?");

/***/ }),

/***/ "./node_modules/text-based-game-engine/src/scene.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-based-game-engine/src/scene.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("function Scene(initializer) {\n  const addCommand = function (cb, ...aliases) {\n    aliases.forEach(alias => {\n      if (this.commands[alias]) throw new Error('Alias already exists');\n      this.commands[alias] = cb;\n    });\n  };\n  return {\n    commands: {},\n    data: {},\n    initializer,\n    addCommand\n  };\n}\nmodule.exports = Scene;\n\n//# sourceURL=webpack://text-based-kit/./node_modules/text-based-game-engine/src/scene.js?");

/***/ }),

/***/ "./node_modules/text-based-game-engine/src/serialize.js":
/*!**************************************************************!*\
  !*** ./node_modules/text-based-game-engine/src/serialize.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const checkStorage = __webpack_require__(/*! ./checkStorage */ \"./node_modules/text-based-game-engine/src/checkStorage.js\");\nfunction saveData(obj, key) {\n  const result = checkStorage();\n  if (result !== true) return console.log('local storage isn\\' avaliable. Saving cancelled.', result);\n  const stringifiedObj = JSON.stringify(obj);\n  localStorage[key] = stringifiedObj;\n}\nfunction loadData(key) {\n  const result = checkStorage();\n  if (result !== true) return console.log('local storage isn\\' avaliable. Saving cancelled.', result);\n  const stringifiedObj = localStorage.getItem(key);\n  if (!stringifiedObj) throw new Error(`Save data at key of ${key} not found!`);\n  try {\n    return JSON.parse(stringifiedObj);\n  } catch (e) {\n    console.log(e);\n    throw new Error(`Invalid JSON at key ${key}, ${stringifiedObj}`);\n  }\n}\nmodule.exports = {\n  saveData,\n  loadData\n};\n\n//# sourceURL=webpack://text-based-kit/./node_modules/text-based-game-engine/src/serialize.js?");

/***/ }),

/***/ "./src/Topics.js":
/*!***********************!*\
  !*** ./src/Topics.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var publisher = __webpack_require__(/*! simply-pub-sub */ \"./node_modules/simply-pub-sub/src/publisher.js\");\nvar publishers = {};\nfunction addPublisher(name, mainFnc) {\n  publishers[name] = publisher(mainFnc);\n}\nmodule.exports = {\n  publishers: publishers,\n  addPublisher: addPublisher,\n  get input() {\n    return this.publishers.input;\n  },\n  get messenger() {\n    return this.publishers.messenger;\n  }\n};\n\n//# sourceURL=webpack://text-based-kit/./src/Topics.js?");

/***/ }),

/***/ "./src/UI/config.js":
/*!**************************!*\
  !*** ./src/UI/config.js ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = {\n  msgElement: 'p',\n  textColor: '#FFFFFF99',\n  textBackground: 'transparent',\n  fontSize: '0.95rem',\n  fontWeight: '400',\n  lineBreakHeight: '0.5rem',\n  lineBreakCount: 1,\n  breakAfterEach: true\n};\n\n//# sourceURL=webpack://text-based-kit/./src/UI/config.js?");

/***/ }),

/***/ "./src/UI/logInterface.js":
/*!********************************!*\
  !*** ./src/UI/logInterface.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar config = __webpack_require__(/*! ./config */ \"./src/UI/config.js\");\nvar msgLog = document.querySelector('.msg-log');\nfunction printMessage(msg, msgConfig) {\n  var mod = _objectSpread(_objectSpread({}, config), msgConfig);\n  var msgElement = document.createElement(mod.msgElement);\n  msgElement.setAttribute('style', \"color: \".concat(mod.textColor, \"; background: \").concat(mod.textBackground, \"; font-size: \").concat(mod.fontSize, \"; font-weight: \").concat(mod.fontWeight));\n  msgElement.textContent = msg;\n  msgLog.append(msgElement);\n  if (mod.lineBreakCount) printBreak(mod.lineBreakCount, mod.lineBreakHeight);\n}\nfunction printMulti() {\n  for (var _len = arguments.length, msgs = new Array(_len), _key = 0; _key < _len; _key++) {\n    msgs[_key] = arguments[_key];\n  }\n  // returns another function\n  return function () {\n    var msgConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    if (Array.isArray(msgs[0])) msgs = msgs[0];\n    if (msgConfig.breakAfterEach || msgConfig.lineBreakCount === 0) {\n      msgs.forEach(function (msg) {\n        return printMessage(msg, msgConfig);\n      });\n      return;\n    }\n    var mod = _objectSpread(_objectSpread({}, msgConfig), {}, {\n      lineBreakCount: 0\n    });\n    for (var i = 0; i < msgs.length; i++) {\n      printMessage(msgs[i], i == msgs.length - 1 ? msgConfig : mod);\n    }\n  };\n}\nfunction printBreak() {\n  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config.lineBreakCount;\n  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.lineBreakHeight;\n  for (var i = 0; i < count; i++) {\n    var breakElement = document.createElement('div');\n    breakElement.setAttribute('style', \"height: \".concat(height));\n    msgLog.append(breakElement);\n  }\n}\nfunction clearMsgs() {\n  while (msgLog.firstChild) {\n    msgLog.removeChild(msgLog.firstChild);\n  }\n}\nmodule.exports = {\n  printMessage: printMessage,\n  printMulti: printMulti,\n  printBreak: printBreak,\n  clearMsgs: clearMsgs\n};\n\n//# sourceURL=webpack://text-based-kit/./src/UI/logInterface.js?");

/***/ }),

/***/ "./src/UI/uiCore.js":
/*!**************************!*\
  !*** ./src/UI/uiCore.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var logInterface = __webpack_require__(/*! ./logInterface */ \"./src/UI/logInterface.js\");\nvar config = __webpack_require__(/*! ./config */ \"./src/UI/config.js\");\nmodule.exports = {\n  logInterface: logInterface,\n  config: config\n};\n\n//# sourceURL=webpack://text-based-kit/./src/UI/uiCore.js?");

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./saveLoad */ \"./src/saveLoad.js\"),\n  save = _require.save,\n  load = _require.load;\n__webpack_require__(/*! ./setup/setUpPublishers */ \"./src/setup/setUpPublishers.js\");\n__webpack_require__(/*! ./setup/elementSpacing */ \"./src/setup/elementSpacing.js\");\n__webpack_require__(/*! ./setup/inputUI */ \"./src/setup/inputUI.js\");\n\n// Demo can safely be removed!\n__webpack_require__(/*! ./demo/setupDemo */ \"./src/demo/setupDemo.js\");\n\n//# sourceURL=webpack://text-based-kit/./src/core.js?");

/***/ }),

/***/ "./src/demo/configPresets.js":
/*!***********************************!*\
  !*** ./src/demo/configPresets.js ***!
  \***********************************/
/***/ ((module) => {

eval("var span = {\n  msgElement: 'span',\n  lineBreakCount: 0\n};\nvar largeBold = {\n  fontSize: '1.5rem',\n  fontWeight: '800'\n};\nmodule.exports = {\n  span: span,\n  largeBold: largeBold\n};\n\n//# sourceURL=webpack://text-based-kit/./src/demo/configPresets.js?");

/***/ }),

/***/ "./src/demo/demoScene.js":
/*!*******************************!*\
  !*** ./src/demo/demoScene.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nvar _require = __webpack_require__(/*! text-based-game-engine */ \"./node_modules/text-based-game-engine/src/core.js\"),\n  Scene = _require.Scene;\nvar _require2 = __webpack_require__(/*! text-based-game-engine/src/game */ \"./node_modules/text-based-game-engine/src/game.js\"),\n  data = _require2.data,\n  commands = _require2.commands,\n  scenes = _require2.scenes;\nvar _require3 = __webpack_require__(/*! ../Topics */ \"./src/Topics.js\"),\n  messenger = _require3.messenger;\nvar _require4 = __webpack_require__(/*! ./configPresets */ \"./src/demo/configPresets.js\"),\n  span = _require4.span,\n  largeBold = _require4.largeBold;\nvar demoScene = Scene(initializer);\ndemoScene.data = demoData;\nfunction initializer() {\n  return _initializer.apply(this, arguments);\n}\nfunction _initializer() {\n  _initializer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          if (!data.demoVisited) {\n            _context.next = 2;\n            break;\n          }\n          return _context.abrupt(\"return\");\n        case 2:\n          messenger('Welcome the', span);\n          messenger('  T', _objectSpread(_objectSpread(_objectSpread({}, span), largeBold), {}, {\n            textColor: 'gold'\n          }));\n          messenger('ext based kit\\'s demo', _objectSpread(_objectSpread({}, span), {}, {\n            fontWeight: '800',\n            fontSize: '1.4rem',\n            textColor: 'gold'\n          }));\n          messenger('project by saltshpinx', {\n            textColor: 'white',\n            lineBreakHeight: '1rem'\n          });\n          _context.next = 8;\n          return createTimer(2000);\n        case 8:\n          messenger('this is, what I hope to be, an easy to use javascript text-based game kit.', 'there are a few important components I\\'ll give a brief overview of, you can find out more by checking out indiviual components\\' APIs on their github/npm pages.', 'there will also be a short game afterwards for demostration purposes.', 'this package is made up of 3 different components:', {\n            lineBreakHeight: '0.9rem',\n            breakAfterEach: false\n          });\n          _context.next = 11;\n          return createTimer(2000);\n        case 11:\n          messenger('1. text-based-game-engine', '2. text-based-browser-ui', '3. simply-pub-sub');\n          _context.next = 14;\n          return createTimer(2000);\n        case 14:\n          messenger(\"project ended, read README.md\");\n        case 15:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _initializer.apply(this, arguments);\n}\nfunction createTimer(miliseconds) {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      resolve();\n    }, miliseconds);\n  });\n}\nvar demoData = {\n  demoVisited: true\n};\ndemoScene.commands['l'] = function () {\n  messenger('Goofy, goober!', _objectSpread({\n    textColor: 'green'\n  }, largeBold));\n};\nmodule.exports = demoScene;\n\n//# sourceURL=webpack://text-based-kit/./src/demo/demoScene.js?");

/***/ }),

/***/ "./src/demo/setupDemo.js":
/*!*******************************!*\
  !*** ./src/demo/setupDemo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var game = __webpack_require__(/*! text-based-game-engine/src/game */ \"./node_modules/text-based-game-engine/src/game.js\");\nvar demoScene = __webpack_require__(/*! ./demoScene */ \"./src/demo/demoScene.js\");\ngame.scenes.demo = demoScene;\ngame.initializeScene('demo');\n\n//# sourceURL=webpack://text-based-kit/./src/demo/setupDemo.js?");

/***/ }),

/***/ "./src/inputHandler.js":
/*!*****************************!*\
  !*** ./src/inputHandler.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! text-based-game-engine */ \"./node_modules/text-based-game-engine/src/core.js\"),\n  Game = _require.Game,\n  parser = _require.parser;\nvar Topics = __webpack_require__(/*! ./Topics */ \"./src/Topics.js\");\nfunction inputHandler(input) {\n  var _parser = parser(input),\n    command = _parser.command,\n    words = _parser.words;\n  if (Game.callCommand(command, words) === false) Topics.messenger('Message not understood.', {\n    textColor: 'white'\n  });\n}\nmodule.exports = inputHandler;\n\n//# sourceURL=webpack://text-based-kit/./src/inputHandler.js?");

/***/ }),

/***/ "./src/saveLoad.js":
/*!*************************!*\
  !*** ./src/saveLoad.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! text-based-game-engine */ \"./node_modules/text-based-game-engine/src/core.js\"),\n  Game = _require.Game,\n  Serialize = _require.Serialize;\nvar saveData = Serialize.saveData,\n  loadData = Serialize.loadData;\nfunction save(key) {\n  try {\n    saveData(Game.data, key);\n    return true;\n  } catch (e) {\n    console.log(e);\n    return false;\n  }\n}\nfunction load(key) {\n  try {\n    loadData(key);\n    return true;\n  } catch (e) {\n    console.log(e);\n    return false;\n  }\n}\nmodule.exports = {\n  save: save,\n  load: load\n};\n\n//# sourceURL=webpack://text-based-kit/./src/saveLoad.js?");

/***/ }),

/***/ "./src/setup/elementSpacing.js":
/*!*************************************!*\
  !*** ./src/setup/elementSpacing.js ***!
  \*************************************/
/***/ (() => {

eval("var msgLog = document.querySelector('.msg-log');\nvar msgInput = document.querySelector('.msg-input');\nwindow.addEventListener('resize', resizeLog);\nwindow.addEventListener('load', resizeLog);\nfunction resizeLog() {\n  msgLog.setAttribute('style', \"margin-bottom: \".concat(msgInput.offsetHeight + 4, \"px;\"));\n}\n\n//# sourceURL=webpack://text-based-kit/./src/setup/elementSpacing.js?");

/***/ }),

/***/ "./src/setup/inputUI.js":
/*!******************************!*\
  !*** ./src/setup/inputUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ../Topics */ \"./src/Topics.js\"),\n  input = _require.input;\nvar msgInput = document.querySelector('.msg-input');\nmsgInput.addEventListener('keyup', function (e) {\n  if (!(e.keyCode === 13)) return;\n  var fieldInput = msgInput.value;\n  msgInput.value = '';\n  input(fieldInput);\n});\n\n//# sourceURL=webpack://text-based-kit/./src/setup/inputUI.js?");

/***/ }),

/***/ "./src/setup/setUpPublishers.js":
/*!**************************************!*\
  !*** ./src/setup/setUpPublishers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar _require = __webpack_require__(/*! ../Topics */ \"./src/Topics.js\"),\n  addPublisher = _require.addPublisher;\nvar _require2 = __webpack_require__(/*! ../UI/uiCore */ \"./src/UI/uiCore.js\"),\n  logInterface = _require2.logInterface;\nvar inputHandler = __webpack_require__(/*! ../inputHandler */ \"./src/inputHandler.js\");\naddPublisher('messenger', messageHandler);\naddPublisher('input', inputHandler);\nfunction messageHandler() {\n  var config;\n  for (var _len = arguments.length, msgs = new Array(_len), _key = 0; _key < _len; _key++) {\n    msgs[_key] = arguments[_key];\n  }\n  if (_typeof(msgs[msgs.length - 1]) == 'object') config = msgs.pop();\n  logInterface.printMulti.apply(logInterface, msgs)(config);\n  return {\n    msgs: msgs,\n    config: config\n  };\n}\n\n//# sourceURL=webpack://text-based-kit/./src/setup/setUpPublishers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/core.js");
/******/ 	
/******/ })()
;