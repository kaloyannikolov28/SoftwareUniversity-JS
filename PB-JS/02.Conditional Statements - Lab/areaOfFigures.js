function areaOfFigures(input) {
  let figure = input[0];

  if (figure === "square") {
    let a = Number(input[1]);
    let result = a * a;
    console.log(result.toFixed(3));
  } else if (figure === "rectangle") {
    let a = Number(input[1]);
    let b = Number(input[2]);
    let result = a * b;
    console.log(result.toFixed(3));
  } else if (figure === "circle") {
    let a = Number(input[1]);
    let result = Math.PI * Math.pow(a, 2);
    console.log(result.toFixed(3));
  } else if (figure === "triangle") {
    let a = Number(input[1]);
    let b = Number(input[2]);
    let result = (a * b) / 2;
    console.log(result.toFixed(3));
  }
}
areaOfFigures(["triangle", "4.5", "20"]);
