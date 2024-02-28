class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findBottomLeftValue(root) {
  if (!root) {
    return null; // Return null if the tree is empty
  }

  let leftmostValue = null;
  let queue = [root]; // Initialize queue with the root node

  while (queue.length > 0) {
    const levelSize = queue.length;

    // Traverse all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Dequeue the front node

      // Update the leftmost value if it is not yet set
      // loop resets after traversal of children
      // when i === 0 it means we are in new level at leftmost
      if (i === 0) {
        leftmostValue = node.val;
      }

      // Enqueue the left and right children of the current node
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return leftmostValue;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(findLeftmostValue(root1));
