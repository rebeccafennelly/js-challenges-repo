/* JS4 builds on the previous challenges and adds the use of Arrays */

/**
 * A function that will take two array arguments.
 * The function will combine both arrays together into a single array and return it.
 *
 * @param {array} list1 - An array e.g. ["red", "blue"]
 * @param {array} list2 - An array e.g ["hello", "goodbye"]
 * @return {array} A merged array
 */
export const mergeArrays = (list1, list2) => {
  return list1.concat(list2);
};


console.log(return)

/**
 * A function that will take two arguments: an array of colors and an index.
 * The function will test whether the item at index is not a pre-approved colour (red, green, blue).
 * If the colour at the index is not pre-approved, the colour will be deleted. IFNOT RED GLEEN OR BLUE
 * This should not mutate the provided array. SLICE
 *
 * @param {array} colours - An array of colours e.g. ["red", "blue"]
 * @param {number} index - Index of the array item to test
 * @return {array} A list of updated colours
 */


};

// sev 

export const checkColour = (colours, index) => {



  
  // if (colours[index] == "red" || colours[index] == "green" || colours[index] == "blue") {
  //   return colours;
  // } else {
  //   const newArray = colours.slice(index, 1);
  //   return newArray;
  // };

    if (colours[index].includes(approvedColour)) {
      return colours;
    }else { 
      const newArray = colours
        return newArray.splice (index,1);
    }
    
    checkColour();
};


//check each item in an index, and if it's not an approved colour, remove that colour




//   const approvedColour = ["red", "green", "blue"]
// if (colours [index]) = ![colours].includes(approvedColour) {
//   const newArray = colours.slice (index, 1);
  
// }
// }