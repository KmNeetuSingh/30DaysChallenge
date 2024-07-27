// Activity 1: Class Definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
    }
}

// Create an instance of the class
const person1 = new Person('Nee', 30);

// Log the greeting message
console.log(person1.getGreeting());

// Update the age and log the updated greeting message
person1.updateAge(21);
console.log(person1.getGreeting());


// Activity 2: Class Inheritance
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentInfo() {
        return `Student ID: ${this.studentId}`;
    }

    // Override the getGreeting method
    getGreeting() {
        return `${super.getGreeting()} My student ID is ${this.studentId}.`;
    }
}

// Create an instance of the subclass
const student1 = new Student('Jane Doe', 20, 'S12345');

// Log the greeting message from the subclass
console.log(student1.getGreeting());
console.log(student1.getStudentInfo());


// Activity 3: Static Methods and Properties
class School {
    static totalStudents = 0;

    constructor(name) {
        this.name = name;
        School.totalStudents++;
    }

    static getTotalStudents() {
        return `Total students: ${School.totalStudents}`;
    }
}

// Create instances of the class
const school1 = new School('John High School');
const school2 = new School('Jane High School');

// Call the static method without creating an instance
console.log(School.getTotalStudents());


// Activity 4: Getters and Setters
class Car {
    constructor(make, model) {
        this._make = make;
        this._model = model;
    }

    get make() {
        return this._make;
    }

    set make(newMake) {
        this._make = newMake;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}

// Create an instance of the class
const car1 = new Car('Toyota', 'Camry');

// Log the properties using getters
console.log(car1.make);
console.log(car1.model);

// Update the properties using setters and log them
car1.make = 'Honda';
car1.model = 'Accord';
console.log(car1.make);
console.log(car1.model);
