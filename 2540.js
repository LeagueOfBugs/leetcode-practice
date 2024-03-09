const getCommon = (nums1, nums2) => {
  // calculate max length
  const maxLength = Math.max(nums1.length, nums2.length);
  let pointOne = 0;
  let pointTwo = 0;
  //   loop through max length comparing indexes

  while (pointOne < maxLength && pointTwo < maxLength) {
    if (nums1[pointOne] === nums2[pointTwo]) {
      return nums1[pointOne];
    }

    if (nums1[pointOne] > nums2[pointTwo]) {
      pointTwo++;
    } else {
      pointOne++;
    }
  }
  return -1
};

const nums1 = [
  5, 15, 16, 20, 22, 39, 43, 44, 44, 55, 61, 62, 62, 64, 72, 73, 81, 88, 90, 95,
];
const nums2 = [
  2, 8, 9, 11, 12, 13, 26, 29, 38, 49, 50, 51, 58, 63, 67, 72, 75, 82, 92, 96,
];

console.log(getCommon(nums1, nums2));
