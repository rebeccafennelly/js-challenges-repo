/* JS2 builds on the previous challenges and adds the use of functions with parameters */

/**
 * A function that uses the function parameters to output "Hi John, you are great!"
 *
 * @return {string} Hi John, you are great!
 */
export const greet = (firstName) => {
let firstName = "John";
return `Hi ${firstName}, you are great!`;
console.log (greet);
};

/**
 * A function that uses the function parameters to calculate the age differences and outputs a string e.g.
 * " Person 1 is 11 years older than Person 2"
 *
 * @return {string} The age difference between person 1 and person 2 is 10 years
 */
export const calculateAgeDifference = (age1, age2) => {
let age1=24
let age2=9
const ageDifference = (age1 - age2);
return `Person 1 is ${ageDifference} years older than Person 2}`
};

/**
 * A function that uses the function parameters to calcualte the length of the provided names and
 * retruns a string e.g. "The total length of the names is 10 characters"
 *
 * @return {string} The total length of the names provided is 10 characters
 */
export const totalNameLength = (firstName, lastName) => {
let total = (firstName.length + lastName.length);
return (`The total length of the names provided is ${total} characters`);
};




