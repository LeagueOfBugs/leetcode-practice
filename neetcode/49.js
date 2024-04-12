/* 
Sort letters in each word
use as key in map to keep track of all anagrams

HOW TO STORE IN HASH
the key will be the sorted word

*/

const groupAnagrams = (str) => {
  const map = new Map();
// iterate through array of words
  for (const word of str) {
    // Split word, sort letters, reunite sorted letter word
    const sortedWord = [...word].sort().join("");
    // check to see it the key(sorted word) exists
    if (map.has(sortedWord)) {
        // get the key to access array and push new word
      map.get(sortedWord).push(word);
    } else {
        // set the key and the array with word
      map.set(sortedWord, [word]);
    }
  }

//  grab all values(arrays) and return an array of arrays
  return Array.from(map.values());
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
