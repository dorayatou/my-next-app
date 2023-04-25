"use strict";
exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 9706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A3": () => (/* binding */ mirrorPg),
/* harmony export */   "Nh": () => (/* binding */ processPg),
/* harmony export */   "Wi": () => (/* binding */ mapEdgesData)
/* harmony export */ });
/* unused harmony exports graphdata, processGraphData, demoData, demoData2, processNewObj, default */
// graph data
const graphdata = {
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
};
function processGraphData(graphdata) {
    graphdata.nodes.forEach((node)=>{
        node.data = {
            label: node.label
        };
    });
    graphdata.edges.forEach((edge)=>{
        edge.data = {
            label: edge.label,
            source: edge.source,
            target: edge.target
        };
    });
    return graphdata;
}
const demoData = {
    nodes: [
        {
            data: {
                id: "Scene",
                type: "atom",
                label: "Scene",
                parent: "A"
            },
            classes: "bottom-center",
            position: {
                x: 100,
                y: 100
            }
        },
        {
            data: {
                id: "Dirt",
                type: "atom",
                label: "Dirt",
                parent: "A"
            }
        },
        {
            data: {
                id: "ToyCube_Cube_Green_0",
                type: "atom",
                label: "ToyCube_Cube_Green_0",
                has_parent: true,
                parent: "A"
            }
        },
        {
            data: {
                id: "ToyCube_Cylinder_Yellow_0",
                type: "atom",
                label: "ToyCube_Cylinder_Yellow_0",
                parent: "A"
            }
        },
        {
            data: {
                id: "Sponge",
                type: "atom",
                label: "Sponge",
                has_parent: true
            }
        },
        {
            data: {
                id: "PaperBall_0",
                type: "atom",
                label: "PaperBall_0",
                has_parent: true
            }
        },
        {
            data: {
                id: "ToyCube_Cuboid_Blue_0",
                type: "atom",
                label: "ToyCube_Cuboid_Blue_0",
                has_parent: true
            }
        },
        {
            data: {
                id: "Plane",
                type: "atom",
                label: "Plane",
                has_parent: true
            }
        },
        // {
        //   data: { id: "Table_1", type: "atom", label: "Table_1", has_parent: true },
        // },
        {
            data: {
                id: "Table_0",
                type: "atom",
                label: "Table_0",
                has_parent: true
            }
        },
        {
            data: {
                id: "A"
            },
            style: {
                "background-color": "#eee"
            }
        }
    ],
    edges: [
        {
            data: {
                source: "Scene",
                target: "Dirt",
                label: "isOn"
            }
        },
        {
            data: {
                source: "Scene",
                target: "ToyCube_Cube_Green_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "Scene",
                target: "ToyCube_Cylinder_Yellow_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "Sponge",
                target: "PaperBall_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "ToyCube_Cube_Green_0",
                target: "ToyCube_Cuboid_Blue_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "ToyCube_Cuboid_Blue_0",
                target: "Table_0",
                label: "isOn"
            }
        }
    ]
};
const demoData2 = {
    nodes: [
        {
            data: {
                id: "Scene",
                type: "atom",
                label: "Scene",
                parent: "A"
            },
            classes: "bottom-center",
            position: {
                x: 100,
                y: 100
            }
        },
        {
            data: {
                id: "Dirt",
                type: "atom",
                label: "Dirt",
                parent: "A"
            }
        },
        {
            data: {
                id: "ToyCube_Cube_Green_0",
                type: "atom",
                label: "ToyCube_Cube_Green_0",
                has_parent: true,
                parent: "A"
            }
        },
        {
            data: {
                id: "ToyCube_Cylinder_Yellow_0",
                type: "atom",
                label: "ToyCube_Cylinder_Yellow_0",
                parent: "A"
            }
        },
        {
            data: {
                id: "Sponge",
                type: "atom",
                label: "Sponge",
                has_parent: true,
                renderedPosition: {
                    x: 100,
                    y: 100
                }
            }
        },
        {
            data: {
                id: "PaperBall_0",
                type: "atom",
                label: "PaperBall_0",
                has_parent: true
            }
        },
        {
            data: {
                id: "ToyCube_Cuboid_Blue_0",
                type: "atom",
                label: "ToyCube_Cuboid_Blue_0",
                has_parent: true
            }
        },
        {
            data: {
                id: "Plane",
                type: "atom",
                label: "Plane",
                has_parent: true
            }
        },
        // {
        //   data: { id: "Table_1", type: "atom", label: "Table_1", has_parent: true },
        // },
        {
            data: {
                id: "Table_0",
                type: "atom",
                label: "Table_0",
                has_parent: true
            }
        },
        {
            data: {
                id: "Tomato",
                type: "atom",
                label: "Tomato",
                has_parent: true
            }
        },
        {
            data: {
                id: "A"
            }
        }
    ],
    edges: [
        {
            data: {
                source: "Scene",
                target: "Dirt",
                label: "isOn"
            }
        },
        {
            data: {
                source: "Scene",
                target: "ToyCube_Cube_Green_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "Scene",
                target: "ToyCube_Cylinder_Yellow_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "Sponge",
                target: "PaperBall_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "ToyCube_Cube_Green_0",
                target: "ToyCube_Cuboid_Blue_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "ToyCube_Cuboid_Blue_0",
                target: "Table_0",
                label: "isOn"
            }
        },
        {
            data: {
                source: "ToyCube_Cuboid_Blue_0",
                target: "Tomato",
                label: "isOn"
            }
        },
        {
            data: {
                source: "ToyCube_Cuboid_Blue_0",
                target: "Plane",
                label: "isOn"
            }
        }
    ]
};
// build data: 1、两颗子树
const mirrorPg = {
    nodes: [
        // { data: { id: "floor", label: "floor", type: "atom" } },
        {
            data: {
                id: "aibaby",
                label: "aibaby",
                type: "atom"
            }
        },
        // { data: { id: "obj1", label: "obj1", type: "atom" } },
        // { data: { id: "obj2", label: "obj2", type: "atom" } },
        // { data: { id: "obj3", label: "obj3", type: "atom" } },
        // { data: { id: "obj4", label: "obj4", type: "atom" } },
        {
            data: {
                id: "wall",
                label: "wall",
                type: "atom"
            }
        },
        {
            data: {
                id: "mirror",
                label: "mirror",
                type: "atom"
            }
        },
        {
            data: {
                id: "baby",
                label: "baby",
                type: "atom"
            }
        },
        {
            data: {
                id: "obja",
                label: "obja",
                type: "atom"
            }
        },
        {
            data: {
                id: "objb",
                label: "objb",
                type: "atom"
            }
        }
    ],
    edges: [
        {
            data: {
                source: "Floor",
                target: "aibaby"
            }
        },
        // { data: { source: "floor", target: "obj1" } },
        // { data: { source: "floor", target: "obj2" } },
        // { data: { source: "floor", target: "obj3" } },
        // { data: { source: "floor", target: "obj4" } },
        {
            data: {
                source: "Floor",
                target: "wall"
            }
        },
        {
            data: {
                source: "wall",
                target: "mirror"
            }
        },
        {
            data: {
                source: "mirror",
                target: "baby"
            }
        },
        {
            data: {
                source: "mirror",
                target: "obja"
            }
        },
        {
            data: {
                source: "mirror",
                target: "objb"
            }
        }
    ]
};
const mapEdgesData = [
    {
        data: {
            source: "baby",
            target: "aibaby",
            type: "mapping",
            label: "baby label"
        }
    },
    {
        data: {
            source: "obja",
            target: "Toy",
            type: "mapping",
            label: "toy label"
        }
    },
    {
        data: {
            source: "objb",
            target: "Plane",
            type: "mapping",
            label: "plane label"
        }
    }
];
//  { id: "Scene", type: "atom", label: "Scene" },
const newRecord = (data)=>({
        data: data
    });
