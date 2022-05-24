function vowelsSum(input) {
  let text = input[0];
  let num = 0;
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    switch (letter) {
      case "a":
        num += 1;
        break;
      case "e":
        num += 2;
        break;
      case "i":
        num += 3;
        break;
      case "o":
        num += 4;
        break;
      case "u":
        num += 5;
        break;
    }
  }
  console.log(num);
}
vowelsSum(["hello"]);
