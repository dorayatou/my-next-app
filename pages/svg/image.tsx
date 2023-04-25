// response image
// image尺寸，视口放不下，做了裁切
// pan功能：mousedown、mousemove、mouseup，是一个拖拽的功能，拖拽距离设置canvas的transform
// zoom功能： 缩放功能
// svg坐标到屏幕坐标
// 屏幕坐标到svg坐标（add circle）

import { useEffect, useRef, useState } from "react";
import { select, zoomIdentity } from "d3";

export default function ImageDemo() {
  console.log("ImageDemo");
  const mainTransform = useRef(zoomIdentity.translate(300, 200));
  const [mainTransformStr, setMainTransformStr] = useState(
    mainTransform.current.toString()
  );
  const tmpTransform = useRef<any>();
  const canvasRef = useRef<any>();

  function transformFromViewportToElement(
    x: number,
    y: number,
    sctm = null,
    elementTransform = null
  ) {
    const p = new DOMPoint(x, y);

    let screenTransform = sctm
      ? sctm
      : (select("#main").node() as SVGAElement).getScreenCTM();

    const inverseScreenTransform = screenTransform.inverse();

    // 转换到svg canvas画布的坐标了
    const transfromedPoint = p.matrixTransform(inverseScreenTransform);

    const point = [transfromedPoint.x, transfromedPoint.y];
    const tmpPoint = elementTransform?.apply(point);

    return {
      x: tmpPoint[0],
      y: tmpPoint[1],
    };
  }

  useEffect(() => {
    const mainG = select("#main");
    const output = select("#output-wrapper");
    document.getElementById("main")?.addEventListener("dblclick", (e) => {
      // 鼠标点击的地方绘制circle
      const matrix = (mainG.node() as SVGAElement).getScreenCTM().inverse();
      let point = new DOMPoint(e.clientX, e.clientY);
      let newPoint = point.matrixTransform(matrix);
      output.append("p").text(`坐标:${newPoint.x},${newPoint.y}`);
      // mainG
      //   .append("circle")
      //   .attr("cx", newPoint.x)
      //   .attr("cy", newPoint.y)
      //   .attr("r", 5)
      //   .attr("fill", "green");
    });
    // pan的行为

    function mousedown(e) {
      const { clientX, clientY } = e;
      const currentTransform = mainTransform.current;
      const sctm = (mainG.node() as SVGAElement).getScreenCTM();
      const mouseStart = transformFromViewportToElement(
        clientX,
        clientY,
        sctm,
        currentTransform
      );

      canvasRef.current = {
        mouseStart,
        sctm,
        currentTransform,
      };
      document
        .getElementById("canvas-wrapper")
        ?.addEventListener("mousemove", mousemove);
      document
        .getElementById("canvas-wrapper")
        ?.addEventListener("mouseup", mouseup);
    }
    function mousemove(e) {
      const { clientX, clientY } = e;
      const mouseMove = transformFromViewportToElement(
        clientX,
        clientY,
        canvasRef.current.sctm,
        canvasRef.current.currentTransform
      );

      const dx = mouseMove.x - canvasRef.current.mouseStart.x;
      const dy = mouseMove.y - canvasRef.current.mouseStart.y;

      tmpTransform.current = mainTransform.current.translate(dx, dy);
      setMainTransformStr(tmpTransform.current.toString());
    }
    function mouseup(e) {
      mainTransform.current = tmpTransform.current;
      canvasRef.current = {};
      document
        .getElementById("canvas-wrapper")
        ?.removeEventListener("mousemove", mousemove);
      document
        .getElementById("canvas-wrapper")
        ?.removeEventListener("mouseup", mouseup);
    }

    // document
    //   .getElementById("canvas-wrapper")
    //   ?.addEventListener("mousedown", mousedown);
  }, []);

  useEffect(() => {
    const mainG = select("#main");
    mainG
      .append("rect")
      .attr("x", 160)
      .attr("y", 55)
      .attr("width", 25)
      .attr("height", 25)
      .attr("fill", "none")
      .attr("stroke", "red");

    return () => {
      mainG.selectAll("rect").remove();
    };
  }, []);
  return (
    <div
      id="canvas-wrapper"
      style={{ marginLeft: "100px", marginTop: "100px" }}
    >
      <svg
        id="canvas"
        width={600}
        height="400"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        style={{ border: "1px solid red" }}
      >
        <g id="main" transform={mainTransformStr}>
          <image
            x="0"
            y="0"
            width="300"
            xlinkHref="/images/1280x720.png"
            preserveAspectRatio="xMidYMid meet"
            style={{ border: "1px solid green" }}
            // transform="skewX(-40)"
          ></image>
        </g>
      </svg>
      <div id="output-wrapper"></div>
    </div>
  );
}
