// lnheritance with Constructor Functions - using__proto__
// Teacher,PhysicsTeacher
var Teacher = function(teacherName) {
    this.teacherName = teacherName;
};

var PhysicsTeacher = function(teacherName, mainSubject) {
    Teacher.call(this, teacherName); //inoke the parent constructor function using "call"; supply current Object to "this" keyword of parent constructor function.
    this.mainSubject = mainSubject;
}

var PhysicsTeacher = new PhysicsTeacher("Amit", "Physics");
console.log(PhysicsTeacher);
console.log(PhysicsTeacher.teacherName); //parent constructor function's property
console.log(PhysicsTeacher.mainSubject); //child constructor's property