// Assignment Code


function generatePassword() {
  var passwordLength = window.prompt("How long would you like the password? Enter a number between 8 and 128:");

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = window.prompt("Invalid entry. Please enter a number between 8 and 128:");
  }

  var includeLowercase = window.confirm("Would you like to include lowercase letters?");
  var includeUppercase = window.confirm("Would you like to include uppercase letters?");
  var includeNumeric = window.confirm("Would you like to include numeric characters?");
  var includeSpecial = window.confirm("Would you like to include special characters?");

  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    window.alert("Please select at least one character type.");
    includeLowercase = window.confirm("Would you like to include lowercase letters?");
    includeUppercase = window.confirm("Would you like to include uppercase letters?");
    includeNumeric = window.confirm("Would you like to include numeric characters?");
    includeSpecial = window.confirm("Would you like to include special characters?");
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
