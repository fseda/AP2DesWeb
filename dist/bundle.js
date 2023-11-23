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

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadInitialData = exports.loadData = exports.fetchPlayers = exports.getPlayers = exports.all = exports.women = exports.men = void 0;\nvar events_1 = __webpack_require__(/*! ./events */ \"./js/events.js\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\nexports.men = \"masculino\";\nexports.women = \"feminino\";\nexports.all = \"all\";\nfunction getPlayers(playerType) {\n    return __awaiter(this, void 0, void 0, function () {\n        var response, e_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 3, , 4]);\n                    return [4 /*yield*/, fetchPlayers(playerType)];\n                case 1:\n                    response = _a.sent();\n                    if (!response.ok) {\n                        throw new Error(\"HTTP error. Status \".concat(response.status));\n                    }\n                    return [4 /*yield*/, response.json()];\n                case 2: return [2 /*return*/, _a.sent()];\n                case 3:\n                    e_1 = _a.sent();\n                    console.error(e_1);\n                    return [2 /*return*/, []];\n                case 4: return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getPlayers = getPlayers;\nfunction fetchPlayers(playerType) {\n    return __awaiter(this, void 0, void 0, function () {\n        var baseUrl, response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    baseUrl = 'https://botafogo-atletas.mange.li';\n                    return [4 /*yield*/, fetch(\"\".concat(baseUrl, \"/\").concat(playerType))];\n                case 1:\n                    response = _a.sent();\n                    return [2 /*return*/, response];\n            }\n        });\n    });\n}\nexports.fetchPlayers = fetchPlayers;\nfunction loadData(players) {\n    var gridContainer = document.querySelector('.grid-container');\n    gridContainer.innerHTML = '';\n    players.forEach(function (player) { return (0, utils_1.fill)(player); });\n}\nexports.loadData = loadData;\nfunction loadInitialData() {\n    return __awaiter(this, void 0, void 0, function () {\n        var players;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, getPlayers(exports.all)];\n                case 1:\n                    players = _a.sent();\n                    loadData(players);\n                    (0, utils_1.setHeading)(exports.all);\n                    (0, events_1.bindHoverEvents)();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.loadInitialData = loadInitialData;\n\n\n//# sourceURL=webpack:///./js/data.js?");

/***/ }),

/***/ "./js/events.js":
/*!**********************!*\
  !*** ./js/events.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.bindHoverEvents = void 0;\nvar data_1 = __webpack_require__(/*! ./data */ \"./js/data.js\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\nvar bindHoverEvents = function () {\n    document.querySelectorAll('.player-card').forEach(function (card) {\n        var description = card.querySelector('.player-description');\n        card.addEventListener('mouseenter', function () {\n            description.style.maxHeight = \"\".concat(description.scrollHeight, \"px\");\n        });\n        card.addEventListener('mouseleave', function () {\n            description.style.maxHeight = '60px';\n        });\n    });\n};\nexports.bindHoverEvents = bindHoverEvents;\nvar playerTypeSelector = document.getElementById('playertype-selector');\nvar gridContainer = document.querySelector('.grid-container');\nplayerTypeSelector.addEventListener('change', function (e) { return __awaiter(void 0, void 0, void 0, function () {\n    var playerType, players;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                playerType = playerTypeSelector.value;\n                gridContainer.style.opacity = '0';\n                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];\n            case 1:\n                _a.sent();\n                return [4 /*yield*/, (0, data_1.getPlayers)(playerType)];\n            case 2:\n                players = _a.sent();\n                (0, data_1.loadData)(players);\n                (0, utils_1.setHeading)(playerType);\n                (0, exports.bindHoverEvents)();\n                gridContainer.style.opacity = '1';\n                return [2 /*return*/];\n        }\n    });\n}); });\n\n\n//# sourceURL=webpack:///./js/events.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar data_1 = __webpack_require__(/*! ./data */ \"./js/data.js\");\nvar events_1 = __webpack_require__(/*! ./events */ \"./js/events.js\");\n(0, data_1.loadInitialData)().then(function () {\n    (0, events_1.bindHoverEvents)();\n    console.log('Initial data loaded');\n}).catch(function (e) {\n    console.error(e);\n});\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setHeading = exports.fill = void 0;\nvar data_1 = __webpack_require__(/*! ./data */ \"./js/data.js\");\nvar fill = function (player) {\n    var container = document.createElement('div');\n    container.className = 'player-card';\n    var title = document.createElement('h3');\n    title.innerText = player.nome;\n    title.className = 'player-name';\n    var image = document.createElement('img');\n    image.src = player.imagem;\n    image.className = 'player-image';\n    var description = document.createElement('p');\n    description.innerText = player.descricao;\n    description.className = 'player-description';\n    container.appendChild(title);\n    container.appendChild(image);\n    container.appendChild(description);\n    var gridContainer = document.querySelector('.grid-container');\n    if (!gridContainer) {\n        gridContainer = document.createElement('div');\n        gridContainer.className = 'grid-container';\n        document.body.appendChild(gridContainer);\n    }\n    gridContainer.appendChild(container);\n    // document.body.replaceChild(gridContainer, document.querySelector('.grid-container') as HTMLDivElement);\n};\nexports.fill = fill;\nfunction setHeading(playerType) {\n    var select = document.getElementById('playertype-selector');\n    var h1 = document.getElementById('playertype-heading');\n    h1.innerHTML = select.value === data_1.all ? 'Todos os jogadores' : select.value === data_1.men ? 'Jogadores do time masculino' : 'Jogadoras do time feminino';\n}\nexports.setHeading = setHeading;\n\n\n//# sourceURL=webpack:///./js/utils.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;