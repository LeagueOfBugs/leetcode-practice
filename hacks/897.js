class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function increasingBST(root) {
  let dummy = new TreeNode(0); // Dummy node to serve as the new root
  let curr = dummy;

  // Perform in-order traversal
  function inorder(node) {
    if (node === null) return;

    inorder(node.left);

    // Reorganize the tree
    node.left = null;
    curr.right = node;
    curr = node;

    inorder(node.right);
  }

  inorder(root);

  return dummy.right; // Return the new root
}

function practice(root) {
  let current

  function helper(node) {
    if (!root) {
      return;
    }
    helper(node.left);
    current = node
    helper(node.right);
  }

  helper(root);
  return current;
}

const root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
root1.right = new TreeNode(7);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(practice(root1));
