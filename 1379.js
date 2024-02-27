class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

const root2 = root1;

const getTargetCopy = function (original, cloned, target) {
  if (original === null) return null;
  if (original == target) return cloned;

  const originalRight = original.right;
  const originalLeft = original.left;
  const clonedLeft = cloned.left;
  const clonedRight = cloned.right;
  const traverseLeft = getTargetCopy(originalLeft, clonedLeft, target);
  const traverseRight = getTargetCopy(originalRight, clonedRight, target);
  return traverseLeft || traverseRight;
};

const reference = root2.right.left;
console.log(getTargetCopy(root1, root2, reference));

console.log(root1 === root2);