const processNewObj = (data)=>{
    const newObj = JSON.parse(JSON.stringify(data));
    const res = {
        nodes: [],
        edges: []
    };
    res.nodes = newObj.nodes.map(newRecord);
    res.edges = newObj.edges.map(newRecord);
    res.nodes.forEach((_, index)=>{
        if (_.data.id.indexOf("ToyCube_") > -1 || _.data.id === "Table_1") {
            _.data.parent = "A";
        } else if (table_0_ids.includes(_.data.id)) {
            _.data.parent = "B";
        }
    });
    res.nodes.push({
        data: {
            id: "A",
            label: "A"
        },
        classes: "parent"
    });
    res.nodes.push({
        data: {
            id: "B",
            label: "B"
        },
        classes: "parent"
    });
    return res;
};
const table_1_ids = (/* unused pure expression or super */ null && ([]));
const table_0_ids = (/* unused pure expression or super */ null && ([
    "Dirt",
    "Cup",
    "Tomato",
    "Bread",
    "Sponge",
    "Table_0",
    "Water"
]));
const newEdgeRecord = (data)=>{
    let newData = {
        data: data
    };
    newData.data.id = data.source + "-" + data.target;
    return newData;
};
const newNodeRecord = (data)=>{
    let newData = {
        data: data
    };
    return newData;
};
const processPg = (data)=>{
    const newObj = JSON.parse(JSON.stringify(data));
    const res = {
        nodes: [],
        edges: [],
        targetPg: null
    };
    res.nodes = newObj.nodes.map(newNodeRecord);
    res.edges = newObj.edges.map(newEdgeRecord);
    res.targetPg = newObj.target_pg;
    return res;
};
function test() {}


/***/ })

};
;