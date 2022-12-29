"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./src/components/ShipMenu.tsx":
/*!*************************************!*\
  !*** ./src/components/ShipMenu.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ShipTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipTemplate */ \"./src/components/ShipTemplate.tsx\");\n\n\n\nconst ShipMenu = (param)=>{\n    let { ships , active , setActiveShip  } = param;\n    const color = (number)=>{\n        if (number) return \"bg-light-blue\";\n        return \"bg-gray-400\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between w-full mb-4 max-w-[450px] flex-wrap\",\n        children: ships?.map((ship, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center cursor-pointer\",\n                onClick: ()=>{\n                    setActiveShip(index);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: `flex mb-2 ${active === index ? \"outline outline-2 outline-black -outline-offset-3 \" : \"\"}`,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ShipTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            length: ship.length,\n                            count: ship.count\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Zzz\\\\sea-fight\\\\src\\\\components\\\\ShipMenu.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 8\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Zzz\\\\sea-fight\\\\src\\\\components\\\\ShipMenu.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: `${ship.count === 0 ? \"text-gray-400\" : \"\"}`,\n                        children: ship.count\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Zzz\\\\sea-fight\\\\src\\\\components\\\\ShipMenu.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, ship.length, true, {\n                fileName: \"D:\\\\Zzz\\\\sea-fight\\\\src\\\\components\\\\ShipMenu.tsx\",\n                lineNumber: 25,\n                columnNumber: 6\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Zzz\\\\sea-fight\\\\src\\\\components\\\\ShipMenu.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ShipMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShipMenu);\nvar _c;\n$RefreshReg$(_c, \"ShipMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaGlwTWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBNkM7QUFDSDtBQWExQyxNQUFNRSxXQUE2QixTQUFzQztRQUFyQyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsY0FBYSxFQUFFO0lBQ25FLE1BQU1DLFFBQVEsQ0FBQ0MsU0FBbUI7UUFDakMsSUFBSUEsUUFBUSxPQUFPO1FBQ25CLE9BQU87SUFDUjtJQUVBLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiTixPQUFPTyxJQUFJLENBQUNDLE1BQU1DLFFBQVU7WUFDNUIscUJBQ0MsOERBQUNKO2dCQUNBQyxXQUFVO2dCQUVWSSxTQUFTLElBQU07b0JBQ2RSLGNBQWNPO2dCQUNmOztrQ0FDQSw4REFBQ0o7d0JBQ0FDLFdBQVcsQ0FBQyxVQUFVLEVBQ3JCTCxXQUFXUSxRQUFRLHVEQUF1RCxFQUFFLENBQzVFLENBQUM7a0NBQ0YsNEVBQUNYLHFEQUFZQTs0QkFBQ2EsUUFBUUgsS0FBS0csTUFBTTs0QkFBRUMsT0FBT0osS0FBS0ksS0FBSzs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDUDt3QkFBSUMsV0FBVyxDQUFDLEVBQUVFLEtBQUtJLEtBQUssS0FBSyxJQUFJLGtCQUFrQixFQUFFLENBQUMsQ0FBQztrQ0FBR0osS0FBS0ksS0FBSzs7Ozs7OztlQVZwRUosS0FBS0csTUFBTTs7Ozs7UUFhbkI7Ozs7OztBQUdIO0tBNUJNWjtBQThCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaGlwTWVudS50c3g/NjczMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNoaXBUZW1wbGF0ZSBmcm9tICcuL1NoaXBUZW1wbGF0ZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaGlwIHtcclxuXHRjb3VudDogbnVtYmVyO1xyXG5cdGxlbmd0aDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2hpcE1lbnVQcm9wIHtcclxuXHRjaGlsZHJlbj86IFJlYWN0Tm9kZTtcclxuXHRzaGlwczogSVNoaXBbXTtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmVTaGlwOiAoc2hpcDogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcbmNvbnN0IFNoaXBNZW51OiBGQzxTaGlwTWVudVByb3A+ID0gKHsgc2hpcHMsIGFjdGl2ZSwgc2V0QWN0aXZlU2hpcCB9KSA9PiB7XHJcblx0Y29uc3QgY29sb3IgPSAobnVtYmVyOiBudW1iZXIpID0+IHtcclxuXHRcdGlmIChudW1iZXIpIHJldHVybiAnYmctbGlnaHQtYmx1ZSc7XHJcblx0XHRyZXR1cm4gJ2JnLWdyYXktNDAwJztcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBtYi00IG1heC13LVs0NTBweF0gZmxleC13cmFwJz5cclxuXHRcdFx0e3NoaXBzPy5tYXAoKHNoaXAsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdGtleT17c2hpcC5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBY3RpdmVTaGlwKGluZGV4KTtcclxuXHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4IG1iLTIgJHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZSA9PT0gaW5kZXggPyAnb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1ibGFjayAtb3V0bGluZS1vZmZzZXQtMyAnIDogJydcclxuXHRcdFx0XHRcdFx0XHR9YH0+XHJcblx0XHRcdFx0XHRcdFx0PFNoaXBUZW1wbGF0ZSBsZW5ndGg9e3NoaXAubGVuZ3RofSBjb3VudD17c2hpcC5jb3VudH0gLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzaGlwLmNvdW50ID09PSAwID8gJ3RleHQtZ3JheS00MDAnIDogJyd9YH0+e3NoaXAuY291bnR9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwTWVudTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2hpcFRlbXBsYXRlIiwiU2hpcE1lbnUiLCJzaGlwcyIsImFjdGl2ZSIsInNldEFjdGl2ZVNoaXAiLCJjb2xvciIsIm51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNoaXAiLCJpbmRleCIsIm9uQ2xpY2siLCJsZW5ndGgiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ShipMenu.tsx\n"));

/***/ })

});