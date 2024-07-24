// Day 12: Error Handling
// Activity 1: Basic Error Handling with Try-Catch
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

console.log(divide(10, 2)); // Should log 5
console.log(divide(10, 0)); // Should log 'Error: Cannot divide by zero'

// Activity 2: Finally Block
function executeWithFinally() {
    try {
        console.log('In try block');
        throw new Error('An error occurred');
    } catch (error) {
        console.log(`Caught error: ${error.message}`);
    } finally {
        console.log('In finally block');
    }
}

executeWithFinally();

// Activity 3: Custom Error Objects
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function checkString(input) {
    try {
        if (!input || input.trim() === '') {
            throw new CustomError('Input cannot be empty');
        }
        console.log('Input is valid');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

checkString(''); // Should log 'Error: Input cannot be empty'
checkString('Hello'); // Should log 'Input is valid'

// Activity 4: Error Handling in Promises
function createRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve('Success!');
        } else {
            reject(new Error('Failure!'));
        }
    });
}

createRandomPromise()
    .then(result => console.log(result))
    .catch(error => console.log(`Error: ${error.message}`));

// Task 7: Use try-catch within an async function
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

fetchData();

// Activity 5: Graceful Error Handling in Fetch
async function fetchInvalidData() {
    try {
        const response = await fetch('https://invalid-url.com');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

fetchInvalidData();
