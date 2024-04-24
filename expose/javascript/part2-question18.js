function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

function printEverySecond() {
    printTime();
    timeoutId = setTimeout(printEverySecond, 1000);
}

printEverySecond();
setTimeout(function() {
    clearTimeout(timeoutId);
}, 10000);