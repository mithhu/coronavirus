webpackHotUpdate(1,{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "G:\\corona\\components\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var SimpleExample = function SimpleExample() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(51.505),
      lat = _useState[0],
      setLat = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-0.09),
      lng = _useState2[0],
      setLng = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1.4),
      zoom = _useState3[0],
      setZoom = _useState3[1];

  var position = [lat, lng];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      locations = _useState4[0],
      setLocations = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://covid19.mathdro.id/api/confirmed").then(function (res) {
                return res.json();
              }));

            case 2:
              response = _context.sent;
              setLocations(response);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return console.log(locations);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    style: {
      width: "700px",
      height: "380px"
    },
    center: position,
    zoom: zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], {
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), locations && locations.map(function (location) {
    return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      style: {
        width: "1px !important"
      },
      position: [location.lat, location["long"]],
      key: location.lat,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleExample);

/***/ })

})
//# sourceMappingURL=1.b8a5adff5bad229234de.hot-update.js.map