
var nodeFetch = require('node-fetch');

// Base url for the API.
const BASE_URL = "http://api.icndb.com";
// Successful API response keyword.
const SUCCESSFUL_API_RESPONSE = "success";

/** Class has functions to fetch data from the API. 
 *  @Singleton class
*/
class ApiFactory {

    /**
     * Fetches jokes from the API.
     * @param {number} numberOfJokes - number of Jokes
     * @param {string array} categoryList - list of joke categories.
     * @return {Promise} Promise for fetchJokes.
     */
    fetchJokes (numberOfJokes, categoryList) {
        return Promise.resolve() 
        .then(() => {
            const url = encodeURI("/jokes/random/" + numberOfJokes + "?limitTo=[" + categoryList.join() + "]");
            return nodeFetch(BASE_URL + url);
        })
        .then(res => {
            return res.json();
        })
        .then(jsonResponse => {
            if (jsonResponse.hasOwnProperty('type') && jsonResponse.type == SUCCESSFUL_API_RESPONSE && jsonResponse.hasOwnProperty('value') && jsonResponse.value instanceof Array) {
                return jsonResponse.value;
            }
        })
        .catch(err => {
            console.log("Error in fetchJokes()");
        });
    }
}

// Instance of the ApiFactory.
var instanceApiFactory = new ApiFactory();

// Exports the only instance of ApiFactory.
module.exports = instanceApiFactory;
