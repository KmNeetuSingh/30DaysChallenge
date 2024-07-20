// Day 8: ES6+ Features

// Activity 1: Template Literals
// Task 1
let name = "Anee";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2
let multiLineString = `This is a multi-line string.
It allows you to write strings
across multiple lines.`;
console.log(multiLineString);


console.log("**************************************************");


// Activity 2: Destructuring
// Task 3
let numbers = [10, 20, 30, 40];
let [first, second] = numbers;
console.log(first, second);

// Task 4
let book = { title: "1984", author: "George Orwell", year: 1949 };
let { title, author } = book;
console.log(title, author);

console.log("**************************************************");



// Activity 3: Spread and Rest Operators
// Task 5
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray);

// Task 6
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); 


console.log("**************************************************");


// Activity 4: Default Parameters
// Task 7
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5

// Activity 5: Enhanced Object Literals
// Task 8
let name2 = "Alice";
let age2 = 30;

let person = {
  name: name2,
  age: age2,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log(person);
person.greet();

// Task 9
let propName = "age";
let person2 = {
  name: "Bob",
  [propName]: 40
};

console.log(person2);

// Feature Request Scripts

// Template Literals Script
let personName = "Jane";
let personAge = 28;
console.log(`Name: ${personName}, Age: ${personAge}`);

// Destructuring Script
let arr = [5, 10, 15];
let [a, b] = arr;
console.log(a, b);

let bookInfo = { title: "To Kill a Mockingbird", author: "Harper Lee" };
let { title: bookTitle, author: bookAuthor } = bookInfo;
console.log(bookTitle, bookAuthor);

// Spread and Rest Operators Script
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log(combinedArray);

function sumNumbers(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4));

// Default Parameters Script
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("Suynn");
greet();

// Enhanced Object Literals Script
let color = "red";
let car = {
  color,
  drive() {
    console.log(`Driving a ${this.color} car.`);
  }
};
car.drive();
