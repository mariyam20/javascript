// lnheritance with Constructor Functions - using "call" method
// Parent constructor function: Teacher
var Teacher = function(tracherName) {
    this.teacherName = teacherName;
};

// Child Parent constructor function: Physics Teacher
var PhysicsTeacher = function(mainSubject) {
    this.mainSubject = mainSubject
}

var physicsTeacher = new PhysicsTeacher("Scott", "Physics");
//physicsTeacher.__proto__ = new Teacher("Scott"); //__proto__property of child Object stores reference of parent Object.
console.log(physicsTeacher);
console.log(physicsTeacher.teacherName); //parent constructor function's prperty
console.log(physicsTeacher.mainSubject); //child constructor's property