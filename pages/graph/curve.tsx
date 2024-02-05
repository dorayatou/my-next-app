import { useEffect, useRef } from "react";
import cytoscape, { LayoutOptions } from "cytoscape";
import dagre, { DagreLayoutOptions } from "cytoscape-dagre";
import { getDistWeight } from "../../lib/graph/utils";
import { selectPg } from "../../store/graphSlice";
import { useSelector } from "react-redux";
import { intersection } from "d3";

cytoscape.use(dagre);
/**
 * 1、two sub-graph render
 * 2、two sub-graph node do cross
 *
 * 过程：
 * 1、cytoscape instance
 * 2、dag layout
 * 3、node label & edge label
 * 4、multi-graph
 * 5、viewport: zoom, pan
 * 6、style：改由样式表实现
 * 7、add single edge
 * 8、split draw area分区绘制
 * 9、custom line（mapping）
 * 10、多条线\双向关系
 * 11、sub_graph layout
 *
 */
export default function Home() {
  const graphRef = useRef<any>(null);
  // const pg = useSelector(selectPg);
  // const demoData = processNewObj(graphdata);
  useEffect(() => {
    if (!graphRef.current) {
      graphRef.current = cytoscape({
        container: document.getElementById("graph"),
        elements: [
          // 添加自定义节点
          {
            data: {
              id: "A",
              label: "A",
            },
            position: { x: 100, y: 125 },
          },
          {
            data: {
              id: "B",
              label: "B",
            },
            position: { x: 500, y: 125 },
          },
          {
            data: {
              id: "C",
              label: "C",
            },
            position: { x: 300, y: 300 },
          },
          {
            data: {
              source: "A",
              target: "B",
              label: "1",
              controlPointDistances: "0 0",
            },
          },
          {
            data: {
              source: "A",
              target: "C",
              label: "2",
              controlPointDistances: "0 0",
            },
          },
          {
            data: {
              source: "B",
              target: "C",
              label: "3",
              controlPointDistances: "0 0",
            },
          },
        ],
        style: [
          // 设置自定义节点的样式
          {
            selector: "node",
            style: {
              "background-color": "#ddd",
              "border-color": "#000",
              "border-width": "1px",
              width: "50px",
              height: "50px",
              shape: "roundrectangle",
              label: "data(id)",
              "text-halign": "center",
              "text-valign": "center",
            },
          },
          {
            selector: "edge",
            style: {
              "curve-style": "unbundled-bezier",
              "control-point-weights": "0.25 .95",
              "control-point-distances": "data(controlPointDistances)",
              //   "curve-style": "bezier",
              //   "control-point-step-size": 50,
              //   "control-point-distance": 100,
              //   "control-point-weight": 0.2,
              label: "data(label)",
              "edge-distances": "node-position",
            },
          },
        ],
        layout: { name: "preset" },
        wheelSensitivity: 0.1,
        zoomingEnabled: false,
        panningEnabled: false,
      });
    }
    window.graph = graphRef.current;
    console.log("width", graphRef.current.width());

    function adjustEdgeCurve(edge, index) {
      const edgeVerticalLength =
        edge.source().renderedPosition("x") -
        edge.target().renderedPosition("x");
      const decreaseFactor = -0.14;
      const controlPointDistance = edgeVerticalLength * decreaseFactor;
      const controlPointDistances = [
        controlPointDistance,
        -1 * controlPointDistance,
      ];
      edge.data("controlPointDistances", controlPointDistances.join(" "));
    }

    graphRef.current
      .edges()
      .forEach((edge, index) => adjustEdgeCurve(edge, index));

    // graphRef.current.data(graphData);
    // graphRef.current.json({
    //   elements: graphData,
    // });
    // graphRef.current.layout(layoutOptions).run();

    // window.cy = graphRef.current;
  });

  useEffect(() => {
    // window.frame1 = processPg(frame1.data);
    // window.frame2 = processPg(frame2.data);
  }, []);

  return (
    <div
      id="graph"
      style={{
        width: "800px",
        height: "600px",
        border: "1px solid red",
        marginLeft: "100px",
      }}
    ></div>
  );
}
