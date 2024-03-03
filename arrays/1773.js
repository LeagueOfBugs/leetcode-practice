const countMatches = (items, ruleKey, ruleValue) => {
  return items.reduce((count, item) => {
    const [type, color, name] = item;
    if (ruleKey === "color") {
      if (color === ruleValue) count++;
    } else if (ruleKey === "type") {
      if (type === ruleValue) count++;
    } else {
      if (name === ruleValue) count++;
    }

    return count;
  }, 0);
};

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"],
];
const ruleKey = "type";
const ruleValue = "phone";

console.log(countMatches(items, ruleKey, ruleValue));
