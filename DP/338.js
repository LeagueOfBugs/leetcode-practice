function countBits(n) {
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const confusing1 = dp[i >> 1];
    const confusing2 = (i & 1);
    dp[i] =  confusing1 + confusing2;
  }

  return dp;
}

// Example usage:
const n = 5;
// console.log(countBits(n)); // Output: [0, 1, 1, 2, 1, 2]

console.log(9 & 1)
