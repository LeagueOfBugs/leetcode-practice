var rangeSumBST = function (root, low, high) {
  let result = 0;
  if (!root) return 0;

  // check node for condition before traversing to next
  if (low <= root.val && root.val <= high) {
    result += root.val;
  }
  // persist the result through traversals by adding to recursion call
  result += rangeSumBST(root.left, low, high);
  result += rangeSumBST(root.right, low, high);

  // return sum of numbers within range or 0 if none found
  return result;
};
