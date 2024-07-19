//Day-5.....Functions...
//Today challenge is playing with the function....
//Task1..
//write  s functon to check if a number odd and even...
function aOE(number) {
  if (number % 2 === 0) {
      return "Even";
  } else {
      return "Odd";
  }
}

// Example usage
console.log(aOE(3));  // Output: Odd
console.log(aOE(10)); // Output: Even
//Task2....
function Square(number) {
  return number * number;
}

// Example usage
console.log(Square(3));  // Output: 9
console.log(Square(10)); // Output: 10
// Task 3: Function Expression to Find the Maximum of Two Numbers and Log the Result
const findMax = function(num1, num2) {
  const max = num1 > num2 ? num1 : num2;
  console.log(max);
  return max;
};

// Example usage
findMax(5, 10); // Output: 10
findMax(15, 3); // Output: 15

// Task 4: Function Expression to Concatenate Two Strings and Return the Result
const concatenateStrings = function(str1, str2) {
  return str1 + str2;
};

// Example usage
console.log(concatenateStrings("Hello, ", "World!")); // Output: "Hello, World!"

// Task 5: Arrow Function to Calculate the Sum of Two Numbers and Return the Result
const sum = (num1, num2) => num1 + num2;

// Example usage
console.log(sum(5, 7)); // Output: 12

// Task 6: Arrow Function to Check if a String Contains a Specific Character and Return a Boolean Value
const containsCharacter = (str, char) => str.includes(char);

// Example usage
console.log(containsCharacter("Hello", "e")); // Output: true
console.log(containsCharacter("World", "a")); // Output: false

// Task 7: Function with Two Parameters and Default Value, Returning Their Product
function multiply(num1, num2 = 1) {
  return num1 * num2;
}

// Example usage
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(5));    // Output: 5 (default value 1 is used)

// Task 8: Function to Return a Greeting Message with Default Value for Age
function greet(name, age = 3) {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage
console.log(greet("Jai", 25)); // Output: "Hello, Jai! You are 25 years old."
console.log(greet("Veeru"));     // Output: "Hello, Veeru! You are 3 years old." (default value is used)

// Task 9: Higher-Order Function that Takes a Function and Calls it a Given Number of Times
function repeatFunction(func, times) {
  for (let i = 0; i < times; i++) {
      func();
  }
}

// Example usage
repeatFunction(() => console.log("Hello!"), 3);
// Output:
// Hello!
// Hello!
// Hello!

// Task 10: Higher-Order Function that Takes a Function and a Value, Applies the Function to the Value, and Returns the Result
function applyFunction(func, value) {
  return func(value);
}

// Example usage
const square = num => num * num;
console.log(applyFunction(square, 5)); // Output: 25

// Task 11: Arrow Function to Check if a Number is Even or Odd and Log the Result
const isEvenOrOdd = num => {
  const result = num % 2 === 0 ? "Even" : "Odd";
  console.log(result);
  return result;
};

// Example usage
isEvenOrOdd(4); // Output: "Even"
isEvenOrOdd(7); // Output: "Odd"

