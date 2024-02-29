/* 
BFS

queue - initialized with root

while we have item in queue

loop through length of queue
add sum to all iterations
take the item from the front of the queue
add children to queue

sum = 0

*/

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FAVORITE QUESTION SO FAR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function averageOfLevels(root) {
  const result = [];

  function helper(node, sum) {
    if (!node) {
      return 0;
    }

    const queue = [node];

    while (queue.length) {
      // Important: once the while loop starts,
      // this reference remains the same
      const queueLength = queue.length;

      // loop through level and update:
      //   Sum + current node value
      //   Push children to queue

      // for loop will only run only the referenced amount initialy
      // no matter if you add or delete from the queue within the loop
      for (let i = 0; i < queueLength; i++) {
        let currentNode = queue.shift();
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        sum += currentNode.val;
      }

      //   level is complete:

      // calculate average and push to result in outer scope
      result.push(sum / queueLength);
      // reset the value after every successful level iteration
      sum = 0;
    }
  }

  helper(root, 0);

  return result;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(7);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(averageOfLevels(root1));
