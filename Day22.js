// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to add two numbers represented by linked lists
function addTwoNumbers(l1, l2) {
    // Create a dummy head to simplify the addition process
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0; // Initialize carry to 0
    
    // Loop until both lists are fully traversed
    while (p !== null || q !== null) {
        // Get the current values, or 0 if the list is already fully traversed
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        
        // Calculate the sum of the current digits plus the carry
        let sum = carry + x + y;
        
        // Update carry for the next addition
        carry = Math.floor(sum / 10);
        
        // Create a new node with the digit value (sum % 10) and attach it to the result list
        current.next = new ListNode(sum % 10);
        
        // Move to the next node in the result list
        current = current.next;
        
        // Move to the next nodes in the input lists if they are not null
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    
    // If there's a remaining carry, add a new node with the carry value
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    // Return the result list, skipping the dummy head
    return dummyHead.next;
}

// Helper function to create a linked list from an array
function arrayToList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to print a linked list
function printList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result.join(" -> "));
}

// Example usage:
let l1 = arrayToList([2, 4, 3]); // represents number 342
let l2 = arrayToList([5, 6, 4]); // represents number 465
let result = addTwoNumbers(l1, l2);
printList(result); // expected output: 7 -> 0 -> 8 (represents number 807)
