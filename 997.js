/* 997. Find the Town Judge */

/* 
map out frequency into an array
iterate through trust and map out freqs

grab all values when done in the form of array
grab all keys in the object as arrays

if value is not included in keys array then
return value else return -1
*/

/* const findJudge = (n, trust) => {
  if (trust.length === 0) return -1;

  const freqTracker = {};

  for (const element of trust) {
    const [a, b] = element;
    freqTracker[a] = b;
  }

  const trustees = Object.keys(freqTracker);
  const trustors = Object.values(freqTracker);
  const set = new Set(trustors);

  if (set.size === 1) {
    const [judge] = set.values();
    return judge;
  }
  return -1;
}; */

const n = 3;
const trust = [
  [1, 3],
  [2, 3],
  [3, 1],
];


const findJudge = function(n, trust) {
    if(n == 1) return 1
    
    const degress = new Array(n+1).fill(0)

    for(const t of trust){
        console.log(degress[t[0]]); 
        console.log(degress[t[1]]); 
        degress[t[0]]--
        degress[t[1]]++
    }
    for(let i = 0; i < degress.length; i++){
        if(degress[i] === n-1) return i
    }
    return -1
};

console.log(findJudge(n, trust));