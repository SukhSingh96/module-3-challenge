// Assignment code here
 
function generatePassword() {
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '@', '#', '$', '%', "^", '&', '*', '(', ')'];
  var possibleCharacters = [];

  // prompt input and confirmation
  numberOfCharacters = prompt("How many characters would you like in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
    
  }

  hasLowercase = confirm("Would you like lowercase characters?");
  if (hasLowercase) {
    alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  hasUppercase = confirm("Would you like uppercase characters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }

  hasNumbers = confirm("Would you like to include numbers?");
  if (hasNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  hasSpecial = confirm("Would you like to include special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

  // group together selected criteria
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // generate random characters from selected criteria
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
