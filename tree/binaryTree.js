/* Binary Tree Practice */

class Node {
  constructor(value) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  insert(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
      return;
    }

    var currentNode = this.root;
    // helps keep track of the parent node for comparison later on
    var parent;

    // while you have a defined current node
    while (currentNode) {
      parent = currentNode;
      if (newValue < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    // check if newValue should be a leftChild or rightChild
    if (newValue < parent.val) {
      parent.leftChild = new Node(newValue);
    } else {
      parent.rightChild = new Node(newValue);
    }
  }

  inorderTraversal(node = this.root, result = []) {
    if (!node) return result;
    this.inorderTraversal(node.leftChild, result);
    result.push(node.val);
    this.inorderTraversal(node.rightChild, result);
    return result;
  }
}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val);
BST.insert(4);
BST.insert(9);
BST.insert(5);
BST.insert(2);
BST.insert(8);
BST.insert(12);
BST.insert(10);
BST.insert(14);

// inOrderPrint(BST.root);

BST.inorderTraversal();
