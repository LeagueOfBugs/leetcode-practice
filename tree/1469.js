class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const getLonelyNodes = (root) => {
  let res = [];

  const traverse = (root) => {
    if (!root) return;

    traverse(root.left);
    traverse(root.right);

    // from the bottom up compare if the root
    // has both children. If it does great,
    // look for when you have one or the other
    // push defined value in th eresult
    // that is the loneley node

    if (!root.left && root.right) {
      // Lonely node
      res.push(root.right.val);
    } else if (root.left && !root.right) {
      // Lonely node
      res.push(root.left.val);
    }
  };

  traverse(root);
  return res;
};

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
// root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(4);
root1.right = new TreeNode(3);
// root1.right.left = new TreeNode(6);
// root1.right.right = new TreeNode(9);

console.log(getLonelyNodes(root1)); // Output: [7, 6, 9]
