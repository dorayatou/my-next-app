import cytoscape from "cytoscape";
import { useEffect } from "react";
export default function Home() {
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
