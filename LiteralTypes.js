"use strict";
function getAction(light) {
    if (light === "red")
        return "Stop";
    if (light === "yellow")
        return "Slow down";
    return "Go";
}
console.log(getAction("red"));
console.log(getAction("yellow"));
console.log(getAction("green"));
