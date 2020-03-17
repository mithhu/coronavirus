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
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "G:\\corona\\components\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SimpleExample = () => {
  const {
    0: dailyData,
    1: setDailyData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: totalData,
    1: setTotalData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      const response = await fetch("https://covid19.mathdro.id/api/daily").then(res => res.json());
      setDailyData(response);
    }

    fetchData();

    async function fetchInfo() {
      const response = await fetch("https://covid19.mathdro.id/api/").then(res => res.json());
      setTotalData(response);
      console.log(response);
    }

    fetchInfo();
  }, []);
  let newData = [];

  const dataCollector = () => {
    let count = 1;

    for (let i = dailyData.length - 7; count < 8; i++, count++) {
      newData.push(dailyData[i]);
    }

    console.log(newData);
  };

  dataCollector();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Total Confirmed:", " ", totalData.confirmed ? totalData.confirmed.value : undefined), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Total Reovered:", " ", totalData.recovered ? totalData.recovered.value : undefined), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Total Detah: ", totalData.deaths ? totalData.deaths.value : undefined)), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
    width: 730,
    height: 300,
    data: newData,
    margin: {
      top: 10,
      right: 30,
      left: 20,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "colorUv",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "5%",
    stopColor: "#FF0000",
    stopOpacity: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "95%",
    stopColor: "#FF0000",
    stopOpacity: 0.2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "colorPv",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "5%",
    stopColor: "#0CE30C",
    stopOpacity: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "95%",
    stopColor: "#0CE30C",
    stopOpacity: 0.2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    dataKey: "reportDateString",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    label: {
      value: "Total no. of cases",
      angle: -90,
      position: "insideBottomLeft"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
    strokeDasharray: "3 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
    type: "monotone",
    dataKey: "totalConfirmed",
    stroke: "#8884d8",
    fillOpacity: 1,
    fill: "url(#colorUv)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
    type: "monotone",
    dataKey: "totalRecovered",
    stroke: "#82ca9d",
    fillOpacity: 1,
    fill: "url(#colorPv)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleExample);

/***/ })

};;
//# sourceMappingURL=0.js.map