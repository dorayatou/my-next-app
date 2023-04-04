import { useEffect, useRef } from "react";
// import cytoscape, { LayoutOptions } from "cytoscape";
import cytoscape, { LayoutOptions } from "../../lib/cytoscape.esm.js";
import dagre, { DagreLayoutOptions } from "cytoscape-dagre";
import {
  graphdata,
  processGraphData,
  demoData,
  demoData2,
  mapEdgesData,
  processNewObj,
  processPg,
  mirrorPg,
} from "./data";
import { getDistWeight } from "./utils";
import { selectPg } from "../../store/graphSlice";
import { useSelector } from "react-redux";
import { useGetMessageQuery } from "../../store/api";
import { frame1, frame2, frame3 } from "../../mock/pg";
import style from "./style";

cytoscape.use(dagre);
/**
 * 1、two sub-graph render
 * 2、two sub-graph node do cross
 *
 * 过程：
 * 1、cytoscape instance-done
 * 2、dag layout-done
 * 3、node label & edge label-done
 * 4、multi-graph
 * 5、viewport: zoom, pan
 * 6、style：改由样式表实现
 * 7、add single edge
 * 8、split draw area分区绘制
 * 9、custom line（mapping）
 * 10、多条线\双向关系-done
 * 11、sub_graph layout，多个布局如何协作，同一份图数据
 * 12、add target-pg，构造数据-done
 * 13、节点顺序，node sort
 * 14、鼠标放上去显示完整label
 *
 */
let beginTime: number;
let layoutOptions: DagreLayoutOptions = {
  name: "dagre",
  nodeSep: 20,
  edgeSep: 20,
  rankSep: 40,
  ranker: "network-simplex",
  ready: function () {
    console.log("dagre ready");
    beginTime = new Date().getTime();
  },
  stop: function () {
    console.log("dagre stop", new Date().getTime() - beginTime);
  },
  fit: false,
  boundingBox: { x1: 20, y1: 20, w: 400, h: 250 },
};
export default function Home() {
  useGetMessageQuery();
  const graphRef = useRef<any>(null);
  const pg = useSelector(selectPg);
  // const pg = frame1.data;
  useEffect(() => {
    if (!pg) return;
    const { targetPg = null, ...graphData } = processPg(pg);
    if (!graphRef.current) {
      graphRef.current = cytoscape({
        container: document.getElementById("graph"),
        boxSelectionEnabled: false,
        autounselectify: true,
        style,
        minZoom: 0.05,
        maxZoom: 4,
        // layout: layoutOptions,
        // elements: graphData,
        wheelSensitivity: 0.1,
      });
    }
    // graphRef.current.data(graphData);
    // graphRef.current.add(processPg(frame2.data));
    // graphRef.current.elements().remove();
    // graphRef.current.add(graphData);
    graphRef.current.json({ elements: graphData });
    graphRef.current.add(mirrorPg);
    graphRef.current.layout(layoutOptions).run();

    // add pg_target
    console.log("graphData", targetPg);
    targetPg && graphRef.current.add(targetPg);
    // addMappting(graphRef.current);

    function addMappting(cy) {
      let edges = cy.add(mapEdgesData);

      cy.startBatch();

      edges.forEach((edge, i) => {
        if (edge.data()) {
          // get nodes positions for source and target
          let src = edge.source().position();
          let tgt = edge.target().position();
          // get endpoints positions for source and target
          let srcEp = edge.sourceEndpoint();
          let tgtEp = edge.targetEndpoint();
          if (src.x === tgt.x) {
            // do nothing, nodes are aligned vertically
          } else {
            let { ResultDistance: distance1, ResultWeight: weight1 } =
              getDistWeight(src, tgt, { x: src.x, y: src.y + 10 + 5 * i });
            let { ResultDistance: distance2, ResultWeight: weight2 } =
              getDistWeight(src, tgt, { x: tgt.x, y: src.y + 10 + 5 * i });
            edge.style("segment-distances", [distance1, distance2]);
            edge.style("segment-weights", [weight1, weight2]);
          }
        }
      });

      cy.endBatch();
    }
    window.cy = graphRef.current;
  }, [pg]);

  useEffect(() => {
    window.frame1 = processPg(frame1.data);
    window.frame2 = processPg(frame2.data);
    window.frame3 = processPg(frame3.data);
  }, []);

  return (
    <>
      <div
        id="graph"
        style={{
          width: "800px",
          height: "600px",
          border: "1px solid red",
          marginLeft: "100px",
        }}
      ></div>
      <div
        id="graph2"
        style={{
          width: "800px",
          height: "600px",
          border: "1px solid red",
          marginLeft: "100px",
        }}
      ></div>
    </>
  );
}
