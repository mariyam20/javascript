// abstract constructor functions

//parent constructor function
function Person() {
    throw new Error("The Person is an abstrast constructor function and can't be instantiated.");
}

Person.prototype.personName = "Smith";
Person.prototype.age = 30;
Person.prototype.getDetails = function() {
    return `Person Name: ${this.personName}, Age: ${this.age}`;
};

// child constructor function
function Teacher() {}

Teacher.prototype = Object.create(Person.prototype); //ineheritance
Teacher.prototype.mainSubject = "Medical Science";
Teacher.prototype.getDetails = function() {
    return `${this.__proto__.getDetails()}Main subject: ${this.mainSubject}`;
}; //optionally invoke the parent method

// new Object of parent constructor function
var teacher1 = new Teacher();
console.log(teacher1.getDetails()); //invokes Teacher.getDetails()method (child's method)

// new Object of child constructor function
//var teacher1 = new Teacher();
//invokes Teacher.getDetails() method (child's method)