const customSortString = (order, s) => {
  const orderMap = new Map();
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }

  const sorted = s.split("").sort((a, b) => {
    const orderA = orderMap.has(a) ? orderMap.get(a) : Infinity;
    const orderB = orderMap.has(b) ? orderMap.get(b) : Infinity;
    return orderA - orderB;
  });

  return sorted.join("");
};

// Example usage:
const order = "cba";
const s = "abcd";
console.log(customSortString(order, s)); // Output: "cbad"