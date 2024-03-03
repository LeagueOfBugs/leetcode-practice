const mostWordsFound = (sentences) => {
  return sentences.reduce((count, sentence) => {
    const splitSentence = sentence.split(" ");
    const words = splitSentence.length;
    return Math.max(count, words);
  }, 0);
};

const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

console.log(mostWordsFound(sentences));
