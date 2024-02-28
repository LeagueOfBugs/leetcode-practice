class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function countNodes(root) {
  function helper(node) {
    if (!node) {
      return 0;
    }

    return helper(node.left) + helper(node.right) + 1;
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

console.log(countNodes(root1));
