 //constructor functions
 var createEmployee = function(employeeName, employeeld, salary) {
     var employee = {}; //create new object

     //initialize properties & methods into that object
     employee.employeeName = employeeName;
     employee.employeeld = employeeld,
         employee.salary = salary;

     employee.getEmployeeName = function() {
         return this.employeeName;
     };

     //  return the new Object
     return employee;
 };

 var employee1 = createEmployee("Scott", 1, 100);
 var employee2 = createEmployee("Allen", 2, 2000);

 console.log(employee1);
 console.log(employee2);