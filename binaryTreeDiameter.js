class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function height(root) {
  if (root === null) {
    return 0;
  } else {
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    // Return the maximum height of the left and right subtrees, plus 1 for the current node
    return 1 + Math.max(leftHeight, rightHeight);
  }
}

function diameter(root) {
  let diameter = 0;

  function helper() {
    if (root === null) {
      return 0;
    } else {
      // Calculate heights of left and right subtrees
      let leftHeight = height(root.left);
      let rightHeight = height(root.right);

      diameter = Math.max(diameter, leftHeight + rightHeight);

      return Math.max(+1, leftHeight, rightHeight);
    }
  }

  helper(root);

  return diameter;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(diameter(root1));
