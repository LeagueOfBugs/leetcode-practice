// Iterative
const hasPathCyclicIterative = (graph, src, dst) => {
  const hasVisited = new Set();
  const stack = [src];

  while (stack.length) {
    const current = stack.pop();
    if (current === dst) return true;
    hasVisited.add(current);
    for (const neighbor of graph[current]) {
      if (!hasVisited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return false;
};

const graph = {
  a: ["b", "c"],
  b: ["d", "a"],
  c: ["e", "a"],
  d: ["f", "b"],
  e: ["c"],
  f: ["d"],
};

console.log(hasPathCyclicIterative(graph, "a", "f"));

// recursive
const hasPathRecursive = (graph, src, dst) => {
  const hasVisited = new Set();

  const helper = (src) => {
    if (src === dst) return true;
    hasVisited.add(src);

    for (const neighbor of graph[src]) {
      if (!hasVisited.has(neighbor)) {
        if (helper(neighbor) === true) {
          return true;
        }
      }
    }
  };

  return helper(src);
};

console.log(hasPathRecursive(graph, "a", "e"));

const hasPathBFS = (graph, src, dst) => {
  const queue = [src];
  const hasVisited = new Set();
  while (queue.length) {
    const current = queue.shift();
    hasVisited.add(current);
    if (current === dst) return true;

    for (const neighbor of graph[current]) {
      if (!hasVisited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return false;
};

console.log(hasPathBFS(graph, "a", "e"));
