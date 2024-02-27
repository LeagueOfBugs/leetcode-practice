class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root, result = []) {
  if (!root) {
    return result;
  }

  /* 
  ROOT NODE
  
  LEFT SIDE OF TREE

    RIGHT SIDE OF TREE
  */

  // Visit the root node
  result.push(root.value);

  // Visit the left subtree
  preorderTraversal(root.left, result);

  // Visit the right subtree
  preorderTraversal(root.right, result);

  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log("Inorder traversal:", preorderTraversal(root)); // Output: [1, 2, 4, 7, 3, 6, 9]
