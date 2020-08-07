
// 1. Write a function that adds three numbers together and returns the result
const addThreeNumbers = (numOne, numTwo, numThree) => {
  return numOne + numTwo + numThree;
}
  console.log (addThreeNumbers(2, 65, 23));


// 2. Write a function that takes in a word as an argument and returns the word in capital letters

const capitaliseWord = (word) => {
  return word.toUpperCase();
}
  console.log (capitaliseWord("hippo"));


// 3. Write a function that takes 5 numbers and returns the lowest number

const lowestofFive = (numOne, numTwo, numThree, numFour, numFive) => {

  if (numOne < numTwo || numThree || numFour || numFive); {
    return numOne;
  } else if (numTwo < numOne || numThree || numFour || numFive); {
    return numTwo;
  } else if (numThree < numOne || numTwo || numFour || numFive); {
    return numThree;
  } else if (numFour < numOne || numTwo || numThree || numFive); {
    return numFour;
  } else {
    return numFive;
  }
}
console.log (lowestOfFive (2, 3, 4, 5, 6));






// 4. Write a function that takes in an amount in GBP.
         // - If the amount is over £15, return “loaded.”
         // - If the amount is between £0 and £15, return “ok.”
         // - If the amount is £0 or lower, return “skint.”


const theMoneyFunction = (amount) => {
  if (amount > 15); {
    return "Loaded!";
  }
  else if (amount >= 0 && amount < 15); {
    return "ok";
  }
  else if (amount <= 0) {
    return "skint";
  }
} 




