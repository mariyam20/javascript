// new keyword
var Employee = function(employeeName, employeeld, salary) {

    //initialize properties & methods into that object
    this.employeeName = employeeName;
    this.employeeld = employeeld,
        this.salary = salary;

    this.getEmployeeName = function() {
        return this.employeeName;
    };
};

var employee1 = new Employee("Scott", 1, 1000);
var employee2 = new Employee("Allen", 2, 2000);

console.log(employee1);
console.log(employee2);