/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\nmodule.exports.once = once;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  checkListener(listener);\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0)\n      return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      checkListener(listener);\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      checkListener(listener);\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\nfunction once(emitter, name) {\n  return new Promise(function (resolve, reject) {\n    function errorListener(err) {\n      emitter.removeListener(name, resolver);\n      reject(err);\n    }\n\n    function resolver() {\n      if (typeof emitter.removeListener === 'function') {\n        emitter.removeListener('error', errorListener);\n      }\n      resolve([].slice.call(arguments));\n    };\n\n    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });\n    if (name !== 'error') {\n      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });\n    }\n  });\n}\n\nfunction addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n  if (typeof emitter.on === 'function') {\n    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);\n  }\n}\n\nfunction eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n  if (typeof emitter.on === 'function') {\n    if (flags.once) {\n      emitter.once(name, listener);\n    } else {\n      emitter.on(name, listener);\n    }\n  } else if (typeof emitter.addEventListener === 'function') {\n    // EventTarget does not have `error` event semantics like Node\n    // EventEmitters, we do not listen for `error` events here.\n    emitter.addEventListener(name, function wrapListener(arg) {\n      // IE does not have builtin `{ once: true }` support so we\n      // have to do it manually.\n      if (flags.once) {\n        emitter.removeEventListener(name, wrapListener);\n      }\n      listener(arg);\n    });\n  } else {\n    throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + typeof emitter);\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./node_modules/events/events.js?");

/***/ }),

/***/ "./src/Instrument.js":
/*!***************************!*\
  !*** ./src/Instrument.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MusicScale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MusicScale */ \"./src/MusicScale.js\");\n\r\n\r\nclass Instrument {\r\n  constructor(){\r\n    this.percussion = [\"hh\", \"hho\", \"kick\", \"snare\"];\r\n    this.scale = _MusicScale__WEBPACK_IMPORTED_MODULE_0__.majorScale.C;\r\n    this.scaleType = 'Major Scale';\r\n\t}\r\n\r\n  set musicScaleType(type) {\r\n    this.scaleType = type;\r\n    this.musicScale = this.scale;\r\n  }\r\n\r\n  set musicScale(scale) {\r\n    if (this.scaleType === 'Major Scale') {\r\n      this.scale = _MusicScale__WEBPACK_IMPORTED_MODULE_0__.majorScale[scale];\r\n    } else \r\n    if (this.scaleType === 'Minor Scale'){\r\n      this.scale = _MusicScale__WEBPACK_IMPORTED_MODULE_0__.minorScale[scale];\r\n    }\r\n  }\r\n\r\n  get musicScaleType() {\r\n    return this.musicScaleType;\r\n  }\r\n\r\n  get musicScale() {\r\n    return this.scale;\r\n  }\r\n\r\n  getNotes(activations) {\r\n    return activations.map((value, id) => (value) ? this.scale[id] : null).filter(val => val);\r\n  }\r\n\r\n  getPercussions(activations) {\r\n    return activations.map((value, id) => (value) ? this.percussion[id] : null).filter(val => val);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instrument);\n\n//# sourceURL=webpack://webpack-demo/./src/Instrument.js?");

/***/ }),

