import * as challenge from "./js13";

let number1 = 2;
let number2 = 4;

let numbersArray = [900, 0, 255];

let names = ["Barry", "Edward", "Alphonse", "Hughes", "Bartholemew", "Hohenheim"];
let names2 = ["Alphonse", "Bartholemew", "Hohenheim"];
const shortNames = ["Barry", "Edward", "Hughes"];

test("Greeting", () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you");
    expect(typeof challenge.greet()).toBe("string");
});

test("number adder", () => {
    expect(challenge.sumTwoNumbers(number1, number2)).toBe(6);
    expect(typeof challenge.sumTwoNumbers(number1, number2)).toBe("number");
});

test("checking the largest number", () => {
  expect(typeof challenge.checkLarger(number1, number2)).toBe("string");
  expect(challenge.checkLarger(number1, number2)).toBe(`${number2} is bigger than ${number1}`);
  expect(challenge.checkLarger(number1, number1)).toBe("Both numbers are equal");
  expect(challenge.checkLarger(number2, number1)).toBe(`${number2} is bigger than ${number1}`);
});

test("filterByLength", () => {
    shortNames.forEach(name => {
      expect(challenge.filterByLength(names)).toContain(name);
    });
    expect(challenge.filterByLength(names)).toEqual(["Barry", "Edward", "Hughes"]);
    expect(challenge.filterByLength(names)).toContain("Barry");
    expect(challenge.filterByLength(names2)).toBe("Sorry, no valid names supplied");
});

test("reduceNumbers", () => {
  expect(challenge.reduceNumbers(numbersArray, 100)).toEqual([255, 0, 155]);

})