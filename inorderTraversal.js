class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root, result = []) {
  if (!root) {
    return result;
  }

  /* 
  LEFT SIDE OF TREE
  
  ROOT NODE

    RIGHT SIDE OF TREE
  */
 
 
 // Visit the left subtree
 inorderTraversal(root.left, result);

 // Visit the root node
 result.push(root.value);

  // Visit the right subtree
  inorderTraversal(root.right, result);

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

console.log("Inorder traversal:", inorderTraversal(root)); // Output: [4, 2, 7, 1, 6, 3, 9]
