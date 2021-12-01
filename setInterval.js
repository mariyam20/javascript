//sectInterval
function callBack() {
    console.log("Hello");
}

let myInterval = setInterval(callBack, 2000); //calls the callBack after wvery 2 sec.

function stopInterval() {
    clearInterval(myInterval); //stop setInterval
}

setTimeout(stopInterval, 20 * 1000); //call stopInterval function after 20 secounds.