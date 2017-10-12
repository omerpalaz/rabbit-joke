/* Jokes
   Author: Omer Can Palaz <omer.palaz@gmail.com>
*/

var JokeService = require('./JokeService');

const numberOfJokes = 5; // Number of jokes for request
const jokeCategories = ["nerdy", "explicit"]; // Category array for request

console.log("Welcome to the Joke Service!\n");

// Calls JokeService.showJokes.
new JokeService().showJokes(numberOfJokes, jokeCategories).then(res => {
    //console.log(res);
    console.log("\nSee you next time on the Joke Service!");
})
.catch(function(err) {
    console.log(err);
    console.log("\nSorry for not showing jokes on the Joke Service :(");
});
