class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function formatPath(array) {
  return array.join("->");
}

function binaryTreePaths(root) {
  const result = [];

  function helper(node, path) {
    if (!node) {
      return null;
    }

    path.push(node.val);

    if (!node.left && !node.right) {
      result.push(formatPath(path));
    }
    helper(node.left, path);
    helper(node.right, path);
    path.pop();
  }

  helper(root, []);
  return result;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.right = new TreeNode(5);
root1.right = new TreeNode(3);

console.log(binaryTreePaths(root1));
