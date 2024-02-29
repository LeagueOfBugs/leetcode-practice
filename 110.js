class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// leetcode does not like this answer
// function isBalanced(root) {
//   let leftHeight = 0;
//   let rightHeight = 0;

//   function helper(node) {
//     if (!node) {
//       return 0;
//     }

//     const left = helper(node.left);
//     const right = helper(node.right);

//     const height = 1 + Math.max(left, right);

//     leftHeight = Math.max(leftHeight, left);
//     rightHeight = Math.max(rightHeight, right);

//     return height;
//   }

//   helper(root);

//   const difference = Math.abs(leftHeight - rightHeight);

//   return difference <= 1;
// }

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.left.left = new TreeNode(11);
root1.left.left.right = new TreeNode(5);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

function getHeight(node) {
  if (!node) {
    return 0;
  }

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

function isBalanced(root) {
  if (!root) {
    return true;
  }

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  const heightDifference = Math.abs(leftHeight - rightHeight);
  if (heightDifference > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

console.log(isBalanced(root1));
