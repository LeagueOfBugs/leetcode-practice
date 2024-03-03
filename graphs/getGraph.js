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



const arr = [
  [0, 1],
  [1, 2],
  [2, 0],
];

console.log(getGraph(arr));
