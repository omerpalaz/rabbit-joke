
/** Class representing a Joke. */
class Joke {

    /**
     * Create a Joke.
     * @param {number} id - id of the joke
     * @param {string} joke - joke texts
     * @param {string array} categories - list of categories
     */
    constructor (id, joke, categories) {
        this.id = id;
        this.joke = joke;
        this.categories = categories;
    }

    /**
     * Print the Joke.
     */
    print () {
        if(this.joke !== undefined) {
            console.log('- ' + this.joke);
        }
    }
}

// Exports class Joke.
module.exports = Joke;