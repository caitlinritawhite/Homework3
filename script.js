// Function to create a random index 
function getRandomNumber(limit) {
  var basicRandom = Math.random();
  var randomToLimit = basicRandom * limit;
  var randomFloored = Math.floor(randomToLimit);
  return randomFloored;
}

// This is my object containing all of my characters
var libraries = {

  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x","y","z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialChars: ["@","%","+", "?", "!", "$"]

}

//Here we are allowing our button to be clicked and display the password within the text area
var generateButton = document.getElementById("generate");

generateButton.onclick = function(){
  var generatepassword = document.getElementById("password");

  var superLibrary = [];
//Here we are gathering data from the user regarding how long/what characters belong in their password
var userLength = prompt('How long would you like your password?');

var wantLowers = confirm('Do you want the password to contain lowercase letters?');

if(wantLowers) {
  superLibrary = superLibrary.concat(libraries.lowerCase)
}

var wantUppers = confirm('Do you want the password to contain uppercase letters?');

if(wantUppers) {
  superLibrary = superLibrary.concat(libraries.upperCase)
}
   var wantNumbers = confirm('Do you want the password to contain numbers?');

   if(wantNumbers) {
    superLibrary = superLibrary.concat(libraries.numbers)
  }
var wantChar = confirm('Do you want the password to contain special characters?');

if(wantChar) {
  superLibrary = superLibrary.concat(libraries.specialChars)
}

var password = '';

//Here we are stating that if the user selects 'yes' for any of the confirms above, we will include a random element from that library
if(wantLowers) {
  var requiredLower = libraries.lowerCase [getRandomNumber(libraries.lowerCase.length)]; 

  password += requiredLower

  console.log(password)
}

if(wantUppers) {
  var requiredUpper = libraries.upperCase [getRandomNumber(libraries.upperCase.length)]; 

  password += requiredUpper

  console.log(password)
}

if(wantNumbers) {
  var requiredNumber = libraries.numbers [getRandomNumber(libraries.numbers.length)]; 

  password += requiredNumber

  console.log(password)
}

if(wantChar) {
  var requiredChar = libraries.specialChars [getRandomNumber(libraries.specialChars.length)]; 

  password += requiredChar

  console.log(password)
}




//Here we are looping the characters up to the length that the user has chosen, pulling random characters from the libraries.

for(var i=password.length; i < userLength; i++) {

  var randomChar = superLibrary [getRandomNumber(superLibrary.length)];

  password += randomChar

  console.log(password)
}

  generatepassword.value = password
}
