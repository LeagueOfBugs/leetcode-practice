/* 
9. Palindrome Number
*/

/* 
split the number into an array to access individuals numbers
Define two points: one at length start and other at length end

while the two points do not intersect
check if the value of the points in the array within the current 
iteration are the same.

If there is any instance of them not being equal, then return false immediately.

Edgecase: 
number can be of length <= 1 --> return false
*/

const isPalindrome = (number) => {
  // Negative numbers cannot be palindromes
  if (number < 0) return false;

  const digits = [];

  // Pick off the remainder of number. Like turning a number into a
  // percent and saving the tenth value in the array EX: 121 --> 12.1

  // you can use unshift to preserve the sequence. push will reverse your number.
  while (number > 0) {
    digits.push(number % 10);

    // round down this value 12.1 to 12. We repeat the process next to get our next number which is 2
    number = Math.floor(number / 10);
  }

  // get start and end digits of the array to compare with each other
  let start = 0;
  let end = digits.length - 1;

  // while both values (start, end) dont intercept compare them
  while (start < end) {
    const leftMostDigit = digits[start];
    const rightMostDigit = digits[end];

    // if they fail comparison, number is not a palindrome
    if (leftMostDigit !== rightMostDigit) return false;

    // continue to next numbers
    // start will iterate the value to the right
    // end will iterate to the value to its left
    // eventually both points will try to meet and
    // return out of loop. in this case number is palindrome
    start++;
    end--;
  }

  return true;
};

const number = -121;
console.log(isPalindrome(number));
