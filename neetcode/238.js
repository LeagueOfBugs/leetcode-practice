const productExceptSelf = (nums) => {
  const n = nums.length;
  const answer = new Array(n);

  let prefixProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefixProduct;
    prefixProduct *= nums[i];
  }

  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
     answer[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }

  return answer;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
