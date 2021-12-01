//object literals

// var x = { a: 10, b: function() {} };
var person = {
    personName: "Scott", //property
    birthDay: //method
        function() {
        return "Happy Birthday";
    }
};
console.log(person);
console.log(person.personName); //call the property
console.log(person.birthDay()); // call the method