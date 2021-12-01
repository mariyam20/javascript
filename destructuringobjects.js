//destructuring objects
var person = { firstName: "Smith", lastName: "John", age: 25, email: "test@example.com", city: "New York", country: "USA" };
//var fn = person.firstName;
//var in = person.lastName;
//var g = person.age;

var { firstName: fn, lastName: ln, age, email = "someon@example.com", ...other } = person;
console.log(fn); //Smith
console.log(ln); //John
console.log(age); //25
console.log(email); //someone @example.com
console.log(other); //{city:"New york", country:"USA"}