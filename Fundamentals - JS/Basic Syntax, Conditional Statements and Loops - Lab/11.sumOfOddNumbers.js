function sumOfOddNumbers(n) {
  let i = 1;
  let num = 1;
  let sum = 0;
  while (i <= n) {
    sum += num;
    console.log(num);
    num += 2;
    i++;
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
