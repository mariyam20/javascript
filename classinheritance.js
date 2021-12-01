// class inheritance

// parent class
class Teacher {
    teacherName;

    constructor(teacherName) {
        this.teacherName = teacherName;
    }
}

// child class
class PhysicsTeacher extends Teacher {
    mainSubject;

    constructor(mainSubject) {
        super("Allen");
        this.mainSubject = mainSubject;
    }

    getDetails() {
        return `Teacher Name: ${this.teacherName}, Main Subject: ${this.mainSubject}`;
    }
}

// object of parents class
var teacher = new Teacher("Scott");
// teacher.teacherName = "Scott";
console.log(teacher);

// Object of child class
var physicsTeacher = new PhysicsTeacher("Physical Sciences");
console.log(physicsTeacher);
console.log(physicsTeacher.getDetails());
// console.log(new PhysicsTeacher("Physical Sciences"));
// console.log(new PhysicsTeacher("Physical Sciences").__proto__.__proto__);