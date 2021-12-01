//functions
let getSimplelnterest = function(principle, rateOflnterest,
    noOfYears) {
    let si = (principle * rateOflnterest * noOfYears) / 100;
    return (si);
};

let si1 = getSimplelnterest(1000, 6.7, 3);
let si2 = getSimplelnterest(7000, 4.5, 10);
console.log(si1);
console.log(si2);