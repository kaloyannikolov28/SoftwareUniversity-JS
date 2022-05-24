function multiplicationTable(input) {
  let number = "" + input[0];
  let n1 = 0;
  let n2 = 0;
  let n3 = 0;

  for (let i = 0; i < number.length; ++i) {
    n1 = Number(number[i]);
    i++;
    n2 = Number(number[i]);
    i++;
    n3 = Number(number[i]);
    i++;
  }
  for (let x = 1; x <= n3; x++) {
    for (let y = 1; y <= n2; y++) {
      for (let z = 1; z <= n1; z++) {
        console.log(`${x} * ${y} * ${z} = ${x * y * z};`);
      }
    }
  }
}
multiplicationTable(["432"]);
