function cleverLily(input) {
  let age = Number(input[0]);
  let washMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let tempMoney = 10;
  let money = 0;
  let toyCount = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += tempMoney;
      tempMoney += 10;
      money -= 1;
    } else {
      toyCount++;
    }
  }
  money += toyCount * toyPrice;
  let difference = Math.abs(money - washMachinePrice);
  if (money >= washMachinePrice) {
    console.log(`Yes! ${difference.toFixed(2)}`);
  } else {
    console.log(`No! ${difference.toFixed(2)}`);
  }
}
