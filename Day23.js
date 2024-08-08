// Activity 1: Median of Two Sorted Arrays
function findMedianSortedArrays(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const len = merged.length;
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
}

console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0

// Activity 2: Merge k Sorted Lists
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode(0);
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        if (l1) current.next = l1;
        if (l2) current.next = l2;

        return dummy.next;
    };

    while (lists.length > 1) {
        const mergedList = mergeTwoLists(lists[0], lists[1]);
        lists.splice(0, 2, mergedList);
    }

    return lists[0];
}

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const merged = mergeKLists([list1, list2, list3]);

const printList = (list) => {
    let result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    return result.join(' -> ');
};

console.log(printList(merged)); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Activity 3: Trapping Rain Water
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : trappedWater += (leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ? (rightMax = height[right]) : trappedWater += (rightMax - height[right]);
            right--;
        }
    }

    return trappedWater;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9

// Activity 4: N-Queens
function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    };

    const placeQueen = (row) => {
        if (row === n) {
            results.push(board.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                placeQueen(row + 1);
                board[row][col] = '.';
            }
        }
    };

    placeQueen(0);
    return results;
}

console.log(solveNQueens(4)); // Output: [
// [".Q..","...Q","Q...","..Q."],
// ["..Q.","Q...","...Q",".Q.."]
// ]
console.log(solveNQueens(1)); // Output: ["Q"]

// Activity 5: Word Ladder
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while (queue.length > 0) {
        let [word, length] = queue.shift();

        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) { // ASCII values for 'a' to 'z'
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0
