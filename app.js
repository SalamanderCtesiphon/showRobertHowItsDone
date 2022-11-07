/* const myFirstObject = {
    firstName: 'Richard',
    favoriteAuthor: 'J.K. Conrad',
};

console.log(myFirstObject.firstName);
console.log(myFirstObject.favoriteAuthor); */

// Reference Data Types and Primitive Data Types
/* 
// Primitive Data Types String is stored as a value
let person = "Bob";
// anotherPerson is a reference to the same value as person
let anotherPerson = person;
// value of person is changed
person = "Henry";

console.log(person);

console.log(anotherPerson);
 */
function PrintStuff (myDocuments) {
    this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
    console.log(this.documents);
} 

let newObj = new PrintStuff ("I'm a new Object and I can print.");

newObj.print ();