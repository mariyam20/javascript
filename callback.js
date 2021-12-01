//callback functions
let Callback1 = function(name, age) {
    console.log(`Callback 1: Name is ${name},age is ${age}`);
}

let Callback2 = function(name, age) {
    console.log(`Callback2: Age is ${age}Name is ${name}`);
}

//Higher order function
function DoWork(name, age, myFunctionRef) {
    name = "Mr" + name;
    age++;
    myFunctionRef(name, age); //Calls Callback2
}

// DoWork("Scott", 20, Callback1);//Pass reference of Callback1 to myFunctionRef
DoWork("Scott", 20, Callback2); //Pass reference of Callback2 to myFunctionRef