class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isUnivalTree(root) {
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (!(node.val === root.val)) return false;
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return true;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(1);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(1);
root1.right = new TreeNode(1);
root1.right.left = new TreeNode(1);
root1.right.right = new TreeNode(9);

console.log(isUnivalTree(root1));
