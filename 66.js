/* 
66. Plus One
*/

/* 
turn digits arr into number
increment number by 1
turn number into string
turn number into array
*/



const plusOne = (nums) => {
  // Join numbers. This will turn array into a string
  const joinNums = nums.join("");
  // Turn your number string into a number data type
  const toNumber = Number(joinNums);
  // Add 1 to number
  const addOne = toNumber + 1;
  // Turn number to string
  const toString = addOne.toString();
  // Turn number back into an array
  const backToArray = toString.split("");

  return backToArray;
};

const nums = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(nums));
