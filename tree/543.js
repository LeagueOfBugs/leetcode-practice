class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  // Helper function to calculate height and diameter
  function helper(node) {
    if (node === null) {
      return 0;
    }

    // Recursively calculate height of left and right subtrees
    const leftHeight = helper(node.left);
    const rightHeight = helper(node.right);

    // Update diameter if the sum of leftHeight and rightHeight is greater
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return height of the current subtree
    return 1 + Math.max(leftHeight, rightHeight);
  }

  // Start recursion from the root node
  helper(root);

  // The diameter is the number of edges, so subtract 1
  return diameter;
};

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log("Diameter of the binary tree is", diameterOfBinaryTree(root1));
