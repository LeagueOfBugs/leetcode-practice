class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findTilt(root) {
  let result = 0;
  function helper(node) {
    if (!node) return 0; // Base case

    const leftSum = helper(node.left); 
    const rightSum = helper(node.right); 

    result += Math.abs(leftSum - rightSum);

    return leftSum + rightSum + node.val; 
  }

  helper(root); 

  return result;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(findTilt(root1));