/***/ "./src/MusicScale.js":
/*!***************************!*\
  !*** ./src/MusicScale.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"majorScale\": () => (/* binding */ majorScale),\n/* harmony export */   \"minorScale\": () => (/* binding */ minorScale)\n/* harmony export */ });\nconst majorScale = {\r\n  \"C\"     :  [\"C\" , \"D\" , \"E\" , \"F\" , \"G\" , \"A\" , \"B\" , \"C\" ],\r\n  \"C#/Db\" :  [\"Db\", \"Eb\", \"F\" , \"Gb\", \"Ab\", \"Bb\", \"C\" , \"Db\"],\r\n  \"D\"     :  [\"D\" , \"E\" , \"F#\", \"G\" , \"A\" , \"B\" , \"C#\", \"D\" ],\r\n  \"D#/Eb\" :  [\"Eb\", \"F\" , \"G\" , \"Ab\", \"Bb\", \"C\" , \"D\" , \"Eb\"],\r\n  \"E\"     :  [\"E\" , \"F#\", \"G#\", \"A\" , \"B\" , \"C#\", \"D#\", \"E\" ],\r\n  \"F\"     :  [\"F\" , \"G\" , \"A\" , \"Bb\", \"C\" , \"D\" , \"E\" , \"F\" ],\r\n  \"F#/Gb\" :  [\"Gb\", \"Ab\", \"Bb\", \"Cb\", \"Db\", \"Eb\", \"F\" , \"Gb\"],\r\n  \"G\"     :  [\"G\" , \"A\" , \"B\" , \"C\" , \"D\" , \"E\" , \"F#\", \"G\" ],\r\n  \"G#/Ab\" :  [\"Ab\", \"Bb\", \"C\" , \"Db\", \"Eb\", \"F\" , \"G\" , \"Ab\"],\r\n  \"A\"     :  [\"A\" , \"B\" , \"C#\", \"D\" , \"E\" , \"F#\", \"G#\", \"A\" ],\r\n  \"A#/Bb\" :  [\"Bb\", \"C\" , \"D\" , \"Eb\", \"F\" , \"G\" , \"A\" , \"Bb\"],\r\n  \"B\"     :  [\"B\" , \"C#\", \"D#\", \"E\" , \"F#\", \"G#\", \"A#\", \"B\" ]\r\n};\r\n\r\nconst minorScale = {\r\n  \"A\"     :  [\"A\" , \"B\" , \"C\" , \"D\" , \"E\" , \"F\" , \"G\" , \"A\" ],\r\n  \"A#/Bb\" :  [\"Bb\", \"C\" , \"Db\", \"Eb\", \"F\" , \"Gb\", \"Ab\", \"Bb\"],\r\n  \"B\"     :  [\"B\" , \"C#\", \"D\" , \"E\" , \"F#\", \"G\" , \"A\" , \"B\" ],\r\n  \"C\"     :  [\"C\" , \"D\" , \"Eb\", \"F\" , \"G\" , \"Ab\", \"Bb\", \"C\" ],\r\n  \"C#/Db\" :  [\"Db\", \"Eb\", \"Fb\", \"Gb\", \"Ab\", \"A\" , \"B\" , \"Db\"],\r\n  \"D\"     :  [\"D\" , \"E\" , \"F\" , \"G\" , \"A\" , \"Bb\", \"C\" , \"D\" ],\r\n  \"D#/Eb\" :  [\"Eb\", \"F\" , \"Gb\", \"Ab\", \"Bb\", \"Cb\", \"Db\", \"Eb\"],\r\n  \"E\"     :  [\"E\" , \"F#\", \"G\" , \"A\" , \"B\" , \"C\" , \"D\" , \"E\" ],\r\n  \"F\"     :  [\"F\" , \"G\" , \"Ab\", \"Bb\", \"C\" , \"Db\", \"Eb\", \"F\" ],\r\n  \"F#/Gb\" :  [\"F#\", \"G#\", \"A#\", \"B\" , \"C#\", \"D#\", \"E#\", \"F#\"],\r\n  \"G\"     :  [\"G\" , \"A\" , \"Bb\", \"C\" , \"D\" , \"Eb\", \"F\" , \"G\" ],\r\n  \"G#/Ab\" :  [\"Ab\", \"Bb\", \"Cb\", \"Db\", \"Eb\", \"Fb\", \"Gb\", \"Ab\"]\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/MusicScale.js?");

/***/ }),

/***/ "./src/Players.js":
/*!************************!*\
  !*** ./src/Players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\r\n\r\nclass Player {\r\n  constructor(){\r\n    this.time = 0;\r\n    this.KBNotes = [];\r\n    this.PNotes = [];\r\n    this.keyboard = new Tone.Players(_settings__WEBPACK_IMPORTED_MODULE_0__.keyboardAudio, { \"volume\": -10, \"fadeOut\": \"64n\",}).toMaster();\r\n    this.percussion = new Tone.Players(_settings__WEBPACK_IMPORTED_MODULE_0__.percussionAudio, { \"volume\": -10, \"fadeOut\": \"4n\",}).toMaster();\r\n\t}\r\n\r\n  play() {\r\n    this.KBNotes.map(note => this.keyboard.get(note).start(this.time, 0, \"4n\"));\r\n    this.PNotes.map(note => this.percussion.get(note).start(this.time, 0, \"16n\"));\r\n  }\r\n\r\n  set keyBoardNotes(value) {\r\n    this.KBNotes = value;\r\n  }\r\n\r\n  set percussionNotes(value) {\r\n    this.PNotes = value;\r\n  }\r\n\r\n  set setTime(value) {\r\n    this.time = value;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://webpack-demo/./src/Players.js?");

/***/ }),

