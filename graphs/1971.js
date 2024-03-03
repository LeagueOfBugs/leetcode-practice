const getGraph = (arr) => {
  return arr.reduce((graph, points) => {
    const [point1, point2] = points;
    if (!(point1 in graph)) graph[point1] = [];
    if (!(point2 in graph)) graph[point2] = [];
    graph[point1].push(point2);
    graph[point2].push(point1);

    return graph;
  }, {});
};

const validPath = (n, edges, source, destination) => {
  const graph = getGraph(edges);
  const hasVisited = new Set();
  const stack = [source];
  console.log("graph", graph);
  while (stack.length) {
    const node = stack.pop();
    hasVisited.add(node);
    if (node === destination) return true;

    for (const neighbor of graph[node]) {
      if (!hasVisited.has(neighbor)) stack.push(neighbor);
    }
  }

  return false;
};

const edges = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];
const n = 3;
const source = 0;
const destination = 2;
console.log(validPath(n, edges, source, destination));
