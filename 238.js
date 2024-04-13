const productExceptSelf = (nums) => {
  const numsLength = nums.length;

  const answer = [];

  let prefixProduct = 1;
  for (let i = 0; i < numsLength; i++) {
    answer[i] = prefixProduct;
    prefixProduct *= nums[i];
  }

  let postfixProduct = 1;
  for (let i = numsLength - 1; i >= 0; i--) {
    answer[i] *= postfixProduct;
    postfixProduct *= nums[i];
  }

  return answer;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
