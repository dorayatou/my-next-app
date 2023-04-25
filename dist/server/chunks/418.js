"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 3047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ logger)
/* harmony export */ });
const logger = (domain)=>(...rest)=>{
        // if (import.meta.env.MODE === 'development') {
        console.log(domain, ...rest);
    // }
    };


/***/ }),

/***/ 5615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getAibabySocket)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const SOCKET_URL = "http://10.1.100.60:5003";
// const SOCKET_URL = "http://10.1.31.207:5003";
// const SOCKET_URL = "http://localhost:3000/api/socket";
let socket;
function getAibabySocket() {
    console.log("getAibabySocket");
    if (!socket) {
        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(`${SOCKET_URL}/aibaby`, {
            transports: [
                "websocket"
            ]
        });
    }
    return socket;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useGetMessageQuery),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7387);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5615);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3047);
/* harmony import */ var _graphSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1723);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services__WEBPACK_IMPORTED_MODULE_2__]);
_services__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const log = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .k)("api");
const api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "api",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:3000/api/socket"
    }),
    endpoints: (builder)=>({
            getMessage: builder.query({
                // @ts-ignore
                queryFn: ()=>({
                        data: []
                    }),
                async onCacheEntryAdded (arg, { cacheDataLoaded , cacheEntryRemoved , dispatch  }) {
                    try {
                        await cacheDataLoaded;
                        // await fetch("http://localhost:3000/api/socket");
                        // const socket = io({
                        //   transports: ["websocket"],
                        // });
                        const socket = (0,_services__WEBPACK_IMPORTED_MODULE_2__/* .getAibabySocket */ .y)();
                        socket.on("connect", ()=>{
                            log("connect");
                            socket.emit("connect success");
                        });
                        socket.on("connect_error", (error)=>{
                            log("connect_error");
                        });
                        socket.on("disconnect", ()=>{
                            log("disconnect");
                        });
                        // pg信息，pg数据结构tree->graph，add nlp directive
                        socket.on(_message__WEBPACK_IMPORTED_MODULE_1__/* ["default"].RecvPgPlus */ .Z.RecvPgPlus, ({ data  })=>{
                            log("data====", data);
                            dispatch((0,_graphSlice__WEBPACK_IMPORTED_MODULE_3__/* .changePg */ .X$)(data));
                        });
                        await cacheEntryRemoved;
                        socket.off("connect");
                        socket.off("connect_error");
                        socket.off("disconnect");
                        socket.off(_message__WEBPACK_IMPORTED_MODULE_1__/* ["default"].RecvPgPlus */ .Z.RecvPgPlus);
                    } catch  {}
                }
            })
        })
});
const { useGetMessageQuery  } = api;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X$": () => (/* binding */ changePg),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aR": () => (/* binding */ selectPg)
/* harmony export */ });
/* unused harmony export graphSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const graphSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "graph",
    initialState: {
        pg: null
    },
    reducers: {
        changePg: (state, { payload  })=>{
            state.pg = payload;
        }
    }
});
const selectPg = (state)=>state.graphSlice.pg;
const { changePg  } = graphSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (graphSlice.reducer);


/***/ }),

/***/ 7387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var AibabyIoEvent;
(function(AibabyIoEvent) {
    AibabyIoEvent["RecvTask"] = "task";
    AibabyIoEvent["RecvScore"] = "score";
    AibabyIoEvent["RecvAttributes"] = "attributes";
    AibabyIoEvent["RecvPgPlus"] = "pgplus";
    AibabyIoEvent["RecvCv"] = "media";
    AibabyIoEvent["RecvNlp"] = "media_nlp";
    AibabyIoEvent["RecvAudio"] = "media_audio";
    AibabyIoEvent["SendAudio"] = "audio";
})(AibabyIoEvent || (AibabyIoEvent = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AibabyIoEvent);


/***/ })

};
;