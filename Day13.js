
// Add Module
function add(a, b) {
    return a + b;
}

// Person Module
const person = {
    name: ' Aavika Singh',
    age: 20,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Math Operations Module with Named and Default Exports
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

// Using Modules
// Using Add Module
const addResult = add(3, 4);
console.log(`The result of adding 3 and 4 is: ${addResult}`);

// Using Person Module
person.greet();

// Using Math Operations Module
console.log(`Add: ${add(5, 3)}`);
console.log(`Subtract: ${subtract(5, 3)}`);
console.log(`Multiply: ${multiply(5, 3)}`);
console.log(`Divide: ${divide(6, 3)}`);

// Importing Entire Module (for demonstration, though typically this would be in another file)
const mathOps = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    default: divide
};

console.log(`Add: ${mathOps.add(5, 3)}`);
console.log(`Subtract: ${mathOps.subtract(5, 3)}`);
console.log(`Multiply: ${mathOps.multiply(5, 3)}`);
console.log(`Divide: ${mathOps.default(6, 3)}`);
