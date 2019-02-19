require("dotenv").config();

var keys = require("./keys");

var axios = require("axios");
var spotify = require("node-spotify-api");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var query = process.argv[3];

switch (action) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhat();
        break;
    default:
        console.log("Invalid command");
}

function concertThis() {

}

function spotifyThis() {

}

function movieThis() {

}

function doWhat() {

}