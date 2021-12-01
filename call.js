//call
var person = { age: 20 };

let birthDay = function(years) {
    this.age += years;

};
console.log(this);
console.log(person.age); //20
birthDay.call(person, 3); //"this" keyword of birthDay function will refer to "person" Object.
console.log(person.age); //23