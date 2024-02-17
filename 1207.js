/* 1207. Unique Number of Occurrences */

/* 
obj key can be element and value is occurrance
    - map the array acummulator can be object
    - for of arr and create var to hold obj
if no object key exists initiate with 1
if it exists add 1 

we need to check values to see if they are unique or some repeat

if they are unique return true
- make values to arr and create a set then check lengths of arr and set
Object.values(objName)
if there are repeating return false

*/

const uniqueOccurrences = (arr) => {
  // edge case: arr can be between 1 <= arr.length <= 1000
  if (arr.length <= 1) return false;

  const frequenceTracker = {};
  const occurences = arr.reduce((frequenceTracker, value) => {
    // if the value is in our frequency tracker then we increase the frequency by one.
    if (frequenceTracker[value]) {
      frequenceTracker[value] = frequenceTracker[value] + 1;

      // if the value does not exist, then assign it to tracker.
    } else {
      frequenceTracker[value] = 1;
    }
    // return tracker every time to have it available next iteration
    return frequenceTracker;
  }, frequenceTracker);

  // grab your frequency values once you are done mapping the frequencies.
  const frequencies = Object.values(occurences);
  // turn those frequencies into a set. A set is going to help filter out repeats.
  const uniqueFrequencies = new Set(frequencies);
  // compare the lengths of both ds. Equal lengths === uniqueness. Differing lengths === repeats exists.
  return frequencies.length === uniqueFrequencies.size;
};

const arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
