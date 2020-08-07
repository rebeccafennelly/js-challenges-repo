// /* Objects - See the data.js file for the objects used in the tests */
// export const person1 = {
//   id: "001",
//   age: 20,
//   isMarried: false,
//   eyeColour: "brown",
//   name: "Elizabeth Bennet",
//   currentFortune: 150,
//   incomePerAnnum: 50,
//   address: "Longbourn, near Meryton, Hertfordshire",
//   calculateFinancesYearEnd: function() {
//     this.currentFortune += this.incomePerAnnum;
//   }
// };

// export const person2 = {
//   id: "002",
//   age: 27,
//   isMarried: false,
//   eyeColour: "brown",
//   name: "Fitzwilliam Darcy",
//   currentFortune: 25000,
//   incomePerAnnum: 10000,
//   address: "Pemberley, near Lambton, Derbyshire",
//   calculateFinancesYearEnd: function() {
//     this.currentFortune += this.incomePerAnnum;
//   }
// };

// export const person3 = {
//   id: "003",
//   age: 22,
//   isMarried: false,
//   eyeColour: "blue",
//   name: "Jane Bennet",
//   currentFortune: 150,
//   incomePerAnnum: 50,
//   address: "Pemberley, near Lambton, Derbyshire",
//   calculateFinancesYearEnd: function() {
//     this.currentFortune += this.incomePerAnnum;
//   }
// };

/**
 * A function that takes in a person object and returns a summary of that person
 *
 * @param {object} person - A person object e.g. {name: "Elizabeth Bennet"}
 * @return {string} Elizabeth Bennet is 20 years old, has a fortune of £150, and lives in Longbourn, near Meryton, Hertfordshire
 */
export const getSummary = (person) => {
const sentence = (`${person.name} is ${person.age} years old, has a fortune of £${person.currentFortune}, and lives in ${person.address}`);
return sentence;
};

/**
 * A function that takes in a person object and will work out if they are rich ( > 1000 per annum)
 *
 * @param {object} person - A person object e.g. {name: "Elizabeth Bennet"}
 * @return {boolean} true if they are rich, false otherwise
 */
export const isRich = (person) => { 
    if (person.incomePerAnnum > 1000) { 
      return true;
    } else {
      return false;
    } 

    // BETTER WAY

    // export const isRich = (person) => person.incomePerAnnum > 1000;
    // }

/**
 * A function that takes in two people objects and checks to see if their eye colours match
 *
 * @param {object} person1 - A person object e.g. {name: "Elizabeth Bennet"}
 * @param {object} person2 - A person object e.g. {name: "Elizabeth Bennet"}
 * @return {boolean} true if they match
 */
export const matchingEyeColour = (person1, person2) => person1.eyeColour === person2.eyeColour;
};

/**
 * A function that takes a person and increments their age by 1 and calls the calculateFinancesYearEnd function for them
 *
 * @param {object} person - A person object e.g. {name: "Elizabeth Bennet"}
 * @return {object} the updated person
 */
export const yearPassed = (person) => {

  // const people = ["person1", "person2", "person3"]
  // const incrementedAge = people.map((person) => { 
  person.age++;
  person.calculateFinancesYearEnd();
  return person;

};

// return yearsPassed();


// // EJ's version
// export const yearPassed = (person) => {
// person.age += 1;
// person.calculateFinancesYearEnd();
// return person;
// };

