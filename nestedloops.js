/*
12345
12345
12345
12345
12345
12345*/
var str = "";
for (var i = 0; i < 7; i++) //outer loop
{
    for (j = 1; j <= 5; j++) {
        str = `${str}${j}`;
    }
    str = `${str}\n`
}
console.log(str);