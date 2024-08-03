// Activity 1: Two Sum
// Brute Force Approach
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Optimized Approach
function twoSumOptimized(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
}

// Example usage for Two Sum
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Two Sum Brute Force Result:", twoSumBruteForce(nums1, target1)); // Output: [0, 1]
console.log("Two Sum Optimized Result:", twoSumOptimized(nums1, target1)); // Output: [0, 1]

// Activity 2: Reverse Integer
// Brute Force Approach
function reverseIntegerBruteForce(x) {
    const isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);
    if (reversed > 2 ** 31 - 1) return 0;
    return isNegative ? -reversed : reversed;
}

// Optimized Approach
function reverseIntegerOptimized(x) {
    let reversed = 0;
    let num = Math.abs(x);
    while (num !== 0) {
        const pop = num % 10;
        num = Math.floor(num / 10);
        if (reversed > Math.floor((2 ** 31 - 1) / 10) || (reversed === Math.floor((2 ** 31 - 1) / 10) && pop > 7)) return 0;
        reversed = reversed * 10 + pop;
    }
    return x < 0 ? -reversed : reversed;
}

// Example usage for Reverse Integer
const num2 = 123;
console.log("Reverse Integer Brute Force Result:", reverseIntegerBruteForce(num2)); // Output: 321
console.log("Reverse Integer Optimized Result:", reverseIntegerOptimized(num2)); // Output: 321

// Activity 3: Palindrome Number
// Brute Force Approach
function isPalindromeBruteForce(x) {
    if (x < 0) return false;
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Optimized Approach
function isPalindromeOptimized(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let reversed = 0;
    let num = x;
    while (num > reversed) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return num === reversed || num === Math.floor(reversed / 10);
}

// Example usage for Palindrome Number
const num3 = 121;
console.log("Palindrome Number Brute Force Result:", isPalindromeBruteForce(num3)); // Output: true
console.log("Palindrome Number Optimized Result:", isPalindromeOptimized(num3)); // Output: true

// Activity 4: Merge Two Sorted Lists
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Brute Force Approach
function mergeTwoListsBruteForce(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

// Optimized Approach
function mergeTwoListsOptimized(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoListsOptimized(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsOptimized(l1, l2.next);
        return l2;
    }
}

// Example usage for Merge Two Sorted Lists
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log("Merge Two Sorted Lists Brute Force Result:", mergeTwoListsBruteForce(list1, list2));
console.log("Merge Two Sorted Lists Optimized Result:", mergeTwoListsOptimized(list1, list2));

// Activity 5: Valid Parentheses
// Brute Force Approach
function isValidParenthesesBruteForce(s) {
    const stack = [];
    const map = { '(': ')', '{': '}', '[': ']' };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        } else if (s[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}

// Optimized Approach
function isValidParenthesesOptimized(s) {
    const stack = [];
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const last = stack.pop();
            if ((char === ')' && last !== '(') || (char === '}' && last !== '{') || (char === ']' && last !== '[')) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Example usage for Valid Parentheses
const s = "({[]})";
console.log("Valid Parentheses Brute Force Result:", isValidParenthesesBruteForce(s)); 
console.log("Valid Parentheses Optimized Result:", isValidParenthesesOptimized(s)); 
