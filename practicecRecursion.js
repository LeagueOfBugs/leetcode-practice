class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* 
when returning recursion at the end of the function
then traversal method is always preorder
calculations have to be done in preorder because
anything below the return statement is dead code
*/

function rec(root) {
  if (!root) return false;

  if (root.val === 9) {
    return true;
  }

  const left = rec(root.left);
  const right = rec(root.right);
  return left || right;

  /* 
                    Same as  

  return rec(root.left) || rec(root.right)
  
  */
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(rec(root1));
