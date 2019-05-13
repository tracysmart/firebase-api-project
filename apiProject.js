var colorMatch = document.querySelector("ul");
let baseURL = 'https://www.rijksmuseum.en/api/en/';
let key = '4Au0DeZs';
let url;

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
let pageNumber = 0;
let displayNav = false;
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

function nextPage(){
  console.log("Next button clicked");
}

function previousPage(){
  console.log("Previous button clicked");
}

//RESULTS SECTION
const section = document.querySelector('section');

let subButton = document.querySelector('.submit');
subButton.addEventListener('click', fetchData);

function fetchData(event) {
  event.preventDefault();

  // url = `${baseURL}/?key=${key}&format=json`;
  url = 'https://www.rijksmuseum.nl/api/en/collection/?key=4Au0DeZs&format=json';

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      displayResults(myJson);
    })
    .catch(err => {
      console.log("you have an error.");
    })
}

// function displayResults(myJson) {
//   console.log("displayResults", myJson.artObjects);
//   const artArray = myJson.artObjects;
//   for(i = 0; i < artArray.length; i++){
//     console.log(artArray[i].headerImage.url);
//   }
// }

function displayResults(myJson) {
  console.log("displayResults", myJson.artObjects);
  const artArray = myJson.artObjects;
  var out = "";
  for(i = 0; i < artArray.length; i++) {
    console.log(artArray[i].headerImage.url);
      out += '<a href="' + artArray[i].headerImage.url + '">' + artArray[i].headerImage.url.display + '</a><br>';
  }
  document.getElementById("putStuffHere").innerHTML = out
  displayResults(artArray)
}



