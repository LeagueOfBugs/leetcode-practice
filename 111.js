class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function minDepth(root) {
  if (!root) return 0;
  // BFS
  const queue = [root];
  //  root taken into account
  let depth = 1;

  while (queue.length) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const currentNode = queue.shift();
      // If we are at a leaf node
      if (!currentNode.left && !currentNode.right) return depth;

      // add children to queue
      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
    }
    // When loop ends - end of level

    // Start next level
    depth++;
  }

  return depth;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(minDepth(root1));
