// Day 16: Recursion

// Activity 1: Basic Recursion

// Function to calculate the factorial of a number
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  console.log('Factorial of 5:', factorial(5)); // Log the result
  
  // Function to calculate the nth Fibonacci number
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log('Fibonacci number at position 5:', fibonacci(5)); // Log the result for a few test cases
  
  // Activity 2: Recursion with Arrays
  
  // Function to find the sum of all elements in an array
  function arraySum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + arraySum(arr.slice(1));
  }
  
  console.log('Sum of array [1, 2, 3, 4, 5]:', arraySum([1, 2, 3, 4, 5])); // Log the result for a few test cases
  
  // Function to find the maximum element in an array
  function arrayMax(arr) {
    if (arr.length === 1) return arr[0];
    const maxOfRest = arrayMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
  }
  
  console.log('Maximum element in array [1, 5, 3, 9, 2]:', arrayMax([1, 5, 3, 9, 2])); // Log the result for a few test cases
  
  // Activity 3: String Manipulation with Recursion
  
  // Function to reverse a string
  function reverseString(str) {
    if (str === '') return '';
    return reverseString(str.slice(1)) + str[0];
  }
  
  console.log('Reverse of "hello":', reverseString('hello')); // Log the result for a few test cases
  
  // Function to check if a string is a palindrome
  function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  }
  
  console.log('Is "racecar" a palindrome?', isPalindrome('racecar')); // Log the result for a few test cases
  
  // Activity 4: Recursive Search
  
  // Function to count the occurrences of a target element in an array
  function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
  }
  
  console.log('Occurrences of 2 in array [1, 2, 2, 3, 2]:', countOccurrences([1, 2, 2, 3, 2], 2)); // Log the result for a few test cases
  
  // Activity 5: Traversal (Optional)
  
  // Define a binary tree node
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to perform in-order traversal of a binary tree
  function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
  
  // Example binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Perform in-order traversal and log the result
  console.log('In-order traversal of binary tree:');
  inOrderTraversal(root);
  
  // Function to find the depth of a binary tree
  function findDepth(node) {
    if (node === null) return 0;
    const leftDepth = findDepth(node.left);
    const rightDepth = findDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  console.log('Depth of binary tree:', findDepth(root)); // Log the result for a few test cases
  