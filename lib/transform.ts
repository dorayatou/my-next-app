import { ar } from "date-fns/locale";
import { type } from "os";

export default function d3Transform(chain) {
  let transforms = [];
  if (chain !== undefined) {
    transforms.push(chain);
  }

  function push(kind, args) {
    let n = args.length;
    transforms.push(function () {
      if (kind === "seq") {
        return args[0].apply(this, arr(arguments));
      } else {
        return (
          kind +
          `(${
            n === 1 && typeof args[0] === "function"
              ? args[0].apply(this, arr(arguments))
              : args
          })`
        );
      }
    });
  }

  function arr(args) {
    return Array.prototype.slice.call(args);
  }

  let my = function () {
    let that = this,
      args = arr(arguments);

    return transforms
      .map(function (f) {
        return f.apply(that, args);
      })
      .join(" ");
  };

  ["translate", "rotate", "scale", "matrix", "skewX", "skewY", "seq"].forEach(
    function (t) {
      my[t] = function () {
        push(t, arr(arguments));
        return my;
      };
    }
  );

  return my;
}
