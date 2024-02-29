class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isSymmetric = function (root) {
  if (!root) return true;

  var isMirror = function (root1, root2) {
    if (!root1 && !root2) {
      return true;
    } else if (!root1 || !root2) {
      return false;
    } else {
      return (
        root1.val === root2.val &&
        isMirror(root1.left, root2.right) &&
        isMirror(root1.right, root2.left)
      );
    }
  };

  return isMirror(root.left, root.right);
};

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(2);
root1.left.right = new TreeNode(2);
root1.right = new TreeNode(2);
// root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(2);

console.log(isSymmetric(root1));
