// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// declare function generatePassword()
function generatePassword();

// variables holding the different characters
var uppercase = ["A", "B", "C"]
var lowercase = ["a", "b", "c"]
var special = ["!", "@", "#"]
var numeric = [1, 2, 3]
var selectedCharacters = []
// i.e uppercase = ['A', 'B', 'C']
// var selectedCharacters = []

// I need to use prompt() to gather password criteria
// var passwordLength = prompt("How many characters would you like in your password?")
var passwordLength = prompt("How many characters would you like in your password between 8-128?");

// if password length is less than 8 stop function
if (passwordLength<8) {

}

// if password length is greater than 128 stop function
if (passwordLength>128) {

}

// confirm() for uppercase letters
var uppercaseLetters = window.confirm ("Would you like to choose uppercase letters?" )
if (uppercaseLetters) {
  window.prompt("You")
  
  
}


// confirm() for lowercase letters
var lowercaseLetters = window.confirm ()
if (lowercaseLetters) {

}


// confirm() for special characters
var specialCharacters = window.confirm ()
if (specialCharacters) {

}


// confirm() for numeric characters
var numericCharacters = window.confirm ()
if (numericCharacters) {

}

// once each confirm/prompt has been answered 
// if confirms are true keep or get character type for the confirm
// if no confirm is true stop function
// if a confirm is true then concat related arr to selected characters arr
// i.e ['A', 'B', 'C', a, b, c, 1, 2, 3, %, $, #]
// var selectedCharacters = [];
// var uppercaseCharacters = ['A', 'B', 'C'];
// if(isUppercase) {
//   selectedCharacters.concat(uppercaseCharacters);
// }
// for loop based on password length prompt
// use Math.floor(Math.random() * selectedCharacters.length) to get random index of selectedCharacters
// return password text


