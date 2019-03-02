require("dotenv").config();

var keys = require("./keys");
const fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
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
    var search = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
    axios.get(search)
    .then(response => {
        for (i = 1; i < response.data.length; i++) {
            var venue = response.data[i].venue.name;
            var city = response.data[i].venue.city;
            var date = moment(response.data[i].datetime).format(
              "MMMM Do YYYY, h:mm a"
            );
            console.log("Show #" + i);
            console.log("Venue :" + venue);
            console.log("City: " + city);
            console.log("Date: " + date);
        }
    })
    .catch(error => {
        console.log(error);
    });
}

function spotifyThis() {
    spotify.search({ type: 'track', query: query }, function(err, data) {
        if (err) {
            console.log("title: " + response.data.Title);
            console.log("released in " + response.data.Year);
            console.log("imdb: " + response.data.Ratings[0].Value);
            console.log("rotten tomatoes: " + response.data.Ratings[1].Value);
            console.log("was produced in " + response.data.Country);
            console.log("languages: " + response.data.Language);
            console.log("plot: " + response.data.Plot);
            console.log("cast is : " + response.data.Actors);
        }
    //console.log(data);
    });
}

function movieThis() {
    var search = "http://www.omdbapi.com/?apikey=trilogy&s=" + query;
    axios.get(search)
    .then(response => {
        console.log(response);
    })
      .catch(error => {
        console.log(error);
    });
}

function doWhat() {
    fs.readFile("./random.txt", "utf-8", function(err, song) {
        spotify.search({ type: 'track', query: song }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
        console.log(data);
        });
    });
}