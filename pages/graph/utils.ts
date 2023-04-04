type Point = {
  x: number;
  y: number;
};
export function getDistWeight(
  source: Point,
  target: Point,
  controlPoint: Point
) {
  var W, D;
  let sx = source.x;
  let sy = source.y;
  let tx = target.x;
  let ty = target.y;
  let { x, y } = controlPoint;

  D =
    (y - sy + ((sx - x) * (sy - ty)) / (sx - tx)) /
    Math.sqrt(1 + Math.pow((sy - ty) / (sx - tx), 2));
  W = Math.sqrt(Math.pow(y - sy, 2) + Math.pow(x - sx, 2) - Math.pow(D, 2));

  // Math.sqart(x^2+y^2) AB两点的距离
  var distAB = Math.sqrt(Math.pow(tx - sx, 2) + Math.pow(ty - sy, 2));
  W = W / distAB;

  // check whether the point (x, y) is on right or left of the line src to tgt. for instance : a point C(X, Y) and line (AB).  d=(xB-xA)(yC-yA)-(yB-yA)(xC-xA). if d>0, then C is on left of the line. if d<0, it is on right. if d=0, it is on the line.
  var delta1 = (tx - sx) * (y - sy) - (ty - sy) * (x - sx);
  switch (true) {
    case delta1 >= 0:
      delta1 = 1;
      break;
    case delta1 < 0:
      delta1 = -1;
      break;
  }
  // check whether the point (x, y) is "behind" the line src to tgt
  var delta2 = (tx - sx) * (x - sx) + (ty - sy) * (y - sy);
  switch (true) {
    case delta2 >= 0:
      delta2 = 1;
      break;
    case delta2 < 0:
      delta2 = -1;
      break;
  }

  D = Math.abs(D) * delta1; // ensure that sign of D is same as sign of delta1. Hence we need to take absolute value of D and multiply by delta1
  W = W * delta2;

  return {
    ResultDistance: D,
    ResultWeight: W,
  };
}
