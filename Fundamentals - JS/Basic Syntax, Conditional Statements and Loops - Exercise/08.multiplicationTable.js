function multiplicationTable(num) {
  for (let i = 1; i <= num; i++) {
    let result = num * i;
    console.log(`${num} X ${i} = ${result}`);
  }
}
multiplicationTable(5);
