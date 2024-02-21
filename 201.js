/* 201. Bitwise AND of Numbers Range */

var rangeBitwiseAnd = function (left, right) {
  let shift = 0;
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
};

const left = 5;
const right = 7;
console.log(rangeBitwiseAnd(left, right));
