class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function minDiffInBST(root) {
  let minDiff = Infinity;
  let prevValue = -Infinity;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    minDiff = Math.min(minDiff, node.val - prevValue);
    prevValue = node.val;

    inorder(node.right);
  }

  inorder(root);

  return minDiff;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(minDiffInBST(root1));
