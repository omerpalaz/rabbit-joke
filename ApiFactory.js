
var nodeFetch = require('node-fetch');

/** Class has functions to fetch data from the API. 
 *  @Singleton class
*/

// Base url for the API.
const BASE_URL = "http://api.icndb.com";

const SUCCESSFUL_API_RESPONSE = "success";

/**
 * Creates a ApiFactory.
 */
var ApiFactory = function() {};

/**
 * Fetches jokes from the API.
 * @param {number} numberOfJokes - number of Jokes
 * @param {string array} categoryList - list of joke categories.
 * @return {Promise} Promise for fetchJokes.
 */
ApiFactory.prototype.fetchJokes = function(numberOfJokes, categoryList) {

    return new Promise(function(resolve, reject) {
        
        const url = encodeURI("/jokes/random/" + numberOfJokes + "?limitTo=[" + categoryList.join() + "]");
        var req = nodeFetch(BASE_URL + url);
        
        req.then(function(res) {
            var jsonPromise = res.json();

            jsonPromise.then(function(jsonResponse) {
                if (jsonResponse.hasOwnProperty('type') && jsonResponse.type == SUCCESSFUL_API_RESPONSE && jsonResponse.hasOwnProperty('value') && jsonResponse.value instanceof Array) {
                    resolve(jsonResponse.value);
                }

                else {
                    reject("API Call Response not successful !!!");
                }
            }).catch(function(err) {
                reject("JSON Parsig Error !!!");
            });
              
        }).catch(function(err) {
            reject("API Call Error from NodeFetch !!!");
        });
    });
};

// Inctance of the ApiFactory.
var instanceApiFactory = new ApiFactory();

// Exports only the instance of ApiFactory.
module.exports = instanceApiFactory;
