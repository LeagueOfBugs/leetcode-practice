class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function mergeTrees(root1, root2) {
  if (!root1) return null;
  if (!root2) return null;

  const mergedNode = new TreeNode(root1.val + root2.val);

  mergedNode.left = mergeTrees(root1.left, root2.left);
  mergedNode.right = mergeTrees(root1.right, root2.right);

  return mergedNode
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
// root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(8);
root2.right = new TreeNode(3);
root2.right.left = new TreeNode(7);
root2.right.right = new TreeNode(10);

console.log(mergeTrees(root1, root2));
