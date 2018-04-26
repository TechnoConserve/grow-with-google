/*
Call the emotions() function so that it prints the output you see below, but
instead of passing the laugh() function as an argument, pass an inline function
expression instead.

Prints: "I am happy, haha!"
*/

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
    return "ha".repeat(num) + "!";
});
