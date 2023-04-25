import { center } from "@antv/x6/lib/registry/node-anchor/bbox";
import { select } from "d3";
import { useEffect, useLayoutEffect } from "react";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Home() {
  useEffect(() => {
    const svg = select("#canvas");
    const r = 10;
    const centerX = 300;
    const centerY = 200;
    svg
      .append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", r)
      .attr("fill", "red");
    svg
      .append("rect")
      .attr("x", centerX)
      .attr("y", centerY)
      .attr("width", 100)
      .attr("height", 50)
      .attr("fill", "#00A5E3")
      .transition()
      .duration(3000)
      .attr("transform", `rotate(90 ${centerX}, ${centerY})`);

    const circleG = svg
      .append("g")
      .attr("transform", `translate(${centerX},${centerY})`);
    circleG
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr(
        "transform",
        (d, i) => `rotate(${30 * (i / data.length)} ${centerX} ${centerY})`
      )
      .attr("fill", "green")
      .attr("r", 10);

    return () => {
      svg.selectAll("*").remove();
    };
  }, []);

  useLayoutEffect(() => {}, []);
  return (
    <div id="cavans-wrapper">
      <svg
        width={600}
        height={400}
        style={{ border: "1px solid red", margin: "100px 100px" }}
        viewBox="0 0 600 400"
        id="canvas"
      ></svg>
    </div>
  );
}
