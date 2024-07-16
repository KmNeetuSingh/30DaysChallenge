// This is a 30 day Javascript Language...........
// ............................Activity-1.....................

// Using a for loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Write a program to print a multiplication table of 5
let a = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
}
// Initialize the variables
let sum = 0;
let i = 1;

// Use a while loop to sum the numbers from 1 to 10
while (i <= 10) {
  sum += i;
  i++;
}

// Output the result
console.log("The sum of numbers from 1 to 10 is:", sum);
// Initialize the variable
let j = 10;

// Use a while loop to print numbers from 10 to 1
while (j >= 1) {
  console.log(j);
  j--;
}
// Initialize the variable
let s = 1;

// Use a do...while loop to print numbers from 1 to 5
do {
  console.log(s);
  s++;
} while (s <= 5);
// Function to calculate factorial using do...while loop
function calculateFactorial(num) {
    if (num < 0) {
      return "Factorial is not defined for negative numbers.";
    }
  
    let factorial = 1;
    let i = num;
  
    do {
      factorial *= i;
      i--;
    } while (i > 0);


    // Function to print a triangle pattern with stars
function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
      let starPattern = '';
      for (let j = 1; j <= i; j++) {
        starPattern += '*';
      }
      console.log(starPattern);
    }
  }
  
  // Test the function
  const numberOfRows = 5;
  printTriangle(numberOfRows);
  
  
    return factorial;
  }
  
  // Test the function
  const number = 5;
  const result = calculateFactorial(number);
  console.log(`The factorial of ${number} is: ${result}`);
  
// Using a for loop to print numbers from 1 to 10, skipping 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue; // Skip the number 5
    }
    console.log(i);
  }

  // Using a for loop to print numbers from 1 to 10, skipping 5
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break; // Stop the number 5
    }
    console.log(i);
  }
  