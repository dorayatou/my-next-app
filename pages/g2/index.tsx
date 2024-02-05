import { useEffect, useRef, useState } from "react";
import { Chart } from "@antv/g2";
import { frames } from "./data";
import { originData } from "./data2";

export default function Home() {
  const chart = useRef();
  const container = useRef();
  const data = useState([]);
  useEffect(() => {
    let chart = new Chart({
      container: container.current,
      paddingLeft: 50,
    });

    chart
      .line()
      .data(originData)
      .transform({ type: "normalizeY", basis: "first", groupBy: "color" })
      .encode("x", (d) => new Date(d.Date))
      .encode("y", "Close")
      .encode("color", "Symbol")
      .axis("y", { title: "123" })
      .tooltip({
        title: (d) => new Date(d.Date).toUTCString(),
        items: [
          (d, i, data, column) => ({
            name: "Close",
            value: column.y.value[i].toFixed(1),
          }),
        ],
      })
      .label({
        text: "Symbol",
        selector: "last",
        style: {
          fontSize: 10,
        },
      });
    chart.interaction("tooltip", true);

    chart.render();
  }, []);

  return (
    <>
      <div
        id="graph"
        ref={container}
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
