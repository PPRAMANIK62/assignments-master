/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = [
    ...str
      .toLowerCase()
      .replace(/[^\w\s\']|_/g, "")
      .replace(/\s+/g, ""),
  ];
  let newStr = [];
  let j = 0;

  for (let i = str.length - 1; i >= 0; i--) newStr[j++] = str[i];

  for (let i = 0; i < str.length; i++) if (str[i] !== newStr[i]) return false;

  return true;
}

module.exports = isPalindrome;
