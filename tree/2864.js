const maximumOddBinaryNumber = (s) => {
  const descendingarr = s.split("").sort().reverse();
  if (descendingarr[0] === "1") {
    const maxNum = descendingarr.slice(1).concat("1");
    return maxNum.join("");
  } else {
    return descendingarr.join("");
  }
};

const s = "010";
console.log(maximumOddBinaryNumber(s));