/***/ "./src/Sequencer.js":
/*!**************************!*\
  !*** ./src/Sequencer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\r\n\r\nclass Sequencer {\r\n  constructor() {\r\n    this.postition = 0;\r\n\r\n    this.keyboard = new Nexus.Sequencer('#sequencer', {\r\n      'mode': 'toggle',\r\n      'rows': 7,\r\n      'columns': _settings__WEBPACK_IMPORTED_MODULE_0__.beats.length,\r\n    });\r\n    this.keyboard.colorize(\"accent\", \"#fdcc52\");\r\n    this.keyboard.colorize(\"fill\", \"#212529\");\r\n\r\n    this.percussion = new Nexus.Sequencer('#percussion', {\r\n          'mode': 'toggle',\r\n          'rows': 4,\r\n          'columns': _settings__WEBPACK_IMPORTED_MODULE_0__.beats.length,\r\n      });\r\n    this.percussion.colorize(\"accent\", \"#fdcc52\");\r\n    this.percussion.colorize(\"fill\", \"#212529\");\r\n  }\r\n\r\n  step() {\r\n    this.keyboard.next();\r\n    this.percussion.next();\r\n  }\r\n\r\n  reset() {\r\n    this.keyboard.stepper.value = -1;\r\n    this.percussion.stepper.value = -1;\r\n    this.step();\r\n  }\r\n\r\n  set setPosition(value) {\r\n    this.postition = value;\r\n  }\r\n\r\n  get kbActivations() {\r\n    return this.keyboard.matrix.column(this.postition);\r\n  }\r\n\r\n  get pActivations() {\r\n    return this.percussion.matrix.column(this.postition);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sequencer);\n\n//# sourceURL=webpack://webpack-demo/./src/Sequencer.js?");

/***/ }),

