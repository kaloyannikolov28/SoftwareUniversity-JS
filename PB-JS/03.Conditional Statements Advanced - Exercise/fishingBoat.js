function fishingBoat(input) {
  const budget = Number(input[0]);
  const season = input[1];
  const numPeople = Number(input[2]);

  if (season === "Spring") {
    cost = 3000;
  } else if (season === "Summer") {
    cost = 4200;
  } else if (season === "Winter") {
    cost = 2600;
  } else if (season === "Autumn") {
    cost = 4200;
  }

  if (numPeople <= 6) {
    cost *= 0.9;
  } else if (numPeople <= 11) {
    cost *= 0.85;
  } else {
    cost *= 0.75;
  }

  switch (season) {
    case "Spring":
    case "Summer":
    case "Winter":
      if (numPeople % 2 == 0) {
        cost *= 0.95;
      }
      break;
    case "Autumn":
      cost = cost;
      break;
  }

  moneyLeft = Math.abs(budget - cost);
  if (cost <= budget) {
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`);
  }
}
fishingBoat(["2000", "Winter", "13"]);
