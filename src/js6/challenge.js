/* Functions as arguments (callbacks) */

/**
 * A function that takes a string and checks to see if it is a palindrome (noon, anna, madam are all palindromes)
 * returns true or false
 *
 * @param {string} word - the word to be checked
 * @returns {boolean} true if the word is a palindrome, false otherwise
 */
export const palindromeChecker = (word) => {
  return word.split("").reverse().join("") === word;
};

/**

 * A function that takes a string and checks to see if it contains vowels
 * returns true or false
 *
 * @param {string} word - the word to be checked
 * @returns {boolean} true if the word contains vowels, false otherwise
 */

export const vowelChecker = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const wordSplit = word.split("");
  // return wordSplit.includes(vowels);
  const filteredWords = wordSplit.filter((letter) => { return (vowels.indexOf(letters) >= 0); })
};

// export const vowelChecker = (word) => {
//   let newArr = word.split('');
//   return newArr.includes('a') || newArr.includes('e') || newArr.includes('i') ||
//     newArr.includes('o') || newArr.includes('u');
// }

// console.log(vowelChecker('hello'));

/**
 * A function that takes a word and a function as arguments
 * 1) a) First check to see if the word is a valid string, b) it contains atleast 1 letter and c) is exactly 1 word, not two or more
  * i) If the word is a valid single word, call the provided function with the word and return the output
  * ii) If not a valid single word then return 'Input must be a valid single word'
 *
 * @param {string} word - the word to be checked
 * @param {function} wordCheckCallback - A function to execute with a valid word
 * @returns {boolean | string} true or false for a valid word
 */


export const useWordCheckCallback = (word, wordCheckCallback) => {
  if (typeof word == "string" && word.length > 0 && !word.includes(" ")) {
    return wordCheckCallback(word);
  } else {
    return `Input must be a valid single word`;
  }
};

/**
 * A function that takes an array of words and a function as arguments
 * 1) a) Check each word to see if it is a valid string, b) it contains atleast 1 letter and c) is exactly 1 word, not two or more
 *  i) If the word is a valid single word, call the provided function with the word
 *  ii) !!!!! HERE !!!!for all valid words that pass the function, add to an new array and return that array
 *
 * @param {array} words - the words to be checked
 * @param {function} wordCheckCallback - A function to execute with a valid word
 * @returns {array} list of all valid words that pass the check
 */
export const checkWords = (words, wordCheckCallback) => {
  const newArray = [];
  words.forEach((word) => {
    if (word == "string" && word.length > 0 && !word.includes(" ")) {
      wordCheckCallback(word);
      newArray.push(word);
    };
    return newArray;
  });
}
