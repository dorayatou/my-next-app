"use strict";
(() => {
var exports = {};
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 9505:
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ 8468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hy": () => (/* binding */ frame1)
/* harmony export */ });
/* unused harmony exports graphdata, frame2, frame3 */
const graphdata = {
    data: {
        nodes: [
            {
                id: "Scene",
                type: "atom",
                label: "Scene"
            },
            {
                id: "Dirt",
                type: "atom",
                label: "Dirt",
                has_parent: true
            },
            {
                id: "ToyCube_Cube_Green_0",
                type: "atom",
                label: "ToyCube_Cube_Green_0",
                has_parent: true
            },
            {
                id: "ToyCube_Cylinder_Yellow_0",
                type: "atom",
                label: "ToyCube_Cylinder_Yellow_0",
                has_parent: true
            },
            {
                id: "ToyCube_Cuboid_Yellow_0",
                type: "atom",
                label: "ToyCube_Cuboid_Yellow_0",
                has_parent: true
            },
            {
                id: "PaperBall_0",
                type: "atom",
                label: "PaperBall_0",
                has_parent: true
            },
            {
                id: "Cup",
                type: "atom",
                label: "Cup",
                has_parent: true
            },
            {
                id: "ToyCube_Cylinder_Green_0",
                type: "atom",
                label: "ToyCube_Cylinder_Green_0",
                has_parent: true
            },
            {
                id: "Sponge",
                type: "atom",
                label: "Sponge",
                has_parent: true
            },
            {
                id: "PaperBall_1",
                type: "atom",
                label: "PaperBall_1",
                has_parent: true
            },
            {
                id: "Tomato",
                type: "atom",
                label: "Tomato",
                has_parent: true
            },
            {
                id: "Bread",
                type: "atom",
                label: "Bread",
                has_parent: true
            },
            {
                id: "Water",
                type: "atom",
                label: "Water",
                has_parent: true
            },
            {
                id: "Box",
                type: "atom",
                label: "Box",
                has_parent: true
            },
            {
                id: "ToyCube_Cuboid_Blue_0",
                type: "atom",
                label: "ToyCube_Cuboid_Blue_0",
                has_parent: true
            },
            {
                id: "Plane",
                type: "atom",
                label: "Plane",
                has_parent: true
            },
            {
                id: "Table_1",
                type: "atom",
                label: "Table_1",
                has_parent: true
            },
            {
                id: "Table_0",
                type: "atom",
                label: "Table_0",
                has_parent: true
            },
            {
                id: "ToyCube_Cylinder_Red_0",
                type: "atom",
                label: "ToyCube_Cylinder_Red_0",
                has_parent: true
            },
            {
                id: "Robotbaby",
                type: "atom",
                label: "Robotbaby",
                has_parent: true
            },
            {
                id: "ToyCube_Cube_Red_0",
                type: "atom",
                label: "ToyCube_Cube_Red_0",
                has_parent: true
            },
            {
                id: "Bucket",
                type: "atom",
                label: "Bucket",
                has_parent: true
            },
            {
                id: "ToyCube_Cuboid_Red_0",
                type: "atom",
                label: "ToyCube_Cuboid_Red_0",
                has_parent: true
            },
            {
                id: "ToyCube_Cylinder_Blue_0",
                type: "atom",
                label: "ToyCube_Cylinder_Blue_0",
                has_parent: true
            },
            {
                id: "ToyCube_Cube_Blue_0",
                type: "atom",
                label: "ToyCube_Cube_Blue_0",
                has_parent: true
            },
            {
                id: "ToyCube_Cube_Yellow_0",
                type: "atom",
                label: "ToyCube_Cube_Yellow_0",
                has_parent: true
            },
            {
                id: "Toy",
                type: "atom",
                label: "Toy",
                has_parent: true
            },
            {
                id: "Floor",
                has_parent: false,
                type: "atom",
                label: "Floor"
            }
        ],
        edges: [
            {
                source: "Table_0",
                target: "Dirt",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_1",
                target: "ToyCube_Cube_Green_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_1",
                target: "ToyCube_Cylinder_Yellow_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "ToyCube_Cube_Yellow_0",
                target: "ToyCube_Cuboid_Yellow_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "PaperBall_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Cup",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_1",
                target: "ToyCube_Cylinder_Green_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Sponge",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "PaperBall_1",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Tomato",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Bread",
                type: "On",
                label: "isOn"
            },
            {
                source: "Cup",
                target: "Water",
                type: "In",
                label: "isIn"
            },
            {
                source: "Floor",
                target: "Box",
                type: "On",
                label: "isOn"
            },
            {
                source: "ToyCube_Cylinder_Blue_0",
                target: "ToyCube_Cuboid_Blue_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Plane",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Table_1",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Table_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_1",
                target: "ToyCube_Cylinder_Red_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Robotbaby",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_1",
                target: "ToyCube_Cube_Red_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Bucket",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_1",
                target: "ToyCube_Cuboid_Red_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "ToyCube_Cube_Blue_0",
                target: "ToyCube_Cylinder_Blue_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_1",
                target: "ToyCube_Cube_Blue_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_1",
                target: "ToyCube_Cube_Yellow_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Toy",
                type: "On",
                label: "isOn"
            },
            {
                source: "Scene",
                target: "Floor"
            }
        ]
    }
};
const frame1 = {
    data: {
        nodes: [
            {
                id: "Scene",
                type: "atom",
                label: "Scene"
            },
            {
                id: "Dirt",
                type: "atom",
                label: "Dirt",
                has_parent: true
            },
            {
                id: "PaperBall_0",
                type: "atom",
                label: "PaperBall_0",
                has_parent: true
            },
            {
                id: "Cup",
                type: "atom",
                label: "Cup",
                has_parent: true
            },
            {
                id: "Sponge",
                type: "atom",
                label: "Sponge",
                has_parent: true
            },
            {
                id: "PaperBall_1",
                type: "atom",
                label: "PaperBall_1",
                has_parent: true
            },
            {
                id: "Tomato",
                type: "atom",
                label: "Tomato",
                has_parent: true
            },
            {
                id: "Bread",
                type: "atom",
                label: "Bread",
                has_parent: true
            },
            {
                id: "Water",
                type: "atom",
                label: "Water",
                has_parent: true
            },
            {
                id: "Box",
                type: "atom",
                label: "Box",
                has_parent: true
            },
            {
                id: "Plane",
                type: "atom",
                label: "Plane",
                has_parent: true
            },
            {
                id: "Table_1",
                type: "atom",
                label: "Table_1",
                has_parent: true
            },
            {
                id: "Table_0",
                type: "atom",
                label: "Table_0",
                has_parent: true
            },
            {
                id: "Robotbaby",
                type: "atom",
                label: "Robotbaby",
                has_parent: true
            },
            {
                id: "Bucket",
                type: "atom",
                label: "Bucket",
                has_parent: true
            },
            {
                id: "Toy",
                type: "atom",
                label: "Toy",
                has_parent: true
            },
            {
                id: "Floor",
                has_parent: false,
                type: "atom",
                label: "Floor"
            }
        ],
        edges: [
            {
                source: "Table_0",
                target: "Dirt",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "PaperBall_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Cup",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Sponge",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "PaperBall_1",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Tomato",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Bread",
                type: "On",
                label: "isOn"
            },
            {
                source: "Cup",
                target: "Water",
                type: "In",
                label: "isIn"
            },
            {
                source: "Floor",
                target: "Box",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Plane",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Table_1",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Table_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Robotbaby",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Bucket",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Toy",
                type: "On",
                label: "isOn"
            },
            {
                source: "Scene",
                target: "Floor"
            }
        ]
    }
};
const frame2 = {
    data: {
        nodes: [
            {
                id: "Scene",
                type: "atom",
                label: "Scene"
            },
            {
                id: "Dirt",
                type: "atom",
                label: "Dirt",
                has_parent: true
            },
            {
                id: "PaperBall_0",
                type: "atom",
                label: "PaperBall_0",
                has_parent: true
            },
            {
                id: "Cup",
                type: "atom",
                label: "Cup",
                has_parent: true
            },
            {
                id: "Sponge",
                type: "atom",
                label: "Sponge",
                has_parent: true
            },
            {
                id: "PaperBall_1",
                type: "atom",
                label: "PaperBall_1",
                has_parent: true
            },
            {
                id: "Tomato",
                type: "atom",
                label: "Tomato",
                has_parent: true
            },
            {
                id: "Bread",
                type: "atom",
                label: "Bread",
                has_parent: true
            },
            {
                id: "Water",
                type: "atom",
                label: "Water",
                has_parent: true
            },
            {
                id: "Box",
                type: "atom",
                label: "Box",
                has_parent: true
            },
            {
                id: "Plane",
                type: "atom",
                label: "Plane",
                has_parent: true
            },
            {
                id: "Table_1",
                type: "atom",
                label: "Table_1",
                has_parent: true
            },
            {
                id: "Table_0",
                type: "atom",
                label: "Table_0",
                has_parent: true
            },
            {
                id: "Robotbaby",
                type: "atom",
                label: "Robotbaby",
                has_parent: true
            },
            {
                id: "Bucket",
                type: "atom",
                label: "Bucket",
                has_parent: true
            },
            {
                id: "Toy",
                type: "atom",
                label: "Toy",
                has_parent: true
            },
            {
                id: "Floor",
                has_parent: false,
                type: "atom",
                label: "Floor"
            }
        ],
        edges: [
            {
                source: "Table_0",
                target: "Dirt",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "PaperBall_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Cup",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Sponge",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "PaperBall_1",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Tomato",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Bread",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Water",
                type: "In",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Box",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Plane",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Table_1",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Table_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Robotbaby",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Bucket",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Toy",
                type: "On",
                label: "isOn"
            },
            {
                source: "Scene",
                target: "Floor"
            }
        ]
    }
};
const frame3 = {
    data: {
        nodes: [
            {
                id: "Scene",
                type: "atom",
                label: "Scene"
            },
            {
                id: "Dirt",
                type: "atom",
                label: "Dirt",
                has_parent: true
            },
            {
                id: "PaperBall_0",
                type: "atom",
                label: "PaperBall_0",
                has_parent: true
            },
            {
                id: "Cup",
                type: "atom",
                label: "Cup123",
                has_parent: true
            },
            {
                id: "Sponge",
                type: "atom",
                label: "Sponge",
                has_parent: true
            },
            {
                id: "PaperBall_1",
                type: "atom",
                label: "PaperBall_1",
                has_parent: true
            },
            {
                id: "Tomato",
                type: "atom",
                label: "Tomato",
                has_parent: true
            },
            {
                id: "Bread",
                type: "atom",
                label: "Bread",
                has_parent: true
            },
            {
                id: "Water",
                type: "atom",
                label: "Water",
                has_parent: true
            },
            {
                id: "Box",
                type: "atom",
                label: "Box",
                has_parent: true
            },
            {
                id: "Plane",
                type: "atom",
                label: "Plane",
                has_parent: true
            },
            {
                id: "Table_1",
                type: "atom",
                label: "Table_1",
                has_parent: true
            },
            {
                id: "Table_0",
                type: "atom",
                label: "Table_0",
                has_parent: true
            },
            {
                id: "Robotbaby",
                type: "atom",
                label: "Robotbaby",
                has_parent: true
            },
            {
                id: "Bucket",
                type: "atom",
                label: "Bucket",
                has_parent: true
            },
            {
                id: "Toy",
                type: "atom",
                label: "Toy",
                has_parent: true
            },
            {
                id: "Floor",
                has_parent: false,
                type: "atom",
                label: "Floor"
            }
        ],
        edges: [
            {
                source: "Table_0",
                target: "Dirt",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "PaperBall_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Cup",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Sponge",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "PaperBall_1",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Tomato",
                type: "On",
                label: "isOn"
            },
            {
                source: "Table_0",
                target: "Bread",
                type: "On",
                label: "isOn"
            },
            {
                source: "Cup",
                target: "Water",
                type: "In",
                label: "isIn"
            },
            {
                source: "Floor",
                target: "Box",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Plane",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Table_1",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Table_0",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Robotbaby",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Bucket",
                type: "On",
                label: "isOn"
            },
            {
                source: "Floor",
                target: "Toy",
                type: "On",
                label: "isOn"
            },
            {
                source: "Scene",
                target: "Floor"
            }
        ]
    }
};


