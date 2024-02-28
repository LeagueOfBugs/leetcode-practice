class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumOfLeftLeaves(root) {
  let sum = 0;

  function isLeaf(node) {
    return node && !node.left && !node.right; // Check if the node is a leaf node
  }

  function helper(node, isLeft) {
    if (!node) {
      return; // Base case: stop recursion if node is null
    }

    // If the current node is a left leaf, add its value to the sum
    if (isLeft && isLeaf(node)) {
      sum += node.val;
    }

    helper(node.left, true); // Pass true to indicate that the next node is a left child
    helper(node.right, false); // Pass false to indicate that the next node is a right child
  }

  helper(root, false); // Start the helper traversal from the root
  return result;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log(sumOfLeftLeaves(root1));
