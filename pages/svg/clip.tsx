export default function Home() {
  return (
    <div id="canvasWrapper">
      <svg width={350} height={200} viewBox="0 0 350 200">
        <defs>
          <clipPath id="rectClip">
            <rect
              id="rect1"
              x="0"
              y="0"
              width={100}
              height={100}
              style={{ stroke: "gray", fill: "none" }}
            ></rect>
          </clipPath>
          <g id="port">
            <circle r="10" style={{ fill: "inherit" }}></circle>
          </g>
          <clipPath id="polylineClip">
            <polyline></polyline>
          </clipPath>
        </defs>

        <path
          id="heart"
          d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z"
        />

        <text y="15">black</text>
        <use x="50" y="10" xlinkHref="#port" fill="red"></use>
        <use
          clipPath="url(#rectClip)"
          xlinkHref="#heart"
          y="100"
          fill="red"
        ></use>
      </svg>
    </div>
  );
}
