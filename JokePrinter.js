
var Joke = require('./Joke.js');

/** Class prints array of Jokes. */
class JokePrinter {

    /**
     * Create a JokePrinter.
     * @param {Joke array} listOfJokes - array of Jokes
     */
    constructor (listOfJokes) {
        this.listOfJokes = listOfJokes;
    }

    /**
     * Prints each Joke in the array of Jokes.
     */
    printJokes () {
        if(this.listOfJokes !== undefined && this.listOfJokes instanceof Array) {

            if(this.listOfJokes.length < 0) {
                throw new Error("List length is not correct!!!");
            }
    
            for (let i = 0; i < this.listOfJokes.length; i++) {
                if(this.listOfJokes[i] instanceof Joke) {
                    this.listOfJokes[i].print();
                }

                else {
                    throw new Error("Element " + i + " in listOfJokes is not instance of Joke!!!");
                }
            }
        }

        else {
            throw new Error("listOfJokes in JokePrinter is undefined or not an array!!!");
        }
    }
}

// Exports class JokePrinter
module.exports = JokePrinter;