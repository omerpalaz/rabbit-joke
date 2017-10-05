
/** Class prints array of Jokes. */

/**
 * Create a JokePrinter.
 * @param {Joke array} listOfJokes - array of Jokes
 */
function JokePrinter(listOfJokes) {
    this.listOfJokes = listOfJokes;
};

/**
 * Prints each Joke in the array of Jokes.
 */
JokePrinter.prototype.printJokes = function() {

    for (var i = 0; i < this.listOfJokes.length; i++) {
        this.listOfJokes[i].print();
    }
};

// Exports class JokePrinter
module.exports = JokePrinter;