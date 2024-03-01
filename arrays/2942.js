const findWordsContaining = (words, x) => {
    return words.reduce((resultIndexes, word, index) => {
        const letters = word.split('')

        if(letters.includes(x)){
            resultIndexes.push(index)
        }
        return resultIndexes
    }, [])
};

const words = ["leet", "code"];
const x = "e";

console.log(findWordsContaining(words, x))