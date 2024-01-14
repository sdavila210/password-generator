// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This function is called at the bottom of code to actually write the generated password to the password input
function generatePassword () {

//creates function that holds code to generate password. This will be called once password is generated.
function generatePassword () {

// Defines the characters for the 4 criteria: lowercase letters, uppercase letters, numbers, and special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&()_+~`|}{[]:;?><,./-=";

// Prompts the window which asks the user how many characters they would like for the password. Using prompt allows the user to input a number.
var passwordLength = prompt("How many characters would you like your password to contain? Please enter value between 8 and 128.");

// This is the logic that will create an alert if the user inputs a number less than 8 or greater than 128.
if (passwordLength < 8 || passwordLength > 128) {
  alert("Invalid password length. Please enter a number between 8 and 128.");
  return;
}

// Prompts the windows that allows the user to select which characters types to include in the password. Used confirm for OK and CANCEL to appear.
var includeLower = confirm("Would you like to include lowercase characters? Click OK for YES or CANCEL for NO.");
var includeUpper = confirm("Would you like to include uppercase characters? Click OK for YES or CANCEL for NO.");
var includeNumber = confirm("Would you like to include numeric characters? Click OK for YES or CANCEL for NO.");
var includeSpecial = confirm("Would you like to include special characters? Click OK for YES or CANCEL for NO.");

// If you click cancel for all character types, this alert will pop up asking you to select at least one character type.
if (!includeLower && !includeUpper && !includeNumber && !includeSpecial) {
  alert("Please select at least one character type.");
  return;
}

// Build the character set based on selected criteria
var characterSet = "";
if (includeLower) {
  characterSet += lowercase;
}
if (includeUpper) {
  characterSet += uppercase;
}
if (includeNumber) {
  characterSet += numbers;
}
if (includeSpecial) {
  characterSet += special;
}

// Using a for loop and randomizing the characterSet to created a random password
var password = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * characterSet.length);
  password += characterSet[randomIndex];
}

// Returns the the password that has been generated 
return password;
}


// Calls the generatePassword function
var password = generatePassword();

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (makes the event happen upon clicking the button)
generateBtn.addEventListener("click", writePassword);