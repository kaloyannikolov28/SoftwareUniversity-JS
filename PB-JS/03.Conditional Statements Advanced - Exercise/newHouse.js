function newHouse(input) {
  const type = input[0];
  const ammount = Number(input[1]);
  const budget = Number(input[2]);
  let totalPrice = 0;
  if (type === "Roses") {
    if (ammount > 80) {
      totalPrice = 5 * ammount * 0.9;
    } else {
      totalPrice = 5 * ammount;
    }
  } else if (type === "Dahlias") {
    if (ammount > 90) {
      totalPrice = 3.80 * ammount * 0.85;
    } else {
      totalPrice = 3.80 * ammount;
    }
  } else if (type === "Tulips") {
    if (ammount > 80) {
      totalPrice = 2.80 * ammount * 0.85;
    } else {
      totalPrice = 2.80;
    }
  } else if (type === "Narcissus") {
    if (ammount < 120) {
      totalPrice = 3 * ammount * 1.15;
    } else {
      totalPrice = 3 * ammount;
    }
  } else if (type === "Gladiolus") {
    if (ammount < 80) {
      totalPrice = 2.50 * ammount * 1.2;
    } else {
      totalPrice = 2.50 * ammount;
    }
  } 

  moneyLeft = Math.abs(budget - totalPrice);
  if (budget >= totalPrice) {
    console.log(
      `Hey, you have a great garden with ${ammount} ${type} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`
    );
  }
}
newHouse(["pete", "55", "0"]);
