class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function leafSimilar(root1, root2) {
  let leafSequence1 = [];
  let leafSequence2 = [];

  // Helper function to compute leaf value sequence
  function helper(root, arr) {
    if (!root) {
      return;
    }

    if (!root.left && !root.right) {
      arr.push(root.val);
    }

    helper(root.left, arr);
    helper(root.right, arr);
  }

  // Compute leaf value sequences for both trees
  helper(root1, leafSequence1);
  helper(root2, leafSequence2);

  // Compare the leaf value sequences
  if (leafSequence1.length !== leafSequence2.length) {
    return false; // Different number of leaves
  }

  for (let i = 0; i < leafSequence1.length; i++) {
    if (leafSequence1[i] !== leafSequence2[i]) {
      return false; // Leaf values are different
    }
  }

  return true; // Leaf value sequences are identical
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
// root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(7);
root2.right = new TreeNode(3);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(9);

console.log(leafSimilar(root1, root2));
