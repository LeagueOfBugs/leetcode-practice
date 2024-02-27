class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function height(root) {
  if (root === null) {
    return 0;
  } else {
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    // Return the maximum height of the left and right subtrees, plus 1 for the current node
    return 1 + Math.max(leftHeight, rightHeight);
  }
}

function diameter(root) {
  if (root === null) {
    return 0;
  } else {
    // Calculate heights of left and right subtrees
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    // Calculate diameters of left and right subtrees recursively
    let leftDiameter = diameter(root.left);
    let rightDiameter = diameter(root.right);

    // Return the maximum  of:
    // - Diameter passing through the root (leftHeight + rightHeight + 1)
    // - Diameter in the left subtree
    // - Diameter in the right subtree
    return Math.max(leftHeight + rightHeight + 1, leftDiameter, rightDiameter);
  }
}

// Example usage:
// Constructing a binary tree
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

// console.log("Height of the binary tree is", height(root1));
console.log("Diameter of the binary tree is", diameter(root1));


