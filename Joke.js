
/** Class representing a Joke. */

/**
 * Create a Joke.
 * @param {number} id - id of the joke
 * @param {string} joke - joke texts
 * @param {string array} categories - list of categories
 */
function Joke(id, joke, categories) {
    this.id = id;
    this.joke = joke;
    this.categories = categories;
};

/**
 * Print the Joke.
 */
Joke.prototype.print = function() {
    console.log('- ' + this.joke);
};

// Exports class Joke.
module.exports = Joke;