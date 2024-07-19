//Day-7 Today we solve the problem that is oriented on object.....
//A javascript object is an entity having state and behaviouror you can easily say that it is an collection of key value pairs.It is use dto store data structured and functionality.
//Advantages of Object...
//Data structuring
//Encapsulation.
//Protoype Inheritance.
//Dynamic Properties.
//State Management
console.log("**************************Activity1***************************");
//Create an object represting an book with properties like title ,author,year...
let Book = {
    title:"Ramayana",
    author:"TulsiDas",
    year:1574
};
console.log (Book);
console.log(Book.title);//We can access it by two method first one is by using the dot method 
// the second one is [" "] method...
console.log(Book["author"]);
/*When to Use Each:
Dot Notation: Use it when the property name is a valid identifier and is known ahead of time.
Bracket Notation: Use it when the property name is dynamic, contains special characters, or is not a valid identifier.
*/
console.log("**************************Activity2***************************");
let book = {
    title: "Ramayana",
    genre: "Epic Poetry",
    pages: 240,
    getDescription: function() {
        return `${this.title} is a ${this.genre} written by ${this.author} in the year ${this.year}. It has ${this.pages} pages.`;
    }
};


console.log(book.getDescription()); 
//Adding an properties in an object.......
//By using dot and bracket methods....
console.log(book.year = 1574);
console.log(book["author"]="TulsiDas");
console.log(book);
console.log ("********************************Activity3**********************************");
let book1 = {
    title: "Ramayana",
    details: {
        author: {
            name: "Tulsidas",
            birthYear: 1532,
            nationality: "Indian"
        },
        publisher: {
            name: "Ancient Publishers",
            location: "India"
        },
        year: 1574,
        genre: "Epic Poetry",
        pages: 240
    },
    getDescription: function() {
        return `${this.title} is a ${this.details.genre} written by ${this.details.author.name} in the year ${this.details.year}. It has ${this.details.pages} pages.`;
    },
    getAuthorInfo: function() {
        return `${this.details.author.name} was born in ${this.details.author.birthYear} and is of ${this.details.author.nationality} nationality.`;
    },
    getPublisherInfo: function() {
        return `Published by ${this.details.publisher.name}, located in ${this.details.publisher.location}.`;
    }
};
console.log(book1.details.author.name); 
console.log(book1.details.publisher.location); 
console.log(book1.getDescription());
console.log(book1.getAuthorInfo());
console.log(book1.getPublisherInfo());

console.log("************************************Activity5*******************")
for (let key in book) {
    console.log(key + ": " + book[key]);
}
console.log("************************************Activity5-II*******************")
// Iterate through the object using Object.keys()
Object.keys(book).forEach(key => {
    console.log(key + ": " + book[key]);
});

// Iterate through the object using Object.values()
Object.values(book).forEach(value => {
    console.log(value);
});
