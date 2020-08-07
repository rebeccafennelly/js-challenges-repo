// Asynchronous - This challenge will involve using promises to deal with asynchronous functions

import data from "./data";

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You nust fetch the people, convert it to json and return the people
 * @returns {array} the people array of objects
 */
export const getData = () => {
  return fetch("./data")
  .then (response => {
    return response.json();
  })
  .then (data => {
    return data;
  })
  .catch(error => {
    console.log(error);
});
}

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You must fetch the people and return a new array of just the names of the people
 * @return {array} ["Peter", "Joanna" etc.]
 */
export const getNames = () => {
  return fetch("./data")
  .then (response => {
    return response.json();
  })
  .then (data => {
    return data.map ((person) => person.name);
  })
  .catch(error => {
    console.log(error);
});
}
  

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You must fetch the people and return a single person object that matches the provided id
 * @param {string} id - id of person
 * @returns {object} person object
 */
export const getPerson = (id) => {
  return fetch("./data")
  .then (response => {
    return response.json();
  })
  .then (data => {
    return data.filter ((person) => person.id === id)
    return person;
  })
  .catch (error => {
    console.log(error);
});
}
  // your code here

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You must fetch the people and return a new array of objects that have been filtered down to only people where employed = true
 * @returns {array} of people objects that are employed
 */
export const getEmployedPeople = () => {
  // your code here
};

/**
 * A function that uses the fetch API to read people from a static, local people file written in JSON format.
 * You must fetch the people data and return a new array of objects that have been filtered down to people who match the interest provided
 * @param {string} interest
 * @returns {array} of people objects who have a matching interest
 */
export const filterByInterest = (interest) => {
  // your code here
};
