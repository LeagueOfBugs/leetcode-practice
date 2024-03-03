const arrayStringsAreEqual = (word1, word2) => {
  return word1.join("") === word2.join("");
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1, word2));
