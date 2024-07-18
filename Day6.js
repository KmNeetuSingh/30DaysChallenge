// Activity 1: Array Creation and Access

// Task 1
let numbers = [1, 2, 3, 4, 5];
console.log('Task 1:', numbers);

// Task 2
let firstElement = numbers[0];
let lastElement = numbers[numbers.length - 1];
console.log('Task 2: First Element:', firstElement);
console.log('Task 2: Last Element:', lastElement);

// Activity 2: Array Methods (Basic)

// Task 3
numbers.push(6);
console.log('\nTask 3: After Push:', numbers);

// Task 4
numbers.pop();
console.log('\nTask 4: After Pop:', numbers);

// Task 5
numbers.shift();
console.log('\nTask 5: After Shift:', numbers);

// Task 6
numbers.unshift(0);
console.log('\nTask 6: After Unshift:', numbers);

// Activity 3: Array Methods (Intermediate)

// Task 7
let doubledArray = numbers.map(num => num * 2);
console.log('\nTask 7: Doubled Array:', doubledArray);

// Task 8
let evenArray = numbers.filter(num => num % 2 === 0);
console.log('\nTask 8: Even Numbers Array:', evenArray);

// Task 9
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('\nTask 9: Sum of Array:', sum);

// Activity 4: Array Iteration

// Task 10
console.log('\nTask 10: For Loop Iteration:');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Task 11
console.log('\nTask 11: ForEach Iteration:');
numbers.forEach(num => console.log(num));

// Activity 5: Multi-dimensional Arrays

// Task 12
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('\nTask 12: Matrix:', matrix);

// Task 13
let specificElement = matrix[1][2]; // Accessing element at 2nd row, 3rd column (5)
console.log('\nTask 13: Specific Element (2nd row, 3rd column):', specificElement);
