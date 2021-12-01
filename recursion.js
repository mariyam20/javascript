// recursion
let factorial = function(n) {
    if (n == 1) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

console.log(factorial(5));


/* 
101,ab,10
10,john,null 

function getEmployeeNameByEmpID(empid)
{
 getEmployeeNameByEmpID(10)
}

getEmployeeNameByEmpID(101);
*/