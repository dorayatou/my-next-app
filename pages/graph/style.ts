import { color } from "d3";

// Plain JSON format
const style = [
  {
    selector: "node",
    style: {
      shape: "ellipse",
      color: "#262626",
      width: "8px",
      height: "8px",
      "font-size": "6px",
      "text-halign": "center",
      "text-valign": "bottom",
      "text-wrap": "ellipsis",
      "text-max-width": "20px",
      "text-overflow-wrap": "anywhere",
    },
  },
  {
    selector: "node[type='atom']",
    style: {
      "background-color": "#FBBD08",
    },
  },
  {
    selector: "node[type='and']",
    style: {
      "background-color": "#FF4646",
    },
  },
  {
    selector: "node[id*='Green']",
    style: {
      "background-color": "#3c4d1e",
    },
  },
  {
    selector: "node[id*='Blue']",
    style: {
      "background-color": "#1f2a29",
    },
  },
  {
    selector: "node[id*='Yellow']",
    style: {
      "background-color": "#c99d30",
    },
  },
  {
    selector: "node[id*='Red']",
    style: {
      "background-color": "#bc4025",
    },
  },
  {
    selector: "node[id*='ToyCube']",
    style: {
      shape: "rectangle",
      width: 8,
      height: 8,
    },
  },
  {
    selector: "[label]",
    style: {
      content: "data(label)",
    },
  },
  {
    selector: "edge",
    style: {
      width: 0.5,
      "font-size": "6px",
      "text-rotation": "autorotate",
      "text-margin-x": 4,
      "curve-style": "straight",
    },
  },
  {
    selector: "edge[type='On']",
    style: {
      color: "#979797",
      "line-color": "#979797",
    },
  },
  {
    selector: "edge[type='In']",
    style: {
      color: "#ffc002",
      "line-color": "#ffc002",
    },
  },
  {
    selector: "edge[type='mapping']",
    style: {
      width: 0.5,
      "curve-style": "segments",
      "line-color": "#979797",
      "line-style": "dashed",
      "line-dash-pattern": [2, 2],
      "target-arrow-color": "#979797",
      "target-arrow-shape": "triangle",
      "edge-distances": "node-position",
    },
  },
  {
    selector: "edge[type='dash-line']",
    style: {
      width: 1,
      "line-color": "red",
      "target-arrow-color": "red",
      "target-arrow-shape": "triangle",
      "control-point-step-size": 20,
      "control-point-weight": 0.5,
      color: "red",
    },
  },
  {
    selector: "node.parent",
    style: {
      "background-color": "#fff",
    },
  },
];

export default style;
