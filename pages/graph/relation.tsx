import cytoscape from "cytoscape";
import { useEffect, useRef } from "react";
import dagre, { DagreLayoutOptions } from "cytoscape-dagre";
cytoscape.use(dagre);
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
  const graphRef = useRef<any>(null);
  useEffect(() => {
    graphRef.current = cytoscape({
      container: document.getElementById('graph'),
      elements: [
        {
          data: {
            id: 'A',
            label: 'A',
            width: 100,
            height: 50
          },
        },
        {
          data: {
            id: 'B',
            label: 'B',
            width: 150,
            height: 200
          },
        },
        {
          data: {
            id: 'C',
            label: 'C',
            width: 100,
            height: 100
          },
        },
        {
          data: {
            id: 'D',
            label: 'D',
            width: 100,
            height: 100
          },
        }, 
        {
          data: {
            source: 'A',
            target: 'B'
          }
        }, 
        {
          data: {
            source: 'A',
            target: 'C'
          }
        },
        {
          data: {
            source: 'B',
            target: 'D'
          }
        }
      ],
      style: [{
        selector: 'node',
        style: {
          "border-color": "#000",
          "border-width": "1px",
          width: "data(width)",
          height: "data(height)",
          shape: "roundrectangle",
        }
      }],
      layout: {name: 'dagre'},
    })
  },[])
  return (
    <div
      id="graph"
      style={{
        width: "1000px",
        height: "600px",
        border: "1px solid red",
        marginLeft: "100px",
      }}
    ></div>
  );
}