/***/ }),

/***/ 4725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getPgData": () => (/* binding */ getPgData)
/* harmony export */ });
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9505);
/* harmony import */ var _mock_pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);
socket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// api下面是next.js的serverless


const log = console.log;
function getPgData(pgdata) {
    const result = JSON.parse(JSON.stringify(pgdata));
    // let random = Math.random();
    // if (random > 0.6) {
    result.data.target_pg = {
        data: {
            id: "Tomato-Box",
            source: "Box",
            target: "Dirt",
            type: "dash-line",
            label: "nlp label"
        },
        classes: "dash-line"
    };
    // } else if (random > 0.2) {
    //   return result;
    // } else {
    //   return {
    //     data: null,
    //   };
    // }
    return result;
}
let pgTimer;
let i = 0;
const SocketHandler = (req, res)=>{
    if (res.socket.server.io) {
        console.log("Socket is already running");
    } else {
        console.log("Socket is initializing");
        const httpServer = res.socket.server;
        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(httpServer);
        io.on("error", ()=>{
            log("error");
        });
        io.on("connection", (socket)=>{
            log("id", socket.id);
            const dcenterNamespace = socket.nsp;
            clearInterval(pgTimer);
            // pgTimer = setInterval(() => {
            //   if (i === 0) {
            //     const pg = getPgData(frame2);
            //     dcenterNamespace.emit("pgplus", pg);
            //     i = 1;
            //   } else {
            //     dcenterNamespace.emit("pgplus", getPgData(frame1));
            //     i = 0;
            //   }
            // }, 1000);
            dcenterNamespace.emit("pgplus", getPgData(_mock_pg__WEBPACK_IMPORTED_MODULE_1__/* .frame1 */ .Hy));
        });
        res.socket.server.io = io;
    }
    res.end();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4725));
module.exports = __webpack_exports__;

})();