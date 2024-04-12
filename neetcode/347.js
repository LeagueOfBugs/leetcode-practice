/* 
Iterate throught nums
Keep track of freq w/ a hash

return nums with highest values in hash
if tie, any of them can be picked
*/

function topKFrequent(nums, k) {
  const freq = {};

  for (const num of nums) {
    freq[num] = freq[num] ? (freq[num] += 1) : 1;
  }

  const sortedNums = Object.keys(freq).sort((a, b) => {
    return freq[b] - freq[a];
  });

  return sortedNums.slice(0, k);
}

const nums = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];
const k = 2;
console.log(topKFrequent(nums, k));
