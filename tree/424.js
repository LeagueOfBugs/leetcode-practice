/* 424. Longest Repeating Character Replacement */

/*  */

const characterReplacement = (s, k) => {
  const freqTracker = {};
  let left = 0;
  let result = 0;
  let maxFreq = 0;
  for (let right = 0; right < s.length; right++) {
    const sRight = s[right];
    const sLeft = s[left];
    freqTracker[sRight] = freqTracker[sRight] + 1 || 1;
    maxFreq = Math.max(maxFreq, freqTracker[sRight]);

    // this is comparing the size of the window in length
    // against the max number of occurrances
    // this operations gives you how many element Freqs
    // are available within the current window
    while (right - left + 1 - maxFreq > k) {
      // If we hit this statement it means that there are more
      // than k numbers of variations inside the current window

      // we can only replace k times so we need to calculate and match
      // the amount of variations - most freq element and available replacers in k we have available.
      freqTracker[sLeft]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

const s = "AABABBA";
const k = 1;
console.log(characterReplacement(s, k));
