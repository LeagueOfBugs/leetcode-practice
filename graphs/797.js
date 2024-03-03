const allPathsSourceTarget = (graph) => {
   const paths = [];

   dfs(0, [0]);

   return paths;

   function dfs(node, path) {
     // If we reach the target node (node n - 1), add the current path to the result
     if (node === graph.length - 1) {
       paths.push([...path]);
       return;
     }

     // Explore all neighbors of the current node
     for (const neighbor of graph[node]) {
       path.push(neighbor); // Add the neighbor to the current path
       dfs(neighbor, path); // Recursively explore the neighbor
       path.pop(); // Backtrack: remove the last node from the path
     }
   }
};

// const graph = {
//   0: [1, 2],
//   1: [3],
//   2: [3],
//   3: [],
// };

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
