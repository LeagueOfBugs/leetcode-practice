/* 
Sort letters in each word
use as key in map to keep track of all anagrams

HOW TO STORE IN HASH
the key will be the sorted word

*/

const groupAnagrams = (str) => {
  const map = new Map();
  for (const word of str) {
    const sortedWord = [...word].sort().join("");
    if (map.has(sortedWord)) {
      map.get(sortedWord).push(word);
    } else {
      map.set(sortedWord, [word]);
    }
  }

  return Array.from(map.values());
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
