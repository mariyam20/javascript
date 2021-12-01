//destructuring function parameters
var fun1 = function({ studentName: sn, email: em, dateOfBirth, ...others }) {
    console.log("fun1", sn, em);
    console.log(others, others.phone, others.city);
    console.log(dateOfBirth);
};

var student = { studentName: "Scott", email: "scott@gmail.com", phone: "123456", city: "London" };

fun1(student);