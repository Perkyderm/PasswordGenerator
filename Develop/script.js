// Uppercase, lowercase, symbols, numbers, at least 8 characters, desired length, no more than 128, randomizer,

var possible = "";
var confirmLength = "";

function generatePassword() {
  const symbols = "'!@#$%^&*()_+{}<>:\",./?";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";

  var confirmLength = prompt(
    "How many characters would you like your password to contain?",
    "8-152"
  );
  while (confirmLength <= 7 || confirmLength > 128) {
    alert("Password length must be between 8-50 characters \n Try again");
    var confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }

  var confirmSymbols = confirm(
    "Confirm if you would like to include special characters"
  );
  var confirmUpperCase = confirm(
    "Confirm if you would like to include uppercase characters"
  );
  var confirmLowerCase = confirm(
    "Confirm if you would like to include lowercase characters"
  );
  var confirmNumbers = confirm("Confirm if you would like to include numbers");

  while (
    confirmSymbols === false &&
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmNumbers === false
  ) {
    alert("You must choose at least one parameter");
    var confirmSymbols = confirm(
      "Confirm if you would like to include special characters"
    );
    var confirmUpperCase = confirm(
      "Confirm if you would like to include uppercase characters"
    );
    var confirmLowerCase = confirm(
      "Confirm if you would like to include lowercase characters"
    );
    var confirmNumbers = confirm(
      "Confirm if you would like to include numbers"
    );
  }

  if (confirmSymbols) {
    possible = possible + symbols;
  }
  if (confirmUpperCase) {
    possible = possible + upperCase;
  }
  if (confirmLowerCase) {
    possible = possible + lowerCase;
  }
  if (confirmNumbers) {
    possible = possible + number;
  }

  var finishedPassword = "";

  for (i = 0; i < confirmLength; i++) {
    finishedPassword += possible[Math.floor(Math.random() * possible.length)];
  }
  return finishedPassword;
}

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
