function skiTrip(input) {
  const days = input[0];
  const type = input[1];
  const score = input[2];

  let nights = days - 1;
  let cost = 0;

  switch (type) {
    case "room for one person":
      cost = 18 * nights;
      break;
    case "apartment":
      if (days < 10) {
        cost = 25 * 0.7 * nights;
      } else if (days >= 10 && days <= 15) {
        cost = 25 * 0.65 * nights;
      } else {
        cost = 25 * 0.5 * nights;
      }
      break;
    case "president apartment":
      if (days < 10) {
        cost = 35 * 0.9 * nights;
      } else if (days >= 10 && days <= 15) {
        cost = 35 * 0.85 * nights;
      } else {
        cost = 35 * 0.8 * nights;
      }
      break;
  }
  switch (score) {
    case "positive":
      cost *= 1.25;
      break;
    case "negative":
      cost *= 0.9;
  }
  console.log(cost.toFixed(2));
}
