/* Jokes
Author: Omer Can Palaz <omer.palaz@gmail.com>
*/

"use strict";

var JokeService = require('./JokeService');

const numberOfJokes = 5; // Number of jokes for request
const jokeCategories = ["nerdy", "explicit"]; // Category array for request

console.log("Welcome to the Joke Service!\n");

// Creates an instance of JokeService.
var jokeService = new JokeService();

// Promise for showJokes.
var jokeServicePromise = jokeService.showJokes(numberOfJokes, jokeCategories);

jokeServicePromise.then(function(res) {
    console.log("\nSee you next time on the Joke Service!");
}).catch(function(err) {
    console.log("\nSorry for not showing jokes on the Joke Service :(");
});
