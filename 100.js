/* 100. Same Tree */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function isSameTree(p, q) {
  // If both trees are null, they are identical
  if (!p && !q) {
    return true;
  }

  // If one of the trees is null and the other is not, they are not identical
  if (!p || !q) {
    return false;
  }

  // If the values of the current nodes are not equal, the trees are not identical
  if (p.val !== q.val) {
    return false;
  }

  const pLeft = p.left;
  const pRight = p.right;
  const qLeft = q.left;
  const qRight = q.right;
  const left = isSameTree(pLeft, qLeft);
  const right = isSameTree(pRight, qRight);
  // Recursively check the left and right subtrees
  return left && right;
}

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.left.right = new TreeNode(5);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(isSameTree(tree1, tree2));
