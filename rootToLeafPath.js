class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// function getAllPaths(root) {
//   const paths = [];

//   function dfs(node, path) {
//     if (!node) {
//       return;
//     }

//     // Add the current node to the current path
//     path.push(node.val);

//     // If the current node is a leaf node, add the current path to the paths array
//     if (!node.left && !node.right) {
//       paths.push([...path]); // Make a copy of the current path
//     } else {
//       // Recursively traverse the left and right subtrees
//       dfs(node.left, path);
//       dfs(node.right, path);
//     }

//     // Remove the current node from the current path to backtrack
//     path.pop();
//   }

//   dfs(root, []);

//   return paths;
// }

function getAllPaths(root) {
  const paths = [];

  function helper(node, path) {
    if (!node) {
      return null;
    }
    path.push(node.val);
    helper(node.left, path);
    helper(node.right, path);
    if (!node.left && !node.right) {
      paths.push([...path]);
    }

    path.pop();
  }

  helper(root, []);

  return paths;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(getAllPaths(root1));
