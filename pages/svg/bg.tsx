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
    const svg = select("#canvas");
    let circle1 = document.getElementById("circle1");
    let circle3 = document.getElementById("circle3");
    let { x: x1, y: y1 } = getCenterPoint(circle1.getBoundingClientRect());
    let { x: x3, y: y3 } = getCenterPoint(circle3.getBoundingClientRect());

    svg
      .append("path")
      .attr("d", diagonal({ x: x1, y: y1 }, { x: x3, y: y3 }))
      .attr("stroke", "green")
      .attr("stroke-width", 5);

    const contentDiv = document.getElementById("content");
    function mousedown(e) {
      startPoint.current = { x: e.clientX, y: e.clientY };

      svg
        .insert("path", ":first-child")
        .attr("stroke", "green")
        .attr("stroke-width", 5)
        .attr(
          "d",
          diagonal(
            { x: e.clientX, y: e.clientY },
            { x: e.clientX, y: e.clientY }
          )
        );

      contentDiv?.addEventListener("mousemove", mousemove);
      contentDiv?.addEventListener("mouseup", mouseup);
    }
    function mousemove(e) {
      svg
        .select("path")
        .attr(
          "d",
          diagonal(
            { x: startPoint.current.x, y: startPoint.current.y },
            { x: e.clientX, y: e.clientY }
          )
        );
    }
    function mouseup(e) {
      // add data
      setLineData([
        ...lineData,
        {
          source: { x: startPoint.current.x, y: startPoint.current.y },
          target: { x: e.clientX, y: e.clientY },
        },
      ]);

      contentDiv?.removeEventListener("mousemove", mousemove);
      contentDiv?.removeEventListener("mouseup", mouseup);
    }

    contentDiv?.addEventListener("mousedown", mousedown);
    return () => {
      console.log("dddd");
      svg.selectAll("*").remove();
    };
  }, []);

  // 拖拽线
  return (
    <div id="body" className={styles.body}>
      <div id="content" className={styles.content}>
        <svg id="canvas" className={styles.svg}>
          {lineData.map(({ source, target }, index) => {
            return (
              <path
                key={index}
                stroke="red"
                strokeWidth={1}
                d={diagonal(source, target)}
              ></path>
            );
          })}
        </svg>
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
