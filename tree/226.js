class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function invertTree(root) {
  if (root === null) {
    return null;
  }

  // Swap left and right subtrees
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

function practice(root) {
  if (!root) {
    return null;
  }

  let left = root.left;
  let right = root.right;
  let temp;

  temp = right;
  right = left;
  left = temp;

  practice(root.left);
  practice(root.right);

  return root
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(practice(root1));
