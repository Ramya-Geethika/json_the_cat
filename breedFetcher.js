const request = require('request');
const breed = process.argv.slice(2);
let url = "https://api.thecatapi.com/v1/breeds/search?q=";
let finalurl = url+breed;

request (finalurl, (error, response, body) => {
  if(error){
    console.log("error on loading the page")
    return 
  }
  let data = JSON.parse(body);
  if(data == ""){
    console.log("could not find the breed");
    return;
  }
  
console.log(data[0].description);
});


/*const request = require('request');
const args = process.argv;
const breed = args.slice(2).join(' ');

const resource = `https://api.thecatpi.com/v1/breeds/search?q=${breed}`;
request(resource, (error, response, body) => {
  if (error) {
    console.log(error.message);
    return;
  }
  let result = JSON.parse(body);
  if(result == ""){
    console.log("could not find the breed");
    return;
  }
  console.log(result[0].description);
}); */