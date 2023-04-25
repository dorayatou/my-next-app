import { select } from "d3";
import { useEffect, useRef, useState } from "react";
import styles from "styles/svg.module.css";
function getCenterPoint(bbox) {
  return {
    x: bbox.x + bbox.width / 2,
    y: bbox.y + bbox.height / 2,
  };
}
export type Point = {
  x: number;
  y: number;
};
// 生成两点link的path值
export const diagonal = (source: Point, target: Point): string =>
  `M ${source.x} ${source.y} L ${target.x} ${target.y}`;
export default function Home() {
  console.log("home render");
  const startPoint = useRef<any>();
  const [lineData, setLineData] = useState([]);
  useEffect(() => {
    const canvas = select("#svg");
    let circle1 = document.getElementById("circle1");
    let circle3 = document.getElementById("circle3");
    let { x: x1, y: y1 } = getCenterPoint(circle1.getBoundingClientRect());
    let { x: x3, y: y3 } = getCenterPoint(circle3.getBoundingClientRect());

    // 遵循canvas绘制的流程
    const contentDiv = document.getElementById("content");
    function mousedown(e) {
      startPoint.current = { x: e.clientX, y: e.clientY };

      contentDiv?.addEventListener("mousemove", mousemove);
      contentDiv?.addEventListener("mouseup", mouseup);
    }
    function mousemove(e) {}
    function mouseup(e) {
      // add data
      contentDiv?.removeEventListener("mousemove", mousemove);
      contentDiv?.removeEventListener("mouseup", mouseup);
    }

    contentDiv?.addEventListener("mousedown", mousedown);
    return () => {
      console.log("dddd");
    };
  }, []);

  // 拖拽线
  return (
    <div id="body" className={styles.body}>
      <div id="content" className={styles.content}>
        <canvas id="canvas" className={styles.canvas}></canvas>
        <div
          id="circle1"
          style={{ marginTop: "100px", marginLeft: "100px" }}
        ></div>
        <div id="circle2" style={{ marginTop: "200px" }}></div>
        <div
          id="circle3"
          style={{ marginTop: "100px", marginLeft: "200px" }}
        ></div>
        <div
          id="circle4"
          style={{ marginTop: "100px", marginLeft: "280px" }}
        ></div>
        <div
          id="circle5"
          style={{ marginTop: "100px", marginLeft: "120px" }}
        ></div>
      </div>
    </div>
  );
}
