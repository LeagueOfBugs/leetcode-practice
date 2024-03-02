// Practice has path with acyclic/directed path ---> ITERATIVE
const hasPath = (graph, src, dst) => {
  const stack = [src];

  while (stack.length) {
    const current = stack.pop();

    if (current === dst) return true;
    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return false;
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// console.log(hasPath(graph, "a", "f"));

// Practice has path with acyclic/directed path ---> RECURSIVE
const hasPathRecursive = (graph, src, dst) => {
  const helper = (src, dst) => {
    if (src === dst) return true;
    for (const neighbor of graph[src]) {
      if (helper(neighbor, dst) === true) {
        return true;
      }
    }
    return false;
  };

  return helper(src, dst);
};

console.log(hasPathRecursive(graph, "a", "f"));
