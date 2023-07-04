// Assignment Code


function generatePassword() {
  var passwordLength = window.prompt("How long would you like the password? Enter a number between 8 and 128.");

  if (!passwordLength) {
    return;
  }
}






var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
