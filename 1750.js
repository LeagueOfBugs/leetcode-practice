function minimumLength(s) {
  let minPrefix = 0,
    minSuffix = 0;
  let prefixChar = s[0],
    suffixChar = s[s.length - 1];

  // Count consecutive characters at the beginning of the string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === prefixChar) minPrefix++;
    else break;
  }

  // Count consecutive characters at the end of the string
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === suffixChar) minSuffix++;
    else break;
  }

  // Compute the minimum length after operations
  return s.length - Math.min(minPrefix, minSuffix) * 2;
}

// Test cases
console.log(minimumLength("ca")); // Output: 2
console.log(minimumLength("cabaabac")); // Output: 0
console.log(minimumLength("aabccabba")); // Output: 3
