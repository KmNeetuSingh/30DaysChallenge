// Sorting Algorithms
/*
Sorting is the process of arranging items in a specific order.

1. Bubble Sort: 
   - Repeatedly compares and swaps adjacent elements if they are in the wrong order, until the list is sorted.

2. Selection Sort: 
   - Continuously selects the smallest (or largest) element from the unsorted portion and swaps it with the leftmost unsorted element, expanding the sorted portion one element at a time.

3.Quick Sort:
   - Selects a pivot element, partitions the array into elements less than and greater than the pivot, and recursively sorts the sub-arrays.*/
// Bubble Sort
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Selection Sort
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(bubbleSort([5, 3, 8, 4, 2]));
console.log(selectionSort([5, 3, 8, 4, 2]));
console.log(quickSort([5, 3, 8, 4, 2]));

// Searching Algorithms

// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(linearSearch([5, 3, 8, 4, 2], 8));
console.log(binarySearch([2, 3, 4, 5, 8], 8));

// String Algorithms

// Character Count
function characterCount(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

// Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeating(str) {
    let start = 0;
    let maxLength = 0;
    let seenChars = new Map();
    for (let end = 0; end < str.length; end++) {
        if (seenChars.has(str[end])) {
            start = Math.max(start, seenChars.get(str[end]) + 1);
        }
        seenChars.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

console.log(characterCount("character"));
console.log(longestSubstringWithoutRepeating("character"));

// Dynamic Programming (Optional)

// Fibonacci Sequence
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

// Knapsack Problem
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

console.log(fibonacci(10));
console.log(knapsack([60, 100, 120], [10, 20, 30], 50));
