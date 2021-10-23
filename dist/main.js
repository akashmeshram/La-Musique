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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pianoPlayers\": () => (/* binding */ pianoPlayers),\n/* harmony export */   \"percussionPlayers\": () => (/* binding */ percussionPlayers)\n/* harmony export */ });\nconst pianoPlayers = new Tone.Players({\r\n  \"A\": \"./audio/casio/A1.[mp3|ogg]\",\r\n  \"A#\": \"./audio/casio/As1.[mp3|ogg]\",\r\n  \"Bb\": \"./audio/casio/As1.[mp3|ogg]\",\r\n  \"B\": \"./audio/casio/B1.[mp3|ogg]\",\r\n  \"Cb\": \"./audio/casio/B1.[mp3|ogg]\",\r\n  \"C\": \"./audio/casio/C2.[mp3|ogg]\",\r\n  \"C#\": \"./audio/casio/Cs2.[mp3|ogg]\",\r\n  \"Db\": \"./audio/casio/Cs2.[mp3|ogg]\",\r\n  \"D\": \"./audio/casio/D2.[mp3|ogg]\",\r\n  \"D#\": \"./audio/casio/Ds2.[mp3|ogg]\",\r\n  \"Eb\": \"./audio/casio/Ds2.[mp3|ogg]\",\r\n  \"E\": \"./audio/casio/E2.[mp3|ogg]\",\r\n  \"Fb\": \"./audio/casio/E2.[mp3|ogg]\",\r\n  \"F\": \"./audio/casio/F2.[mp3|ogg]\",\r\n  \"F#\": \"./audio/casio/Fs2.[mp3|ogg]\",\r\n  \"Gb\": \"./audio/casio/Fs2.[mp3|ogg]\",\r\n  \"G\": \"./audio/casio/G2.[mp3|ogg]\",\r\n  \"G#\": \"./audio/casio/Gs1.[mp3|ogg]\",\r\n  \"Ab\": \"./audio/casio/Gs1.[mp3|ogg]\",\r\n}, {\r\n  \"volume\": -10,\r\n  \"fadeOut\": \"64n\",\r\n}).toMaster();\r\n\r\nconst percussionPlayers = new Tone.Players({\r\n  \"hh\": \"./audio/percussion/hh.[mp3|ogg]\",\r\n  \"hho\": \"./audio/percussion/hho.[mp3|ogg]\",\r\n  \"kick\": \"./audio/percussion/kick.[mp3|ogg]\",\r\n  \"snare\": \"./audio/percussion/snare.[mp3|ogg]\",\r\n}, {\r\n  \"volume\": -10,\r\n  \"fadeOut\": \"4n\",\r\n}).toMaster();\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/Players.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"select\": () => (/* binding */ select),\n/* harmony export */   \"slider\": () => (/* binding */ slider),\n/* harmony export */   \"percussion\": () => (/* binding */ percussion),\n/* harmony export */   \"sequencer\": () => (/* binding */ sequencer),\n/* harmony export */   \"beats\": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_1__.beats),\n/* harmony export */   \"inter\": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_1__.inter)\n/* harmony export */ });\n/* harmony import */ var _MusicScale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MusicScale */ \"./src/MusicScale.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\r\n\r\n\r\nconst sequencer = new Nexus.Sequencer('#sequencer', {\r\n\t\t    'mode': 'toggle',\r\n\t\t    'rows': 7,\r\n\t\t    'columns': _settings__WEBPACK_IMPORTED_MODULE_1__.beats.length,\r\n\t\t});\r\n\r\nsequencer.colorize(\"accent\",\"#fdcc52\");\r\nsequencer.colorize(\"fill\",\"#212529\");\r\n\r\nconst percussion = new Nexus.Sequencer('#percussion', {\r\n\t\t    'mode': 'toggle',\r\n\t\t    'rows': 4,\r\n\t\t    'columns': _settings__WEBPACK_IMPORTED_MODULE_1__.beats.length,\r\n\t\t});\r\npercussion.colorize(\"accent\",\"#fdcc52\");\r\npercussion.colorize(\"fill\",\"#212529\");\r\n\r\nconst button = new Nexus.Button('#button', {\r\n\t\t    'mode': 'toggle',\r\n\t\t    'state': false\r\n\t\t});\r\n\r\nbutton.colorize(\"accent\",\"#7d5683\");\r\nbutton.colorize(\"fill\",\"#fdcc52\");\r\nbutton.colorize(\"mediumLight\",\"#7d5683\");\r\n\r\nconst slider = new Nexus.Slider('#slider', {\r\n\t\t    'mode': 'relative', \r\n\t\t    'min': 80,\r\n\t\t    'max': 200,\r\n\t\t    'step': 0,\r\n\t\t    'value': 120\r\n\t\t});\r\nslider.colorize(\"accent\",\"#7b4397\");\r\n\r\nconst text = new Nexus.Number('#text', {\r\n\t\t    'value': 6,\r\n\t\t    'min': 0,\r\n\t\t    'max': 20000,\r\n\t\t    'step': 1\r\n\t\t});\r\n\r\nconst select = new Nexus.Select('#notelist',{\r\n  'size': [80,30],\r\n  'options': Object.keys(_MusicScale__WEBPACK_IMPORTED_MODULE_0__.majorScale)\r\n})\r\n\r\ntext.link(slider);\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players */ \"./src/Players.js\");\n/* harmony import */ var _MusicScale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MusicScale */ \"./src/MusicScale.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\r\n\r\n\r\n\r\n\r\nlet scale = [\"C\", \"D\", \"E\", \"F\", \"G\", \"A\", \"B\"];\r\nlet pers = [\"hh\", \"hho\", \"kick\", \"snare\"];\r\n\r\nconst callbackLoop = (time, col) => {\r\n    let column1 = _UI__WEBPACK_IMPORTED_MODULE_2__.sequencer.matrix.column(col);\r\n    let column2 = _UI__WEBPACK_IMPORTED_MODULE_2__.percussion.matrix.column(col);\r\n    _UI__WEBPACK_IMPORTED_MODULE_2__.sequencer.next();\r\n    _UI__WEBPACK_IMPORTED_MODULE_2__.percussion.next();\r\n    for (let i = 0; i < 7; i++) {\r\n        if (column1[i] === 1) {\r\n            const vel = Math.random() * 0.5 + 0.5;\r\n            _Players__WEBPACK_IMPORTED_MODULE_0__.pianoPlayers.get(scale[i]).start(time, 0, \"4n\", 0, vel);\r\n        }\r\n    }\r\n    for (let i = 0; i < 4; i++) {\r\n        if (column2[i] === 1) {\r\n            const vel = Math.random() * 0.5 + 0.5;\r\n            _Players__WEBPACK_IMPORTED_MODULE_0__.percussionPlayers.get(pers[i]).start(time, 0, \"16n\", 0, vel);\r\n        }\r\n    }\r\n}\r\n\r\nconst music = new Tone.Sequence(callbackLoop, _settings__WEBPACK_IMPORTED_MODULE_3__.beats, _settings__WEBPACK_IMPORTED_MODULE_3__.inter);\r\n\r\nTone.Transport.start();\r\n\r\n_UI__WEBPACK_IMPORTED_MODULE_2__.select.on('change',function(v) {\r\n    scale = _MusicScale__WEBPACK_IMPORTED_MODULE_1__.majorScale[v.value];\r\n})\r\n\r\n_UI__WEBPACK_IMPORTED_MODULE_2__.slider.on('change', function(v) {\r\n    Tone.Transport.bpm.value = v;\r\n});\r\n\r\n_UI__WEBPACK_IMPORTED_MODULE_2__.button.on('change', function(v) {\r\n    if (v) {\r\n        Tone.context.resume().then(() => {\r\n            music.start();\r\n        });\r\n    } else {\r\n        Tone.context.resume().then(() => {\r\n            _UI__WEBPACK_IMPORTED_MODULE_2__.sequencer.stepper.value = 15;\r\n            _UI__WEBPACK_IMPORTED_MODULE_2__.sequencer.next();\r\n            _UI__WEBPACK_IMPORTED_MODULE_2__.percussion.stepper.value = 15;\r\n            _UI__WEBPACK_IMPORTED_MODULE_2__.percussion.next();\r\n            music.stop();\r\n        });\r\n    }\r\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"beats\": () => (/* binding */ beats),\n/* harmony export */   \"inter\": () => (/* binding */ inter)\n/* harmony export */ });\nlet beats;\r\nlet inter;\r\n\r\nif (window.matchMedia(\"(min-width: 768px)\").matches) {\r\n\tbeats = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\r\n\tinter = \"16n\";\r\n} else {\r\n\tbeats = [0, 1, 2, 3, 4, 5, 6, 7];\r\n\tinter = \"8n\";\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/settings.js?");

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