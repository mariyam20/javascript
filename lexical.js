// lexical environment
var x = 10;
console.log(x);

function fun1() {
    var y = 20;
    console.log(x, y);

    function fun2() {
        var z = 30;
        var y = 100;
        console.log(x, y, z);
    }
    fun2();
}
fun1();