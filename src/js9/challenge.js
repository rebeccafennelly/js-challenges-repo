/* Arrays of objects - see the data.js file for the array of objects used in the tests */

/**
 * The function will take an array of person objects.
 * It will add the names of each person to an array adn return it.
 * @param {array} people - an array of people objects
 * @return {array} A list of all people names
 */

 // THE FUNCTION - const getNames = (people) =>{...}

export const getNames = people => {
return people.map(person => person.name)
};

export const getNames = people => {
  const names = people.map(person => {return person.name});
  return names;
}; 

/**
 * The function will take two aguments, an array of person objects and an eye colour
 * then return a new array of people who match that eye colour
 * @param {array} people - an array of person objects
 * @param {string} eyeColour
 * @return {array} an array of person objects who match the eye colour provided
 */
export const getMatchingEyeColour = (people, eyeColour) => {
  return people.filter(person => person.eyeColour === eyeColour)
};

// export const getMatchingEyeColour = (people, eyeColour) => {
//   const eyes = people.filter(person => 
//     {return person.eyeColour === eyeColour}
//     );
//   return eyes;
// };

/**
 * The function will take an array of person objects and return the person with the hoghest current fortune
 * @param {array} people - an array of person objects
 * @returns {object} person object with highest currentFortune
 */
// export const getLargestFortune = (people) => {
//   return people.filter(person => {
//     if (people[0].currentFortune > people[1].currentFortune && people[2].currentFortune){
//       return people[0];
//     } else if (people[1].currentFortune > people[0].currentFortune && people[2].currentFortune) {
//         return people[1];
//     } else {
//         return people[2];
//     }
//     }


    export const getLargestFortune = (people) => {
      return people.sort((currentPerson, previousPerson) => {
        return (currentPerson.currentFortune - previousPerson.currentFortune)[people.length - 1];
    }

/**
 * The function will take an arrat of person objects and return a new array of person objects
 * which have had the calculateFinancesYearEnd() method and the age incremented
 * @param {array} people - an array of person objects
 * @return {array} people - an array of modified person objects e.g.
 *   {
    id: "001",
    age: 21,
    isMarried: false,
    eyeColour: "brown",
    name: "Elizabeth Bennet",
    currentFortune: 200,
    incomePerAnnum: 50,
    address: "Longbourn, near Meryton, Hertfordshire",
    calculateFinancesYearEnd: function () {
      this.currentFortune += this.incomePerAnnum;
    }
 */
    export const getEndOfYearFinances = (people) => {
      let NewObjectsArray = {...people}; 
      NewObjectsArray.map (person => { return (person.age += 1), (person.calculateFinancesYearEnd());
  })
      return Newobjectsarray;
// };

    }}
