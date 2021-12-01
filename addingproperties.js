// adding properties and methods to an existing object
var student = {};
console.log(student);
student.marks = 70;
student.getResult = function() {
    if (student.getResult >= 35)
        return "Pass";
    else
        return "Fail"
};

console.log(student);
console.log(student.marks); //call property
console.log(student.getResult()); //call method