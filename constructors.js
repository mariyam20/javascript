// constructors
class Person {
    personName;
    age;
    email;

    // constructor:executes when you invoke the class (when you create a new object basect on the class)
    constructor(pName, ag, em) {
        console.log("constructor executes")
        this.personName = pName;
        this.age = ag;
        this.email = em;
    }

}
var person1 = new Person("Scott", 20, "scott@test.com");
console.log(person1.personName, person1.age, person1.email);

var person2 = new Person("allen", 25, "allen@gmail.com")
console.log(person2.personName, person2.age, person2.email);