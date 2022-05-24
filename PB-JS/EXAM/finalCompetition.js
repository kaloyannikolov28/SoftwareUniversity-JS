function finalCompetition(input) {
  let numDancers = Number(input[0]);
  let numPoints = Number(input[1]);
  let season = input[2];
  let place = input[3];

  let moneyWon = 0;
  let charityMoney = 0;
  let moneyPerDancer = 0;

  if (place === "Bulgaria") {
    moneyWon = numDancers * numPoints;
    switch (season) {
      case "summer":
        moneyWon *= 0.95;
        break;
      case "winter":
        moneyWon *= 0.92;
        break;
    }
  } else {
    moneyWon = numDancers * numPoints * 1.5;
    switch (season) {
      case "summer":
        moneyWon *= 0.9;
        break;
      case "winter":
        moneyWon *= 0.85;
        break;
    }
  }
  charityMoney = moneyWon * 0.75;
  moneyPerDancer = (moneyWon * 0.25) / numDancers;

  console.log(`Charity - ${charityMoney.toFixed(2)}`);
  console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
finalCompetition(["1", "89.5", "summer", "Abroad"]);
