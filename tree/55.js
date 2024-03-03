const canJump = (nums) => {
  let jumpTrack = 0;
  let nextJump = 0;
  while (jumpTrack < nums.length - 1) {
    nextJump = nums[nextJump];
    jumpTrack += nextJump;
    nextJump = jumpTrack;
  }
  console.log("jumpTrack", jumpTrack);
  return nextJump === nums.length - 1;
};

const nums = [2, 3, 1, 1, 4];

console.log(canJump(nums));
