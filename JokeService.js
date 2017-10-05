
var apiFactory = require('./ApiFactory.js');
var JokePrinter = require('./JokePrinter.js');
var Joke = require('./Joke.js');

const MAX_NUMBER_OF_JOKES = 100;
const DEFAULT_NUMBER_OF_JOKES = 10;
const DEFAULT_CATEGORY_LIST = ["nerdy"];

/** Class gets jokes from the API and prints them to the console. */
var JokeService = function() {};

/**
 * Shows random jokes from the API.
 * @param {number} numberOfJokes - number of Jokes
 * @param {string array} categoryList - list of joke categories.
 * @return {Promise} Promise for showJokes.
 */
JokeService.prototype.showJokes = function(numberOfJokes, categoryList) {
    
    return new Promise(function(resolve, reject) {

        var getJokesPromise = getJokes(numberOfJokes, categoryList);
        getJokesPromise.then(function(res) {
            
            // Array of Joke objects.
            var listOfJokes = loadJokeObjectsInSet(res);
            
            // Creates an instance of JokePrinter to print the Jokes.
            var jokePrinter = new JokePrinter(listOfJokes);
            jokePrinter.printJokes();

            resolve("");
        }).catch(function(err) {
            reject(err);
        });
    });
};

/**
 * Loads list of jokes in json into an array which holds Joke objects.
 * @param {object} json_jokes - list of json jokes
 * @return {Joke array} Array of Joke objects.
 */
var loadJokeObjectsInSet = function(json_jokes) {

    var returnJokes = [];

    for (var i = 0; i < json_jokes.length; i++) {

        var id = 0;
        var joke = "";
        var categories = [];

        if(json_jokes[i].hasOwnProperty('id') && !isNaN(json_jokes[i].id)) {
            id = json_jokes[i].id;
        }

        if(json_jokes[i].hasOwnProperty('joke') &&  typeof json_jokes[i].joke == 'string') {
            joke = json_jokes[i].joke;
        }

        if(json_jokes[i].hasOwnProperty('categories') && json_jokes[i].categories instanceof Array) {
            categories = json_jokes[i].categories;
        }

        returnJokes.push(new Joke(id, joke, categories));
    }

    return returnJokes;
};

/**
 * Gets JSON object which holds repsonse result and data.
 * @param {number} numberOfJokes - number of Jokes
 * @param {string array} categoryList - list of joke categories.
 * @return {Promise} Promise for getJokes.
 */
var getJokes = function(numberOfJokes, categoryList) {
    
    return new Promise(function(resolve, reject) {

        var paramCategoryList = categoryList;
        var paramNumberOfJokes = numberOfJokes;
    
        if(paramCategoryList.length == 0) {
            paramCategoryList = DEFAULT_CATEGORY_LIST;
        }
    
        if(numberOfJokes < 0) {
            paramNumberOfJokes = DEFAULT_NUMBER_OF_JOKES;
        }
    
        else if(numberOfJokes > MAX_NUMBER_OF_JOKES) {
            paramNumberOfJokes = 100;
        }

        var reqPromise = apiFactory.fetchJokes(paramNumberOfJokes, paramCategoryList);
        reqPromise.then(function(res) {
            resolve(res);
        }).catch(function(err) {
            reject(err);
        });

    });
};

// Exports JokeService class.
module.exports = JokeService;