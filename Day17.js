class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new LinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    reverseString(str) {
        for (let char of str) {
            this.push(char);
        }
        let reversedStr = '';
        while (this.items.length > 0) {
            reversedStr += this.pop();
        }
        return reversedStr;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) return "No elements in Queue";
        return this.items[0];
    }

    simulatePrinter(printJobs) {
        for (let job of printJobs) {
            this.enqueue(job);
        }
        while (this.items.length > 0) {
            console.log(`Processing job: ${this.dequeue()}`);
        }
    }
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex, edge) {
        this.adjacencyList.get(vertex).push(edge);
    }

    bfs(startingNode) {
        let visited = {};
        let queue = [];

        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode);

            let neighbors = this.adjacencyList.get(currentNode);
            for (let neighbor of neighbors) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example Usage
// Linked List
let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.display(); 
linkedList.remove(2);
linkedList.display(); 

// Stack
let stack = new Stack();
console.log(stack.reverseString("hello")); 

// Queue
let queue = new Queue();
queue.simulatePrinter(['Job1', 'Job2', 'Job3']); 

// Binary Tree
let binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.inOrderTraversal(binaryTree.root); 

// Graph
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.bfs('A'); // Output: A B C
