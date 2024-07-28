///Day-15....Closures........
//A closure is a function that retains access to its outer lexical scope, even when the function is executed outside that scope.
// Task 1: Function that returns another function accessing outer variable
function outerFunction(outerVariable) {
    return function innerFunction() {
      console.log(outerVariable);
    };
  }
  
  const innerFunc = outerFunction("Hello, World!");
  innerFunc(); // Logs: "Hello, World!"
  
  // Task 2: Closure for a private counter
  function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); // Logs: 1
  counter.increment();
  console.log(counter.getCount()); // Logs: 2
  
  // Task 3: Function that generates unique IDs
  function createIdGenerator() {
    let lastId = 0;
  
    return function() {
      lastId++;
      return lastId;
    };
  }
  
  const generateId = createIdGenerator();
  console.log(generateId()); // Logs: 1
  console.log(generateId()); // Logs: 2
  
  // Task 4: Closure that captures a user's name and returns a greeting function
  function createGreeter(name) {
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greeter = createGreeter("Neetu");
  greeter(); // Logs: "Hello, Neetu!"
  
  // Task 5: Closures in loops
  function createFunctionArray() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
      functions.push((function(index) {
        return function() {
          console.log(index);
        };
      })(i));
    }
    return functions;
  }
  
  const functionArray = createFunctionArray();
  functionArray[0](); // Logs: 0
  functionArray[1](); // Logs: 1
  functionArray[2](); // Logs: 2
  
  // Task 6: Module pattern
  const itemManager = (function() {
    const items = [];
  
    return {
      addItem: function(item) {
        items.push(item);
      },
      removeItem: function(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      listItems: function() {
        return items;
      }
    };
  })();
  
  itemManager.addItem('item1');
  itemManager.addItem('item2');
  console.log(itemManager.listItems()); // Logs: ['item1', 'item2']
  itemManager.removeItem('item1');
  console.log(itemManager.listItems()); // Logs: ['item2']
  
  // Task 7: Memoization
  function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  const factorial = memoize(function(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  });
  
  console.log(factorial(5)); // Logs: 120
  console.log(factorial(5)); // Logs: 120 (cached result)
  