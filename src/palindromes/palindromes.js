const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const middle = Math.floor(sentence.length / 2)
  const charStack = new Stack()
  for (let i = 0;i<middle;i++){
    charStack.push(sentence[i])
  }
  let midPoint;
  if ((sentence.length % 2) > 0){
    midPoint = middle + 1
  } else { midpoint = middle}
  for (let i = midPoint;i<sentence.length;i++){
    const stackValue = charStack.pop()
    if (sentence[i] !== stackValue){
      return false
    }
  }
  return true
};
isPalindrome("abcba")
module.exports = isPalindrome;
