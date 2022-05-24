function shopping(input) {
  const budget = Number(input[0]);
  const numVideoCards = Number(input[1]);
  const numProcessors = Number(input[2]);
  const numRam = Number(input[3]);

  const priceVideoCards = 250;
  let priceProcessors =
    numProcessors * (numVideoCards * priceVideoCards * 0.35);
  let priceRam = numRam * (numVideoCards * priceVideoCards * 0.1);
  let totalPrice = priceVideoCards * numVideoCards + priceProcessors + priceRam;
  if (numVideoCards > numProcessors) {
    totalPrice *= 0.85;
  }
  let moneyLeft = Math.abs(budget - totalPrice);

  if (totalPrice <= budget) {
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`
    );
  }
}
shopping(["920.45", "3", "1", "1"]);
