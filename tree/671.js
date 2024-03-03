class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function findSecondMinimumValue (){}


const root1 = new TreeNode(2);
root1.left = new TreeNode(2);
root1.right = new TreeNode(5);
root1.right.left = new TreeNode(5);
root1.right.right = new TreeNode(7);

console.log(findSecondMinimumValue(root1));