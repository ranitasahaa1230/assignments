/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const cleanStr = str1.toLowerCase().replace(/\s/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/\s/g, '');

  if (cleanStr.length !== cleanStr2.length) {
    return false;
  }
// console.log(cleanStr,cleanStr2)

  const sorted1 = cleanStr.split('').sort().join('');
  const sorted2 = cleanStr2.split('').sort().join('');

  return sorted1 === sorted2;
}

// console.log(isAnagram('Debit Card', 'Bad Credit'));
// console.log(isAnagram("abc!","!bac"));
// console.log(isAnagram("hello","hello!"));


module.exports = isAnagram;
