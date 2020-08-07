/* JS1 challenges your use of variables as well as number and string manipulation */

const person1FirstName = "John";
const person1LastName = "Smith";
const person1Age = 22;
const person2FirstName = "Mary";
const person2LastName = "O'Brian";
const person2Age = 33;

/**
 * A function that uses the provided variables to return "Hello, my name is John Smith"
 *
 * @return {string} Hello, my name is John Smith
 */
export const greet = () => {
return "Hello, my name is John Smith";
};

/**
 * A function that uses the variables to calculate the age differences and return 
 * "Mary is 11 years older than John"
 *
 * @return {string} Mary is 11 years older than John
 */
export const calculateAgeDifference = () => {
return person2FirstName + " is " + (person2Age - person1Age) + " years older than " + person1FirstName
};

/**
 * A function that uses the variables to return "The total length of both names is 20 characters"
 *
 * @return {string} The total length of both names is 20 characters
 */
export const totalNameLength = () => {

return "The total length of both names is " + ((person1FirstName.length + person1LastName.length) + (person2FirstName.length + person2LastName.length)) + " characters"
};
