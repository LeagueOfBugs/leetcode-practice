class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function evaluateTree(root) {
  if (!root) {
    return false;
  }

  const translation = {
    0: false,
    1: true,
    2: "or",
    3: "and",
  };

  let translated = translation[root.val];

  // Leafs can only be 0 or 1 - true or false
  if (!root.left && !root.right) {
    return translated;
  }

  const leftEval = evaluateTree(root.left);
  const rightEval = evaluateTree(root.right);

  // parents can only be '||' or '&&'
  if (translated === "or") {
    return leftEval || rightEval;
  } else if (translated === "and") {
    return leftEval && rightEval;
  } else {
    return false;
  }
}

const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(0);
root1.right.right = new TreeNode(1);

console.log(evaluateTree(root1));
