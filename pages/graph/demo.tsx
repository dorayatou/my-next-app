import { useEffect, useRef } from "react";
import cytoscape, { LayoutOptions } from "cytoscape";
import dagre, { DagreLayoutOptions } from "cytoscape-dagre";
import {
  graphdata,
  processGraphData,
  demoData,
  demoData2,
  mapEdgesData,
  processNewObj,
  processPg,
} from "../../lib/data";
import { getDistWeight } from "../../lib/graph/utils";
import { selectPg } from "../../store/graphSlice";
import { useSelector } from "react-redux";
import { useGetMessageQuery } from "../../store/api";
import { frame1, frame2 } from "../../mock/pg";

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
let layoutOptions: DagreLayoutOptions = {
  name: "dagre",
  nodeSep: 10,
  edgeSep: 20,
  rankSep: 40,
  ranker: "network-simplex",
  ready: function () {
    console.log("dagre ready");
  },
  stop: function () {
    console.log("dagre stop");
  },
};
export default function Home() {
  useGetMessageQuery();
  const graphRef = useRef<any>(null);
  // const pg = useSelector(selectPg);
  const pg = frame1.data;
  // const demoData = processNewObj(graphdata);
  useEffect(() => {
    if (!pg) return;
    const graphData = processPg(JSON.parse(JSON.stringify(pg)));
    if (!graphRef.current) {
      graphRef.current = cytoscape({
        container: document.getElementById("graph"),
        elements: [
          // 添加自定义节点
          {
            data: {
              id: "custom-node",
              label: "Custom Node",
            },
          },
        ],
        style: [
          // 设置自定义节点的样式
          {
            selector: "node#custom-node",
            style: {
              "background-color": "#ddd",
              "border-color": "#000",
              "border-width": "1px",
              width: "100px",
              height: "60px",
              shape: "roundrectangle",
            },
          },
          // 设置自定义节点的子元素样式
          {
            selector: "node#custom-node circle",
            style: {
              "background-color": "#f00",
              "border-color": "#000",
              "border-width": "1px",
              width: "20px",
              height: "20px",
              shape: "ellipse",
            },
          },
        ],
        layout: { name: "grid" },
        wheelSensitivity: 0.1,
      });
    }

    // graphRef.current.data(graphData);
    // graphRef.current.json({
    //   elements: graphData,
    // });
    // graphRef.current.layout(layoutOptions).run();

    // window.cy = graphRef.current;
  }, [pg]);

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
