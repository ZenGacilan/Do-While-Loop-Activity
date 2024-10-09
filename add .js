function passwordPrompt() {
  const correctPassword = "CidKagenou";
  let password;

  do {
    password = prompt("Enter your password:");

    if (password !== correctPassword) {
      console.log("Incorrect password. Please try again.");
    }
  } while (password !== correctPassword);

  console.log("Correct password! Access granted.");
}

passwordPrompt("Access Granted");
