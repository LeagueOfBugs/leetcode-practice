/* 844. Backspace String Compare */

/* 
variables to define:
    pointer for s
    pointer for t
    pointer for result array s
    pointer for result array t

    
    first create the array for s and t
    if letter is not # then push to array
    if letter is # then pop from array
    then iterate through length and use pointers to compare equality


    return boolean
    if lengths are not the same then return false
*/

const backspaceComparev1 = (s, t) => {
  let sPoint = 0;
  let tPoint = 0;
  const sArray = [];
  const tArray = [];

  // Loop through the max length of the two strings
  let maxLength = Math.max(s.length, t.length);
  //   iterate through the length of the longest string
  while (sPoint < maxLength || tPoint < maxLength) {
    let sLetter = s[sPoint];
    let tLetter = t[tPoint];
    // Create stack for s
    if (sLetter) {
      if (sLetter !== "#") {
        // add to stack
        sArray.push(s[sPoint]);
      } else {
        // remove from stack
        sArray.pop();
      }
    }
    // Create stack for t
    if (tLetter) {
      if (tLetter !== "#") {
        // add to stack
        tArray.push(t[tPoint]);
      } else {
        // remove from stack
        tArray.pop();
      }
    }

    // Increment pointers
    sPoint++;
    tPoint++;
  }

  //  If lengths are not the same then arrays do not match
  if (sArray.length !== tArray.length) {
    return false;
  }

  //  Iterate through the arrays and compare
  for (let i = 0; i < sArray.length; i++) {
    let sLetter = sArray[i];
    let tLetter = tArray[i];
    if (sLetter !== tLetter) {
      return false;
    }
  }

  return true;
};

const backspaceCompare = (s, t) => {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    let sBackspaces = 0;
    while (sPointer >= 0 && (s[sPointer] === "#" || sBackspaces > 0)) {
      if (s[sPointer] === "#") {
        sBackspaces++;
      } else {
        sBackspaces--;
      }
      sPointer--;
    }

    let tBackspaces = 0;
    while (tPointer >= 0 && (t[tPointer] === "#" || tBackspaces > 0)) {
      if (t[tPointer] === "#") {
        tBackspaces++;
      } else {
        tBackspaces--;
      }
      tPointer--;
    }

    if (sPointer < 0 && tPointer < 0) {
      return true; // Both strings are exhausted
    }
    if (sPointer < 0 || tPointer < 0 || s[sPointer] !== t[tPointer]) {
      return false; // Mismatch found
    }

    sPointer--;
    tPointer--;
  }

  return true;
};

console.log(backspaceComparev1("xywrrmp", "xywrrmu#p"));
