// employee scenario
var employee = {
    firstName: "Smith",
    lastName: "John",
    designation: "Clerk",
    salary: 3000,
    workExperienceYears: 4,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    promote: function() {
            var isEligibleForPromotion; //ocal variable
            if (this.designation = "Clerk") {
                if (this.workExperienceYears >= 3) {
                    isEligibleForPromotion = true;
                    this.designation = "Asst.Manager";
                    this.salary += this.salary * 10 / 100;
                } else {
                    isEligibleForPromotion = false;
                }
            }

            //Asst. Manaer to Manager
            else if (this.designation == "Asst.Manager") {
                if (this.workExperienceYears >= 5) {
                    isEligibleForPromotion = true;
                    this.designation = "Manager";
                    this.salary += this.salary * 20 / 100;
                } else {
                    this.isEligibleForPromotion = false;
                }
            }

            return isEligibleForPromotion //true or false
        } //end of function
};

// console.log(employee);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.designation);
console.log(employee.salary);
console.log(employee.workExperienceYears);

console.log(employee.getFullName());
if (employee.promote() == true) {
    console.log("Congrations!The Employee Promoted.");
    console.log("Updated Sakary:" + employee.salary);
    console.log("Updated Designationv:" + employee.designation);
} else {
    console.log("Employee is eligible.");
}

// console.log(employee.getFullName());