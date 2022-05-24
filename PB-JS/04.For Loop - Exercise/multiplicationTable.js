function multiplicationTable(input) {
  let number = Number(input[0]);

  for (let i = 1; i <= 10; i++) {
    let num = i;
    let result = number * i;
    console.log(`${num} * ${number} = ${result}`);
  }
}
multiplicationTable(["5"]);
