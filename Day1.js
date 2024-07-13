/* Day 1 of the challenge: Exploring "Variable & Datatypes"
-------Activity 1: Variable Declarations---------------*/

var number = 100; // Task 1: Declare a variable using var
console.log("The number is:", number); 

let string = "Sristi"; // Task 2: Declare a variable using let
console.log("The name is:", string);

/* ------------------Activity 2: Constant Declarations--------------*/

const bool = true; // Task 3: Declare a constant
console.log("Is the condition true?", bool); 

/* -----------Activity 3: Data Types----------------*/

console.log("Type of Number:", typeof number); 
console.log("Type of String:", typeof string); 
console.log("Type of Boolean:", typeof bool); 

let obj = {
  name: "Sristi",
  age: 30,
};
console.log("Type of Object:", typeof obj); 

var arr = [10, 20, 30, 40, 50];
console.log("Type of Array:", typeof arr); 

/* -----------Activity 4: Reassigning Variables----------------*/

// Reusing the variable declared with let in Task 2
string = "updated value"; // Task 5: Reassign the string variable
console.log("Updated name is:", string); 

/* -----------Activity 5: Understanding const----------------*/

// Note: Reassigning a constant will cause an error
// Uncommenting the next line will lead to an error because bool is a constant
// bool = false;  // Task 6: Attempting to reassign a constant
// console.log(bool);
