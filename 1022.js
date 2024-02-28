class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumRootToLeaf(root) {
  let result = 0;

  function helper(node, sum) {
    if (!node) {
      return null;
    }

    // add all your values that you visit first
    sum += node.val;
    helper(node.left, sum);
    helper(node.right, sum);
    // when we know we are at a leaf
    // transform the string tracked into a number with parseInt
    if (!node.left && !node.right) {
      // push the sum to the total result in upper scope
      result += parseInt(sum, 2);
    }
  }

  helper(root, "");

  // return sum of all paths within a binary tree
  return result;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(0);
root1.left.left = new TreeNode(0);
root1.left.right = new TreeNode(1);
root1.right = new TreeNode(1);
root1.right.left = new TreeNode(0);
root1.right.right = new TreeNode(1);

console.log(sumRootToLeaf(root1));
