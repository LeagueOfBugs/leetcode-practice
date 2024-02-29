// q initialized with root
//  define a variable to track the level

// while loop q has length{
// represents a level
// for loop to iterate q length{
// shift q = node
//  level modulus 2
//          no remainder = EVEN
//                  ODD numbers in ascending order
//          remainder = ODD
//                  EVEN numbers in descending order
// continue r return false
// add children to queue L
// add children to queue R
// increase the level
// }
// }
// return true everything passed
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isEvenOddTree(root) {
  const queue = [root];
  let level = 0;

  while (queue.length) {
    const size = queue.length;
    let prevValue = level % 2 === 0 ? -1 : Infinity;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (level % 2 === 0) {
        // Even level

        // Nodes have to be:
        // Odd
        // Greater than last node
        // Smaller than next

        // trigger only if conditions don't exist
        if (node.val % 2 === 0 || node.val <= prevValue) {
          return false;
        }
      } else {
        // Odd level
        
        // Nodes have to be:
        // Even
        // Smaller than last node
        // Greater than next

        // trigger only if conditions don't exist
        if (node.val % 2 !== 0 || node.val >= prevValue) {
          return false;
        }
      }

      prevValue = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    level++;
  }

  return true;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(10);
root1.left.left = new TreeNode(3);
root1.left.left.left = new TreeNode(12);
root1.left.left.right = new TreeNode(8);

root1.right = new TreeNode(4);
root1.right.right = new TreeNode(9);
root1.right.right.right = new TreeNode(2);
root1.right.left = new TreeNode(7);
root1.right.left.left = new TreeNode(6);

console.log(isEvenOddTree(root1));
