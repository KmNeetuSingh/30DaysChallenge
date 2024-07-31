// Day 19: Regular Expressions

// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript").
const text1 = "JavaScript is a powerful language. Many developers use JavaScript.";
const regex1 = /JavaScript/g;
const matches1 = text1.match(regex1);
console.log("Task 1 Matches:", matches1);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const text2 = "My phone number is 123-456-7890 and my postal code is 98765.";
const regex2 = /\d/g;
const matches2 = text2.match(regex2);
console.log("Task 2 Matches:", matches2);

// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text3 = "Hello World! This is a JavaScript challenge.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = text3.match(regex3);
console.log("Task 3 Matches:", matches3);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "The event is scheduled for 2023-07-31 and the ticket price is $50.";
const regex4 = /\d+/g;
const matches4 = text4.match(regex4);
console.log("Task 4 Matches:", matches4);

// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number.
const text5 = "Contact us at (123) 456-7890 or (987) 654-3210.";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/g;
let match5;
while ((match5 = regex5.exec(text5)) !== null) {
    console.log("Task 5 Matches:", match5);
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const text6 = "Please send an email to john.doe@example.com or jane_doe123@domain.net.";
const regex6 = /(\w+[\w\.-]*)@([\w\.-]+\.\w+)/g;
let match6;
while ((match6 = regex6.exec(text6)) !== null) {
    console.log("Task 6 Matches:", match6);
}

// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const text7 = "Hello, how are you? Hello again!";
const regex7 = /^\w+/g;
const matches7 = text7.match(regex7);
console.log("Task 7 Matches:", matches7);

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const text8 = "This is the end of the line. Line.";
const regex8 = /\w+$/g;
const matches8 = text8.match(regex8);
console.log("Task 8 Matches:", matches8);
