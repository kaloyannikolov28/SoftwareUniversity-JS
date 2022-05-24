function password(input) {
  let passIn = String(input[0]);
  let pass = String("s3cr3t!P@ssw0rd");

  if (passIn.includes(pass)) {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
password(["s3cr3t!P@ssw0rd"]);
