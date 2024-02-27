class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function searchBST(root, val) {
  if (!root) {
    return null; // Base case: root is null, or val not found
  }

  const leftResult = searchBST(root.left, val); // Traverse left subtree

  // If val found in the left subtree, return the result
//   lets me scape
  if (leftResult) {
    return leftResult;
  }

  // Visit the current node
  if (root.val === val) {
    return root; // Found the node with the value val
  }

  const rightResult = searchBST(root.right, val); // Traverse right subtree

  // If val found in the right subtree, return the result
  if (rightResult) {
    return rightResult;
  }

  return null; // Value not found
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(searchBST(root1, 2));
