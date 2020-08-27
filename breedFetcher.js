const request = require('request');
// const breed = process.argv.slice(2);
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
// let finalurl = url + breed;
const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    if (error) {
      callback(error, body);
      // console.log("error on loading the page");
      return;
    }
    let data = JSON.parse(body);
    if (data === "") {
      // console.log("could not find the breed");
      callback(error, null);
      return;
    }
    callback(error,data[0].description);
    return;
  });
};

module.exports = fetchBreedDescription; 