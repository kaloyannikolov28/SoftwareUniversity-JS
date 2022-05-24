function calculatorDeposits(input) {
  let ammountInvest = Number(input[0]);
  let time = Number(input[1]);
  let interest = Number(input[2]);
  let percent = interest / 100;
  let finalAmmount = ammountInvest + time * ((ammountInvest * percent) / 12);
  console.log(finalAmmount);
}
calculatorDeposits(["2350", "6", "7"]);
