const request = require('request');
const breed = process.argv.slice(2);
let url = "https://api.thecatapi.com/v1/breeds/search?q=";
let finalurl = url + breed;
let data;

request (finalurl, (error, response, body) => {
  if(error){
    console.log("error on loading the page");
  }
  data = JSON.parse(body);
  if(data == ""){
    console.log("could not find the breed");
  }
  
console.log(data[0].description);
});