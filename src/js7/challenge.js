/* Array iterators */

/**
 * The function that will take an array of colors.
 * It will test whether each item in the array is not a pre-approved colour (red, green, blue).
 * for each item in the array that does not match the pre-approved colours, it will be replaced with "red"
 * This should not mutate the provided array. You should be using Array Iterators!
 *
 * @param {array} colours - An array of colours e.g. ["red", "yellow"]
 * @return {array} A list of updated colours e.g. ["red", "red"]
//  */
// const colours = ["violet", "green", "blue", "yellow", "red"];


export const replaceColours = colours => {
 const preApprovedColours = ["red", "green", "blue"]
  return colours.map ((colour) => { if (!preApprovedColour.includes(colour)) {
  return "red";
  } else {
    return colour;
  }
});
};

  
  //   return colours;
  // } else {
  //   const newArray = colours.slice(index, 1);
  //   return newArray;

/**
 * A function that takes a string and checks to see if it is a palindrome (noon, anna, madam are all palindromes)
 * returns true or false
 *
 * @param {string} word - the word to be checked
 * @returns {boolean} true if the word is a palindrome, false otherwise
 */
export const palindromeChecker = word => {
  const aPalindrome = (word.split("").reverse().join("") ===word)
  return (aPalindrome);
  
};

/**
 * A function that takes in an array of words, checks if each word is a palindrome and returns
 * a new array containing only the words that are palindromes.
 * You should use an array iterator method, not a for loop!
 *
 * @param {array} words - the words to be checked
 * @returns {array} List of all the words that are palindromes
 */



export const getAllPalindromes = words => {

let realPalindromes = words.filter((word) => {
  return(word.split("").reverse().join("") ===word);
})
  return(realPalindromes);
}