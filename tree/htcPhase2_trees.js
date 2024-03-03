class BinaryTree {
  constructor(BinaryTree) {
    this.value = BinaryTree;
    this.left = null;
    this.right = null;
  }

  inorderTraversal(root, result = []) {
    if (!root) {
      return result;
    }

    this.inorderTraversal(root.left, result);
    result.push(root.value);
    this.inorderTraversal(root.right, result);

    return result;
  }

  preorderTraversal(root, result = []) {
    if (!root) {
      return result;
    }

    result.push(root.value);
    this.preorderTraversal(root.left, result);
    this.preorderTraversal(root.right, result);

    return result;
  }

  postorderTraversal(root, result = []) {
    // base case
    if (!root) {
      return result;
    }
    this.postorderTraversal(root.left, result);
    this.postorderTraversal(root.right, result);
    result.push(root.value);

    return result;
  }

  BFS(root, result = []) {
    const queue = [root];

    while (queue.length > 0) {
      // retrieve from front of array
      // unshift adds btw future me
      const currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  rangeSumBST(root, low, high) {
      let result = 0;
      if (!root) return result;

    if (root.value >= low && root.value <= high) {
      result += root.value;
    }
    result += this.rangeSumBST(root.left, low, high);
    result += this.rangeSumBST(root.right, low, high);
    return result;
  }
}

const bt = new BinaryTree(1);
bt.left = new BinaryTree(2);
bt.left.left = new BinaryTree(4);
bt.left.right = new BinaryTree(7);
bt.right = new BinaryTree(3);
bt.right.left = new BinaryTree(6);
bt.right.right = new BinaryTree(9);
const ioTraversal = bt.inorderTraversal(bt);
const poTraversal = bt.postorderTraversal(bt);
const preoTraversal = bt.preorderTraversal(bt);
const bfsApproach = bt.BFS(bt);
const rangeSumBSTTest = bt.rangeSumBST(bt, 1, 3);
console.log(rangeSumBSTTest);