/***/ "./src/Tape.js":
/*!*********************!*\
  !*** ./src/Tape.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Tape extends events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {\r\n  constructor(beats, interval){\r\n\t\tsuper();\r\n    this.music = null;\r\n    this.beats = beats;\r\n    this.interval = interval;\r\n\t}\r\n\r\n  init() {\r\n    this.music = new Tone.Sequence(this.loop, this.beats, this.interval);\r\n    Tone.Transport.start();\r\n  }\r\n\r\n  setting(beats, interval){\r\n    this.beats = beats;\r\n    this.interval = interval;\r\n\t}\r\n\r\n  start() {\r\n    Tone.context.resume().then(() =>  this.music.start());\r\n  }\r\n\r\n  stop() {\r\n    Tone.context.resume().then(() => {\r\n      this.emit('stop-scroll');\r\n      this.music.stop();\r\n    });\r\n  }\r\n\r\n  loop = (time, beat) => {\r\n    this.emit('scroll', time, beat);\r\n  }\r\n\r\n  set bpm(v) {\r\n    Tone.Transport.bpm.value = v;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tape);\n\n//# sourceURL=webpack://webpack-demo/./src/Tape.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"select\": () => (/* binding */ select),\n/* harmony export */   \"slider\": () => (/* binding */ slider),\n/* harmony export */   \"selectScale\": () => (/* binding */ selectScale)\n/* harmony export */ });\n/* harmony import */ var _MusicScale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MusicScale */ \"./src/MusicScale.js\");\n\r\n\r\nconst button = new Nexus.Button('#button', {\r\n\t\t    'mode': 'toggle',\r\n\t\t    'state': false\r\n\t\t});\r\n\r\nbutton.colorize(\"accent\",\"#7d5683\");\r\nbutton.colorize(\"fill\",\"#fdcc52\");\r\nbutton.colorize(\"mediumLight\",\"#7d5683\");\r\n\r\nconst slider = new Nexus.Slider('#slider', {\r\n\t\t    'mode': 'relative', \r\n\t\t    'min': 80,\r\n\t\t    'max': 200,\r\n\t\t    'step': 0,\r\n\t\t    'value': 120\r\n\t\t});\r\nslider.colorize(\"accent\",\"#7b4397\");\r\n\r\nconst text = new Nexus.Number('#text', {\r\n\t\t    'value': 6,\r\n\t\t    'min': 0,\r\n\t\t    'max': 20000,\r\n\t\t    'step': 1\r\n\t\t});\r\n\r\nconst select = new Nexus.Select('#notelist',{\r\n  'size': [80,30],\r\n  'options': Object.keys(_MusicScale__WEBPACK_IMPORTED_MODULE_0__.majorScale)\r\n})\r\n\r\nconst selectScale = new Nexus.Select('#scalelist',{\r\n  'size': [80,30],\r\n  'options': ['Major Scale', \"Minor Scale\"]\r\n})\r\n\r\ntext.link(slider);\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players */ \"./src/Players.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n/* harmony import */ var _Tape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tape */ \"./src/Tape.js\");\n/* harmony import */ var _Instrument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Instrument */ \"./src/Instrument.js\");\n/* harmony import */ var _Sequencer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sequencer */ \"./src/Sequencer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tapeMachine = new _Tape__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_settings__WEBPACK_IMPORTED_MODULE_2__.beats, _settings__WEBPACK_IMPORTED_MODULE_2__.inter);\r\nconst track = new _Instrument__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\nconst player = new _Players__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst sequencer = new _Sequencer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\n\r\ntapeMachine.on('scroll', (time, col) => {\r\n    sequencer.setPosition = col;\r\n    sequencer.step();\r\n    \r\n    player.setTime = time;\r\n    player.keyBoardNotes = track.getNotes(sequencer.kbActivations);\r\n    player.percussionNotes = track.getPercussions(sequencer.pActivations);\r\n    player.play();\r\n});\r\n\r\ntapeMachine.on('stop-scroll', () => {\r\n    sequencer.reset();\r\n})\r\n\r\ntapeMachine.init();\r\n\r\n_UI__WEBPACK_IMPORTED_MODULE_1__.select.on('change',function(v) {\r\n    track.musicScale = v.value;\r\n})\r\n\r\n_UI__WEBPACK_IMPORTED_MODULE_1__.slider.on('change', function(v) {\r\n    tapeMachine.bpm = v;\r\n});\r\n\r\n_UI__WEBPACK_IMPORTED_MODULE_1__.button.on('change', function(v) {\r\n    if (v) tapeMachine.start();\r\n    else tapeMachine.stop();\r\n});\r\n\r\n_UI__WEBPACK_IMPORTED_MODULE_1__.selectScale.on('change',function(v) {\r\n    track.musicScaleType = v.value;\r\n})\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"beats\": () => (/* binding */ beats),\n/* harmony export */   \"inter\": () => (/* binding */ inter),\n/* harmony export */   \"keyboardAudio\": () => (/* binding */ keyboardAudio),\n/* harmony export */   \"percussionAudio\": () => (/* binding */ percussionAudio)\n/* harmony export */ });\nlet beats;\r\nlet inter;\r\n\r\nif (window.matchMedia(\"(min-width: 768px)\").matches) {\r\n\tbeats = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\r\n\tinter = \"16n\";\r\n} else {\r\n\tbeats = [0, 1, 2, 3, 4, 5, 6, 7];\r\n\tinter = \"8n\";\r\n}\r\n\r\nconst keyboardAudio = {\r\n  \"A\" : \"./audio/keyboard/A1.[mp3|ogg]\" ,\r\n  \"A#\": \"./audio/keyboard/As1.[mp3|ogg]\",\r\n  \"Bb\": \"./audio/keyboard/As1.[mp3|ogg]\",\r\n  \"B\" : \"./audio/keyboard/B1.[mp3|ogg]\" ,\r\n  \"Cb\": \"./audio/keyboard/B1.[mp3|ogg]\" ,\r\n  \"C\" : \"./audio/keyboard/C2.[mp3|ogg]\" ,\r\n  \"C#\": \"./audio/keyboard/Cs2.[mp3|ogg]\",\r\n  \"Db\": \"./audio/keyboard/Cs2.[mp3|ogg]\",\r\n  \"D\" : \"./audio/keyboard/D2.[mp3|ogg]\" ,\r\n  \"D#\": \"./audio/keyboard/Ds2.[mp3|ogg]\",\r\n  \"Eb\": \"./audio/keyboard/Ds2.[mp3|ogg]\",\r\n  \"E\" : \"./audio/keyboard/E2.[mp3|ogg]\" ,\r\n  \"Fb\": \"./audio/keyboard/E2.[mp3|ogg]\" ,\r\n  \"F\" : \"./audio/keyboard/F2.[mp3|ogg]\" ,\r\n  \"F#\": \"./audio/keyboard/Fs2.[mp3|ogg]\",\r\n  \"Gb\": \"./audio/keyboard/Fs2.[mp3|ogg]\",\r\n  \"G\" : \"./audio/keyboard/G2.[mp3|ogg]\" ,\r\n  \"G#\": \"./audio/keyboard/Gs1.[mp3|ogg]\",\r\n  \"Ab\": \"./audio/keyboard/Gs1.[mp3|ogg]\",\r\n};\r\n\r\nconst percussionAudio = {\r\n  \"hh\"   : \"./audio/percussion/hh.[mp3|ogg]\"   ,\r\n  \"hho\"  : \"./audio/percussion/hho.[mp3|ogg]\"  ,\r\n  \"kick\" : \"./audio/percussion/kick.[mp3|ogg]\" ,\r\n  \"snare\": \"./audio/percussion/snare.[mp3|ogg]\",\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/settings.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;