/*
Create a function called hasEnoughPlayers() that takes the team array as an
argument and returns true or false depending on if the array has at least seven
players.
*/

function hasEnoughPlayers(roster) {
    return roster.length >= 7
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
