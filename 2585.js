const pivotInteger = (n) => {
  let totalSum = (n * (n + 1)) / 2;

  if (n === 1) {
    return 1;
  }

  let prefixSum = 0;

  for (let x = 1; x <= n; x++) {
    prefixSum += x;

    let suffixSum = totalSum - prefixSum;

    if (prefixSum === suffixSum) {
      return x;
    }
  }

  return -1;
};

console.log(pivotInteger(8));
