/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
  let r = x >>> 1;                      // unsigned right‑shift /2
  while (r * r > x) {
    r = (r + Math.trunc(x / r)) >>> 1;  // all ints
  }
  return r;
};