// // A function that returns the smallest number from an array of numbers
// export const findSmallestNumberInArray = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//       if (typeof numbers[i] !== "number") throw("Array must only contain numbers");
//   }
//   return Math.min(...numbers);
// };

// A function that returns the smallest number from an array of numbers
// export const findSmallestNumberArray = () => {};


// A function that, given an array, removes the second item from the array
export const removesSecondNumber = numbers => (numbers.splice (1,1));
// (use splice)\\