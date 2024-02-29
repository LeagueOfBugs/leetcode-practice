class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findTarget(root, k) {
  // tracks the frequency of elements within the tree
  const result = {};

  function helper(node) {
    if (!node) return false;

    // If difference is in result obj then match is found
    const difference = k - node.val;
    if (result[difference]) {
      return true;
    }

    // Update frequency tracking for the current node
    result[node.val] = true;

    // Recur on left and right subtrees
    return helper(node.left) || helper(node.right);
  }

  return helper(root);
}


const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(findTarget(root1, 9));
