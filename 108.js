class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }

  // Find the middle index of the array
  const mid = Math.floor(nums.length / 2);

  // Create a new node with the middle value as the root
  const root = new TreeNode(nums[mid]);

  // Recursively build left and right subtrees
  root.left = sortedArrayToBST(nums.slice(0, mid));
   root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

console.log(sortedArrayToBST([1,2,3,4,6,7,9]));
