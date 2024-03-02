const depthFirst = (graph, source) => {
  const stack = [source];

  const result = [];

  while (stack.length) {
    const current = stack.shift();

    result.push(current);

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return result;
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log(depthFirst(graph, "a"));
