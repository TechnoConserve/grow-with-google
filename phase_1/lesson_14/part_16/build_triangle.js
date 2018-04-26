/*
For this quiz, you're going to create a function called buildTriangle() that will
accept an input (the triangle at its widest width) and will return the string
representation of a triangle. See the example output below.
*/

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(width) {
    var triangle = "";
    for (var i = 1; i <= width; i++) {
        triangle += makeLine(i)
    }
    return triangle;
}

console.log(buildTriangle(10));
