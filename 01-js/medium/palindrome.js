/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
  let reversedStr = cleanStr.split('').reverse().join(''); // Reverse the string
  return cleanStr === reversedStr;
}
// ===str.replace(/\s+/g,'').toLowerCase()
// console.log(isPalindrome('Able, was I ere I saw Elba!'))
module.exports = isPalindrome;
