//--------Here is Day--11 task solution -------------------------
//----------------Activity-1(Understanding promises)----------------------

// Task-1: Resolving a promise with a delay
const delayedMessage = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, this message is displayed after a 2-second delay!");
    }, 2000);
});

delayedMessage.then(message => {
    console.log(message);
});

// Task-2: Rejecting a promise with a delay
const delayedError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Oops, something went wrong after a 2-second delay!"));
    }, 2000);
});

delayedError.catch(error => {
    console.error(error.message);
});

//--------------------Activity-2(Chaining promises)-----------------------

function fetchData(delay, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// Task-3: Chaining promises
fetchData(1000, "Fetching data from server 1...")
    .then((message) => {
        console.log(message);
        return fetchData(2000, "Fetching data from server 2...");
    })
    .then((message) => {
        console.log(message);
        return fetchData(1500, "Fetching data from server 3...");
    })
    .then((message) => {
        console.log(message);
        return fetchData(1000, "All data fetched!");
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });

//--------------------Activity-3(Using async/await)-----------------------

async function logResolvedValue() {
    try {
        const message = await fetchData(2000, "Data fetched successfully!");
        console.log(message);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

logResolvedValue();

function fetchDataWithError(delay, errorMessage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(errorMessage));
        }, delay);
    });
}

async function handleRejectedPromise() {
    try {
        const message = await fetchDataWithError(2000, "Failed to fetch data!");
        console.log(message);  
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

handleRejectedPromise();

//--------------------Activity-4(fetching data from an API)-----------------------

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Task-6: Fetching data using .then() and .catch()
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

async function fetchDataAsync() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchDataAsync();

//--------------------Activity-5(Concurrent promises)-----------------------

function fetchDataConcurrent(delay, id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${id}`);
        }, delay);
    });
}

// Task-8: Using Promise.all()
const server1 = fetchDataConcurrent(1000, "server 1");
const server2 = fetchDataConcurrent(2000, "server 2");
const server3 = fetchDataConcurrent(1500, "server 3");

Promise.all([server1, server2, server3])
    .then((values) => {
        console.log("All promises resolved:");
        values.forEach((value, index) => {
            console.log(`Server ${index + 1}: ${value}`);
        });
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });

// Task-9: Using Promise.race()
const promiseA = fetchDataConcurrent(4000, "Service A");
const promiseB = fetchDataConcurrent(2000, "Service B");
const promiseC = fetchDataConcurrent(3000, "Service C");

Promise.race([promiseA, promiseB, promiseC])
    .then((value) => {
        console.log("First promise resolved:", value);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
