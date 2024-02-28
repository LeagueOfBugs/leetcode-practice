class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hasPathSum(root, targetSum) {
  function helper(node, sum) {
    if (!node) {
      return false; // Return false if node is null
    }

    sum += node.val;

    // Check if the current node is a leaf node and if the sum equals the targetSum
    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    // Recursively check the left and right subtrees
    return helper(node.left, sum) || helper(node.right, sum);
  }

  // Start the recursion from the root node with an initial sum of 0
  return helper(root, 0);
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(hasPathSum(root1, 7)); // Output: true
