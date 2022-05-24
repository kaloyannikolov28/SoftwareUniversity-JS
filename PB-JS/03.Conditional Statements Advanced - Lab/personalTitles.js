function personalTitles(input) {
  const age = Number(input[0]);
  const sex = input[1];

  if (age < 16) {
    switch (sex) {
      case "m":
        console.log("Master");
        break;
      case "f":
        console.log("Miss");
        break;
    }
  } else {
    switch (sex) {
      case "m":
        console.log("Mr.");
        break;
      case "f":
        console.log("Ms.");
        break;
    }
  }
}
personalTitles(["12", "f"]);
