/*
Write an anonymous function expression that stores a function in a variable called
"laugh" and outputs the number of "ha"s that you pass in as an argument.
*/

var laugh = function (numLaughs) {
    return "ha".repeat(numLaughs) + "!";
};

console.log(laugh(10));
