class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function checkTree(root) {
  // Since we get 3 nodes everytime then
  // Sum the left and right node
  const sum = root.left.val + root.right.val;
  // compare sum to root
  return root.val === sum;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
// root1.left.left = new TreeNode(4);
// root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
// root1.right.left = new TreeNode(6);
// root1.right.right = new TreeNode(9);

console.log(checkTree(root1));
