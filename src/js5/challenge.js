/* This challenge is about using loops */

/**
 * The function that will take an array of colors.
 * It will test whether each item in the array is not a pre-approved colour (red, green, blue).
 * for each item in the array that does not match the pre-approved colours, it will be replaced with "red"
 * This should not mutate the provided array.
 *
 * @param {array} colours - An array of colours e.g. ["red", "yellow"]
 * @return {array} A list of updated colours e.g. ["red", "red"]
 */
export const replaceColours = (colours) => {
  const newArray = colours.map((colour) => {
    if (colour !== "red" && colour !== "blue" && colour !== "green") {
      return "red"
    } else {
      return colour;
    }
  })
  return newArray;
  };



    // const copyOfColours = [...colours];
  // copyOfColours.forEach(colour); {
  //   if (colour !== "red" || "blue" || "green"); {
  //     return "red"
  //   }
  // }

/**
 * A function that takes a string and checks to see if it is a palindrome (noon, anna, madam are all palindromes)
 * returns true or false
 * (You don't need a loop for this function)
 *
 * @param {string} word - the word to be checked
 * @returns {boolean} true if the word is a palindrome, false otherwise
 */
export const palindromeChecker = (word) => {
    return word.split("").reverse().join("") === word;
  };
  // your code here

/**
 * A function that takes in an array of words, checks if each word is a palindrome and returns
 * a new array containing only the words that are palindromes
 *
 * @param {array} words - the words to be checked
 * @returns {array} List of all the words that are palindromes
 */
export const getAllPalindromes = (words) => {
  const newArrayOfPals = words.filter(word => word.split("").reverse().join("") === word); 
  return newArrayOfPals;
  // your code here
};
