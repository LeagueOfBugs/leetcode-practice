class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findMode(root) {
  if (!root) return [];

  // track the freq of nodes
  const freqMap = new Map();

  function helper(node) {
    if (!node) return;

    helper(node.left);

    // if node doesn't exist then log to freqMap
    // if it does then + 1
    freqMap.set(node.val, (freqMap.get(node.val) || 0) + 1);

    helper(node.right);
  }

  helper(root);

  let maxFreq = Math.max(...freqMap.values());

  const modes = [];
  for (const [value, freq] of freqMap) {
    if (freq === maxFreq) {
      modes.push(value);
    }
  }

  return modes;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(findMode(root1));
