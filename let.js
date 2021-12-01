//let
var x = 10; //global variable
let y = 10; //global variable

if (1 == 1) {
    var z = 10; //block level variables /*global variable*
}
// console.log(z); //Output:10

console.log("for loop:");
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
// console.log(i);//Error