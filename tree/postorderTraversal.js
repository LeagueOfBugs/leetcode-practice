class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function postorderTraversal(root, result = []) {
  if (!root) {
    return result;
  }

  /* 
    LEFT SIDE OF TREE

    RIGHT SIDE OF TREE
    
    ROOT NODE
  */

  // Visit the left subtree
  postorderTraversal(root.left, result);

  // Visit the right subtree
  postorderTraversal(root.right, result);

  // Visit the root node
  result.push(root.value);

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

console.log("Inorder traversal:", postorderTraversal(root)); // Output: [4, 7, 2, 6, 9, 3, 1]
