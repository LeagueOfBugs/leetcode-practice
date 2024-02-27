function arraysIntersection(arr1, arr2, arr3) {
  // Define three pointers - one for each array
  let pointer1 = 0;
  let pointer2 = 0;
  let pointer3 = 0;

  const result = [];

  // while all arrays have length
  while (
    pointer1 < arr1.length &&
    pointer2 < arr2.length &&
    pointer3 < arr3.length
  ) {
    // easier to debug
    const arr1Pointer = arr1[pointer1];
    const arr2Pointer = arr2[pointer2];
    const arr3Pointer = arr3[pointer3];

    // save all numbers that appear in each array
    if (arr1Pointer === arr2Pointer && arr2Pointer === arr3Pointer) {
      result.push(arr1Pointer);
    }

    // How to increment -  if 1 and 2 are the same then increment 3
    // will force 2 to increment next
    // finally 1
    if (arr1Pointer < arr2Pointer) {
      pointer1++;
    } else if (arr2Pointer < arr3Pointer) {
      pointer2++;
    } else {
      pointer3++;
    }
  }

  return result;
}

arr1 = [1, 2];
arr2 = [1, 2, 5, 9];
arr3 = [1, 3, 4, 5, 8];

console.log(arraysIntersection(arr1, arr2, arr3));
