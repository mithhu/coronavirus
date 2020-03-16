exports.ids = [0];
exports.modules = {

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ "react-leaflet");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\corona\\components\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SimpleExample = () => {
  const {
    0: lat,
    1: setLat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(51.505);
  const {
    0: lng,
    1: setLng
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-0.09);
  const {
    0: zoom,
    1: setZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1.4);
  const position = [lat, lng];
  const {
    0: locations,
    1: setLocations
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      const response = await fetch("https://covid19.mathdro.id/api/confirmed").then(res => res.json());
      setLocations(response);
    }

    fetchData();
  }, []);
  const myIcon = L.icon({
    // iconUrl: require('../assets/marker.svg'),
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => console.log(locations),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Map"], {
    style: {
      width: "700px",
      height: "380px"
    },
    center: position,
    zoom: zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"], {
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), locations && locations.map(location => __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    position: [location.lat, location.long],
    key: location.lat,
    icon: myIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleExample);

/***/ })

};;
//# sourceMappingURL=0.js.map